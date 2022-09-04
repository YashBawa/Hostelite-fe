// import { useState } from "react";
import { Link } from "raviger";

export default function Dashboard() {
  const notificationsCount = 0;
  //   const [notificationsCount, setNotificationsCount] = useState(0);

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-[#184E77] text-[#D9ED92]">
        <div className="flex flex-col top-0 left-0 w-64 bg-[#184E77] h-full border-r">
          <div className="flex items-center justify-center h-14 border-b">
            <div className="text-2xl font-bold">Hostelite</div>
          </div>
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li>
                <Link
                  href="/home"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:font-bold transition duration-300 hover:bg-[#D9ED92] text-[#D9ED92] hover:text-[#184E77] hover:border-[#168AAD] border-l-4 border-transparent  pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/health"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:font-bold hover:bg-[#D9ED92] text-[#D9ED92] hover:text-[#184E77] hover:border-[#168AAD] border-l-4 border-transparent pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <i className="fas fa-hospital"></i>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Health Report
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/complaint"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:font-bold transition duration-300 hover:bg-[#D9ED92] text-[#D9ED92] hover:text-[#184E77] hover:border-[#168AAD] border-l-4 border-transparent pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <i className="fa fa-exclamation-triangle"></i>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Complaint Request
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/clean"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:font-bold transition duration-300 hover:bg-[#D9ED92] text-[#D9ED92] hover:text-[#184E77] hover:border-[#168AAD] border-l-4 border-transparent pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <i className="fas fa-broom"></i>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Room Cleaning
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/leave"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:font-bold transition duration-300 hover:bg-[#D9ED92] text-[#D9ED92] hover:text-[#184E77] hover:border-[#168AAD] border-l-4 border-transparent pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <i className="fa fa-external-link"></i>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Leave Request
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/chatbot"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:font-bold transition duration-300 hover:bg-[#D9ED92] text-[#D9ED92] hover:text-[#184E77] hover:border-[#168AAD] border-l-4 border-transparent pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Chatbot
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/notification"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:font-bold transition duration-300 hover:bg-[#D9ED92] text-[#D9ED92] hover:text-[#184E77] hover:border-[#168AAD] border-l-4 border-transparent pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Notifications
                  </span>
                  {notificationsCount > 0 && (
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                      {notificationsCount}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:font-bold transition duration-300 hover:bg-[#D9ED92] text-[#D9ED92] hover:text-[#184E77] hover:border-[#168AAD] border-l-4 border-transparent pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Profile
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/logout"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:font-bold transition duration-300 hover:bg-[#D9ED92] text-[#D9ED92] hover:text-[#184E77] hover:border-[#168AAD] border-l-4 border-transparent pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Logout
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
