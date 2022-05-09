import { Route } from '@vaadin/router';
import './views/qrread-view'
import './views/main-layout';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: 'qrread-view',
    icon: '',
    title: '',
  },
  {
    path: 'qrread',
    component: 'qrread-view',
    icon: 'la la-list-alt',
    title: 'QR Scanner',
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [...views],
  },
];
