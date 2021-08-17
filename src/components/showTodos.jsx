import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './todo';
function ShowTodos(props){
        return(
            <div>
                <br/>
                {props.todolist.map((todo, index) => (
                  <div key={todo.id}>  
                    <Todo todo={todo}/>
                    </div>
                
                ))}

            <br/>        
            </div>



        );
}
export default ShowTodos;