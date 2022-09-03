import all from "../Images/all.png";
import verify from "../Images/verify.png";
import online from "../Images/online.png";
import paper from "../Images/paper.png";
import medical from "../Images/medical.png";

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-[#D9ED92]  to-[#52B69A] min-h-screen p-2 text-[#168AAD]">
      {/* <Header /> */}
      <div>
        <div className="flex text-6xl font-extrabold justify-center items-center w-full text-[#184E77]">
          {/* <img width={50} src={logo} alt="" /> */}
          <p>Hostelite</p>
        </div>
        <div className="pt-6">
          <p className="text-3xl flex justify-center font-medium">
            One place to manage all the paperwork you have in a hostel
          </p>
        </div>
        <div className="flex flex-col justify-center items-center pt-6">
          <a
            href="/login"
            className="bg-[#1E6091] text-[#D9ED92] rounded-lg p-2 px-6 shadow-md shadow-[#1A759F] hover:shadow-lg hover:scale-110 hover:shadow-[#1A759F] hover:bg-blue-900 transition duration-300"
          >
            Login
          </a>
          <p className="pt-2">
            New user?{" "}
            <a
              href="/signup"
              className="text-blue-500 hover:text-blue-700 font-bold transition duration-300"
            >
              Signup
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 text-[#1E6091]">
          <div className="flex gap-2 flex-col-reverse md:flex-row justrify-between">
            <p className="text-2xl font-medium flex justify-center items-center w-full md:w-1/2">
              Report any health issues instantly using our platform.
            </p>
            <img src={medical} alt="Verification" className="w-full md:w-1/2" />
          </div>
          <div className="flex gap-2 flex-col md:flex-row justrify-between">
            <img src={all} alt="Management" className="w-full md:w-1/2" />
            <p className="text-2xl font-medium flex justify-center items-center w-full md:w-1/2">
              Manage all the documents in online mode.
            </p>
          </div>
          <div className="flex gap-2 flex-col-reverse md:flex-row justrify-between">
            <p className="text-2xl font-medium flex justify-center items-center w-full md:w-1/2">
              Verify all the documents uploaded using our platform.
            </p>
            <img src={verify} alt="Verification" className="w-full md:w-1/2" />
          </div>
          <div className="flex gap-2 flex-col md:flex-row justrify-between">
            <img src={online} alt="Database" className="w-full md:w-1/2" />
            <p className="text-2xl font-medium flex justify-center items-center w-full md:w-1/2">
              Store all students records and health reports in the database.
            </p>
          </div>
          <div className="flex gap-2 flex-col-reverse md:flex-row justrify-between p-6">
            <p className="text-2xl font-medium flex justify-center items-center w-full md:w-1/2">
              Forget the conventional method of noting everything including
              health reports on paper.
            </p>
            <img src={paper} alt="Paper" className="w-full md:w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
