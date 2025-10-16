import React from 'react'

function App() {
    const user = {
    username: 'Uzair',
    age: 19,
    city: 'NYC'
  }

  localStorage.setItem('user', JSON.stringify(user))
  sessionStorage.setItem('user', user.username)
  const usera = JSON.parse(localStorage.getItem('user'))

  console.log(usera);
  return (
    <div>App</div>
  )
}

/*
localStorage is a web storage API that allows you to store data in the browser with no expiration time.
It is useful for persisting user preferences, session data, or any other information that needs to be retained across page reloads or browser sessions.

Here are some common operations you can perform with localStorage:

1. Set an item:
localStorage.setItem('key', 'value');

2. Get an item:
const value = localStorage.getItem('key');

3. Remove an item:
localStorage.removeItem('key');

4. Clear all items:
localStorage.clear();

5. Get the number of items stored:
const length = localStorage.length;

6. Get a key by index:
const key = localStorage.key(index);

Note: localStorage only stores string values. If you want to store objects or arrays, you need to serialize them using JSON.stringify() before storing and parse them using JSON.parse() when retrieving.

Example of storing and retrieving an object:
const user = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

const retrievedUser = JSON.parse(localStorage.getItem('user'));
console.log(retrievedUser.name); // Output: John

localStorage is synchronous, meaning that operations on it block the main thread. Therefore, it is recommended to use it for small amounts of data and avoid frequent read/write operations in performance-critical applications.

localStorage's data is diff for each domain, meaning that data stored by one website cannot be accessed by another website. This provides a level of security and privacy for users.

local vs session storage:
- localStorage persists data even after the browser is closed and reopened.
- sessionStorage, on the other hand, only persists data for the duration of the page session. Once the browser or tab is closed, the data is cleared.

In summary, localStorage is a simple and effective way to store data in the browser for long-term persistence, while sessionStorage is suitable for temporary data that only needs to last for a single session.



now, seessionStorage:

sessionStorage is a web storage API that allows you to store data in the browser for the duration of a page session. Unlike localStorage, which persists data even after the browser is closed and reopened, sessionStorage only retains data while the page session is active. Once the browser or tab is closed, the data stored in sessionStorage is cleared.

Here are some common operations you can perform with sessionStorage:

1. Set an item:
sessionStorage.setItem('key', 'value');

2. Get an item:
const value = sessionStorage.getItem('key');

3. Remove an item:
sessionStorage.removeItem('key');

4. Clear all items:
sessionStorage.clear();

5. Get the number of items stored:
const length = sessionStorage.length;

6. Get a key by index:
const key = sessionStorage.key(index);

Note: Like localStorage, sessionStorage only stores string values. If you want to store objects or arrays, you need to serialize them using JSON.stringify() before storing and parse them using JSON.parse() when retrieving.

Example of storing and retrieving an object:
const user = { name: 'John', age: 30 };
sessionStorage.setItem('user', JSON.stringify(user));

const retrievedUser = JSON.parse(sessionStorage.getItem('user'));
console.log(retrievedUser.name); // Output: John

sessionStorage is synchronous, meaning that operations on it block the main thread. Therefore, it is recommended to use it for small amounts of data and avoid frequent read/write operations in performance-critical applications.

sessionStorage's data is specific to each tab or window. Data stored in sessionStorage is not shared between different tabs or windows, even if they are from the same domain. This provides a level of isolation for data within a single session.

In summary, sessionStorage is a useful tool for storing temporary data that only needs to last for the duration of a page session. It is ideal for scenarios where you want to retain user input or state while navigating within a single tab or window, but do not need to persist the data beyond that session.

if we reload the page, sessionStorage data will persist. But if we close the tab or browser, sessionStorage data will be cleared.

*/

export default App
