
export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  date: Date;
  time?: string;
}

export interface DayProps {
  date: Date;
  isCurrentMonth: boolean;
  events: CalendarEvent[];
  onSelectDate: (date: Date) => void;
}
