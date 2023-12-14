import { Link } from "react-router-dom";

const Nav = () => {
    return <nav>
        <Link to={ '/' }>Home</Link>
        <Link to={ '/ListeJeuxPage' }>Contact</Link>
        {/* <Link to={ '/product/1' }>Product 1</Link> */}
    </nav>;
}

export default Nav;