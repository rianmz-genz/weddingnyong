import { FC, ReactNode } from "react"

const ContainerDashboard:FC<ContainerProps> = ({children}) => {
  return (
    <div className="w-full min-h-screen ">
      <div className="w-10/12 mx-auto h-fit flex max-sm:w-11/12 relative">
        {children}
      </div>
    </div>
  )
}

export default ContainerDashboard
