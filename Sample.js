// import React from 'react';
// // localStorage.setItem('data',capsuleData);

// import { useState, useEffect } from 'react';
// import axios from 'axios';


// const Sample = () => {
//     const [capsuleData, setCapsuleData]=useState([]);
//    const user=("Email","password")
//     localStorage.setItem('user', JSON.stringify(user) );
//     // localStorage.setItem("dhisalesantosh@gmail.com","Santoshbhau@123")
  

//   useEffect(()=>{
//       getCapsuleData()
//   },[])

//   const getCapsuleData = () => {
   
//     axios.get(`https://api.spacexdata.com/v3/capsules`).then((r) => {
//       setCapsuleData(r.data);
//     });
//   }

//   console.log("capsuleData",capsuleData)
//   return (
//     <div>
//       <h2>Result of local storage</h2>
//       <div class="container">
//         <label for="show" title="close"></label>
//         <div class="text"><h2>Login Form</h2></div>

// <form action="#">
//           <div class="data">
//             <label>Email or Phone:  </label>
//                  <input type="text" required />
//           </div><br />

// <div class="data">
//             <label>Password:  </label>
//             <input type="password" required />
//           </div><br />

// <div class="forgot-pass">
// <a href="#">Forgot Password?</a></div><br />

// <div class="btn">
//  <div class="inner">
// </div>
// <button type="submit">login</button>
//           </div>
// <div class="signup-link">
// Not a member? <h6>Signup now</h6></div>
// </form>
// </div>
//     </div>
//   );
// }

// export default Sample;
