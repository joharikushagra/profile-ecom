import React from 'react'

const StarRating = ({rating}) => {
  const totalStars = 5;

  return (
    <div className="flex py-2">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating.rate ? "gold" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 text-amber-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
      <span className='text-md font-thin'>({rating.count})</span>
    </div>
  );
};

export default StarRating