// Organisms: CardDesc
import React from 'react';
import CardImage from '../atoms/CardImage';
import CardDetails from '../molecules/CardDetails';
function CardDesc() {
    return (
      <div className="container">
        <div className="card shadow-lg">
          <div className="row">
            <CardImage />
            <CardDetails />
          </div>
        </div>
      </div>
    );
}
export default CardDesc;