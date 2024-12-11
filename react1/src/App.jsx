import React from 'react'
import Person from './person'
import Button from './Button'
import Header from './Header';
import List from './List';


const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  const fruits = ['Apple', 'Banana', 'Cherry'];
  return (
    <div>
          <Header title="Wellcome to David Mondal Page .this is my header."/>
           <Person name="David Mondal" age={25} />
           <Person name="Mr Mondal" age={22} />
           <Button text="Click Me" onClick={handleClick} />
           <List items={fruits} />
    </div>
  )
}

export default App
