import React, { useState } from 'react'

const Login = () => {
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        number: '',
        address: ''
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {value, name} = e.target 
        setFormData({...formData, [name]: value})

    }

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is not valid';
        }
        if (!formData.mobile) {
          newErrors.mobile = 'Mobile is required';
        } else if (formData.mobile.length < 10 || formData.mobile.length > 15) {
          newErrors.mobile = 'Mobile must be between 10 and 15 digits';
        }
        if (!formData.address) newErrors.address = 'Address is required';
        return newErrors;
      };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
          localStorage.setItem('formData', JSON.stringify(formData));
          setFormData({
            name: '',
            email: '',
            mobile: '',
            address: ''
          });
          setErrors({});
        } else {
          setErrors(validationErrors);
        }
    }

    console.log(formData)
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <p>{errors.mobile}</p>}
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p>{errors.address}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Login