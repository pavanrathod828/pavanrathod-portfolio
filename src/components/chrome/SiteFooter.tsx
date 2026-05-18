interface SiteFooterProps {
  hasResume: boolean;
}

export default function SiteFooter({ hasResume }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <ul className="site-footer-links">
        <li>
          <a
            href="mailto:pavanrwork@gmail.com"
            className="site-footer-link"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pavan-rathod-64b0b7254/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-link"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pavanrathod828"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-link"
          >
            GitHub
          </a>
        </li>
        {hasResume && (
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-link"
            >
              Resume
            </a>
          </li>
        )}
      </ul>
      <p className="site-footer-credit">
        © 2026 Pavan Rathod · Built with Next.js, deployed on Vercel
      </p>
    </footer>
  );
}
