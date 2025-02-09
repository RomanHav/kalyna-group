import React from "react";

interface ProgressLineProps {
    activeId: number
}
const ProgressLine: React.FC<ProgressLineProps> = ({activeId}) => {
    return(
        <div className={`absolute max-lg:-top-6 left-3 md:left-5 lg:left-0 lg:relative flex items-center justify-center lg:justify-end lg:flex-col`}>
            <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
            >
                <div className={'w-2 h-2 rounded-full bg-white'}></div>
            </div>
            <div className={`w-[45px] h-[2px] md:w-[80px] lg:w-[2px] lg:h-[81px] bg-white`}></div>
            <div
                className={`w-4 h-4 rounded-full flex items-center justify-center border-2 border-white`}
            >
                {activeId > 1 ? (
                    <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                    ''
                )}
            </div>
            <div className={'w-[45px] h-[2px] md:w-[80px] lg:w-[2px] lg:h-[81px] bg-white'}></div>
            <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
            >
                {activeId > 2 ? (
                    <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                    ''
                )}
            </div>
            <div className={`w-[45px] h-[2px] md:w-[80px] lg:w-[2px] lg:h-[81px] bg-white`}></div>
            <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
            >
                {activeId > 3 ? (
                    <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                    ''
                )}
            </div>
            <div className={`w-[45px] md:w-[80px] h-[2px] lg:w-[2px] lg:h-[81px] bg-white`}></div>
            <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
            >
                {activeId > 4 ? (
                    <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                    ''
                )}
            </div>
            <div className={`w-[500px] h-[2px] lg:w-[2px] lg:h-[180px] bg-white`}></div>
        </div>
    );
}
export default ProgressLine