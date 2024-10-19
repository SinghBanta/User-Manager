import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    
    function handleLogOut() {
        localStorage.removeItem("token");
        navigate("/");
    }

  return (
    <div className="border-2 max-w-2xl mx-auto bg-red-200 p-5 rounded-xl flex justify-between my-5 items-center">
        <h1 className="text-2xl font-medium font-mono">User Manager</h1>
        <button className="bg-red-400 rounded-xl p-2 text-white px-4 hover:bg-red-400/80" onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Navbar