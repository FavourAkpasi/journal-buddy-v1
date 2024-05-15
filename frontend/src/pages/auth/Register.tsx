import { FormEvent, useEffect, useState } from "react";
import { FaApple, FaEnvelope, FaGooglePlay, FaSpinner } from "react-icons/fa";
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
import { useNavigate } from "react-router-dom";
import { RegisterType } from "../../type/auth";
import useAuth from "../../Store/useAuth";

const Register = () => {
  const {loading, register, user} = useAuth((state) => state);
  const navigate = useNavigate();

  const [emailSignUp, setEmailSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailSignUp = () => {
    setEmailSignUp(!emailSignUp);
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    const payload: RegisterType = {
      name,
      email,
      password,
    };
    register(payload);
  };
  

  useEffect(() => {
    if (user) {
      navigate("/login");
    }
  }, [user, navigate]);


  return emailSignUp ? (
    <AuthContainer style={Container}>
      <Logo />
      <h1>Create an account.</h1>
      <p>Secure and Fun Journal Experience</p>
      <AuthForm onSubmit={handleRegister}>
        <AuthInput
          $color={COLORS.mediumOrange}
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <AuthInput
          $color={COLORS.mediumOrange}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput
          $color={COLORS.mediumOrange}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </AuthForm>
      <AuthButton
        disabled={loading || email === "" || password === "" || name === ""}
        $color={COLORS.white}
        $bgColor={COLORS.mediumOrange}
        type="submit"
        onClick={handleRegister}
      >
        {loading ? <FaSpinner /> : <FaEnvelope />}
        Create Account
      </AuthButton>
      <p>
        Or <span onClick={handleEmailSignUp}>Sign in with Apple or Google</span>
      </p>
      <PrivacyBox>
        <p>
          Have an account?{" "}
          <span onClick={() => navigate("/login")}>Log in</span>
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
        Have an account? <span onClick={() => navigate("/login")}>Log In</span>
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
