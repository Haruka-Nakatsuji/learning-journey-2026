import { Home } from '@/components/pages/Home';
import { Setting } from '@/components/pages/Setting';
import { UserManagement } from '@/components/pages/UserManagement';
import { HeaderLayout } from '@/components/templates/HeaderLayout';

export const homeRoutes = [
  {
    Component: HeaderLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'user_management',
        Component: UserManagement,
      },
      {
        path: 'setting',
        Component: Setting,
      },
    ],
  },
];
