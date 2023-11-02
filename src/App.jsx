import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto text-center shadow-md rounded-lg my-8 bg-gray-700">
        <h1 className="text-white text-2xl text-center pt-4">
          Password generator
        </h1>

        <div className="flex shadow px-4 py-4 mb-3 ">
          <input
            type="text"
            value={password}
            className=" rounded-l-lg text-xl w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="text-2xl bg-blue-700 rounded-r-lg text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-lg gap-x-3 text-orange-500">
          <div className="flex mb-2 gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer ml-3"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex mb-1">
            <input
              className="w-3 h-3 mt-2.5"
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="ml-1" htmlFor="numberInput">
              Numbers
            </label>
          </div>
          <div classname="flex gap-x-1">
            <input
              className="w-3 h-3 mt-2"
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className="text-xl ml-1" htmlFor="characterInput">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
