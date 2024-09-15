interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center text-white after:content-[''] after:w-10 after:bg-white after:float-right after:h-[2px]">
      <h2 className="uppercase text-[32px]">{title}</h2>
    </div>
  );
};

export default Title;
