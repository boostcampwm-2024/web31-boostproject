import { useEffect, useRef, useState } from 'react';

export const Banner = () => {
  return (
    <div className="relative flex h-[30rem] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-blue-500 to-green-500">
      <BackgroundGraphic />
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <div className="mt-12 flex flex-col items-center gap-3">
          <h2
            className="text-center text-lg font-normal text-white opacity-0"
            style={{
              animation: 'fadeIn 1s ease-out forwards',
            }}
          >
            블록으로 시작하는 웹 개발 첫 걸음
          </h2>
          <h1
            className="text-center text-5xl font-bold leading-[1.33] text-white opacity-0"
            style={{
              animation: '1s fadeIn .4s ease-out forwards',
            }}
          >
            BooLock과 함께하는
            <br /> 정적 웹 개발 학습하기
          </h1>
        </div>
      </div>
    </div>
  );
};
const BackgroundGraphic = () => {
  const [rotation, setRotation] = useState({ x: 70, y: 0 });
  const targetRotation = useRef({ x: 70, y: 0 });
  const animationFrame = useRef<number>();

  const lerp = (start: number, end: number, factor: number): number =>
    start + (end - start) * factor;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const rotateY = (clientX / innerWidth - 0.5) * 20;
      const rotateX = 70 + (clientY / innerHeight - 0.5) * 10;

      targetRotation.current = { x: rotateX, y: rotateY };
    };

    const animate = () => {
      setRotation((prev) => ({
        x: lerp(prev.x, targetRotation.current.x, 0.05),
        y: lerp(prev.y, targetRotation.current.y, 0.05),
      }));
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame.current!);
    };
  }, []);

  return (
    <div
      className="relative flex h-full w-[1200px] items-center justify-center opacity-0"
      style={{ perspective: '2000px', animation: '1s fadeInBlock .8s ease-out forwards' }}
    >
      <div
        className="preserve-3d relative top-0 h-[1200px] w-[2000px] transform-gpu"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${68}deg) rotateZ(${rotation.y / 2}deg) translateY(${-500}px)`,
        }}
      >
        <div
          className={`relative h-[600px] w-[800px] bg-gradient-to-tl from-blue-500 to-blue-900`}
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateX(${200}px) translateY(${845}px)  scale(${1}) `,
          }}
        >
          <div
            className={`absolute h-[200px] w-[1200px] bg-gradient-to-b from-blue-100/50 to-yellow-200/0`}
            style={{
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
              transformStyle: 'preserve-3d',
              transform: `rotateX(160deg) translateX(${-200}px) translateY(${170}px) translateZ(${10}px) scale(${1.1})`,
            }}
          ></div>

          <div
            className={`absolute h-[200px] w-[1200px] bg-gradient-to-b from-yellow-200/90 to-yellow-200/0`}
            style={{
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
              transformStyle: 'preserve-3d',
              transform: `rotateX(60deg) translateX(${-200}px) translateY(${400}px) translateZ(${-480}px) scale(${1})`,
            }}
          ></div>
          <div
            className={`absolute h-[200px] w-[1200px] bg-gradient-to-b from-blue-100/40 to-yellow-200/0`}
            style={{
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
              transformStyle: 'preserve-3d',
              transform: `rotateX(60deg) translateX(${-200}px) translateY(${420}px) translateZ(${-480}px) scale(${1})`,
            }}
          ></div>
          <div
            className="absolute left-[58px] top-36 h-[240px] w-[500px] rounded-lg bg-blue-500/20"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${70}px) scale(${1})`,
            }}
          ></div>
          <div
            className="absolute left-20 top-40 h-[200px] w-[220px] rounded-lg bg-blue-500/90"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${90}px) scale(${1})`,
            }}
          ></div>
          <div
            className="absolute left-80 top-40 h-[200px] w-[220px] rounded-lg bg-blue-500/60"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${90}px) scale(${1})`,
            }}
          ></div>
          <div
            className="absolute right-12 top-20 h-[320px] w-[120px] rounded-lg bg-blue-500/50"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${60}px) scale(${1})`,
            }}
          >
            <div
              className="absolute left-2 top-4 h-[44px] w-[100px] rounded-lg bg-blue-500/80"
              style={{
                transformStyle: 'preserve-3d',
                transform: `translateZ(${6}px) scale(${1})`,
              }}
            ></div>
            <div
              className="absolute left-2 top-20 h-[44px] w-[100px] rounded-lg bg-blue-500/80"
              style={{
                transformStyle: 'preserve-3d',
                transform: `translateZ(${6}px) scale(${1})`,
              }}
            ></div>
            <div
              className="absolute left-2 top-36 h-[44px] w-[100px] rounded-lg bg-blue-500/80"
              style={{
                transformStyle: 'preserve-3d',
                transform: `translateZ(${6}px) scale(${1})`,
              }}
            ></div>
          </div>
          <div
            className="absolute bottom-4 right-12 h-[48px] w-[80px] rounded-lg bg-blue-500/90"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${60}px) scale(${1})`,
            }}
          ></div>

          <div
            className="absolute bottom-4 right-36 h-[48px] w-[80px] rounded-lg bg-blue-500/50"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${60}px) scale(${1})`,
            }}
          ></div>
          <div
            className="absolute bottom-4 left-[80px] h-[200px] w-[120px] rounded-lg bg-blue-500/50"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${40}px) scale(${1})`,
            }}
          ></div>
          <div
            className="absolute bottom-4 left-[220px] h-[200px] w-[120px] rounded-lg bg-blue-500/20"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${40}px) scale(${1})`,
            }}
          ></div>
          <div
            className="absolute bottom-4 left-[360px] h-[200px] w-[120px] rounded-lg bg-blue-500/50"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${40}px) scale(${1})`,
            }}
          ></div>
        </div>
        <Block
          x={0}
          y={200}
          z={0}
          rotateZ={50}
          scale={1}
          firstColor={'bg-gradient-to-t from-green-500 to-yellow-200'}
          secondColor={'bg-gradient-to-r from-green-500 to-green-900'}
          thirdColor={'bg-green-300'}
        />
        <Block
          x={1150}
          y={100}
          z={0}
          rotateZ={-12}
          firstColor={'bg-gradient-to-b from-blue-500 to-yellow-200 '}
          secondColor={' bg-gradient-to-r from-blue-300 to-blue-900 '}
          thirdColor={'bg-blue-300'}
          scale={1.4}
        />

        <Block
          x={100}
          y={400}
          z={0}
          rotateZ={16}
          scale={1.3}
          firstColor={'bg-gradient-to-t from-red-500 to-yellow-200'}
          secondColor={'bg-gradient-to-r from-red-500 to-red-900'}
          thirdColor={'bg-red-300'}
        />
        <Block
          x={1240}
          y={200}
          z={0}
          rotateZ={-60}
          firstColor={'bg-gradient-to-t from-green-500 to-yellow-200 '}
          secondColor={' bg-gradient-to-r from-green-300 to-green-900 '}
          thirdColor={'bg-green-300'}
          scale={1.5}
        />
      </div>
    </div>
  );
};

type BlockProps = {
  x: number;
  y: number;
  z: number;
  rotateZ?: number;
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  scale?: number;
};

const Block = ({
  x,
  y,
  z,
  rotateZ = 0,
  scale = 1,
  firstColor,
  secondColor,
  thirdColor,
}: BlockProps) => {
  return (
    <div
      className={`${firstColor} relative h-[240px] w-[100px]`}
      style={{
        transformStyle: 'preserve-3d',
        transform: ` translateX(${x}px) rotateZ(${rotateZ}deg) translateY(${y}px) translateZ(${z}px) scale(${scale})`,
      }}
    >
      <Box
        x={0}
        y={48}
        z={18}
        firstColor={firstColor}
        secondColor={secondColor}
        thirdColor={thirdColor}
      />
      <Box
        x={0}
        y={-48}
        z={18}
        firstColor={firstColor}
        secondColor={secondColor}
        thirdColor={thirdColor}
      />
      <div
        className={`${firstColor} absolute left-0 right-0 h-[240px] w-[80px]`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-90deg) translateX(40px) translateZ(40px)',
        }}
      />
      <div
        className={`${firstColor} absolute left-0 right-0 h-[240px] w-[80px]`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-90deg) translateX(40px) translateZ(-59px)', // Z -60이 맞는데 사이에 살짝 빈 공간이 보여서 1px 더 움직임
        }}
      />
      <div
        className={`${secondColor} absolute left-0 right-0 h-[80px] w-[100px]`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(90deg) translateY(40px) translateZ(-200px)',
        }}
      />
      <div
        className={`${thirdColor} absolute right-0 top-0 h-[240px] w-[100px]`}
        style={{
          transform: 'translateZ(80px)',
        }}
      />
    </div>
  );
};

const Box = ({ x, y, z, firstColor, secondColor, thirdColor }: BlockProps) => {
  return (
    <div
      className={`${firstColor} absolute h-[240px] w-[100px]`}
      style={{
        transformStyle: 'preserve-3d',
        transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px) scaleX(.24) scaleY(.18)`,
      }}
    >
      <div
        className={`${firstColor} absolute left-0 right-0 h-[240px] w-[80px]`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-90deg) translateX(40px) translateZ(40px)',
        }}
      />
      <div
        className={`${firstColor} absolute left-0 right-0 h-[240px] w-[80px]`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-90deg) translateX(40px) translateZ(-60px)',
        }}
      />
      <div
        className={`${secondColor} absolute left-0 right-0 h-[80px] w-[100px]`}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(90deg) translateY(40px) translateZ(-200px)',
        }}
      />
      <div
        className={`${thirdColor} absolute right-0 top-0 h-[240px] w-[100px]`}
        style={{
          transform: 'translateZ(80px)',
        }}
      />
    </div>
  );
};

export default Banner;
