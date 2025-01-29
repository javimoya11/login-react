import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Forgot from "./Forgot";
import Signup from "./Signup";

const App = () => {
    return (
      <div>
        <BrowserRouter>
            <header>
              <Link to="/">Game Library</Link>
            </header>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
      </div>
    );
};
  
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// import { useState, useEffect } from 'react'
// import { supabase } from '../utils/supabase'

// function Page() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     function getTodos() {
//       const { data: todos } = await supabase.from('todos').select()

//       if (todos.length > 1) {
//         setTodos(todos)
//       }
//     }

//     getTodos()
//   }, [])

//   return (
//     <div>
//       {todos.map((todo) => (
//         <li key={todo}>{todo}</li>
//       ))}
//     </div>
//   )
// }
// export default Page