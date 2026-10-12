import { useState } from 'react'
//import { useNavigate } from 'react-router';
export default function Register() {

  const [user, setUser] = useState(null);
  //const navigate = useNavigate();

  const registerHandler = (formData) => {
    
    
    //const formData = new FormData(e.target)

    // extract form data
    
      const email = formData.get('email');
      const password = formData.get('password');
      const confirmPassword = formData.get('confirm-password');
    
    console.log(user);

    // basic validation
    if ( password !== confirmPassword){
      return alert('Password missmatch!')
    }

    if ( !email || !password || !confirmPassword){
      return alert('All field are required!!!');
    }

    
    setUser({email})

    // navigate to home page
    //navigate('/')
  }


    return (
      <>
      {user && <h3>Welcome, {user.email} !</h3>}
        <section id="register-page" className="content auth">
          <form id="register" action={registerHandler}>
            <div className="container">
            <div className="brand-logo" />
            <h1>Register</h1>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="Password"
            />
            <label htmlFor="con-pass">Confirm Password:</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Repeat Password"
            />
            <input className="btn submit" type="submit" defaultValue="Register" />
            </div>
          </form>
        </section>
      </>
    );
}