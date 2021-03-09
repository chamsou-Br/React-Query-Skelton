import React, { useState } from 'react'
import { useQuery , useQueryClient } from 'react-query'
import Planet from './Planet';

const FetchQueryData = async (key ) => {
    const res =  await fetch(`https://swapi.dev/api/planets/?page=${key.queryKey[1]}`);
    return res.json()
}
const Plantes = () => {
    const [page , setPage] = useState(2);
    const {data , status} =  useQuery(['planets',page] , FetchQueryData)
    return(
        <div className='planets' >
            <h3>planets</h3>
             {status === 'error' && (
                 <div>
                     we have an Erour in fetch Data Query
                 </div>
             )}
            {status === 'loading' && (
                <div>
                    Data is Loading ...
                </div>
            )}
            {status === 'success' && (
                <div className='content'>
                <button 
                    onClick={()=> {
                        if (page > 1) setPage(page => page-1);
                    }}
                    disabled={page === 1}>
                    previous
                </button>
                <button
                 onClick={()=> {
                        if (page < 5) setPage(page => page+1);
                    }}
                    disabled={page === 5}
                    >
                    Next
                </button>
                <div className='all' >
                    {data.results.map(res => <Planet key={res.name} planet={res} />)}
                    </div>
                </div>
            )}
        </div>
    )
}
export default Plantes