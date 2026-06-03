import { Button, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Home, Mail, Info, AccountTree } from '@mui/icons-material';

const menu = [
  {
    title: 'ホーム',
    href: 'home.html',
    icon: Home,
  },
  {
    title: '問い合わせ',
    href: 'contact.html',
    icon: Mail,
  },
  {
    title: '会社概要',
    href: 'company.html',
    icon: Info,
  },
  {
    title: 'サイトマップ',
    href: 'sitemap.html',
    icon: AccountTree,
  },
];

export const MaterialDrawer = () => {
  const [show, setShow] = useState(false);

  const handleDraw = () => setShow((s) => !s);

  return (
    <>
      <Button onClick={handleDraw}>ドロワーを開く</Button>
      <Drawer anchor='left' open={show}>
        <Box sx={{ height: '100vh' }} onClick={handleDraw}>
          <List>
            {menu.map((item) => {
              const Icon = item.icon;
              return (
                <ListItem key={item.title}>
                  <ListItemButton href={item.href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
