import Button from "./Button";

export default function Header() {
  return (
    <>
      <header className="bg-opaque-white p-4 flex items-center rounded-b-3xl 2xl:h-24 md:h-16">
        <div className="w-full flex flex-row justify-between">
          <div>
            <h3 className="font-Gelica text-4xl">matcha</h3>
          </div>
          <div>
            <Button
              innerText="Contact Us"
              styling="p-2 mr-3 text-sm hover:bg-white rounded-xl w-28"
            />
            <Button
              innerText="Find a Therapist"
              styling="w-44 mr-7 p-2 font-Montserrat font-bold text-light-purple border-purple border rounded-xl text-xs m-2 shadow-lg hover:bg-white"
            />
          </div>
        </div>
      </header>
    </>
  );
}
