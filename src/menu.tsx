import { FC } from 'react';
import { Button } from '@material-ui/core';

interface menuProps {

}

interface menuState {

}

export const Menu: FC<menuProps> = () => {
  
    const theme =  {
        spacing:1,
    }
    return (
        <div className="menu">
        <Button variant="contained">
                aaaaa
        </Button>
        <Button variant="contained">
                sfsdfsdf
        </Button>
        </div>
    );
}