import React from 'react';
import Button from './Button';

const App = ({name}) => {
  return (
      <div className="main">
          <h1 className="heading">Hello this is {name}</h1>
          <h3> This is my first time using react</h3>
          <Button buttonName="Hello" />
          <Button buttonName="Howdy" />
          <Button buttonName="Bonjour" />
       </div>
  );
}

export default App;
