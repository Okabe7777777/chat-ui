import Icon from "components/Icon";
import Paragraph from "components/Paragraph";
import Seperator from "components/Seperator";
import React from "react";
import Dropdown from ".";
import { DropdownItem } from "./style";
import { ReactComponent as Options } from "assets/icons/options.svg";

export default {
  title: "UI 组件/Dropdown",
  component: Dropdown,
};

const dropdownContent = (
  <>
    <DropdownItem>
      <Paragraph>个人资料</Paragraph>
    </DropdownItem>
    <DropdownItem>
      <Paragraph>关闭会话</Paragraph>
    </DropdownItem>
    <Seperator />
    <DropdownItem>
      <Paragraph type="danger">屏蔽此人</Paragraph>
    </DropdownItem>
  </>
);

export const Default = () => (
  <div
    style={{ display: "flex", justifyContent: "space-between", width: "50%" }}
  >
    <Paragraph>点击右侧按钮</Paragraph>
    <Dropdown content={dropdownContent}>
      <Icon opacity={0.3} icon={Options} />
    </Dropdown>
  </div>
);

export const Left = () => (
  <div>
    <Paragraph>点击下方按钮</Paragraph>
    <Dropdown align="left" content={dropdownContent}>
      <Icon opacity={0.3} icon={Options} />
    </Dropdown>
  </div>
);
