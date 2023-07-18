/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const StateHandlerContext = createContext();

export const StateHandler = ({ children }) => {
    const getCurrentDimension = () => window.innerWidth

    const [screenWidth, setScreenWidth] = useState(getCurrentDimension());
    const [isSideBarOpen, setIsSideBarOpen] = useState(screenWidth > 900);
    const [isAddAssessmentFormOpen, setIsAddAssessmentFormOpen] = useState(false)
    const [isOverViewOpen, setIsOverViewOpen] = useState(screenWidth > 900)

    useEffect(() => {
        const updateWidth = () => {
            setScreenWidth(getCurrentDimension())
        }
        window.addEventListener('resize', updateWidth);

        setIsSideBarOpen(screenWidth > 900)
        setIsOverViewOpen(screenWidth > 900)

        return (() => {
            window.removeEventListener('resize', updateWidth);
        })
    }, [screenWidth])

    return (
        <StateHandlerContext.Provider value={{
            isSideBarOpen,
            setIsSideBarOpen,
            screenWidth,
            isAddAssessmentFormOpen,
            setIsAddAssessmentFormOpen,
            isOverViewOpen,
            setIsOverViewOpen,
        }}>
            {children}
        </StateHandlerContext.Provider>
    )
}