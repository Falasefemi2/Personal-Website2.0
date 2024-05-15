import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";

interface Props {
  data: {
    name: string;
    href: string;
  }[];
}

export function Navigation({ data }: Props) {
  return (
    <NavigationMenu >
      <NavigationMenuList>
        {data.map((item, index) => (
          <NavigationMenuItem>
            <a href={item.href}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.name}
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}