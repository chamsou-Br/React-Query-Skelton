import Articles from './componenets/Articles'
import User from './componenets/User'


function App() {
  return (
    <div className="App">
     <header>
       <div >
         React Skelton
       </div>
     </header>
     <div className='content'>
     <Articles/>
       <User />
     </div>
    </div>
  );
}

export default App;
