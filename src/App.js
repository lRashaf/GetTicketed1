import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';



import './App.css'; // إضافة هذا السطر في أعلى الملف
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ticket from './components/Ticket';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import EventsSlider from './components/EventsSlider';
// تأكد من المسار الصحيح
// إذا كانت الملفات في مجلد components، يجب تعديل المسار كما في المثال أدناه

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SearchBar />
        <EventsSlider />
      </div>
      <Routes>
      <Route path="/" element={<EventList />} />
      <Route path="/event/:id" element={<EventDetails />} />      </Routes>
    </Router>
  );
}

export default App;