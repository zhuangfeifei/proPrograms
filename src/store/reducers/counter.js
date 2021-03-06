import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter'


const defaultState = {
  userinfo:'',
  CollegeId:'',
  CategoryId:'',
  distributionCode:'',
  CategoryIdIndex:'',
  collegedetail:'',
  coupon:'',
  InviteUserId:'',
  ActivityCode:0,
  signinlately:'',
}

export default handleActions({
  userinfos(state, action){
    return { ...state, userinfo: action.payload }
  },
  CollegeIds(state, action){
    return { ...state, CollegeId: action.payload }
  },
  distributionCodes(state, action){
    return { ...state, distributionCode: action.payload }
  },
  CategoryIds(state, action){
    return { ...state, CategoryId: action.payload }
  },
  CategoryIdsIndex(state, action){
    return { ...state, CategoryIdIndex: action.payload }
  },
  collegedetail(state, action){
    return { ...state, collegedetail: action.payload }
  },
  coupon(state, action){
    return { ...state, coupon: action.payload }
  },
  InviteUserId(state, action){
    return { ...state, InviteUserId: action.payload }
  },
  ActivityCode(state, action){
    return { ...state, ActivityCode: action.payload }
  },
  signinlately(state, action){
    return { ...state, signinlately: action.payload }
  },
}, defaultState)