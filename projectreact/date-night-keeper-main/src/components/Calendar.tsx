
import React, { useState } from 'react';
import { 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek,
  isSameMonth,
  isSameDay,
  addDays,
  format,
  subMonths,
  addMonths,
} from 'date-fns';
import { CalendarEvent } from '../types/calendar';
import { Button } from './ui/button';
import { CalendarIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import CalendarDay from './CalendarDay';
import EventModal from './EventModal';

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleAddEvent = (event: CalendarEvent) => {
    setEvents([...events, event]);
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const renderDays = () => {
    const dateFormat = 'EEEE';
    const days = [];
    const startDate = startOfWeek(new Date());

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center p-2 font-semibold text-sm md:text-base">
          {format(addDays(startDate, i), 'EEE')}
        </div>
      );
    }

    return <div className="calendar-grid bg-secondary rounded-t-md">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = new Date(day);
        const eventsOnDay = events.filter(event => 
          isSameDay(new Date(event.date), cloneDay)
        );

        days.push(
          <CalendarDay
            key={day.toString()}
            date={cloneDay}
            isCurrentMonth={isSameMonth(day, monthStart)}
            events={eventsOnDay}
            onSelectDate={handleSelectDate}
          />
        );
        day = addDays(day, 1);
      }
      
      rows.push(
        <div key={day.toString()} className="calendar-grid border border-border rounded-md">
          {days}
        </div>
      );
      days = [];
    }

    return <div className="bg-background">{rows}</div>;
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0 flex items-center gap-2 text-primary">
          <CalendarIcon className="h-8 w-8" />
          Event Calendar
        </h1>
        
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="text-lg font-medium py-1 px-4">
            {format(currentMonth, 'MMMM yyyy')}
          </Badge>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousMonth}
              aria-label="Previous month"
            >
              &lt;
            </Button>
            <Button
              variant="outline"
              size="sm" 
              onClick={() => setCurrentMonth(new Date())}
              aria-label="Today"
            >
              Today
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextMonth}
              aria-label="Next month"
            >
              &gt;
            </Button>
          </div>
        </div>
      </div>

      {renderDays()}
      {renderCells()}

      {selectedDate && (
        <EventModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedDate(null);
          }}
          onAddEvent={handleAddEvent}
          selectedDate={selectedDate}
          events={events.filter(event => isSameDay(new Date(event.date), selectedDate))}
          onDeleteEvent={handleDeleteEvent}
        />
      )}
    </div>
  );
};

export default Calendar;
