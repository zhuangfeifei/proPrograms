import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter'


const defaultState = {
  userinfo:'',
  CollegeId:''
}

export default handleActions({
  userinfos(state, action){
    return { ...state, userinfo: action.payload }
  },
  CollegeIds(state, action){
    return { ...state, CollegeId: action.payload }
  },
}, defaultState)