'use client';
import { useState } from 'react';
import AudioRecords from './AudioRecords';
import DiplomatCard from './DiplomatCard';
import Player from './Player';

const PlayerContent = ({ playList, data }: any) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedDiplomatId, setSelectedDiplomatId] = useState(0);
  const handlePlayPause = (diplomatId: number) => {
    setIsAudioPlaying(!isAudioPlaying);
    setSelectedDiplomatId(diplomatId);
  };
  return (
    <>
      {data.length !== 0 && (
        <>
          <DiplomatCard
            data={data}
            handlePlayPause={handlePlayPause}
            playlist={playList}
            isAudioPlaying={isAudioPlaying}
            selectedDiplomatId={selectedDiplomatId}
          />
          <AudioRecords
            data={data}
            playlist={playList}
            handlePlayPause={handlePlayPause}
            isAudioPlaying={isAudioPlaying}
            selectedDiplomatId={selectedDiplomatId}
          />
          <Player
            playList={playList}
            activeUI={{
              artwork: true,
              playButton: true,
              prevNnext: true,
              repeatType: true,
              trackInfo: false,
              trackTime: true,
              volume: true,
              volumeSlider: true,
              progress: 'bar',
            }}
            rootContainerProps={{
              colorScheme: 'light',
              width: '100%',
            }}
            isAudioPlaying={isAudioPlaying}
            playId={selectedDiplomatId}
          />
        </>
      )}
    </>
  );
};

export default PlayerContent;
