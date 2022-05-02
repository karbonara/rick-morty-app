import { Link } from "react-router-dom";

function Header() {
    return (
        <header className='p-10'>
            <Link
                className='text-white text-2xl font-bold block text-center p-4'
                to={'/'}
            >
                Rick and Morty
            </Link>
        </header>
    );
}

export default Header;
