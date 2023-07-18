import { useContext } from "react"

import { StateHandlerContext } from "../../context/stateHandlerContext"

import { AssessmentCard } from "../assessmentCard/assessmentCard"
import classNames from "classnames"

export const MyAssessment = () => {
    const { setIsAddAssessmentFormOpen, screenWidth, isOverViewOpen, setIsOverViewOpen } = useContext(StateHandlerContext)

    return (
        <div className={classNames("mt-6 text-[#1C4980] md:mt-0", {
        })}>
            <div className="flex items-center justify-between">
                <p className="text-lg mb-4 font-medium">My Assessment</p>
                {screenWidth <= 900 &&
                    <div className="flex">

                        <div className="w-10 h-10 p-1">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_1035)">
                                    <path d="M14.2083 12.8333H13.4842L13.2275 12.5858C14.1258 11.5408 14.6667 10.1842 14.6667 8.70833C14.6667 5.4175 11.9992 2.75 8.70833 2.75C5.4175 2.75 2.75 5.4175 2.75 8.70833C2.75 11.9992 5.4175 14.6667 8.70833 14.6667C10.1842 14.6667 11.5408 14.1258 12.5858 13.2275L12.8333 13.4842V14.2083L17.4167 18.7825L18.7825 17.4167L14.2083 12.8333ZM8.70833 12.8333C6.42583 12.8333 4.58333 10.9908 4.58333 8.70833C4.58333 6.42583 6.42583 4.58333 8.70833 4.58333C10.9908 4.58333 12.8333 6.42583 12.8333 8.70833C12.8333 10.9908 10.9908 12.8333 8.70833 12.8333Z" fill="#1C4980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1035">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className="w-10 h-10 p-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_1037)">
                                    <path d="M4.25 5.66C4.35 5.79 9.99 12.99 9.99 12.99V19C9.99 19.55 10.44 20 11 20H13.01C13.56 20 14.02 19.55 14.02 19V12.98C14.02 12.98 19.51 5.96 19.77 5.64C20.03 5.32 20 5 20 5C20 4.45 19.55 4 18.99 4H5.01C4.4 4 4 4.48 4 5C4 5.2 4.06 5.44 4.25 5.66Z" fill="#1C4980" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_1037">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className="w-10 h-10 p-1 cursor-pointer" onClick={() => setIsOverViewOpen(!isOverViewOpen)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 18V7H6V18H2ZM8 18V2H12V18H8ZM14 18V11H18V18H14Z" fill="#0073E6" />
                            </svg>
                        </div>

                    </div>
                }
            </div>
            <div className="flex gap-[1.875rem] xl:flex-col">

                {/* new assessment */}
                <button onClick={() => setIsAddAssessmentFormOpen(true)} className="flex flex-col gap-3 justify-center grow items-center border border-dashed border-[#DADCE0] rounded-xl bg-[#f6f8fa] xl:py-[1.875rem] outline-none">

                    <div className="flex flex-col justify-center items-center gap-[0.625rem]">
                        <div className="h-[4.375rem] w-[4.375rem] p-[0.625rem] flex justify-center items-center rounded-full bg-white">
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_0_553)">
                                    <path d="M31.6667 22.1667H21.6667V32.1667H18.3334V22.1667H8.33337V18.8333H18.3334V8.83334H21.6667V18.8333H31.6667V22.1667Z" fill="#0073E6" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_553">
                                        <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p className="text-lg font-medium lg:text-base">New Assessment</p>
                    </div>

                    <p className="text-center text-xs font-medium">
                        From here you can add questions Of multiple types like <br /> MCQs, subjective (text or paragraph)!
                    </p>
                </button>

                <div className="flex gap-[1.875rem] md:flex-col">
                    <AssessmentCard num={0} />
                    <AssessmentCard num={324} />
                </div>

            </div>
        </div>
    )
}
