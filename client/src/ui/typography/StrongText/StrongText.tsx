import ITypography from "../ITypography"
import './strongText.scss';

const StrongText = ({text, meta}: ITypography) => {
    let textClass = 'typography-strong';

    if (meta) {
        textClass += ' ' + meta;
    }

    return(
        <strong className={textClass}>{text}</strong>
    )
}

export default StrongText;