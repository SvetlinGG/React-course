
import Header from "./components/Header";
import Footer from "./components/Footer"
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import SaveUserModal from "./components/SaveUserModal";
import UserDeleteModal from "./components/UserDeleteModal";
import Pagination from "./components/Pagination";


function App() {
 

  return (
    <>
      <Header />
          <main className="main">
          <section className="card users-container">
      <UserSearch />
      {/* Table component */}
      <UserList />
      {/* New user button  */}
        <button className="btn-add btn" >Add new user</button>

      {/* <SaveUserModal /> */}
      {/* Pagination component  */}
      <Pagination />
    </section>
    {/* User details component  */}
    
    {/* Create/Edit Form component  */}
    
    {/* Delete user component  */}
    
    </main>
    <Footer />
    </>
  )
}

export default App
