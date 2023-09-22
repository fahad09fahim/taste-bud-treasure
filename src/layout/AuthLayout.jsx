
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const AuthLayout = () => {
    return (
       <>
        <Header/>
        <Outlet/>
        <Footer/>
       </>

    );
};

export default AuthLayout;