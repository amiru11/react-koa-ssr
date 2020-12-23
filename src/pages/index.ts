import loadable from '@loadable/component';

export const HomePage = loadable(() => import('pages/home/HomePage'));
export const TasksPage = loadable(() => import('pages/tasks/TasksPage'));
export const CounterPage = loadable(() => import('pages/counter/CounterPage'));
export const NotFoundPage = loadable(() => import('pages/common/NotFoundPage'));
