import {Link} from 'react-router-dom';
import './User.css';


const User = ({user}) => {
    return(
        <li class="list-group-item list-group-item-primary">
            <Link className="userLink" to={`/user/${user.login}`}>
                <span className='name'>{user.login}</span>
            </Link>
            
        </li>
    );
}

export default User;