interface TitleProps {
  title: string;
  id?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, id, className }) => {
    return (
      <div
        className={
          `flex justify-between items-center text-white after:content-[''] after:w-10 after:md:w-40 after:bg-white after:float-right after:h-[2px] ${className}`
        }
      >
        <h2
          id={id ? id : undefined}
          className="uppercase max-w-52 md:max-w-fit text-[32px] md:text-[48px]"
        >
          {title}
        </h2>
      </div>
    );
};

export default Title;
