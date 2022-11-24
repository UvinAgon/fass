import React, { Component, useState } from 'react';
import { Box, TextField } from '@mui/material'
import { DateRangePicker, DateRangePickerDay } from '@mui/lab'

class DateRange extends Component {
    state = {  } 
    
    // export const MUIDateRangePicker = () => {
    //     const [value, setValue] = useState<DateRangePickerDay<Date>>([null,null])
    //     console.log({ value })
    //     return (
    //         <Box width='500px'>
    //             <DateRangePicker
    //                 startText='Check-in'
    //                 endText='Check-out'
    //                 value={value}
    //                 onChange={(newValue) => {
    //                     setValue(newValue)
    //                 }}
    //                 renderInput={(startProps, endProps) => (
    //                     <>
    //                         <TextField {...startProps} />
    //                         <Box sx={{ mx: 2 }}> to </Box>
    //                         <TextField {...endProps} />
    //                     </>
    //                 )}
    //             />
    //         </Box>
    //     )
    // }
    
    render() { 
        const [value, setValue] = useState<DateRangePickerDay<Date>>([null,null])
        console.log({ value })
        return (
            <Box width='500px'>
                <DateRangePicker
                    startText='Check-in'
                    endText='Check-out'
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue)
                    }}
                    renderInput={(startProps, endProps) => (
                        <>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField {...endProps} />
                        </>
                    )}
                />
            </Box>
        );
    }
}
 
export default DateRange;