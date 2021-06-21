import React from 'react';

import {
  Container,
  Retweeted,
  LogoIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <LogoIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Senac RS</strong>
            <span>@senacrs</span>
            <Dot />
            <time>17 de jun</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Realize o sonho de fazer um curso técnico de forma gratuita</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              15
            </Status>
            <Status>
              <LikeIcon />
              605
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;