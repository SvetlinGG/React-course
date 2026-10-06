import { useState } from "react";

export default function UnifiedControlledForm() {

    const [data, setData] = useState({});

    const changeHandler = (e) => {
        setData((state) => ({
            ...state,
            [e.target.name]: e.target.value
    }))
        

    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Create an account
        </h1>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              name="name"
              onChange={changeHandler}
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={changeHandler}
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              id="country"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              required
            >
              <option value="">Select your country</option>
              <option value="bg">Bulgaria</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Gender (single choice -> radio buttons) */}
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-1">Gender</span>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="radio" name="gender" value="male" className="text-indigo-600 focus:ring-indigo-500" />
                Male
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="radio" name="gender" value="female" className="text-indigo-600 focus:ring-indigo-500" />
                Female
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="radio" name="gender" value="other" className="text-indigo-600 focus:ring-indigo-500" />
                Other
              </label>
            </div>
          </div>

          {/* Interests (multi choice -> checkboxes) */}
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-1">Interests</span>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="programming" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                Programming
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="design" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                Design
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" value="gaming" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                Gaming
              </label>
            </div>
          </div>

          {/* About You */}
          <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">
              About you
            </label>
            <textarea
              id="about"
              rows={4}
              placeholder="Tell us a bit about yourself..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
    );
}