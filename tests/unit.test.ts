import nock from 'nock';

import { TodoClient } from '../src/classes';

import { todos } from './data';

describe('TodoClient', () => {
  const todoClient = new TodoClient();

  nock('https://jsonplaceholder.typicode.com/todos')
    .get('')
    .reply(200, todos)
    .persist();

  describe('getTodos()', () => {
    it('should call the correct URL to fetch a list of todos', async () => {
      const result = await todoClient.getTodos();

      expect(result).toEqual(todos);
    });
  });
});
