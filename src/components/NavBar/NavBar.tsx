import Image from "next/image";
import Logo from "../../../src/assets/icons/logo.png";

export default function NavBar() {
  return (
    <nav className="w-full py-12">
      <div className="flex items-center justify-center w-[80%] mx-auto border p-4 gap-7 bg-white rounded-lg">
        <div className="">
          <Image src={Logo.src} width={250} height={40} />
        </div>
        <div className="flex gap-9">
          <a className="text-lg font-medium" href="">
            Home
          </a>
          <a className="text-lg font-medium" href="">
            About Us
          </a>
          <a className="text-lg font-medium" href="">
            Services
          </a>
          <a className="text-lg font-medium" href="">
            Testimonials
          </a>
          <a className="text-lg font-medium" href="">
            Partnerships
          </a>
          <a className="text-lg font-medium" href="">
            Contact
          </a>
        </div>
        <div className="ml-auto flex gap-5">
          <button className="border px-4 py-2 bg-[#54a8c7] text-[white] rounded-full">
            Sign In
          </button>
          <button className="border px-4 py-2 bg-[#54a8c7] text-[white] rounded-full">
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
}
