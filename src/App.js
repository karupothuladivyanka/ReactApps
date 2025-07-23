import React, { useEffect, useState } from "react";

function App() {
  let [users, setUsers] = useState([]);
  let [books, setBooks] = useState([]);
  useEffect(() => {
    //Calling Api1
    window.fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    //CAlling Api2
    window.fetch("https://fakerestapi.azurewebsites.net/api/v1/Books")
      .then((response) => response.json())
      .then((json) => setBooks(json));
  });

  return (
    <div>
      <h1>Users Data</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>ID</th><th>NAME</th><th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <h1>Books Data</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>ID</th><th>TITLE</th><th>description</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => (
              <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.description}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;