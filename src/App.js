import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List/List";

function App() {
  const [text, setText] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [isEdit, setIsEdit] = useState(null);
  const [work, setWork] = useState(true);
  const [list, setList] = useState(null);
  // console.log(todo);

  const addItem = () => {
    if (text == "") {
      alert("Enter Valid Todo");
    } else if (text && !toggle) {
      setTodoList(
        todolist.map((elem) => {
          if (elem.id === isEdit) {
            return { ...elem, name: text };
          }
          return elem;
        })
      );
      setToggle(true);
      setText("");
      setIsEdit(null);
    } else {
      const allInputData = {
        id: uuidv4(),
        name: text,
        list: "Active",
      };
      setTodoList([...todolist, allInputData]);
      setText("");
      console.log(allInputData);
    }
  };

  const deleteItem = (index) => {
    // console.log(id);
    const updatedItems = todolist.filter((items) => {
      return index !== items.id;
    });
    setTodoList(updatedItems);
  };

  const editItem = (id) => {
    let newEditItem = todolist.find((elem) => {
      return elem.id === id;
    });
    setToggle(false);
    setText(newEditItem.name);
    setIsEdit(id);
  };

  const completeItem = (id) => {
    let newEditItem = todolist.find((elem) => {
      return elem.id === id;
    });
    setWork(false);
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
            {toggle ? (
              <h1 className="text-purple-300 text-2xl">Add todo</h1>
            ) : (
              <h1 className="text-purple-300 text-2xl">Edit todo</h1>
            )}

            <input
              type="text"
              id="inputtodo"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="input w-full "
              placeholder="add here"
            />
            <div className=" flex gap-4">
              {toggle ? (
                <button
                  className="bg-white px-4 py-2 rounded"
                  onClick={addItem}
                >
                  Add
                </button>
              ) : (
                <button
                  className="bg-white px-4 py-2 rounded"
                  onClick={addItem}
                >
                  Edit
                </button>
              )}

              <button className="bg-white px-4 py-2 rounded">Reset</button>
            </div>
          </div>
        </div>
        <div className="main p-8 mt-2 rounded-lg w-8/12 ">
          <div className="buttons flex gap-4">
            <button className="bg-white px-4 py-2 rounded">All</button>
            <button className="bg-white px-4 py-2 rounded">Active</button>
            <button className="bg-white px-4 py-2 rounded">Completed</button>
          </div>

          {todolist.map((items) => {
            return (
              <div
                className="box text-gray-300 mt-8 py-8 px-4 rounded"
                key={items.id}
              >
                <div>
                  {work ? (
                    <h1>
                      {items.name} - {items.list}
                    </h1>
                  ) : (
                    <h1 className="line-through">
                      {items.name} - {items.list}
                    </h1>
                  )}
                  <div className="flex gap-4 mt-4">
                    <button
                      className="bg-green-500 text-black px-4 py-2 rounde"
                      onClick={() => completeItem(items.id, items.list)}
                    >
                      Completed
                    </button>
                    <button
                      className="bg-yellow-500 text-black px-4 py-2 rounded"
                      onClick={() => editItem(items.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-black px-4 py-2 rounded"
                      onClick={() => deleteItem(items.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
