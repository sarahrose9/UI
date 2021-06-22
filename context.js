import React, { Component } from 'react'
import axios from "axios"
const Context = React.createContext()

const reducer=(prevState,action)=>{
    switch(action.type){
        case "TOGGLE":
            return {tasks: prevState.tasks.map(t=>{if (t._id===action.payload){t.complete=!t.complete};return t})}
        default:
            return prevState
        case "REMOVE":
                return {tasks: prevState.tasks.filter(task=>task._id!==action.payload)}
        case "ADD":
            return{tasks:[...prevState.tasks,action.payload]}

    }
    
}

export class Provider extends Component {
    state={
        tasks:[],
        dispatch:(action)=>this.setState(prevState => reducer(prevState,action))
    }
    componentDidMount(){
        axios.get('/tasks')
        .then(res=>this.setState({tasks:res.data}))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>        )
    }
}
export const Consumer = Context.Consumer
