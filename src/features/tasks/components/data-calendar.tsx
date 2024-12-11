import {
    format,
    getDay,
    parse,
    startOfWeek,
    addMonths,
    subMonths
} from 'date-fns';

import { enUS } from "date-fns/locale";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { Task } from "../types";
import { useState } from 'react';

import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./data-calendar.css"
import { EventCard } from './event-card';
import { date } from 'zod';
import { Button } from '@/components/ui/button';

const locales = {
    "en-US": enUS
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

interface DataCalendarProps {
    data: Task[];
}

interface CustomeToolBarProps {
    date: Date;
    onNavigate: (action: "PREV" | "NEXT" | "TODAY") => void;
};

const CustomToolbar = ({ date, onNavigate}: CustomeToolBarProps) => {
    return (
        <div className="flex mb-4 gap-x-2 items-center w-full lg:w-auto justify-center lg-justify-start">
            <Button
            onClick={() => onNavigate("PREV")}
            className="flex items-center"
            size="icon"
            variant="secondary"
            >
                <ChevronLeftIcon className="size-4" />
            </Button>
            <div className="flex items-center border border-input rounded-md px-3 py-2 h-8 justify-center w-full lg:w-auto">
                <CalendarIcon className="size-4 mr-2" />
                <p className="text-sm">{format(date, "MMMM yyyy")}</p>
            </div>
            <Button
            onClick={() => onNavigate("NEXT")}
            className="flex items-center"
            size="icon"
            variant="secondary"
            >
                <ChevronRightIcon className="size-4" />
            </Button>
        </div>
    )
}

export const DataCalendar = ({ data, }: DataCalendarProps) => {

    const [value, setValue] = useState(
        data.length > 0 ? new Date(data[0].dueDate) : new Date()
    );

    const events = data.map((task) => ({
        start: new Date(task.dueDate),
        end: new Date(task.dueDate),
        title: task.name,
        project: task.project,
        assignee: task.assignee,
        status: task.status,
        id: task.$id
    }));

    const handleNavigate = (action: "PREV" | "NEXT" | "TODAY") => {
        if (action === "PREV") {
            setValue(subMonths(value, 1));
        } else if (action === "NEXT") {
            setValue(addMonths(value, 1));
        } else if (action === "TODAY") {
            setValue(new Date());
        }
    }

    return(
        <Calendar 
            localizer={localizer}
            date={value}
            events={events}
            views={["month"]}
            defaultView="month"
            toolbar
            showAllEvents
            className="h-full"
            max={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
            formats={{
                weekdayFormat: (date, culture, localizer) => localizer?.format(date, "EEE", culture) ?? ""
            }}
            components={{
                eventWrapper: ({ event }) => (
                    <EventCard 
                    id={event.id}
                    title={event.title}
                    project={event.project}
                    assignee={event.assignee}
                    status={event.status}
                />
                ),
                toolbar: () => (
                    <CustomToolbar date={value} onNavigate={handleNavigate}/>
                )
            }}
        />
    )
}