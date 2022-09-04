import { useState } from "react";
import Header from "../Common/Header";
import { Button } from "@mui/material";
import SlideBar from "../Common/Elements/SlideBar";
import { navigate } from "raviger";

export default function HealthReport() {
  const [toggleDashboard, setToggleDashboard] = useState(false);
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
        <p className="text-5xl font-bold pb-4">
          <i className="fas fa-hospital"></i>
          &nbsp; Health Report
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 justify-center items-center bg-[#B5E48C] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow">
            <p className="text-4xl font-bold text-[#184E77]">
              {healthReportsCount}
            </p>
            <p className="text-[#34A0A4]">Actice Health Reports</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[#e48c8c] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow">
            <p className="text-4xl font-bold text-[#184E77]">
              {healthReportsCount}
            </p>
            <p className="text-[#3c0e0e]">Closed Health Reports</p>
          </div>
        </div>
        <div>
          <div className="flex justify-end p-2">
            <Button onClick={() => navigate("/health/new")} variant="contained">
              <i className="fa fa-plus"></i>&nbsp; New Health Report
            </Button>
          </div>
          <div className="w-full pt-4">
            <SlideBar className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
