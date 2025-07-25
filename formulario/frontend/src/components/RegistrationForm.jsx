import { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [focusedField, setFocusedField] = useState(null);

  const validators = {
    name: (value) => {
      if (value.length < 3) return 'O nome deve ter pelo menos 3 caracteres';
      return '';
    },
    email: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Digite um e-mail válido';
      return '';
    },
    phone: (value) => {
      const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
      if (!phoneRegex.test(value)) return 'Digite um telefone válido: (99) 99999-9999';
      return '';
    },
    address: (value) => {
      if (value.length < 5) return 'O endereço deve ter pelo menos 5 caracteres';
      return '';
    }
  };

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{0,5})(\d{0,4})/, (_, p1, p2, p3) => {
        let result = '';
        if (p1) result += `(${p1}`;
        if (p2) result += `) ${p2}`;
        if (p3) result += `-${p3}`;
        return result;
      });
    }
    return value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    
    if (name === 'phone') {
      formattedValue = formatPhone(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    const error = validators[name]?.(formattedValue) || '';
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validators[key]?.(formData[key]) || '';
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage({ text: 'Por favor, corrija os erros no formulário.', type: 'error' });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/register', formData);
      setMessage({ text: 'Cadastro realizado com sucesso!', type: 'success' });
      setFormData({ name: '', email: '', phone: '', address: '' });
      setErrors({});
    } catch (error) {
      setMessage({ 
        text: error.response?.data?.error || 'Erro ao realizar cadastro.', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-5">
        {['name', 'email', 'phone'].map((field) => (
          <div key={field} className="relative group">
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              onFocus={() => setFocusedField(field)}
              onBlur={() => setFocusedField(null)}
              className={`peer w-full px-4 py-3 rounded-lg bg-white/5 border ${
                focusedField === field 
                  ? 'border-purple-500' 
                  : errors[field]
                    ? 'border-red-500'
                    : 'border-white/30'
              } text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300`}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              required
            />
            <label
              className={`absolute left-4 -top-2.5 px-1 text-sm transition-all duration-300 ${
                focusedField === field 
                  ? 'text-purple-500' 
                  : 'text-blue-100'
              } peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900`}
            >
              {field === 'name' ? 'Nome' : 
               field === 'email' ? 'E-mail' : 
               field === 'phone' ? 'Telefone' : field}
            </label>
            {errors[field] && (
              <p className="mt-1 text-xs text-red-400">{errors[field]}</p>
            )}
          </div>
        ))}

        <div className="relative group">
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            onFocus={() => setFocusedField('address')}
            onBlur={() => setFocusedField(null)}
            rows="3"
            className={`peer w-full px-4 py-3 rounded-lg bg-white/5 border ${
              focusedField === 'address' 
                ? 'border-purple-500' 
                : errors.address
                  ? 'border-red-500'
                  : 'border-white/30'
            } text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none`}
            placeholder="Endereço"
            required
          />
          <label
            className={`absolute left-4 -top-2.5 px-1 text-sm transition-all duration-300 ${
              focusedField === 'address' 
                ? 'text-purple-500' 
                : 'text-blue-100'
            } peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-500 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900`}
          >
            Endereço
          </label>
          {errors.address && (
            <p className="mt-1 text-xs text-red-400">{errors.address}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || Object.keys(errors).length > 0}
        className="group relative w-full flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg overflow-hidden transition-all duration-300 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 bg-white/10 group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-500"></span>
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Cadastrando...</span>
          </>
        ) : (
          <>
            <span className="relative z-10">Cadastrar</span>
            <svg className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>

      {message.text && (
        <div className={`mt-4 p-4 rounded-lg text-center text-sm font-medium backdrop-blur-lg ${
          message.type === 'error' 
            ? 'bg-red-500/10 text-red-200 border border-red-500/20' 
            : 'bg-green-500/10 text-green-200 border border-green-500/20'
        } animate-fade-in transition-all duration-300`}>
          <div className="flex items-center justify-center">
            {message.type === 'error' ? (
              <svg className="h-5 w-5 text-red-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-green-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            )}
            {message.text}
          </div>
        </div>
      )}
    </form>
  );
};

export default RegistrationForm;
