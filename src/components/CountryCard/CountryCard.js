import React from 'react';
import './CountryCard.css';

export default function CountryCard({ id, iso2, name, iso3, local_name, continent }) {
  return (
    <div className="country-card">
      <div className="details">
        <div className="id">{id}</div>
        <img
          src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`}
          width="16"
          height="12"
          alt="South Africa"
        ></img>
        <div className="name">{name}</div>
        <div className="iso3">{iso3}</div>
        <div className="local_name">{local_name}</div>
        <div className="continent">{continent}</div>
      </div>
    </div>
  );
}
