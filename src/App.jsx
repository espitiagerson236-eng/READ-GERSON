import './App.css';

function App (){
  const items = ['reac', 'Node', 'javaScript']
  return(
    <section>
      <div>hola mundo</div>
      <ul>
        {
          items.map((item, index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </section>
  )
};

export default App;