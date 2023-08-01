import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharactersList from "../pages/CharactersList";
import Character from "../pages/Character";
import CharacterSearch from "../pages/CharacterSearch";
 

export default function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={`/`}
            element={
                <CharactersList />
            }
          />
          <Route
            path={`/:id`}
            element={
                <Character />
            }
          />
          <Route
            path={`/characterSearch`}
            element={
                <CharacterSearch />
            }
          />
        
        </Routes>
      </Router>
    </>
  );
}
 