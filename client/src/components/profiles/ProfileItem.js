import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import avatar from  '../../img/doctor-avatar.png'

const ProfileItem = ({ profile: {
    user: { _id, name},
    status,
    hospital,
    location,
    specialities
}}) => {
    return <div className="profile bg-light">
        <img src={avatar} alt="" className="round-img"/>
        <div>
            <h2>{name}</h2>
            <p>{status} {hospital && <span>at {hospital}</span>}</p>
            <p className="my-1">{location && <span>{location}</span>}</p>
            <Link to={`/profile/${_id}`} className='btn btn-primary'>
                View Profile
            </Link>
        </div>
        <ul>
            {specialities.slice(0,4).map((speciality,index) => (
                <li key={index} className="text-primary">
                    <i className="fas fa-check">
                        {speciality}
                    </i>
                </li>
            ))}
        </ul>
    </div>;
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem
