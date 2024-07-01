import React from "react";
import Todo from "./todo"
const Item = ({ total ,del}) => {
  return (
    <>
      <div  id="container" className="container">
        {
            total.map((x,index)=>{
                return < Todo work={x} index={index} key={x} del={del}/>
            })
        }
      </div>
    </>
  );
};

export default Item;
