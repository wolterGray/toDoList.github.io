import React, {useEffect} from "react";
import cl from "./downloadCircle.scss";

const DownloadCircle = ({percent, name = "Name", tasksData}) => {
   let initVal = tasksData.length > 0 && tasksData.length
    ? tasksData.map((e) => e.tasks.length).reduce((a, b) => a + b)
    : 0;
   let numResVal = tasksData.length > 0 &&  tasksData && tasksData
    .map((e) => e.tasks.filter((f) => f.isDone))
    .map((e) => e.length)
    .reduce((a, b) => a + b);

   let resultVal = (100 / initVal) * numResVal;

  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    setProgress(resultVal);
  }, [resultVal]);
  return (
    <div className="circle">
      <div
        className="progress-circle"
        style={{
          "--progress": `${progress}%`,
          "--color": "rgb(88, 8, 186)",
          "--color-grad": "rgb(216, 27, 226)",
          "--color-2": "transparent",
          "--border-width": "8px",
          "--circle-size": "35px",
        }}>
        <p className="progress-num">
          {numResVal ?numResVal:0}/{initVal}
        </p>
      </div>
      {/* <div className="circle-title">{name}</div> */}
    </div>
  );
};

export default DownloadCircle;
