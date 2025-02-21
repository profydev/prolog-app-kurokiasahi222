// !!!!! IMPORTANT !!!!!
// Solution 8: This is added after watching the solution video for Footer: task 8

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Footer } from "./footer";

export default {
  title: "UI/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
