export type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    label: "Blog",
    href: "blog",
  },
  {
    label: "Posts",
    href: "posts",
  },
  {
    label: "Profile",
    href: "profile",
  },
];
