const PAGE_ENUMS = {
  MENUS: 'MENUS',
  DESSERT_ARTISTS: 'DESSERT_ARTISTS',
  ORDER_AHEAD: 'ORDER_AHEAD',
};

export const PAGE_INFO_MAP = new Map([
  [PAGE_ENUMS.MENUS, { path: '/menus', label: 'Menus' }],
  [
    PAGE_ENUMS.DESSERT_ARTISTS,
    { path: '/dessert-artists', label: 'Dessert Artists' },
  ],
  [PAGE_ENUMS.ORDER_AHEAD, { path: '/order-ahead', label: 'Order Ahead' }],
]);
