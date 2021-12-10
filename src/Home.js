import React, { useState, useEffect } from "react";

const Home = () => {

  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getData(val) {
    console.warn(val.target, value);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div className="Home">

      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>print</button>
      
    </div>
  );
};

export default Home;
