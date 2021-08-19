import {Card} from 'react-bootstrap';

const ShowTodos=({todos})=>{
    return(
        <>
        
           { todos.map((todo)=>{
                return(  
                    <>
        
                        <Card>
                            <Card.Body className="card text-white bg-dark lg-3">
                                {todo.title}
                            </Card.Body>
                            <br/>    
                        </Card>
                    </>
                    );
                }
                        
            )
        }
        </>

    )
}
export default ShowTodos;