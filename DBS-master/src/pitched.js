// import React from "react" ;
// import MaterialTable from "material-table" ;
 
 
 
// function Pitched() {
//     const { useState } = React;
 
   
//     const [columns, setColumns] = useState([
 
        
//       { title: 'Company Name', field: 'name', validate: rowData => rowData.name === '' ? 'Company Name cannot be empty' : '',
//        },
//       { title: 'Company ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
//       { title: 'Process Description', field: 'recruiting_process', },
//       { title: 'Number of recruitments', field: 'no_hired' , type: 'numeric' , },
//       { title: 'Name of HR', field: 'HR_name'},
//       { title: 'Name of CR',field: 'CR_name'},
//     ]);
  
//     const [data, setData] = useState([
//       { name: 'Amazon', ID: '1001', recruiting_process: '2 rounds of coding exam + Candidate screening + Group discussion + Technical Interview + HR interview. (requirement: a good rank in codeforces/ similar platforms.)', no_hired: '5', HR_name: 'Jeff Bezos', CR_name: 'Mukesh' , },
//       { name: 'Thomson Reuters', ID: '1002', recruiting_process: '1 round of exam + Non-tech: machine demo + Technical Interview + HR interview.', no_hired: '2', HR_name: 'Akshith Reddy', CR_name: 'Alfred simmons' , },
//     ]);
  
//     return (
//       <MaterialTable
//         title="Pitched Table"
//         columns={[
//             {
//               title: 'Company Name', field: 'name',
 
//               cellStyle: {
//                 backgroundColor: '#87ceeb',
//                 color: '#FFF'
//               },
//               headerStyle: {
//                 backgroundColor: '#87ceeb',
//               }
//             },
//              { title: 'Company ID', field: 'ID', type: 'numeric', validate: rowData => rowData.ID === '' ? 'Company ID cannot be empty' : '',  },
//              { title: 'Process Description', field: 'recruiting_process', },
//              { title: 'Number of recruitments', field: 'no_hired', },
//              { title: 'Name of HR', field: 'HR_name', },
//              { title: 'Name of CR', field: 'CR_name', },
            
//           ]}
//         data={data}
//         editable={{
//           onRowAdd: newData =>
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 setData([...data, newData]);
                
//                 resolve();
//               }, 1000)
//             }),
//           onRowUpdate: (newData, oldData) =>
//             new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 const dataUpdate = [...data];
//                 const index = oldData.tableData.id;
//                 dataUpdate[index] = newData;
//                 setData([...dataUpdate]);
  
//                 resolve();
//               }, 1000)
//             }),
          
        
//         }}
//         options={{
//             headerStyle: {
//               backgroundColor: '#4682b4',
//               color: '#FFF'
//             }
//         }}
//       />
//     )
//   }
 
//   export default Pitched;




import React from "react" ;
import MaterialTable from "material-table" ;
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
 
 
export default function Pitched() {
  const { useState } = React ;

  const [columns, setColumns] = useState([
    { title: 'Company Name' , field: 'Company_Name' },
    { title: 'Company ID', field: 'Company_ID', type: 'numeric'},
    { title: 'Process Decription', field: 'Process_Description' },
    {
      title: 'No of Recruitment',
      field: 'No of Recruitment'
      , type: 'numeric'
    },
    { title: 'Name of HR', field: 'Name_Of_HR'},
    { title: 'Name of CR', field: 'Name_Of_CR'},
  ]);

  const [data, setData] = useState([
    // { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    
  ]);

  const getData = () => {Axios.get("http://localhost:3001/showpitched").then((response) => {

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
 
export function InsertPitched() {


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
const [process,setProcess]=useState("");
const [recruit,setRecruit]=useState(0);
const [HR,setHR]=useState("");
const [CR,setCR]=useState("");

  const log = () => { 
    if(name!=="" && ID>0 && HR!=="" && CR!=="" && process!=="" && recruit>=0){

      Axios.post("http://localhost:3001/insertpitched", {
      name,
      ID,
      process,
      recruit,
      HR,
      CR,
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
   label="Process Description"
   variant="outlined"
   color="secondary"
   onChange={(e) => {
    setProcess(e.target.value);
  }}
/> 
<span> </span>
<TextField 
    id="4"
   label="No of Recruitment"
   variant="outlined"
   color="secondary"
   onChange={(e) => {
    setRecruit(e.target.value);
  }}
/> 
<span> </span>
 <TextField 
    id="5"
   label="Name of HR"
   variant="outlined"
   color="secondary"
   onChange={(e) => {
    setHR(e.target.value);
  }}
/> 
<span> </span>
<TextField 
    id="6"
   label="Name of CR"
   variant="outlined"
   color="secondary"
   onChange={(e) => {
    setCR(e.target.value);
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

   
export function UpdatePitched() {
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
  // { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  
]);


const getData = () => {Axios.get("http://localhost:3001/updatepitched").then((response) => {

          setData(response.data); 
   })
  
   };

const upsend = (e) => {
  Axios.put("http://localhost:3001/sendupdatepitched",e).then(response => {
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