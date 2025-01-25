import { setupNest } from 'components';
import RevealSetup from '../reveal/RevealSetup';

export const ListSetup = {};

export const [setups, orderSetups] = setupNest<typeof ListSetup>(ListSetup);
