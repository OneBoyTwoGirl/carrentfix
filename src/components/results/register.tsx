// import React, { useState } from 'react';

// function RegisterForm() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default RegisterForm;




import React, { useState } from 'react';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  }

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <label style={{margin: '10px 0'}}>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{marginLeft: '10px'}} />
      </label>
      <label style={{margin: '10px 0'}}>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{marginLeft: '10px'}} />
      </label>
      <label style={{margin: '10px 0'}}>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{marginLeft: '10px'}} />
      </label>
      <button type="submit" style={{backgroundColor: '#1E90FF', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px'}}>Regisztráció</button>
    </form>
  );
}

export default RegisterForm;
