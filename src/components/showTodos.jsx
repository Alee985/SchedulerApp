import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './todo';
function ShowTodos(props){
        return(
            <div>
                <br/>
                {props.todolist.map((todo, index) => (
                    
                    <Todo todo={todo}/>
                // if(todo.title===""){
                // <div class="card bg-primary text-white">
                //     <div class="card-body">NO TODOS TO SHOW
                //     </div>
                // </div>    
                // } 
                // else
                // {

            //      <div class="card bg-primary text-white">
            //         <div class="card-body">
            //             <img 
            //             style={{width:"100px",height:"50px",marginRight:"30px",borderRadius:"3px"}}
            //             src="" alt="Card">
            //             </img>
            //         {todo.title}
            //         </div>
            // </div>
                //}
          
                ))}

            <br/>        
            </div>



        );
}
export default ShowTodos;