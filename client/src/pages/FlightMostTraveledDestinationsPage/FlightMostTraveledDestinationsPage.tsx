import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/redux";
import { fetchMostTraveledDestinations } from "../../store/MostTraveledDestinations/MostTraveledDestinationsActions";

const FlightMostTraveledDestinationsPage = () => {
    const {originCityCode = '', period = ''} = useParams();
    const {error, loading, flights} = useAppSelector(state => state.mostTraveledDestinations);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMostTraveledDestinations(originCityCode, period));
    }, [dispatch, originCityCode, period]);

    return(
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
    )
}

export default FlightMostTraveledDestinationsPage;