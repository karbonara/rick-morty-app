import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Character() {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const URL = `https://rickandmortyapi.com/api/character/${id}`;
    useEffect(() => {
        axios.get(URL)
            .then(({ data }) => setItem(data))
    }, [URL])

    return (
        <>
            <div className='container flex justify-center p-10 box-border'>
                <div>
                    <img src={item.image} alt={item.name} />
                </div>
                <div className='px-10'>
                    <h1 className='font-bold text-lg text-slate-50'>{item.name}</h1>
                    <p className='text-lg text-slate-50'>Статус {item.status}</p>
                    <p className='text-lg text-slate-50'>Разновидность {item.species}</p>
                </div>
            </div>

        </>
    );
}

export default Character;
