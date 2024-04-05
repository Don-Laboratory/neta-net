import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/scss/component/_navbar.scss';

const HeaderHome = () => {
  return (
    <Container>
      <Navbar expand="lg" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#">
            <img src='https://placehold.jp/173x79.png'></img>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default HeaderHome;