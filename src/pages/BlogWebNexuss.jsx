
import img from "../layout/Sasuke.jpg"

const elem = [{
    id: "001",
    titule: 'como aprender a programar',
    assunto: 'O que faz o dev front end',
    imgArtigo: "cd/asjdfkasdas.jpg",
    descricao: "Um dev frontend executa tais funções"
},
{
    id: "002",
    titule: 'como aprender a programar',
    assunto: 'O que faz o dev front end',
    imgArtigo: "cd/asjdfkasdas.jpg",
    descricao: "Um dev frontend executa tais funções"
},
{
    id: "003",
    titule: 'como aprender a programar',
    assunto: 'O que faz o dev front end',
    imgArtigo: "cd/asjdfkasdas.jpg",
    descricao: "Um dev frontend executa tais funções"
}, 
]

function BlogWebNexuss() {
    return (
        <div className="bg-dark row d-flex justify-content-around">
            {
                elem.map((e) => (
                        <div key = {e.id} className="col-md-3 border border-danger">
                            <div className="card">
                                <img src={img} className="card-img-top "/>
                                    <div className="card-body">
                                        <h5 className="card-title">{e.titule}</h5>
                                        <p className="card-text">{e.descricao}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                        
                ))
            }
        </div>
    )
}

export default BlogWebNexuss