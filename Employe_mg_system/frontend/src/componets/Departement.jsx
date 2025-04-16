import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Departement() {
    const [formData, setFormData] = useState({
        name_of_departement: '',
        departement_code: '',
        departement_head: '',
        description: '',
    });

    const [output, setOutput] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/departement/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setOutput(JSON.stringify(data, null, 2));
        } catch (error) {
            setOutput('An error occurred while submitting the form.');
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: '0 auto', padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Departement Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box marginBottom={2}>
                    <TextField
                        label="Name of Departement"
                        name="name_of_departement"
                        value={formData.name_of_departement}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </Box>
                <Box marginBottom={2}>
                    <TextField
                        label="Departement Code"
                        name="departement_code"
                        value={formData.departement_code}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </Box>
                <Box marginBottom={2}>
                    <TextField
                        label="Departement Head (Employee ID)"
                        name="departement_head"
                        value={formData.departement_head}
                        onChange={handleInputChange}
                        fullWidth
                        placeholder="Enter Employee ID"
                    />
                </Box>
                <Box marginBottom={2}>
                    <TextField
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        fullWidth
                        multiline
                        rows={4}
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

export default Departement;
