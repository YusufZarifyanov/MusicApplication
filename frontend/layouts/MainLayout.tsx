import { Container } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/Navbar';
import Player from '../components/Player';

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container style={{ marginTop: '150px' }}>{children}</Container>
            <Player />
        </>
    );
};

export default MainLayout;
