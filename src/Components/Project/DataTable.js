import faker from 'faker';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
 } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,

    },
    tableContainer: {
       marginRight:'20px',
        margin: '30px 30px',
        maxWidth: '97%',
        backgroundColor:'#35415e',
        marginTop:'0px'
    },
    tableCell:{
      color:'white',
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor:'#2a3550',
        color:'white'
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
          },
    name: {
        fontWeight: 'bold',
        color:'white',
        marginLeft:'10px',
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));

let USERS = [], STATUSES = ['In Progress', 'Open'];
for(let i=0;i<4;i++) {
    USERS[i] = {
        name: faker.name.findName(),
        Date: faker.date.past().toLocaleDateString('en-US'),
        name: faker.name.findName(),
        Date: faker.date.past().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

function DataTable() {
  const classes = useStyles();
  const [page] = React.useState(0);
  const [rowsPerPage ] = React.useState(5);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Recent Projects</TableCell>
            <TableCell className={classes.tableHeaderCell}>Created</TableCell>
            <TableCell className={classes.tableHeaderCell}>Reporter</TableCell>
            <TableCell className={classes.tableHeaderCell}>Due</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.name}>
              
              <TableCell className={classes.tableCell}>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={row.name} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography className={classes.name}>{row.name}</Typography>
                          
                      </Grid>
                  </Grid>
                </TableCell >
              <TableCell className={classes.tableCell}>
              <TableCell className={classes.tableCell}>{row.Date}</TableCell>
                </TableCell>
              <TableCell className={classes.tableCell}>{row.name}</TableCell>
              <TableCell className={classes.tableCell}>
              <TableCell className={classes.tableCell}>{row.Date}</TableCell>
                </TableCell>
              <TableCell className={classes.tableCell}>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'In Progress' && 'orange') ||
                        (row.status === 'Open' && 'darkblue')),
                        opacity:'0.5',
                        color: 'white',
                        borderRadius:'3px'

                    }}
                  >{row.status}</Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default DataTable;