import React from "react";

const List = (props) => {
  return (
    <>
      <h1 style={{ textDecoration: props.cut ? "line-through" : "none" }}>
        {props.text}
      </h1>
    </>
  );
};

export default List;
