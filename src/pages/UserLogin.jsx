// Libraries
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserContext } from "../../UserContext";

// Components
import logo from "../assets/logo.png";
import index from "../assets/Index.jpg";
import Loader from "../components/Loader";
import { EyeIcon, EyeOffIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import { useToast } from "@/components/ui/use-toast";

function UserLogin() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (user) {
    if (user.role === "Student") {
      navigate("/student/dashboard");
    } else if (user.role === "Manager") {
      navigate("/manager/dashboard");
    } else if (user.role === "Accountant") {
      navigate("/accountant/dashboard");
    } else if (user.role === "Admin") {
      navigate("/admin/dashboard");
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required*"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Required*"),
    }),
    onSubmit: async (values) => {
      if (values.email === "" || values.password === "") {
        toast({
          variant: "destructive",
          title: "Please fill all fields !!",
        });
      } else {
        try {
          await axios
            .post(
              "/login",
              {
                email: values.email,
                password: values.password,
              },
              { withCredentials: true }
            )
            .then((res) => {
              if (res.status === 201) {
                setUser(res.data);
                if (user) {
                  if (user.role === "Student") {
                    navigate("/student/dashboard");
                  } else if (user.role === "Manager") {
                    navigate("/manager/dashboard");
                  } else if (user.role === "Accountant") {
                    navigate("/accountant/dashboard");
                  } else if (user.role === "Admin") {
                    navigate("/admin/dashboard");
                  }
                }
              }
            });
        } catch (err) {
          if (err.response.status === 401)
            toast({
              variant: "destructive",
              title: "Provide correct credentials !!",
            });
          else if (err.response.status === 404)
            toast({
              variant: "destructive",
              title: "User does not exists !!",
            });
          console.log(err);
        }
      }
    },
  });

  async function handleForgotPassword(ev) {
    ev.preventDefault();
    setLoading(true);
    const email = formik.values.email;
    if (email === "") {
      toast({
        variant: "destructive",
        title: "Please enter your email !!",
      });
      setLoading(false);
    } else {
      try {
        await axios.post("/forgot-password", { email: email }).then((res) => {
          if (res.status === 200) {
            setLoading(false);
            toast({
              title: "Password reset link sent to your email.",
            });
            setEmail("");
          }
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Could not send link !!",
        });
      }
    }
  }

  return (
    <>
      <Header />
      <div className="lg:border-2 justify-center lg:border-bg_light_section lg:my-10 lg:mx-24 overflow-x-hidden flex rounded-2xl lg:bg-blue-100/70 lg:shadow-2xl">
        {loading && <Loader height={"h-[70vh]"} />}
        {!loading && (
          <>
            <div className="hidden lg:block lg:flex-grow lg:w-10 lg:object-cover ">
              <img
                src={index}
                className="h-full w-full object-cover rounded-r-full shadow-[0_0_15px_0_rgba(0,0,0,0.3)]"
                alt="Background"
              />
            </div>
            <div className="flex flex-col item-center mx-4 my-8 lg:w-1/2 ">
              <div className="flex flex-row justify-center items-center gap-3">
                <img src={logo} width={40} />
                <Link
                  to="/"
                  className="text-3xl font-semibold protest-riot-regular"
                >
                  APC Nadiad
                </Link>
              </div>
              <div className="w-full px-2 py-10 lg:px-16 lg:py-10 rounded-2xl mt-10 ">
                <div className="items-center justify-center flex flex-col">
                  <div className="text-5xl text-black font-normal playfair mb-2">
                    Welcome
                  </div>
                  <p className="mb-4 text-center text-zinc-600 text-sm">
                    Enter your email and password to access your account
                  </p>
                </div>
                <form
                  onSubmit={formik.handleSubmit}
                  className="px-7 py-3 flex flex-col justify-center items-center gap-2"
                >
                  <div className="w-full">
                    <Label
                      variant="default"
                      className="text-sm lg:text-base md:text-base"
                    >
                      Email
                    </Label>
                    <div className="flex flex-row items-center justify-center gap-x-2">
                      <Input
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={`mt-1 mb-1 ${
                          formik.touched.email && formik.errors.email
                            ? "outline outline-1 outline-red-500 "
                            : ""
                        }`}
                        name="email"
                        placeholder="Enter your email "
                        {...formik.getFieldProps("email")}
                      />
                      <MailIcon color="rgb(1 1 1/0.5)" size={25} />
                    </div>

                    <div>
                      {formik.touched.email && formik.errors.email ? (
                        <div className="ml-1 text-xs text-red-600 font-medium">
                          {formik.errors.email}
                        </div>
                      ) : (
                        <div className="ml-1 text-xs text-blue-100/70 font-medium">
                          *
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="w-full">
                    <Label variant="default">Password</Label>
                    <div className="grid grid-cols-2 grid-rows-2">
                      <div className="col-span-2 flex flex-row justify-center items-center gap-x-2">
                        <Input
                          type={showPassword ? "text" : "password"}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                          className={`mt-1 mb-1 ${
                            formik.touched.password && formik.errors.password
                              ? "outline outline-1 outline-red-500"
                              : ""
                          }`}
                          name="password"
                          placeholder="Enter the password"
                          {...formik.getFieldProps("password")}
                        />
                        {showPassword ? (
                          <EyeIcon
                            color="rgb(1 1 1/0.5)"
                            className="hover:cursor-pointer"
                            size={25}
                            onClick={() => setshowPassword(!showPassword)}
                          />
                        ) : (
                          <EyeOffIcon
                            color="rgb(1 1 1/0.5)"
                            className="hover:cursor-pointer"
                            size={25}
                            onClick={() => setshowPassword(!showPassword)}
                          />
                        )}
                      </div>
                      <div className="row-start-2 mr-3">
                        {formik.touched.password && formik.errors.password ? (
                          <div className="ml-1 text-xs text-red-600 font-medium">
                            {formik.errors.password}
                          </div>
                        ) : null}
                      </div>
                      <div className="row-start-2">
                        <div className="flex justify-end items-center">
                          <p
                            className="text-blue-500 cursor-pointer text-right hover:underline text-sm mr-8"
                            onClick={handleForgotPassword}
                          >
                            Forgot Password?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full pr-7">
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default UserLogin;
