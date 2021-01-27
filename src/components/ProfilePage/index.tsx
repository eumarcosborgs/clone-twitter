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

        <h1>Marcos Paulo</h1>
        <h2>@eumarcosborgs</h2>

        <p>
          My <a href="https://www.linkedin.com/in/eumarcosborgs/">@Linkedin</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Mato Grosso do Sul, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 11 de fevereiro de 2003
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>112</strong>
          </span>
          <span>
            <strong>598 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
