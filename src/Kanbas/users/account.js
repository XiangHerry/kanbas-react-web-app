import * as client from "./client";
import { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
function Account() {
    const [account, setAccount] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };


    useEffect(() => {
        if(id){
            findUserById(id);
        }else{
            fetchAccount();
        }
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input value={account.password}
                           onChange={(e) => setAccount({ ...account,
                               password: e.target.value })}/>
                    <input value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                               firstName: e.target.value })}/>
                    <input value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                               lastName: e.target.value })}/>
                    <input value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                               dob: e.target.value })}/>
                    <input value={account.email}
                           onChange={(e) => setAccount({ ...account,
                               email: e.target.value })}/>
                    <select onChange={(e) => setAccount({ ...account,
                        role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button className="btn btn-primary w-50" onClick={save}>
                        Save
                    </button>
                    <button className="btn btn-info w-50" onClick={signout}>
                        Signout
                    </button>
                    <Link to="/project/admin/users" className="btn btn-warning w-50">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}
export default Account;