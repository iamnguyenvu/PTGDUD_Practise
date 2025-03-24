import React from 'react'

function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand>
                Brand text
            </Navbar.Brand>
            <Navbar.Collapse id="navbar-collapse-id">
                <Nav.Link eventKey="link-event-key">
                    todo-App
                </Nav.Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header