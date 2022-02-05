import 'reflect-metadata';

import { Container } from 'inversify';

import { ApiManager, TodoClient } from './classes';
import SYMBOLS from './symbols';

const container = new Container();
container.bind<TodoClient>(SYMBOLS.TodoClient).to(TodoClient);
container.bind<ApiManager>(SYMBOLS.ApiManager).to(ApiManager);

export default container;
