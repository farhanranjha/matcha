import socials from "public/assets/socials.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-white p-4 rounded-t-3xl md:h-28 mt-20 sm:h-24 sm:px-10 h-[6.5rem]">
        <div className="flex flex-row relative max-w-[1440px] m-auto">
          <div className="flex flex-row absolute left-2 top-2 sm:block hidden">
            <button className="font-Khula text-[11px] mr-8">
              Match With A Provider
            </button>
            <button className="font-Khula text-[11px] mr-8">About Us</button>
            <button className="font-Khula text-[11px] mr-8">Services</button>
            <button className="font-Khula text-[11px] mr-8">Contact Us</button>
            <button className="font-Khula text-[11px] mr-8">Careers</button>
          </div>
          <div className="absolute right-2 top-0">
            <p className="font-Khula text-[11px] mr-2 text-end">
              Follow Us &#128153;
            </p>
            <img className="h-6 mt-2 ml-2" src={socials.src} alt="socials" />
          </div>
          <div className="flex flex-row absolute left-2 top-16">
            <button className="font-Khula text-[11px] sm:mr-6 mr-2">
              2022 matcha, Inc.
            </button>
            <button className="font-Khula text-[11px] sm:mr-6 mr-2 underline">
              Privacy
            </button>
            <button className="font-Khula text-[11px] sm:mr-6 mr-2 underline">
              Terms & Conditions
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
