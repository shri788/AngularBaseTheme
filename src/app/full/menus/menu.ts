export interface Menu {
    name: string;
    icon: string;
    submenu: SubMenu[]
}

export interface SubMenu {
    name: string;
    route: string;
    parent: string;
}

export const menus: Menu[] = [
    {name: 'First', icon: 'list', submenu: [
        {name: 'Home', route: 'dashboard', parent: 'First'},
        {name: 'Home 12', route: 'test', parent: 'First'}
    ]},
    {name: 'Second', icon: 'list', submenu: [
        {name: 'Home 21', route: 'test', parent: 'Second'},
        {name: 'Home 22', route: 'test', parent: 'Second'},
        {name: 'Home 23', route: 'test', parent: 'Second'}
    ]},
    {name: 'Third', icon: 'list', submenu: [
        {name: 'Welcome Information', route: 'welcome-info', parent: 'Second'},
        {name: 'Home 32', route: 'test', parent: 'Second'},
        {name: 'Home 33', route: 'test', parent: 'Second'},
        {name: 'Home 34', route: 'test', parent: 'Second'}
    ]},
]