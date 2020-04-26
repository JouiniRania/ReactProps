import React from 'react'
import PropTypes from 'prop-types';

const componentprofile = (props)=>{

      return(
        <div>
    <p>{props.children}</p>
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