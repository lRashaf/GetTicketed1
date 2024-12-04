import React from 'react';
import Slider from 'react-slick';
import './App.css'; // تأكد من أن لديك App.css لتنسيق العناصر
import { useNavigate } from 'react-router-dom';



const events = [
    { id: 1, title: 'Reignited 2', price: '50 ريال', image: '/images/قولف السعودية.png', category: 'sports' },
      { id: 2, title: 'MDL Beast Sound', price: '100 ريال', image: '/images/مسك للفنون.webp' },
  { id: 3, title: 'Concert A', price: '150 ريال', image: '/images/مهرجان الرياض.png' },
  { id: 4, title: 'Concert B', price: '200 ريال', image: '/images/مستقبل الازياء.webp' },
  { id: 5, title: 'Concert B', price: '200 ريال', image: '/images/بوليفارد وورلد.jpg' },

];

const musicEvents = [
  { id: 1, title: 'Reignited 2', price: '50 ريال', image: '/images/وردة.png', category: 'sports' },
  { id: 2, title: 'MDL Beast Sound', price: '100 ريال', image: '/images/‏‏السعودية موسيقى - نسخة.jpg', category: 'music' },
  { id: 3, title: 'Concert A', price: '150 ريال', image: '/images/الاووركسترا المصرية.jpg', category: 'music' },
  { id: 4, title: 'Jazz Night', price: '75 ريال', image: '/images/amr diab.jpg', category: 'music' },
  { id: 5, title: 'Rock Festival', price: '120 ريال', image: '/images/JAZZ.jpeg', category: 'music' },
];

const sportEvents = [
  { id: 1, title: 'دوري روشن السعدوي', price: '', image: '/images/دوري روشن السعودي.jpeg' },
  { id: 2, title: 'السوبر الاسباني', price: '100 ريال', image: '/images/السوبر الاسباني.jpg_large' },
  { id: 3, title: 'EA SPORTS', price: '120 ريال', image: '/images/EA SPORTS.webp' },
  { id: 3, title: 'EA SPORTS', price: '120 ريال', image: '/images/قولف السعودية.png' },

];

const adventureEvents = [
  { id: 1, title: 'Zipline Adventure', price: '200 ريال', image: '/images/تسلق جبال ابها.png' },
  { id: 2, title: 'Desert Safari', price: '300 ريال', image: '/images/زيبلاين العلا.jfif' },
  { id: 3, title: 'Mountain Climbing', price: '250 ريال', image: '/images/السودة.jpg' },
  { id: 4, title: 'Mountain Climbing', price: '250 ريال', image: '/images/سياكل سودة.jpg' },
  { id: 5, title: 'Mountain Climbing', price: '250 ريال', image: '/images/سياكل جبلية.jpg' },


];

const theaterEvents = [
  { id: 1, title: 'Theater Play A', price: '150 ريال', image: '/images/theater1.jpg' },
  { id: 2, title: 'Theater Play B', price: '200 ريال', image: '/images/theater2.jpg' },
];

const exploreRiyadh = [
  { id: 1, title: 'Historical Riyadh', price: 'مجاني', image: '/images/historical.jpg' },
  { id: 2, title: 'Riyadh Parks', price: 'مجاني', image: '/images/parks.jpg' },
];

const festivalsAndSeasons = [
  { id: 1, title: 'Winter Wonderland', price: '50 ريال', image: '/images/ميدل بيست الرياض.avif' },
  { id: 2, title: 'Riyadh Season', price: '100 ريال', image: '/images/منطقة-العجائب جدة.webp' },
  { id: 2, title: 'Riyadh Season', price: '100 ريال', image: '/images/ساوندستورم 24.jpg' },
  { id: 2, title: 'Riyadh Season', price: '100 ريال', image: '/images/مناطق الرياض.webp' },


];

const boulevardExperiences = [
  { id: 1, title: 'New Attractions', price: '150 ريال', image: '/images/boulevard1.jpg' },
  { id: 2, title: 'Light Shows', price: '100 ريال', image: '/images/boulevard2.jpg' },
];

const selectedPlaysAndShows = [
  { id: 1, title: 'Broadway Show', price: '300 ريال', image: '/images/broadway.jpg' },
  { id: 2, title: 'Comedy Night', price: '100 ريال', image: '/images/comedy.jpg' },
];

const restaurantReservations = [
  { id: 1, title: 'Restaurant A', price: 'احجز الآن', image: '/images/restaurant1.jpg' },
  { id: 2, title: 'Restaurant B', price: 'احجز الآن', image: '/images/restaurant2.jpg' },
];
// إعدادات سلايدر كبيرة
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
  };
  
  // إعدادات سلايدر صغيرة
  const smallerSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
  };


  const EventList = () => {
    const navigate = useNavigate();
  
    const renderEventSection = (title, events, sliderSettings) => (
      <div className="section">
        <h2>{title}</h2>
        <Slider {...sliderSettings}>
          {events.map((event) => (
            <div key={event.id} className="event-slide">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.price}</p>
                <button
                  className="book-btn"
                  onClick={() => navigate(`/event/${event.id}`)} // تصحيح رابط الانتقال
                >
                  احجز الآن
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  
    return (
      <div>
        {renderEventSection('الفعاليات العامة', events, settings)}
        {renderEventSection('فعاليات موسيقية', musicEvents, smallerSettings)}
        {renderEventSection('فعاليات رياضية', sportEvents, smallerSettings)}
        {renderEventSection('فعاليات مغامرات وتجارب', adventureEvents, smallerSettings)}
        {renderEventSection('فعاليات مسرحية', theaterEvents, smallerSettings)}
        {renderEventSection('اكتشف مناطق الرياض', exploreRiyadh, settings)}
        {renderEventSection('مواسم ومهرجانات', festivalsAndSeasons, settings)}
        {renderEventSection('أحدث تجارب بوليفارد سيتي', boulevardExperiences, smallerSettings)}
        {renderEventSection('العروض والمسرحية المختارة', selectedPlaysAndShows, settings)}
        {renderEventSection('احجز طاولتك في مطعمك المفضل', restaurantReservations, smallerSettings)}
      </div>
    );
  };
  
  export default EventList;