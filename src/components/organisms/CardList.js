// components/organisms/CardList.js
import React from 'react';
import CardItem from '../molecules/CardItem';

function CardList({ meetups }) {
  return (
    <div className="row">
      {meetups.map((meetup, index) => (
        <div className="col-4">
          <CardItem
            key={index}
            date={meetup.date}
            title={meetup.title}
            attendees={meetup.attendees}
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;
