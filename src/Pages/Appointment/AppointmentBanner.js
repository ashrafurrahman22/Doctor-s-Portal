import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {

    return (<div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse gap-10">
      <img class='w-1/2 img-fluid' src={chair} alt="Dentist Chair" />
      <div>
        <DayPicker
        mode = "single"
        selected={date}
        onSelect={setDate}
        ></DayPicker>
      </div>
    </div>
  </div>
    );
};

export default AppointmentBanner;