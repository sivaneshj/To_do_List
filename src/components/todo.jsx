import React from "react";

function todo({work ,index,del}) {
  return (
    <div className="items">
      <p>{work}</p>
      <div className="inputs">
        <input type="checkbox" />
        <button onClick={()=>del(index)}>Delete</button>
      </div>
    </div>
  );
}

export default todo;
