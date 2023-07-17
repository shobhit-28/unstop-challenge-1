import { useEffect } from "react";
import { useState } from "react";

export const Header = () => {

    const getCurrentDimension = () => window.innerWidth

    const [screenWidth, setScreenWidth] = useState(getCurrentDimension());

    useEffect(() => {
        const updateWidth = () => {
            setScreenWidth(getCurrentDimension())
        }
        window.addEventListener('resize', updateWidth);

        return (() => {
            window.removeEventListener('resize', updateWidth);
        })
    }, [screenWidth])

    return (
        <div className="px-5 border-b-2 rounded-b-lg md:px-0">
            {/* top section */}
            <div className="flex justify-between items-center h-[4.375rem] md:h-12 md:px-4">

                {/* left section */}
                <div className="flex items-center">
                    {screenWidth < 900 && <button className="mr-[0.62rem] w-10 h-10 flex justify-center items-center bg-[#F2F8FE] rounded-full">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_0_956)">
                                <path d="M18.75 22.5H3.75V20H18.75V22.5ZM26.25 7.5V10H3.75V7.5H26.25ZM18.75 16.25H3.75V13.75H18.75V16.25Z" fill="#1C4980" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_956">
                                    <rect width="30" height="30" fill="white" transform="matrix(-1 0 0 1 30 0)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>}
                    <p className="text-[#1C4980] text-xl font-semibold leading-7 md:text-base md:leading-[1.4rem] ">Assessment</p>
                    {screenWidth > 900 && <svg className="mx-[0.625rem]" width="2" height="46" viewBox="0 0 2 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0V46" stroke="#DADCE0" />
                    </svg>}
                    <p className="cursor-pointer text-[#0073E6] text-sm font-semibold h-[4.375rem] flex items-center border-b-[3px] border-[#0073E6] md:hidden">My Assessments</p>
                </div>

                {/* right section */}
                <div className="">
                    {screenWidth > 900
                        ?
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="white" />
                            <g clipPath="url(#clip0_0_450)">
                                <path d="M25 9H15C13.9 9 13.01 9.85 13.01 10.95V28.95C13.01 30.05 13.9 31 15 31H25C26.1 31 27 30.05 27 28.95V10.95C27 9.85 26.1 9 25 9ZM25 27H15V13H25V27Z" fill="#1C4980" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_450">
                                    <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                                </clipPath>
                            </defs>
                        </svg>
                        :
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="white" />
                            <g clipPath="url(#clip0_0_958)">
                                <path d="M26.6667 25C27.5833 25 28.325 24.25 28.325 23.3333L28.3333 14.1667C28.3333 13.25 27.5833 12.5 26.6667 12.5H13.3333C12.4167 12.5 11.6667 13.25 11.6667 14.1667V23.3333C11.6667 24.25 12.4167 25 13.3333 25H10C10 25.9167 10.75 26.6667 11.6667 26.6667H28.3333C29.25 26.6667 30 25.9167 30 25H26.6667ZM13.3333 14.1667H26.6667V23.3333H13.3333V14.1667ZM20 25.8333C19.5417 25.8333 19.1667 25.4583 19.1667 25C19.1667 24.5417 19.5417 24.1667 20 24.1667C20.4583 24.1667 20.8333 24.5417 20.8333 25C20.8333 25.4583 20.4583 25.8333 20 25.8333Z" fill="#1C4980" />
                            </g>
                            <defs>
                                <clipPath id="clip0_0_958">
                                    <rect width="20" height="20" fill="white" transform="translate(10 10)" />
                                </clipPath>
                            </defs>
                        </svg>

                    }
                </div>
            </div>

            {/* bottom section */}
            {screenWidth < 900 &&
                <div className="h-12 flex">
                    <p className="cursor-pointer text-[#0073E6] text-sm font-semibold h-12 w-1/2 flex justify-center items-center border-b-[3px] border-[#0073E6]">My Assessments</p>
                    <p className="cursor-pointer text-[#3E6493] text-sm font-semibold h-12 w-1/2 flex justify-center items-center">Unstop Assessments</p>
                </div>
            }
        </div>
    )
}
