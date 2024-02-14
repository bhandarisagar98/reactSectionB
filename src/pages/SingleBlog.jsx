import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] =useState(true)
  const fetchBlog = async ()=> {
    const res = await axios.get(
      `https://65cdc8f5c715428e8b3f0df3.mockapi.io/blog/${id}`
    );
    setData(res.data);
    setLoading(false)
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <>
    {loading ? <div style={{height:'100vh', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <img src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif"/>
    </div>:   <div>
        <img src={data.avatar} style={{ width: "200px", height: "200px" }} />
        <h3>{data.name}</h3>
        <p>{data.desc}</p>
      </div>}
    
    </>
  );
};

export default SingleBlog;
