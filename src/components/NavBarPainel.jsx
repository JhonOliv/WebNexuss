import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


function NavBarPainel({onNavClick, painelNavClick}) {
  return (
    <nav className="bg-dark">
      <Nav bg="dark" variant="tabs" defaultActiveKey="/painel">
        <Nav.Item>
          <Nav.Link onClick={painelNavClick} as={Link} to="/painel">Painel</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={onNavClick} as={Link} to="/painel/insertArticle">Inserir Artigo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={onNavClick} as={Link} to="/painel/deleteArticle">Delete Artigo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={onNavClick} as={Link} to="/painel/updateArticle">Update Artigo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={onNavClick} as={Link} to="/painel/createUser">New User</Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>

  );
}

export default NavBarPainel;
