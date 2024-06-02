import React, { useState } from "react";

function Todo() {
  const resetBtn = () => {
    document.getElementById("inputData").value = "";
  };

  let [data, setData] = useState("");
  let [items, setItems] = useState([]);

  const submitBtn = () => {
    const inData = document.getElementById("inputData");
    setItems((oldItems) => {
      return [...oldItems, data];
    });
    inData.value = "";
    console.log(items);
  };

  const itemEvent = (event) => {
    setData(event.target.value);
  };

  return (
    <>
      <div className="h-screen w-auto flex flex-col items-center p-32">
        <div className=" logo w-8/12 flex text-left">
          <h1 className=" pl-8 text-5xl text-white font-semibold">
            to<span className="text-purple-600">do.</span>
          </h1>
        </div>
        <div className="main p-8 mt-12 rounded-lg w-8/12 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-purple-300 text-2xl">Add todo</h1>
            <input
              type="text"
              id="inputData"
              onChange={itemEvent}
              className="input w-full "
              placeholder="add here"
            />
            <div className=" flex gap-4">
              <button
                className="bg-white px-4 py-2 rounded"
                onClick={submitBtn}
              >
                Submit
              </button>
              <button className="bg-white px-4 py-2 rounded" onClick={resetBtn}>
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="main p-8 mt-2 rounded-lg w-8/12 ">
          <div className="buttons flex gap-4">
            <button className="bg-white px-4 py-2 rounded">All</button>
            <button className="bg-white px-4 py-2 rounded">Active</button>
            <button className="bg-white px-4 py-2 rounded">Completed</button>
          </div>

          {items.map((itemval) => {
            return (
              <div className="box text-gray-300 mt-8 py-8 px-4 rounded">
                <div>
                  <h1>{itemval}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
