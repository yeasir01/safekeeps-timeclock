import { useState, useEffect } from 'react';

export default function DigitalClock({ classes }) {

    const [state, setState] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intv = setInterval(() => {
            const time = new Date().toLocaleTimeString();
            setState(time);
        }, 1000);

        return () => clearTimeout(intv);
    }, []);

    return (
        <div className={classes}>
            {state}
        </div>
    )
}