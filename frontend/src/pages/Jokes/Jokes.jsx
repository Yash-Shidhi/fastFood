import React, { useEffect, useState } from "react";
import Axios from "axios";

const Jokes = () => {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");

  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/getData");
    console.log(response);

    setData(response.data.setup);
    setData2(response.data.punchline);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="bg-slate-300 pb-8 rounded-3xl">
        <h1 className="text-8xl underline text-center mt-60 pt-5">Jokes</h1>
        <p className="text-2xl text-center mt-20">{data}</p>
        <p className="text-2xl text-center">{data2}</p>
      </div>
    </>
  );
};

export default Jokes;
