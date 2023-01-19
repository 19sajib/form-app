import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const data = ['Manufacturing', 'Construction materials', 'Electronics and Optics', 'Food and Beverage', 
              'Bakery & confectionery products', 'Beverages', 'Fish & fish products', 'Meat & meat products',
              'Milk & dairy products', 'Other', 'Sweets & snack food', 'Furniture', 'Bathroom/sauna', 
              'Bedroom', 'Children’s room', 'Kitchen', 'Living room ', 'Office', 'Other (Furniture)', 'Outdoor ',
              'Project furniture', 'Machinery', 'Machinery components', 'Machinery equipment/tools', 'Manufacture of machinery ',
              'Maritime', 'Aluminium and steel workboats ', 'Boat/Yacht building', 'Ship repair and conversion', 'Metal structures',
              'Other', 'Repair and maintenance service', 'Metalworking', 'Construction of metal structures', 'Houses and buildings',
              'Metal products', 'Metal works', 'CNC-machining', 'Forgings, Fasteners ', 'Gas, Plasma, Laser cutting', 'MIG, TIG, Aluminum welding',
              'Plastic and Rubber', 'Packaging', 'Plastic goods', 'Plastic processing technology', 'Blowing', 'Moulding', 'Plastics welding and processing',
              'Plastic profiles', 'Printing ', 'Advertising', 'Book/Periodicals printing', 'Labelling and packaging printing', 'Textile and Clothing',
              'Clothing', 'Textile', 'Wood', 'Other (Wood)', 'Wooden building materials', 'Wooden houses', 'Other', 'Creative industries',
              'Energy technology', 'Environment', 'Service', 'Business services', 'Engineering', 'Information Technology and Telecommunications',
              'Data processing, Web portals, E-marketing', 'Programming, Consultancy', 'Software, Hardware', 'Telecommunications', 'Tourism',
              'Translation services', 'Transport and Logistics', 'Air', 'Rail', 'Road', 'Water']


const Form = () => {
    const [isForm, setIsForm] = React.useState(true)
    const [value, setValue] = React.useState({ name: '', sector: '', term: 'false'})
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
        setValue({...value, [e.target.name] : e.target.value})
        console.log(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    
    <Grid container spacing={3} sx={{mt: 8}} >
    <Grid xs={8} sm={4} component={Paper} elevation={6} sx={{margin: 'auto'}}>
        <Box component="form" onSubmit={handleSubmit} sx={{
              my: 2,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}>

        {isForm ? <Typography variant='h3'>Form</Typography> : <Typography variant='h3'>Input data</Typography>}

        {/* Input Form */}

        {isForm && 
        <>
        <Typography variant='h5'> 
            Please enter your name and pick the Sectors you are currently involved in.
        </Typography> 
        <TextField 
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            defaultValue={value.name}
            onChange={handleChange}
        />
        <FormControl fullWidth required>
            <InputLabel id="demo-simple-select-label">Sectors</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sectors"
                defaultValue={value.sector}
                name='sector'
                onChange={handleChange}
            >
                {data.map((key,index) => <MenuItem key={index} value={key} >{key}</MenuItem>)}
            </Select>
        </FormControl>

        <FormControlLabel
                control={<Checkbox checked={checked} color="primary" onChange={()=> setChecked(prev=>!prev)} required />}
                label="Agree to terms"
                name="term"
                required
        />
        <Button
                type="submit"
                variant="outlined"
                size="large"
                sx={{ mt: 3, mb: 2, width: '60px' }}
              >
                Save
        </Button>
        </>}

        {/* Input Data */}

        {!isForm &&
        <Grid>
        <Typography align="left" variant='h5'>Name: {value?.name}</Typography>
        <Typography align="left" variant='h5'>Sector: {value?.sector}</Typography>
        <Typography align="left" variant='h5'>Term: {checked ? 'true':'false'}</Typography>
        </Grid>
        }

        {/* Switch In Between */}

        </Box>
              <Box sx={{
                px: 4,
                py:2
                }}>
                  {isForm ? 
                  <Typography align="right" onClick={()=>setIsForm(prev=> !prev)} variant="body1">
                  Result saved <Typography sx={{textDecoration: 'underline'}} display="inline">click here to see the result</Typography>
                  </Typography> : 
                  <Typography align="right" onClick={()=>setIsForm(prev=> !prev)} variant="body1" sx={{textDecoration: 'underline'}}>
                    Click here to go to the form page
                    </Typography>}
              </Box>

        </Grid>      
    </Grid>
  )
}

export default Form