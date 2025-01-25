import { setupNest } from 'components';
import I18nSetup from '../i18n/I18nSetup';

export const ListSetup = {
  i18n: I18nSetup,
};

export const [setups, orderSetups] = setupNest<typeof ListSetup>(ListSetup);
