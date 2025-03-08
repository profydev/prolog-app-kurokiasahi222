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
    layout: "centered",
    // More on Story layout: https://storybook.js.org/docs/reac  t/configure/story-layout
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.sm,
  state: ButtonState.default,
  buttonColor: ButtonColor.primary,
  icon: ButtonIcon.default,
};
Default.parameters = {
  viewMode: "docs",
  layout: "centered",
};

export const Small = {
  args: {
    ...Default,
    size: ButtonSize.sm,
  },
};

export const Medium = {
  args: {
    ...Default,
    size: ButtonSize.md,
  },
};

export const Large = {
  args: {
    ...Default,
    size: ButtonSize.lg,
  },
};

export const XLarge = {
  args: {
    ...Default,
    size: ButtonSize.xl,
  },
};
