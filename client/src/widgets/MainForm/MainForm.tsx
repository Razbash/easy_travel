import FlightMostTraveledDestinations from "../../features/FlightMostTraveledDestinations/FlightMostTraveledDestinations";
import FindFlight from "../../features/FindFlight/FindFlight";
import { useAppSelector } from "../../store/redux";
import Tabs from "../../ui/tabs/Tabs";

const MainForm = () => {
    const forms = [<FindFlight/>, <FlightMostTraveledDestinations/>];
    const {activeTab} = useAppSelector(state => state.tabs);

    return(
        <>
            <Tabs/>

            {forms.map((element, index) => {
                return <div key={index}>
                    {activeTab === index ? element : null}
                </div>
            })}
        </>
    )
}

export default MainForm;