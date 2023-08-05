import Logo from '../Logo/Logo';
import './header.scss';

interface IHeader {
    children: JSX.Element
}

const Header = ({children}: IHeader) => {
    return(
        <>
            <div className="header">
                <div className="container">
                    <Logo/>
                </div>
            </div>
            <div className="header header--sticky">
                <div className="container">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Header;