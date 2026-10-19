import { useEffect, useState } from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer"
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import SaveUserModal from "./components/SaveUserModal";
import UserDeleteModal from "./components/UserDeleteModal";
import Pagination from "./components/Pagination";

const baseURL = 'https://pntezrlzpnvbmxjltaqr.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT';


function App() {

  const [users, setUsers] = useState([]);
  const [showSaveUserModal, setShowSaveUserModal] = useState(false);

  const openModalHandler = () => {
    setShowSaveUserModal(true)
  }

  const closeModalHandler = () => {
    setShowSaveUserModal(false)
  }
  
  

  useEffect(() => {
    fetch( baseURL, {
      headers: {
        'apiKey': apiKey
      }
    })
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error('Error fetching users: ', err))
  },[])
 

  return (
    <>
      <Header />
          <main className="main">
          <section className="card users-container">
      <UserSearch />
      {/* Table component */}
      <UserList users={users} />
      {/* New user button  */}
        <button className="btn-add btn" onClick={openModalHandler}>Add new user</button>
      {showSaveUserModal && <SaveUserModal onClose={closeModalHandler} />}
      
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
