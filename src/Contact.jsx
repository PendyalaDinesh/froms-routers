import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: 'Support',
  message: '',
  contactMethod: 'Email',
  bestTime: '',
  agree: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const refs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    message: useRef(null),
    agree: useRef(null),
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name?.trim() || values.name.length < 2) errors.name = 'Name required (2–50 chars)';
    if (values.name.length > 50) errors.name = 'Name must be at most 50 chars';

    if (!values.email) errors.email = 'Email required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Invalid email format';

    if (values.phone) {
      const digits = values.phone.replace(/\D/g, '');
      if (digits.length !== 10) errors.phone = 'Phone must be 10 digits';
    }

    if (!values.message?.trim() || values.message.length < 20) errors.message = 'Message must be at least 20 chars';

    if (!values.agree) errors.agree = 'You must agree to terms';

    return errors;
  };

  const errors = validate(form);
  const isValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const focusFirstError = (errs) => {
    for (const field of ['name', 'email', 'phone', 'message', 'agree']) {
      if (errs[field]) {
        refs[field].current?.focus();
        break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isValid) {
      focusFirstError(errors);
      return;
    }

    const { name } = form;
    setForm(initialForm);
    navigate('/thank-you', { state: { name } });
  };

  return (
    <section style={{ maxWidth: 700, margin: 'auto' }}>
      <h1>Contact (Controlled Form)</h1>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div>
          <label>Full Name *</label>
          <input ref={refs.name} name="name" value={form.name} onChange={handleChange} />
          {submitted && errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>

        {/* Email */}
        <div>
          <label>Email *</label>
          <input ref={refs.email} name="email" value={form.email} onChange={handleChange} type="email" />
          {submitted && errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

        {/* Phone */}
        <div>
          <label>Phone (optional)</label>
          <input
            ref={refs.phone}
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="1234567890 or (123) 456-7890"
          />
          {submitted && errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
        </div>

        {/* Subject */}
        <div>
          <label>Subject</label>
          <select name="subject" value={form.subject} onChange={handleChange}>
            <option>Support</option>
            <option>Sales</option>
            <option>Feedback</option>
            <option>Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label>Message *</label>
          <textarea ref={refs.message} name="message" value={form.message} onChange={handleChange} rows={6} />
          {submitted && errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
        </div>

        {/* Contact Method */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="contactMethod"
              value="Email"
              checked={form.contactMethod === 'Email'}
              onChange={handleChange}
            />
            Email
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="contactMethod"
              value="Phone"
              checked={form.contactMethod === 'Phone'}
              onChange={handleChange}
            />
            Phone
          </label>
        </div>

        {/* Best Time */}
        <div>
          <label>Best Time to Reach (optional)</label>
          <input type="time" name="bestTime" value={form.bestTime} onChange={handleChange} />
        </div>

        {/* Agree */}
        <div style={{ marginTop: '12px' }}>
          <label style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          <input
            ref={refs.agree}
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            style={{ margin: 0, padding: 0 }}
      />
      <span style={{ marginLeft: '4px' }}>I agree to terms *</span>
      </label>
      {submitted && errors.agree && <div style={{ color: 'red' }}>{errors.agree}</div>}
      </div>
      {/* Submit */}
      <div style={{ marginTop: 12 }}>
      <button type="submit" disabled={!isValid}>Submit</button>
        {!isValid && (
        <span style={{ marginLeft: 10, color: '#a00' }}>
        Complete required fields to enable submit
        </span>
      )}
    </div>

      </form>
    </section>
  );
}
