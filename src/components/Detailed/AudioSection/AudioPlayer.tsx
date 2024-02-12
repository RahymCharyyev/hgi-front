'use client';
import { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import { useScopedI18n } from '@/locales/client';
import 'plyr/dist/plyr.css';
import './style.css';

type IProps = {
  selectorId: string;
  audioSource: string;
  poster?: string;
  autoPlay?: boolean;
};

export const AudioPlayer = ({
  selectorId,
  audioSource: audioSource,
  poster,
  autoPlay = false,
}: IProps) => {
  const audio = useRef<HTMLMediaElement | null>(null);
  const player = useRef<Plyr | null>(null);
  const t = useScopedI18n('videoPlayer');

  const plyrOptions: Plyr.Options = {
    ratio: '16:9',
    autopause: true,
    controls: ['rewind', 'play', 'fast-forward', 'progress', 'mute', 'volume'],
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
      settings: `${t('settings')}`,
      menuBack: `${t('menuBack')}`,
      speed: `${t('speed')}`,
      normal: `${t('normal')}`,
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
    audio.current = document.getElementById(selectorId) as HTMLMediaElement;
    if (poster) {
      //@ts-ignore
      audio.current.poster = poster;
    }
    audio.current.src = audioSource;
    player.current = new Plyr(audio.current!, {
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
        width: 'min(250px, 100%)',
      }}
    >
      <audio id={selectorId} />
    </div>
  );
};
