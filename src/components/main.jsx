import React,{useState} from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer";
import ShowTodos from "./showTodos";
import Pop from "./pop";
function Main(){
   
    const [isOpen, setIsOpen] = useState(false);
    const [todos,setTodos] =useState([{
        title:'' ,
        description :'' ,
        imgUrl : ''
    
      }])
    const togglePopup = () => {
      let state=isOpen
        setIsOpen(true);
        console.log(isOpen)
      
    }

    return(
        <>
        <br/>
        <input  placeholder="Add a new TODO" readOnly/>
        <Button className="btn-primary"
        
        style={{width:"30px",marginLeft:"20px",height:"30px",
        textAlign:"center",padding:"2px"}}  onClick={togglePopup}><b>+</b>
        
        </Button>
        
        <br/>
        
        <ShowTodos todolist={todos}/>
        
        {isOpen && <Pop
         handleClose={togglePopup}
         handleAdd={setTodos} 
         />}
        
        </>
    );
}
export default Main;