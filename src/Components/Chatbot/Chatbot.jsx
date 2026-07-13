import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import chatbotData from '../../data/chatbotData.json';
import favicon from '../../assets/favicon.ico';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hi there! 👋 Welcome to Engloray. How can I help you today?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const messagesEndRef = useRef(null);
  const [isIntroActive, setIsIntroActive] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    const checkIntro = () => {
      const introEl = document.querySelector('.entry-intro-wrapper');
      setIsIntroActive(!!introEl);
    };

    checkIntro();
    const observer = new MutationObserver(checkIntro);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const userText = message.trim();
    if (!userText) return;

    let maskedText = userText;
    const lowerInput = userText.toLowerCase();

    // 1. Mask bad words
    let hasBadWord = false;
    chatbotData.badWords.forEach(badWord => {
      // Create a regex to match the bad word whole-word insensitive
      const regex = new RegExp(`\\b${badWord}\\b`, 'gi');
      if (regex.test(maskedText)) {
        hasBadWord = true;
        maskedText = maskedText.replace(regex, '*'.repeat(badWord.length));
      }
    });

    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 2. Add User Message (masked if necessary)
    const newMessages = [...messages, { text: maskedText, sender: "user", time: timeString }];
    setMessages(newMessages);
    setMessage('');

    // 3. Generate Bot Response
    setTimeout(() => {
      let botResponse = "";
      
      if (hasBadWord) {
        botResponse = "Please refrain from using inappropriate language. How else can I assist you?";
      } else {
        // Top-K Keyword Matching Algorithm (K=3, select top 1)
        const scoredMatches = chatbotData.knowledgeBase.map(item => {
          let score = 0;
          item.keywords.forEach(keyword => {
            if (lowerInput.includes(keyword)) {
              score++;
            }
          });
          return { ...item, score };
        });

        // Sort descending by score
        scoredMatches.sort((a, b) => b.score - a.score);

        // Select top K=3 (We will use the first one if score > 0)
        const topK = scoredMatches.slice(0, 3);
        const bestMatch = topK[0];

        if (bestMatch && bestMatch.score > 0) {
          botResponse = bestMatch.answer;
        } else {
          botResponse = chatbotData.fallbackMessage;
        }
      }

      setMessages(prev => [...prev, { text: botResponse, sender: "bot", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 500); // 500ms delay to simulate typing/thinking
  };

  if (isIntroActive) return null;

  return (
    <div className="engloray-chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="engloray-chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
          >
            {/* Header */}
            <div className="chat-window-header">
              <div className="chat-header-info">
                <div className="chat-avatar">
                  <img src={favicon} alt="Engloray Logo" style={{ width: '24px', height: '24px' }} />
                </div>
                <div className="chat-title-group">
                  <h4>Engloray Assistant</h4>
                  <span className="chat-status">Online</span>
                </div>
              </div>
              <button className="chat-close-btn" onClick={toggleChat} aria-label="Close Chat">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="chat-messages-area">
              {messages.map((msg, index) => (
                <motion.div 
                  key={index} 
                  className={`chat-message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="message-content">
                    {msg.text}
                  </div>
                  <span className="message-time">{msg.time}</span>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="chat-input-area">
              <form onSubmit={handleSend} className="chat-input-form">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="chat-input-field"
                />
                <button type="submit" className="chat-send-btn" disabled={!message.trim()}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        className={`engloray-chat-fab ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Chat"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="chat-icon"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FontAwesomeIcon icon={faCommentDots} />
            </motion.div>
          ) : (
            <motion.div
              key="close-icon"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default Chatbot;
