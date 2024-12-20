import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import PainelBlog from '../pages/painelBlog';
import UpdateArticle from '../pages/updateArticle';
import DeleteArticle from '../pages/deleteArticle';
import CreateUser from '../pages/createUser';
import InsertArticle from '../pages/insertArticle';

const NavBarPainel = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">WebNexuss</Navbar.Brand>
        <Nav className="me-auto">
          {/* Links de navegação */}
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/InsertArticle">Inserir Article</Nav.Link>
          <Nav.Link as={Link} to="/deleteArticle">Delete Article</Nav.Link>
          <Nav.Link as={Link} to="/updateArticle">Update Article</Nav.Link>
          <Nav.Link as={Link} to="/createUser">Create New User</Nav.Link>
        </Nav>
      </Container>

      {/* Definição das rotas */}
      <Routes>
        <Route path="/" element={<PainelBlog />} />
        <Route path="/insertArticle" element={<insertArticle />} />
        <Route path="/updateArticle" element={<UpdateArticle />} />
        <Route path="/deleteArticle" element={<DeleteArticle />} />
        <Route path="/createUser" element={<CreateUser />} />
      </Routes>
    </Navbar>
  );
};

export default NavBarPainel;
