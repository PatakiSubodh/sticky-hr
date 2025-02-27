import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const components = [
    {
        title: "User Management",
        href: "/docs/primitives/alert-dialog",
        bgHover: "hover:bg-blue-100",
    },
    {
        title: "Expense Management",
        href: "/docs/primitives/tabs",
        bgHover: "hover:bg-purple-100",
    },
    {
        title: "Attendance Management",
        href: "/docs/primitives/hover-card",
        bgHover: "hover:bg-green-100",
    },
    {
        title: "Assets Management",
        href: "/docs/primitives/tooltip",
        bgHover: "hover:bg-pink-100",
    },
    {
        title: "Leave Management",
        href: "/docs/primitives/progress",
        bgHover: "hover:bg-red-100",
    },
    {
        title: "Document Management",
        href: "/docs/primitives/tooltip",
        bgHover: "hover:bg-indigo-100",
    },
    {
        title: "Payroll Management",
        href: "/docs/primitives/scroll-area",
        bgHover: "hover:bg-yellow-100",
    },
];


export default function Navoptions() {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Button variant="link" className='text-base' >Home</Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                                className={component.bgHover}
                                >
                                </ListItem>
                            ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                                className={component.bgHover}
                                >
                                {component.description}
                                </ListItem>
                            ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Button variant="link" className='text-base'>Customers</Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Button variant="link" className='text-base'>Pricing</Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Button variant="link" className='text-base'>Our Story</Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Button variant="link" className='text-base'>Careers</Button>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
            <a
                ref={ref}
                className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
                )}
                {...props}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
                </p>
            </a>
            </NavigationMenuLink>
        </li>
    );
});

ListItem.displayName = "ListItem";