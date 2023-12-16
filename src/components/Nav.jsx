import { Link } from "react-router-dom";

const Nav = () => {
    return <nav>
        <Link to={ '/' }>Home</Link>
        {/* <Link to={ '/ListeJeuxPage' }>Liste des jeux</Link> */}
        <Link to={ '/product/1' }>Liste des jeux</Link>
    </nav>;
}

export default Nav;