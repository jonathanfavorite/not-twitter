import React, { useState, useEffect, useContext, useRef } from "react";
import "../../../../../App.scss";
import "./LoginForm.scss";
import LogoSVG from "../../../../global/logo/LogoSVG";
import Loading from "../../../../global/Loading/Loading";
import { SignedInUserContext } from "../../../../../contexts/SignedInUserDetailsContext";
import { useNavigate  } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
export default function LoginForm(props) {

  const signedInContext = useContext(SignedInUserContext);
  const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const usernameLabelContainerRef = useRef();
    const passwordLabelContainerRef = useRef();

    const [loginWarning, setLoginWarning] = useState(false);
    const [loginWarningText, setLoginWarningText] = useState("");
    const [loginText, setLoadingText] = useState("log in");
    const [loginLoading, setLoginLoading] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [returnedUser, setReturnedUser] = useState(null);
    const [clicked, setClicked] = useState(false);

    function handleUsernameInputOnFocus()
    {
        usernameLabelContainerRef.current.classList.add('input_label_selected');
        usernameRef.current.focus();
    }
    function handlePasswordInputOnFocus()
    {
        passwordLabelContainerRef.current.classList.add('input_label_selected');
        passwordRef.current.focus();
    }

    function handleLoginClick()
    {
      setClicked(true);
      handleLoginFetch();
    }

    const handleLoginFetch = async () => {
      setLoginLoading(true);
      const bodyParams = {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      }

      const formData = new FormData();
      formData.append('username', bodyParams.username);
      formData.append('password', bodyParams.password);

      //console.log(bodyParams);
        await fetch(`http://127.0.0.1/not_twitter_api/api/auth/?method=login`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.usernameNotFound)
            {
              setLoginWarning(true);
              setLoginWarningText("That username doesn't exist");
            }
            else
            {
              if(data.foundAccount)
              {
                setLoginWarning(false);
                setLoginWarningText("");
                setReturnedUser(data.response);
                setLoginSuccess(true);

                const myPerson = {
                          id: data.response.ID,
                          name: {
                              first: data.response.userDetails.firstname,
                              last: data.response.userDetails.lastname
                          },
                          social: {
                              email:data.response.email,
                              phone:data.response.userDetails.phone
                          },
                          details: {
                              username: `@${data.response.username}`,
                              profileImage: {
                                  thumb: `${data.response.userDetails.profileImage}`,
                                  medium: `${data.response.userDetails.profileImage}`,
                                  large: `${data.response.userDetails.profileImage}`
                              }
                          }
                }
                localStorage.setItem("user", JSON.stringify(myPerson));

                window.location.href='/';
               
              }
              else
              {
                setLoginWarning(true);
                setLoginWarningText("Username / password does not match");
              }
            }
        })
        .catch(error => {
            console.log(error);
        });
        setLoginLoading(false);
    };

    useEffect(() => {
      
      // if(clicked)
      // {
      //   handleLoginFetch();
      //   navigate('/');
      // }
      
    },[clicked]);

  return (
    <>
      <div className="login_form_wrapper">
        <div className="login_form_main">
          <div className="login_form_header">
            <div className="close_button">
              <div className="close_button_icon">
              <svg viewBox="0 0 24 24"><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg>
              </div>
            </div>
            <div className="logo_area">
              <div className="logo_image">
               <LogoSVG fillColor='rgb(29, 155, 240)' />
              </div>
            </div>
            <div className='empty_space'></div>
          </div>
          <div className="login_form_body">
              <div className='maxwidth'>
            <h2>Sign in to Twitter</h2>
            <div className={`login_warning${loginWarning ? ' login_warning_opacity' : ''}`}>
              <div className='login_warning_text'>{loginWarningText}</div>
            </div>
            <div className='login_form'>
                <div className='login_form_input_wrap input_label_selected'>
                    <div className='login_form_input_label'
                    ref={usernameLabelContainerRef}
                    onClick={handleUsernameInputOnFocus}>
                        <span>Username or email</span>
                    </div>
                <input type='text' className="login_input 
                login_form_input_username" onFocus={handleUsernameInputOnFocus} ref={usernameRef} placeholder='' />
                </div>
                
                <div className='login_form_input_wrap input_label_selected'>
                    <div className='login_form_input_label'
                    ref={passwordLabelContainerRef}
                    onClick={handlePasswordInputOnFocus}>
                        <span>Password</span>
                    </div>
                <input type='password' className="login_input 
                login_form_input_password" onFocus={handlePasswordInputOnFocus} ref={passwordRef} placeholder='' />
                </div>

                <div className='login_form_login_button'>
                    <button disabled={loginLoading} className='login_button' onClick={handleLoginClick}>
                      {loginLoading && <span className='login_loading'><Loading /></span> }
                      <span>{loginText}</span>
                      </button>
                </div>

                <div className='login_form_login_button'>
                    <button className='login_button forgot_button'>Forgot password?</button>
                </div>

                <div className='login_cant_remember'>
                    <span>Don't have an account? <a href='#'>Sign up</a></span>
                </div>
            
            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
