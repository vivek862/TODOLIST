export function updateColumnData (column) {
    return dispatch => {
      dispatch({type: 'UPDATE_STATE', data: column});
    }
  }
export function addColumnData (column) {
    return dispatch => {
        dispatch({type: 'ADD_COLUMN', data: column});
    }
}

export function addTask (task, columnid) {
    return (dispatch, getState) => {
        let tasks = getState().ToDoList.tasks;
        let column = getState().ToDoList.columns[columnid];
        const taskLength = Object.keys(tasks).length;
        const newTaskId = `task${taskLength + 1}`;
        const taskObj = {
            id: newTaskId,
            title: task.title,
            content: task.content
        }
        tasks = {...tasks, [taskObj.id]: taskObj};
        column.taskIds.push(taskObj.id);
        dispatch({type: 'UPDATE_TASKS', data: tasks});
        dispatch({type: 'UPDATE_STATE', data: column});
    }
}