function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" id="menuNav">
                <div class="container w-75">
                    <a class="navbar-brand fw-bold" href="#">WebNexus</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <span class="close-btn d-lg-none btn text-black fs-1" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Fechar">×</span>
                        <ul class="navbar-nav">
                            <ul class="navbar-nav align-items-center">
                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#">Quem somos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Portfólio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Nossos Serviços</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contato</a>
                                </li>
                                <li class="nav-item">
                                    <button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#formModal">Solicite um orçamento</button>
                                </li>
                            </ul>
                        </ul></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;