import 'reflect-metadata';

import { Container } from 'inversify';

import { ApiManager, TodoClient } from './classes';

const container = new Container();
container.bind<TodoClient>(TodoClient).toSelf();
container.bind<ApiManager>(ApiManager).toSelf();

export default container;
