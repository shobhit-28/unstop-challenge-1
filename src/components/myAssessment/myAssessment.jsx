import { AssessmentCard } from "../assessmentCard/assessmentCard"

export const MyAssessment = () => {
    return (
        <div className="mt-6 text-[#1C4980]">
            <p className="text-lg mb-4 font-medium">My Assessment</p>
            <div className="flex gap-[1.875rem] xl:flex-col">

                {/* new assessment */}
                <div className="flex flex-col gap-3 justify-center grow items-center border border-dashed border-[#DADCE0] rounded-xl bg-[#f6f8fa] cursor-pointer xl:py-[1.875rem]">

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

                </div>

                <div className="flex gap-[1.875rem] md:flex-col">
                    <AssessmentCard num={0} />
                    <AssessmentCard num={324} />
                </div>

            </div>
        </div>
    )
}
