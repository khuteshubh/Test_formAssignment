
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import Form from "./Component/Form";

import SecondFormPage from "./Component/SecondFormPage";
import PostTable from "./Component/PostTable";
import React from "react";

import './App.css';

// const departmentData = [
  
  
//   {
//     name: 'customer_service',
//     subDepartments: [
//       { name: 'support' },
//       { name: 'customer_success' }
      
//     ]
//   },
//   {
//     name: 'design',
//     subDepartments: [
//       { name: 'graphic_design' },
//       { name: 'product_design' },
//       {name: 'web_design'}
      
//     ]
//   }
//   ,
//   {
//     name: 'Business Service',
//     subDepartments: [
//       { name: 'Call Centers & Business Centers' },
//       { name: 'Career Planning' },
//       {name: 'Commercial Printing'},
//       {name: 'Dept Collection'}
//     ]
//   }
// ];


function App() {

  const router = createBrowserRouter([{
    
      path: "/",
      element: <Form />,
      // errorElement: <ErrorPage />,
    
  },
  {
    path: "PostTable",
    element: <PostTable />,  
  },
  {
    path:"secondPage",
    element:<SecondFormPage/>
  },
  // {
  //   path:"departmentList",
  //   element: <DepartmentList  departments={departmentData}/>
  // }
])
  

  return (
    
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
    
  );
};

export default App
