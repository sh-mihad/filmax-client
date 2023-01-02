import { Button, FileInput, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../ContextApi/ContextApi';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {registerWithForm} = useContext(AuthProvider)

    const onSubmit = data => {
       const image = data.image[0]
       const email = data.email;
       const name = data.name;
       const password = data.password
       const user = {email,password,name}
       console.log(user);
        const formData = new FormData();
        formData.append('image', image)
        // console.log(data.image[0])
       fetch("https://api.imgbb.com/1/upload?key=2fbe1796a4bf3cd52ba5028ba7992a29",{
        method:"POST",
        body: formData
       }).then((response) => response.json())
       .then((result) => {
         if(result.success){
            registerWithForm(email,password)
            .then(data=>{
                const user = data.user;
                console.log(user)
            })
         }
       })
       .catch((error) => {
         console.error('Error:', error);
       });
    }

    return (
        <div className='w-8/12 lg:w-1/4 mx-auto my-20 rounded-lg shadow-2xl p-10'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label

                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        {...register("name")}

                        type="text"
                        placeholder="Insert Your Full Name"
                        required={true}
                    />
                </div>
                <div id="fileUpload">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="file"
                            value="Upload Your Photo"
                        />
                    </div>
                    <FileInput
                        id="file" 

                        // type="file"
                        {...register("image")}
                    />
                </div>
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
                    Already have a account?{' '}
                    <Link to="/login" >
                        <span className='text-blue-700 border-b border-blue-700'>Login</span>
                    </Link>
                </div>
            </form>

            <div className='flex flex-col gap-4 my-4'>
                <hr />
                <Button type="submit">
                    Signing With Google
                </Button>
            </div>
        </div>
    );
};

export default Register;