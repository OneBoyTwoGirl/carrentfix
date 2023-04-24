// // import { useState } from "react";

import { useState } from "react";


// // const LoginPanel = () => {
// //     const [username, setUsername] = useState('');
// //     const [password, setPassword] = useState('');
  
// //     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //       setUsername(event.target.value);
// //     };
  
// //     const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //       setPassword(event.target.value);
// //     };
  
// //     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// //       event.preventDefault();
// //       // Logic to handle form submission goes here
// //     };
    
  
// //     return (
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="username">Username:</label>
// //           <input type="text" id="username" value={username} onChange={handleUsernameChange} />
// //         </div>
// //         <div>
// //           <label htmlFor="password">Password:</label>
// //           <input type="password" id="password" value={password} onChange={handlePasswordChange} />
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //     );
// //   };
  
// //   export default LoginPanel;
// import React from "react";

// const login = () => {
//   const [username, setUsername] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event: { preventDefault: () => void; }) => {
//     event.preventDefault();
//     // itt lehet definiálni a belépés logikáját
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Felhasználónév:
//         <input type="text" value={username} onChange={handleUsernameChange} />
//       </label>
//       <label>
//         Jelszó:
//         <input type="password" value={password} onChange={handlePasswordChange} />
//       </label>
//       <button type="submit">Belépés</button>
//     </form>
//   );
// };

// export default login;




// import { FormEvent, useState, } from 'react';
// import Modal from 'react-modal';
// import { Login } from '@mui/icons-material';

// const login = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [houseNumber, setHouseNumber] = useState('');

//   const handleOpenModal = () => {
//     setIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsOpen(false);
//   };
//         //backendet ide
//   function handleSubmit(event: FormEvent<HTMLFormElement>): void {
//     throw new Error('Function not implemented.');
//   }

//   return (
//     <div>
//       <button onClick={handleOpenModal}>
//         Bérlés

//       </button>
//       <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
//         {/* Modális tartalom */}
//         <h1>Ez egy modális ablak</h1>
//         <p>Modális tartalom...</p>
//         <button onClick={handleCloseModal}>
//           Bezárás
//         </button>
//         <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <label>
//         Phone Number:
//         <input
//           type="tel"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//       </label>
//       <label>
//         House Number:
//         <input
//           type="text"
//           value={houseNumber}
//           onChange={(e) => setHouseNumber(e.target.value)}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//       </Modal>
//     </div>
//   );
  
// };

// export default login;



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <label style={{margin: '10px 0'}}>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{marginLeft: '10px'}} />
      </label>
      <label style={{margin: '10px 0'}}>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{marginLeft: '10px'}} />
      </label>
      <button type="submit" style={{backgroundColor: '#1E90FF', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px'}}>
        Belépés</button>
    </form>
  );
}

export default Login;