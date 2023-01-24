import React, { useState } from 'react';
import useCountries from '../../hooks/useCountries.js';
import CountryCard from './CountryCard.js';
import Select from './Selecter.js';

export default function Main() {
  const [continent, setContinent] = useState('All');
  const countries = useCountries();
  const continents = [...new Set(countries.map((country) => country.continent))];
  const filter = countries.filter(
    (country) => country.continent === continent || continent === 'All'
  );
  return (
    <div>
      <Select continents={continents} setContinent={setContinent} />
      {filter.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </div>
  );
}
