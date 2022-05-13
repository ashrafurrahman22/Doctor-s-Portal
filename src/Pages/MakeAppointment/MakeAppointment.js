import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background : `url(${appointment})` 
        }} 
        className='flex justify-center items-center'>
        <div className='flex-1 hidden lg:block'>
            <img className='mt-[-100px]' src={doctor} alt="" />
        </div>
        <div className='flex-1 p-5'>
            <h3 className='text-xl text-white'>Appointment</h3>
            <h3 className='text-3xl text-white'>Make an Appointment today</h3>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, suscipit harum consectetur delectus, error assumenda est quas obcaecati et recusandae natus, commodi placeat rem mollitia cumque ratione libero molestiae velit dolores voluptatem illum numquam eius? Dolor quam officia ullam! Voluptatem.</p>
            <PrimaryButton>Get Started</PrimaryButton>
        </div>
        </section>
    );
};

export default MakeAppointment;