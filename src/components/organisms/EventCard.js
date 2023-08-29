// Organism: EventCard
import React from 'react';
function EventCard({ title, description,showMeetUpInfo, showAdditionalInfo }) {
    return (
      <div className="container align-left">
        <h5><b>{title}</b></h5>
        <div className="font-bold card shadow-lg">
            {showMeetUpInfo && (
                <>
                    <h5>Awesome meetup and event</h5>
                    <p className='grey-color'>25 January 2019</p>
                </>
            )}
            <p className="text">{description}</p>
            {showAdditionalInfo && (
                <>
                <p>-----</p>
                <p className="text">See you there!</p>
                <p className="text">Best, Best,hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers</p>
                </>
            )}
        </div>
      </div>
    );
}
export default EventCard;