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
    
    //.then(res => res.json())
    fetchUsers()
    .then(data => setUsers(data))
    .catch(err => console.error('Error fetching users: ', err))
  },[])

  

  const submitUserHandler = async (user) => {

    try {
       await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apiKey': apiKey,
      },
      body: JSON.stringify(user)
    })
    } catch (error) {
      alert('Error adding user: ', error)
    }finally{
      setShowSaveUserModal(false)
    }
  }
 

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
      {showSaveUserModal && <SaveUserModal onClose={closeModalHandler} onSubmit={submitUserHandler} />}
      
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

async function fetchUsers(){
    const response = await fetch( baseURL, {
      headers: {
        'apiKey': apiKey
      }
    });

    const data = await response.json() ;
    return data;
  }

export default App
