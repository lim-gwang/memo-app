import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import Item from '../components/Item'
import { fetchUserData } from '../store/user/user';

const itemSelector = state => state.itemReducer.userItem

const Main = ({ memos }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserData)
  }, [])

  const userItem = useSelector(itemSelector)

  const items = userItem.map(item => {
    let file ='';
    if (item.files[0]) {
      file = item.files[0].url
    } else {
      file = '';
    }

    return ( 
      <Item
        key={item.id}
        id={item.id}
        title={item.title}
        content={item.content}
        src={file}
      />
    )
  })
  return (
    <main id="main">
      <Container style={{
        display:"flex",
        flexFlow:"wrap"
      }}>
        {items}
      </Container>
    </main>
  )
}

export default Main
