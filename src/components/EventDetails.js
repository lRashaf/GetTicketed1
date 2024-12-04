import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams(); // الحصول على معرف الفعالية من الرابط

  // البيانات المؤقتة (يمكن استبدالها بقاعدة بيانات أو API)
  const events = [
    { id: '1', title: 'Reignited 2', price: '50 ريال', description: 'تفاصيل عن فعالية Reignited 2', image: '/images/قولف السعودية.png' },
    { id: '2', title: 'MDL Beast Sound', price: '100 ريال', description: 'تفاصيل عن فعالية MDL Beast Sound', image: '/images/مسك للفنون.webp' },
    // أضف باقي الفعاليات هنا...
  ];

  // العثور على الفعالية المناسبة باستخدام المعرف
  const event = events.find((event) => event.id === id);

  // إذا لم يتم العثور على الفعالية
  if (!event) {
    return <div>الفعالية غير موجودة</div>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#fff', backgroundColor: '#000' }}>
      <img src={event.image} alt={event.title} style={{ width: '100%', borderRadius: '10px', maxHeight: '400px', objectFit: 'cover' }} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p><strong>السعر:</strong> {event.price}</p>
      <button style={{ padding: '10px 20px', backgroundColor: '#ff4081', border: 'none', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
        تأكيد الحجز
      </button>
    </div>
  );
};

export default EventDetails;