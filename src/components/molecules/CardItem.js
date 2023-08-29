// components/molecules/CardItem.js
import React from 'react';
import Button from '../atoms/Button';

function CardItem({ date, title, attendees }) {
  return (
    <div className="card card-list shadow-lg">
        <p className='card-header bg-blue-light'>{date}</p>
        <div className='card-body'>
            <p>{title}</p>
            <p>
                {attendees} <span className="span">went</span>
            </p>
        </div>
        {/* <Button className="btn btn-blue">Join Us</Button> */}
        <div className='card-footer'>
            <Button className="btn btn-blue" text="View" />
        </div>
    </div>
  );
}

export default CardItem;
