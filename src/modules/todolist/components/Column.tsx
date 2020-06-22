import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import AddDetail from './Popup';
import { Droppable } from 'react-beautiful-dnd'

interface Props {
    column: any;
    tasks: Array<any>,
    addTask: Function
}
export default class Column extends React.Component<Props, any> {
    constructor(props) {
        super(props);
        this.state = {
            text: '+ Add Task'
        }
    }
    addTask = (title, content) => {
        const newTask = {
            title: title,
            content: content
        }
        this.props.addTask(newTask, this.props.column.id);
    }
    render() {
        const cards = this.props.tasks.map((task, index) => <Card key={task.id} task={task} index={index}></Card>);
        return <div className="columnContainer">
            
            <h3>{this.props.column.title}</h3>
            <Droppable droppableId={this.props.column.id}>
               {(provided) => <div 
                ref = {provided.innerRef}
                {...provided.droppableProps}
               >
                   {cards}
                   {provided.placeholder}
                </div>}
            </Droppable>
            <AddDetail text={this.state.text} updateData={this.addTask.bind(this)}></AddDetail>
        </div>

    }
}