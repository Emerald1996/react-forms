import React, { useState } from 'react'
 
const App = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState();
  const [user, setUser] = useState([]);

    
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email && age) {
      console.log(name, email);

      //we can also use a Date method as an id since react mandates each child should have a unique key prop
      const person = { id: new Date().getTime().toString(),name , email , age};

      //Create an array of people and Add person object to the array
      setUser((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
      setAge("")

      let show = document.querySelector(".btn");
      show.classList.add("active");
    }
    else {
      alert('please fill up the fields')
    }
       
  }
  const handleClick = () => {
    setUser([])
  }
   
    return (
      <>
        <h1>Forms in React</h1>
        <article>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="enter name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="email">Email: </label>
              <input
                name="email"
                id="email"
                type="text"
                placeholder="enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="name">Age: </label>
              <input
                name="age"
                id="age"
                type="number"
                placeholder="age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div>
              <button className="btn-container">submit</button>
            </div>
          </form>
          {user.map((person) => {
            const { id, name, email , age } = person;
            return (
              <div key={id} className="names-array">
                <h2>Submitted ✔ </h2>
                <h4>Name : {name}</h4>
                <h4>Email : {email}</h4>
                <h4>Age : {age}</h4>
              </div>
            );
          })}
          <button className="btn" onClick={handleClick}>
            Clear all
          </button>
        </article>
      </>
    );
    
};
    
export default App;