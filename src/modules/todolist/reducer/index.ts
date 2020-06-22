const initialState = {
    tasks: {
      'task1': {id: 'task1', title: 'Task 1', content: 'This is a very good description'},
      'task2': {id: 'task2', title: 'Task 2', content: 'Mail to xxxxx on tuesday at 3.30'},
      'task3': {id: 'task3', title: 'Task 3', content: 'Call amber on friday'},
      'task4': {id: 'task4', title: 'Task 4', content: 'call madison on thursady'}
    },
    columns: {
      'column1': {
        id: 'column1',
        title: 'To Do',
        taskIds: ['task1', 'task2', 'task3', 'task4']
      }
    },
    columnIds: ['column1']
}; 
  export default function ToDoList(state = initialState, action) {
    switch (action.type) {
      case 'UPDATE_TASKS':
        return {...state, tasks: action.data};
      case 'ADD_COLUMN':
        const columns = {
          ...state.columns,
          [action.data.id]: action.data
        };
        const columnIds = state.columnIds;
        columnIds.push(action.data.id);   
        return {...state, columns: columns, columnIds: columnIds};
      case 'UPDATE_STATE':
        const newColumns = {
          ...state.columns,
          [action.data.id]: action.data
        }
        return {...state, columns: newColumns};   
      default:
        return state
    }
  }