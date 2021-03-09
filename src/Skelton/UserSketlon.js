import react from 'react'
import SkeltElement from './skeltonelement'

const UserSketlon = ({theme}) => {
    const classes = `UserSketlon ${theme}`
    return(
        <div className={classes}>
         <div className='userSketlonAbsolute'></div>
          <SkeltElement type='avatar' />
          <div>
              <SkeltElement type='title'/>
              <SkeltElement type='text' />
              <SkeltElement type='text' /> 
          </div>
        </div>
    )
} 
export default UserSketlon 