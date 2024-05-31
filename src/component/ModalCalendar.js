import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import ModalTest from "./ModalTest";

const renderEventContent = (eventInfo) => {
    return (
        <>
            <i>{eventInfo.event.title}</i>
        </>
    );
};

const ModalCalendar = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (arg) => {
        setSelectedEvent(arg.event);
        console.log(arg.event.title);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div style={{ height: 700, width: 700 }} className="App">
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin, interactionPlugin]}
                events={[
                    { title: '하하하', date: '2024-05-15', content:'밥먹기', place:'대운동장', type:'학업' },
                    { title: '졸라어렵군', date: '2024-05-29', content:'닭발', place:'우리집S2', type:'학업' }
                ]}
                eventClick={handleEventClick}
                eventContent={renderEventContent}
            />
            {selectedEvent && (
                <ModalTest open={modalOpen}
                    close={handleCloseModal}
                    header={selectedEvent.title}
                    date={selectedEvent.start.toISOString().split('T')[0]}
                    content={selectedEvent.extendedProps.content}
                    place={selectedEvent.extendedProps.place}
                    type={selectedEvent.extendedProps.type}
                >
                </ModalTest>
            )}
        </div>

    )
}

export default ModalCalendar;