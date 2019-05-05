import React from 'react';
import QRCode from 'react-native-qrcode';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  ContainerM, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonTex,
} from './styles';

export default function Menu({ translateY }) {
  return (
    <ContainerM style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}
    >
      <Code>
        <QRCode
          value="https://www.youtube.com/watch?v=DDm0M_rZLJo&t=2093s"
          size={80}
          bgColor="#8B10AE"
          fgColor="#FFF"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={ 20 } color="#FFF" />
          <NavText> Me ajuda </NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={ 20 } color="#FFF" />
          <NavText> Perfil </NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={ 20 } color="#FFF" />
          <NavText> Configurar cartão  </NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={ 20 } color="#FFF" />
          <NavText> Configurações do App </NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={ () => {}}>
        <SignOutButtonTex> Sair do app </SignOutButtonTex>
      </SignOutButton>

    </ContainerM>
  );
}
