import React, { useState } from 'react';

export function HomePage(props) {
  const [list, setList] = useState(['ready', 'set', 'GO']);
  const [text, setText] = useState('');

  function onSubmit(e) {
    e.preventDefault();

    let updatedList = [...list, text];

    setList(updatedList);
    setText('');
  }

  return (
    <main className='container'>
      <h1>ToDos Reactor</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
          <button type='submit'>Add</button>
        </div>
      </form>
      <ul>
        {list.map((item, idx) => (
          <li key={item + idx}>{item}</li>
        ))}
      </ul>
    </main>
  );
}