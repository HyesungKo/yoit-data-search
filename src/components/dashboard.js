import { useState, useEffect} from 'react';

import { Box, Card, Grid, TextField, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import data from './data';

const brand_columns = [
    { field: 'brand', headerName: "Brand", width: 100},
    { field: 'count', headerName: "Count", width: 100},
]

const cat_columns = [
    { field: 'category', headerName: "Category", width: 100},
    { field: 'count', headerName: "Count", width: 100},
]

const item_columns = [
    { field: 'name', headerName: "Name", width: 100},
    { field: 'brand', headerName: "Brand", width: 100},
    { field: 'category', headerName: "Category", width: 100},
    { field: 'price', headerName: "Price", width: 100},
    { field: 'impression', headerName: "Impression", width: 100},
    { field: 'click', headerName: "Click", width: 100}
]

function Dashboard() {
    const [brands, setBrands] = useState({})
    const [categories, setCategories] = useState({})
    const [items, setItems] = useState([])

    useEffect(() => {
        setBrands({});
        setCategories({});
        setItems([])
        data.forEach(item => {
            if(brands[item.brand] === undefined) {
                brands[item.brand] = 1;
                setBrands(brands);
            } else {
                brands[item.brand] += 1;
                setBrands(brands)
            }
            if(categories[item.category] === undefined) {
                categories[item.category] = 1;
                setCategories(categories);
            } else {
                categories[item.category] += 1;
                setCategories(categories)
            }

            setItems(prevItems => 
                [...prevItems, item]
            )
        });        
    }, [data])

    return (
        <Box sx={{width: "85%", height: "100vh", overflow: "auto"}}>
            <Box sx={{display: "flex", width: "100%", height: "8vh", backgroundColor: "yellow"}}>
                <Typography mx={5} variant="h5" mt={3}>
                    Dashboard
                </Typography>
            </Box>
            <Box sx={{height: "92vh", display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
                <Grid px={3} pt={1} container spacing={5} height={"25%"}>
                    <Grid item xs={3}>
                    <Card variant='outlined' sx={{height: "100%"}}>
                            <Typography mt={5} variant='h5' align='center'>
                                총 브랜드 수
                            </Typography>
                            <Typography mt={3} variant='h4' align='center'>
                                {Object.keys(brands).length}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card variant='outlined' sx={{height: "100%"}}>
                            <Typography mt={5} variant='h5' align='center'>
                                총 카테고리 수
                            </Typography>
                            <Typography mt={3} variant='h4' align='center'>
                                {Object.keys(categories).length}
                            </Typography>
                        </Card>    
                    </Grid>
                    <Grid item xs={3}>
                    <Card variant='outlined' sx={{height: "100%"}}>
                            <Typography mt={5} variant='h5' align='center'>
                                총 아이템 수
                            </Typography>
                            <Typography mt={3} variant='h4' align='center'>
                                {items.length}
                            </Typography>
                        </Card>     
                    </Grid>
                    <Grid item xs={3}>
                    <Card variant='outlined' sx={{height: "100%"}}>
                            <Typography mt={5} variant='h5' align='center'>
                                총 고유 아이템 수
                            </Typography>
                            <Typography mt={3} variant='h4' align='center'>
                                {items.length}
                            </Typography>
                        </Card>     
                    </Grid>
                </Grid>
                <Grid px={3} py={1} container spacing={5} height={"70%"}>
                    <Grid item xs={3} sx={{paddingTop: "10px !important"}}>
                        <Typography mb={1} variant='h6'>
                            By Brands
                        </Typography>
                        <TextField size='small' fullWidth id="outlined-basic" label="Type Brand" variant="outlined" />
                        <DataGrid
                            sx={{marginTop: 1, height: "90%"}}
                            rows={Object.keys(brands).map((key, index) => ({
                                id: index,
                                brand: key,
                                count: brands[key]
                            }))}
                            columns={brand_columns}
                            pageSize={10}
                            rowsPerPageOptions={[5,10]}
                            checkboxSelection
                        />
                    </Grid>
                    <Grid item xs={3} sx={{paddingTop: "10px !important"}}>
                        <Typography mb={1} variant='h6'>
                            By Categories
                        </Typography>
                        <TextField size='small' fullWidth id="outlined-basic" label="Type Category" variant="outlined" />
                        <DataGrid
                            sx={{marginTop: 1, height: "90%"}}
                            rows={Object.keys(categories).map((key, index) => ({
                                id: index,
                                category: key,
                                count: categories[key]
                            }))}
                            columns={cat_columns}
                            pageSize={10}
                            rowsPerPageOptions={[5,10]}
                            checkboxSelection
                        />
                    </Grid>
                    <Grid item xs={6} sx={{paddingTop: "10px !important"}}>
                        <Typography mb={1} variant='h6'>
                            Item List
                        </Typography>
                        <TextField size='small' fullWidth id="outlined-basic" label="Type Item Name" variant="outlined" />
                        <DataGrid
                            sx={{marginTop: 1, height: "90%"}}
                            rows={items}
                            columns={item_columns}
                            pageSize={10}
                            rowsPerPageOptions={[5,10]}
                            checkboxSelection
                        />
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}

export default Dashboard;