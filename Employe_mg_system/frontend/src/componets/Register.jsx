import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        user_name: '',
        password: '',
        confirm_password: '',
    });

    const [output, setOutput] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirm_password) {
            setOutput('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch('/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    user_name: formData.user_name,
                    password: formData.password,
                }),
            });
            const data = await response.json();
            setOutput(JSON.stringify(data, null, 2));
        } catch (error) {
            setOutput('An error occurred while registering.');
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Registration Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box marginBottom={2}>
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </Box>
                <Box marginBottom={2}>
                    <TextField
                        label="User Name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </Box>
                <Box marginBottom={2}>
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </Box>
                <Box marginBottom={2}>
                    <TextField
                        label="Confirm Password"
                        name="confirm_password"
                        type="password"
                        value={formData.confirm_password}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
            <Typography variant="h6" style={{ marginTop: '20px' }}>
                Response:
            </Typography>
            <pre>{output}</pre>
        </Box>
    );
}

export default Register;
