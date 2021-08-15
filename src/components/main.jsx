import React,{useState} from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer";
import ShowTodos from "./showTodos";
import Pop from "./pop";
function Main(){
    const [title,setTitle]=useState("")
    const [des,setDes]=useState("")
    const [img,setImg]=useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [todos,setTodos] =useState([{
        title:'' ,
        description :'' ,
        imgUrl : ''
    
      }])
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    
      function handleSubmit(m){
          alert( "your Title is " + {title})
          alert ("Your Description is " +{des})
          alert ("Your Image is " + {img})
          setTodos([...todos,{title,des,img}])

      }

    function handleClick(){
        alert("I am Clicked!!!!!!!!!") 
        return(
            <>
              <Form onSubmit={handleSubmit}>
              Title:   
              <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} />
              Description:
              <textarea type="text" onChange={(e1)=>setDes(e1.target.value)} />
              Upload the Image
              <input type="file" onChange={(e2)=>setImg(e2.target.value)}/>
              </Form>

            </>
        ); 
        
      }

    return(
        <>
        <br/>
        <input  placeholder="Add a new TODO" readOnly/>
        <Button className="btn-primary"
        style={{width:"30px",marginLeft:"20px",height:"30px",
        textAlign:"center",padding:"2px"}}  onClick={togglePopup}><b>+</b></Button>
        <br/>
        <ShowTodos todolist={todos}/>
        {isOpen && <Pop
         handleClose={togglePopup}
         handleAdd={setTodos} 
         />}
        <Footer/>
        </>
    );
}
export default Main;