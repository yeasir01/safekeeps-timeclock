import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

function DigitalClock(props) {
    const [state, setState] = useState(setIntialState);

    function setIntialState(){
        const now = Date.now();

        if (props.includeDate){
            return {
                time: format(now, props.timeFormat), 
                date: format(now, props.dateFormat),
            }
        }

        return {time: format(now, props.timeFormat)}
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();

            if (props.includeDate) {
                return setState({
                    date: format(now, props.dateFormat),
                    time: format(now, props.timeFormat),
                })
            }

            return setState({
                time: format(now, props.timeFormat)
            });
            
        }, 1000);

        return () => clearInterval(interval);
    }, [props.includeDate, props.timeFormat, props.dateFormat]);

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
        <div className={props.styles}>
            {props.includeDate ? <WDate /> : <NoDate />}
        </div>
    );
};

DigitalClock.defaultProps = {
    styles: "",
    includeDate: false,
    dateFormat: "MMMM dd, yyyy",
    timeFormat: "h:mm aaa",
};

export default DigitalClock;