import React from 'react'
import { connect } from 'react-redux'
import './styles.css'
import { bindActionCreators } from 'redux'
import * as todoActions from './action/index'
import AddDetail from './components/Popup';
import Column from './components/Column';
import { DragDropContext } from 'react-beautiful-dnd'

interface Props {
  toDoList: any,
  toDoActions: any
}
export class App extends React.Component<Props, any> {
  constructor(props) {
    super(props)
    this.state = {
      dropContainers: [],
      text: '+ Add Column'
    }
  }

  addContainer = (title, content) => {
    const currentColumnLength = Object.keys(this.props.toDoList.columns).length;
    const newColumn = {
      id: `column${currentColumnLength + 1}`,
      title: title,
      content: content,
      taskIds: []
    }
    this.props.toDoActions.addColumnData(newColumn);
  }

  dragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const initialColumn = this.props.toDoList.columns[source.droppableId];
    const endColumn = this.props.toDoList.columns[destination.droppableId];
    if (initialColumn === endColumn) {
      const newTaskIds = Array.from(initialColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...initialColumn,
        taskIds: newTaskIds
      }
      this.props.toDoActions.updateColumnData(newColumn);
    } else {
      let initialTaskIds = Array.from(initialColumn.taskIds);
      initialTaskIds.splice(source.index, 1);
      let initialColmn = {
        ...initialColumn,
        taskIds: initialTaskIds
      }
      this.props.toDoActions.updateColumnData(initialColmn);
      let finalTaskIds = Array.from(endColumn.taskIds);
      finalTaskIds.splice(destination.index, 0, draggableId);
      let finalColmn = {
        ...endColumn,
        taskIds: finalTaskIds
      }
      this.props.toDoActions.updateColumnData(finalColmn);

    }



  }
  render() {
    const droppableContainers = this.props.toDoList.columnIds.map(id => {
      const column = this.props.toDoList.columns[id];
      const columntasks = column.taskIds.map((taskId) => this.props.toDoList.tasks[taskId]);
      return <Column key={id} column={column} tasks={columntasks} addTask={this.props.toDoActions.addTask} />
    });
    return <div className="topLevelEmenet">
      <div className="title">To Do App</div>
      <div className="columns">
        <DragDropContext onDragEnd={this.dragEnd}>
          {droppableContainers}
          <AddDetail text={this.state.text} updateData={this.addContainer.bind(this)}></AddDetail>
        </DragDropContext>
      </div>
    </div>
  }

}

const mapStateToProps = state => ({
  toDoList: state.ToDoList
})

const mapDispatchToProps = dispatch => ({
  dispatchProps: dispatch,
  toDoActions: bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
