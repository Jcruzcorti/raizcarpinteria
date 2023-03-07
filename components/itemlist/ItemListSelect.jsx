import  React,{useEffect, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
import Item from '../item/Item';
import styles from '@/styles/Home.module.css'


export default function ItemListSelect({items}) {
  const [category, setCategory] = useState('All');

  const [filterData, setFilterData]= useState(items)

  const handleChange = (event) => {
    setCategory(event.target.value);
  };



  useEffect(() => {
    setFilterData(category==='All' ? items :items.filter(item=>item.category===category));
  }, [category])
  


  return (
    <div className={styles.divItemList}>
    <div className={styles.divItemListSelect}>
      <FormControl variant="standard" sx={{ m: 5, minWidth: 300 }}>
          <InputLabel id="demo-simple-select-standard-label">Categorías</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={category}
            onChange={handleChange}
            label="Categorías"
            fullWidth
          >   
                                
            <MenuItem value={'All'}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={"Habitación"}>Habitación</MenuItem>
            <MenuItem value={"Cocina"}>Cocina</MenuItem>
            <MenuItem value={"Baño"}>Baño</MenuItem>
            <MenuItem value={"Oficina"}>Oficina</MenuItem>
          </Select>
      </FormControl>

    </div>

      <Grid container spacing={0} justifyContent='center' gap={5} my={1}>
     
        {category===('All')
          ?items.map((item)=>(
            <Item key={item.id} item={item}/>
            ))
          :filterData.map((item)=>(
                <Item key={item.id} item={item}/>
            ))
        }
      </Grid>
    </div>
  );
}