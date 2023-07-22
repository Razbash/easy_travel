import { useState } from 'react';
import '../FindFlight/findFlight.scss';
import './flightMostTraveledDestinations.scss';
import Input from '../../ui/searchFormElements/Input/Input';
import LinkButton from '../../ui/searchFormElements/LinkButton/LinkButton';

const FlightMostTraveledDestinations = () => {
    const [from, setFrom] = useState("");
    const [when, setWhen] = useState("");

    return(
        <div className="find-flight-form find-flight-form--four-columns">
            <Input id="where_from"
                label="Откуда"
                value={from}
                onChange={(e: any) => setFrom(e.target.value)}
            />

            <Input id="when"
                label="Когда"
                value={when}
                onChange={(e: any) => setWhen(e.target.value)}
            />

            <LinkButton text="Найти билеты" linkTo={`/find-flight-most-traveled-destinations/${from}/${when}`}/>
        </div>
    )
}

export default FlightMostTraveledDestinations;