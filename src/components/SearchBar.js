import React, { useState } from 'react';

function SearchBar({ events, setFilteredEvents }) {
  const [searchText, setSearchText] = useState('');
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [zone, setZone] = useState('');

  const handleSearch = () => {
    const filtered = events.filter(event => {
      return (
        (event.title.toLowerCase().includes(searchText.toLowerCase()) || 
        event.price.toLowerCase().includes(searchText.toLowerCase())) &&
        (city ? event.city === city : true) &&
        (category ? event.category === category : true) &&
        (zone ? event.zone === zone : true)
      );
    });
    setFilteredEvents(filtered);
  };

  return (
    <div style={{ textAlign: 'center', margin: '30px 0' }}>
      <h1>احجز أفضل الفعاليات والتجارب والمسرحيات</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="ابحث عن فعالياتنا"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ padding: '10px', width: '50%', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <button 
          onClick={handleSearch}
          style={{
            backgroundColor: '#ff4081',
            border: 'none',
            padding: '10px 15px',
            marginLeft: '10px',
            cursor: 'pointer',
            color: 'white',
            borderRadius: '5px'
          }}
        >
          بحث
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: '10px', margin: '5px', borderRadius: '5px' }}
        >
          <option value="">اختر المدينة</option>
          <option value="Riyadh">الرياض</option>
          <option value="Jeddah">جدة</option>
          <option value="Dammam">الدمام</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '10px', margin: '5px', borderRadius: '5px' }}
        >
          <option value="">اختر التصنيف</option>
          <option value="music">موسيقى</option>
          <option value="sports">رياضة</option>
          <option value="adventure">مغامرات</option>
        </select>
        <select
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          style={{ padding: '10px', margin: '5px', borderRadius: '5px' }}
        >
          <option value="">اختر الزون</option>
          <option value="North">الشمال</option>
          <option value="South">الجنوب</option>
          <option value="East">الشرق</option>
          <option value="West">الغرب</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;