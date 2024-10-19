import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const navigate = useNavigate();

  async function handleSubmit() {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    
    if (data.error){
      alert(data.error);
    }
    else {
      // code to store data.token in local storage
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    
  }

  useEffect(() => {
    if (localStorage.getItem("token"))
        navigate("/home");
  }, [navigate])
  



  return (
    <div className="flex items-center justify-center h-screen max-w-md mx-auto">
    <form className="flex w-full flex-col gap-4 border-2 p-5 bg-gradient-to-b from-orange-100 to-sky-200 rounded-xl">
      <h1 className="text-2xl font-bold text-center">User Manager</h1> 
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password"
        value={password} onChange={(e)=>setPassword(e.target.value)}
         required />
      </div>
      
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
    </div>
  );
}

export default Login
