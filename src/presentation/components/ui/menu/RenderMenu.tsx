import { MenuItemType } from "./itemsData";
import MenuItem from "./MenuItem";

type Props = {
  menu: MenuItemType[];
};
export default function RenderMenu({ menu }: Props) {
  return (
    <>
      {menu.map((item, index) => (
        <MenuItem
          key={index}
          {...item}
          isFirst={index === 0}
          isLast={index === menu.length - 1}
        />
      ))}
    </>
  );
}
