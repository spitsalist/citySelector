import React, { useState } from 'react';
import CitySelector from './CitySelector';
import CityCard from './CityCard';

function App() {
  const citiesData = [
    {
      name: 'Токио',
      description: 'Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.',
      image: 'https://554a875a-71dc-4f5f-b6bf-ae8967f137d5.selcdn.net/thumbs2/35f6bbda-4161-11ee-a134-263b0b64c022.1220x600.jpeg',
      facts: [
        'Токио - самый населенный мегаполис в мире.',
        'Здесь расположена самая высокая башня в Японии - Токийская башня.',
        'В Токио проходят множество культурных событий и фестивалей.'
      ]
    },
    {
      name: 'Киото',
      description: 'Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.',
      image: 'https://www.svoiludi.ru/images/tb/385/kioto-16950550622955_w687h357.jpg',
      facts: [
        'В Киото насчитывается более 1600 буддийских храмов.',
        'Этот город был столицей Японии более тысячи лет.'
        
      ]
    },
    {
      name: 'Осака',
      description: 'Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью. ',
      image: 'https://www.japantravel.ru/sites/default/files/styles/watermark/public/2020-06/osaka.jpg?itok=ZX0EWTwR',
      facts: [
        'Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.',
        'Город является кулинарной столицей Японии.'
      ]
    },
    {
    name: 'Хоккайдо',
    description: 'Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/140829_Ichiko_of_Shiretoko_Goko_Lakes_Hokkaido_Japan04s3.jpg/1200px-140829_Ichiko_of_Shiretoko_Goko_Lakes_Hokkaido_Japan04s3.jpg',
    facts: [
      'Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.',
      'Летом остров привлекает туристов своими цветущими лавандовыми полями.'
    ]
  },
    
  {
    name: 'Нагоя',
    description: 'Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.',
    image: 'https://voyagejapan.com/getimg/940/451/crop/fill/files/core/552_image.jpg',
    facts: [
      'Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.',
      'Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.'
    ]
  }
  ];

  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelectCity = (cityName) => {
    const city = citiesData.find((c) => c.name === cityName);
    setSelectedCity(city);
  };

  return (
    <div style={appStyle}>
      <CitySelector cities={citiesData} onSelectCity={handleSelectCity} />
      <CityCard city={selectedCity} />
    </div>
  );
}

const appStyle = {
  textAlign: 'center',
  padding: '20px'
};

export default App;
