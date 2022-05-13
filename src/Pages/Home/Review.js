import React from 'react';

const Review = ({review}) => {
    const {} = review;
    return (
<div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nemo fuga eum, facilis dolorem cumque?</p>
    <div className='flex items-center'>
    <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-6">
    <img src={review.img} />
  </div>
</div>
        <div>
            <h4 className="text-xl font-bold">{review.name}</h4>
            <h4 className="text-xl font-bold">{review.location}</h4>

        </div>
        
    </div>
  </div>
</div>
    );
};

export default Review;