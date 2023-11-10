import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [user, Setusers] = useState([]);
  const getUser = async () => {
    const res = await fetch(url);
    const user = await res.json();
    Setusers(user)
    // console.log(user)
  }
  useEffect(async () => {
    getUser()
  }, []);
  return (
    <>
      <h2>fetch data github users</h2>;
      <ul className='users'>
      {
          user.map((user) => {
          const {id,login,avatar_url,html_url}=user
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            )
        })
      }
    </ul>
   
    </>
  )
};

export default UseEffectFetchData;
