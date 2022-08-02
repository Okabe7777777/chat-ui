import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { Conversations, MyChatBubble } from "./style";
import TitleBar from "components/TitleBar";
import ChatBubble from "components/ChatBubble";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";
import Footer from "components/Footer";
import { useSpring } from "react-spring";

function Conversation({ onAvatarClick, onVideoClicked, children, ...rest }) {
  const tBarAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    from: { opacity: 0, transform: "translate3d(0px,-50px,0px)" },
    delay: 500,
  });

  const convsAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    from: { opacity: 0, transform: "translate3d(50px,0px,0px)" },
    delay: 800,
  });

  const ftAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px,0px,0px)",
    from: { opacity: 0, transform: "translate3d(0px,50px,0px)" },
    delay: 950,
  });

  return (
    <StyledConversation {...rest}>
      <TitleBar
        animeProps={tBarAnimeProps}
        onVideoClicked={onVideoClicked}
        onAvatarClick={onAvatarClick}
      />
      <Conversations style={convsAnimeProps}>
        <ChatBubble time="昨天 下午14:26">Hi 小兰，忙什么呢？</ChatBubble>
        <MyChatBubble time="昨天 下午16:30">
          Hello! 最近就是一直在加班改 BUG 呢，然后 怼产品，怼 UI，各种怼!
        </MyChatBubble>
        <ChatBubble time="昨天 下午18:30">
          <VoiceMessage time="01:24" />
        </ChatBubble>
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <MyChatBubble time="昨天 下午16:30">
          明天约一把和平精英，不连赢10把不罢休 😎
          <Emoji label="smilewithsunglasses">😎</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer animeProps={ftAnimeProps} />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
