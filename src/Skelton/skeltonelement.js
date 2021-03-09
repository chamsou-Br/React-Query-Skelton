import react from 'react';
import './skelton.css'


const SkeltElement = ({type}) => {
    const classes = `Skelton ${type}`;

    return(
        <div className={classes}>

        </div>
    )
} 
export default SkeltElement