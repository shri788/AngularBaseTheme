export interface Menu {
    name: string;
    icon: string;
    submenu: SubMenu[]
}

export interface SubMenu {
    name: string;
    icon: string;
    parent: string;
}

export const menus: Menu[] = [
    {name: 'First', icon: 'list', submenu: [
        {name: 'Home 1', icon: 'list', parent: 'First'},
        {name: 'Home 1', icon: 'list', parent: 'First'}
    ]},
    {name: 'Second', icon: 'list', submenu: [
        {name: 'Home 1', icon: 'list', parent: 'Second'},
        {name: 'Home 1', icon: 'list', parent: 'Second'}
    ]},
]