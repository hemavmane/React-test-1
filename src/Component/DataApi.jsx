import React, { useEffect, useState } from "react";
import axious from "axios";
export function Comments() {
  const [data, setData] = useState([]);
  const [filteredData,setFilteredData]=useState([])
  const [text,setText]=useState("")
  const [but,setbut]=useState("")
  useEffect(() => {
    axious
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) =>{
        console.log(response.data);
        setData([...response.data])
        setFilteredData([...response.data])
      } );
  }, []);

  useEffect(()=>{
    const filtereddata = data.filter((comment)=>{
      if(comment.name){
        return comment.name.includes(text.toLowerCase())
      }
    });
    setFilteredData(filtereddata)
  },[but])
  return (
    <>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    <button onClick={()=>setbut(text)}>text</button>
      {filteredData.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.name}</h1>
          </div>
        );
      })}
    </>
  );
}