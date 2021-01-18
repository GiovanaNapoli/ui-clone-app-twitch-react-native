import React from "react";

import streamThumbnail from "../../images/stream_thumbnail.jpg";

import { Text } from "react-native";

import {
  StreamContainer,
  StreamThumbnail,
  StreamCollum,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  TagRow,
  TagView,
  TagTex,
  List,
  StreamDescription,
  StreamCategory

} from "./styles";

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />
      <StreamCollum>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLine={1}> GenovaTrakinas </StreamUserName>
          </StreamHeader>
          <StreamDescription numberOfLine={1} >
            Front-end com React Native, styled-compnents e Typescript
          </StreamDescription>
          <StreamCategory>
            Ciencia & e tecnologia
          </StreamCategory>
        </StreamRow>
        <TagRow>
          <TagView>
            <TagTex>Portuguese</TagTex>
          </TagView>
          <TagView>
            <TagTex>Web Developement</TagTex>
          </TagView>
        </TagRow>
      </StreamCollum>
    </StreamContainer>
  );
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
