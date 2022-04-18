import React from 'react'
import "./List.css"
import { ArrowForwardIosIcon, ArrowBackIos } from '@mui/icons-material';
import ListItem from './ListItem';

function List() {
    return (
        <div>
            <span className="listTitle">
                Continue to watch
            </span>
            <div className="wrapper">
                <ArrowBackIos />
                <div className="container">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
}

export default List