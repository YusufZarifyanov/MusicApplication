import { Grid, Card, Button, Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const Track = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {
            _id: '61164e18deed873db8ba9316',
            name: 'Трект 1',
            artist: 'Юсуф',
            text: 'Знаешь ли ты, вдоль ночных дорог',
            listens: 5,
            picture: 'http://localhost:5000/image/c5fc6350-3e5a-426d-bb7b-da8c997a511a.jpg',
            audio: 'http://localhost:5000/audio/d6a96d79-b7ad-4f11-b97c-d1bca1935d32.mp3',
        },
        {
            _id: '6116822cc7b48812d061541c',
            name: 'Трект 2',
            artist: 'Юсуф',
            text: 'Знаешь ли ты, вдоль ночных дорог',
            listens: 5,
            picture: 'http://localhost:5000/image/c5fc6350-3e5a-426d-bb7b-da8c997a511a.jpg',
            audio: 'http://localhost:5000/audio/d6a96d79-b7ad-4f11-b97c-d1bca1935d32.mp3',
        },
        {
            _id: '6116822cc7b48812d061541d',
            name: 'Трект 3',
            artist: 'Юсуф',
            text: 'Знаешь ли ты, вдоль ночных дорог',
            listens: 5,
            picture: 'http://localhost:5000/image/c5fc6350-3e5a-426d-bb7b-da8c997a511a.jpg',
            audio: 'http://localhost:5000/audio/d6a96d79-b7ad-4f11-b97c-d1bca1935d32.mp3',
        },
    ];
    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Box p={3}>
                    <Card style={{ width: 900 }}>
                        <Grid container justifyContent={'space-between'}>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Card>
                </Box>
            </Grid>
        </MainLayout>
    );
};

export default Track;
