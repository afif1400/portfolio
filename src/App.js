import React from 'react';
import './App.scss';
import { SocialIcon } from 'react-social-icons';
import SkillBar from 'react-skillbars';
import Header from './components/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/opportunities' component={Opportunities} />
                <Route exact path='/solutions' component={Solutions} />
                <Route exact path='/contact-us' component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Opportunities() {
  return <p>My Projects</p>;
}

const skills = [
  {
    type: 'ReactJS',
    level: 85,
  },
  { type: 'ExpressJS', level: 80 },
  { type: 'Docker', level: 75 },
  { type: 'NodeJS', level: 75 },
  { type: 'MongoDB', level: 70 },
  { type: 'Kubernetes', level: 70 },
];

function Solutions() {
  return (
    <div style={{ width: '600px' }}>
      <p>Skills that define me.</p>
      <SkillBar
        height={25}
        skills={skills}
        colors={{
          bar: '#f4511e',
          title: {
            text: '#fff',
            background: '#222',
          },
        }}
      />
    </div>
  );
}

function Contact() {
  return (
    <div>
      <form name='contact' method='POST' data-netlify='true'>
        <p>
          <label>
            Your Name: <input type='text' name='name' />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type='email' name='email' />
          </label>
        </p>
        {/* <p>
          <label>
            Your Role:{' '}
            <select name='role[]' multiple>
              <option value='leader'>Leader</option>
              <option value='follower'>Follower</option>
            </select>
          </label>
        </p> */}
        <p>
          <label>
            Message: <textarea name='message'></textarea>
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    </div>
  );
}

function Home() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <h5>
          I'm <b>AFIF</b>, a fullstact web developer, trying to learn new thing
          each day and reaching new heights.
        </h5>
        <div
          style={{
            position: 'fixed',
            width: '50px',
            height: '200px',
            right: '0',
            top: '30%',
            bottom: '50%',
            display: 'flex',
            flexWrap: 'wrap',
            padding: '20px',
            justifyContent: 'space-around',
          }}
        >
          <SocialIcon
            className='socialIcons'
            url='mailto: afifahmed456123@gmail.com'
            network='email'
            bgColor='red'
          ></SocialIcon>
          <SocialIcon
            className='socialIcons'
            url='https://github.com/afif1400'
            network='github'
            bgColor='#222'
          ></SocialIcon>
          <SocialIcon
            className='socialIcons'
            url='http://linkedin.com/in/jaketrent'
            bgColor='#0077b5'
          />
        </div>
      </div>
    </div>
  );
}
export default App;
