import { decorate, injectable } from 'inversify';

import container from '../src/inversify.config';
import { ApiManager, TodoClient } from '../src/classes';
import SYMBOLS from '../src/symbols';

decorate(injectable(), TodoClient);
jest.mock('../src/classes');
const MockedTodoClient = TodoClient as jest.Mock<TodoClient>;

describe('ApiManager', () => {
  container.rebind<TodoClient>(SYMBOLS.TodoClient).to(MockedTodoClient);

  const apiManager = container.get<ApiManager>(SYMBOLS.ApiManager);

  it('should have a TodoClient injected in it', async () => {
    expect(MockedTodoClient).toHaveBeenCalled();
    expect(MockedTodoClient.mock.instances[0].getTodos).not.toHaveBeenCalled();

    await apiManager.fetchData();

    expect(MockedTodoClient.mock.instances[0].getTodos).toHaveBeenCalled();
  });
});
