/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import 'w3-css/w3.css';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { Link } from 'react-router-dom';

const Profile = () => {

  const { loading, data } = useQuery(GET_ME);

  let userData;
  if (loading) {
    return <h2>LOADING...</h2>;
  } else {
    userData = data.me;
    console.log(userData)
  }

  return (
    <div>
      <div>
        <header className="w3-display-container w3-content w3-wide" id="home" style={{
          maxwidth: '1500px',
        }}>


          <div className="w3-display-middle w3-margin-top w3-center">
            <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min "><b>WIKICRAFT</b></span>
              <span className="w3-hide-small w3-text-light-grey"></span></h1>
          </div>
        </header>
      </div><div>
        {<><div className="w3-content w3-padding" style={{
          maxwidth: '1564px',
        }} /><div className="w3-container w3-padding-32" id="games">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16"></h3>
          </div></>}

        <div className="w3-row-padding">
          <div className="w3-container">
            <h1 className="w3-border-bottom w3-border-light-grey w3-padding-16">Account Info:</h1>
            <h3>Username: {userData.name}</h3>
            <h3>Email: {userData.email}</h3>
          </div>
        </div>

        <div className="w3-row-padding">
          <div className="w3-container">
            <h1 className="w3-border-bottom w3-border-light-grey w3-padding-16"> Lists:</h1>
            <h3>{userData.lists.map((list) => {
              return (
                <><div>
                  <ul>
                    <li>
                    <Link
                    to="/Gather"
                    state={{ listId: list._id }}
                  >
                      {list.name}
                      </Link>
                    </li>
                  </ul>
                </div>
</>
              )

            })}</h3>
          </div>
        </div>



      </div>
      <footer className="w3-center w3-black w3-padding-16">
        <p>WIKICRAFT by WIKIDEV</p>
      </footer>
    </div>

  )
}



export default Profile;