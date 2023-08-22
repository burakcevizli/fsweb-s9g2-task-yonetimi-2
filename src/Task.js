import React from "react";
import {differenceInDays,formatDistanceToNow} from 'date-fns'

const Task = ({ taskObj, onComplete }) => {

  const result = differenceInDays(new Date(taskObj.deadline),new Date()) 

  const resultIki = result > 0 ? `${result} gün sonra !` : formatDistanceToNow(new Date(taskObj.deadline),{includeSeconds:true})

  const color = "bg-"
   

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span className={resultIki<3 ? "bg-sky-600": ""}>{resultIki}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
