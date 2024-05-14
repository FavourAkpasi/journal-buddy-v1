import { FormEvent, useEffect, useState } from "react";
import {
  AuthForm,
  AuthInput,
  AuthContainer,
  AuthButton,
  PrivacyBox,
} from "./style";
import { COLORS } from "../../utils/colors";
import { Container } from "../Home/style";
import Logo from "../../components/Logo/Logo";
import { FaApple, FaEnvelope, FaGooglePlay, FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { LoginType } from "../../type/auth";
import useAuth from "../../Store/useAuth";

const Login = () => {
  const { loading, login, user } = useAuth((state) => state);
  const navigate = useNavigate();

  const [forgot, setForgot] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForgot = () => {
    setForgot(!forgot);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const payload: LoginType = {
      email,
      password,
    };
    login(payload);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return forgot ? (
    <AuthContainer style={Container}>
      <Logo />
      <h1>Reset Password</h1>
      <p>Secure and Fun Journal Experience</p>
      <AuthForm>
        <AuthInput
          $color={COLORS.mediumOrange}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </AuthForm>
      <AuthButton
        disabled={loading || email === "" || password === ""}
        $color={COLORS.white}
        $bgColor={COLORS.mediumOrange}
        onClick={()=>console.log("Reset Password")}
      >
        {loading ? <FaSpinner /> : "Reset Password"}
      </AuthButton>
      <p>
        Remembered? <span onClick={handleForgot}>Sign In</span>
      </p>
      <PrivacyBox>
        <p>
          Need Help? <span>Contact Us</span>
        </p>
        <p>Version 1.00</p>
      </PrivacyBox>
    </AuthContainer>
  ) : (
    <AuthContainer style={Container}>
      <Logo />
      <h1>Sign In.</h1>
      <p>Secure and Fun Journal Experience</p>
      <AuthForm onSubmit={handleLogin}>
        <AuthInput
          $color={COLORS.mediumOrange}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput
          style={{ marginBottom: "-1.5rem" }}
          $color={COLORS.mediumOrange}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </AuthForm>
      <span className="forgot-password" onClick={handleForgot}>
        Forgot password?
      </span>
      <AuthButton
        $color={COLORS.white}
        $bgColor={COLORS.mediumOrange}
        onClick={handleLogin}
        type="submit"
      >
        {loading ? <FaSpinner />  : <FaEnvelope /> }
        Login with Email
      </AuthButton>
      <p>Even Faster</p>
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
        First Time?{" "}
        <span onClick={() => navigate("/register")}>Create an account</span>
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

export default Login;
