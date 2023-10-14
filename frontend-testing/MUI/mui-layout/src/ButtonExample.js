import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ButtonExample = () => {
    const [compProps, setCompProps] = useState({
        color: 'primary',
        variant: 'contained',
        size: 'medium'
    });

    const [showExample, setShowExample] = useState(false);

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
            <h3>ButtonExample</h3>
            {showExample && (
                <Button {...compProps}>
                    예제 버튼
                </Button>
            )}
            <FormControl sx={{ mx: 1, minWidth: 120 }}>
                <InputLabel id='color-label'>color</InputLabel>
                <Select
                    labelId='color-label'
                    id ='color-select'
                    value={ compProps.color }
                    name='color'
                    label='Color'
                    size='small'
                    onChange={handlePropChange}
                >
                    <MenuItem value="primary">Primary</MenuItem>
                    <MenuItem value="secondary">Secondary</MenuItem>
                    <MenuItem value="success">Success</MenuItem>
                    <MenuItem value="error">Error</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ mx: 1, minWidth: 120 }}>
                <InputLabel id='variant-label'>Variant</InputLabel>
                <Select
                    labelId='variant-label'
                    id ='variant-select'
                    value={ compProps.variant }
                    name='variant'
                    label='Variant'
                    size='small'
                    onChange={handlePropChange}
                >
                    <MenuItem value="text">text</MenuItem>
                    <MenuItem value="outlined">outlined</MenuItem>
                    <MenuItem value="contained">contained</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ mx: 1, minWidth: 120 }}>
                <InputLabel id='size-label'>Size</InputLabel>
                <Select
                    labelId='size-label'
                    id ='size-select'
                    value={ compProps.size }
                    name='size'
                    label='Size'
                    size='small'
                    onChange={handlePropChange}
                >
                    <MenuItem value="small">small</MenuItem>
                    <MenuItem value="medium">medium</MenuItem>
                    <MenuItem value="large">large</MenuItem>
                </Select>
            </FormControl>

            <Button onClick={handleApplyClick}>
                적용/보이기
            </Button>
        </div>
    )
}

export default ButtonExample