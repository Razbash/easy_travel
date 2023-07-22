import { Link } from 'react-router-dom';
import './linkButton.scss';

interface ILinkButton {
    text: string,
    linkTo: string,
}

const LinkButton = ({text, linkTo}: ILinkButton) => {
    return(
        <Link className="button" to={linkTo}>{text}</Link>
    )
}

export default LinkButton;