import Header from "./components/Header";
import Footer from "./components/Footer";
import Employees from "./components/Employees";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import CreateEdit from "./components/Create-Edit";
import Delete from "./components/Delete";
//import Main from "./components/Main";
import UserSearch from "./components/UserSearch";
import Pagination from "./components/Pagination";
import { useEffect, useState } from "react";
import { fetchUsers } from "./api/usersApi";

const baseURL = 'https://pntezrlzpnvbmxjltaqr.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT';


function App() {

  const [users, setUsers] = useState([]);
  const [saveShowUserModal, setSaveShowUserModal] = useState(false);

  const addUserCloseHandler = () => {
    setSaveShowUserModal(false);
  };

  const addUserClickHandler = () => {
    setSaveShowUserModal(true);
  };

  useEffect(() => {
    fetchUsers()
    .then(data => setUsers(data))
    .catch(error => console.error('Error fetching users:', error))
  },[])

  const saveClickHandler = () => {

    fetchUsers(baseURL, {
      mathod: 'POST',
      body: JSON.stringify(),
      headers: {
        apiKey,
        'Content-Type': 'application/json'
      }
    })

  }
  

  return (
    <>
      <Header />

      <main className="main">
      <section className="card users-container">
      <UserSearch />
      {/* Table component */}
      <UserList users={users} onUserUpdate={() => fetchUsers().then(data => setUsers(data))} />
      {/* New user button  */}
      <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

      { saveShowUserModal && <CreateEdit onClose={addUserCloseHandler} onSubmit={saveClickHandler} />}
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
