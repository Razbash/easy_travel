import ITypography from '../ITypography';
import './title.scss';

const Title = ({text, meta}: ITypography) => {
    let titleClass = 'typography-title';

    if (meta) {
        titleClass += ' ' + meta;
    }

    return(
        <h1 className={titleClass}>{text}</h1>
    )
}

export default Title;