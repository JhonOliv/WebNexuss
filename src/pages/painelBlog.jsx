import 'bootstrap/dist/css/bootstrap.css';

import NavBarPainel from '../components/NavBarPainel';
import { Outlet } from 'react-router-dom';



function painelBlog() {
    return (
        <>
            <NavBarPainel />
            <Outlet />
          

        </>

    )
}

export default painelBlog
