import { Paper, Grid, Hidden, styled} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'green',
    padding: 15,
    textAlign: 'center',
    color : 'white',
}));

export default function ComplexLayout() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} >
                <Item>Content 1</Item>
            </Grid>
            <Grid item xs={12} md={6}>
                <Item>Content 2</Item>
            </Grid>
            <Grid item xs={12} md={6}>
                <Item>Content 3</Item>
            </Grid>
            <Grid item xs={12} md={6}>
                <Item>Content 4</Item>
            </Grid>
        </Grid>
    )
}