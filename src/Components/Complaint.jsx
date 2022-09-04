import { Button } from "@mui/material";
import { useState } from "react";
import SlideBar from "../Common/Elements/SlideBar";
import Header from "../Common/Header";
import Modal from "../Common/Modal";
import NewComplaint from "./NewComplaints";

export default function Complaint() {
  const [toggleDashboard, setToggleDashboard] = useState(false);
  const [newComplaint, setNewComplaint] = useState(false);

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
          <i className="fas fa-exclamation-triangle"></i>
          &nbsp; Complaint
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 justify-center items-center bg-[#B5E48C] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow">
            <p className="text-7xl font-bold text-[#184E77]">{5}</p>
            <p className="text-[#34A0A4]">Actice Complaints</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center bg-[#e48c8c] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow">
            <p className="text-7xl font-bold text-[#184E77]">{2}</p>
            <p className="text-[#3c0e0e]">Closed Complaints</p>
          </div>
        </div>
        <div>
          <div className="flex justify-end p-2">
            <Button onClick={() => setNewComplaint(true)} variant="contained">
              <i className="fa fa-plus"></i>&nbsp; New Complaint
            </Button>
          </div>
          <div className="w-full pt-4">
            <SlideBar className="w-full" />
          </div>
        </div>
      </div>
      <Modal open={newComplaint} setOpen={() => setNewComplaint(false)}>
        <NewComplaint close={() => setNewComplaint(false)} />
      </Modal>
    </div>
  );
}
