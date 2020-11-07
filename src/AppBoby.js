import React from "react";
import Menu from './menu';
import MenuSorting from './menuSorting';
import Movie from './AppFilmsPopular';
import TvShow from './AppTvShow' 



export default function AppBody() {
            

    return (<div className='App_body'>
                <Menu />      
                <TvShow />
                <Movie /> 
                <MenuSorting />
              
    </div>
    );
}
