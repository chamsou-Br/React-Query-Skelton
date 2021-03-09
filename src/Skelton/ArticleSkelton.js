import react from 'react'
import SkeltElement from './skeltonelement'

const ArticleSkelton = ({theme}) => {
    const classes = `ArticleSketlon ${theme}` ;
    return(
        <div className={classes}>
        <div className='ArticleSketlonAbsolute'></div>
            <SkeltElement type='title'/>
            <SkeltElement type='text' />
            <SkeltElement type='text' />
            <SkeltElement type='text' />
        </div>
    )
} 
export default ArticleSkelton 