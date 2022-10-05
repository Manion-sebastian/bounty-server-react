import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from "axios"

export default function Bounty() {

    const [bounty, setBounty] = useState({})
    const [errorMessage, setErrorMessage] = useState(' ')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
    const getBounty = async () => {
        try {
             const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bounty/${id}`)
             setBounty(response.data)

        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    getBounty()
   }, [])

   const handleDelete = async () => {
    try {
        // axios to the backend to delete this bounty
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/bounty/${id}`)
        // after deletion navigate to bounties
        navigate('/bounties')


    } catch(err) {
        console.warn(err)
        if (err.response) {
            setErrorMessage(err.response.data.message)

        }
    }
   }

  const status = (bounty.captured)? 'In Custody' : 'At Large'

    return (
        <div>
            <h1>Bounty Details</h1>
            <div>
                <Link to={`/bounties/${id}/edit`}>Edit Bounty</Link>{"  |  "}
                <button onClick={handleDelete}>Delete Bounty</button>
            </div>
            <div>

            <div><h2>{bounty.name} : {status}</h2><h3>Reward: {bounty.reward}</h3></div>
            <h3>Wanted by: {bounty.client}</h3>
            <p>For: {bounty.wantedFor}</p>
            <p>Ship: {bounty.ship}</p>
            <p>Last Seen: {bounty.lastSeen}</p>
            </div>
            
            
            
        </div>
    )
}