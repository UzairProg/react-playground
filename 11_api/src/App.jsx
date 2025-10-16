import axios from 'axios'

function App() {
  // function fetchData() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }

  // async function fetchData() {
  //   let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   console.log(response)

  //   let data = await response.json()
  //   console.log(data)
  // }

  async function fetchData() {
      let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response)
      console.log(response.data)
  }

  return (
    <div>
      <h1>Api Calls!</h1>
      <button
      onClick={fetchData}
      >
        Call API
      </button>
    </div>
  )
}

/*
API calling in React involves making requests to external services or endpoints to fetch or send data. This is typically done using JavaScript's built-in Fetch API or third-party libraries like Axios.

Here are the steps to make API calls in React:

1. Choose a method for making API calls:
   - Fetch API: A built-in JavaScript function for making HTTP requests.
   - Axios: A popular third-party library that simplifies HTTP requests and provides additional features.

2. Use the chosen method to make API calls:
   - Fetch API example:
     ```javascript
     fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error('Error fetching data:', error));
     ```

   - Axios example:
     ```javascript
     import axios from 'axios';

     axios.get('https://api.example.com/data')
       .then(response => console.log(response.data))
       .catch(error => console.error('Error fetching data:', error));
     ```

3. Handle asynchronous operations:
   - Use Promises with `.then()` and `.catch()` to handle the response and errors.
   - Alternatively, use `async/await` syntax for cleaner and more readable code:
     ```javascript
     async function fetchData() {
       try {
         const response = await axios.get('https://api.example.com/data');
         console.log(response.data);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     }
     ```
*/

export default App
