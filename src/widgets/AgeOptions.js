import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setAge as storeAge } from '../redux/student/StudentSlice';
import { useDispatch } from 'react-redux';

const AgeOptions = (props) => {
  const [age, setAge] = React.useState('');
  const dispatch =useDispatch()
  const ageRange =[];
  for (let i = 18; i <= 40; i++) {
    ageRange.push(i);
  }
 const ageOptions =[
  {
    text: '',
    handler: () => {},
    id: 0,
  }
 ]
  const handleChange = (event) => {
    setAge(event.target.value);
    ageOptions.length = 0;

    ageOptions.push({
      text: event.target.value,
      handler:props.actionProvider.setAgeHandler,
      id: 1,
    });
    dispatch(storeAge(ageOptions[0].text))
     if(typeof ageOptions[0].handler === 'function'){
       ageOptions[0].handler()
     }
  }

  return (
    <Box sx={{
      paddingLeft: 10,
      minWidth: 100, maxWidth:100 }}>
    <FormControl fullWidth>
      <InputLabel id="select-label">Age</InputLabel>
      <Select
       MenuProps={{
        style: {
           maxHeight: 300,
              },
        }}
        id="select"
        value={age}
        label="Age"
        onChange={handleChange}
        onClick={ageOptions[0].handler}
      >
        {ageRange.map((age,index) => (
          <MenuItem key={index}
          value={age}>{age}</MenuItem>
        ))}

      </Select>
    </FormControl>
  </Box>
  )
};

export default AgeOptions;
