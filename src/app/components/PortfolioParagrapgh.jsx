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
          <h2 className="text-4xl p-5 pl-0">{heading}</h2>
          <p>{innerText}</p>
          <Button
            innerText={btnText}
            styling="w-44 mr-7 p-2 font-Montserrat font-bold text-white bg-light-purple border-purple border rounded-xl text-xs mt-4 shadow-lg hover:bg-purple"
          />
        </div>
        <img className="w-96 rounded-2xl" src={imgSrc} alt="portfolio-img" />
      </div>
    </>
  );
}
