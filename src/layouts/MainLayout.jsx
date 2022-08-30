import React from 'react';

const MainLayout = ( {children} ) => {
  return (
    <div className='bg-gray-900 h-screen'>
      {children}
    </div>
  );
};

export {MainLayout};