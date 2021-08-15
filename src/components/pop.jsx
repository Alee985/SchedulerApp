import React,{Form,useState} from "react";
 

const Pop = props => {
    const [title,setTitle]=useState("")
    const [des,setDes]=useState("")
    const [img,setImg]=useState("")
    
  const handleSubmit=(e)=>{
      props.handleAdd(title,des,img)

  }
    return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <Form onSubmit={handleSubmit}>
              Title:   
              <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} />
              Description:
              <textarea type="text" onChange={(e1)=>setDes(e1.target.value)} />
              Upload the Image
              <input type="file" onChange={(e2)=>setImg(e2.target.value)}/>
              <input type="submit" value="submit" name="submit"/>
              </Form>

      </div>
    </div>
  );
};
 
export default Pop;