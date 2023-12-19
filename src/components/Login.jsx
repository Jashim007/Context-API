import { useState } from "react";
import { useContext } from "react";
import UserContext from "./../context/UserContext";
const Login = () => {
  const [userName, setUserName] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = () => {
    setUser(userName);
    setUserName("");
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="p-7 m-20 border border-blue-500 rounded-md flex flex-col items-center justify-center shadow-lg text-blue-700 gap-5 ">
        <div className="space-x-4">
          <label htmlFor="myName">Enter Name: </label>
          <input
            type="text"
            id="myName"
            autoComplete="off"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="p-2 border border-blue-400 rounded-md focus:outline-none "
          />
        </div>
        <button
          onClick={handleSubmit}
          className="my-5 p-3 border border-blue-400 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
