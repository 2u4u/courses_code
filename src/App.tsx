import './App.css';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import Leadership from './pages/leadership';
import GroupRoles from './pages/group-roles';
import Navbar from './components/Navbar';
import Empty from './pages/empty/Empty';
  
function App() {
    return (
        <HashRouter>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Empty />} />
                <Route path="leadership" element={<Leadership />} />
                <Route path="group-roles" element={<GroupRoles />} />
            </Routes>
        </HashRouter>

    );
}

export default App;