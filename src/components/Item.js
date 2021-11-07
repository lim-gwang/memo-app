import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { deleteMemo } from '../store/user/user'

const Item = ( {id, title, content, src} ) => {

  const dispatch = useDispatch();

  return (
    <Card style={{ 
      margin:".5rem",
    }}>
      <figure style={{display:"none"}}
        className="figure"
      >
        {
          src ? (
            <Card.Img variant="top" src={src}/>
          ) : (
            // null
            <Card.Img variant="top" src={'http://placehold.it/250x250'}/>
          )
        }
      </figure>

    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {content}
      </Card.Text>
      <Button 
        variant="secondary"
        onClick={() => dispatch(deleteMemo(id))}
      >
          삭제하기
      </Button>
    </Card.Body>
  </Card>
  )
}

export default Item
