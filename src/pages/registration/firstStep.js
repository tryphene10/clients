import React from "react";
import Navbar from "../../components/Navbar";
import "./registration.css"

class FirstStep extends React.Component {


    render(){
        return (
            <>
              <div className="wrapper fadeInDown">
  <div id="formContent">
    
    <h2 className="active"> Sign In </h2>
    <h2 className="inactive underlineHover">Sign Up </h2>

  
    <div className="fadeIn first">
      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
    </div>

    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>

  
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div> 
            </>
    
        )
    }
}

/* const FirstStep = () =>{


    return (
        <>
    
            <div classNameName="login-root">
    <div classNameName="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
      <div classNameName="loginbackground box-background--white padding-top--64">
        <div classNameName="loginbackground-gridContainer">
          <div classNameName="box-root flex-flex" style="grid-area: top / start / 8 / end;">
            <div classNameName="box-root" style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;">
            </div>
          </div>
          <div classNameName="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
            <div classNameName="box-root box-divider--light-all-2 animationLeftRight tans3s" style="flex-grow: 1;"></div>
          </div>
          <div classNameName="box-root flex-flex" style="grid-area: 6 / start / auto / 2;">
            <div classNameName="box-root box-background--blue800" style="flex-grow: 1;"></div>
          </div>
          <div classNameName="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
            <div classNameName="box-root box-background--blue animationLeftRight" style="flex-grow: 1;"></div>
          </div>
          <div classNameName="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
            <div classNameName="box-root box-background--gray100 animationLeftRight tans3s" style="flex-grow: 1;"></div>
          </div>
          <div classNameName="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
            <div classNameName="box-root box-background--cyan200 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div classNameName="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
            <div classNameName="box-root box-background--blue animationRightLeft" style="flex-grow: 1;"></div>
          </div>
          <div classNameName="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
            <div classNameName="box-root box-background--gray100 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div classNameName="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
            <div classNameName="box-root box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;"></div>
          </div>
        </div>
      </div>
      <div classNameName="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
        <div classNameName="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Stackfindover</a></h1>
        </div>
        <div classNameName="formbg-outer">
          <div classNameName="formbg">
            <div classNameName="formbg-inner padding-horizontal--48">
              <span classNameName="padding-bottom--15">Sign in to your account</span>
              <form id="stripe-login">
                <div classNameName="field padding-bottom--24">
                  <label for="email">Email</label>
                  <input type="email" name="email" />
                </div>
                <div classNameName="field padding-bottom--24">
                  <div classNameName="grid--50-50">
                    <label for="password">Password</label>
                    <div classNameName="reset-pass">
                      <a href="#">Forgot your password?</a>
                    </div>
                  </div>
                  <input type="password" name="password" />
                </div>
                <div classNameName="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label for="checkbox">
                    <input type="checkbox" name="checkbox"/> Stay signed in for a week
                  </label>
                </div>
                <div classNameName="field padding-bottom--24">
                  <input type="submit" name="submit" value="Continue"/>
                </div>
                <div classNameName="field">
                  <a classNameName="ssolink" href="#">Use single sign-on (Google) instead</a>
                </div>
              </form>
            </div>
          </div>
          <div classNameName="footer-link padding-top--24">
            <span>Don't have an account? <a href="">Sign up</a></span>
            <div classNameName="listing padding-top--24 padding-bottom--24 flex-flex center-center">
              <span><a href="#">© Stackfindover</a></span>
              <span><a href="#">Contact</a></span>
              <span><a href="#">Privacy & terms</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  

        </>

    )
} */

export default FirstStep;