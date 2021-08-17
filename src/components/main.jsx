import React,{useState} from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pop from "./pop";
function Main(){
   
    const [isOpen, setIsOpen] = useState(false);
    const [todos,setTodos] =useState([])
    const togglePopup = () => {
        setIsOpen(!isOpen);
        console.log()
      
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
        
        {/*Opens up the Pop Up on Button Click*/} 
        
        {isOpen && <Pop
         handleClose={togglePopup}
         handleAdd={setTodos}
				 todos={todos} 
         />}

        {/*Here its not working....*/}        
        {todos.map(todo=>(
            <>            
            <Card>
                <Card.Body>
                    {todo.title}
                </Card.Body>
            </Card>
            
            </>
            )
        )};
 
        
        </>
    );
}
export default Main;