import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './componets/Sidebar';
import Dashboard from './componets/Dashboard';
import Homeoptions from './componets/Homeoptions';
import Homeiteams from './componets/Homeiteams';
import Aboutoptions from './componets/Aboutoptions';
import About from './componets/About';
import Services from './componets/Services';
import Contacts from './componets/Contacts';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="home"  element={<Homeoptions />}>
                <Route path="homeiteams" element={<Homeiteams />} />
              </Route>
              <Route path="about" element={<About />} >
              <Route path='aboutoptions' element={<Aboutoptions/>}/>
              </Route>
              <Route path="services" element={<Services />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
