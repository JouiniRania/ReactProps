import React from 'react'
import PropTypes from 'prop-types';

const componentprofile = (props)=>{

      return(
        <div>
            <p>{props.profile.fullname}</p>
             <p>{props.profile.bio}</p>
             <p>{props.profile.profession}</p>
            
    {props.children}
      </div>
      );
      }

      componentprofile.propTypes={
        fullname: PropTypes.string,
        bio: PropTypes.string,
        profession: PropTypes.string
      }
      
      componentprofile.defaultProps = {
      fullname:  "xxx",
      bio:  "zzz",
      profession: "vide"
      }; 
      
      export default componentprofile;
