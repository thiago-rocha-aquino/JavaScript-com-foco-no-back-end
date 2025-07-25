import { useState } from 'react'
import RegistrationForm from '../public/RegistrationForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md relative">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-pink-500 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
        
        {/* Glass morphism card */}
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">
                Formulário de Cadastro
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-blue-100 text-sm">Por favor, preencha seus dados abaixo</p>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
