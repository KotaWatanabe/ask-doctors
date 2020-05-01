import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = props => {
    const [formData, setFormData] = useState({
        hospital:'',
        website:'',
        location:'',
        status:'',
        specialities:'',
        bio:'',
    });

    const {
        hospital,
        website,
        location,
        status,
        specialities,
        bio,
    } = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name] : e.target.value}) 
    }

    return (
        <Fragment>
          <h1 className="large text-primary">
            Create Your Profile
          </h1>
          <p className="lead">
            <i className="fas fa-user"></i> Let's get some information to make your
            profile stand out
          </p>
          <small>* = required field</small>
          <form className="form">
            <div className="form-group">
              <select name="status" value={status} onChange={(e) => onChange(e)}>
                <option value="0">* Select Professional Status</option>
                <option value="Developer">Resident</option>
                <option value="Junior Developer">Chief Resident</option>
                <option value="Senior Developer">fellow</option>
                <option value="Manager">Student</option>
                <option value="Student or Learning">Doctor</option>
                <option value="Student or Learning">Professor</option>
                <option value="Other">Other</option>
              </select>
              <small className="form-text"
                >Give us an idea of where you are at in your career</small
              >
            </div>
            <div className="form-group">
              <input type="text" placeholder="Hospital" name="hospital" value={hospital} onChange={e => onChange(e)}/>
              <small className="form-text"
                >Could be your own hospital or one you work for</small
              >
            </div>
            <div className="form-group">
              <input type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)}/>
              <small className="form-text"
                >Could be your own or a hospital website</small
              >
            </div>
            <div className="form-group">
              <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)}/>
              <small className="form-text"
                >City & state suggested (eg. Boston, MA)</small
              >
            </div>
            <div className="form-group">
              <input type="text" placeholder="* Specialities" name="specialities" value={specialities} onChange={e => onChange(e)}/>
              <small className="form-text"
                >Please use comma separated values (eg.
                gastoroenterologist,cardiologist)</small
              >
            </div>
            <div className="form-group">
              <textarea 
                placeholder="A short bio of yourself" 
                name="bio"
                value={bio} 
                onChange={e => onChange(e)}
                >
              </textarea>
              <small className="form-text">Tell us a little about yourself</small>
            </div> 
    
            <input type="submit" className="btn btn-primary my-1" />
            <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
          </form>
        </Fragment>
        )
}

CreateProfile.propTypes = {

}

export default CreateProfile
