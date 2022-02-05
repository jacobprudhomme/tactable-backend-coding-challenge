import got from 'got';
import { inject, injectable } from 'inversify';

import { IApiManager } from './interfaces';
import { Todo } from './types';

@injectable()
export class TodoClient {
  _resourceUrl = 'https://jsonplaceholder.typicode.com/todos';

  async getTodos(): Promise<Todo[]> {
    const todos: Todo[] = await got(this._resourceUrl).json();
    return todos;
  }
}

@injectable()
export class ApiManager implements IApiManager<Todo[]> {
  _todoClient: TodoClient;

  constructor(@inject(TodoClient) todoClient: TodoClient) {
    this._todoClient = todoClient;
  }

  async fetchData(): Promise<Todo[]> {
    return this._todoClient.getTodos();
  }
}
