import React from 'react';
import { Player } from '@lottie-files/react-lottie-player';

interface LottieAnimationProps {
  src: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  speed?: number;
  style?: React.CSSProperties;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  src,
  className = '',
  autoplay = true,
  loop = true,
  speed = 1,
  style = {}
}) => {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={src}
      speed={speed}
      style={{ width: '100%', height: '100%', ...style }}
      className={className}
    />
  );
};

export default LottieAnimation;