import './custom-button.js';

const meta = {
  component: 'custom-button',
  tags: ['autodocs'],
};

export default meta;

export const primary = {
  args: {
    intent: 'primary',
    label: 'my primary button',
  }
}

export const secondary = {
  args: {
    intent: 'secondary',
    label: 'my secondary button',
  }
}