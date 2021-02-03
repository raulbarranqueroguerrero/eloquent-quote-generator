import React from 'react'
import { Media, Player, controls } from 'react-media-player'
const { PlayPause, 
    MuteUnmute,
    CurrentTime,
    SeekBar,
    Duration,
    Volume
} = controls

function MusicPlayer() {
    
    return (
        <Media>
            <div className="media">
                <div className="media-player">
                    <Player src={`audio/hello.mp3`} />
                </div>
                    <div className="media-control">
                        <PlayPause className="play-pause" />
                        <CurrentTime className="current-time-button media-control media-control-current-time raul" />
                        <SeekBar className="media-control media-control--volume-range " />
                        <Duration className="media-control media-control--duration " />
                        <MuteUnmute className="media-control media-control--mute-unmute " />
                        <Volume className="media-control media-control--volume" />
                    </div>
                </div>
        </Media>
    )
}

export default MusicPlayer