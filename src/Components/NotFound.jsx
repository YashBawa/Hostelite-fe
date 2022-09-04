import image from "../Images/404.png";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <img src={image} width={"50%"} alt="404" />
    </div>
  );
}
