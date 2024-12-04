import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // مكتبة لعرض الشرائح
import './App.css'; // ملف التنسيقات

// بيانات الفعاليات
const events = [
  { id: 1, title: 'Reignited 2', price: '50 ريال', image: '/images/قولف السعودية.png' },
  { id: 2, title: 'MDL Beast Sound', price: '100 ريال', image: '/images/مسك للفنون.webp' },
  { id: 3, title: 'Concert A', price: '150 ريال', image: '/images/مهرجان الرياض.png' },
  { id: 4, title: 'Concert B', price: '200 ريال', image: '/images/مستقبل الازياء.webp' },
  { id: 5, title: 'Boulevard Event', price: '300 ريال', image: '/images/بوليفارد وورلد.jpg' },
];

// إعدادات الشرائح
const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
};

const EventList = () => {
  const navigate = useNavigate(); // لاستخدام التنقل إلى صفحة التفاصيل

  return (
    <div>
      <h2>الفعاليات</h2>
      {/* عرض الشرائح */}
      <Slider {...sliderSettings}>
        {events.map((event) => (
          <div key={event.id} className="event-slide">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.price}</p>
              {/* زر الحجز */}
              <button
                className="book-btn"
                onClick={() => navigate(`/event/${event.id}`)} // تأكد من أن الرابط بين القوسين هو الرابط الصحيح
              >
                احجز الآن
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventList;