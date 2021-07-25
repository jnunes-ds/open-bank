import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.primary_bold};
`;
