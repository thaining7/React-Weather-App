import React from 'react';
// import "./style.css";

function Jumbotron ({ children }) {
  return (
    <div
      // style={{ height: 200, clear: "both", paddingTop: 70, textAlign: "center" }}
      className='jumbotron text-primary bg-light'
    >
      {children}
    </div>
  );
}

export default Jumbotron;
