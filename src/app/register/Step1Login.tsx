import { useState } from "react";

// Step1.tsx
interface Step1Props {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const Step1 = ({ formData, handleInputChange }: Step1Props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    // <div className="bg-white p-6 mt-6 border rounded-md">
    <div className="flex mt-6 bg-white border rounded-md h-[400px]">
      <div className="w-1/2 flex items-center justify-center">
        <img src="/full_logo_ce_nobg.png" alt="CE LOGO" className="w-[500px] h-auto" />
      </div>
      <div className="w-1/2 p-5 flex flex-col items-center justify-center">
        <div className="mb-4">
        <h3 className="text-lg mb-4 font-bold text-gray-700 text-center ">
            Welcome to Registeraiton Page!
          </h3>
          <label className="block text-sm font-bold text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="mt-2 p-2 w-[500px] border-2 border-gray-200 rounded-md"
            placeholder="Enter Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-2 p-2 w-[500px] border-2 border-gray-200 rounded-md "
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="mt-2 p-2 w-[500px] border-2 border-gray-200 rounded-md"
            placeholder="Enter Password Again to Confirm"
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
