import { memo } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import type { IconButtonProps } from '@chakra-ui/icons';

export const MenuIconButton = memo((props: IconButtonProps) => {
  return (
    <>
      <IconButton
        aria-label='メニューボタン'
        justifyContent='center'
        alignItems='center'
        size={'sm'}
        variant={'ghost'}
        display={{ base: 'inline-flex', md: 'none' }}
        {...props}
      >
        <FaBars color='white' />
      </IconButton>
    </>
  );
});
