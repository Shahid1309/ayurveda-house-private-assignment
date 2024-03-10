'use client'

// import React from 'react'
// import ReviewCard from './reviewCard';
// import Recommend from './Recommend';

// function PostReview() {
//   return (
//     <div className=' flex align-center justify-center'>

       
//        <div className=" justify-center items-center "> 
//        <h2 className="text-2xl font-bold text-left text-center bg-red-500">Leave A Review</h2>
//         <ReviewCard title="Quality" desc="How good is this product?" />
//         <ReviewCard title="Authenticity" desc="How genuine does the product feel?" />
//         <Recommend /></div>
        
//     </div>
//   )
// }

// export default PostReview;
import React from 'react';
import ReviewCard from './ReviewCard';
import Recommend from './Recommend';

function PostReview() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='max-w-md p-8 bg-white rounded-md shadow-lg'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
          Leave A Review
        </h2>
        <ReviewCard title="Quality" desc="How good is this product?" />
        <ReviewCard title="Authenticity" desc="How genuine does the product feel?" />
        <Recommend />
      </div>
    </div>
  );
}

export default PostReview;

