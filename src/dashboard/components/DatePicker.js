import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const DateDisplay = styled(DesktopDatePicker)(({ theme }) => ({
    '& input':{
     padding: 0,
     border:"none",
     width:"90px" ,
     color:"#BAB6A4",
    
     },
     '.css-i4bv87-MuiSvgIcon-root':{
        color:"#BAB6A4"
     },

  }));

export default function DatePickerR() {

  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
         <DateDisplay
            value={new Date()}
            onChange={() => {}}
            renderInput={(params) => <TextField {...params} />}
          ></DateDisplay>
 
    </LocalizationProvider>
  );
}