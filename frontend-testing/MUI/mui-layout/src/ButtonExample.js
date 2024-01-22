import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ButtonExample = () => {
    const [compProps, setCompProps] = useState({ // 컴포넌트 상태값 저장
        color: 'primary', // 기본값
        variant: 'contained',
        size: 'medium'
    });

    const [showExample, setShowExample] = useState(false); // 처음엔 안보여줄 것

    const handlePropChange = (event) => { // 이벤트를 받아서 set할것
        setCompProps((prevProps) => ({
            ...prevProps, // 기존에 가지고 있는 props
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
                    value={ compProps.color } // 기본값
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