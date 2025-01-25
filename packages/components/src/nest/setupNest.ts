import { Container } from "./NestTypes"

export const setupNest = <Containers, ContainerProps = {}>(containers:Record<keyof Containers, Container<ContainerProps>>):[Record<keyof Containers, Container<ContainerProps>>,(keyof Containers)[]] => {
  return [containers, Object.keys(containers) as (keyof Containers)[]]
}
