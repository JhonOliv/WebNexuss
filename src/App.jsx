import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import PainelLayout from './layout/painelLayout';
import InsertArticle from './pages/insertArticle';
import DeleteArticle from './pages/deleteArticle';
import UpdateArticle from './pages/updateArticle';
import CreateUser from './pages/createUser'

function App() {
    return (
        <Router>
            <Routes>
                {/* Rota principal de login */}
                <Route path="/" element={<Login />} />

                {/* Rotas do Painel com layout */}
                <Route path="/painel" element={<PainelLayout />}>
                    <Route path="insertArticle" element={<InsertArticle />} />
                    <Route path="deleteArticle" element={<DeleteArticle />} />
                    <Route path="updateArticle" element={<UpdateArticle />} />
                    <Route path="createUser" element={<CreateUser />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App