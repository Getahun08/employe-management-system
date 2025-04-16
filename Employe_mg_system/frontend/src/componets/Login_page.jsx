import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const loginData = {
      user_name: username,
      password: password,
    };
    console.log('Login Data:', loginData);

    // You can integrate with your API here
  };

  return (
    <div>
      <h4>LOGIN</h4>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          id="username"
          label="User Name"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{ flexShrink: 0 }}
      >
        Submit
      </Button>
      <h5 style={{ margin: 0 }}>OR</h5>
      <Link to="/Register" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          style={{ flexShrink: 0 }}
        >
          Register Here
        </Button>
      </Link>
    </div>
        
      </div>
    
  );
}

export default LoginPage;
