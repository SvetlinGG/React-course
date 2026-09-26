import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import DeleteUser from './components/DeleteUser'
import EditCreateUser from './components/Edit-Create-User'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
import Pagination from './components/Pagination'
import UserDetails from './components/UserDetails'

const baseURL = 'https://pntezrlzpnvbmxjltaqr.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT';


function App() {

  const [users, setUsers] = useState([]);
  const [showSaveUserModal, setShowSaveUserModal] = useState(false)
  

  useEffect(() => {
    fetchUsers()
    .then(data => setUsers(data))
    .catch(err => console.error(err))
  },[]);

  


  const saveUserHandler = (userData) => {
    fetch( baseURL, {
      method: 'POST',
      headers: {
        'apikey': apiKey,
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUsers(prevState => [...prevState, data])
    })
    .catch(err => console.error(err))
  }

  const addUserClickHandler = () => {
    setShowSaveUserModal(true)

  }

  const addUserCloseHandler = () => {
    setShowSaveUserModal(false)
  }

  const submitUserHandler = async (user) => {
    // send user to database (REST API)
    try {
      await fetch(baseURL, {
      method: 'POST',
      headers: {
        'apikey': 'sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT',
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify(user)
    });

    const updatedUsers = await fetchUsers();
    setUsers(updatedUsers);

    } catch (error) {
      alert('Error adding user: ' + error)
    }finally{
      setShowSaveUserModal(false)
    }
  }

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

async function fetchUsers(){
      const response = await fetch( baseURL, {
      headers: {
        'apikey': apiKey
      }
    })

    const data = await response.json();
    return data;
  }

export default App
