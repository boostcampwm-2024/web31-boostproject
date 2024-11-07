import YouTube, { YouTubeProps } from 'react-youtube';

// TODO: 뒤에 props 붙이기 T 없애기 (props이므로)
type TvideoId = {
  videoId: string;
};

export const GuideVideo = ({ videoId }: TvideoId) => {
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
