import container from './inversify.config';
import { ApiManager } from './classes';
import SYMBOLS from './symbols';

(async function () {
  console.log('Fetching todo data...');

  const apiManager = container.get<ApiManager>(SYMBOLS.ApiManager);
  const todos = await apiManager.fetchData();

  console.log('Here is the first todo from the received data:', todos);
})();
