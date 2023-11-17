import { BsCheckLg, BsFillCircleFill } from 'react-icons/bs';
import { CheckInputStyle } from './style/CheckInputStyle'

const CheckInput = ({
    options = [],
    setData,
    data,
    name = null
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
        <CheckInputStyle>
            {options.map((option, i) => (
                <button
                    key={i}
                    type='button'
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
                </button>
            ))}
        </CheckInputStyle>
    );
}

export default CheckInput