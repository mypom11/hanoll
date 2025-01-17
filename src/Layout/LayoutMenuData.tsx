import { ContactIcon, PieChart, SettingsIcon, ShoppingBag, UserIcon } from 'lucide-react';

const menuData: any = [
  {
    label: 'menu',
    isTitle: true,
  },
  {
    id: 'product',
    label: '상품관리',
    link: '/#',
    icon: <ShoppingBag />,
    subItems: [
      {
        id: 'product-list',
        label: '상품 목록',
        link: '/product-list',
        parentId: 'landing',
      },
      {
        id: 'product-list',
        label: '상품 재고',
        link: '/stock-list',
        parentId: 'landing',
      },
    ],
  },
  {
    id: 'customer',
    label: '고객관리',
    link: '/#',
    icon: <UserIcon />,
    subItems: [
      {
        id: 'onepage',
        label: 'One Page',
        link: '/Employee',
        parentId: 'landing',
      },
    ],
  },
  {
    id: 'worker',
    label: '직원관리',
    link: '/#',
    icon: <ContactIcon />,
    subItems: [
      {
        id: 'employee-list',
        label: '직원 목록',
        link: '/employee-list',
        parentId: 'landing',
      },
    ],
  },
  {
    id: 'stastics',
    label: '판매통계',
    link: '/#',
    icon: <PieChart />,
    subItems: [
      {
        id: 'onepage',
        label: 'One Page',
        link: '/onepage-landing',
        parentId: 'landing',
      },
    ],
  },
  {
    id: 'setting',
    label: '설정',
    link: '/#',
    icon: <SettingsIcon />,
    subItems: [
      {
        id: 'onepage',
        label: 'One Page',
        link: '/onepage-landing',
        parentId: 'landing',
      },
    ],
  },
];

export { menuData };
