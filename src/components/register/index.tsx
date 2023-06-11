import {Link} from 'react-router-dom'
import {useState} from 'react'
import service from './service'
interface IRegisterForm {
    email: string;
    password: string;
    name: string;
}
const Register = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [errorStatus, setErrorStatus] = useState('')
    const handleName = (e:any) => {
        setName(e.target.value)
    }
    const handleEmail = (e:any) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e:any) => {
        setPassword(e.target.value)
    }

    const hasEmailOrPasswordError = (message: any) => {
        if(!!message.email || !!message.password) return true
        return false
    }

    const register = async() => {
        const { data: {status,data, message } } = await service.postRegister(email, password, name)
        if(status !== 200) {            
            if(hasEmailOrPasswordError(message))
                setErrorStatus(message?.email[0] ?? message?.password[0])
            else
                setErrorStatus(message)
        }
    }
    return (
        <div className="flex justify-center w-full items-center align-center h-[100vh]">
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-[500px]">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Full name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username" 
                        onChange={handleName}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        onChange={handleEmail}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        onChange={handlePassword}
                    />
                    <p className="text-red-500 text-xs italic">{errorStatus}</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-[5px]">
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={register}
                        >
                            Register
                        </button>
                        <Link to={'/login'}>
                            <button className="text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Login
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

export default Register