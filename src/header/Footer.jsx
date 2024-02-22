import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Footer = () => {
  return (
    <div>
      <Navbar bg='dark' data-bs-theme='dark' >
        <Container>
          <Nav className='me-auto'>
            <Nav.Link href='/App'>App</Nav.Link>
            <Nav.Link href='/Accordian'>Accordian</Nav.Link>
            <Nav.Link href='/OffCanvas'>OffCanvas</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer

