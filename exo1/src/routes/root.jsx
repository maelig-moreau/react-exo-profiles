import db from '../db.json'

export default function Root() {
    let toKeys = Object.keys(db)
    let toArray = []
    toKeys.forEach((element) => {toArray.push(db[element])})
    return (
        <>
            <h1>Accurate encyclopedia</h1>
            {toArray.map((element,i) => {
                return <ProfileCard key={i} name={element.name} picture={element.picture} address={toKeys[i]} />
            })}
        </>
    )
}

function ProfileCard({ name, picture, address }) {
    return (
        <a href={`profile/${address}`}>
        <div className='ProfileCard'>
            <span>{name}</span>
            <div style={{backgroundImage:`url(${picture})`, height:"64px", width: "64px", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", borderRadius:"20px"}}></div>
        </div>
        </a>
    )
}