import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ( {todoData} ) => {
  return (
    <div>
      {todoData.title}
    </div>
  );
};

TodoItem.propTypes = {
  todoData: PropTypes.object
}

export {TodoItem};