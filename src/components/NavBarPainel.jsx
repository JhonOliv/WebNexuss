import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import PainelBlog from '../pages/painelBlog';
import UpdateArticle from '../pages/updateArticle';
import DeleteArticle from '../pages/deleteArticle';
import CreateUser from '../pages/createUser';

const NavBarPainel = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="../pages/painelBlog">WebNexuss</Navbar.Brand>
        <Nav className="me-auto">
          {/* Links de navegação */}
          <Nav.Link as={Link} to="../pages/painelBlog">Insert New Article</Nav.Link>
          <Nav.Link as={Link} to="../pages/updateArticle">Update Article</Nav.Link>
          <Nav.Link as={Link} to="../pages/deleteArticle">Delete Article</Nav.Link>
          <Nav.Link as={Link} to="../pages/createUser">Create New User</Nav.Link>
        </Nav>
      </Container>

      {/* Definição das rotas */}
      <Routes>
        <Route path="../pages/painelBlog" element={<PainelBlog />} />
        <Route path="../pages/updateArticle" element={<UpdateArticle />} />
        <Route path="../pages/deleteArticle" element={<DeleteArticle />} />
        <Route path="../pages/createUser" element={<CreateUser />} />
      </Routes>
    </Navbar>
  );
};

export default NavBarPainel;
