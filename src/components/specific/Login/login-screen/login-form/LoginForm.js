import React, { useState, useEffect, useContext, useRef } from "react";
import "../../../../../App.scss";
import "./LoginForm.scss";
import LogoSVG from "../../../../global/logo/LogoSVG";
export default function LoginForm(props) {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const usernameLabelContainerRef = useRef();
    const passwordLabelContainerRef = useRef();

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

  return (
    <>
      <div className="login_form_wrapper">
        <div className="login_form_main">
          <div className="login_form_header">
            <div className="close_button">
              <div class="close_button_icon">
              <svg viewBox="0 0 24 24"><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg>
              </div>
            </div>
            <div className="logo_area">
              <div className="logo_image">
               <LogoSVG fillColor='rgb(29, 155, 240)' />
              </div>
            </div>
            <div class='empty_space'></div>
          </div>
          <div className="login_form_body">
              <div class='maxwidth'>
            <h2>Sign in to Twitter</h2>

            <div className='login_form'>
                
                <div className='login_form_input_wrap input_label_selected'>
                    <div class='login_form_input_label'
                    ref={usernameLabelContainerRef}
                    onClick={handleUsernameInputOnFocus}>
                        <span>Username or email</span>
                    </div>
                <input type='text' className="login_input 
                login_form_input_username" onFocus={handleUsernameInputOnFocus} ref={usernameRef} placeholder='' />
                </div>
                
                <div className='login_form_input_wrap input_label_selected'>
                    <div class='login_form_input_label'
                    ref={passwordLabelContainerRef}
                    onClick={handlePasswordInputOnFocus}>
                        <span>Password</span>
                    </div>
                <input type='password' className="login_input 
                login_form_input_password" onFocus={handlePasswordInputOnFocus} ref={passwordRef} placeholder='' />
                </div>

                <div class='login_form_login_button'>
                    <button className='login_button'>Log in</button>
                </div>

                <div class='login_form_login_button'>
                    <button className='login_button forgot_button'>Forgot password?</button>
                </div>

                <div class='login_cant_remember'>
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
