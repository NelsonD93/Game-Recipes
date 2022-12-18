/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import 'w3-css/w3.css';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { Link } from 'react-router-dom';
import stardewBG from '../assets/images/stardewBG.jpg';
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
      <img src={stardewBG} alt="stardew valley scenery" style={{
                maxHeight: '600px',
                minWidth: '1600px'
            }} />

            <div className="w3-display-middle w3-margin-top w3-center">
                <h1 className="w3-xxlarge w3-text-white">
                    <span className="w3-padding w3-black w3-opacity-min alex-test">
                        <b>WIKICRAFT</b></span>
                    <span className="w3-hide-small w3-text-light-grey"></span>
                </h1>
            </div>

      </div><div>

        <div className="w3-row-padding">
          <div className="w3-container">
            <h1 className="w3-border-bottom w3-border-light-grey w3-padding-16 text">Account Info:</h1>
            <h3 className='text'>Username: {userData.name}</h3>
            <h3 className='text'>Email: {userData.email}</h3>
          </div>
        </div>

        <div className="w3-row-padding">
          <div className="w3-container">
            <h1 className="w3-border-bottom w3-border-light-grey w3-padding-16 text"> Lists:</h1>
            <h3>{userData.lists.map((list) => {
              return (
                <><div>
                  <ul className='text'>
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

    </div>

  )
}



export default Profile;