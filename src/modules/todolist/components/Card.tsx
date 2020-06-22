import React from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

interface Props {
    task: any,
    index: any
}
export default class Column extends React.Component<Props, any> {
    editTask = () => {

    }
    render() {

        return <Draggable draggableId={this.props.task.id} index={this.props.index}>
           {(provided) => {
               return <div className="cardContainer" 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
               <h3>{this.props.task.title}</h3>
               <h4>{this.props.task.content}</h4>
           </div>
           }}
            
        </Draggable>

    }
}