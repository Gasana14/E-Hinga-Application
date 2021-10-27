/* eslint-disable react-hooks/rules-of-hooks */
// import loginBackgroundImage from '../images/login.png'
import loginImage from '../images/registerbg.png'
import React, {useState}  from 'react';
import { Image } from 'antd';

import { Input } from 'antd';
import { Button } from 'antd';
import '../../index.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
// import Link from 'antd/lib/typography/Link';
// eslint-disable-next-line react-hooks/rules-of-hooks
// import Login from './login'
// import { frontEndEnums } from '../utils/enum';




export default function registerPage () {

    const [password,setPassword] = useState('')
    const [message, setMessage] = useState('')
    const repeatPassword =(value:any)=>{
        setPassword(value)
        if(password.length>10){
            setMessage('Value must be less than 10')
        }else{
            setMessage('')
        }
    }

    return(
        <>
        <div className="w-full h-screen bg-gray-200">



            <div className="h-full w-full ">
            <div className="h-screen md:ml-52 max-w-6xl md:flex ">
            <div className="md:w-1/2 h-44 md:h-2/3 bg-green-100 md:mt-32 shadow-md">
            <Image preview={false} src={loginImage}></Image>
            </div>
            <div className="md:w-1/2 h-screen md:h-2/3 bg-white md:mt-32 shadow-md">
                <h1 className="text-center py-4 font-mono text-2xl font-bold">Sign up To E-Hinga</h1>
                <div className="h-20 w-1/2 ml-36 mt-2">
                <h5 className="text-center font-medium font-mono text-xl mb-2">Names</h5>
                <div className="w-full h-9">
                <Input   style={{ border: '1px solid rgb(135, 135, 135)' }} className="w-full h-full" size="large" placeholder=" Enter Full names" />

                </div>
                </div>
                <div className="h-20 w-1/2 ml-36 mt-2">
                <h5 className="text-center font-medium font-mono text-xl mb-2">Telephone</h5>
                <div className="w-full h-9">
                <Input style={{ border: '1px solid rgb(135, 135, 135)' }} className="w-full h-full" size="large" placeholder="Enter Telephone" />
                </div>
                </div>
                <div className="h-20 w-1/2 ml-36 mt-2">
                <h5 className="text-center font-medium font-mono text-xl mb-2">Password {message}</h5>
                <div className="w-full h-9">
                <Input.Password value={password} onChange={(event)=>repeatPassword(event.target.value)} style={{ border: '1px solid rgb(135, 135, 135)' }} className="w-full h-full" size="large" placeholder="Enter Password" />
                </div>
                </div>
                <div className="h-16 w-1/2 ml-36 mt-2">
                <h5 className="text-center font-medium font-mono text-xl mb-2">Repeat Password</h5>
                <div className="w-full h-9">
                <Input.Password value={password} style={{ border: '1px solid rgb(135, 135, 135)' }} className="w-full h-full" size="large" placeholder="Enter Password" />
                </div>
                </div>
                <div className="h-16 w-2/3 ml-24">
                <div className="w-1/3 h-9 mt-7 ml-32">
                <Button type="primary" className="w-full h-full" size="large" shape="round">Sign up</Button>

                </div>
                {/* <Link href={frontEndEnums.LOGIN} className="ml-40 text-sm">Back To Login</Link> */}

                </div>

             </div>
            </div>

            </div>

        </div>
        </>
    )
}

