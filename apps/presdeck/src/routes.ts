import { type RouteConfig } from '@react-router/dev/routes';
import { homeRoute } from './app/home/homeRoute';

export default [...homeRoute] satisfies RouteConfig;
