import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Register';
// import Login from './Login'
import MainPage from './MainPage'
import CourseRegistration from './CourseRegistration';

import Nav from './Home/Nav'
import Hero from './Home/Hero'



function App() {

  return (
    <main className="App mt-0">
      <Routes>
<Route index element={<MainPage/>}
<Route index element={<MainPage/>}
      </Routes>
      <BrowserRouter>
      </BrowserRouter>
    </main>
  );
}

export default App;