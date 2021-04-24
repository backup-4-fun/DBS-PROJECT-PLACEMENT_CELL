import React from "react" ;
import MaterialTable from "material-table" ;
import Axios from 'axios';
import { TextField } from '@material-ui/core'; 
 
 
 export default function Pitched18() {
    const { useState } = React;
 
   
    const [columns, setColumns] = useState([
        { title: 'Company Name' , field: 'Company_Name' },
          { title: 'Company ID', field: 'Company_ID', type: 'numeric'},
          { title: 'Process Decription', field: 'Process_Description' },
          {
            title: 'No of Recruitment',
            field: 'No_of_Recruitment'
            , type: 'numeric'
          },
          { title: 'Name of HR', field: 'Name_Of_HR'},
          { title: 'Name of CR', field: 'Name_Of_CR'},
      ]);
  
    const [data, setData] = useState([
    //   { name: null , ID: null , recruiting_process: null , no_hired: null , HR_name: null , CR_name: null  },
      
    ]);

    const getData = () => {Axios.get("http://localhost:3001/pc19").then((response) => {

            setData(response.data); 
     })
    
     };
  
 
     return (
        <div>
          <button onClick={getData}> Show </button>
        <MaterialTable
          title="Pitched Table 2019"
           columns={columns}
          data={data}
          editable={{
            // onRowAdd: newData =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       setData([...data, newData]);
                  
            //       resolve();
            //     }, 1000)
            //   }),
            // onRowUpdate: (newData, oldData) =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       const dataUpdate = [...data];
            //       const index = oldData.tableData.id;
            //       dataUpdate[index] = newData;
            //       setData([...dataUpdate]);
    
            //       resolve();
            //     }, 1000)
            //     Axios.post('http')
            //   }),
            // onRowDelete: oldData =>
            //   new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //       const dataDelete = [...data];
            //       const index = oldData.tableData.id;
            //       dataDelete.splice(index, 1);
            //       setData([...dataDelete]);
                  
            //       resolve()
            //     }, 1000)
            //   }),
          }}
        />
        </div>
      )
 
  }