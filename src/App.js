import { useRoutes } from 'react-router-dom'
import router from './Router/router';
import './App.css'
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const routes = useRoutes(router)
  return (
    <>
      <div class="container px-0">
        <Header />
        <main class="main">
          <div class="row justify-content-between mx-0">
            <Sidebar />
            {routes}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
