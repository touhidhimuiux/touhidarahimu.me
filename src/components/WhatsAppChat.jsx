import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose, IoSend } from "react-icons/io5";
import { MdDone, MdDoneAll } from "react-icons/md";
import { motion } from "framer-motion";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `👋 Hi! I’m Touhid Ara Himu, a UI/UX designer.  
You can ask a question below or type a message it will continue on WhatsApp for a quick response.`,
      sender: "Himu",
      timestamp: new Date(Date.now() - 60000),
      read: true,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const number = "8801834139390"; // Your WhatsApp number

  const profileData = {
    name: "Touhid Ara Himu",
    bio: "UI/UX Designer | Web & Mobile Apps",
    image: "/profile.jpg",
  };

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages, isTyping]);

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });

  // Portfolio answers with clickable WhatsApp links
  const portfolioAnswers = {
    "Can I see your portfolio?": `You can check out my projects <a href="https://touhidarahimu.vercel.app/projects" target="_blank" style="color:#25D366;text-decoration:underline;">here</a>. It showcases web, mobile UI/UX designs, and landing pages I've worked on.<br><br>Want to know more? <a href="https://wa.me/${number}" target="_blank" style="color:#25D366;text-decoration:underline;">Let's talk on WhatsApp 📲</a>.`,
    "What tools do you use for UI/UX?": `I work with Figma, Adobe XD, Illustrator, Photoshop, and tools like Framer Motion and Tailwind CSS for interactive designs.<br><br>Want to know more? <a href="https://wa.me/${number}" target="_blank" style="color:#25D366;text-decoration:underline;">Let's talk on WhatsApp 📲</a>.`,
    "Do you take freelance projects?": `Yes, I do! I handle UI/UX design for websites, mobile apps, and SaaS platforms.<br><br>Want to know more? <a href="https://wa.me/${number}" target="_blank" style="color:#25D366;text-decoration:underline;">Let's talk on WhatsApp 📲</a>.`,
    "Can we discuss a potential project?": `Absolutely! I’d love to hear your project idea.<br><br>Want to know more? <a href="https://wa.me/${number}" target="_blank" style="color:#25D366;text-decoration:underline;">Let's talk on WhatsApp 📲</a>.`,
  };

  const handleSend = (msgText) => {
    if (!msgText.trim()) return;

    // User message
    const userMessage = {
      id: messages.length + 1,
      text: msgText,
      sender: "user",
      timestamp: new Date(),
      read: false,
    };
    setMessages(prev => [...prev, userMessage]);
    setMessage("");

    // Mark as read
    setTimeout(() => setMessages(prev => prev.map(msg => msg.id === userMessage.id ? { ...msg, read: true } : msg)), 500);

    // Typing animation
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      // Determine answer
      const answerText = portfolioAnswers[msgText] || `Thanks for reaching out! <a href="https://wa.me/${number}" target="_blank" style="color:#25D366;text-decoration:underline;">Let's continue on WhatsApp 📲</a> for more details.`;
      const answerMessage = {
        id: messages.length + 2,
        text: answerText,
        sender: "Himu",
        timestamp: new Date(),
        read: true,
      };
      setMessages(prev => [...prev, answerMessage]);
    }, 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(message);
    }
  };

  // Suggested questions including direct WhatsApp CTA
  const suggestedQuestions = [
    ...Object.keys(portfolioAnswers),
    "Let's talk on WhatsApp 📲"
  ];

  const handleSuggestedClick = (q) => {
    if (q === "Let's talk on WhatsApp 📲") {
      const whatsappUrl = `https://wa.me/${number}?text=Hi!`;
      window.open(whatsappUrl, "_blank");
    } else {
      handleSend(q);
    }
  };

  return (
    <>
      {/* Floating WhatsApp button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "fixed",
          bottom: "80px",
          right: "25px",
          backgroundColor: "#25D366",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
          zIndex: 1000,
          cursor: "pointer",
          fontSize: "28px",
        }}
        title="Chat with me on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </motion.button>

      {/* Chat window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{
            position: "fixed",
            bottom: "110px",
            right: "25px",
            width: "360px",
            maxWidth: "90vw",
            height: "480px",
            maxHeight: "80vh",
            backgroundColor: "#ECE5DD",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div style={{ backgroundColor: "#25D366", color: "white", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={profileData.image} alt={profileData.name} style={{ width: "42px", height: "42px", borderRadius: "50%", border: "2px solid white", objectFit: "cover" }} />
              <div>
                <h3 style={{ margin: 0, fontSize: "13px", fontWeight: "600" }}>{profileData.name}</h3>
                <p style={{ margin: 0, fontSize: "11px", opacity: 0.9 }}>{profileData.bio}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", color: "white", fontSize: "20px", cursor: "pointer" }}>
              <IoClose />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {messages.map((msg, index) => (
              <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} style={{ display: "flex", justifyContent: msg.sender === "touhid" || msg.sender === "Himu" ? "flex-start" : "flex-end" }}>
                <div style={{
                  backgroundColor: msg.sender === "touhid" || msg.sender === "Himu" ? "white" : "#DCF8C6",
                  padding: "6px 10px",
                  borderRadius: msg.sender === "touhid" || msg.sender === "Himu" ? "8px 8px 8px 0" : "0 8px 8px 8px",
                  maxWidth: "75%",
                  wordWrap: "break-word",
                  boxShadow: "0 1px 1px rgba(0,0,0,0.06)",
                }}>
                  <p style={{ margin: 0, fontSize: "13px", color: "#000", lineHeight: "1.3" }} dangerouslySetInnerHTML={{ __html: msg.text }}></p>
                  <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "3px", marginTop: "2px", fontSize: "11px", color: "#999" }}>
                    <span>{formatTime(msg.timestamp)}</span>
                    {msg.sender === "user" && <span style={{ color: "#34B7F1" }}>{msg.read ? <MdDoneAll size={14} /> : <MdDone size={14} />}</span>}
                  </div>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <img src={profileData.image} alt={profileData.name} style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover" }} />
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 0.6 }}>Touhid is typing...</motion.span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", padding: "6px 12px" }}>
            {suggestedQuestions.map((q, i) => (
              <button key={i} onClick={() => handleSuggestedClick(q)} style={{ backgroundColor: "#25D366", color: "white", border: "none", borderRadius: "16px", padding: "6px 10px", fontSize: "12px", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
                <FaWhatsapp size={14} /> {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: "10px 12px", display: "flex", gap: "8px", borderTop: "1px solid #ccc", backgroundColor: "white", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "8px" }}>
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Type a message..." style={{ flex: 1, padding: "8px 10px", border: "1px solid #ddd", borderRadius: "18px", fontSize: "13px", outline: "none", fontFamily: "inherit", backgroundColor: "white", color: "#000" }} />
              <button onClick={() => handleSend(message)} disabled={!message.trim()} style={{ background: message.trim() ? "#25D366" : "#ccc", border: "none", color: "white", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: message.trim() ? "pointer" : "default", fontSize: "16px", transition: "background 0.2s" }}>
                <IoSend />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default WhatsAppWidget;