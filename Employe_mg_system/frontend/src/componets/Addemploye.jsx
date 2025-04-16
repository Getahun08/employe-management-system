import React, { useState } from 'react';
import {Container,TextField,Button,Typography,MenuItem,Select,InputLabel,FormControl} from '@mui/material';

function EmployementDetailsForm() {
    const GENDER_CHOICES = [
        { value: 'M', label: 'Male' },
        { value: 'F', label: 'Female' },
        { value: 'O', label: 'Others' },
    ];
    const CITY_CHOICES = [
        { value: 'Addis', label: 'Addis' },
        { value: 'Jima', label: 'Jima' },
        { value: 'Hawasa', label: 'Hawasa' },
    ];
    const EMPLOYMENT_TYPE_CHOICES = [
        { value: 'FT', label: 'Full-Time' },
        { value: 'PT', label: 'Part-Time' },
        { value: 'CT', label: 'Contract' },
        { value: 'Fx', label: 'Flexible' },
    ];

    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        gender: '',
        date_of_birth: '',
        email: '',
        mobile_number: '',
        home_address: '',
        city: '',
        nationality: '',
        postal_code: '',
        job_title: '',
        employement_type: '',
        superviser: '',
        start_date: '',
        end_date: '',
        departements: '',
    });

    const [output, setOutput] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/http://127.0.0.1:8000/admin/api/employementdetails/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setOutput(JSON.stringify(data, null, 2));
        } catch (error) {
            setOutput('An error occurred while submitting the form.');
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Employment Details Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="First Name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Middle Name"
                        name="middle_name"
                        value={formData.middle_name}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Last Name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <FormControl fullWidth>
                        <InputLabel>Gender</InputLabel>
                        <Select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            required
                        >
                            {GENDER_CHOICES.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Date of Birth"
                        name="date_of_birth"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.date_of_birth}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Mobile Number"
                        name="mobile_number"
                        value={formData.mobile_number}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Home Address"
                        name="home_address"
                        value={formData.home_address}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <FormControl fullWidth>
                        <InputLabel>City</InputLabel>
                        <Select
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        >
                            {CITY_CHOICES.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Postal Code"
                        name="postal_code"
                        value={formData.postal_code}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Job Title"
                        name="job_title"
                        value={formData.job_title}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <FormControl fullWidth>
                        <InputLabel>Employment Type</InputLabel>
                        <Select
                            name="employement_type"
                            value={formData.employement_type}
                            onChange={handleInputChange}
                            required
                        >
                            {EMPLOYMENT_TYPE_CHOICES.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Supervisor"
                        name="superviser"
                        value={formData.superviser}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Start Date"
                        name="start_date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.start_date}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="End Date"
                        name="end_date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.end_date}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Departments"
                        name="departements"
                        value={formData.departements}
                        onChange={handleInputChange}
                        fullWidth
                        placeholder="Enter Department IDs separated by commas"
                    />
                </div>
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Submit
                </Button>
            </form>
            <Typography variant="h6" style={{ marginTop: '20px' }}>
                Response:
            </Typography>
            <pre>{output}</pre>
        </Container>
    );
}

export default EmployementDetailsForm;
