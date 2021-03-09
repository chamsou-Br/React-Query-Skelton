import react, { useEffect , useState } from 'react'
import SkeltElement from '../Skelton/skeltonelement'
import UserSketlon from '../Skelton/UserSketlon'

const User = () => {

    const [existe, setExiste] = useState(false)
   useEffect(()=> {
        setTimeout(async () => {
            setExiste(true)
        },5000)
    })

    return(
        <div className='User'>
            <h2>User</h2>
           {existe && (
                <div>
                    <h3>Berkane Chamseddine</h3>
                    <p>Etudiant en ESI</p>
                    <a href='ChamsouBr'>ChamsouBr</a>
                </div>
            )}
            {!existe && (
                <UserSketlon theme='Dark' />
            )}
        </div>
    )
}

export default User