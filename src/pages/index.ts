import loadable from '@loadable/component';

export const Home = loadable(() => import('pages/home/Home'));
export const Tasks = loadable(() => import('pages/tasks/Tasks'));
export const Counter = loadable(() => import('pages/counter/Counter'));
export const NotFound = loadable(() => import('pages/common/NotFound'));
