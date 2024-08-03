import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonSize, ButtonColor, ButtonState } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ size, color, state, children }) => (
  <div style={{ padding: 50 }}>
    <Button color={color} size={size} state={state}>
      {children}
    </Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.sm,
  color: ButtonColor.primary,
  state: ButtonState.default,
  children: "Label",
};
Default.parameters = {
  viewMode: "docs",
};
