import React from 'react';
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas-old";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import KanbasNavigation from "./Kanbas/KanbasNavigation";
import Dashboard from './Kanbas/Database/Dashboard';
import Nav from './Labs/a3/Nav';

function App() {
  return (
    <HashRouter>
      <div className="container-fluid"> 
      <Nav /> 
        <Routes>
          <Route path="/" element={<Navigate to="/Labs"/>}/>
          <Route path="/hello" element={<HelloWorld/>}/>
          <Route path="/Labs/*" element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/KanbasNavigation/*" element={
                        <div>
                        <KanbasNavigation />
                        <Dashboard /> 
                      </div>
                    }/> 
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
