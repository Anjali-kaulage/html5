
import React from 'react';
import { format, isToday } from 'date-fns';
import { DayProps } from '../types/calendar';
import { cn } from '@/lib/utils';

const CalendarDay: React.FC<DayProps> = ({ date, isCurrentMonth, events, onSelectDate }) => {
  const dayEvents = events.slice(0, 3);
  const hasMoreEvents = events.length > 3;

  return (
    <div
      className={cn(
        'calendar-day p-1 border border-border hover:bg-calendar-hover cursor-pointer transition-colors',
        isCurrentMonth ? 'bg-background' : 'bg-muted text-muted-foreground',
        isToday(date) && 'ring-2 ring-calendar-highlight ring-inset'
      )}
      onClick={() => onSelectDate(date)}
    >
      <div className="flex justify-between items-center">
        <span
          className={cn(
            'text-sm font-medium h-6 w-6 flex items-center justify-center rounded-full',
            isToday(date) && 'bg-calendar-highlight text-white'
          )}
        >
          {format(date, 'd')}
        </span>
      </div>
      
      <div className="mt-1 space-y-1 overflow-hidden">
        {dayEvents.map((event) => (
          <div
            key={event.id}
            className="text-xs truncate rounded-sm px-1 py-0.5 bg-calendar-event text-white"
            title={event.title}
          >
            {event.time && `${event.time} · `}{event.title}
          </div>
        ))}
        
        {hasMoreEvents && (
          <div className="text-xs text-muted-foreground pl-1">
            +{events.length - 3} more
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;
