import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
    // bounties from the backend.
    // state for messages from the backend. 
    const [bounties, setBounties] = useState([])
    const [err, setErr] = useState('')

    // console.log('server URL', process.env.REACT_APP_SERVER_URL)

    useEffect( () => {
        const getBounties = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bounty`)
                setBounties(response.data)
                
                
            } catch(err) {
                console.warn(err)
            }

            
        }
        getBounties()
    }, [])
    const bountyLinks = bounties.map(bounty => {
        return (
            <div key={bounty._id}>
                <Link to={`/bounties/${bounty._id}`}>{bounty.name}</Link>
            </div>
        )
    })

    return (
        <div>
            <h1>Welcome to the Bounty app!</h1>
            <h2>Most Recent Bounties: </h2>
            {bountyLinks}
        </div>
    )
}