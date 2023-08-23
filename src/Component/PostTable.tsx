import { useState, useEffect } from 'react';
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { Post } from './models';
import DepartmentList from './DepartmentList';
//import DepartmentList from './DepartmentList';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 500 },
];

const departmentData = [
  
  
  {
    name: 'customer_service',
    subDepartments: [
      { name: 'support' },
      { name: 'customer_success' }
      
    ]
  },
  {
    name: 'design',
    subDepartments: [
      { name: 'graphic_design' },
      { name: 'product_design' },
      {name: 'web_design'}
      
    ]
  }
  ,
  {
    name: 'Business Service',
    subDepartments: [
      { name: 'Call Centers & Business Centers' },
      { name: 'Career Planning' },
      {name: 'Commercial Printing'},
      {name: 'Dept Collection'}
    ]
  }
];


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
      <DepartmentList departments={departmentData}/>
      

    </div>
    </>
  );
}

export default PostTable;