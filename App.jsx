import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import WritePost from "./pages/WritePost";
import PostDetail from "./pages/PostDetail";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<WritePost />} />
            <Route path="/:id" element={<PostDetail />} />
            <Route path="/:id/edit" element={<EditPost />} />
        </Routes>
    </Router>
  );
}
export default App
