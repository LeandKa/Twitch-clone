import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';
import { List,ChannelContainer,LeftSide,Avatar,Column,Username,Info,RightSide,WhiteCircle } from './styles';

const ChannelList: React.FC = () =>{
  
  const ChannelItem = () =>(
    <ChannelContainer>
      <LeftSide>
         <Avatar source={streamThumbnail}/>
         <Column>
           <Username></Username>
           <Info></Info>
         </Column>
      </LeftSide>

      <RightSide>
         <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  )

  
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
