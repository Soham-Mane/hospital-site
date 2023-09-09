// import React, { useState } from 'react';
// import styles from "./Co.module.css";
// function MultipleCOForm() {
//   const [csvFile,setCsvFile]=useState(null);
//   const [cos, setCos] = useState({
//     CO1: [],
//     CO2: [],
//     CO3: [],
//     CO4: [],
//     CO5: [],
//     CO6: [],
//   });

//   const handleOptionChange = (coKey, optionValue) => {
//     // Update the selected options array for the specified CO
//     setCos((prevState) => {
//       const updatedCos = { ...prevState };
//       const selectedOptions = [...updatedCos[coKey]];

//       if (selectedOptions.includes(optionValue)) {
//         // If the option is already selected, remove it
//         const index = selectedOptions.indexOf(optionValue);
//         selectedOptions.splice(index, 1);
//       } else {
//         // If the option is not selected, add it
//         selectedOptions.push(optionValue);
//       }

//       updatedCos[coKey] = selectedOptions;
//       return updatedCos;
//     });
//   };
//   const handleSubmit = (e) => {
//     console.log('Selected options for each CO:', cos);
//     e.preventDefault();

//     const form = document.getElementById('Codata');
//     const formData = new FormData(form);
    
//     const requestData = {
//             co1: cos.CO1,
//             co2: cos.CO2,
//             co3: cos.CO3,
//             co4: cos.CO4,
//             co5: cos.CO5,
//             co6: cos.CO6,
//           };
//     var requestOptions = {
//         method: 'POST',
//         body: formData,
//         body: JSON.stringify(requestData), // Convert to JSON
//         redirect: 'follow',
//       };

//       fetch("https://01f0-110-226-181-89.ngrok-free.app/save_cos/", requestOptions)
//     .then(response => response.json())
//     .then(result => {
//       console.log(result);

//       if (result.success) {
//         console.log("COs saved  successfully");
//       } else if (result.message) {
//         alert("COs not saved successfully.");
//         console.log("User fail");
//       } else {
//         alert("Failed to save COs. Please try again.");
//       }
//     })
//     .catch(error => console.log('error', error));
//     // Access the selected options for all COs and log them
  
//   };


//  //CSV FILE
//  const handleFileChange=(event)=>{
//   const file = event.target.files[0]; // Get the first selected file
//   setCsvFile(file);
// }

// const handleUpload=(e)=>{
// e.preventDefault();

// const form = document.getElementById('Csvdata');
//     const formData = new FormData(form);
//     var requestOptions = {
//       method: 'POST',
//       body: formData,
//       redirect: 'follow',
//     };

//     fetch("https://01f0-110-226-181-89.ngrok-free.app/upload/", requestOptions)
//     .then(response => response.json())
//     .then(result => {
//       console.log(result);

//       if (result.success) {
//         console.log("COs saved  successfully");
//       } else if (result.message) {
//         alert("COs not saved successfully.");
//         console.log("User fail");
//       } else {
//         alert("Failed to save COs. Please try again.");
//       }
//     })
//     .catch(error => console.log('error', error));
//     // Access the selected options for all COs and log them

//   return (
//     <>
//     <div className={styles.container}>
//       <h2>Multiple CO Form</h2>
//       <form onSubmit={handleSubmit} id="Codata">
//         {/* Create checkboxes for each CO */}
//         {['CO1', 'CO2', 'CO3', 'CO4', 'CO5', 'CO6'].map((coName) => (
//           <div key={coName} className={styles.coSection}>
//             <h3>{coName}</h3>
//             <div className={styles.optionSection}>
//             {['UT1-Q1', 'UT1-Q2', 'UT1-Q3', 'UT1-Q4', 'UT2-Q1', 'UT2-Q2', 'UT2-Q3', 'UT2-Q4'].map((option) => (
//               <label key={option}>
//                 <input
//                   type="checkbox"
//                   onChange={() => handleOptionChange(coName, option)}
//                   checked={cos[coName].includes(option)}
//                 />{' '}
//                 {option}
//               </label>
//             ))}
//             </div>
//           </div>
//         ))}
//                   <button className={styles.btn} type="submit">Submit</button>

//       </form>
//     </div>

// <div>
// <h2>CSV File Uploader</h2>
// <form id="Csvdata" onSubmit={handleUpload}>
//      <input type="file" accept=".csv" name="file" onChange={handleFileChange} />
//      <button type='submit' >Upload CSV</button>
// </form>

// </div>
// </>
//   );
// }
// }
// export default MultipleCOForm;

















// import React, { useState } from 'react';
// import styles from "./Co.module.css";

// function MultipleCOForm() {
//   const [cos, setCos] = useState({
//     CO1: [],
//     CO2: [],
//     CO3: [],
//     CO4: [],
//     CO5: [],
//     CO6: [],
//   });

//   const handleOptionChange = (coKey, optionValue) => {
//     // Update the selected options array for the specified CO
//     setCos((prevState) => {
//       const updatedCos = { ...prevState };
//       const selectedOptions = [...updatedCos[coKey]];

//       if (selectedOptions.includes(optionValue)) {
//         // If the option is already selected, remove it
//         const index = selectedOptions.indexOf(optionValue);
//         selectedOptions.splice(index, 1);
//       } else {
//         // If the option is not selected, add it
//         selectedOptions.push(optionValue);
//       }

//       updatedCos[coKey] = selectedOptions;
//       return updatedCos;
//     });
//   };

//   const handleSubmit = (e) => {
//     console.log('Selected options for each CO:', cos);
//     e.preventDefault();

//     // Create an object to send as JSON data
//     const requestData = {
//       co1: cos.CO1,
//       co2: cos.CO2,
//       co3: cos.CO3,
//       co4: cos.CO4,
//       co5: cos.CO5,
//       co6: cos.CO6,
//     };

//     var requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json', // Specify JSON content type
//       },
//       body: JSON.stringify(requestData), // Convert to JSON
//       redirect: 'follow',
//     };

//     fetch("https://01f0-110-226-181-89.ngrok-free.app/save_cos/", requestOptions) // Use the URL for your Django API endpoint
//       .then(response => response.json())
//       .then(result => {
//         console.log(result);

//         if (result.success) {
//           console.log("COs saved successfully");
//         } else if (result.message) {
//           alert("COs not saved successfully.");
//           console.log("User fail");
//         } else {
//           alert("Failed to save COs. Please try again.");
//         }
//       })
//       .catch(error => console.log('error', error));
//   };

//   return (
//     <div className={styles.container}>
//       <h2>Multiple CO Form</h2>
//       <form  id="formdata">
//         {/* Create checkboxes for each CO */}
//         {['CO1', 'CO2', 'CO3', 'CO4', 'CO5', 'CO6'].map((coName) => (
//           <div key={coName} className={styles.coSection}>
//             <h3>{coName}</h3>
//             <div className={styles.optionSection}>
//               {['UT1-Q1', 'UT1-Q2', 'UT1-Q3', 'UT1-Q4', 'UT2-Q1', 'UT2-Q2', 'UT2-Q3', 'UT2-Q4'].map((option) => (
//                 <label key={option}>
//                   <input
//                     type="checkbox"
//                     onChange={() => handleOptionChange(coName, option)}
//                     checked={cos[coName].includes(option)}
//                   />{' '}
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>
//         ))}
//       </form>
//       <button  onClick={handleSubmit} className={styles.btn} type="submit">Submit</button>
//     </div>
//   );
// }

// export default MultipleCOForm;