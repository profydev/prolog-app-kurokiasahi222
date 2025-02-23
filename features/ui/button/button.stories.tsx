import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Button,
  ButtonSize,
  ButtonColor,
  ButtonState,
  ButtonIcon,
} from "./button";
export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.sm,
  state: ButtonState.default,
  buttonColor: ButtonColor.primary,
  icon: ButtonIcon.default,
  children: "Button CTA",
};
Default.parameters = {
  viewMode: "docs",
};
