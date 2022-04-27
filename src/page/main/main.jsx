import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Main() {

    const [character, setCharacter] = useState([]);
    const URL = 'https://rickandmortyapi.com/api/character'
    useEffect(() => {
        axios.get(URL)
            .then(({ data }) => setCharacter(data.results))
    }, [])

    return (
        <>
            <div>
                {character.map((characters) => (
                    <Link
                        to={`character/${characters.id}`}
                        key={characters.id}
                        className=' text-slate-200 p-2 '
                    >
                        <img className='mx-auto' src={characters.image} alt={characters.name} />
                        <h1 className='text-center font-bold text-lg'>{characters.name}</h1>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Main;