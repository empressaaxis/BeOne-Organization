import Image from "next/image";
import NavBar from "src/components/NavBar/NavBar";
import HeaderImage from "src/assets/images/HeaderImage.png";

export default function Header({
  heading,
  title,
  description,
  button,
}: {
  heading: string;
  title: string;
  description: string;
  button: string;
}) {
  return (
    <div className="bg-[#071d35]">
      <NavBar />
      <div className="flex w-full h-[600px]">
        <div className="flex flex-col w-1/2 items-start py-32 px-60 gap-5">
          <h1 className="text-white text-5xl w-screen">{heading}</h1>
          <h2 className="text-white text-5xl w-screen">{title}</h2>
          <p className="text-white text-2xl w-[550px]">{description}</p>
          <button className="text-black px-8 py-3 rounded-full bg-[#54a8c7]">
            {button}
          </button>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <Image src={HeaderImage} alt={""} />
        </div>
      </div>
    </div>
  );
}
