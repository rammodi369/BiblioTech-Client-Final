// import React from 'react'
// import {Home, BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
// import { Link } from 'react-router-dom'

// export default function Sidebar() {
//   return (
//     <aside className="flex h-screen  flex-col overflow-y-auto border-r bg-black px-5 py-8">
//      <div className='flex'>
//      <a href="/">
//         <svg
//           width="40"
//           height="46"
//           viewBox="0 0 50 56"
//           fill="FFFFFF"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
//             fill="#FFFFFF"
//           />
          
//         </svg>
//       </a>
//       <Link to ='/' className="px-3 text-sm font-semibold uppercase text-white mt-3">Biblio Tech</Link>
//      </div>
//       <div className="mt-6 flex flex-1 flex-col justify-between">
//         <nav className="-mx-3 space-y-6 ">
//              <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
//               href="/"
//              >
//               <Home className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Home</span>
//              </a>
//           <div className="space-y-3 ">
//             <label className="px-3 text-xs font-semibold uppercase text-white">analytics</label>
//             <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
//               href="/librarian"
//             >
//               <BarChart className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Dashboard</span>
//             </a>
//             {/* <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="/librarian/finance"
//             >
//               <Wallet className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Finance </span>
//             </a> */}
//           </div>
//           <div className="space-y-3 ">
//             <label className="px-3 text-xs font-semibold uppercase text-white">content</label>
//             <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="/librarian/add-books"
//             >
//               <Newspaper className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Add Books</span>
//             </a>
//             <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="/librarian/requests"
//             >
//               <BellRing className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Requests</span>
//             </a>
//             <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="/librarian/book-history"
//             >
//               <Paperclip className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Book History</span>
//             </a>
//             <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="/librarian/users-history"
//             >
//               <Paperclip className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Users History</span>
//             </a>
//           </div>

//           <div className="space-y-3 ">
//             <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
//             <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="/librarian/edit-books"
//             >
//               <Brush className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Edit Books</span>
//             </a>
//             {/* <a
//               className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//               href="/librarian/profile"
//             >
//               <Wrench className="h-5 w-5" aria-hidden="true" />
//               <span className="mx-2 text-sm font-medium">Profile Setting</span>
//             </a> */}
//           </div>
//         </nav>
//       </div>
//     </aside>
//   )
// }
import React from 'react';
import { Home, BarChart, Newspaper, BellRing, Paperclip, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="flex h-screen flex-col overflow-y-auto border-r bg-gradient-to-b from-gray-900 to-black px-5 py-8">
      <div className="flex items-center">
        <a href="/">
          <svg
            width="40"
            height="46"
            viewBox="0 0 50 56"
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
              fill="#FFFFFF"
            />
          </svg>
        </a>
        <Link to="/" className="px-3 text-sm font-semibold uppercase text-white mt-3">
          Biblio Tech
        </Link>
      </div>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6">
          <a
            className="flex transform items-center rounded-lg px-3 py-2 text-gray-300 transition-colors duration-300 hover:bg-gray-800 hover:text-white"
            href="/"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            <span className="mx-2 text-sm font-medium">Home</span>
          </a>
          <div className="space-y-3">
            <label className="px-3 text-xs font-semibold uppercase text-gray-400">Analytics</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-300 transition-colors duration-300 hover:bg-gray-800 hover:text-white"
              href="/librarian"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </a>
          </div>
          <div className="space-y-3">
            <label className="px-3 text-xs font-semibold uppercase text-gray-400">Content</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-300 transition-colors duration-300 hover:bg-gray-800 hover:text-white"
              href="/librarian/add-books"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Add Books</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-300 transition-colors duration-300 hover:bg-gray-800 hover:text-white"
              href="/librarian/add-question"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Add Question</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-300 transition-colors duration-300 hover:bg-gray-800 hover:text-white"
              href="/librarian/add-material"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Add Material</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-300 transition-colors duration-300 hover:bg-gray-800 hover:text-white"
              href="/librarian/requests"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Requests</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-300 transition-colors duration-300 hover:bg-gray-800 hover:text-white"
              href="/librarian/book-history"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Book History</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-300 transition-colors duration-300 hover:bg-gray-800 hover:text-white"
              href="/librarian/users-history"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Users History</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-300 transition-colors duration-300 hover:bg-gray-800 hover:text-white"
              href="/librarian/borrowing-history"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Borrowing History</span>
            </a>
          </div>
          <div className="space-y-3">
            <label className="px-3 text-xs font-semibold uppercase text-gray-400">Customization</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-300 transition-colors duration-300 hover:bg-gray-800 hover:text-white"
              href="/librarian/edit-books"
            >
              <Brush className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Edit Books</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
