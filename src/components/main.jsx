import React,{useState} from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Main(){
   
    const [isOpen, setIsOpen] = useState(false);
    const [todos,setTodos] =useState([])
    const [title,setTitle]=useState("")
    const [des,setDes]=useState("")
    const [img,setImg]=useState("")
    
    const handleSubmit=(e)=>{
        setTodos([...todos,{title,des,img}])
        console.log(todos)
        setIsOpen(!isOpen)
  
    }
    const togglePopup = () => {
        console.log(isOpen)
        let st=isOpen
        setIsOpen(!st);
        console.log(isOpen)
      
    }

    function PopUp(){
        return(
        <> 
            <div className="popup-box">
            <div className="box1">
                <span className="close-icon" onClick={togglePopup}>x</span>
                
                <form onSubmit={handleSubmit}>
                
                    Title:   
                    <br/>
                    <input type="text" name="title" style={{width:"510px"}}  onChange={(e)=>setTitle(e.target.value)} />
                    <br/>
                    <br/>
                    <label> Description:</label>
                    <br/>
                    
                    <textarea type="text" rows="4" cols="70" onChange={(e1)=>setDes(e1.target.value)} />
                    <br/>
                    
                    <br/>
                    <input type="file" onChange={(e2)=>setImg(e2.target.value)}/>
                    
                    <br/>
                    <br/>
                    <button type="submit">Add Todo</button>
                    
                    </form>

            </div>
            </div>
        </>




        );
    }

    return(
        <>
        <br/>
        <input  placeholder="Add a new TODO" readOnly/>
        <Button className="btn-primary"
        
        style={{width:"50px",marginLeft:"20px",height:"40px",
        textAlign:"center",padding:"2px",fontSize:"20px"}}  onClick={togglePopup}><b>+</b>
        
        </Button>
        
        <br/>
        
        {/*Opens up the Pop Up on Button Click*/} 
        
        {isOpen && <PopUp/>}

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