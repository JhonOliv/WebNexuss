import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyDYqdxP_5hbArrg_R4_g7Iz3WMnV9wjCBE",
    authDomain: "webnexuss.firebaseapp.com",
    projectId: "webnexuss",
    storageBucket: "webnexuss.firebasestorage.app",
    messagingSenderId: "628801567818",
    appId: "1:628801567818:web:76df575b1a112146a6bab3",
    measurementId: "G-GEBPX15CBN",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export default function DeleteArticle() {
    const [articleDelete, setArticleDelete] = useState([]); // Estado para armazenar os artigos

    const getAllDocuments = async () => {
        try {
            // Referência à coleção
            const collectionRef = collection(dataBase, "articleBlog");
            const querySnapshot = await getDocs(collectionRef);

            // Mapear documentos retornados
            const documents = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setArticleDelete(documents); // Atualiza o estado
        } catch (error) {
            console.error("Erro ao buscar documentos:", error);
        }
    };

    return (
        <>
            <div>
                <div className="d-flex justify-content-center">
                    <button className="btn m-4 btn-primary btn-lg" onClick={getAllDocuments}>Buscar Todos Artigos</button>
                </div>
                <div className="row d-flex justify-content-around ">
                    {articleDelete.map((el) => (
                        <div key={el.id} className="col-md-4">
                            <div className="card">
                                <img src={el.imagem} alt="Imagem" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{el.title}</h5>
                                    <p className="card-text">{el.assunto}</p>
                                    <p className="card-text">{el.descricao}</p>
                                    <a href="#" className="btn btn-danger">Delete Article</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
