import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory(); // Using useHistory for React Router v5
  const { setUserRole } = useUser();

  // Add state for loading and error handling
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!userId || !password) {
      setError("Please enter both user ID and password");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // TESTING ONLY: Hardcoded credentials for testing
      const testUserId = "es322";
      const testPassword = "es322";
      const testUserLevel = "ES";

      // Check if entered credentials match test credentials
      if (userId === testUserId && password === testPassword) {
        // Simulate successful login for testing
        setUserRole(testUserLevel);
        const userInfo = {
          userId: testUserId,
          userLevel: testUserLevel,
          rptUser: "TestUser",
        };

        // Store user info based on remember me checkbox
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(userInfo));
        } else {
          sessionStorage.setItem("user", JSON.stringify(userInfo));
        }

        console.log("TEST MODE: Login successful with test credentials");
        history.push("/admin/dashboard");
        return;
      }

      // For production, uncomment this section and remove the test code above
      /*
      const response = await fetch("http://localhost:8082/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.success) {
        setUserRole(data.userLevel);
        const userInfo = {
          userId: userId,
          userLevel: data.userLevel,
          rptUser: data.rptUser?.trim() || "",
        };

        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(userInfo));
        } else {
          sessionStorage.setItem("user", JSON.stringify(userInfo));
        }
        
        history.push("/admin/dashboard");
      } else {
        throw new Error("Authentication failed");
      }
      */

      // For testing only - if credentials don't match test values
      throw new Error("Invalid credentials. For testing, use: es322/es322");
    } catch (err) {
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="justify-center items-center container mx-auto mt-20 my-auto px-4 h-full w-full">
      <div className="flex content-center items-center justify-center h-full ">
        <div
          className="w-full lg:w-4/12 px-4 py-6 shadow-xl rounded-lg"
          style={{ backgroundColor: "#788a9f" }}
        >
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-gray-800 text-xl font-bold">
                  Sign in to your account
                </h6>
              </div>
              {/* <div className="text-center text-xs text-gray-500 mb-3">
                <p>TEST MODE: Use userId "es322" and password "es322"</p>
              </div> */}
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="user-id"
                  >
                    User ID
                  </label>
                  <input
                    id="user-id"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="User ID (es322 for testing)"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password (es322 for testing)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Remember me
                    </span>
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6 relative">
            <div className="w-1/2">
              <Link
                to="/auth/forgot-password"
                className="text-blueGray-100  hover:text-blueGray-800 text-lg "
              >
                <small>Forgot password?</small>
              </Link>
            </div>
            <div className="w-1/2 text-right">
              <Link
                to="/auth/register"
                className="text-blueGray-100  hover:text-blueGray-800 text-lg "
              >
                <small>Create new account</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
