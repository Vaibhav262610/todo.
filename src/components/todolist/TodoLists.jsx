import React from "react";

const TodoLists = (props) => {
  const editItem = () => {
    console.log("edit");
  };
  const completeItem = () => {
    console.log("edit");
  };
  return (
    <>
      <div className="box text-gray-300 mt-8 py-8 px-4 rounded">
        <div>
          <h1>{props.text}</h1>
          <div className="flex gap-4 mt-4">
            <button
              className="bg-green-500 text-black px-4 py-2 rounded"
              onClick={completeItem}
            >
              Completed
            </button>
            <button
              className="bg-yellow-500 text-black px-4 py-2 rounded"
              onClick={editItem}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-black px-4 py-2 rounded"
              onClick={() => {
                props.onSelect(props.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoLists;
