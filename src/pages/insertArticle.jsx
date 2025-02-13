import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from 'react';



const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export default function insertArticle() {


    const [getIdBlog, setIdBlog] = useState("");
    const [getTitleBlog, setTitleBlog] = useState();
    const [getAssuntoBlog, setAssuntoBlog] = useState();
    const [getImgBlog, setImgBlog] = useState();
    const [getDescricaoBlog, setDescricaoBlog] = useState();
    const [publicUrl, setPublicUrl] = useState();
   
    async function uploadImage(file) {
        
        const storege = getStorage(app);
        const spaceRef = ref(storege, `images/${file[0].name}`);
        
        const metaData = {
            contentType: file[0].type, // Define o tipo correto
        };
    
        try {
            // Faz o upload do arquivo com metadados
            await uploadBytes(spaceRef, file[0], metaData);
            console.log("Arquivo enviado com sucesso!");
    
            // Obtém a URL pública
            const urlPublic = await getDownloadURL(spaceRef);
            setPublicUrl(urlPublic)
    
    
            return urlPublic; 
        } catch (error) {
            console.error("Erro durante o upload ou ao obter a URL:", error);
            return null;
        }
    }

     function saveArticle(e) {
        e.preventDefault();

        const urlImg = uploadImage(getImgBlog);
        // Monta o objeto do artigo
         const completeArticle = {
               id: getIdBlog,
               titulo: getTitleBlog,
               assunto: getAssuntoBlog,
               imagem: publicUrl,
               descricao: getDescricaoBlog,
           };
           // Adiciona o documento na coleção "articleBlog"
         
           try {
               // Referência à coleção "articleBlog"
               const articleCollectionRef = collection(dataBase, "articleBlog");
   
               // Adiciona o documento à coleção
               const docRef = addDoc(articleCollectionRef, completeArticle);
   
               // Sucesso
               console.log("Documento adicionado com sucesso! ID:", docRef.id);
           } catch (error) {
               // Erro
               console.error("Erro ao adicionar documento:", error);
           } 


    }

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-8'>
                    <form className='my-5 p-4 border'>
                        <div className='text-center'>
                            <h3 className="display-4"> Painel Blog WebNexuss</h3>
                        </div>

                        <div className="w-25">
                            <div className='p-2'>
                                <label className='form-label'>Identificador Blog</label>
                                <input onChange={e => {
                                    setIdBlog(e.target.value)
                                }} type="text" className='form-control text-end' />
                            </div>
                        </div>
                        <div className='my-4 d-flex'>
                            <div className='w-50 p-2'>
                                <label className='form-label'>Titulo do Artigo</label>
                                <input onChange={e => {
                                    setTitleBlog(e.target.value)
                                }} type='text' className='form-control' />
                            </div>
                            <div className='w-50 p-2'>
                                <label className='form-label'>Assunto do Artigo</label>
                                <input onChange={e => {
                                    setAssuntoBlog(e.target.value)
                                }} type='text' className='form-control' />
                            </div>
                        </div>
                        <div className='my-4 p-2'>
                            <label className='form-label'>Selecionar imagem do Artigo</label>
                            <input onChange={e => {
                                setImgBlog(e.target.files)
                            }} type='file' className='form-control mt-1' />
                        </div>
                        <div className='my-4  p-2'>
                            <label className='form-label'>Descrição do Blog</label>
                            <textarea onChange={e => {
                                setDescricaoBlog(e.target.value)
                            }} type="text" className='form-control' />
                        </div>
                        <div className='d-flex justify-content-end p-2'>
                            <input type="button" className='btn btn-outline-success mx-2' onClick={saveArticle} value="Insert Article" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
