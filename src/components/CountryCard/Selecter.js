import React, { useState } from 'react';
const [filter, setFilter] = useState('');

export default function Select({ continents }) {
  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
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
