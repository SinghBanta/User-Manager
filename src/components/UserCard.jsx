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
            <img src={userdata.avatar} alt="profile_photo" className="h-16 w-16 rounded-xl object-cover"/>
            <div>{userdata.first_name} {userdata.last_name}</div>
        </div>
        <div className="flex gap-2 text-white items-center">
            <EditDialog userdata={userdata} alldata={alldata} setAlldata={setAlldata}/>

            <button className="hover:bg-[#0e7490]
            p-2 px-3 rounded-lg text-black hover:text-white bg-zinc-200" onClick={handleDelete}>Delete</button>
        </div>
    </div>
  );
}
