import React,{useState} from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import ShowTodos from "./showTodos.js";
function Main(){
   
    const [isOpen, setIsOpen] = useState(false);
    const [todos,setTodos] =useState([])
    const [title,setTitle]=useState("")
    const [des,setDes]=useState("")
    const [img,setImg]=useState("")
    const [id,setId]=useState(1)    

    const handleSubmit=(e)=>{
        setTodos([...todos,{title,des,img,id}])
        
        setId(()=>id+1)
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
                    
                    
                    <button type="submit" className="btn-primary" style={{borderRadius:"5px",marginLeft:'0px'}}>
                        Add Todo
                    </button>
                    
                    </form>

                </div>
            </div>
         </>




        );
    }

    const delTodos=()=>{
        setTodos([])
    }
    


    return(
        <>
        <Router>
           <Switch>
           
           <Route exact path="/">    

           
                <br/>
                <input  placeholder="Add a new TODO" readOnly/>
                <Button className="btn-primary"
                
                style={{width:"50px",marginLeft:"20px",height:"40px",
                textAlign:"center",padding:"2px",fontSize:"20px",borderRadius:"20px"}}  onClick={togglePopup}><b>+</b>
            

                </Button>


                <Button className="btn-danger"
                
                style={{width:"50px",marginLeft:"40px",height:"40px",
                textAlign:"center",padding:"2px",fontSize:"10px",borderRadius:"20px"}}  onClick={delTodos} >
                    Delete TODOS
                </Button>

                <Link to="/todos">
                    <Button className="btn-info"
                    
                    style={{width:"50px",marginLeft:"40px",height:"40px",
                    textAlign:"center",padding:"2px",fontSize:"10px",borderRadius:"20px"}}  onClick={delTodos} >
                        Show TODOS
                    </Button>
                </Link>
                
                <br/>
                <br/>
                
                {/*Opens up the Pop Up on Button Click*/} 
                
                {isOpen && <PopUp/>}

                
                
                {todos.map(todo=>(
                    
                    <>
                    <Link to={"/"}>
                        
                        <Card>
                            <Card.Body className="card text-white bg-dark lg-3">
                                {todo.id}
                            </Card.Body>
                        </Card>
                    </Link>
                    <br/>
                    <br/>
                    
                    </>
                )
            )
        }

        </Route>
        
        <Route exact path="/todos">
            <ShowTodos todos={todos}/>
        </Route>

        </Switch> 
        </Router>    
        
        </>
    );

}
export default Main;