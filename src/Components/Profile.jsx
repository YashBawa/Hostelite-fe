import { useEffect, useState } from "react";
import { me } from "../ApiUtils";
import Header from "../Common/Header";

export default function Profile() {
  const [toggleDashboard, setToggleDashboard] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    me().then((data) => {
      setUsername(data.username);
    });
  }, []);

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
        <p className="text-5xl font-bold">
          <i className="fa fa-user"></i> Profile
        </p>
        <div className="p-6 text-2xl flex flex-col gap-6 pt-12">
          <p>
            Username: <b>{username}</b>
          </p>
          <p>
            Room No: <b>{220}</b>
          </p>
          <p>
            College: <b>{"The LNM Institute of Information Technology"}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
