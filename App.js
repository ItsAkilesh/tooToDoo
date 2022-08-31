import React from "react";
import "./App.css";
import { Button,Card,Form } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
    const [todos,setTodos] = React.useState([
        {
            text: "This is a sample ToDo",
            isDone: false
        }
    ])
}
