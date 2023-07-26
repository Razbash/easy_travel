import './input.scss';

interface IInput {
    id: string,
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({id, label, value, onChange}: IInput) => {
    return(
        <div className="search-input">
            <input id={id}
                type="text"
                className="search-input__field"
                value={value}
                onChange={onChange}
                placeholder={label}
            />

            <label htmlFor={id} className="search-input__label">
                {label}
            </label>
        </div>
    )
}

export default Input;