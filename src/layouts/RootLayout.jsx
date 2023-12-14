import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return <>
        <Nav />
        <h1>Root</h1>
        <Outlet />
    </>;
}

export default RootLayout;