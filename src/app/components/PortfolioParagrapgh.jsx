import Button from "./Button";

export default function PortfolioParagraph(props) {
  const heading = props.heading;
  const innerText = props.innerText;
  const imgSrc = props.imgSrc;
  const btnText = props.btnText;
  const styling = "flex justify-evenly items-center mt-20 " + props.styling;
  return (
    <>
      <div className={styling}>
        <div className="w-1/3">
          <h2 className="md:text-4xl md:p-5 md:pl-0 sm:text-[1.4rem]">
            {heading}
          </h2>
          <p className="sm:text-sm sm:p-2 sm:pl-0">{innerText}</p>
          <Button
            innerText={btnText}
            styling="md:w-44 mr-7 p-2 font-Montserrat font-bold text-white bg-light-purple border-purple border rounded-xl text-xs mt-4 shadow-lg hover:bg-purple sm:w-32"
          />
        </div>
        <img
          className="md:w-96 md:rounded-2xl sm:w-72 sm:rounded-xl"
          src={imgSrc}
          alt="portfolio-img"
        />
      </div>
    </>
  );
}
