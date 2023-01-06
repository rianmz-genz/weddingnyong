import { FC, ReactNode } from "react"

const Container:FC<ContainerProps> = ({children}) => {
  return (
    <div className="w-full min-h-screen ">
      <div className="w-10/12 mx-auto h-fit flex">
        {children}
      </div>
    </div>
  )
}

export default Container
