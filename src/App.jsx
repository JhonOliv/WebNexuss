import 'bootstrap/dist/css/bootstrap.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PainelBlog from "./pages/painelBlog";
import Login from './pages/login'

const firebaseConfig = {
    apiKey: "AIzaSyDYqdxP_5hbArrg_R4_g7Iz3WMnV9wjCBE",
    authDomain: "webnexuss.firebaseapp.com",
    projectId: "webnexuss",
    storageBucket: "webnexuss.firebasestorage.app",
    messagingSenderId: "628801567818",
    appId: "1:628801567818:web:76df575b1a112146a6bab3",
    measurementId: "G-GEBPX15CBN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Conexão com o Firestore

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/painelBlog" element={<PainelBlog />} />
                </Routes>
            </Router>
        </>
    )

}

export default App
