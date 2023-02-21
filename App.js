import React from 'react';

class App extends React.Component {
  // Завдання 10.
  getText() {
    return '<p>текст</p>';    
  }
  // Завдання 11.
  getNum1() {
    return 1;
  }

  getNum2() {
    return 2;
  }
  render() {
    // Завдання 2.
    const текст = 'Текст';
    // Завдання 3.
    const текст1 = '<p>текст</p>';
    // Завдання 4.
    const text1 = '<p>текст1</p>';
    const text2 = '<p>текст2</p>';
    // Завдання 5.
    const attr = 'block'; 
    // Завдання 6.
    const str = 'block'; 
    // Завдання 8.
    const show = true; // Змінна, яка визначає, що відобразити
    let content; // Змінна для зберігання вмісту
    if (show) {
      content = <div>текст 1</div>;
    } else {
      content = <div>текст 2</div>;
    }
    // Завдання 9.
    const arr = ['a', 'b', 'c', 'd', 'e'];
    // Завдання 10.
    const text = this.getText();
    // Завдання 11.
    const sum = this.getNum1() + this.getNum2();
    return (
    <>
    {/*Завдання 1.*/}
    <div>
      текст
      </div>
    {/*Завдання 2.*/}
    <div>
        {текст}
      </div>
    {/*Завдання 3.*/}
      <div dangerouslySetInnerHTML={{__html: текст1}} />
    {/*Завдання 4.*/}
      <div>
        <p dangerouslySetInnerHTML={{__html: text1}} />
        <p>!!!</p>
        <p dangerouslySetInnerHTML={{__html: text2}} />
      </div>
    {/*Завдання 5.*/}
      <div id={attr}>
        текст
      </div>
    {/*Завдання 6.*/}
    <div className={str}>
        текст
      </div>
    {/*Завдання 7.*/}
      <div style={{ 
        backgroundColor: 'green', 
        border: '1px solid black', 
        borderRadius: '30px',
        padding: '10px'
      }}>
        текст
      </div>
    {/*Завдання 8.*/}
      <div>
        {content}
      </div>
    {/*Завдання 9.*/}
    <ul>
        {arr.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    {/*Завдання 10.*/}
    <div dangerouslySetInnerHTML={{ __html: text }} />
    {/*Завдання 11.*/}
    <div>
        <p>текст {sum}</p>
      </div>
    </>
    );
  }
}
export default App;