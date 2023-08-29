import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import NavBar from './components/organisms/NavBar';
import Section from './components/organisms/Section';
import CardList from './components/organisms/CardList';
import CardDesc from './components/organisms/CardDesc';
import EventCard from './components/organisms/EventCard';

const pastMeetups = [
  {
    date: '27 November 2017',
    title: '#39 JakartaJS April Meetup with kumparan',
    attendees: 139,
  },
  {
    date: '27 October 2017',
    title: '#38 JakartaJS April Meetup with BliBli',
    attendees: 113,
  },
  {
    date: '27 September 2017',
    title: '#37 JakartaJS April Meetup with Hacktiv8',
    attendees: 110,
  },
];

export default function App() {
  const [showMeetUpInfo] = useState(true);
  const [showAdditionalInfo] = useState(true);
  return (
    <div className="App">
      <NavBar />
      <CardDesc />
      <EventCard
        title="Next Meetup"
        showMeetUpInfo={showMeetUpInfo}
        description="Hello, Javascript & Node.js Ninjas
                    Get ready for our monthly meetup JakartaJs! This will be our fifth meetup of 2018!
                    The meetup format will contain some short stories and technical talks.
                    If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.
                    Remember to bring a photo ID to get through building security."
        showAdditionalInfo={showAdditionalInfo}
      />
      <EventCard
        showMeetUpInfo={false}
        title="About Meetup"
        description="Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area.
                    Twitter: @jakartaJS and we use the hashtag #jakartajs"
        showAdditionalInfo={false}
      />
      <Section title="Members" className="container">
        <div className="card shadow-lg align-left">
          <div className="row">
            <div className="col-3">
              <img src="https://d1.awsstatic.com/id-Hacktiv8-logo.5da65c6f4495cb039e7ee16f35c510bc11c15fdb.jpg" alt="Hacktiv8 Logo" className="circle" />
            </div>
            <div className="col-9">
              <p>Organizers</p>
              <div className="row">
                <div className="col-2">
                  <p>Adhy Winata</p>
                </div>
                <div className="col-2">
                  <p>4 others.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section title="Past Meetups" className="container">
        <CardList meetups={pastMeetups} />
      </Section>
    </div>
  );
}
