import React from 'react';

function Ticket() {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '5px' }}>
      <h3>Ticket Title</h3>
      <p>Ticket Description</p>
      <p><strong>Price:</strong> $50</p>
    </div>
  );
}

export default Ticket;