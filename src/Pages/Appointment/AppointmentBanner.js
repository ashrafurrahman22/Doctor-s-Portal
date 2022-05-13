import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {

    const [date, setDate] = useState(new Date());

    return (<div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse gap-10">
      <img class='w-1/2 img-fluid' src={chair} alt="Dentist Chair" />
      <div>
        <DayPicker
        mode = "single"
        selected={date}
        onSelect={setDate}
        ></DayPicker>
    <p>You have selected: {format(date, 'PP')}</p>
      </div>
    </div>
  </div>
    );
};

export default AppointmentBanner;