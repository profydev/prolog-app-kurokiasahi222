import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ButtonIcon } from "./button-icon";
import { Button, ButtonSize, ButtonColor, ButtonState } from "./button";
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
  size: ButtonSize.md,
  disabled: false,
  buttonColor: ButtonColor.primary,
  state: ButtonState.default,
  children: "Button CTA",
};
Default.parameters = {
  viewMode: "docs",
  layout: "centered",
};

export const Small = {
  ...Default,
  args: {
    ...Default.args,
    size: ButtonSize.sm,
  },
};

export const Medium = {
  ...Default,
  args: {
    ...Default.args,
    size: ButtonSize.md,
  },
};

export const Large = {
  ...Default,
  args: {
    ...Default.args,
    size: ButtonSize.lg,
  },
};

export const XLarge = {
  ...Default,
  args: {
    ...Default.args,
    size: ButtonSize.xl,
  },
};

export const Secondary = {
  ...Default,
  args: {
    ...Default.args,
    buttonColor: ButtonColor.secondary,
  },
};

export const Gray = {
  ...Default,
  args: {
    ...Default.args,
    buttonColor: ButtonColor.gray,
  },
};

export const Empty = {
  ...Default,
  args: {
    ...Default.args,
    buttonColor: ButtonColor.empty,
  },
};

export const EmptyGray = {
  ...Default,
  args: {
    ...Default.args,
    buttonColor: ButtonColor.emptyGray,
  },
};

export const Error_ = {
  ...Default,
  args: {
    ...Default.args,
    buttonColor: ButtonColor.error,
  },
};

export const EmptyError = {
  ...Default,
  args: {
    ...Default.args,
    buttonColor: ButtonColor.emptyError,
  },
};

export const IconLeading = {
  ...Default,
  args: {
    ...Default.args,
    children: (
      <>
        <ButtonIcon src="/icons/circle.svg" />
        Button CTA
      </>
    ),
  },
};

export const IconTrailing = {
  ...Default,
  args: {
    ...Default.args,
    children: (
      <>
        Button CTA
        <ButtonIcon src="/icons/circle.svg" />
      </>
    ),
  },
};

export const IconOnly = {
  ...Default,
  args: {
    ...Default.args,
    icon: true,
    children: <ButtonIcon src="/icons/circle.svg" />,
  },
};
