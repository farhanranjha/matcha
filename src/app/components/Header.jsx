import Button from "./Button";

export default function Header() {
  return (
    <>
      <header className="bg-opaque-white flex items-center rounded-b-3xl p-2 md:p-4 md:h-16 2xl:h-24 xs:h-10 ">
        <div className="w-full flex flex-row justify-between max-w-[1440px] m-auto">
          <div>
            <h3 className="font-Gelica md:text-4xl sm:text-2xl text-lg xs:ml-4">
              matcha
            </h3>
          </div>
          <div className="flex flex-row">
            <Button
              innerText="Contact Us"
              styling="hover:bg-white md:p-2 md:mr-3 md:text-sm md:rounded-xl md:w-28 sm:text-[11px] sm:p-2 sm:mr-2 hidden md:block"
            />
            <Button
              innerText="Find a Therapist"
              styling="shadow-lg hover:bg-white font-Montserrat font-bold text-light-purple border-purple border rounded-xl md:w-44 md:mr-7 md:p-2 md:text-xs md:m-2 sm:text-[11px] sm:p-1 hidden md:block"
            />
          </div>
        </div>
      </header>
    </>
  );
}
