import got from 'got';

interface IApiManager<T> {
  fetchData(): Promise<T>;
}

type Todo = {
  id: number;
  completed: boolean;
  title: string;
  userId: number;
};

class ApiManager implements IApiManager<Todo[]> {
  _todoClient: TodoClient;

  constructor(todoClient: TodoClient) {
    this._todoClient = todoClient;
  }

  async fetchData(): Promise<Todo[]> {
    return this._todoClient.getTodos();
  }
}

class TodoClient {
  _resourceUrl = 'https://jsonplaceholder.typicode.com/todos';

  async getTodos(): Promise<Todo[]> {
    const todos: Todo[] = await got(this._resourceUrl).json();
    return todos;
  }
}
