import axios from 'axios'
import { addItem, itemDelete } from '../memo/actions';
import { useHistory } from 'react-router';

// 회원가입
export const join = ({ account, password, passwordConfirmation }, onHide) => (dispatch, getState) => {
  return axios.post('/api/sign-up', {
    account,
    password,
    password_confirmation: passwordConfirmation,
  })
}

// 로그인 
export const login = ({ account, password }) => {
  return axios.post('/api/sign-in', {
    account,
    password,
  })
  .then(res => {
    const token = res.data.token;
    localStorage.setItem('token', token );
  })
}

// 로그아웃
export const logout = () => {
  localStorage.removeItem('token');
}

//유저 리스트 아이템 데이터
const userData = async () => {
  const memos = await axios.get('/api/memos', {
      headers: {
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.data.memos)
    
    return memos
}

export const fetchUserData = (dispatch, getState) => {
  userData()
    .then(memos => {
      dispatch(addItem(memos))
    })
}

const _createMemo = formData => {
  return axios.post('/api/memos', formData, {
    headers: {
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })
}

export const createMemo = formData => (dispatch, getState) => {
  _createMemo(formData)
    .then(res => {
      dispatch(fetchUserData)
    })
}

const _deleteMemo = (id) => {
  return axios.delete(`/api/memos/${id}`, {
    headers: {
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })
}

export const deleteMemo = id => (dispatch, getState) => {
  _deleteMemo(id)
    .then(res => {
      dispatch(itemDelete(id))
    })
}

// export const deleteMemo = (id) => (dispatch, getState) => {
//   userData()
//     .then(memos => {
//       dispatch(itemDelete(id))
//     })
// }
