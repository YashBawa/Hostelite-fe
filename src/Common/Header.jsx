import logo from "../Images/logo.png";
export default function Header() {
  return (
    <div className="bg-red-500">
      <div className="flex flex-row gap-2 justify-between bg-[#A0E8AF]">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <p className="text-6xl font-extrabold text-">Hostelite</p>
        </div>
      </div>
    </div>
  );
}
