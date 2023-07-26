import FlightMostTraveledDestinations from "../../features/FlightMostTraveledDestinations/FlightMostTraveledDestinations";
import { useAppSelector } from "../../store/redux";
import Tabs from "../../ui/tabs/Tabs";

const MainForm = () => {
    const forms = [<FlightMostTraveledDestinations/>];
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