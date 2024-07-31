import React from 'react'
import { Calendar, Badge } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
       
      ];
    case 15:
      return [
        
      ];
    default:
      return [];
  }
}


const CalendarMini = () => {
  function renderCell(date) {
    const list = getTodoList(date);

    if (list.length) {
      return <Badge className="calendar-todo-item-badge" />;
    }

    return null;
  }
  return (
    <div style={{ width: 350 }}>
      <Calendar compact bordered renderCell={renderCell} />{' '}
    </div>
  );
};

export default CalendarMini