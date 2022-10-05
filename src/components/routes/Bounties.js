import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Bounties() {
    const [bounties, setBounties] = useState([])
    const [err, setErr] = useState('')
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
            <h1>All Bounties!</h1>
            {bountyLinks}
        </div>
    )
}