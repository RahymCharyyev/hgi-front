import React from 'react';
import { VideoPlayer } from './VideoPlayer';
import { Media } from '@/types/topics';

type VideoSectionProps = {
  videos: Media[];
  t: Function;
};

const VideoSection: React.FC<VideoSectionProps> = ({ videos, t }) => (
  <div className='flex flex-col gap-8'>
    {videos.length !== 0 && (
      <h2 className='uppercase text-primary font-bold text-xl'>
        {t('videos')}
      </h2>
    )}
    {videos.map((video, index) => (
      <VideoPlayer
        selectorId={video.filename}
        autoPlay={false}
        videoSource={video.filePath}
        key={index}
      />
    ))}
    <hr />
  </div>
);

export default VideoSection;
