import { MenuIconButton } from '@/components/atoms/button/MenuIconButton';
import { MenuDrawer } from '@/components/molecules/MenuDrawer';
import { Box, Drawer, Flex, Heading, Link } from '@chakra-ui/react';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router';

export const Header = memo(() => {
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate('/home'), []);
  const onClickUserManagement = useCallback(() => navigate('/home/user_management'), []);
  const onClickSetting = useCallback(() => navigate('/home/setting'), []);

  return (
    <Drawer.Root placement={'start'} size={'xs'}>
      <Flex
        as={'nav'}
        bg={'teal.500'}
        color={'gray.50'}
        align={'center'}
        justify={'space-between'}
        padding={{ base: 3, md: 5 }}
      >
        <Flex align={'center'} as={'a'} mr={8} _hover={{ cursor: 'pointer' }} onClick={onClickHome}>
          <Heading as={'h1'} fontSize={{ base: 'md', md: 'lg' }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex align={'center'} fontSize={'sm'} flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            <Link color={'gray.50'} onClick={onClickUserManagement}>
              ユーザー一覧
            </Link>
          </Box>
          <Link color={'gray.50'} onClick={onClickSetting}>
            設定
          </Link>
        </Flex>
        <Drawer.Trigger asChild>
          <MenuIconButton />
        </Drawer.Trigger>
        <MenuDrawer
          onClickHome={onClickHome}
          onClickUserManagement={onClickUserManagement}
          onClickSetting={onClickSetting}
        />
      </Flex>
    </Drawer.Root>
  );
});
