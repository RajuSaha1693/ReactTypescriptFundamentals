import React, { useState } from 'react';
import './App.css';
import { ArrayType } from './components/ArrayType';
import {NormalType} from './components/NormalType';
import { ObjectType } from './components/ObjectType';
import { StatusType } from './components/StatusType';
import { Header } from './components/childTypes/Header';
import { TwoHeader } from './components/childTypes/TwoHeader';
import { OptionalType } from './components/OptionalType';
import { DestructureType } from './components/DestructureType';
function App() {
  const [message,setMessage]=useState('Good Morning')
  const person={
    first:'Bruce',
    last:'Wayne'
  }
  const personList=[
    {
      first:'Bruce',
      last:'Wayne'
    },
    {
      first:'Peter',
      last:'Parker'
    }
  ]
  return (
    <div className="App">
      <NormalType message={message} name='Raju' age={30} isLogged={true}/>
      <ObjectType name={person}/>
      <ArrayType personList={personList}/>
      <StatusType status='loading'/>
      <Header>Header Data</Header>
      <TwoHeader>
        <Header>TwoHeader Data</Header>
      </TwoHeader>
      <OptionalType name='Raju'/>
      <DestructureType name='Saha'/>
    </div>
  );
}

export default App;
