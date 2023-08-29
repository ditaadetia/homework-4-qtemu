// Molecule: CardDetails
import React from 'react';
import CardInfoLeft from '../atoms/CardInfoLeft';
import CardInfoRight from '../atoms/CardInfoRight';
function CardDetails() {
    return (
      <div className="desc col-4 col-lg-4 col-sm-6 mt-3">
        <h5>Hacktiv8 Meetup</h5>
        <div className="row">
          <div className="col-6">
            <CardInfoLeft />
          </div>
          <div className="col-6">
            <CardInfoRight />
          </div>
        </div>
        <button className="btn btn-blue">Join Us</button>
      </div>
    );
  }
export default CardDetails;