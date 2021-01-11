import ReactDOM from 'react-dom';
import { Menu } from './menu';
import { Game } from './GameFC';
import { Core } from 'cae-storybook/dist/core';
import { Header, SideMenuItemGroup, SideMenu } from 'cae-storybook/dist/widget';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
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

    <Router>
        <Route path="/aaa">
            <Home />
        </Route>
        <Route path='/bbb'>
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
                    <Switch>
                    </Switch>
                </div>
            </div>

        </Route>
    </Router>,
    document.getElementById('root')
);

function Home() {
    return <h2>AAAAAAAAAAAAAAAAAAA</h2>;
}