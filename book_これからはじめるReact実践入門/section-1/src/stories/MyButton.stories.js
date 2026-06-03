import { MyButton } from '../MyButton'; // コンポーネントのパスは環境に合わせて調整してください

const meta = {
  title: 'Components/MyButton',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

// 1. プライマリ（主ボタン）
export const Primary = {
  args: {
    primary: true,
    label: '主要アクション',
  },
};

// 2. セカンダリ（副ボタン）
export const Secondary = {
  args: {
    primary: false,
    label: 'サブアクション',
  },
};

// 3. サイズバリエーション（ラージ）
export const Large = {
  args: {
    size: 'large',
    label: '大きなボタン',
  },
};

// 4. サイズバリエーション（スモール）
export const Small = {
  args: {
    size: 'small',
    label: '小さなボタン',
  },
};

// 5. カスタム背景色
export const CustomBackground = {
  args: {
    primary: true,
    backgroundColor: '#ff4742',
    label: 'カスタムカラー',
  },
};
