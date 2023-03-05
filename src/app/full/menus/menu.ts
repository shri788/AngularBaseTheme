export interface Menu {
    name: string;
    icon: string;
    submenu: SubMenu[]
}

export interface SubMenu {
    name: string;
    icon: string;
    route: string;
    parent: string;
}

export const menus: Menu[] = [
    {name: 'First', icon: 'list', submenu: [
        {name: 'Home', icon: 'list', route: 'dashboard', parent: 'First'},
        {name: 'Home 12', icon: 'list', route: 'test', parent: 'First'}
    ]},
    {name: 'Second', icon: 'list', submenu: [
        {name: 'Home 21', icon: 'list', route: 'test', parent: 'Second'},
        {name: 'Home 22', icon: 'list', route: 'test', parent: 'Second'},
        {name: 'Home 23', icon: 'list', route: 'test', parent: 'Second'}
    ]},
    {name: 'Third', icon: 'list', submenu: [
        {name: 'Welcome Information', icon: 'list', route: 'welcome-info', parent: 'Second'},
        {name: 'Home 32', icon: 'list', route: 'test', parent: 'Second'},
        {name: 'Home 33', icon: 'list', route: 'test', parent: 'Second'},
        {name: 'Home 34', icon: 'list', route: 'test', parent: 'Second'}
    ]},
]