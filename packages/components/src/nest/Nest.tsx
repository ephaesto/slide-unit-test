import { JSX, PropsWithChildren } from 'react';
import { Container } from './NestTypes';

type NestProps<Props, Containers> = {
  globalProps?: Partial<Props>;
  containers: Containers;
  containersList: (keyof Containers)[];
  children: React.ReactNode;
};
const Nest = <Props, Containers extends Record<string, Container<Props>>>({
  globalProps = {},
  containers,
  containersList,
  children,
}: NestProps<Props, Containers>): JSX.Element => {
  const [ContainerKey, ...copyContainersList] = [...containersList];
  const Container = (props: PropsWithChildren<Partial<Props>>) => (containers[ContainerKey] as Container<Props>)(props);

  if(!ContainerKey || !Container){
    return <>{children}</>
  }
  return (
    <Container {...globalProps}>
      <Nest globalProps={globalProps} containers={containers} containersList={copyContainersList}>
        {children}
      </Nest>
    </Container>
  );
};
export default Nest;
