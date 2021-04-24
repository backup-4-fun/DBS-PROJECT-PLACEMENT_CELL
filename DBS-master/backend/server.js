const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Sahaj@123",
    database: "new_schema"
  });

  db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });



 //http://localhost:3001/insertmaster



  app.get("/showmaster", (req, res) => {
    db.query(
      "Select * from master_sheet",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.post("/insertmaster", (req, res) => {
    const cName = req.body.name;
    const cId = req.body.ID;
    const HR_Details = req.body.HR_Details;
    const Est_Year = req.body.Est_Year
    // const Roles = req.body.Roles
    /* const details_of_hr = req.body.Details_of_HR;
    const year_of_est = req.body.Year_of_Est;
    const jobs_roles_offered = req.body.Job_Roles_Offered; */

    
  
    db.query(
      "INSERT INTO master_sheet (Company_Name, Company_ID, Name_of_HR, Years_Of_Establishment) VALUES (?,?,?,?)",
      [cName, cId, HR_Details, Est_Year],
      (err, result) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

  app.get("/updatemaster", (req, res) => {
    db.query(
      "Select * from master_sheet",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.put("/sendupdatemaster", (req, res) => {
        console.log(req);
        const cName = req.body.Company_Name;
        const cId = req.body.Company_ID;
        const HR_Details = req.body.Name_of_HR;
        const Est_Year = req.body.Years_Of_Establishment;
        // const Roles = req.body.Colleges_It_Visited;
        db.query(
          "UPDATE master_sheet SET company_Name = ?,name_of_hr=?,Years_of_Establishment=? WHERE company_id = ?",
          [cName, HR_Details,Est_Year,cId],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
            console.log(result);
            console.log('Hello');
          }
        }
      );
    });

    app.get("/showpitched", (req, res) => {
      db.query(
        "Select * from pitched_companies",(err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    });

    app.post("/insertpitched", (req, res) => {
      const cName = req.body.name;
      const cId = req.body.ID;
      const process = req.body.process;
      const recruit = req.body.recruit;
      const HR = req.body.HR;
      const CR = req.body.CR;
      /* const details_of_hr = req.body.Details_of_HR;
      const year_of_est = req.body.Year_of_Est;
      const jobs_roles_offered = req.body.Job_Roles_Offered; */
  
      
    
      db.query(
        "INSERT INTO pitched_companies (Company_Name, Company_ID, Process_Description, No_Of_Recruitment, Name_Of_HR, Name_Of_CR) VALUES (?,?,?,?,?,?)",
        [cName, cId, process, recruit, HR,CR],
        (err, result) => {
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
    });

    app.get("/updatepitched", (req, res) => {
      db.query(
        "Select * from pitched_companies",(err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    });

    app.put("/sendupdatepitched", (req, res) => {
      console.log(req);
      const cName = req.body.Company_Name;
      const cId = req.body.Company_ID;
      const process = req.body.Process_Description;
      const recruit = req.body.recruit;
      const HR = req.body.Name_Of_HR;
      const CR = req.body.Name_Of_CR;
      db.query(
        "UPDATE master_sheet SET company_Name = ?,name_of_hr=?,Process_Description=?,No_Of_Recruitment=?,name_of_cr=? WHERE company_id = ?",
        [cName, HR,process,recruit,CR,cId],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
          console.log(result);
          console.log('Hello');
        }
      }
    );
  });

  app.get("/pc18", (req, res) => {
    db.query(
      "Select * from pitched_companies_2018",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.get("/pc19", (req, res) => {
    db.query(
      "Select * from pitched_companies_2019",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.get("/pc20", (req, res) => {
    db.query(
      "Select * from pitched_companies_2020",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.get("/pr19", (req, res) => {
    db.query(
      "Select * from pitched_companies_2018 where no_of_recruitment>0 ",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.get("/pr20", (req, res) => {
    db.query(
      "Select * from pitched_companies_2019 where no_of_recruitment>0 ",(err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  // app.get("/employees", (req, res) => {
  //   db.query("SELECT * FROM employees", (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.send(result);
  //     }
  //   });
  // });
   
  // app.put("/update", (req, res) => {
  //   const id = req.body.id;
  //   const wage = req.body.wage;
  //   db.query(
  //     "UPDATE employees SET wage = ? WHERE id = ?",
  //     [wage, id],
  //     (err, result) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.send(result);
  //       }
  //     }
  //   );
  // });
   
  // app.delete("/delete/:id", (req, res) => {
  //   const id = req.params.id;
  //   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.send(result);
  //     }
  //   });
  // });

  
//Listener

  app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });
