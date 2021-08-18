import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import FileUpload from '../../components/FileUpload';
import StepWrapper from '../../components/StapWrapper';
import { useInput } from '../../hooks/useInput';
import MainLayout from '../../layouts/MainLayout';

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    const name = useInput('');
    const artist = useInput('');
    const text = useInput('');

    const router = useRouter();

    const next = () => {
        setActiveStep((prev) => prev + 1);
        const formData = new FormData();
        formData.append('name', name.value);
        formData.append('text', text.value);
        formData.append('artist', artist.value);
        formData.append('picture', picture);
        formData.append('audio', audio);
        axios.post('http://localhost:5000/tracks', formData)
        .then(res => router.push('/tracks'))
        .catch(e => console.log(e))
    };

    const back = () => {
        setActiveStep((prev) => prev - 1);
    };

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && (
                    <Grid container direction={'column'} style={{ padding: 20 }}>
                        <TextField label={'Название трека'} style={{ marginTop: 10 }} {...name} />
                        <TextField label={'Имя исполнителя'} style={{ marginTop: 10 }} {...artist} />
                        <TextField label={'Слова к треку'} multiline rows={3} style={{ marginTop: 10 }} {...text} />
                    </Grid>
                )}
                {activeStep === 1 && (
                    <FileUpload setFile={setPicture} accept='image/*'>
                        <Button>Загрузить изображение</Button>
                    </FileUpload>
                )}
                {activeStep === 2 && (
                    <FileUpload setFile={setAudio} accept='audio/*'>
                        <Button>Загрузить аудио</Button>
                    </FileUpload>
                )}
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>
                    Назад
                </Button>
                <Button disabled={activeStep === 3} onClick={next}>
                    Вперед
                </Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;
