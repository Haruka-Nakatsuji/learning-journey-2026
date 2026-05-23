import { memo, type ReactNode } from 'react';
import { Button, Drawer, Portal } from '@chakra-ui/react';

type Props = {
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer = memo((props: Props) => {
  const { onClickHome, onClickUserManagement, onClickSetting } = props;

  return (
    <>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body p={0} bg={'gray.100'}>
              <Drawer.ActionTrigger asChild>
                <Button w={'100%'} variant={'ghost'} onClick={onClickHome}>
                  TOP
                </Button>
              </Drawer.ActionTrigger>
              <Drawer.ActionTrigger asChild>
                <Button w={'100%'} variant={'ghost'} onClick={onClickUserManagement}>
                  ユーザー一覧
                </Button>
              </Drawer.ActionTrigger>
              <Drawer.ActionTrigger asChild>
                <Button w={'100%'} variant={'ghost'} onClick={onClickSetting}>
                  設定
                </Button>
              </Drawer.ActionTrigger>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </>
  );
});
