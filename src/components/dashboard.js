import { Box, Card, Grid, Typography } from "@mui/material";

function Dashboard() {
    return (
        <Box sx={{width: "82%", height: "100vh", backgroundColor: "green", overflow: "auto"}}>
            <Box sx={{display: "flex", width: "100%", height: "8vh", backgroundColor: "yellow"}}>
                <Typography mx={5} variant="h5" mt={3}>
                    Dashboard
                </Typography>
            </Box>
            <Box sx={{height: "92vh", display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
                <Grid px={4} py={2} container spacing={5} height={"40%"}>
                    <Grid item xs={3}>
                        <Card sx={{height: "100%"}}>
                            현재 총 브랜드 제품 수
                        </Card>    
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{height: "100%"}}>
                            현재 총 카테고리 수
                        </Card>    
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{height: "100%"}}>
                            새로 들어온 제품 수
                        </Card>    
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{height: "100%"}}>
                            asdfasdf
                        </Card>    
                    </Grid>
                </Grid>
                <Grid px={4} py={2} container spacing={5} height={"60%"}>
                    <Grid item xs={4}>
                        <Card sx={{height: "100%"}}>
                            asdfasdf
                        </Card>    
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{height: "100%"}}>
                            asdfasdf
                        </Card>    
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{height: "100%"}}>
                            asdfasdf
                        </Card>    
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}

export default Dashboard;