import React from 'react';
import ReactDOM from 'react-dom';
import Barcode from 'react-barcode';

const BarCode = () => {
  const mountNode = document.getElementById('root'); // Define the target element

  return (
    ReactDOM.render(
      <Barcode value="http://github.com/kciter" />,
      mountNode
    )
  );
};

export default BarCode;
