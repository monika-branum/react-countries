import React, { useState } from 'react';

export default function Select({ continents, setContinent }) {
  return (
    <div>
      <select onChange={(e) => setContinent(e.target.value)}>
        <option>All</option>
        {continents.map((continent) => (
          <option value={continent} key={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}
