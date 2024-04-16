import React, { useState } from 'react';


function MyButton() {
  function handleClick() {
    alert("I said don't click me you HOE!");
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
      <h1>Welcome to my app Bitches</h1>
      <MyButton />
    </div>
  );
}



//function MyOtherButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
//}
//this above is for other button w/ count ^
