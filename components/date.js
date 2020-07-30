export default function Date(props) {
  return <time dateTime={props.dateString}>{props.dateString}</time>;
}
