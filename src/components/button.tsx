import React from 'react';

export const Button: React.FC = ({ children, ...otherProps }) => {
  return (
    <button
      className="px-4 py-2 font-medium text-sm leading-5 rounded-md text-gray-500 hover:text-gray-700 hover:outline-none hover:text-gray-700 bg-gray-100 hover:bg-gray-300"
      {...otherProps}
    >
      {children}
    </button>
  );
};