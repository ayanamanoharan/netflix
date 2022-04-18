import React from 'react'
import "./Banner.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

function banner() {
    return (
        <div className='image'>
            <div className='bgdark'>
                <div className="left">
                    <h1>Marvel Daredevil</h1>
                    <h2 className="sub-heading">
                        from 2018-22
                    </h2>
                    <p className="para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis sit,
                        atque doloremque doloribus exercitationem ex beatae, dolores dolore quis rerum laudantium.
                        Delectus corrupti cum repellendus provident nobis! Ad optio totam molestiae sed labore molestias
                        natus quaerat suscipit minus obcaecati voluptate sint beatae quisquam nam reprehenderit saepe consequatur
                        temporibus dignissimos tempore quidem sequi, consectetur nostrum maiores! Perferendis officia magnam placeat.
                    </p>
                    <div className="btn-group">
                        <button className='btn active'><PlayArrowIcon className="icon" /> Play</button>
                        <button className='btn'><AddIcon /> Add to playList</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default banner