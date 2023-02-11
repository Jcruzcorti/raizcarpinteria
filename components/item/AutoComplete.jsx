// import React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// // import { productsData } from '../mock/Products';


// export default function AutoComplete() {

//   return (
//     <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={productsData}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Categorías" />}
//     />
//   );
// }

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: 'Pulp Fiction', year: 1994 },

  
// ];

// const productsData = [
//     {
//       id: 1,
//       img: '/ropero.jpeg',
//       title: 'Bed',
//       author: 'Ropero',
//       label: 'a',
//       description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//     {
//         id: 2,
//         img: '/ropero.jpeg',
//         title: 'Bed',
//         author: 'Ropero',
//         label: 'a',
//         description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//     {
//         id: 3,
//         img: '/ropero.jpeg',
//         title: 'Bed',
//         author: 'Ropero',
//         label: 'a',
//         description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//     {
//         id: 4,
//         img: '/ropero.jpeg',
//         title: 'Bed',
//         author: 'Ropero',
//         label: 'a',
//         description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//     {
//         id: 5,
//         img: '/ropero.jpeg',
//         title: 'Bed',
//         author: 'Ropero',
//         label: 'b',
//         description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//     {
//         id: 6,
//         img: '/ropero.jpeg',
//         title: 'Bed',
//         author: 'Ropero',
//         label: 'b',
//         description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//     {
//         id: 7,
//         img: '/ropero.jpeg',
//         title: 'Bed',
//         author: 'Ropero',
//         label: 'b',
//         description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//     {
//         id: 8,
//         img: '/ropero.jpeg',
//         title: 'Bed',
//         author: 'Ropero',
//         label: 'b',
//         description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//     {
//         id: 9,
//         img: '/ropero.jpeg',
//         title: 'Bed',
//         author: 'Ropero',
//         label: 'b',
//         description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//     {
//         id: 10,
//         img: '/ropero.jpeg',
//         title: 'Bed',
//         author: 'Ropero',
//         label: 'c',
//         description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//     {
//         id: 11,
//         img: '/ropero.jpeg',
//         title: 'Bed',
//         author: 'Ropero',
//         label: 'c',
//         description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//     {
//         id: 12,
//         img: '/ropero.jpeg',
//         title: 'Bed',
//         author: 'Ropero',
//         label: 'c',
//         description: 'aaaasadsssadsss  sadssssasadsssdssssadsssssa'
//     },
//   ];


import React from 'react';
import InputLabel from '@mui/material/InputLabel';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GroupedSelect({item}) {
  return (
    <div>
      <FormControl sx={{ m: 2, minWidth: 170 }}>
        <InputLabel htmlFor="grouped-native-select">Categorías</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Categorías">
          <option aria-label="None" value="" />
          <optgroup label="Roperos 1">
            <option value={1}>a</option>
            <option value={2}>a</option>
          </optgroup>
          <optgroup label="Roperos 2">
            <option value={3}>b</option>
            <option value={4}>b</option>
          </optgroup>
        </Select>
      </FormControl>
      
    </div>
  );
}