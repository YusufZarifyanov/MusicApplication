import { Grid, Card, Button, Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import { useAction } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const Track = () => {
    const router = useRouter();
    const {} = useAction()
    const tracks: ITrack[] = [
        {
            _id: '61164e18deed873db8ba9316',
            name: 'Трект 1',
            artist: 'Юсуф',
            text: 'Знаешь ли ты, вдоль ночных дорог',
            listens: 5,
            picture: 'http://localhost:5000/image/3f152601-8f35-4621-b234-bbe0a52b8099.jpg',
            audio: 'http://localhost:5000/audio/d6a96d79-b7ad-4f11-b97c-d1bca1935d32.mp3',
            comments: [],
        },
        {
            _id: '6116822cc7b48812d061541c',
            name: 'Трект 2',
            artist: 'Юсуф',
            text: 'Знаешь ли ты, вдоль ночных дорог',
            listens: 5,
            picture: 'http://localhost:5000/image/3f152601-8f35-4621-b234-bbe0a52b8099.jpg',
            audio: 'http://localhost:5000/audio/d6a96d79-b7ad-4f11-b97c-d1bca1935d32.mp3',
            comments: [],
        },
        {
            _id: '6116822cc7b48812d061541d',
            name: 'Трект 3',
            artist: 'Юсуф',
            text: 'Знаешь ли ты, вдоль ночных дорог',
            listens: 5,
            picture: 'http://localhost:5000/image/3f152601-8f35-4621-b234-bbe0a52b8099.jpg',
            audio: 'http://localhost:5000/audio/d6a96d79-b7ad-4f11-b97c-d1bca1935d32.mp3',
            comments: [],
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
                <TrackList tracks={tracks} />
            </Grid>
        </MainLayout>
    );
};

export default Track;
