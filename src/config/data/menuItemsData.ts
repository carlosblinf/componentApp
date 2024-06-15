export type MenuItemType = {
    name: string;
    icon: string;
    component: string;
}

export const animationMenuItems: MenuItemType[] = [
  {
    name: "Animation 101",
    icon: "cube-outline",
    component: "Animation101Screen",
  },
  {
    name: "Animation 102",
    icon: "albums-outline",
    component: "Animation102Screen",
  },
];

export const menuItems: MenuItemType[] = [
  // 01-animationMenuItems
  // 02-menuItems
  {
    name: "Pull to refresh",
    icon: "refresh-outline",
    component: "PullToRefreshScreen",
  },
  {
    name: "Section List",
    icon: "list-outline",
    component: "CustomSectionListScreen",
  },
  {
    name: "Modal",
    icon: "copy-outline",
    component: "ModalScreen",
  },
  {
    name: "InfiniteScroll",
    icon: "download-outline",
    component: "InfiniteScrollScreen",
  },
  {
    name: "Slides",
    icon: "flower-outline",
    component: "SlidesScreen",
  },
  {
    name: "Themes",
    icon: "flask-outline",
    component: "ChangeThemeScreen",
  },

  // 03- uiMenuItems
];
export const uiMenuItems: MenuItemType[] = [
  {
    name: "Switches",
    icon: "toggle-outline",
    component: "SwitchScreen",
  },
  {
    name: "Alerts",
    icon: "alert-circle-outline",
    component: "AlertScreen",
  },
  {
    name: "TextInputs",
    icon: "document-text-outline",
    component: "TextInputScreen",
  },
];
