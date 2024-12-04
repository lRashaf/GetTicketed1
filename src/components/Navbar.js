import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#000', color: '#fff' }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>GetTicketed</div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
        <li>مين احنا</li>
        <li>احجز الآن</li>
        <li>فعالياتنا</li>
        <li>حفلاتنا</li>
        <li>جديدنا</li>
      </ul>
    </nav>
  );
}

export default Navbar;
 