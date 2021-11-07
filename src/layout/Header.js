import React, { useState } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import AddItemModal from '../modal/AddItemModal'
import { logout } from '../store/user/user'

const Header = () => {
  const history = useHistory();
  const [addItemModalShow, setaddItemModalShow] = useState(false);



  const logoutAction = () => {
    logout();
    history.push('/')
  }
  return (
    <>
      <AddItemModal
        show={addItemModalShow}
        onHide={setaddItemModalShow}
      />
      <header id="header">
        <Container>
          <Navbar bg="light" expand="lg">
              <h3>Logo</h3>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="gap-2">
                  <Button
                    onClick={()=> setaddItemModalShow(true)}
                  >
                    리스트 추가하기
                  </Button>
                  <Button 
                    variant="secondary"
                    onClick={logoutAction}
                  >
                    로그아웃
                  </Button>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </>
  )
}

export default Header
