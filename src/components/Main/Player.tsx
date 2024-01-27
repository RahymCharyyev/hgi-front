'use client';
import dynamic from 'next/dynamic';
import { RMAudioPlayerProps } from 'react-modern-audio-player';
const AudioPlayer = dynamic(() => import('react-modern-audio-player'), {
  ssr: false,
});

const Player = ({
  playList,
  rootContainerProps,
  isAudioPlaying,
  playId,
  activeUI,
}: any & RMAudioPlayerProps) => {
  return (
    <>
      <div className='player-container'>
        <AudioPlayer
          playList={playList}
          activeUI={activeUI}
          placement={{
            player: 'bottom-left',
            playList: 'top',
          }}
          rootContainerProps={rootContainerProps}
          audioInitialState={{
            isPlaying: isAudioPlaying,
            curPlayId: playId,
          }}
        />
      </div>
    </>
  );
};

export default Player;
