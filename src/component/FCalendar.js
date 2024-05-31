// import React, { useState, useEffect } from 'react';
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import axios from 'axios';
// import ModalBasic from './ModalBasic';



// const renderEventContent = (eventInfo) => {
//   return (
//     <>
//       <b>{eventInfo.event.title}</b>
//     </>
//   );
// };

// const FCalendar = () => {
//   const [events, setEvents] = useState([]);
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [newEventTitle, setNewEventTitle] = useState('');
//   const [newEventDate, setNewEventDate] = useState('');

//   useEffect(() => {
//     // 초기 로드 시 서버에서 이벤트 가져오기
//     axios.get('/api/events')
//       .then(response => {
//         setEvents(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching events:', error);
//       });
//   }, []);

//   const openModal = (date) => {
//     setNewEventDate(date);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const handleDateClick = (arg) => {
//     openModal(arg.dateStr);
//   };

//   const handleAddEvent = () => {
//     if (newEventTitle) {
//       const newEvent = { title: newEventTitle, date: newEventDate };
//       axios.post('/api/events', newEvent)
//         .then(response => {
//           setEvents([...events, response.data]);
//           closeModal();
//         })
//         .catch(error => {
//           console.error('Error saving event:', error);
//         });
//     }
//   };

//   return (
//     <div style={{ height: 700, width: 700 }} className="App">
//       <FullCalendar
//         plugins={[dayGridPlugin, interactionPlugin]}
//         initialView="dayGridMonth"
//         events={events}
//         eventContent={renderEventContent}
//         dateClick={handleDateClick}
//       />
//       <ModalBasic
//         modalIsOpen={modalIsOpen}
//         closeModal={closeModal}
//         newEventTitle={newEventTitle}
//         setNewEventTitle={setNewEventTitle}
//         handleAddEvent={handleAddEvent}
//         newEventDate={newEventDate}
//       >
//       </ModalBasic>
//     </div>
//   );
// };

// export default FCalendar;
