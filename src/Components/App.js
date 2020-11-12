import React, { useEffect } from 'react'
import { useEasybase } from 'easybase-react'
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const { Frame, configureFrame, sync, addRecord } = useEasybase();

  useEffect(() => {
    configureFrame({ limit: 10, offset: 0 });
    sync();
  }, []);

  const addPost = event => {
    event.preventDefault()
    console.log(uuidv4())
    // addRecord({
    //   insertAtEnd: true,
    //   newRecord:
    //   {
    //     id: uuidv4(),
    //     title: 'test title 2',
    //     author: 'system',
    //     description: 'random bla bla bla',
    //     datecreated: '2020-11-12T00:00:00.000Z'
    //   }
    // }
    // ).then(
    //   _ => console.log('super, izdevās '),
    //   error => console.log('o ou kaut kas nogāja greizi ', error)
    // )
    // sync()
  }

  return (
    <div className="App">
      {/* {getData()} */}
      <h1>HELLO BLOG!</h1>
      <p>yo</p>
      {Frame().length > 0 && (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Autors</th>
              <th>Nosaukums</th>
              <th>Teksts</th>
              <th>Datums</th>
            </tr>
          </thead>
          <tbody>
            {Frame().map(el => (
              <tr key={el.id}>
                <td>{el.author}</td>
                <td>{el.title}</td>
                <td>{el.description}</td>
                <td>{el.datecreated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* <form>
        <label>Nosaukums</label>
        <input type="text" name='title' />

        <label>Teksts</label>
        <textarea name='text' />

        <label>Autors</label>
        <input type="text" name='author' />

        <button type='submit' onClick={e => addPost(e)}>Nosūtīt</button>
      </form> */}
      <button type='submit' onClick={e => addPost(e)}>Nosūtīt</button>
    </div>
  );
}

export default App;
