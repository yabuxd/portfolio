import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Bot, User, Loader2 } from 'lucide-react';
import { FEW_SHOT_EXAMPLES } from '../data/chatExamples';

const SYSTEM_PROMPT = `You are an AI assistant embedded in Yeabtsega Tolera's personal portfolio website. Your role is to answer any question a visitor has about Yeabtsega in a friendly, honest, and professional way.

ABOUT YEABTSEGA:
Yeabtsega Tolera is a Computer Science undergraduate based in Ethiopia, expected to graduate in 2027. He is a passionate software developer with experience in both systems programming and web development.

SKILLS & TECH STACK:
- Languages: C, C++, Java, Python, JavaScript, HTML, CSS
- Frontend: React, HTML/CSS
- Backend & Databases: MySQL, Supabase
- Interests: systems programming, full-stack web development, SaaS products

PROJECTS:
1. School Management System — a SaaS platform for managing school operations including students, teachers, and administration.
2. MovieXD — a movie streaming website where users can browse and watch movies online.
3. OShell — a mini Linux shell built in C/C++, implementing core shell features like command execution and piping.
4. Furniture Business Website — a professional website built for a furniture business to showcase products online.

EDUCATION:
- B.Sc. in Computer Science (in progress, graduating 2027)
- University in Ethiopia

CONTACT & AVAILABILITY:
- Email: yabuxd56@gmail.com
- Phone: +251982108763
- Telegram: @yabuxd56
- Open to freelance projects, collaborations, and internship opportunities

INSTRUCTIONS:
- Answer questions naturally and conversationally. Keep replies short (2–4 sentences) unless more detail is clearly needed.
- Speak about Yeabtsega in third person using he/him.
- If someone asks how to contact Yeabtsega, share his email or Telegram handle.
- If asked something not covered here, say Yeabtsega would be happy to answer directly and point them to yabuxd56@gmail.com.
- Never make up information. Stick only to what is provided above.
- Be warm and enthusiastic — you want visitors to walk away impressed and wanting to reach out.`;

const QUICK_QUESTIONS = [
  { label: 'Skills', question: 'What are his main skills and tech stack?' },
  { label: 'Projects', question: 'Tell me about his projects.' },
  { label: 'Contact', question: 'How can I contact Yeabtsega?' },
  { label: 'Background', question: 'What is his educational background?' },
  { label: 'Open to work?', question: 'Is he available for freelance or internships?' },
];

export default function Chatbot() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hey there! I'm Yeabtsega's AI assistant. Ask me anything about his skills, projects, or how to get in touch. 👋",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (text) => {
    const userMessage = text.trim();
    if (!userMessage || isLoading) return;

    const updatedMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      // In dev (VITE_GROQ_API_KEY is set): call Groq directly from the browser.
      // In production (Netlify): call our serverless function at /api/chat which injects the key.
      const isDev = import.meta.env.DEV && import.meta.env.VITE_GROQ_API_KEY;

      let response;
      if (isDev) {
        // Direct browser call — dev only
        response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            max_tokens: 1024,
            temperature: 0.7,
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              ...updatedMessages.map((m) => ({ role: m.role, content: m.content })),
            ],
          }),
        });
      } else {
        // Production: go through the Netlify Function (key stays server-side)
        response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system: SYSTEM_PROMPT,
            messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
          }),
        });
      }

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err?.error?.message || `API error ${response.status}`);
      }

      const data = await response.json();
      // Dev path → Groq raw response shape: choices[0].message.content
      // Production path → Netlify function normalises to: { text }
      const assistantText =
        data?.text ??
        data?.choices?.[0]?.message?.content ??
        'Sorry, I had trouble responding. Try again!';

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantText }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Oops — something went wrong. Please try again or reach out directly at yabuxd56@gmail.com. (${error.message})`,
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="min-h-screen bg-graphite-950 text-graphite-100 flex flex-col">
      {/* Ambient background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-graphite-900/40 via-graphite-950 to-graphite-950 pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 border-b border-graphite-800/60 bg-graphite-950/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-graphite-400 hover:text-gold-burned transition-colors font-inter text-sm tracking-wider uppercase"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <div className="flex-1 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-burned/10 border border-gold-burned/40 flex items-center justify-center">
              <Bot size={15} className="text-gold-burned" />
            </div>
            <div>
              <p className="font-cinzel text-sm font-semibold tracking-widest text-graphite-100">
                Yabu<span className="text-gold-burned">xd</span> AI
              </p>
              <p className="font-inter text-[10px] text-graphite-500 tracking-wider uppercase">
                Powered by Groq
              </p>
            </div>
          </div>

          {/* Live indicator */}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-inter text-xs text-graphite-500 tracking-wider">Online</span>
          </div>
        </div>
      </header>

      {/* Quick question chips */}
      <div className="relative z-10 border-b border-graphite-800/40 bg-graphite-950/60">
        <div className="max-w-3xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q.label}
              onClick={() => sendMessage(q.question)}
              disabled={isLoading}
              className="flex-shrink-0 px-3 py-1.5 text-xs font-inter tracking-wider uppercase border border-graphite-700 text-graphite-400 hover:border-gold-burned/60 hover:text-gold-burned hover:bg-gold-burned/5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <main className="relative z-10 flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${
                    msg.role === 'user'
                      ? 'bg-gold-burned/10 border-gold-burned/40'
                      : 'bg-graphite-800/60 border-graphite-700'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <User size={14} className="text-gold-burned" />
                  ) : (
                    <Bot size={14} className="text-graphite-300" />
                  )}
                </div>

                {/* Bubble */}
                <div
                  className={`max-w-[75%] px-4 py-3 font-inter text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gold-burned/10 border border-gold-burned/30 text-graphite-100 rounded-2xl rounded-tr-sm'
                      : 'bg-graphite-800/50 border border-graphite-700/50 text-graphite-200 rounded-2xl rounded-tl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="flex gap-3 items-center"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-graphite-800/60 border border-graphite-700">
                  <Bot size={14} className="text-graphite-300" />
                </div>
                <div className="px-4 py-3 bg-graphite-800/50 border border-graphite-700/50 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-burned/60 animate-bounce [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-burned/60 animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-burned/60 animate-bounce [animation-delay:300ms]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={bottomRef} />
        </div>
      </main>

      {/* Input bar */}
      <footer className="relative z-10 border-t border-graphite-800/60 bg-graphite-950/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <form onSubmit={handleSubmit} className="flex gap-3 items-end">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Yeabtsega..."
              disabled={isLoading}
              className="flex-1 bg-graphite-900/60 border border-graphite-700 focus:border-gold-burned/60 focus:outline-none text-graphite-100 placeholder-graphite-600 font-inter text-sm px-4 py-3 rounded-lg transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-gold-burned hover:bg-gold-burned/80 disabled:opacity-40 disabled:cursor-not-allowed text-black transition-all duration-200 rounded-lg"
              aria-label="Send message"
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
            </button>
          </form>
          <p className="font-inter text-[10px] text-graphite-700 text-center mt-2 tracking-wider">
            AI can make mistakes — verify important info directly with Yeabtsega.
          </p>
        </div>
      </footer>
    </div>
  );
}
