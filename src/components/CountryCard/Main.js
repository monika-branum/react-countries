import React from 'react';
import useCountries from '../../hooks/useCountries.js';
import CountryCard from './CountryCard.js';
import Select from './Selecter.js';

export default function Main() {
  const countries = useCountries();
  const continents = [...new Set(countries.map((country) => country.continent))].filter(
    (continent) => {
      return continent;
    }
  );
  // const filter = countries.filter((country)=> country.continent===continent)
  return (
    <div>
      <Select continents={continents} />
      {countries
        .filter((country) => country.continent === filter || filter === '')
        .map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
    </div>
  );
}
