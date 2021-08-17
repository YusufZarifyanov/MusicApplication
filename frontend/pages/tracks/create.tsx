import { Button, Card, Grid } from '@material-ui/core';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const Create = () => {
    return (
        <MainLayout>
            <Grid container>
                <Card>
                    <Grid container justifyContent={'space-between'}>
                        <h1>Списокrr треков</h1>
                        <Button>Загрузить</Button>
                    </Grid>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Create;
