import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    maxWidth: 160,
    
    border: 'solid thin',
    borderColor: '#033E64',
    borderBottomColor: 'white',
    
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Selectionner le service</em>
          </MenuItem>
          <MenuItem value={10}>  Conception d’un business model</MenuItem>
          <MenuItem value={20}>  Stratégie commerciale</MenuItem>
          <MenuItem value={30}>  Stratégies de développement</MenuItem>
          <MenuItem value={40}>  Préparation aux rendez-vous stratégiques</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
