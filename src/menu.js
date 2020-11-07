import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';


const Menu = () => {
    return (
       <div className = 'menu_box'>
            <ButtonGroup variant="text" color="black" aria-label="text blacky button group">
                <Button className = 'menu_button'>Фильмы</Button>
                <Button className = 'menu_button'>Сериалы</Button>
                <Button className = 'menu_button'>Мультфильмы</Button>
                <Button className = 'menu_button'>Новинки</Button>
                <Button className = 'menu_button'>Анонсы</Button>
            </ButtonGroup>
       </div>
    )
}

export default Menu


