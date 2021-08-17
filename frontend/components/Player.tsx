import { Grid, IconButton } from '@material-ui/core';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';
import React from 'react';
import { useAction } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styles from '../styles/Player.module.scss';
import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';

const Player = () => {
    const track: ITrack = {
        _id: '61164e18deed873db8ba9316',
        name: 'Трект 1',
        artist: 'Юсуф',
        text: 'Знаешь ли ты, вдоль ночных дорог',
        listens: 5,
        picture: 'http://localhost:5000/image/3f152601-8f35-4621-b234-bbe0a52b8099.jpg',
        audio: 'http://localhost:5000/audio/d6a96d79-b7ad-4f11-b97c-d1bca1935d32.mp3',
        comments: [],
    };
    const { pause, volume, active, duration, currentTime } = useTypedSelector((state) => state.player);
    const { pauseTrack, playTrack } = useAction();
    const play = () => (pause ? playTrack() : pauseTrack());

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>{active ? <Pause /> : <PlayArrow />}</IconButton>
            <Grid container direction='column' style={{ width: 200, margin: '0 20px' }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})} />
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackProgress left={0} right={100} onChange={() => ({})} />
        </div>
    );
};

export default Player;
