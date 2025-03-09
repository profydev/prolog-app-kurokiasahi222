import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { LoadingError } from "./loading-error";

export default {
  title: "UI/Loading-Error",
  component: LoadingError,
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as Meta<typeof LoadingError>;

const Template: StoryFn<typeof LoadingError> = (args) => (
  <LoadingError {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
  viewMode: "docs",
};
