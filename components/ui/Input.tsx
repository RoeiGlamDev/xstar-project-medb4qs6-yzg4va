import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, required, onChange }) => {const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (required && e.target.value.trim() === '') {
      setError(${label} is required.);
    } else {
      setError(null);
    }
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="text-pink-500 mb-2 font-semibold" htmlFor={label}>
        {label}
      </label>
      <motion.div
        className={p-2 border rounded-md bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ${
          error ? 'border-red-500' : 'border-gray-600'
        }}
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
        whileHover={{ scale: 1.05 }}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;