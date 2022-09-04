import { Button } from "@mui/material";
import { useState } from "react";
import Header from "../Common/Header";
import Modal from "../Common/Modal";
import NewLeaveRequest from "./NewLeaveRequest";

export default function LeaveRequest() {
  const [toggleDashboard, setToggleDashboard] = useState(false);
  const [newLeave, setNewLeave] = useState(false);

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
      <div className="w-full text-[#184E77]">
        <div className="p-4 w-full text-[#184E77]">
          <p className="text-5xl font-bold pb-4">
            <i className="fas fa-external-link"></i>
            &nbsp; Leave Request
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-2 justify-center items-center bg-[#B5E48C] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow">
              <p className="text-7xl font-bold text-[#184E77]">{1}</p>
              <p className="text-[#34A0A4]">Actice Leave Requests</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center bg-[#e48c8c] p-6 px-16 w-full md:w-1/5 flex-grow rounded-lg shadow">
              <p className="text-7xl font-bold text-[#184E77]">{3}</p>
              <p className="text-[#3c0e0e]">Closed Leave Requests</p>
            </div>
          </div>
          <div>
            <div className="flex justify-end p-2">
              <Button onClick={() => setNewLeave(true)} variant="contained">
                <i className="fa fa-plus"></i>&nbsp; New Leave Request
              </Button>
            </div>
          </div>
          <div className="bg-[#99D98C] p-4 rounded-lg w-fit text-2xl">
            Visiting Place: <b>Banglore</b> <br /> Reason: <b>Meso Hackathon</b>{" "}
            <br /> From: <b>2-08-2022</b> <br /> To: <b>5-08-2022</b>
            <p className="flex items-center gap-4">
              Status:{" "}
              <p className="flex justify-center items-center bg-yellow-500 rounded-full p-2 text-white font-bold">
                Pending
              </p>
            </p>
          </div>
        </div>
        <Modal open={newLeave} setOpen={() => setNewLeave(false)}>
          <NewLeaveRequest close={() => setNewLeave(false)} />
        </Modal>
      </div>
    </div>
  );
}
