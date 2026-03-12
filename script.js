// Adicionar estilos CSS dinamicamente
const styles = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-image: linear-gradient(rgba(0,0,0,0.47), rgba(0,0,0,0.47))
                          url('https://coralplaza.com.br/wp-content/uploads/2020/04/298663-veja-os-4-melhores-lugares-para-assistir-o-por-do-sol-na-praia-no-brasil.jpg');
        background-size: cover;
        background-position: center;
        min-height: 100vh;
    }
        
    h1, h2, h3 {
        color: #ffffff;
        margin-bottom: 5px;
        animation: slideDown 0.6s ease-out;
    }
        
    p, span {
        animation: slideDown 0.6s ease-out;
        color: #ffffff;
        line-height: 1.6;
    }

    button, input, select {
        padding: 10px 15px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 14px;
    }

    button {
        background: #667eea;
        color: white;
    }

    button:hover {
        background: #764ba2;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    input, select {
        border: 2px solid #ddd;
        background: white;
    }

    input:focus, select:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 8px rgba(102, 126, 234, 0.3);
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        body { padding: 10px; }
        h1 { font-size: 24px; }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Adicionar interatividade
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});