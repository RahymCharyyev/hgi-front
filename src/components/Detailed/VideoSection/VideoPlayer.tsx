'use client';
import { useEffect, useRef, useState } from 'react';
import Plyr from 'plyr';
import { useScopedI18n } from '@/locales/client';
import 'plyr/dist/plyr.css';
import './style.css';

type IProps = {
  selectorId: string;
  videoSource: string;
  hlsSource?: string;
  poster?: string;
  autoPlay?: boolean;
};

export const VideoPlayer = ({
  selectorId,
  videoSource,
  poster,
  autoPlay = false,
}: IProps) => {
  const video = useRef<HTMLMediaElement | null>(null);
  const player = useRef<Plyr | null>(null);
  const t = useScopedI18n('videoPlayer');

  const plyrOptions: Plyr.Options = {
    ratio: '16:9',
    autopause: true,
    controls: [
      'play-large',
      'restart',
      'rewind',
      'play',
      'fast-forward',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'captions',
      'settings',
      'pip',
      'airplay',
      'fullscreen',
    ],
    tooltips: { controls: true, seek: true },
    i18n: {
      restart: `${t('restart')}`,
      rewind: `{seektime} ${t('rewind')}`,
      play: `${t('play')}`,
      pause: `${t('pause')}`,
      fastForward: `{seektime} ${t('fastForward')}`,
      seek: `${t('seek')}`,
      seekLabel: `{currentTime}${t('seekLabel')} {duration}`,
      played: `${t('played')}`,
      buffered: `${t('buffered')}`,
      currentTime: `${t('currentTime')}`,
      duration: `${t('duration')}`,
      volume: `${t('volume')}`,
      mute: `${t('mute')}`,
      unmute: `${t('unmute')}`,
      enableCaptions: `${t('enableCaptions')}`,
      disableCaptions: `${t('disableCaptions')}`,
      download: `${t('download')}`,
      enterFullscreen: `${t('enterFullscreen')}`,
      exitFullscreen: `${t('exitFullscreen')}`,
      frameTitle: `${t('frameTitle')} {title}`,
      captions: `${t('captions')}`,
      settings: `${t('settings')}`,
      pip: `${t('pip')}`,
      menuBack: `${t('menuBack')}`,
      speed: `${t('speed')}`,
      normal: `${t('normal')}`,
      quality: `${t('quality')}`,
      loop: `${t('loop')}`,
      start: `${t('start')}`,
      end: `${t('end')}`,
      all: `${t('all')}`,
      reset: `${t('reset')}`,
      disabled: `${t('disabled')}`,
      enabled: `${t('enabled')}`,
      advertisement: `${t('advertisement')}`,
    },
  };

  useEffect(() => {
    video.current = document.getElementById(selectorId) as HTMLMediaElement;
    if (poster) {
      //@ts-ignore
      video.current.poster = poster;
    }
    video.current.src = videoSource;
    player.current = new Plyr(video.current!, {
      ...plyrOptions,
    });

    if (autoPlay) {
      player.current.play();
    }

    return () => {
      player.current?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        width: 'min(800px, 100%)',
      }}
    >
      <video id={selectorId} />
    </div>
  );
};
