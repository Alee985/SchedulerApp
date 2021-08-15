import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Todo(props){
    if(props.todo.title==="" && props.todo.img){
        return(
            <>
            <Card>
                     <Card.Body>
                         NO TODOS TO SHOW
                    </Card.Body>
             </Card>
            </>
        );
    }
    else{
        return(
            <>
            <Card>
                     <Card.Body>
                        Ali
                    </Card.Body>
             </Card>
            </>
        );
    }
}