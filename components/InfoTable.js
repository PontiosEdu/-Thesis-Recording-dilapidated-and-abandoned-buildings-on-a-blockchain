import * as React from 'react';
//import Table from '@mui/material/Table';
//import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
//import TableContainer from '@mui/material/TableContainer';
//import TableHead from '@mui/material/TableHead';
//import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
import "../css/App.css";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';



export default function BasicTable({data}) {
  console.log(data)
  
const transformed=data.map((item,index)=>{return {
  id:index,
  ["ΔΗΜΟΣ"]:item[1],// eslint-disable-next-line
  ["ΔΙΕΥΘΥΝΣΗ"]:item[7],
  ["ΚΑΤΑΣΤΑΣΗ"]:item[8],

  ["ΚΩΔ.ΚΤΙΡΙΟΥ"]:item[5],
  ["ΗΜΕΡΟΜΗΝΙΑ"]:item[6],

  ["Timestamp"]:item[10],

 
  ["ΥΠ.ΑΠΟΦΑΣΗ"]:item[4],


  ["ΦΕΚ"]:item[3],
  ["e-ΑΡΧΕΙΑ"]:item[9],
  ["ΚΩΔ.ΔΗΜΟΥ"]:item[2],

  ["ΠΑΡΑΤΗΡΗΣΕΙΣ"]:item[11],
  ["ΔΙΕ/ΝΣΗ ΔΗΜΟΥ"]:item[0],
}})

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'ΔΗΜΟΣ',
    headerName: 'ΔΗΜΟΣ',
    width: 150,
    editable: true,
  },
  {
    field: 'ΚΩΔ.ΚΤΙΡΙΟΥ',
    headerName: 'ΚΩΔ.ΚΤΙΡΙΟΥ',
    width: 180,
    editable: true,
  },
  {
    field: 'ΔΙΕΥΘΥΝΣΗ',
    headerName: 'ΔΙΕΥΘΥΝΣΗ',
    width: 180,
    editable: true,
  },
  {
    field: 'ΗΜΕΡΟΜΗΝΙΑ',
    headerName: 'ΗΜΕΡΟΜΗΝΙΑ',
    width: 200,
    editable: true,
  },
  {
    field: 'ΚΑΤΑΣΤΑΣΗ',
    headerName: 'ΚΑΤΑΣΤΑΣΗ',
    width: 200,
    editable: true,
  },
  {
    field: 'ΥΠ.ΑΠΟΦΑΣΗ',
    headerName: 'ΥΠ.ΑΠΟΦΑΣΗ',
    width: 200,
    editable: true,
  },
  {
    field: 'ΦΕΚ',
    headerName: 'ΦΕΚ',
    width: 140,
    editable: true,
  },
  {
    field: 'ΠΑΡΑΤΗΡΗΣΕΙΣ',
    headerName: 'ΠΑΡΑΤΗΡΗΣΕΙΣ',
    width: 500,
    editable: true,
  },
  {
    field: 'e-ΑΡΧΕΙΑ',
    headerName: 'e-ΑΡΧΕΙΑ',
    width: 180,
    editable: true,
  },
  {
    field: 'Timestamp',
    headerName: 'Timestamp',
    width: 190,
    editable: true,
  },

  {
    field: 'ΚΩΔ.ΔΗΜΟΥ',
    headerName: 'ΚΩΔ.ΔΗΜΟΥ',
    width: 200,
    editable: true,
  },
  {
    field: 'ΔΙΕ/ΝΣΗ ΔΗΜΟΥ',
    headerName: 'ΔΙΕ/ΝΣΗ ΔΗΜΟΥ',
    width: 380,
    editable: true,
  },


];
    if(data.length===0) return <></>
    return <Box sx={{ height: 300, width: '100%' }}>
    <DataGrid
    sx={{backgroundColor:'white'}}
      rows={transformed}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
      
    />
  </Box>


  // return (
  //   <TableContainer  sx={{ minWidth: 750,maxWidth:"100%" }} component={Paper}>
  //     <Table sx={{ minWidth: 100 }} aria-label="simple table">
  //       <TableHead>
  //         <TableRow>
  //           <TableCell>A/A</TableCell>
  //           <TableCell >Owner Address</TableCell>
  //           <TableCell >ΔΗΜΟΣ</TableCell>
  //           <TableCell >ΑΡΙΘΜΟΣ ΔΗΜΟΥ</TableCell>
  //           <TableCell >ΦΕΚ</TableCell>
  //           <TableCell >ΥΠ.ΑΠΟΦΑΣΗ</TableCell>
  //           <TableCell >ΔΙΕΥΘΥΝΣΗ</TableCell>
  //           <TableCell >ΚΑΤΑΣΤΑΣΗ</TableCell>
  //           <TableCell >ΥΠ.ΑΠΟΦΑΣΗ</TableCell>
  //           <TableCell >ΚΩΔΙΚΟΣ.ΚΤΥΡΙΟΥ</TableCell>
            
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>  
  //            {data.map((item,index)=>{
  //        return  <TableRow key={index}>
  //            <TableCell key={index} component="th" scope="row">{index}</TableCell>
  //           {item.map((innerItem,index)=>{
  //               return <TableCell key={index} component="th" scope="row">{innerItem}</TableCell>
  //           })}
  //           </TableRow>
                    
  //               })} 

  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // );
}
