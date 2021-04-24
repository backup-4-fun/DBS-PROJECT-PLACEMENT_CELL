import React from "react" ;
import MaterialTable from "material-table" ;
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
 
 
export default function Master() {
  const { useState } = React ;

  const [columns, setColumns] = useState([
    { title: 'Company Name' , field: 'Company_Name' },
    { title: 'Company ID', field: 'Company_ID'},
    { title: 'Name Of HR', field: 'Name_of_HR', type: 'numeric' },
    {
      title: 'Est_Yr',
      field: 'Years_Of_Establishment',
    },
    // { title: 'Birth Year', field: 'Colleges_It_Visited', type: 'numeric' },
  ]);

  const [data, setData] = useState([
    // { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    
  ]);

  const getData = () => {Axios.get("http://localhost:3001/showmaster").then((response) => {

            setData(response.data); 
     })
    
     };

  return (
    <div>
      <button onClick={getData}> Show </button>
    <MaterialTable
      title="Master Table"
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
 
export function InsertMaster() {


  const { useState } = React;

 
  // const [columns, setColumns] = useState([

      
  //   { title: 'Company_Name', field: 'name', validate: rowData => rowData.name === '' ? 'Company Name cannot be empty' : '',
  //    },
  //   { title: 'Company_ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
  //   { title: 'Name_of_HR', field: 'HR_Details'},
  //   { title: 'Year_of_Est', field: 'Est_Year', type: 'numeric' },
  //   { title: 'Colleges_It_Visited', field: 'Colleges_It_Visited'},
    
  // ]);

//     const [data, setData] = useState([

//      { 
//       name : "",
 


//     ID : 0,


//   HR_Details : "",


// Est_Year : 0,


// Roles : "",
//     }
//   ]);

const [name,setName]=useState("");
const [ID,setID]=useState(0);
const [HR_Details,setHR_Details]=useState("");
const [Est_Year,setEst_Year]=useState(0);
// const [Roles,setRoles]=useState("");

  const log = () => { 
    if(name!=="" && ID>0 && HR_Details!=="" && Est_Year!==""){

      Axios.post("http://localhost:3001/insertmaster", {
      name,
      ID,
      HR_Details,
      Est_Year,
    }).then((response) => {
      console.log(name);
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
    }
  };

  const input = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    console.log(value);

    // setState({
    //   [name]: value
    // });
  }

  return (
    <div> 
   <TextField 
    id="1"
   label="Company Name"
   variant="outlined"
   color="secondary"
   onChange={(e) => {
     setName(e.target.value);
   }}
/> 
<span> </span>
<TextField 
    id="2"
   label="Company ID"
   variant="outlined"
   color="secondary"
   onChange={(e) => {
    setID(e.target.value);
  }}
/> 
<span> </span>
<TextField 
    id="3"
   label="Name of HR"
   variant="outlined"
   color="secondary"
   onChange={(e) => {
    setHR_Details(e.target.value);
  }}
/> 
<span> </span>
<TextField 
    id="4"
   label="Years of Establishment"
   variant="outlined"
   color="secondary"
   onChange={(e) => {
    setEst_Year(e.target.value);
  }}
/> 
<span> </span>
<button type="submit" onClick={log}>Submit</button>
     {/* <MaterialTable
      title="Master Table Space"
      columns={[
          {
            title: 'Company_Name', field: 'name',

            cellStyle: {
              backgroundColor: '#87ceeb',
              color: '#FFF'
            },
            headerStyle: {
              backgroundColor: '#87ceeb',
            }
          },
           { title: 'Company_ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
           { title: 'Name_of_HR', field: 'HR_Details'},
           { title: 'Year_of_Est', field: 'Est_Year', type: 'numeric' },
           
          { title: 'Job_Roles_Offered', field: 'Roles'}, 
          
          
        ]}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
            
          }),
      
      }}
      options={{
          headerStyle: {
            backgroundColor: '#4682b4',
            color: '#FFF'
          }
      }}
    /> */}
    
    </div>
  )
}

   
export function UpdateMaster() {
  const { useState } = React;

const [columns, setColumns] = useState([
  { title: 'Company Name' , field: 'Company_Name' },
    { title: 'Company ID', field: 'Company_ID'},
    { title: 'Name Of HR', field: 'Name_of_HR', type: 'numeric' },
    {
      title: 'Est_Yr',
      field: 'Years_Of_Establishment',
    },
]);

const [data, setData] = useState([
  // { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  
]);


const getData = () => {Axios.get("http://localhost:3001/updatemaster").then((response) => {

          setData(response.data); 
   })
  
   };

const upsend = (e) => {
  Axios.put("http://localhost:3001/sendupdatemaster",e).then(response => {
    console.log(response);
  })
}

return (
  <div>
    <button onClick={getData}> Submit</button>
  <MaterialTable
    title="Master Table"
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
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setData([...dataUpdate]);

            console.log(newData);
              
            upsend(newData);
            resolve();
          }, 1000)
        
        }),
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