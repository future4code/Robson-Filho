import { useState} from "react";

export const useForm = (initialValues) => {

    const [form, setForm] = useState(initialValues);
    const onChange = (event) => {
        console.log(event)

    const {name, value} = event.target

      setForm({...form, [name]: value})
  }

    const resetForm = () => {
      setForm(initialValues)
    }
    return { form, onChange, resetForm };
  };

