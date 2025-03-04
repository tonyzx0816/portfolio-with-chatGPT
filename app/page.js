"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [messageInput, setMessageInput] = useState('');

    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'How can I help you learn more about Tony and his resume?' }
    ]);

    const submitForm = async (e) => {
        e.preventDefault();
        let newMessages = [...messages, { role: 'user', content: messageInput }]
        setMessages(newMessages);
        setMessageInput('');
        const apiMessage = await fetch(
            '/api',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: newMessages })
            }
        ).then(res => res.json());
        setMessages([...newMessages, { role: 'system', content: apiMessage.message }]);
    }

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
    }



    return (
        <>
            <header>
                <a href="#" className="logo-holder">
                    <div className="logo">TL</div>
                    <div className="logo-text">Portfolio Website</div>
                </a>
                <nav>
                    <ul id="menu" className={menuOpen ? "active" : ""}>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="mailto:lizhongxian23@gmail.com" className="button">Contact Me</a>
                        </li>
                    </ul>
                    <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </a>
                </nav>
            </header>
            <main>
                <section id="home" className="hero container">
                    <div className="hero-blue">
                        <div>
                            <h1><small>Hi I'm</small>
                                Tony Li
                            </h1>
                            <p>
                                Software Engineering student who is passionate about learning and building my own creations.
                                <span> I'm interested in AI topics which is why I also added a Chatbot in my portfolio.</span>
                            </p>
                            <div className="call-to-action">
                                <a href="./Resume.pdf" className="button black">
                                    View Resume
                                </a>
                                <a href="mailto:lizhongxian23@gmail.com" className="button white">
                                    Contact Me
                                </a>
                            </div>
                            <div className="social-links">
                                <a href="https://github.com/tonyzx0816">
                                    <img src="./imgs/github.png" alt="Github" width="48" />
                                </a>
                                <a href="https://www.linkedin.com/in/tony-li-17b169305/">
                                    <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hero-yellow">
                        <img src="./imgs/head.png" alt="Tony Li" width="100%" />
                    </div>
                </section>
                <section className="logos container">
                    <div className="marquee">
                        <div className="track">
                            <img src="./imgs/html.png" alt="HTML" width="128" />
                            <img src="./imgs/css.png" alt="CSS" width="128" />
                            <img src="./imgs/javascript.png" alt="JavaScript" width="128" />
                            <img src="./imgs/java.png" alt="Java" width="128" />
                            <img src="./imgs/python.png" alt="Python" width="128" />
                            <img src="./imgs/vscode.png" alt="VS Code" width="128" />
                            <img src="./imgs/azure.png" alt="Azure" width="128" />
                            <img src="./imgs/pycharm.png" alt="PyCharm" width="128" />
                            <img src="./imgs/intellij.png" alt="IntelliJ" width="128" />
                            <img src="./imgs/html.png" alt="HTML" width="128" />
                            <img src="./imgs/css.png" alt="CSS" width="128" />
                            <img src="./imgs/javascript.png" alt="JavaScript" width="128" />
                            <img src="./imgs/java.png" alt="Java" width="128" />
                            <img src="./imgs/python.png" alt="Python" width="128" />
                            <img src="./imgs/vscode.png" alt="VS Code" width="128" />
                            <img src="./imgs/azure.png" alt="Azure" width="128" />
                            <img src="./imgs/pycharm.png" alt="PyCharm" width="128" />
                            <img src="./imgs/intellij.png" alt="IntelliJ" width="128" />
                        </div>
                    </div>
                </section>
                <section id="skills" className="skills container">
                    <h2>
                        <small>About Me</small>
                        Skills
                    </h2>
                    <div className="holder-blue">
                        <div className="left-column">
                            <h3>Frontend</h3>
                            <ul>
                                <li>UI Design</li>
                                <li>Prototyping</li>
                            </ul>
                            <h3>Backend</h3>
                            <ul>
                                <li>Python</li>
                                <li>Java</li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <h3>A bit about me</h3>
                            <p>
                                I'm a software engineering student at San José State University.
                                I dedicated to continuous improvement and building a career in software engineering,
                                also motivated to generate real-world impacts with practical and actionable solutions.
                            </p>
                            <p>
                                Throughout my coursework and personal projects, I've developed a solid understanding of software development principles and practices.
                                Outside of the className, I enjoy working on some small game projects, which help me to improve my problem-solving skills.
                                I know that experience can only be gained through practice, so I'm always looking for new opportunities to learn and grow.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="projects" className="bento container">
                    <h2>
                        <small>
                            Previous
                        </small>
                        Completed Projects
                    </h2>
                    <div className="bento-grid">
                        <div className="bento-item">
                            <a href="https://github.com/tonyzx0816/greedy_snake_game">
                                <img src="./imgs/snake-game.png" alt="Snake Game" width="100%" />
                                <figcaption>Snake Game</figcaption>
                            </a>
                        </div>
                        <div className="bento-item">
                            <a href="https://github.com/tonyzx0816/turtle_crossing_game">
                                <img src="./imgs/turtle-crossing.png" alt="Turtle Crossing" width="100%" />
                                <figcaption>Turtle Crossing Game</figcaption>
                            </a>
                        </div>
                        <div className="bento-item">
                            <a href="https://github.com/tonyzx0816/Turtle_Racing_Game">
                                <img src="./imgs/turtle-racing-game.png" alt="Turtle Racing" width="100%" />
                                <figcaption>Turtle Racing Game</figcaption>
                            </a>
                        </div>
                        <div className="bento-item">
                            <a href="https://github.com/tonyzx0816/pong_game">
                                <img src="./imgs/pong-game.png" alt="Pong Game" width="100%" />
                                <figcaption>Pong Game</figcaption>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="chatbot container">
                    <h2>
                        <small>
                            Talk to me
                        </small>
                        Chatbot
                    </h2>
                    <div className="chatbot-blue">
                        <div className="chat-info">
                            <h3>Azure AI Chatbot</h3>
                            <p>I've put together a chatbot here which knows all my skills,
                                completed prejects and has a copy of my CV/Resume. You
                                can use it to ask questions about me to get a better idea of
                                who I am and what I've done.</p>
                            <p>You can also download my resume here if you want to take a look
                                at it. I'm currently looking for new opportunities so if you
                                have a project you think I'd be a good fit for, please get in touch!</p>
                            <a href="./Resume.pdf" className="button black">Download Resume</a>
                        </div>
                        <div className="chat-box">
                            <div className="scroll-area">
                                <ul id="'chat-log">
                                    {messages.map((message, index) => (
                                        <li key={index} className={`${message.role}`}>
                                            <span className={`avatar`}>
                                                {message.role === 'user' ? 'You' : 'AI'}</span>
                                            <div className="message">{message.content}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <form onSubmit={submitForm} className="chat-message">
                                <input type="text" placeholder="Hey Tony, what skills are you best at?" value={messageInput}
                                    onChange={e => setMessageInput(e.target.value)} />
                                <button className="button black">Send</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
