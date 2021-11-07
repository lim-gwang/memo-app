import { 
  ITEM_DELETE, 
  ADD_ITEM, } from './action_type';

export const addItem = memos => ({
  type: ADD_ITEM,
  payload: memos,
});

export const itemDelete = id => ({
  type: ITEM_DELETE,
  payload : id,
});



// 초기상태
const initialState = {
  userItem: []
}

export const itemReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case ITEM_DELETE:
      const memos = state.userItem.filter(memo => memo.id !== action.payload)
      return {
        ...state,
        userItem: memos,
      }
    
    case ADD_ITEM:
      return {
        ...state,
        userItem: action.payload
      }

    default:
        return state;
  }
}