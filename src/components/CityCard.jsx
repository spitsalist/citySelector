
import React from 'react';

function CityCard({ city }) {
  if (!city) {
    return <div>Выберите город, чтобы увидеть информацию.</div>;
  }

  return (
    <div style={cardStyle}>
      <h2>{city.name}</h2>
      <img src={city.image} alt={city.name} style={imageStyle} />
      <p style={{textAlign: 'justify', padding: '0 20px'}}>{city.description}</p>
      <h3>Интересные факты:</h3>
      <ul  style={ulStyle} >
        {city.facts.map((fact, index) => (
          <li key={index} style={liStyle}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

const liStyle = {
    padding: '0',
    wordWrap: 'break-word',
    textAlign: 'justify'
}
const ulStyle = {
    textAlign: 'justify',
    padding: '0 20px'
    
}
const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  maxWidth: '600px',
  margin: '16px auto',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  wordWrap: 'break-word',
  overFlow: 'hidden'
 
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px'
};

export default CityCard;
