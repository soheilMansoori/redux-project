import { useRoutes } from 'react-router-dom'
import router from './Router/router';
import './App.css'
import Header from './Components/Header/Header';

function App() {
  const routes = useRoutes(router)
  return (
    <>
      <div class="container px-0">
        <Header />
        {routes}
      </div>
    </>
  );
}

export default App;
