import CourseContext from './courseContext';
import React, { useState } from 'react'
import axios from "axios"
import { BASE_URL } from "../../constants"

const CourseState = ({children}) => {

 
    return (
        <CourseContext.Provider value={{  }}>
          {children}
        </CourseContext.Provider>
      )
}

export default CourseState;