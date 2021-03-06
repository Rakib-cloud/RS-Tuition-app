import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link,  useLocation,  useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
   
   

    //reset password 

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    if(user){
        navigate(from, { replace: true });
    }
     //if loading 
     if (loading || sending) {
        return <Loading></Loading>
    }

    //reset password function 

    const resetPassword = async () => {
        const email = emailRef.current.value;
     
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
           
        
        
    }
    return (
        <div className='container w-50 mx-auto'>
           <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button className='common-btn' variant=" mx-auto w-50 d-block mb-2" type="submit" >
                    Login
                </Button>
            </Form>
            <p>New to My tuition world? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;