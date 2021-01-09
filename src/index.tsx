import ReactDOM from 'react-dom';
import { Menu } from './menu'
import { Game } from './GameFC'
import './index.css';


ReactDOM.render(
<div className={"display"}>
<Menu />
<Game />
</div>,
document.getElementById('root')
);