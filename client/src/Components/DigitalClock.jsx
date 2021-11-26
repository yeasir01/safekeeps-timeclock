import React, { useState, useEffect, memo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
        <Box component="div" sx={{...props.sx}}>
            <Typography variant="h5">
                {state.date}
            </ Typography>
            <Typography variant="h2">
                {state.time}
            </ Typography>
        </Box>
    );

    const NoDate = () => (
        <Box component="div" sx={{...props.sx}}>
            <Typography variant="h1">
                {state.time}
            </Typography>
        </Box>
    );

    return props.includeDate ? <WDate /> : <NoDate />;
};

DigitalClock.defaultProps = {
    styles: "",
    includeDate: false,
    dateFormat: "EEEE, MMMM dd, yyyy",
    timeFormat: "h:mm aaa",
};

export default memo(DigitalClock);