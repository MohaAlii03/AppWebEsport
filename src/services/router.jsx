import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import ListeJeuxPage from '../pages/ListeJeuxPage';
import ProductPage from '../pages/ProductPage';
import Userlogin from '../components/Userlogin';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <Userlogin />
            },
            {
                path: 'listejeu',
                element: <ListeJeuxPage />
            },
            {
                path: 'product/:id',
                element: <ProductPage />,
            },
        ],
    },
]);

export default router;