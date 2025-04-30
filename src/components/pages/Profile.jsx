// import React from 'react';
// import { useSelector, } from 'react-redux';
// import { UserCircle } from 'lucide-react';

// const UserProfile = () => {
//   const { user } = useSelector((state) => state.user);
//  console.log(user);
//  console.log(user.email)
//   return (
//     <div className="container mx-auto px-4 py-8 mt-16 mb-10 relative z-[-10]">
//      <div className='flex items-center justify-center'> <h2 className="text-3xl font-semibold mt-4 mb-4 text-gray-700 items-center">Profile Page </h2></div>
//       <div className="flex justify-center">
//         <div className="max-w-lg w-full lg:w-2/3 px-4 py-6">
//           <div className="bg-white rounded-lg overflow-hidden transform transition-transform hover:scale-105 shadow-2xl">
//             <div className="h-64 bg-gray-300 flex items-center justify-center">
//               <UserCircle size={80} className="text-gray-600" />
//             </div>
//             <div className="p-6">
//               <h1 className="text-4xl font-semibold mb-4 text-center">{user.username}'s Profile</h1>
//               <div className="mb-4 text-center">
//                 <p className="text-lg text-gray-700"><strong>Email:</strong> {user.email}</p>
//                 <p className="text-lg text-gray-700"><strong>Role:</strong> {user.role}</p>
//               </div>
//               <div className="mt-6">
//                 <h2 className="text-xl font-semibold mb-4 text-gray-700">Books Borrowed:</h2>
//                 <ul className="list-disc ml-8">
//                 {user.booksBorrowed?.length > 0 ? (
//                   <>{user.booksBorrowed?.map((book) => (
//                     <li key={book._id} className="text-lg text-gray-600">{book.title}</li>
//                   ))}</>) : (
//                     <div className="text-lg text-gray-600">No books borrowed yet!!</div>
//                 )}
//                 </ul>
//               </div>
//               <div className="mt-6">
//                 <h2 className="text-xl font-semibold mb-4 text-gray-700">Books Borrowing Currently:</h2>
//                 <ul className="list-disc ml-8">
//                 {user.booksBorrowingCurrently?.length > 0 ? (
//                   <>{user.booksBorrowingCurrently?.map((book) => (
//                     <li key={book._id} className="text-lg text-gray-600">{book.title}</li>
//                   ))}</>) : (
//                     <div className="text-lg text-gray-600">No books borrowing Currently !!</div>
//                 )}
//                 </ul>
//               </div>
//               <h2 className="text-xl font-semibold mb-4 text-gray-700 mt-5">Fine: 0
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { UserCircle, Book, Clock, DollarSign, CreditCard } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// const stripePromise = loadStripe("pk_test_51NbLkfSBLQ6uxxfTOCK2W7V1xtmplETjC6OqJ8EDo3eKDNnvvGMgKVtbK8Z6sZN7oooGajxuA9PSEXcdLBQ53BwB00E6eRCzZp");

// const UserProfile = () => {
//   const { user } = useSelector((state) => state.user);
//   const [borrowedBooks, setBorrowedBooks] = useState([]);
//   const [currentBooks, setCurrentBooks] = useState([]);
//   const [clientSecret, setClientSecret] = useState("");
//   const [userfine, setUserfine] = useState(user.fine);
//   const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchBooks = async (bookIds, setBooks) => {
//       if (!bookIds?.length) return;
//       try {
//         const response = await axios.post(
//           "https://bibliotech-server.onrender.com/api/books/by-ids",
//           { bookIds },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setBooks(response.data);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       }
//     };

//     const fineFromStorage = user.fine;
//     if (fineFromStorage !== null) {
//       setUserfine(Number(fineFromStorage));
//     }

//     fetchBooks(user.booksBorrowed, setBorrowedBooks);
//     fetchBooks(user.booksBorrowingCurrently, setCurrentBooks);
//   }, [user, token]);

//   const createPaymentIntent = async () => {
//     if (user.fine <= 0) return;

//     setIsPaymentProcessing(true);

//     try {
//       const response = await axios.post(
//         "https://bibliotech-server.onrender.com/api/auth/create-payment-intent",
//         {
//           amount: user.fine,
//           currency: "inr",
//           description: `Library fine payment for ${user.username}`,
//           user: user
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data?.clientSecret) {
//         setClientSecret(response.data.clientSecret);
//       } else {
//         console.error("Unexpected response structure:", response.data);
//       }
//     } catch (error) {
//       console.error("Error creating payment intent:", error);
//     } finally {
//       setIsPaymentProcessing(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white-200 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
//           <div className="md:flex">
//             {/* Profile Section */}
//             <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-indigo-600 p-8 flex flex-col items-center">
//               <div className="w-48 h-48 rounded-full bg-white p-2">
//                 <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-300 to-indigo-400 flex items-center justify-center overflow-hidden">
//                   {user.avatar ? (
//                     <img src={user.avatar} alt="User Avatar" className="w-full h-full object-cover rounded-full" />
//                   ) : (
//                     <UserCircle size={120} className="text-white" />
//                   )}
//                 </div>
//               </div>
//               <h1 className="mt-6 text-3xl font-bold text-white">{user.username}</h1>
//               <p className="text-lg text-indigo-200">{user.role}</p>
//               <p className="text-md text-indigo-100">{user.email}</p>
//             </div>

//             {/* Books & Payment Section */}
//             <div className="md:w-2/3 p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <ProfileSection title="Books Borrowed" icon={<Book className="h-6 w-6 text-indigo-500" />} items={borrowedBooks} />
//                 <ProfileSection title="Currently Borrowing" icon={<Clock className="h-6 w-6 text-indigo-500" />} items={currentBooks} />
//               </div>

//               {/* Fine & Payment */}
//               <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <DollarSign className="h-8 w-8 text-red-500 mr-2" />
//                     <span className="text-2xl font-semibold text-gray-700">Fine: ₹{userfine}</span>
//                   </div>
//                   <Dialog>
//                     <DialogTrigger asChild>
//                       <Button
//                         className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
//                         disabled={Number(userfine) <= 0 || isPaymentProcessing}
//                         onClick={createPaymentIntent}
//                       >
//                         <CreditCard className="h-5 w-5" />
//                         {isPaymentProcessing ? "Processing..." : "Pay Fine"}
//                       </Button>
//                     </DialogTrigger>
//                     <DialogContent className="sm:max-w-[425px]">
//                       <DialogHeader>
//                         <DialogTitle>Pay Fine</DialogTitle>
//                       </DialogHeader>
//                       {clientSecret && (
//                         <Elements stripe={stripePromise} options={{ clientSecret }}>
//                           <CheckoutForm setUserfine={setUserfine} />
//                         </Elements>
//                       )}
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProfileSection = ({ title, icon, items }) => (
//   <div className="bg-gray-50 rounded-xl p-6 shadow-md">
//     <div className="flex items-center mb-4">
//       {icon}
//       <h2 className="text-xl font-semibold text-gray-800 ml-2">{title}</h2>
//     </div>
//     {items.length > 0 ? (
//       <ul className="space-y-2">
//         {items.map((item, index) => (
//           <li key={item._id || index} className="text-gray-600">{item.title}</li>
//         ))}
//       </ul>
//     ) : (
//       <p className="text-gray-500">No items to display</p>
//     )}
//   </div>
// );

// const CheckoutForm = ({ setUserfine }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) return;

//     setIsProcessing(true);

//     const { error, paymentIntent } = await stripe.confirmPayment({
//       elements,
//       confirmParams: { return_url: window.location.origin },
//       redirect: "if_required",
//     });

//     if (error) {
//       alert(error.message);
//     } else if (paymentIntent && paymentIntent.status === "succeeded") {
//       alert("Payment successful!");
//       await axios.post(
//         "http://localhost:5000/api/auth/mark-fine-paid",
//         { userId: user._id }, // or user.id
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       localStorage.setItem("userFine", 0);
//       setUserfine(0);
//       window.location.reload(); // Optional
//     }

//     setIsProcessing(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <Button type="submit" className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white" disabled={isProcessing}>
//         {isProcessing ? "Processing..." : "Pay Now"}
//       </Button>
//     </form>
//   );
// };

// export default UserProfile;
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { UserCircle, Book, Clock, DollarSign, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const stripePromise = loadStripe("pk_test_51NbLkfSBLQ6uxxfTOCK2W7V1xtmplETjC6OqJ8EDo3eKDNnvvGMgKVtbK8Z6sZN7oooGajxuA9PSEXcdLBQ53BwB00E6eRCzZp");

const UserProfile = () => {
  const { user: reduxUser } = useSelector((state) => state.user);
  const [user, setUser] = useState(null);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [currentBooks, setCurrentBooks] = useState([]);
  const [clientSecret, setClientSecret] = useState("");
  const [userfine, setUserfine] = useState(0);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const token = localStorage.getItem("token");
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log('user ID-> '+ reduxUser.id);
        console.log('user Id -> '+ reduxUser._id);
        const ID= reduxUser.id? reduxUser.id: reduxUser._id;
        const response = await axios.get(`https://bibliotech-server.onrender.com/api/auth/user/${ID}`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = response.data;
        console.log('userdata->'+userData);
        setUser(userData);
        setUserfine(Number(userData.fine));

        fetchBooks(userData.booksBorrowed, setBorrowedBooks);
        fetchBooks(userData.booksBorrowingCurrently, setCurrentBooks);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchBooks = async (bookIds, setBooks) => {
      if (!bookIds?.length) return;
      try {
        const response = await axios.post(
          "https://bibliotech-server.onrender.com/api/books/by-ids",
          { bookIds },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchUserData();
  }, [reduxUser.id, token]);

  // const createPaymentIntent = async () => {
  //   if (userfine <= 0 || !user) return;

  //   setIsPaymentProcessing(true);

  //   try {
  //     const response = await axios.post(
  //       "https://bibliotech-server.onrender.com/api/auth/create-payment-intent",
  //       {
  //         amount: userfine,
  //         currency: "inr",
  //         description: `Library fine payment for ${user.username}`,
  //         user: user,
  //       },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );

  //     if (response.data?.clientSecret) {
  //       setClientSecret(response.data.clientSecret);
  //       setOpenDialog(true); // Open payment modal
  //     } else {
  //       console.error("Unexpected response structure:", response.data);
  //     }
  //   } catch (error) {
  //     console.error("Error creating payment intent:", error);
  //   } finally {
  //     setIsPaymentProcessing(false);
  //   }
  // };
  const createPaymentIntent = async () => {
    setError("");
    if (userfine <= 0 || !user) return;
  
    // Frontend validation
    if (userfine < 0.5) {
      setError("Minimum payment amount is ₹0.50");
      return;
    }
   console.log(userfine);
    setIsPaymentProcessing(true);
  
    try {
      const response = await axios.post(
        "https://bibliotech-server.onrender.com/api/auth/create-payment-intent",
        {
          amount: userfine , // Send amount in rupees
          currency: "inr",
          description: `Library fine payment for ${user.username}`,
          user: user,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      if (response.data?.clientSecret) {
        setClientSecret(response.data.clientSecret);
        setOpenDialog(true);
      } else {
        setError("Failed to initialize payment");
      }
    } catch (error) {
      setError(error.response?.data?.error || "Payment processing failed");
    } finally {
      setIsPaymentProcessing(false);
    }
  };
  if (!user) return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white-200 py-12 px-4 sm:px-6 lg:px-8">
    <p className="text-center mt-10 text-lg">Loading user data...</p>
    </div>
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white-200 py-12 px-4 sm:px-6 lg:px-8">
     
  {/* ... existing fine display ... */}
  {error && (
     <div className="mt-4 bg-white rounded-xl p-2 shadow-lg mb-7">
    <div className="m-4 text-red-500 text-sm">{error}</div></div>
  )}

      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="md:flex">
            {/* Profile Section */}
            <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-indigo-600 p-8 flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-white p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-300 to-indigo-400 flex items-center justify-center overflow-hidden">
                  {user.avatar ? (
                    <img src={user.avatar} alt="User Avatar" className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <UserCircle size={120} className="text-white" />
                  )}
                </div>
              </div>
              <h1 className="mt-6 text-3xl font-bold text-white">{user.username}</h1>
              <p className="text-lg text-indigo-200">{user.role}</p>
              <p className="text-md text-indigo-100">{user.email}</p>
            </div>

            {/* Books & Payment Section */}
            <div className="md:w-2/3 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileSection title="Books Borrowed" icon={<Book className="h-6 w-6 text-indigo-500" />} items={borrowedBooks} />
                <ProfileSection title="Currently Borrowing" icon={<Clock className="h-6 w-6 text-indigo-500" />} items={currentBooks} />
              </div>

              {/* Fine & Payment */}
              <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-8 w-8 text-red-500 mr-2" />
                    <span className="text-2xl font-semibold text-gray-700">Fine: ₹{userfine}</span>
                  </div>
                  <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger asChild>
                      <Button
                        className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
                        disabled={Number(userfine) <= 0 || isPaymentProcessing}
                        onClick={createPaymentIntent}
                      >
                        <CreditCard className="h-5 w-5" />
                        {isPaymentProcessing ? "Processing..." : "Pay Fine"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Pay Fine</DialogTitle>
                      </DialogHeader>
                      {clientSecret && (
                        <Elements stripe={stripePromise} options={{ clientSecret }}>
                          <CheckoutForm
                            userId={user._id}
                            setUserfine={setUserfine}
                            setOpenDialog={setOpenDialog}
                          />
                        </Elements>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

const ProfileSection = ({ title, icon, items }) => (
  <div className="bg-gray-50 rounded-xl p-6 shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-semibold text-gray-800 ml-2">{title}</h2>
    </div>
    {items.length > 0 ? (
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={item._id || index} className="text-gray-600">{item.title}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">No items to display</p>
    )}
  </div>
);

const CheckoutForm = ({ userId, setUserfine, setOpenDialog }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const token = localStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
      redirect: "if_required",
    });

    if (error) {
      alert(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      alert("Payment successful!");
      await axios.post(
        "https://bibliotech-server.onrender.com/api/auth/mark-fine-paid",
        { userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUserfine(0);
      setOpenDialog(false); // Close the modal
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button type="submit" className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white" disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
};

export default UserProfile;
