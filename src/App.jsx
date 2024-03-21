import Check from "./components/Check"
import Content from "./components/Content"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="app">
      <Sidebar />
      <section className="app__content">
        <Header />
        <div className="container">
          <Check />
          <div className="page__container">
            <Navigation />
            <Content />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
