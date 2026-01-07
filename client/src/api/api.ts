import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export interface FormDataType {
  name: string;
  email: string;
  phone: string;
  batch?: string;
  background?: string;
  motivation?: string;
}

export const submitForm = async (formData: FormDataType) => {
  const res = await axios.post(`${API_URL}/api/form/submit`, formData);
  return res.data;
};
