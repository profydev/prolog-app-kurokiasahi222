import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CheckBox } from "./checkbox";
export default {
  title: "UI/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    // More on Story layout: https://storybook.js.org/docs/reac  t/configure/story-layout
  },
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = () => <CheckBox />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
  layout: "centered",
};

// export const Small = {
//   ...Default,
//   args: {
//     ...Default.args,
//     size: ButtonSize.sm,
//   },
// };

// export const Medium = {
//   ...Default,
//   args: {
//     ...Default.args,
//     size: ButtonSize.md,
//   },
// };
