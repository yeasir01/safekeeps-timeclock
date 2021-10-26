import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function DigitalClock({ classes = "", includeDate = false }) {

    const [state, setState] = useState({
        time: format(Date.now(), "h:mm aaa"), 
        date: format(Date.now(), "MMMM dd, yyyy"),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();

            if (includeDate) {
                return setState({
                    date: format(now, "MMMM dd, yyyy"),
                    time: format(now, "h:mm aaa"),
                })
            } else {
                return setState({
                    time: format(now, "h:mm aaa")
                });
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [includeDate]);

    const WDate = () => (
        <React.Fragment>
            <div className="date">{state.date}</div>
            <div className="clock">{state.time}</div>
        </React.Fragment>
    );

    const NoDate = () => (
        <div className="clock">{state.time}</div>
    );

    return (
        <div className={classes}>
            {includeDate ? <WDate /> : <NoDate />}
        </div>
    )
}