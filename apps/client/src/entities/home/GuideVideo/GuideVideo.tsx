import YouTube, { YouTubeProps } from 'react-youtube';

type GuideVideoProps = {
  videoId: string;
};

export const GuideVideo = ({ videoId }: GuideVideoProps) => {
  const opts: YouTubeProps['opts'] = {
    width: '360',
    height: '233',
    playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 0,
    },
  };

  return (
    <article className="overflow-hidden rounded-xl shadow-lg shadow-gray-500">
      <YouTube videoId={videoId} opts={opts} />
    </article>
  );
};
