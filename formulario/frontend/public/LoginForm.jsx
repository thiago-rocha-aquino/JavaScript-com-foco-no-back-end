import { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLoginSuccess, onRegisterClick }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/login', formData);
      onLoginSuccess(response.data);
    } catch (error) {
      setError(error.response?.data?.error || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="peer w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              placeholder="Username"
              required
            />
            <label className="absolute left-4 -top-2.5 px-1 text-sm text-blue-100 transition-all duration-300 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
              Username
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="peer w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              placeholder="Senha"
              required
            />
            <label className="absolute left-4 -top-2.5 px-1 text-sm text-blue-100 transition-all duration-300 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
              Senha
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>

        {error && (
          <div className="p-4 rounded-lg text-center text-sm font-medium bg-red-500/10 text-red-200 border border-red-500/20">
            {error}
          </div>
        )}
      </form>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => onRegisterClick()}
          className="text-blue-200 hover:text-blue-100 text-sm transition-colors duration-300"
        >
          Não tem uma conta? <span className="underline">Cadastre-se aqui</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
