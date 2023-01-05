// props Homepage
declare interface ContainerContentProps{
    children: ReactNode
}
declare interface ContainerProps{
    children: ReactNode
}
declare interface NavItemProps{
    show: boolean
    children: ReactNode
}
declare interface NavLinkProps{
    children: ReactNode
    target: string
}
declare interface SectionDesignProps{
    title: string
    description: string
}
declare interface SectionFeatureProps{
    title: string
    description: string
    titleCreateInvitations: string
    descriptionCreateInvitations: string
  }
declare interface SectionHomeProps{
    title: string
    description: string
    titleWhy: string
    descriptionWhy: string
  }

//   content Datas 

declare interface feature{
    logo?: string
    label: string
    description: string
}
declare interface design{
    image: string
    name: string
}
declare interface contentData{
    features: feature[]
    featureItems: feature[]
    stepCreateInvitations: feature[]
    design: design[]
}