import img from "../../../public/assets/logo.png";

export default function Header() {
  return (
    <>
      <header className="bg-opaque-white p-4 flex items-center rounded-b-3xl 2xl:h-24 md:h-14">
        <div className="w-full flex flex-row justify-between">
          <div>
            <h3 className="font-Gelica text-4xl">matcha</h3>
          </div>
          <div>
            <button className="p-2 mr-3 text-sm">Contact Us</button>
            <button className="mr-7 p-2 font-Montserrat font-bold text-light-purple border-purple border rounded-xl text-xs m-2 shadow-lg">
              Find a Therapist
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
