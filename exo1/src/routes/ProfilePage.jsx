import { useParams } from 'react-router-dom'
import db from '../db.json'

export default function ProfileLoader() {
    const { profile_name } = useParams()
    const p = db[profile_name]
    return <ProfilePage 
    name={p.name}
    aka={p.aka}
    birthdate={p.birthdate}
    birthplace={p.birthplace}
    characterClass={p.characterClass}
    picture={p.picture}
    />
}


function ProfilePage({ name, aka, birthdate, birthplace, characterClass, picture }) {

    if (!(name && aka && birthdate && birthplace && characterClass && picture)) {
        return (<>
            <h2>Profile incomplete</h2>
            <h3>Author needs to provide all necssary info to render page</h3>
        </>)
    }

    console.log(picture);

    return (
        <>
            <h1>{name}</h1>
            <img src={picture} alt={"img not found"} style={{height:"256px"}}></img>
            <h2>{aka}</h2>
            <div>
                <p>Born the {birthdate} at {birthplace}</p>
                <p>Class : {characterClass}</p>
            </div>
        </>

    )
} 