import { useState } from "react";


export const useForm =(initialForm, validateForm)=>{
const[form_, setForm]= useState(initialForm);
const[errors, setErrors]=useForm({});
const[loading, setLoading]=useState(false);
const [response, setResponse]=useState(null);

const handleChange=(e)=>{};
const handleBlur=(e)=>{};
const handleSubmit=(e)=>{};
return{
    form_, errors, loading, response, handleChange, handleBlur, handleSubmit,
}
};