import { BsCheckLg, BsFillCircleFill } from 'react-icons/bs';
import { CheckButtonStyle, CheckInputStyle } from './style/CheckInputStyle'

const CheckInput = ({
    options = [],
    setData,
    data,
    name = null,
    column = false
}) => {

    function handleClick(option) {
        if (typeof data === 'boolean' || (typeof data === 'object' && typeof data[name] === 'boolean')) {
            setData(prevData => typeof prevData === 'boolean' ? !prevData : { ...prevData, [name]: !prevData[name] });
            return;
        }


        if (typeof data === 'object' && name) {
            setData(data => ({ ...data, [name]: option.value }));
        } else {
            setData(option.value);
        }
    }

    return (
        <CheckInputStyle
            $column={column}
        >
            {options.map((option, i) => (
                <CheckButtonStyle
                    key={i}
                    type='button'
                    $isColumn={column}
                    $isSelected={(data === option.value || (typeof data === 'object' && data[name] === option.value))}
                    onClick={() => handleClick(option)}
                >
                    <label>{option.title}</label>
                    <span>
                        {(data === option.value || (typeof data === 'object' && data[name] === option.value)) ? (
                            <BsCheckLg />
                        ) : (
                            <BsFillCircleFill />
                        )}
                    </span>
                </CheckButtonStyle>
            ))}
        </CheckInputStyle>
    );
}

export default CheckInput