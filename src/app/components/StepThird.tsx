import React from 'react';

interface StepThird {
    title: string;
    description: string;
}

const StepThird: React.FC<StepThird> = ({ title, description }) => {
    return (
        <div>
            <div className={`flex flex-col`}>
                <h3 className={`text-3xl font-medium mb-2`}>{title}</h3>
                <span className={`mb-6`}>{description}</span>
                <div className={`w-full h-[1px] bg-[#C0FFD8]`}></div>
            </div>
        </div>
    );
};

export default StepThird;