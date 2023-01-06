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
  declare interface SectionPriceProps extends SectionDesignProps{}
  declare interface SectionTestimonialsProps extends SectionDesignProps{}
  declare interface FooterProps{
    copyright: string
    description: string
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
    tier: string
}
declare interface benefitItem{
    benefit: string
}
declare interface prices{
    tier: string
    price: number
    benefits: benefitItem[]
}
declare interface testimonials{
    username: string
    coverinvitation: string
    profileuser: string
    commentuser: string
    invitationname: string
}
declare interface contentData{
    features: feature[]
    featureItems: feature[]
    stepCreateInvitations: feature[]
    designs: design[]
    prices: prices[]
    testimonials: testimonials[]
}