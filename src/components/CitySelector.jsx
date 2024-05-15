// import React, { useState } from 'react';
import React from 'react';

function CitySelector({ cities, onSelectCity }) {
  return (
    <div style={{ selectorStyle }}>
      <h2>Выберите город</h2>
      <select onChange={(e) => onSelectCity(e.target.value)} style={selectStyle}>
        <option value="">--Выберите город--</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

const selectorStyle = {
    margginBottom: '20px',
}

const selectStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
}
export default CitySelector;
