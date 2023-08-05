import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/redux";
import { fetchMostTraveledDestinations } from "../../store/MostTraveledDestinations/MostTraveledDestinationsActions";
import { Header } from "../../ui";
import FlightMostTraveledDestinations from "../../features/FlightMostTraveledDestinations/FlightMostTraveledDestinations";

import './flightMostTraveledDestinationsPage.scss';

const FlightMostTraveledDestinationsPage = () => {
    const {originCityCode = '', period = ''} = useParams();
    const {error, loading, flights} = useAppSelector(state => state.mostTraveledDestinations);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMostTraveledDestinations(originCityCode, period));
    }, [dispatch, originCityCode, period]);

    return(
        <>
            <Header>
                <FlightMostTraveledDestinations/>
            </Header>

            <div className="">
                {flights.length && flights.map((elem, index) => {
                    return(
                        <div className="" key={index}>
                            <p>Направление: {elem.destination}</p>
                            <p>Количество рейсов: {elem.analytics.flights.score}</p>
                            <p>Количество людей: {elem.analytics.travelers.score}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FlightMostTraveledDestinationsPage;