import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import DeleteUser from './components/DeleteUser'
import EditCreateUser from './components/Edit-Create-User'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
import Pagination from './components/Pagination'
import UserDetails from './components/UserDetails'



function App() {

  return (
    
      <>
  {/* Header component */}
  <Header />
  {/* Main component  */}
  <main className="main">
    <section className="card users-container">
      <UserSearch />
      {/* Table component */}
      <UserList />
      {/* New user button  */}
      
      {/* Pagination component  */}
      <Pagination />
    </section>
    {/* User details component  */}
    
    {/* Create/Edit Form component  */}
    
    {/* Delete user component  */}
    
  </main>
  {/* Footer component  */}
  <Footer />
</>

    
  )
}

export default App
