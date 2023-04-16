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
import { EventType } from './components/EventType';
import { InputType } from './components/InputType';
import { Container } from './others/Container';
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
      <EventType handleClick={(event,id)=>{console.log('buton Click',event,id)}}/>
      <InputType value='' handleChange={(event)=>console.log(event?.target.value)}/>
      <Container styles={{border:'1px solid grey',padding:'1rem'}}/>
    </div>
  );
}

export default App;
