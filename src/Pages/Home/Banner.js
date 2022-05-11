import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img className='w-2/4' src={chair} />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here.</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondry to-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;