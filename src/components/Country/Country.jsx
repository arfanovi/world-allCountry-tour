import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags,population, area, cca3} = country;

    const [visited, setVisited] =useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }

  
    



    console.log(handleVisitedCountry)
    return (
        <div className='country'>
            <h3 className='text'> *{name?.common}*</h3><hr />
            <img className='img' src={flags.png} alt=""/>
            <p className='text'>Population: {population}</p>
            <p className='text'>Area: {area}</p>
            <p className='text'>Code: {cca3}</p>


            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br /><br />


            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />

            <button className='btn' onClick={handleVisited}>{visited ? 'Visited' : 'Going'} </button> 
            { visited  ?  'I have visited this country.' : 'I want to visite.'}


        </div>
    );
};

export default Country;