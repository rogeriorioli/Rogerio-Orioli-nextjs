import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles, User, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a versão IA do Carlos. Pergunte-me sobre meus projetos, skills ou experiência!', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);
    
    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-[380px] h-[500px] glass-panel rounded-2xl flex flex-col shadow-2xl animate-in slide-in-from-bottom-10 fade-in border border-white/10 overflow-hidden">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-primary to-secondary flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 text-white">
              <div className="p-1.5 bg-white/20 rounded-full">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Rogério AI</h3>
                <span className="text-xs text-white/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-darker/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 
                  ${msg.role === 'model' ? 'bg-primary/20 text-primary' : 'bg-slate-700 text-slate-300'}`}
                >
                  {msg.role === 'model' ? <Bot size={16} /> : <User size={16} />}
                </div>
                
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed
                  ${msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-tl-none'}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
               <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-slate-400" />
                    <span className="text-xs text-slate-400">Digitando...</span>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-darker border-t border-white/5">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Pergunte algo sobre o Rogério..."
                className="w-full bg-slate-800/50 border border-slate-700 text-slate-200 text-sm rounded-full pl-4 pr-12 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-500"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-1.5 p-2 bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-[10px] text-center text-slate-600 mt-2">
              Powered by Google Gemini
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={toggleChat}
        className={`group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-110 active:scale-95 z-50 ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        aria-label="Chat with AI"
      >
        <MessageSquare size={24} className="fill-current" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
          Chat com IA
        </span>
      </button>

      {/* Close Button when open (floating replacement) */}
       {isOpen && (
        <button 
        onClick={toggleChat}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white shadow-lg border border-white/10 hover:bg-slate-700 transition-all"
        aria-label="Close Chat"
      >
        <X size={20} />
      </button>
       )}
    </div>
  );
};

export default AIChat;