import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Dionata Bergmann</h1>
        <h2>@dionata_bergmann</h2>

        <p>
          Estudante <a href="https://www.senacrs.com.br/">@senacrs</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Pelotas, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 29 de fevereiro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;