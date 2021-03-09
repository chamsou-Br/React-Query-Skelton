import react, { useEffect, useState } from 'react'
import ArticleSkelton from '../Skelton/ArticleSkelton'

const Articles = () => {

    const [existe, setExiste] = useState(false)
    const varMap = [1,2,3,4,5]
  useEffect(()=> {
        setTimeout(async () => {
              setExiste(true)
        },5000)
    })

    return(
        <div className='Articles'>
            <h2>Articles</h2>
            {existe && varMap.map(n=> (
                <div className='Article' key={n}>
                    <h3>Article N {n}</h3>
                    <p>it's a time to describe our project in ESMS </p>
                    <a href='ChamsouBr'>ESMS 14</a>
                </div>
            ))} 
            {!existe && varMap.map(n => (
                <div className='Article'>
                    <ArticleSkelton theme='Dark'/>
                </div>
            ))

            }
        </div>
    )
}

export default Articles