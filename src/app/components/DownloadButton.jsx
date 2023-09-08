export default function DownloadButton(props) {
  const imgSrc = props.imgSrc;
  const helperText = props.helperText;
  const innerText = props.innerText;
  return (
    <a className="bg-opaque-white hover:cursor-pointer hover:bg-white py-2 px-4 md:w-44 sm:w-22 md:rounded-xl rounded-[0.4rem] flex flex-row flex-wrap justify-evenly items-center custom-shadow mr-2 mt-2">
      <img className="sm:w-6 w-4" src={imgSrc} alt="apple-logo" />
      <div>
        <p className="text-[0.65rem] text-slate md:leading-[1] hidden md:block">
          {helperText}
        </p>
        <h3 className="md:leading-[1] hidden md:block">{innerText}</h3>
      </div>
    </a>
  );
}
