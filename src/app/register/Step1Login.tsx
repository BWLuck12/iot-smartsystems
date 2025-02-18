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
    <div className="bg-white p-6 mt-6 border rounded-md">
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="mt-2 p-2 w-full border-2 border-gray-200 rounded-md"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="mt-2 p-2 w-full border-2 border-gray-200 rounded-md "
          placeholder="Enter your password"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-700">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="mt-2 p-2 w-full border-2 border-gray-200 rounded-md"
          placeholder="Enter your password again to confirm"
        />
      </div>
    </div>
  );
};

export default Step1;
