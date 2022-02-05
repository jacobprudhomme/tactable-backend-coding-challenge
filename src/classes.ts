import got from 'got';
import { inject, injectable } from 'inversify';

import { IApiManager } from './interfaces';
import { Todo } from './types';

@injectable()
export class TodoClient {
  private readonly resourceUrl = 'https://jsonplaceholder.typicode.com/todos';

  async getTodos(): Promise<Todo[]> {
    const todos: Todo[] = await got(this.resourceUrl).json();
    return todos;
  }
}

@injectable()
export class ApiManager implements IApiManager<Todo[]> {
  private readonly todoClient: TodoClient;

  constructor(@inject(TodoClient) todoClient: TodoClient) {
    this.todoClient = todoClient;
  }

  async fetchData(): Promise<Todo[]> {
    return this.todoClient.getTodos();
  }
}
