import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';

const TrackPage = () => {
    const track: ITrack = {
        _id: '61164e18deed873db8ba9316',
        name: 'Трект 1',
        artist: 'Юсуф',
        text: 'Знаешь ли ты, вдоль ночных дорог',
        listens: 5,
        picture: 'http://localhost:5000/image/3f152601-8f35-4621-b234-bbe0a52b8099.jpg',
            audio: 'http://localhost:5000/audio/d6a96d79-b7ad-4f11-b97c-d1bca1935d32.mp3',
        comments: []
    };
    const router = useRouter();

    return (
        <MainLayout>
            <Button onClick={() => router.push('/tracks')} variant={'outlined'} style={{ fontSize: 32 }}>
                К списку
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={track.picture} width={200} height={200} />
                <div>
                    <h1>Название трека - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField label='Ваше имя' fullWidth />
                <TextField label='Комментарий' fullWidth multiline rows={4} />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map((comment) => (
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комметрий - {comment.text}</div>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
};

export default TrackPage;
