import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  // eslint-disable-next-line jsx-a11y/accessible-emoji
  return ( <div className="PageError">  ❌{props.error.message}😱</div>)
}

export default PageError;