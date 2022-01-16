import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
/* import { MyTextInput } from '../components/MyTextInput'
import { MySelect } from '../components/MySelect';
import { MyCheckBox } from '../components/MyCheckBox';

 */
import { MyCheckBox, MySelect, MyTextInput } from '../components'
export const FormikAbstractation = () => {

    



    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ (values, {}) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                        firstName: Yup.string()
                                        .max(15, 'Debe de tener 15 caracteres o menos')
                                        .required('Requerido'),
                        lastName: Yup.string()
                                        .max(15, 'Debe de tener 15 caracteres o menos')
                                        .required('Requerido'),
                        email: Yup.string()
                                        .email('El correo no tiene un formato valido')
                                        .required('Requerido'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string()
                                    .notOneOf([ 'it-jr'], 'Esta opcion no es permitida.')
                                    .required('Requerido')
                })
                }
            >
                {
                    (formik) => (
                        <Form>

                            <MyTextInput 
                                label='First Name' 
                                name='firstName'
                                placeholder='First name'
                            />

                            <MyTextInput 
                                label='Last Name' 
                                name='lastName'
                                placeholder='Last name'
                            />
                          
                            <MyTextInput 
                                label='Email Adress' 
                                name='email'
                                placeholder='@gmail.com'
                                type='email'
                            />

                            <MySelect label="Job Type"  name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-sr">IT-Senior</option>
                                <option value="it-jr">IT-Junior</option>
                            </MySelect>


                           <MyCheckBox label="Termns & conditions" name="termns"/>
                            

                            <button
                                type="submit"
                            >Submit</button>
                        </Form>
                    )
                }
            </Formik>
            
        </div>
    )
}
