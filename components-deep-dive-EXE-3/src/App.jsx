import Header from "./components/Header";
import Footer from "./components/Footer";
import Employees from "./components/Employees";
import Table from "./components/Table";
import UserDetails from "./components/UserDetails";
import CreateEdit from "./components/Create-Edit";
import Delete from "./components/Delete";
//import Main from "./components/Main";
import UserSearch from "./components/UserSearch";
import Pagination from "./components/Pagination";


function App() {
  

  return (
    <>
      <Header />

      <main className="main">
      <section className="card users-container">
      <UserSearch />
      {/* Table component */}
      <Table />
      {/* New user button  */}
      <button className="btn-add btn">Add new user</button>

      {/* <CreateEdit /> */}
      {/* Pagination component  */}
      <Pagination />
    </section>
      {/* <UserDetails /> */}


      {/* <Delete /> */}
    
  </main>
      

      <Footer />
    </>
  )
}

export default App
