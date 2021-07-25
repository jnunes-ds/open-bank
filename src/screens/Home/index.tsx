import React from 'react';
import { StatusBar } from 'react-native';

import {
    Container,
    Title
} from './styles';

export function Home(): JSX.Element{

    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Title> Hello World! </Title>
        </Container>
    );
}