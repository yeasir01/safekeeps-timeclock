import { useState } from 'react';

export default function PinPad() {

    const [pin, setPin] = useState("");

    const handleClick = (event) => {
        const current = event.target.value;

        if (current === 'clear') {
            return setPin('');
        }
        setPin(prv => prv + event.target.value)
    }

    return (
        <div className="pin-pad">
            <div className="pin-pad__row">
                Enter Pin
            </div>
            <div className="pin-pad__row">
                <input type="password" name="pin" id="pin" value={pin} />
            </div>
            <div className="pin-pad__row">
                <button onClick={handleClick} className="pin-pad__btn" value='1'>1</button>
                <button onClick={handleClick} className="pin-pad__btn" value='2'>2</button>
                <button onClick={handleClick} className="pin-pad__btn" value='3'>3</button>
            </div>
            <div className="pin-pad__row">
                <button onClick={handleClick} className="pin-pad__btn" value='4'>4</button>
                <button onClick={handleClick} className="pin-pad__btn" value='5'>5</button>
                <button onClick={handleClick} className="pin-pad__btn" value='6'>6</button>
            </div>
            <div className="pin-pad__row">
                <button onClick={handleClick} className="pin-pad__btn" value='7'>7</button>
                <button onClick={handleClick} className="pin-pad__btn" value='8'>8</button>
                <button onClick={handleClick} className="pin-pad__btn" value='9'>9</button>
            </div>
            <div className="pin-pad__row">
                <button onClick={handleClick} className="pin-pad__btn" value='clear'>C</button>
                <button onClick={handleClick} className="pin-pad__btn" value='0'>0</button>
                <button onClick={handleClick} className="pin-pad__btn" value='submit'>&rarr;</button>
            </div>
        </div>
    )
};