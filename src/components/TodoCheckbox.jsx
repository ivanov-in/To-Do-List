import React from 'react';
import PropTypes from 'prop-types';
import {BsCheck} from 'react-icons/bs';

const TodoCheckbox = ({isCompleted}) => {
  return (
    <div className='border-2 rounded-md w-7 h-7 border-green-600 mr-3'>
      {isCompleted && <BsCheck size={24} className='text-gray-900'/>}
    </div>
  );
};

TodoCheckbox.propTypes = {
  isCompleted: PropTypes.bool
}

export {TodoCheckbox};