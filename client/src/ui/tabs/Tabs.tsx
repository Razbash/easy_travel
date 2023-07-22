import { selectTab } from '../../store/Tabs/TabsActions';
import { useAppDispatch } from '../../store/redux';
import TabsItem from './TabsItem';
import './tabs.scss';

const Tabs = () => {
    const dispatch = useAppDispatch();
    const tabs = ["Поиск рейса", "Популярные рейсы из вашего города", "Дешевые рейсы из вашего города"];

    const onSelectTab = (index: number) => {
        dispatch(selectTab(index));
    }

    return(
        <ul className="tabs">
            {tabs.map((element, index) => {
                return(
                    <TabsItem key={index}
                        text={element}
                        onClick={() => onSelectTab(index)}
                        index={index}
                    />
                )
            })}
        </ul>
    )
}

export default Tabs;