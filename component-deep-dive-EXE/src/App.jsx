import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import DeleteUser from './components/DeleteUser'
import EditCreateUser from './components/Edit-Create-User'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
import Pagination from './components/Pagination'
import UserDetails from './components/UserDetails'



function App() {

  const [users, setUsers] = useState([]);
  const [showSaveUserModal, setShowSaveUserModal] = useState(false)
  

  useEffect(() => {
    fetch('https://pntezrlzpnvbmxjltaqr.supabase.co/rest/v1/users', {
      headers: {
        'apikey': 'sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT'
      }
    })
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error(err))
  },[])

  
    
    // fetch('https://pntezrlzpnvbmxjltaqr.supabase.co/rest/v1/users', {
    //   method: 'POST',
    //   headers: {
    //     'apikey': 'sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT'
    //   },
    //   body: JSON.stringify(userData)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   setUsers(prevState => [...prevState, data])
    // })
    // .catch(err => console.error(err))
  }

  const addUserClickHandler = () => {
    setShowSaveUserModal(true)

  }

  const addUserCloseHandler = () => {
    setShowSaveUserModal(false)
  }

  const submitUserHandler = (user) => {
    console.log(user);

  return (
    
      <>
  {/* Header component */}
  <Header />
  {/* Main component  */}
  <main className="main">
    <section className="card users-container">
      <UserSearch />
      {/* Table component */}
      <UserList users={users} />
      {/* New user button  */}
      <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

      {showSaveUserModal && <EditCreateUser onClose={addUserCloseHandler} onSubmit={submitUserHandler} />}
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
