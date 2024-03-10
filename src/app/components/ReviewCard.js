 'use client'
// import { FaStar } from 'react-icons/fa';
// import { useState } from 'react';

// function ReviewCard(props) {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);

//   const handleRatingClick = (currentRating) => setRating(currentRating);

//   return (
//     <>
//       <div className='flex flex-col items-start justify-center mt-6'>
//         <h2 className='text-2xl font-bold text-left'>{props.title}</h2>
//         <p className='text-left'>{props.desc}</p>
//         <div className='flex items-center mt-2'>
//           {[...Array(5)].map((star, index) => {
//             const currentRating = index + 1;
//             return (
//               <label key={index} className='cursor-pointer'>
//                 <input
//                   type='radio'
//                   name='rating'
//                   value={currentRating}
//                   onClick={() => handleRatingClick(currentRating)}
//                   className='hidden'
//                 />
//                 <FaStar
//                   style={{ color: currentRating <= (hover || rating) ? 'yellow' : 'grey' }}
//                   size={30}
//                   onMouseEnter={() => setHover(currentRating)}
//                   onMouseLeave={() => setHover(null)}
//                 />
//               </label>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ReviewCard;

import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

function ReviewCard(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRatingClick = (currentRating) => setRating(currentRating);

  return (
    <>
      <div className='flex flex-col items-start justify-center mt-6'>
        <h2 className='text-2xl font-bold text-left text-gray-800'>{props.title}</h2>
        <p className='text-left text-gray-600'>{props.desc}</p>
        <div className='flex items-center mt-2'>
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label key={index} className='cursor-pointer'>
                <input
                  type='radio'
                  name='rating'
                  value={currentRating}
                  onClick={() => handleRatingClick(currentRating)}
                  className='hidden'
                />
                <FaStar
                  style={{ color: currentRating <= (hover || rating) ? '#F7D154' : '#CBD5E0' }}
                  size={30}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ReviewCard;


