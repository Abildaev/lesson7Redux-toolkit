import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../../store/usersSlice";
import User from "../../components/User";


export default function UsersPage() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    const {users} = useSelector(state => state.usersReducer)

    const addUserFn = () => {
        dispatch(addUser(value));
        setValue("")
    }

    return (
        <>
            <input
                value={value}
                type="text"
                placeholder="username"
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={addUserFn}>add user</button>

            <ul>
                {
                    users.map(user => <User userInfo={user}/>)
                }
            </ul>
        </>
    )
}