import React,{Form,useState} from "react";
 

function Pop(props)  {

    const [title,setTitle]=useState("")
    const [des,setDes]=useState("")
    const [img,setImg]=useState("")
    const obj=[title,des,img]
    const handleSubmit=(e)=>{
      props.handleAdd(props.todos.push(obj))
      console.log(props.todos)

  }
    return (
    <> 
    <div className="popup-box">
      <div className="box1">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        
        <form onSubmit={handleSubmit}>
           
            Title:   
              <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} />
            Description:
              <textarea type="text" onChange={(e1)=>setDes(e1.target.value)} />
            Upload the Image
              <input type="file" onChange={(e2)=>setImg(e2.target.value)}/>
              
              <input type="submit" value="submit" name="submit"/>
              
              </form>

      </div>
    </div>
    </>
  );
}
 
export default Pop;