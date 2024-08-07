import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
const drawerWidth = 240;

function PermanentDrawer() {
  const [openSection1, setOpenSection1] = React.useState(false);
  const [openSection2, setOpenSection2] = React.useState(false);
  const [openSection3, setOpenSection3] = React.useState(false);
  const [openSection4, setOpenSection4] = React.useState(false);

  const handleSection1Click = () => {
    setOpenSection1(!openSection1);
  };

  const handleSection2Click = () => {
    setOpenSection2(!openSection2);
  };

  const handleSection3Click = () => {
    setOpenSection3(!openSection3);
  };
  const handleSection4Click = () => {
    setOpenSection4(!openSection4);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const drawer = (
    <div>
      {/* <Toolbar /> */}

      <Typography variant="h5" sx={{ paddingBottom: 2, paddingTop: 3, color:'white' }}>
        数字监控大屏
      </Typography>

      {/* Section 1 */}
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: '#007AFF' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {['首页', 'Title'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ color: 'white' }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      {/* Section 2 */}
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: '#007AFF', color: 'white' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleSection2Click}>
          <ListItemText primary="健康数据管理"/>
          {openSection2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSection2} timeout="auto" unmountOnExit >
          <List component="div" disablePadding >
            {['总览', '心率', '体温', '血氧'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: 'white' }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
      <Divider />

      {/* Section 3 */}
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: '#007AFF', color: 'white' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleSection3Click}>
          <ListItemText primary="Section 3" />
          {openSection3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSection3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {['总览', '心率', '体温', '血氧'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: 'white' }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
      <Divider />

      {/* Section 4 */}
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: '#007AFF', color: 'white' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleSection4Click}>
          <ListItemText primary="Section 4" />
          {openSection4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSection4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {['Title', 'Title', 'Title', 'Title'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: 'white' }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
      {!openSection4 && <Divider /> }
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', bgcolor: '#007AFF' },
          "& .MuiButtonBase-root":{
            color:"white",
            "&:hover":{
              bgcolor:"#f09",
              color:"#0f0"
            }
          }
        }}
      >
        {drawer}
      </Drawer>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          width:"50%",
          marginLeft:"50px",
         
        }}
      />
    </Box>
  );
}

export default PermanentDrawer;