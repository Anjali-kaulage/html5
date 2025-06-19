
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { CalendarEvent } from '../types/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { TrashIcon } from 'lucide-react';
import { toast } from 'sonner';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (event: CalendarEvent) => void;
  onDeleteEvent: (eventId: string) => void;
  selectedDate: Date;
  events: CalendarEvent[];
}

const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  onClose,
  onAddEvent,
  onDeleteEvent,
  selectedDate,
  events
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [isAddingNew, setIsAddingNew] = useState(true);

  useEffect(() => {
    // Reset form when modal opens
    if (isOpen) {
      setTitle('');
      setDescription('');
      setTime('');
      setIsAddingNew(true);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast.error('Please enter an event title');
      return;
    }
    
    const newEvent: CalendarEvent = {
      id: Math.random().toString(36).substring(2, 9),
      title: title.trim(),
      description: description.trim(),
      date: selectedDate,
      time: time || undefined,
    };
    
    onAddEvent(newEvent);
    toast.success('Event added successfully');
  };

  const handleDelete = (eventId: string) => {
    onDeleteEvent(eventId);
    toast.success('Event deleted successfully');
  };

  const formattedDate = selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : '';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {formattedDate}
          </DialogTitle>
        </DialogHeader>

        {isAddingNew ? (
          <form onSubmit={handleSubmit} className="space-y-4 animate-scale-in">
            <div>
              <Label htmlFor="event-title">Event Title</Label>
              <Input
                id="event-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add title"
                className="mt-1"
                autoFocus
              />
            </div>

            <div>
              <Label htmlFor="event-time">Time (optional)</Label>
              <Input
                id="event-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="e.g. 3:00 PM"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="event-description">Description (optional)</Label>
              <Textarea
                id="event-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add description"
                className="mt-1"
                rows={3}
              />
            </div>

            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
              {events.length > 0 && (
                <Button 
                  type="button" 
                  variant="ghost" 
                  onClick={() => setIsAddingNew(false)}
                >
                  View Events ({events.length})
                </Button>
              )}
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit">
                  Add Event
                </Button>
              </div>
            </DialogFooter>
          </form>
        ) : (
          <div className="animate-scale-in">
            <div className="max-h-[300px] overflow-y-auto space-y-3">
              {events.map((event) => (
                <div 
                  key={event.id}
                  className="p-3 border rounded-md relative hover:bg-accent transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      {event.time && <p className="text-sm text-muted-foreground">{event.time}</p>}
                      {event.description && <p className="text-sm mt-1">{event.description}</p>}
                    </div>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 text-destructive hover:bg-destructive/10"
                      onClick={() => handleDelete(event.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={() => setIsAddingNew(true)}>
                Add New Event
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;
