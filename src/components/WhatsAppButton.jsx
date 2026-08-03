import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '918623965098';
  const message = encodeURIComponent('Hello Bethesda Trust, I would like to know more about your charitable initiatives and how I can support.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="whatsapp-float-wrapper">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat on WhatsApp with Bethesda Trust (+91 86239 65098)"
      >
        {/* Pulsing ring animation */}
        <span className="whatsapp-pulse-ring" />
        
        {/* WhatsApp Official SVG Icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          className="whatsapp-icon"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.71 1.454h.005c6.554 0 11.89-5.335 11.894-11.893a11.82 11.82 0 00-3.482-8.412" />
        </svg>

        {/* Hover Tooltip */}
        <span className="whatsapp-tooltip">Chat with Us on WhatsApp</span>
      </a>

      <style>{`
        .whatsapp-float-wrapper {
          position: fixed;
          bottom: 28px;
          left: 28px;
          z-index: 160;
        }

        .whatsapp-float-btn {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          text-decoration: none;
        }

        .whatsapp-float-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.65);
        }

        /* Pulsing Ring */
        .whatsapp-pulse-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.6);
          animation: waPulse 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
          pointer-events: none;
        }

        /* Tooltip */
        .whatsapp-tooltip {
          position: absolute;
          left: 64px;
          top: 50%;
          transform: translateY(-50%) translateX(-8px);
          background: rgba(15, 23, 42, 0.9);
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .whatsapp-float-btn:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        @keyframes waPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          .whatsapp-float-wrapper {
            bottom: 20px;
            left: 20px;
          }
          .whatsapp-float-btn {
            width: 46px;
            height: 46px;
          }
          .whatsapp-icon {
            width: 24px;
            height: 24px;
          }
          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
