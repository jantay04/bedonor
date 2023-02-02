
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function InlineDoc() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="p-calendar">
      <Calendar value={date} inline showWeek   />
    </div>
  )
}
