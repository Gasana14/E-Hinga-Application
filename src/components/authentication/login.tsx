// import loginBackgroundImage from '../images/login.png'
import loginImage from '../images/loginbg4.png'
import React from 'react';
import { Image } from 'antd';

import { Input } from 'antd';
import { Button } from 'antd';
import '../../index.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import Link from 'antd/lib/typography/Link';
import { frontEndEnums } from '../utils/enum';
// import { useForm } from "react-hook-form";
// import {LoginInterface} from '../utils/types'



export default function loginPage () {
    // const { register, handleSubmit,  formState: { errors } } = useForm(LoginInterface);
    return(
        <>
        <div className="w-full h-screen bg-gray-200">



            <div className="h-full w-full ">
            <div className="h-screen md:ml-52 max-w-6xl md:flex ">
            <div className="md:w-1/2 h-44 md:h-2/3 bg-green-100 md:mt-32 shadow-md">
            <Image preview={false} src={loginImage}></Image>
            </div>
            <div className="md:w-1/2 h-screen md:h-2/3 bg-white md:mt-32 shadow-md">
                <h1 className="text-center py-10 font-mono text-2xl font-bold">Welcome To E-Hinga</h1>
                <form>
                <div className="h-20 w-1/2 ml-36 mt-5">
                <h5 className="text-center font-medium font-mono text-xl mb-3">Telephone</h5>
                <div className="w-full h-10">
                <Input
                style={{ border: '1px solid rgb(135, 135, 135)' }}
                className="w-full h-full" size="large"
                placeholder=" +250 78...."
                />
                </div>
                </div>
                <div className="h-20 w-1/2 ml-36 mt-4">
                <h5 className="text-center font-medium font-mono text-xl mb-3">Password</h5>
                <div className="w-full h-10">
                <Input.Password style={{ border: '1px solid rgb(135, 135, 135)' }} className="w-full h-full" size="large" placeholder="**********" />
                <Link href="" className="float-right mr-2">forgot password</Link>




                </div>

                </div>
                </form>
                <div className="h-20 w-2/3 ml-24">
                <div className="w-1/3 h-11 mt-16 ml-32">
                <Button type="primary" className="w-full h-full" size="large" shape="round">Sign in</Button>
                </div>
                <Link href={frontEndEnums.REGISTER} className="ml-44 text-sm">Sign up</Link>

                </div>
             </div>
            </div>

            </div>

        </div>
        </>
    )
}

