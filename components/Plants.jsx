//
//

export default function Plants(props) {
  return (
    <div>
      <img src={props.img} />
      <h2>{props.name}</h2>
      <h3>{props.species}</h3>
      <p>{props.wateringInstructions}</p>
    </div>
  );
}
