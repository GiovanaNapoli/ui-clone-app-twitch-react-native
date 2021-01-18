import React from "react";

import { Text } from "react-native";

import {
  ChannelContainer,
  LeftSide,
  Avatar,
  Collum,
  UserName,
  Info,
  RightSide,
  WhiteCircle,
  List
} from "./styles";

const ChannelList: React.FC = () => {
  const ChannelItem: React.FC = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Collum>
          <UserName>Genova_trakinas</UserName>
          <Info>36 novos videos</Info>
        </Collum>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
