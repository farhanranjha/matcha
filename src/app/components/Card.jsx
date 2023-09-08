import quote from "public/assets/quote.png";

export default function Card(props) {
  const img = props.img;
  const review = props.review;
  const name = props.name;
  return (
    <>
      <div className="card-container">
        <img className="w-full h-full" src={img.src} alt="card" />
        <div className="absolute bottom-2 transparent-div p-3 pt-1">
          <div className="flex flex-row justify-center">
            <img
              className="mt-[-23px] absolute w-[15%]"
              src={quote.src}
              alt="qoute"
            />
          </div>
          <p className="text-center font-Khula text-[100%] text-white mt-4">
            {review}
          </p>
          <p className="text-center font-bold text-white mt-[1%] ">{name}</p>
        </div>
      </div>
    </>
  );
}
