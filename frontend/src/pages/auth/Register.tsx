import { FaApple, FaEnvelope, FaGooglePlay } from "react-icons/fa";
import Logo from "../../components/Logo/Logo";
import { COLORS } from "../../utils/colors";
import { Container } from "../Home/style";
import {
  AuthButton,
  AuthContainer,
  AuthForm,
  AuthInput,
  PrivacyBox,
} from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [emailSignUp, setEmailSignUp] = useState(false);

  const handleEmailSignUp = () => {
    setEmailSignUp(!emailSignUp);
  };

  const navigate = useNavigate();
  return emailSignUp ? (
    <AuthContainer style={Container}>
      <Logo />
      <h1>Create an account.</h1>
      <p>Secure and Fun Journal Experience</p>
      <AuthForm>
        <AuthInput
          $color={COLORS.mediumOrange}
          type="email"
          placeholder="Email"
        />
        <AuthInput
          $color={COLORS.mediumOrange}
          type="password"
          placeholder="Password"
        />
        <AuthInput
          $color={COLORS.mediumOrange}
          type="password"
          placeholder="Confirm Password"
        />
      </AuthForm>
      <AuthButton
        $color={COLORS.white}
        $bgColor={COLORS.mediumOrange}
        onClick={() => console.log("Create Account with Email")}
      >
        Create Account
      </AuthButton>
      <p>
        Or <span onClick={handleEmailSignUp}>Sign in with Apple or Google</span>
      </p>
      <PrivacyBox>
        <p>
          Have an account? <span>Log in</span>
        </p>
      </PrivacyBox>
      <PrivacyBox>
        <p>
          By signing in, you agree to our <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>
        </p>
        <p>Version 1.00</p>
      </PrivacyBox>
    </AuthContainer>
  ) : (
    <AuthContainer style={Container}>
      <Logo />
      <h1>Create an account.</h1>
      <p>Secure and Fun Journal Experience</p>
      <AuthButton
        $color={COLORS.white}
        $bgColor={COLORS.mediumOrange}
        onClick={() => handleEmailSignUp()}
      >
        <FaEnvelope />
        Sign Up with Email
      </AuthButton>
      <AuthButton
        $color={COLORS.white}
        $bgColor={COLORS.black}
        onClick={() => console.log("Register with Apple")}
      >
        <FaApple />
        Continue with Apple
      </AuthButton>
      <AuthButton
        $color={COLORS.black}
        $bgColor={COLORS.white}
        onClick={() => console.log("Register with Google")}
      >
        <FaGooglePlay />
        Continue with Google
      </AuthButton>
      <p>
        Have an account? <span onClick={() => navigate("/login")} >Log In</span>
      </p>
      <PrivacyBox>
        <p>
          By signing in, you agree to our <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>
        </p>
        <p>Version 1.00</p>
      </PrivacyBox>
    </AuthContainer>
  );
};

export default Register;
