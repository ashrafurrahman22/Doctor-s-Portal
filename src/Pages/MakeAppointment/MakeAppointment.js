import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';


const MakeAppointment = () => {
    return (
        <section style={{
            background : `url(${appointment})` 
        }} 
        className='flex justify-center'>
        <div className='flex-1'>
            <img src={doctor} alt="" />
        </div>
        <div className='flex-1'>
            <h3 className='text-xl text-primary'>Appointment</h3>
            <h3 className='text-3xl text-primary'>Make an Appointment today</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, suscipit harum consectetur delectus, error assumenda est quas obcaecati et recusandae natus, commodi placeat rem mollitia cumque ratione libero molestiae velit dolores voluptatem illum numquam eius? Dolor quam officia ullam! Voluptatem.</p>
        </div>
        </section>
    );
};

export default MakeAppointment;