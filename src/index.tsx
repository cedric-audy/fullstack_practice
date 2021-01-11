import ReactDOM from 'react-dom';
import { Menu } from './menu';
import { Game } from './GameFC';
import { Core } from 'cae-storybook/dist/core';
import { Header, SideMenuItemGroup, SideMenu } from 'cae-storybook/dist/widget';
import './index.css';

const sideMenuItemGroups: SideMenuItemGroup[] = [
    {
        key: 1,
        sideMenuItems: [
            {
                key: 1,
                label: "Default tic-tac-toe",
                url: "/",
                onClick: () => { }
            },
            {
                key: 2,
                label: "All primary color tic-tac-toe",
                url: "/primary",
                onClick: () => { }
            }
        ]
    }
];

ReactDOM.render(
<div>
<Core header={<Header appName="React intro"></Header>}
            sideMenu={
                <SideMenu
                    menuTitle="Bonjour,"
                    menuSubTitle="Noob"
                    sideMenuItemGroups={sideMenuItemGroups}
                  //  history={history}
                />
            }>
<Game />
</Core>
<div className={"display"}>
<Menu />
<Game />
</div>
</div>,
document.getElementById('root')
);