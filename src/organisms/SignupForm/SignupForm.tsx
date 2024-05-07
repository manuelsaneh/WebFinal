import { useState } from "react";
import { useFormik } from "formik";
import { formSchema } from "../../formSchema";
import CustomInput from "../../atoms/CustomInput/CustomInput";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../utils/redux/hooks/hooks";
import axios from "axios";
import Loader from "../../atoms/Loader/Loader";
import { setToken } from "../../utils/redux/slices/authSlice";
import "./signup-form.css";

const signup = axios.create({
  baseURL: "https://backend-practice.euriskomobility.me",
  headers: {
    "Content-Type": "application/json",
  },
});

const SignupForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (
    values: { email: string; password: string },
    actions: { resetForm: () => void }
  ) => {
    try {
      setLoading(true);
      const result = await signup.post("/signup", {
        email: values.email,
        password: values.password,
      });
      if (result.status === 201) {
        const token = result.data.accessToken;
        alert(result.data.message);
        dispatch(setToken(token));
        localStorage.setItem("token", token);
        navigate("/home");
      } else if (result.status === 400) {
        alert("User already exists");
      } else {
        alert("Server Error, Try Again");
      }
    } catch (error) {
      window.location.reload();
    } finally {
      setLoading(false);
    }
    actions.resetForm();
  };

  const {
    values,
    handleBlur,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="form">
      <div className="input-container">
        <CustomInput
          label="Create Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          type="email"
          placeholder="Enter your email"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
      </div>
      <div className="input-container">
        <CustomInput
          label="Create Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          type="password"
          placeholder="Enter your password"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
      </div>
      <div className="btn-container">
        {loading ? (
          <Loader />
        ) : (
          <button disabled={isSubmitting} type="submit" className="btn-signup">
            Signup
          </button>
        )}
      </div>
    </form>
  );
};

export default SignupForm;
