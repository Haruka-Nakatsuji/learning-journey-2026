import { createSystem, defaultConfig } from '@chakra-ui/react';

export const theme = createSystem(defaultConfig, {
  globalCss: {
    body: {
      backgroundColor: 'gray.200',
      color: 'gray.500',
    },
  },
});
