import { useState } from 'react';
import { Input, LinkButton } from '../../ui';

import './flightMostTraveledDestinations.scss';

const FlightMostTraveledDestinations = () => {
    const [from, setFrom] = useState("");
    const [when, setWhen] = useState("");

    return(
        <div className="find-flight-form find-flight-form--four-columns">
            <Input id="where_from"
                label="Откуда"
                value={from}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFrom(e.target.value)}
            />

            <Input id="when"
                label="Когда"
                value={when}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWhen(e.target.value)}
            />

            <LinkButton text="Найти билеты" linkTo={`/find-flight-most-traveled-destinations/${from}/${when}`}/>
        </div>
    )
}

export default FlightMostTraveledDestinations;