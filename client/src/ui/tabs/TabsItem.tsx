import { useAppSelector } from "../../store/redux";

interface ITab {
    text: string,
    onClick: () => void,
    index: number,
}

const TabsItem = ({text, onClick, index}: ITab) => {
    const {activeTab} = useAppSelector(state => state.tabs);
    let tabMeta = 'tabs-item';

    if (index === activeTab) {
        tabMeta += ' tabs-item--active';
    }

    return(
        <li className={tabMeta} onClick={onClick}>
            {text}
        </li>
    )
}

export default TabsItem;