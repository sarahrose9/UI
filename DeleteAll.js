import React, { Component } from 'react'
import {Consumer} from './Context'
import axios from "axios"

export default class DeleteAll extends Component {
    removeall=(dispatch)=>{
        axios.delete('/tasks')
       .then(()=> dispatch({type:"REMOVEALL"}))
    }
    
    render() {
        return (
            <Consumer>{value =>{
                const {dispatch}=value
                return <form onSubmit={this.removeall.bind(this,dispatch)}>
                    <button className="form-control rounded-0 btn-danger" type="submit">Delete All</button>
                    </form>
            }}</Consumer>
        )
    }
}
