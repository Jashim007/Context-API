import { useContext } from "react";
import UserContext from "./../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="p-7 m-20 border border-blue-500 rounded-md flex flex-col items-center justify-center shadow-lg text-blue-700 gap-5 ">
        User Name is : {user}
      </div>
    </div>
  );
};

export default Profile;
