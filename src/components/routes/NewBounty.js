import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NewBounty() {

    const navigate = useNavigate()
    const {errorMessage, setErrorMessage} = useState('')
    const [formData, setFormData] = useState({
        name: '',
        wantedFor: '',
        client: '',
        ship: '',
        reward: 0,
        lastSeen: ''
    })

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            // post to backend api.
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/bounty`, formData)
            // navigate back to /bounties to see new bounty.
            navigate('/bounties') 

        } catch(err) {
            console.warn(err)
            if ( err.response) {
                setErrorMessage(err.response.data.message)
            }
        }

    }

    return (
        <div>
            <h1>New Bounty</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name' >NAME: </label>
                    <input 
                    type='text'
                    id='name'
                    value={formData.name}
                    placeholder='Target name...'
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='wantedFor' >WANTED FOR: </label>
                    <input 
                    type='text'
                    id='wantedFor'
                    value={formData.wantedFor}
                    placeholder='Wanted for...'
                    onChange={e => setFormData({...formData, wantedFor: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='client' >CLIENT: </label>
                    <input 
                    type='text'
                    id='client'
                    value={formData.client}
                    placeholder='Client'
                    onChange={e => setFormData({...formData, client: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='reward' >REWARD: </label>
                    <input 
                    type='number'
                    id='reward'
                    value={formData.reward}
                    onChange={e => setFormData({...formData, reward: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='lastSeen' >LAST SEEN: </label>
                    <input 
                    type='text'
                    id='lastSeen'
                    value={formData.lastSeen}
                    placeholder='Last seen at...'
                    onChange={e => setFormData({...formData, lastSeen: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='ship' >Ship</label>
                    <input 
                    type='text'
                    id='ship'
                    value={formData.ship}
                    placeholder='Target ship...'
                    onChange={e => setFormData({...formData, ship: e.target.value})}
                    />
                </div>

                <button type="submit">List Bounty</button>
            </form>
        </div>
    )
}