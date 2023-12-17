import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import ListeJeuxPage from '../pages/ListeJeuxPage';
import ProductPage from '../pages/ProductPage';
import Userlogin from '../components/Userlogin';
import DetailsJeuPage from '../pages/DetailsJeuPage';
import ProductPageDetail from '../pages/ProductPageDetail';

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
                path: 'homepage',
                element: <HomePage />
            },
            {
                path: 'listejeu',
                element: <ListeJeuxPage />
            },
            {
                path: 'product/:id',
                element: <ProductPage />,
            },
            {
                path: 'productDetail/:id',
                element: <ProductPageDetail />,
            },
        ],
    },
]);

export default router;