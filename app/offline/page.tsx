export default function OfflinePage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Offline — Mike Software</title>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
          }
          .container {
            text-align: center;
            max-width: 400px;
            width: 100%;
          }
          .logo-wrapper {
            width: 80px;
            height: 80px;
            border-radius: 20px;
            overflow: hidden;
            margin: 0 auto 1.5rem;
            border: 2px solid #dbeafe;
            box-shadow: 0 8px 32px rgba(37,99,235,0.15);
          }
          .logo-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .brand {
            font-size: 1.5rem;
            font-weight: 900;
            color: #111827;
            margin-bottom: 0.5rem;
            letter-spacing: -0.5px;
          }
          .brand span { color: #2563EB; }
          .icon {
            font-size: 4rem;
            margin-bottom: 1rem;
          }
          h1 {
            font-size: 1.25rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 0.75rem;
          }
          p {
            color: #6b7280;
            font-size: 0.9375rem;
            line-height: 1.7;
            margin-bottom: 2rem;
          }
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.875rem 2rem;
            background: #2563EB;
            color: white;
            font-weight: 700;
            font-size: 0.9375rem;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(37,99,235,0.3);
            transition: background 0.2s, transform 0.2s;
            text-decoration: none;
          }
          .btn:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
          }
          .pulse {
            display: inline-block;
            width: 10px;
            height: 10px;
            background: #fbbf24;
            border-radius: 50%;
            animation: pulse 1.5s ease-in-out infinite;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.4); opacity: 0.7; }
          }
          .bar {
            width: 100%;
            height: 3px;
            background: #e5e7eb;
            border-radius: 99px;
            overflow: hidden;
            margin-top: 2rem;
          }
          .bar-inner {
            height: 100%;
            width: 40%;
            background: linear-gradient(90deg, #2563EB, #60a5fa);
            border-radius: 99px;
            animation: shimmer 2s ease-in-out infinite;
          }
          @keyframes shimmer {
            0% { margin-left: -40%; }
            100% { margin-left: 100%; }
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="logo-wrapper">
            <img src="/logodesign.jpeg" alt="Mike Software Logo" />
          </div>
          <div className="brand">Mike<span>Software</span></div>
          <div className="icon">📡</div>
          <h1>You are currently offline</h1>
          <p>
            Please check your internet connection and try again.
            Some content may still be available from cache.
          </p>
          <a className="btn" href="/" onClick="window.location.reload()">
            <span className="pulse" />
            Try Again
          </a>
          <div className="bar"><div className="bar-inner" /></div>
        </div>
      </body>
    </html>
  );
}
