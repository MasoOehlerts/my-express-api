import React, { useState } from 'react';


function MyButton() {
  function handleClick() {
    alert("I said don't click me asshole!");
  }
  
  return (
    <button onClick={handleClick}>
      Don't click me
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app homies</h1>
      <MyButton />
    </div>
  );
}
