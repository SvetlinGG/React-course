export default function Register() {

  const registerHandler = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target)
    
    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirm-password')
    }
    console.log(user);
    if ( user.password !== user.confirmPassword){
      return alert('Password missmatch!')
    }
    
  }


    return (
        <section id="register-page" className="content auth">
  <form id="register" onSubmit={registerHandler}>
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

    );
}