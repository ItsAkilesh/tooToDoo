import React from "react";
import "./App.css";
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, removeTodo }) {
    return (
        <div className="todo">
            <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}

            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
                <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
            </div>
        </div>
    );
}

function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Container>
                <Row>

                    <Col>
                        <Form.Group>

                            <Form.Control type="text" className="input  text-light border-0" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new task" />
                        </Form.Group>
                    </Col>
                    <Col md={2}>

                        <Button variant="outline-light" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>

            </Container>





        </Form>

    );
}

function App() {
    const [todos, setTodos] = React.useState([
        {
            text: "This is a sample todo",
            isDone: false
        }
    ]);
    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div className="app">
            <div className="container">
                <Card className="bg-dark text-light mb-5 ">
                    <Card.Header >
                        <Card.Title className="text-center mb-2 display-3 font-weight-bold">
                            tooToDoo
                        </Card.Title>

                    </Card.Header>
                    <Card.Body>

                        <FormTodo addTodo={addTodo} />

                    </Card.Body>
                </Card>
                <Card bg="dark" text="white">
                    <Card.Body>
                        {todos.map((todo, index) => (

                            <Todo
                                key={index}
                                index={index}
                                todo={todo}
                                markTodo={markTodo}
                                removeTodo={removeTodo}
                            />

                        ))}
                    </Card.Body>
                </Card>

            </div>
            <footer><p style={{position: 'absolute', bottom:0, left:'35%'}} className="text-light ">Made with ❤️ in ReactJS. © Akilesh S, 2022 </p></footer>
        </div>

    )
}

export default App