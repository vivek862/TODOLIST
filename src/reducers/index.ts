import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import ToDoList from 'modules/todolist/reducer/index'
//import personDetail from '@modules/person-detail/reducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ToDoList: ToDoList,
  //personDetail
})
export default createRootReducer