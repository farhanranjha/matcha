export default function Button(props) {
  const styling = props.styling;
  const innerText = props.innerText;
  const icon = props.icon;
  return <button className={styling}>{innerText}</button>;
}
