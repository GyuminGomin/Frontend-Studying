import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Table, TableBody, TableCell, TableContainer, TableHead, Paper, Pagination, TableRow} from '@mui/material';
const DataTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowPerPage] = useState(5);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('데이터 로딩 실패: ', error)
            });
    }, []);


    const columns = [
        {field: 'id', headerName: 'ID', width:70 },
        {field: 'name', headerName: 'Name', width:130 },
        {field: 'email', headerName: 'Email', width:200 },
    ]

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    }
    const indexOfLastRow = currentPage * rowPerPage;
    const indexOfFirstRow = indexOfLastRow - rowPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.field}>
                                    {column.headerName}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentRows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={Math.ceil(data.length / rowPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color='primary'
                sx={{mt: 2, display: 'flex', justifyContent: 'center'}}
            />
        </div>
    );
};


export default DataTable