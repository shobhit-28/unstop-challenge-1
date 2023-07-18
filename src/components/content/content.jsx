import { MyAssessment } from "../myAssessment/myAssessment"
import { Overview } from "../overview/overview"

export const Content = () => {
  return (
    <div className="p-5">
        <Overview />
        <MyAssessment />
    </div>
  )
}
