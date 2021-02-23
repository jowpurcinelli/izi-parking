import React from 'react';
import { Image } from 'react-native';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.png';
import qrcodeImage from '../../assets/qr-code.png';

import { Container, HelloText, InstructionText } from './styles';

const Scan: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Image source={logoImg} />

      <HelloText>Olá, {user.name}!</HelloText>

      <InstructionText>
        Para estacionar escaneie o código QR do estacionamento
      </InstructionText>

      <Image source={qrcodeImage} style={{ marginBottom: 60 }} />
    </Container>
  );
};

export { Scan };
