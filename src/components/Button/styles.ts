import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #29c872;
  border-radius: 5px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #2f2f2f;
  font-family: 'Roboto-Medium';
  font-size: 15px;
`;
