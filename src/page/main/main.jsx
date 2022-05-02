import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/pagination';
import Search from '../../components/search/search';

function Main() {

    const [search, setSearch] = useState('');
    const [character, setCharacter] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const URL = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

    useEffect(() => {
        axios.get(URL)
            .then(({ data }) => setCharacter(data.results))
    }, [URL]);

    return (
        <>
            <Search setSearch={setSearch} />
            <div className='flex flex-wrap justify-center'>
                {character.map((characters) => (
                    <Link
                        to={`character/${characters.id}`}
                        key={characters.id}
                        className=' text-slate-200 p-2 m-1 relative'
                    >
                        <img
                            className='mx-auto' src={characters.image}
                            alt={characters.name} />
                        <h1
                            className='text-center font-bold text-lg'>
                            {characters.name}
                        </h1>
                        <div
                            className='text-center font-bold absolute top-5 right-5 bg-green-600 rounded-md p-1'>
                            {characters.status}
                        </div>
                        <div>
                            {/* {characters.location} */}
                        </div>
                    </Link>
                ))}
            </div>
            <Pagination setPageNumber={setPageNumber} />
        </>
    );
}

export default Main;