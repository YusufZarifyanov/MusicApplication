import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useInput } from '../../hooks/useInput';
import MainLayout from '../../layouts/MainLayout';

const TrackPage = ({ serverTrack }) => {
    const router = useRouter();
    const [track, setTrack] = useState(serverTrack);
    const username = useInput('');
    const text = useInput('');

    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id,
            });
            setTrack({ ...track, comments: [...track.comments, response.data] });
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <MainLayout title={track.name + ' ' + track.artist} keywords={'Музыка, артисты, ' + track.name}>
            <Button onClick={() => router.push('/tracks')} variant={'outlined'} style={{ fontSize: 32 }}>
                К списку
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={'http://localhost:5000/' + serverTrack.picture} width={200} height={200} />
                <div>
                    <h1>Название трека - {serverTrack.name}</h1>
                    <h1>Исполнитель - {serverTrack.artist}</h1>
                    <h1>Прослушиваний - {serverTrack.listens}</h1>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{serverTrack.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField label='Ваше имя' fullWidth {...username} />
                <TextField label='Комментарий' fullWidth multiline rows={4} {...text} />
                <Button onClick={addComment}>Отправить</Button>
            </Grid>
            <div>
                {serverTrack.comments.map((comment) => (
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id);
    return {
        props: {
            serverTrack: response.data,
        },
    };
};
