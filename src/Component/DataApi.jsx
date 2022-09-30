import React,{useState} from "react";
import { useEffect } from "react";
 import axios from "axios"
export function FindId(){
    const [post,setPost]=useState([])
    const [btnid,setBtnId]=useState("")
    const[filterpost,setFilteredPost]=useState([])
    const [searchtask,setSearchTask]=useState("")
useEffect(()=>{
   axios.get(`https://jsonplaceholder.typicode.com/comments`)
   .then(res=>{
    console.log(res.data)
    setPost([...res.data])
    setFilteredPost([...res.data])
   })
},[])

useEffect(()=>{
  let filterdata=post.filter((Comment)=>{
    if(Comment.name){
      return Comment.name.includes(searchtask.toLowerCase())
    }
  })
  setFilteredPost(filterdata)
},[btnid])
    return(
        <>
        
        <div className="serach_input">
        <input type="text"  value={searchtask}  onChange={(e)=>setSearchTask(e.target.value)} />
         <button onClick={()=>setBtnId(searchtask)}>Add task</button>
        </div>
       
        
        {
          filterpost.map((task)=>{
            return(
              <div className="name" key={task.id}>
              <p>{task.name}</p>
              </div>
            )
          })
        }
        </>
    )
}

















