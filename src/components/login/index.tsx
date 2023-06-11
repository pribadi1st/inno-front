import {Link} from 'react-router-dom'
import { useState } from 'react'
import service from './service'
import { useDispatch } from 'react-redux'
import { setUser, setToken } from '../../store/action'
import { useSelector } from 'react-redux'

const Login = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginLoading, setLoginLoading] = useState(false)
    const [errorStatus, setErrorStatus] = useState('')
    const emailChange = (e: any) => {
        setEmail(e.target.value)
    }

    const passwordChange = (e: any)  => {
        setPassword(e.target.value)
    }

    const dispatch = useDispatch()
    const hasEmailOrPasswordError = (message: any) => {
        if(!!message.email || !!message.password) return true
        return false
    }

    const login = async() => {
        setLoginLoading(true)
        const { data: {status,data, message } } = await service.fetchLogin(email, password)
        console.log(data, message, status)
        if(status !== 200) {            
            if(hasEmailOrPasswordError(message))
                setErrorStatus(message?.email[0] ?? message?.password[0])
            else
                setErrorStatus(message)
        }else {
            dispatch(setUser(data.user))
        }
        setLoginLoading(false)
    }

    return (
        <div className="flex justify-center w-full items-center align-center h-[100vh]">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-[500px]">
                {user}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="email"
                        onChange={emailChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"
                        placeholder="******************"
                        onChange={passwordChange}
                    />
                    <p className="text-red-500 text-xs italic">{errorStatus}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-[5px]">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={login}>
                            Sign In
                        </button>
                        <Link to={'/register'}>
                            <button className="text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Register
                            </button>
                        </Link>
                    </div>
                    
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
        </div>
    )
}

export default Login