import React from "react";
import { differenceInDays, formatDistanceToNow } from 'date-fns'

const Task = ({ taskObj, onComplete }) => {
  const result = differenceInDays(new Date(taskObj.deadline), new Date());

  const resultIki = result > 0
    ? `${result} gün sonra !`
    : `${formatDistanceToNow(new Date(taskObj.deadline), {addSuffix: true})}`;

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span className={result < 3 ? "bg-[#ffd9d4]" : "bg-sky-300"}>{resultIki}</span>
      </div>
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