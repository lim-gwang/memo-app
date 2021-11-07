import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Button, Form, FloatingLabel, Col } from 'react-bootstrap'
import { createMemo } from '../store/user/user';


const AddItemModal = ( {show, onHide} ) => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: '',
    content: '',
  })

  const handleChange = name => e => {
    setInput({
      ...input,
      [name]: e.target.value
    })
  }

  const handleSubmit = e => {
    const formData = new FormData(formRef.current)
    dispatch(createMemo(formData))

    setInput({
      title: '',
      content: '',
    })

    onHide(false)
  }

  return (
    <Modal 
      show={show} 
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>리스트 추가하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form noValidate onSubmit={handleSubmit} ref={formRef}>
            <Col className="mb-3">
              <Form.Group
                controlId="validationFormik101"
                className="position-relative"
              >
                <Form.Label>제목</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={handleChange('title')}
                  isValid={false}
                />
              </Form.Group>

              <Form.Group
                controlId="validationFormik102"
                className="position-relative"
              >
              <Form.Label>내용</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="">
                  <Form.Control
                    type="text"
                    name="content"
                    value={input.content}
                    onChange={handleChange('content')}
                    isValid={false}
                    as="textarea"
                    style={{ 
                      height: '150px',
                      paddingTop:"1rem",
                      resize:"none",
                    }}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
            <Form.Group className="position-relative mb-3" >
              <Form.Label>File</Form.Label>
              <Form.Control
                type="file"
                required
                name="files[]"
              />
            </Form.Group>
            <div className="d-grid gap-2">
            <Button type="button" onClick={handleSubmit}>추가하기</Button>
            </div>
          </Form>
      </Modal.Body>
    </Modal>
  )
}

export default AddItemModal
