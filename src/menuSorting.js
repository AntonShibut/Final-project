import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const MenuSorting = () => {
    return (
       <div className = 'menu_sorting'>
            <h2><p>Сортировать по:</p></h2>
            <ButtonGroup variant="text" color="black" aria-label="text blacky button group">
                <Button className = 'menu_button'>популярности</Button>
                <Button className = 'menu_button'>алфавиту</Button>
            </ButtonGroup>
       </div>
    )
}

export default MenuSorting
