import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../ContextApi/ContextApi';

const Login = () => {
    // const user = useContext(AuthProvider)
    // console.log(user)

    const {register,handleSubmit,formState:{errors}} = useForm();

    const {loginWithForm,googleLogin} = useContext(AuthProvider)

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(data=>{
            const user = data.user;
            console.log(user)
        }).catch(err=>{
            toast.error(err.message)
        })
    }

    const onSubmit=data=>{
       const email = data.email;
       const password = data.password
       console.log(email,password)
       loginWithForm(email,password)
       .then(data=>{
        const user = data.user;
        console.log(user);
       })
       .catch(err=>{
        toast.error(err.message)
       })
    }

    return (
        <div className='w-8/12 lg:w-1/4 mx-auto my-20 rounded-lg shadow-2xl p-10'>
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                    {...register("email")}
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                    {...register("password")}
                        id="password1"
                        type="password"
                        required={true}
                    />
                </div>

                <Button type="submit">
                    Submit
                </Button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{' '}
                    <Link to="/register">
                    <span className='text-blue-700 border-b border-blue-700'>Create a account</span>
                    </Link>
                </div>
            </form>

            <div className='flex flex-col gap-4 my-4'>
                <hr />
                <Button onClick={handleGoogleLogin}>
                    Signing With Google
                </Button>
            </div>
        </div>

    );
};

export default Login;