import { useEffect, useState } from "react";
import { UserCard } from "../components/UserCard";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [alldata, setAlldata] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    async function getData(pageNumber) {
      const res = await fetch(`https://reqres.in/api/users?page=${pageNumber}`);
      const data = await res.json();
      setAlldata(data.data);
    }

    if (localStorage.getItem("token") === null) {
      navigate("/");
    } else getData(pageNumber);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <>
      <Navbar />

      <main className="flex flex-col gap-2 max-w-lg mx-auto px-2">
        {alldata.map((userdata, index) => (
          <UserCard
            key={index}
            userdata={userdata}
            setAlldata={setAlldata}
            alldata={alldata}
          />
        ))}
        <button
          className={`border-2 hover:bg-purple-500
            p-2 px-3 rounded-xl text-black hover:text-white bg-zinc-200 mb-20 ${pageNumber === 2 && "hidden"}`}
          onClick={() => setPageNumber(2)}
        >
          Next
        </button>
        <button
          className={`border-2 hover:bg-purple-500
            p-2 px-3 rounded-xl text-black hover:text-white bg-zinc-200 mb-20 ${pageNumber === 1 && "hidden"}`}
          onClick={() => setPageNumber(1)}
        >
          Previous
        </button>
        
      </main>
    </>
  );
};

export default Home;
