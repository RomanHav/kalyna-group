import React from 'react';

interface WhyServicePagePartProps {
  id: number;
  title: string;
  description: string;
  number: string;
  src: string;
}

function _renderWhyServiceList({
  id,
  title,
  description,
  number,
  src,
}: WhyServicePagePartProps) {
  switch (id) {
    case 1:
    case 4:
    case 5:
      return (
        <div className="px-5 py-4 w-full h-full flex flex-col justify-end">
          <p className="font-light italic">{description}</p>
        </div>
      );
    default:
      return (
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex justify-between items-center px-5 py-4">
            <h4 className="text-xl font-medium whitespace-pre">{title}</h4>
            <span className="text-4xl font-medium">{number}</span>
          </div>
          <div
            className={`w-full h-[179px] bg-${src} bg-cover bg-center`}
          ></div>
        </div>
      );
  }
}

const WhyServicePagePart: React.FC<WhyServicePagePartProps> = props => {
  return _renderWhyServiceList(props);
};

export default WhyServicePagePart;
