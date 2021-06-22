import React, { Component } from 'react'
import Task from './Task'
import {Consumer} from './context'

export default class TaskList extends Component {
    render() {
        return (
            <Consumer>{value =>{
                const {tasks}=value
                return tasks.map(t=> <Task task={t} key={t.id}></Task>)
            }}</Consumer>
        )
    }
}
