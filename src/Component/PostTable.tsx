import { useState, useEffect } from 'react';
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { Post } from './models';
// import DepartmentList from './DepartmentList';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 500 },
];

// const departmentData = [
  
  
//   {
//     name: 'Agriculture & Fishing',
//     subDepartments: [
//       { name: 'Agriculture' },
//       { name: 'Crops' },
//       {name: 'Farming Animals & Livestock'},
//       {name: 'Fishery & Aquaculture'},
//       {name: 'Ranching'}
//     ]
//   },
//   {
//     name: 'Business Services',
//     subDepartments: [
//       { name: 'Accounting & Accounting Services' },
//       { name: 'Auctions' },
//       {name: 'Business Services - General'},
//       {name: 'Call Centers & Business Centers'},
//       {name: 'Career Planning'},
//       {name: 'Career'},
//       {name: 'Commercial Printing'},
//       {name: 'Dept Collection'}
//     ]
//   }
  
//   ,
//   {
//     name: 'Department c',
//     subDepartments: [
//       { name: 'Subdept c1' },
//       { name: 'Subdept c2' }
//     ]
//   }
// ];

function PostTable() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={posts} columns={columns}  />
      

    </div>
    </>
  );
}

export default PostTable;