import EditCircleModal from "./EditCircleModal";

function CircleContainer({ circle }) {
 
  return (
    <li className="flex justify-between flex-row gap-2 flex-shrink-0 flex-wrap">
      <div className="border border-black flex-grow">{circle.circleName}</div>
      <div className="border border-black p-0">
        <EditCircleModal circle={circle}/>
      </div>
    </li>
  );
}

export default CircleContainer;
