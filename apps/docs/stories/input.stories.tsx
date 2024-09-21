import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@shaheerkochai/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div>
      <label
        htmlFor="input-with-label"
        className="block mb-2 text-sm font-medium"
      >
        Label
      </label>
      <Input id="input-with-label" {...args} />
    </div>
  ),
  args: {
    placeholder: "Enter text...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const WithType: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
};
