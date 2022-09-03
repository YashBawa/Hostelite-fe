import logo from "../Images/logo.png";
// import Header from "../Common/Header";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#EDEAD0]  to-[#A0E8AF] min-h-screen p-2 text-[#86BAA1]">
      {/* <Header /> */}
      <div>
        <div className="flex text-6xl font-extrabold justify-center items-center w-full text-[#3AB795]">
          {/* <img width={50} src={logo} alt="" /> */}
          <p>Hostelite</p>
        </div>
        <div className="pt-6">
          <p className="text-3xl flex justify-center ">
            One place to manage all the paperwork you have in a hostel{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
