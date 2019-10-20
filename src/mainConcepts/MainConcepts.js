import React from 'react';
import Introducing from './chapter2/Introducing';
import Welcome from './chapter4/Welcome';
import Clock from './chapter5/Clock';
import Toggle from './chapter6/Toggle';
import Greeting from './chapter7/Greeting';
import LoginControl from './chapter7/LoginControl';
import MailBox from './chapter7/MailBox';
import Page from './chapter7/Page';
import NumberList from './chapter8/NumberList';
import Blog from './chapter8/Blog';
import NameForm from './chapter9/NameForm';
import EssayForm from './chapter9/EssayForm';
import FlavorForm from './chapter9/FlavorForm';
import Reservation from './chapter9/Reservation';
import Calculator from './chapter10/Calculator';
import WelcomeDialog from './chapter11/WelcomeDialog';
import SplitPane from './chapter11/SplitPane';

const MainConcepts = () => {
  const element = <Welcome name='Sara'/>;
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  const numbers = [1, 2, 3, 4, 5];
  const posts = [
    {id: 1, title: 'Blog Posts 1', content: 'Welcome to learning React!'},
    {id: 2, title: 'Blog Posts 2', content: 'You can install React from npm.'}
  ];
  return(
    <>
      <h1>Chapter2 - Introducing JSX</h1>
      <Introducing />
      <h1>Chapter4 - Components and Props</h1>
      {element}
      <Welcome name='Sara'/>
      <Welcome name='Cahal'/>
      <Welcome name='Edilte'/>
      <h1>Chapter5 - State and LifeCycle</h1>
      <Clock />
      <h1>Chapter6 - Handling Events</h1>
      <Toggle />
      <h1>Chapter7 - Conditional Rendering</h1>
      <Greeting isLoggedIn={true}/>
      <LoginControl/>
      <MailBox unreadMessages={messages}/>
      <Page />
      <h1>Chapter8 - Lists and Keys</h1>
      <NumberList numbers={numbers}/>
      <Blog posts={posts} />
      <h1>Chapter9 - Forms</h1>
      <NameForm />
      <EssayForm/>
      <FlavorForm/>
      <Reservation/>
      <h1>Chapter10 - Lifting State Up</h1>
      <Calculator/>
      <h1>Chapter11 - Composition vs Inheritance</h1>
      <WelcomeDialog/>
      <SplitPane/>
    </>
  )
}

export default MainConcepts;