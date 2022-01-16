import { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
 
    const {
        formData, onChange, handleResetForm, isValidEmail, name, email, password1, password2 
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });


    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }
    return (
        <div>
            <h1>Register Page</h1>

            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    placeholder="Name"
                    value={ name }
                    name='name'
                    onChange={ onChange }
                    className={`${ name.trim().length <= 0 && 'has-error'}`}
                />

                { name.trim().length <= 0 && <span>Este campo es necesario</span>}
                
                <input 
                    type="email"
                    placeholder="Email"
                    value={ email }
                    name='email'
                    onChange={ onChange }
                    className={`${ !isValidEmail(email) && 'has-error'}`}
                />
                { !isValidEmail(email) && <span>Email no es valido</span>}
                <input 
                    type="password"
                    placeholder="Password"
                    value={ password1 }
                    name='password1'
                    onChange={ onChange  }
                />
                { password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>la contrasena tiene que tener 6 caracteres</span>}

                <input 
                    type="password"
                    placeholder="Repeat Password"
                    value={ password2 }
                    name='password2'
                    onChange={ onChange }
                />
                { password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                { password2.trim().length > 0 && password1 !== password2 && <span>las contrasenas deben ser iguales</span>}


                <button type="submit">Create</button>
                <button onClick={ handleResetForm }>Reset</button>
            </form>
        </div>
    )
}
