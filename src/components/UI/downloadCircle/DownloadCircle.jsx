import React, {useEffect} from "react";
import cl from "./downloadCircle.scss";

const DownloadCircle = ({percent, name = "Name", tasksData}) => {
  const [progress, setProgress] = React.useState(60);
 
 

  return (
    <div className="circle">
      <div
        className="progress-circle"
        style={{
          "--progress": `${progress}%`,
          "--color": "rgb(88, 8, 186)",
          "--color-grad": "rgb(216, 27, 226)",
          "--color-2": "transparent",
          "--border-width": "5px",
          "--circle-size": "30px",
        }}>
        <p className="progress-num">
          0/
          {tasksData.length > 0
            ? tasksData.map((e) => e.tasks.length).reduce((a, b) => a + b)
            : 0}
        </p>
      </div>
      {/* <div className="circle-title">{name}</div> */}
    </div>
  );
};

export default DownloadCircle;
