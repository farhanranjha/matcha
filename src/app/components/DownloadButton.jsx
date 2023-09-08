export default function DownloadButton(props) {
  const imgSrc = props.imgSrc;
  const helperText = props.helperText;
  const innerText = props.innerText;
  return (
    <a className="bg-opaque-white hover:cursor-pointer hover:bg-white py-2 px-4 w-44 rounded-xl flex flex-row flex-wrap justify-evenly items-center custom-shadow mr-2">
      <img className="w-6" src={imgSrc} alt="apple-logo" />
      <div>
        <p className="text-[0.65rem] text-slate leading-[1]">{helperText}</p>
        <h3 className="leading-[1]">{innerText}</h3>
      </div>
    </a>
  );
}
