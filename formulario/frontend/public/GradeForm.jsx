import { useState, useEffect } from 'react';
import axios from 'axios';

const GradeForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    nota1: '',
    nota2: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Permite apenas números e um ponto decimal
    if (value === '' || (/^\d*\.?\d*$/).test(value)) {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/grades', {
        ...formData,
        userId
      });
      setResult(response.data);
      if (response.data.status === 'Aprovado') {
        setShowConfetti(true);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Componente para os balões de celebração
  const Balloons = () => {
    const balloons = Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}
      />
    ));

    return <div className="fixed inset-0 pointer-events-none">{balloons}</div>;
  };

  // Componente para o cartão de "Loser"
  const LoserCard = () => (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="bg-red-500/20 backdrop-blur-lg p-8 rounded-xl border border-red-500/30 transform rotate-12 animate-shake">
        <h3 className="text-4xl font-bold text-red-200">LOSER!</h3>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="nota1"
              value={formData.nota1}
              onChange={handleChange}
              className="peer w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              placeholder="Nota 1"
              required
            />
            <label className="absolute left-4 -top-2.5 px-1 text-sm text-blue-100 transition-all duration-300 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
              Nota 1
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="nota2"
              value={formData.nota2}
              onChange={handleChange}
              className="peer w-full px-4 py-3 rounded-lg bg-white/5 border border-white/30 text-white placeholder-transparent focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              placeholder="Nota 2"
              required
            />
            <label className="absolute left-4 -top-2.5 px-1 text-sm text-blue-100 transition-all duration-300 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
              Nota 2
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50"
        >
          {loading ? 'Calculando...' : 'Calcular Média'}
        </button>
      </form>

      {result && (
        <div className={`mt-6 p-6 rounded-xl backdrop-blur-lg text-center ${
          result.status === 'Aprovado' 
            ? 'bg-green-500/10 border border-green-500/30' 
            : 'bg-red-500/10 border border-red-500/30'
        }`}>
          <h3 className={`text-2xl font-bold mb-2 ${
            result.status === 'Aprovado' ? 'text-green-200' : 'text-red-200'
          }`}>
            {result.status}
          </h3>
          <p className="text-white/80">Média: {result.media.toFixed(1)}</p>
          <p className="mt-2 text-sm text-white/60">{result.message}</p>
        </div>
      )}

      {showConfetti && <Balloons />}
      {result?.status === 'Reprovado' && <LoserCard />}

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh) }
          100% { transform: translateY(-100px) }
        }
        @keyframes shake {
          0%, 100% { transform: rotate(12deg) }
          50% { transform: rotate(-12deg) }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GradeForm;
