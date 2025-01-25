import { PropsWithChildren } from "react";

export type Container<Props = {}> = React.FC<PropsWithChildren<Partial<Props>>>;
