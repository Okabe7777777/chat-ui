import React from "react";
import ChatBubble from ".";

export default {
  title: "UI 组件/ChatBubble",
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const FromOthers = () => (
  <ChatBubble time="昨天 下午14: 26">这是一条其他人发送的聊天消息</ChatBubble>
);

export const Mine = () => (
  <ChatBubble type="mine" time="昨天 下午14: 26">
    这是一条其他人发送的聊天消息
  </ChatBubble>
);
