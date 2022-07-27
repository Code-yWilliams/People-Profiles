import React, { useState } from 'react';
import List from './components/List';
import AddToList from './components/AddToList';
import './App.css';

interface IState {
  people: {
    name: string,
    age: number,
    url?: string,
    notes?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Cody Williams',
      age: 25,
      url: "https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s800-c85.webp",
      notes: "Loves computers"
    }
  ])

  return (
    <div className="App">
      <h1>People</h1>
      <List people={people}></List>
      <AddToList></AddToList>
    </div>
  );
}

export default App;
