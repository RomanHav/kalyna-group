import css from './StartingLoader.module.css';

const StartingLoader = () => {
  return (
    <div
      className={`${css.loaderContainer} overflow-hidden fixed z-[9998] top-0 left-0 w-full h-screen`}
    >
      <div
        className={`absolute z-[9999] top-0 left-0 w-full h-screen bg-black/60 transition-all`}
      >
        <div
          className={`relative w-full h-screen flex justify-center items-center`}
        >
          <video
            className={`w-[250px] h-[250px] md:w-[350px] md:h-[350px]`}
            autoPlay
            loop
            muted
            playsInline
            preload={'auto'}
          >
            <source
              src={'/starting-loader2.mov'}
              type={'video/mp4; codecs="hvc1"'}
            />
            <source src={'/starting-loader.webm'} type={'video/webm'} />
          </video>
        </div>
      </div>
    </div>
  );
};

export default StartingLoader;
