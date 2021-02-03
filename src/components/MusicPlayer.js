import React from 'react'
import { Media, Player, controls } from 'react-media-player'
const { PlayPause, 
    MuteUnmute,
    CurrentTime,
    SeekBar,
    Duration,
    Volume
} = controls

function MusicPlayer(props) {
    
    return (
        <Media>
            <div className="media">
                <div className="media-player">
                    <Player src={`audio/hello.mp3`} />
                </div>
                <div className="media-controls">
                    <PlayPause className="media-control media-control--play-pause raul" />
                    <CurrentTime className="media-control media-control--current-time raul" />
                    <SeekBar className="media-control media-control--volume-range raul" />
                    <Duration className="media-control media-control--duration raul" />
                    <MuteUnmute className="media-control media-control--mute-unmute raul" />
                    <Volume className="media-control media-control--volume raul" />
                </div>
            </div>
        </Media>
    )
}

export default MusicPlayer