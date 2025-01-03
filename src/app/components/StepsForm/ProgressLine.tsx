import React from "react";

interface ProgressLineProps {
    activeId: number
}
const ProgressLine: React.FC<ProgressLineProps> = ({activeId}) => {
    return(
        <div className={`flex items-center justify-end flex-col`}>
            <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
            >
                <div className={'w-2 h-2 rounded-full bg-white'}></div>
            </div>
            <div className={`w-[2px] h-[81px] bg-white`}></div>
            <div
                className={`w-4 h-4 rounded-full flex items-center justify-center border-2 border-white`}
            >
                {activeId > 1 ? (
                    <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                    ''
                )}
            </div>
            <div className={'w-[2px] h-[81px] bg-white'}></div>
            <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
            >
                {activeId > 2 ? (
                    <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                    ''
                )}
            </div>
            <div className={`w-[2px] h-[81px] bg-white`}></div>
            <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
            >
                {activeId > 3 ? (
                    <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                    ''
                )}
            </div>
            <div className={`w-[2px] h-[81px] bg-white`}></div>
            <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
            >
                {activeId > 4 ? (
                    <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                    ''
                )}
            </div>
            <div className={`w-[2px] h-[174px] bg-white`}></div>
        </div>
    );
}
export default ProgressLine