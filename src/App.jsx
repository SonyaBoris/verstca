import { Route, Routes } from "react-router-dom"

import Content from "./components/Content"

import Layout from "./components/Layout"
import Skils from "./components/Skils"
import Projects from "./components/Projects"
import Awards from "./components/Awards"
import Video from "./components/Video"
import Specialization from "./components/Specialization"
import Experience from "./components/Experience"
import Profile from "./components/Profile"

function App() {

  return (
    <div className="app">
       <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<Content />} />
            <Route path="skils" element={<Skils />} />
            <Route path="project" element={<Projects />} />
            <Route path="awards" element={<Awards />} />
            <Route path="video" element={<Video />} />
            <Route path="specialization" element={<Specialization />} />
            <Route path="experience" element={<Experience />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
