import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from "@mui/material/Radio";

const RadioExample = () => {
    const [compProps, setCompProps] = useState({
        color: 'primary',
        variant: 'contained',
        size: 'medium',
        labelPlacement: 'start',
        value: 'b'
    });

    const [showExample, setShowExample] = useState(false);

    const handleChange = (event) => {
        setCompProps((prevProps) => ({
            ...prevProps,
            value: event.target.value,
        }));
        console.log(`Input value: ${event.target.value}`);
    };
    const handlePropChange = (event) => {
        setCompProps((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value,
        }));
    };
    const handleApplyClick = () => {
        setShowExample(true);
    };

    return (
        <div>
            <h3>RadioExample</h3>
            {showExample && (
                    <Radio
                        {...compProps}
                        checked={compProps.value === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                    />
            )}
            <FormControl sx={{ mx: 1, minWidth: 120 }}>
                <InputLabel id="color-label">Color</InputLabel>
                <Select
                    labelId="color-label"
                    id="color-select"
                    value={compProps.color}
                    name="color"
                    label="Color"
                    size="small"
                    onChange={handlePropChange}
                >
                    <MenuItem value="primary">Primary</MenuItem>
                    <MenuItem value="secondary">Secondary</MenuItem>
                    <MenuItem value="success">Success</MenuItem>
                    <MenuItem value="error">Error</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ mx: 1, minWidth: 120 }}>
                <InputLabel id="variant-label">Variant</InputLabel>
                <Select
                    labelId="variant-label"
                    id="variant-select"
                    value={compProps.variant}
                    name="variant"
                    label="Variant"
                    size="small"
                    onChange={handlePropChange}
                >
                    <MenuItem value="text">Text</MenuItem>
                    <MenuItem value="outlined">Outlined</MenuItem>
                    <MenuItem value="contained">Contained</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ mx: 1, minWidth: 120 }}>
                <InputLabel id="size-label">Size</InputLabel>
                <Select
                    labelId="size-label"
                    id="size-select"
                    value={compProps.size}
                    name="size"
                    label="Size"
                    size="small"
                    onChange={handlePropChange}
                >
                    <MenuItem value="small">Small</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="large">Large</MenuItem>
                </Select>
            </FormControl>
            <Button
                color="primary"
                variant="contained"
                size="medium"
                onClick={handleApplyClick}>
                적용
            </Button>
        </div>
    );
};

export default RadioExample;