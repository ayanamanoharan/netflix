import React from "react";
import "./ListItem.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Add } from "@mui/icons-material";
import { imgUrl } from "../constants/constant";


function ListItem({ movie, smallCard }) {

    return (
        <div className={smallCard ? 'listItem small' : "listItem"} style={{ background: `url(${imgUrl + movie.backdrop_path})`, backgroundSize: 'cover' }}>
            <div className="icon-group">
                {movie.title}
                <div className="icons">
                    <PlayArrowIcon className="icon" />
                    <Add className="icon" />
                </div>
            </div>
        </div >
    )
}

export default ListItem