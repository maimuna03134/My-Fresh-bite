import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const ForgotPassword = () => {

      const [email, setEmail] = useState("");
      const { forgotPass } = use(AuthContext);
      const navigate = useNavigate();
    const location = useLocation();
    
       useEffect(() => {
         if (location.state?.email) {
           setEmail(location.state.email);
         }
       }, [location.state]);
    
    const handleResetPassword = (e) => {
        e.preventDefault();

        if (!email) {
          toast.error("Please enter your email first!");
          return;
        }

        forgotPass(email)
          .then(() => {
            toast("Password reset email sent!");
            window.open("https://mail.google.com", "_blank");
          })
          .catch((error) => {
            toast.error(error.message);
          });
        
    }

    return (
      <div
        className="flex justify-center items-center min-h-screen"
        data-aos="fade-down"
      >
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
          <h2 className="text-2xl text-orange-500 font-bold text-center mb-2">
            Reset your Password
          </h2>
          <div className="flex items-center justify-center mt-8">
            <div className="border-b border-b-gray-300 h-px w-80"></div>
          </div>

          <form onSubmit={handleResetPassword} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-orange-400 font-bold my-2">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered placeholder:text-gray-400"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-style w-full" type="submit">
                Reset Password
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 font-semibold text-center">
            Remember your password?
            <span
              onClick={() => navigate("/auth/login")}
              className="text-red-500 cursor-pointer hover:font-bold"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    );
};

export default ForgotPassword;