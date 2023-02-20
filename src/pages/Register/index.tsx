import { useRef, useState } from 'react';

import { Background } from "../../components/Background";
import { InputItem } from "../../components/InputItem";
import { Description, Title } from "../../components/Texts";
import { Form } from '../../components/Form';
import { Wrapper } from './styled';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

import mainImage from '../../assets/image-2.jpg';
import logo from '../../assets/compass-logo.png';
import { API_LATAM } from '../../utils/api';
import { errors } from '../../utils/errors';
import { AxiosResponse } from 'axios';
import { Toast, Response } from '../../components/Toast';
import { Transition } from 'react-transition-group';

export const emailRegex = '[A-Za-z0-9\\._-]+@[A-Za-z0-9]+\\..(\\.[A-Za-z]+)*';
const noNumbers = /^([^0-9]*)$/;

export default function Register() {

   const nodeRef2 = useRef(null);
   const navigate = useNavigate();

   const firstName = useRef<HTMLInputElement>(null);
   const lastName = useRef<HTMLInputElement>(null);
   const birthDate = useRef<HTMLInputElement>(null);
   const country = useRef<HTMLInputElement>(null);
   const city = useRef<HTMLInputElement>(null);
   const email = useRef<HTMLInputElement>(null);
   const password = useRef<HTMLInputElement>(null);
   const confirmPassword = useRef<HTMLInputElement>(null);

   const [error, setError] = useState({
      firstName: false,
      lastName: false,
      birthDate: false,
      country: false,
      city: false,
      email: false,
      password: false,
      confirmPassword: false,
   });

   const [toast, setToast] = useState<Response>({
      active: false,
      error: false,
      success: false,
      loading: false,
      message: '',
   });


   const handleSubmitForm = async (e: UIEvent) => {
      e.preventDefault();

      setToast(prev => {
         return {
            ...prev,
            active: true,
            loading: true,
            message: 'Wait a sec... Registering you 😉'
         }
      });

      let hasErrors = validateForm();

      if (hasErrors) {
         setToast(prev => {
            return {
               ...prev,
               message: 'Please fill all fields correctly',
               error: true,
               loading: false,
            }
         });
         return;
      }

      setTimeout(async () => {
         const response: AxiosResponse | any = await API_LATAM.post('/users/sign-up', {
            firstName: firstName.current?.value,
            lastName: lastName.current?.value,
            birthDate: birthDate.current?.value,
            city: city.current?.value,
            country: country.current?.value,
            email: email.current?.value,
            password: password.current?.value,
            confirmPassword: confirmPassword.current?.value,
         }).catch((e: any) => {
            setError(prev => {
               return {
                  ...prev,
                  email: true
               }
            });
            return errors(e.response.status, 'Register');
         });

         if (response.status === 201) {
            setToast(prev => {
               return {
                  ...prev,
                  loading: false,
                  success: true,
                  message: errors(response.status, 'Register')
               }
            });

            setTimeout(() => {
               navigate('/Login');
            }, 1000)

            return;
         }

         setToast(prev => {
            return {
               ...prev,
               loading: false,
               error: true,
               message: response
            }
         })

      }, 1500);

   }

   const validateForm = () => {

      let errorValue: number = 0;

      let currentYear: number = new Date().getFullYear();
      let inputedYear: number = +String(birthDate.current?.value).slice(0, -6);

      if (String(firstName.current?.value).length < 3 || !String(firstName.current?.value).match(noNumbers)) {
         setError(prev => {
            return {
               ...prev,
               firstName: true
            }
         });
         errorValue++
      }

      if (String(lastName.current?.value).length < 3 || !String(lastName.current?.value).match(noNumbers)) {
         setError(prev => {
            return {
               ...prev,
               lastName: true
            }
         });
         errorValue++
      }

      if (String(birthDate.current?.value).length < 3 || (inputedYear >= currentYear) || !(inputedYear <= currentYear - 18)) {
         setError(prev => {
            return {
               ...prev,
               birthDate: true
            }
         });
         errorValue++
      }

      if (String(country.current?.value).length < 3 || !String(country.current?.value).match(noNumbers)) {
         setError(prev => {
            return {
               ...prev,
               country: true
            }
         });
         errorValue++
      }

      if (String(city.current?.value).length < 3 || !String(city.current?.value).match(noNumbers)) {
         setError(prev => {
            return {
               ...prev,
               city: true
            }
         });
         errorValue++
      }

      if (String(email.current?.value).length < 3 || !String(email.current?.value).match(emailRegex)) {
         setError(prev => {
            return {
               ...prev,
               email: true
            }
         });
         errorValue++
      }

      if (String(password.current?.value).length < 6) {
         setError(prev => {
            return {
               ...prev,
               password: true
            }
         });
         errorValue++
      }


      if (String(confirmPassword.current?.value) !== String(password.current?.value) || String(confirmPassword.current?.value).length < 6) {
         setError(prev => {
            return {
               ...prev,
               confirmPassword: true
            }
         });
         errorValue++
      }

      return errorValue;
   }

   return (
      <Background
         currentPage='Register'
         background={mainImage}
         logo={logo}
      >
         <Wrapper>
            <Title>Welcome,</Title>
            <Description style={{ marginBottom: 30 }}>Please, register to continue</Description>
            <Form>
               <InputItem
                  type="text"
                  reference={firstName}
                  title="First name"
                  placeholder="Your first name"
                  id="yourfirstName"
                  error={error.firstName}
                  onChange={() => {
                     setError(prev => {
                        return {
                           ...prev,
                           firstName: false
                        }
                     });
                  }}
               />
               <InputItem
                  type="text"
                  reference={lastName}
                  title="Last name"
                  placeholder="Your last name"
                  id="yourlastName"
                  error={error.lastName}
                  onChange={() => {
                     setError(prev => {
                        return {
                           ...prev,
                           lastName: false
                        }
                     });
                  }}
               />
               <InputItem
                  type={'date'}
                  reference={birthDate}
                  title="Birth date"
                  placeholder="MM/DD/YYYY"
                  id="birthDate"
                  style={{ appearance: 'none' }}
                  error={error.birthDate}
                  onChange={() => {
                     setError(prev => {
                        return {
                           ...prev,
                           birthDate: false
                        }
                     });
                  }}
               />
               <InputItem
                  type="text"
                  reference={country}
                  title="Country"
                  placeholder="Your Country"
                  id="yourcountry"
                  error={error.country}
                  onChange={() => {
                     setError(prev => {
                        return {
                           ...prev,
                           country: false
                        }
                     });
                  }}
               />
               <InputItem
                  type="text"
                  reference={city}
                  title="City"
                  placeholder="Your City"
                  id="yourcity"
                  error={error.city}
                  onChange={() => {
                     setError(prev => {
                        return {
                           ...prev,
                           city: false
                        }
                     });
                  }}
               />
               <InputItem
                  type="email"
                  reference={email}
                  title="e-mail"
                  placeholder="A valid e-mail here"
                  id="youremail"
                  error={error.email}
                  onChange={() => {
                     setError(prev => {
                        return {
                           ...prev,
                           email: false
                        }
                     });
                  }}
               />
               <InputItem
                  type="password"
                  reference={password}
                  title="password"
                  placeholder="Your password"
                  id="password"
                  error={error.password}
                  onChange={() => {
                     setError(prev => {
                        return {
                           ...prev,
                           password: false
                        }
                     });
                  }}
               />
               <InputItem
                  type="password"
                  reference={confirmPassword}
                  title="password"
                  placeholder="Confirm your password"
                  id="passwordRep"
                  error={error.confirmPassword}
                  onChange={() => {
                     setError(prev => {
                        return {
                           ...prev,
                           confirmPassword: false
                        }
                     });
                  }}
               />
               <Button
                  disable={toast.loading}
                  title={'Register Now'}
                  onPress={handleSubmitForm}
                  loading={toast.loading}
               />
               <Link to={'/Login'} style={{ textDecoration: 'none', marginTop: 10 }}><Description>If you already have an account, click here!</Description></Link>
            </Form>
         </Wrapper>
         <Transition
            in={toast.active}
            nodeRef={nodeRef2}
            timeout={2000}
            mountOnEnter
            unmountOnExit
         >
            {
               state => (
                  <Toast
                     Noderef={nodeRef2}
                     response={toast}
                     onClose={setToast}
                     active={
                        state === 'entering' ?
                           true :
                           state === 'entered' ?
                              true : false
                     }
                  />
               )
            }
         </Transition>
      </Background>
   )
}