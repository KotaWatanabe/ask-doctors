import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({ profile: { profile, loading },createProfile, getCurrentProfile, history }) => {
    const [formData, setFormData] = useState({
        hospital:'',
        website:'',
        location:'',
        status:'',
        specialities:'',
        bio:'',
    });

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            hospital: loading || !profile.hospital ? '' : profile.hospital,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            status: loading || !profile.status ? '' : profile.status,
            specialities: loading || !profile.specialities ? '' : profile.specialities.join(','),
            bio: loading || !profile.bio ? '' : profile.bio,
        })
    }, [loading, getCurrentProfile]);

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

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true)
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
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
        <select name="status" value={status} onChange={(e) => onChange(e)}>
                <option value="0">* Select Professional Status</option>
                <option value="Resident">Resident</option>
                <option value="Chief Resident">Chief Resident</option>
                <option value="Fellow">Fellow</option>
                <option value="Student">Student</option>
                <option value="Doctor">Doctor</option>
                <option value="Professor">Professor</option>
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
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </Fragment>
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    profile: state.profile
  });

  export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    withRouter(EditProfile)
  );
