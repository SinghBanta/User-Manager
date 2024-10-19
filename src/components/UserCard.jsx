/* eslint-disable react/prop-types */

import { EditDialog } from "./EditDialog";

export function UserCard({userdata, setAlldata, alldata}) {
  function handleDelete() {
    const newArray = alldata.filter(item => item.id !== userdata.id);
    setAlldata(newArray);    
  }
    
  return (
    <div className="flex justify-between items-center rounded-xl p-4 shadow-lg hover:bg-zinc-200 border">
        <div className="flex gap-2 items-center">
            <img src={userdata.avatar} alt="profile_photo" className="h-16 rounded-xl"/>
            <div>{userdata.first_name} {userdata.last_name}</div>
        </div>
        <div className="flex gap-2 text-white">
            <EditDialog userdata={userdata} alldata={alldata} setAlldata={setAlldata}/>

            <button className="border-2 hover:bg-purple-500
            p-2 px-3 rounded-xl text-black hover:text-white bg-zinc-200" onClick={handleDelete}>Delete</button>
        </div>
    </div>
  );
}
