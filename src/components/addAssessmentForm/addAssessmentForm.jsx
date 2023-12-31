import { useContext, useEffect, useRef } from "react"
import { StateHandlerContext } from "../../context/stateHandlerContext"
import { skillsData } from "../../data/data"
import classNames from "classnames"

export const AddAssessmentForm = () => {
    const { isAddAssessmentFormOpen, setIsAddAssessmentFormOpen, screenWidth } = useContext(StateHandlerContext)

    const formRef = useRef()

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!formRef?.current?.contains(e?.target)) {
                setIsAddAssessmentFormOpen(false)
            }
        }
        document.addEventListener("mousedown", handleOutsideClick, true)
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        // form-container
        <div className={classNames("w-screen fixed z-40 top-0 bg-black/50 text-[#1C4980] flex justify-center items-center duration-700", {
            'h-0': !isAddAssessmentFormOpen,
            'h-screen': isAddAssessmentFormOpen,
        })}
        >

            {/* form */}
            <div className={classNames("w-[36.9375rem] bg-white rounded-lg border border-[#DADCE0] max-h-screen overflow-auto fixed bottom-0",
                "md:w-[23.4375rem] md:h-5/6",
                "sm:w-screen sm:h-4/6",
                {
                    '-mb-[500%] duration-[2s]': !isAddAssessmentFormOpen,
                    'mb-[0]  duration-[.8s]': isAddAssessmentFormOpen,
                })} ref={formRef}>

                <div className="
                flex justify-between items-center p-[1.875rem] border-b border-[#DADCE0]
                md:p-4
                ">
                    <p className="text-xl font-semibold md:text-sm">{screenWidth <= 900 ? 'Sub-Section Details' : 'Create new Assessment'}</p>
                    <button onClick={() => setIsAddAssessmentFormOpen(false)}>
                        {screenWidth <= 900
                            ?
                            <div className="w-10 h-10 flex justify-center items-center bg-[#FBEBEA] rounded-full">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.6967 22.071L15 16.7677L20.3033 22.071L22.0711 20.3033L16.7678 15L22.0711 9.69668L20.3033 7.92891L15 13.2322L9.6967 7.92891L7.92893 9.69668L13.2322 15L7.92893 20.3033L9.6967 22.071Z" fill="#D63500" />
                                </svg>
                            </div>
                            :
                            <svg className="bg-" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.3033 22.071L15 16.7677L9.6967 22.071L7.92893 20.3033L13.2322 15L7.92893 9.69668L9.6967 7.92891L15 13.2322L20.3033 7.92891L22.0711 9.69668L16.7678 15L22.0711 20.3033L20.3033 22.071Z" fill="#323232" />
                            </svg>}
                    </button>
                </div>


                <div className="py-5 px-[1.875rem] flex flex-col gap-5 items-start md:p-4">

                    <div className="w-full flex flex-col gap-[.625rem]">
                        <p className="text-base font-medium md:text-xs">Name of Assessment</p>
                        <input disabled type="text" name="" id="" className="p-[0.9375rem] border border-[#DADCE0] rounded-lg w-full bg-white text-sm font-medium md:text-xs md:text-[#8DA4BF]" value={'Type Here'} />
                    </div>

                    <div className="w-full flex flex-col gap-[.625rem]">
                        <p className="text-base font-medium md:text-xs">Purpose of test is</p>
                        <div className="p-[0.9375rem] border border-[#DADCE0] rounded-lg w-full bg-white text-sm font-medium flex justify-between items-center md:text-xs md:text-[#8DA4BF]">
                            <p className="">Select</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_1682)">
                                    <path d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="#1C4980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1682">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-[.625rem]">
                        <p className="text-base font-medium md:text-xs">Description</p>
                        <div className="p-[0.9375rem] border border-[#DADCE0] rounded-lg w-full bg-white text-sm font-medium flex justify-between items-center md:text-xs md:text-[#8DA4BF]">
                            <p className="">Select</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_1682)">
                                    <path d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="#1C4980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1682">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-[.625rem]">
                        <p className="text-base font-medium md:text-xs">Skills</p>
                        <div className="border border-[#DADCE0] rounded-lg w-full bg-white text-sm font-medium">

                            <div className="flex flex-wrap gap-[.625rem] p-4 border-b">

                                {skillsData.map((skill, index) => (
                                    <p key={index} className="flex items-center gap-[.125rem] bg-[#DDEDFF] rounded-3xl py-[.375rem] pr-2 pl-[.625rem] md:text-xs">{skill}
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_0_1698)">
                                                <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#1C4980" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_0_1698">
                                                    <rect width="18" height="18" rx="9" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </p>
                                ))}

                            </div>

                            <input disabled type="text" name="" id="" className="p-[0.9375rem] rounded-lg w-full bg-white text-sm font-medium md:text-xs md:text-[#8DA4BF]" value={'Type Here'} />
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-[.625rem] mb-20 md:text-xs">
                        <p className="text-base font-medium">Duration of Assessment</p>
                        <input disabled type="text" name="" id="" className="p-[0.9375rem] border border-[#DADCE0] rounded-lg w-full bg-white text-sm font-medium text-[#8DA4BF] md:text-xs" value={'HH:MM:SS'} />
                    </div>

                </div>

                <div className={classNames("py-5 px-[1.875rem] shadow-[0_-4px_50px_0px_rgba(0,0,0,0.09)] fixed bottom-0 bg-white w-[36.9375rem]",
                    'md:w-[23.4375rem]',
                    'sm:w-screen',
                    {
                        '-mb-[200%] duration-[2s]': !isAddAssessmentFormOpen,
                        'mb-[0] duration-[.8s]': isAddAssessmentFormOpen,
                    })}>
                    <button className="w-full py-[.625rem] px-[1.875rem] bg-[#0073E6] text-white text-sm font-semibold rounded-lg outline-none">Save</button>
                </div>


            </div>

        </div>
    )
}
