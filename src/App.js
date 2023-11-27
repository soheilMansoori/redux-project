import { useRoutes } from 'react-router-dom'
import router from './Router/router';
import './App.css'

function App() {
  const routes = useRoutes(router)
  return (
    <>
      <h1>hi this is react-redux-project</h1>
      {routes}
    </>
  );
}

export default App;
