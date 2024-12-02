export const Banner = () => {
  return (
    <div className="bg-gray-black relative h-[28rem] w-full">
      <BackgroundGraphic />
      <div className="absolute top-0 flex w-full flex-col items-center justify-center overflow-hidden pt-24">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-center text-lg font-normal text-white">
            블록으로 시작하는 웹 개발 첫 걸음
          </h2>
          <h1 className="text-center text-5xl font-semibold leading-[1.33] text-white">
            Build Your Own Website
            <br />
            With BooLock
          </h1>
        </div>
      </div>
    </div>
  );
};

const BackgroundGraphic = () => {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{ perspective: '2000px' }}
    >
      <div
        className="preserve-3d relative top-0 h-[2000px] w-[2000px] transform-gpu bg-red-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(70deg)',
        }}
      >
        <Block x={30} y={800} z={-600} />
      </div>
    </div>
  );
};

const Block = ({ x, y, z }: { x: number; y: number; z: number }) => {
  return (
    <div
      className="relative h-[800px] w-[200px] bg-yellow-400"
      style={{
        transformStyle: 'preserve-3d',
        transform: `rotateY(-90deg) translateX(${x}px) translateY(${y}px) translateZ(${z}px)`,
      }}
    >
      <div
        className="absolute left-0 right-0 h-[800px] w-[200px] bg-red-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-90deg) translateX(20px) translateZ(-100px)',
        }}
      >
        <div
          className="absolute right-0 top-0 h-[40px] w-[80px] bg-blue-500"
          style={{
            transform: 'rotateZ(-90deg) rotateY(-90deg) translateZ(100px) translateX(-60px)',
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
