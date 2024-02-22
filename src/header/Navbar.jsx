import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navbar1 = () => {
  return (
    <div className='mb-5'>
      <Navbar bg='dark' data-bs-theme='dark' fixed='top' >
        <Container>
          <Nav className='me-auto'>
            <Nav.Link href='/App'>App</Nav.Link>
            <Nav.Link href='/Accordian'>Accordian</Nav.Link>
            {/* <Nav.Link href='/Tabs'>Tabs</Nav.Link>
            <Nav.Link href='/OffCanvas'>offcanvas</Nav.Link>
            <Nav.Link href='/New'>New</Nav.Link> */}



          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar1
