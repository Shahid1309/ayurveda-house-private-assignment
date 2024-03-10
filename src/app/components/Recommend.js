"use client"

import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { useState } from 'react';

function Recommend() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className='flex flex-col items-start justify-center mt-6'>
        <h3 className='text-2xl font-bold text-left'>Reccommend</h3>
        <p className='text-left'>Would you reccomend this product to others?</p>
        <div className='flex items-center mt-2'>
          <label className='cursor-pointer mr-4'>
            <input
              type='radio'
              name='thumbs'
              value='thumbsUp'
              checked={selectedOption === 'thumbsUp'}
              onChange={() => handleOptionClick('thumbsUp')}
              className='hidden'
            />
            <FaThumbsUp
              style={{ color: selectedOption === 'thumbsUp' ? 'green' : 'grey' }}
              size={50}
            />
          </label>
          <label className='cursor-pointer'>
            <input
              type='radio'
              name='thumbs'
              value='thumbsDown'
              checked={selectedOption === 'thumbsDown'}
              onChange={() => handleOptionClick('thumbsDown')}
              className='hidden'
            />
            <FaThumbsDown
              style={{ color: selectedOption === 'thumbsDown' ? 'red' : 'grey' }}
              size={50}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default Recommend;
