import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'common/Input',
	component: Input,
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Date: Story = {
	args: {
		icon: 'calendar',
		label: '제조일자',
		type: 'date',
		value: '',
		setValue: value => {
			console.log(value);
		},
		disabled: false,
		className: '',
	},
};

export const Text: Story = {
	args: {
		icon: 'calendar',
		label: '제품명',
		type: 'text',
		value: '',
		setValue: value => {
			console.log(value);
		},
		disabled: false,
		className: '',
	},
};

export const Count: Story = {
	args: {
		icon: 'count',
		label: '수량',
		type: 'number',
		value: '',
		setValue: value => {
			console.log(value);
		},
		disabled: false,
		className: '',
	},
};
