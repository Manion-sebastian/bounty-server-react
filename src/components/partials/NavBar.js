import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <Link to={'/'}>HOME</Link>{"      |     "}
            <Link to={'/bounties'}>BOUNTIES</Link>{" | "}
            <Link to={'/bounties/new'}>CREATE</Link>
        </div>
    )
}