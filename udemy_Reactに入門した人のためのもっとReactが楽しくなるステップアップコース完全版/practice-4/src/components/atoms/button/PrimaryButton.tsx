import { Button } from '@chakra-ui/react';
import { memo, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton = memo(({ children, disabled = false, loading = false, onClick }: Props) => {
  return (
    <Button
      bg={'teal.500'}
      _hover={{ opacity: '0.6' }}
      onClick={onClick}
      loading={loading}
      disabled={disabled || loading}
    >
      {children}
    </Button>
  );
});
