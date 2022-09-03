import { useState } from "react";
import Header from "../Common/Header";

export default function HomePage() {
  const [toggleDashboard, setToggleDashboard] = useState(false);

  // sample data
  const username = "Pranshu";
  const healthReportsCount = 10;

  return (
    <div className="flex">
      <div className={`${toggleDashboard ? "absolute" : ""} p-4 md:hidden`}>
        <i
          className={`${
            toggleDashboard ? "fa fa-remove" : "fa fa-bars text-[#184E77]"
          } relative text-[#D9ED92]`}
          onClick={() => setToggleDashboard(!toggleDashboard)}
        ></i>
      </div>
      <div className="min-h-screen">
        <Header toggleDashboard={toggleDashboard} />
      </div>
      <div className="p-4 w-full text-[#184E77]">
        <div className="pb-6">
          <p className="text-2xl font-bold">Hi, {username}</p>
        </div>
        <div className="flex flex-wrap gap-4 w-full">
          <div className="flex flex-col gap-2 justify-center items-center bg-[#B5E48C] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow">
            <i className="text-xl fas fa-hospital text-[#D9ED92] bg-[#34A0A4] p-2 rounded-full shadow"></i>
            <p className="text-3xl font-bold text-[#184E77]">
              {healthReportsCount}
            </p>
            <p className="text-[#34A0A4]">Health Reports</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[#B5E48C] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow">
            <i className="text-xl fas fa-hospital text-[#D9ED92] bg-[#34A0A4] p-2 rounded-full shadow"></i>
            <p className="text-3xl font-bold text-[#184E77]">
              {healthReportsCount}
            </p>
            <p className="text-[#34A0A4]">Complaint Requests</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[#B5E48C] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow">
            <i className="text-xl fas fa-hospital text-[#D9ED92] bg-[#34A0A4] p-2 rounded-full shadow"></i>
            <p className="text-3xl font-bold text-[#184E77]">
              {healthReportsCount}
            </p>
            <p className="text-[#34A0A4]">Room Cleaning</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[#B5E48C] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow">
            <i className="text-xl fas fa-hospital text-[#D9ED92] bg-[#34A0A4] p-2 rounded-full shadow"></i>
            <p className="text-3xl font-bold text-[#184E77]">
              {healthReportsCount}
            </p>
            <p className="text-[#34A0A4]">Leave Requests</p>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-3xl font-medium">Pending Leave Requests:</p>
          ...
        </div>
        <div className="pt-4">
          <p className="text-3xl font-medium">Pending Complaints:</p>
          ...
        </div>
        <div className="pt-4">
          <p className="text-3xl font-medium">Upcoming Room Cleaning:</p>
          ...
        </div>
      </div>
    </div>
  );
}
