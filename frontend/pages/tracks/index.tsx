import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks, searchTracks } from '../../store/actions-creators/track';
import { useDispatch } from 'react-redux';

const Track = () => {
    const router = useRouter();
    const { tracks, error } = useTypedSelector((state) => state.track);
    const [query, setQuery] = useState<string>('');
    const [timer, setTimer] = useState(null);
    const dispatch = useDispatch() as NextThunkDispatch;

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if (timer) {
            clearTimeout(timer);
        }
        setTimer(
            setTimeout(async () => {
                await dispatch(await searchTracks(e.target.value));
            }),
        );
    };

    return (
        <MainLayout title={'Список треков'}>
            {error ? (
                <h1>{error}</h1>
            ) : (
                <Grid container justifyContent={'center'}>
                    <Box p={3}>
                        <Card style={{ width: 900 }}>
                            <Grid container justifyContent={'space-between'}>
                                <h1>Список треков</h1>
                                <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                            </Grid>
                        </Card>
                    </Box>
                    <TextField fullWidth value={query} onChange={search} />
                    <TrackList tracks={tracks} />
                </Grid>
            )}
        </MainLayout>
    );
};

export default Track;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
});
