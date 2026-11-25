import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft, FiArrowRight, FiClock, FiCalendar, FiChevronRight } from "react-icons/fi";
import POSTS from "./blogData";
import { Reveal } from "../components/ui";
import { formatDate, readingTime, sortByDate } from "./blogUtils";

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeLinkUrl(url) {
  const normalizedUrl = url.trim().replace(/^\{\{/, "").replace(/\}\}$/, "");

  return /^(https?:|mailto:|tel:|\/)/i.test(normalizedUrl) ? normalizedUrl : null;
}

function renderInlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, (_, label, url) => {
      const href = sanitizeLinkUrl(url);
      return href
        ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
        : label;
    });
}

function renderMarkdown(raw) {
  const lines = raw.split("\n");
  let html = "";
  let inList = false;

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      return;
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      const level = headingMatch[1].length;
      html += `<h${level}>${renderInlineMarkdown(headingMatch[2])}</h${level}>`;
      return;
    }

    if (trimmed.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${renderInlineMarkdown(trimmed.slice(2))}</li>`;
      return;
    }

    if (inList) {
      html += "</ul>";
      inList = false;
    }

    html += `<p>${renderInlineMarkdown(trimmed)}</p>`;
  });

  if (inList) {
    html += "</ul>";
  }

  return html;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug) || null;

  if (!post) {
    return (
      <section className="page-hero" style={{ minHeight: "70vh" }}>
        <div className="container">
          <h1 className="h1">Post <span className="grad-text">not found</span></h1>
          <p className="lead" style={{ marginBottom: "2rem" }}>The requested article could not be located.</p>
          <Link to="/blog" className="btn btn-primary"><FiArrowLeft /> Back to Blog</Link>
        </div>
      </section>
    );
  }

  const canonicalUrl = `https://codeneeti.in/blog/${post.slug}`;
  const metaTitle = post.metaTitle || `${post.title} | CodeNeeti`;
  const metaDescription = post.metaDescription || post.excerpt || "Read the latest article from CodeNeeti.";
  const related = sortByDate(POSTS.filter((p) => p.slug !== post.slug)).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="CodeNeeti" />
      </Helmet>

      <article>
        <header className="page-hero article-hero">
          <div className="container">
            <Reveal>
              <nav className="crumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <FiChevronRight size={14} />
                <Link to="/blog">Blog</Link>
                <FiChevronRight size={14} />
                <span>Article</span>
              </nav>
              <h1 className="h1">{post.title}</h1>
              <div className="article-meta">
                <span><FiCalendar size={14} /> {formatDate(post.date)}</span>
                <span><FiClock size={14} /> {readingTime(post.content)} min read</span>
                <span>By CodeNeeti Team</span>
              </div>
            </Reveal>
          </div>
        </header>

        <div className="section" style={{ paddingTop: "3.5rem" }}>
          <div className="container">
            <div className="prose blog-post-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />

            <aside className="article-cta">
              <div>
                <h2 className="h3" style={{ fontSize: "1.35rem" }}>Need help with your project?</h2>
                <p className="muted">Talk to the CodeNeeti team. Free consultation, quick response.</p>
              </div>
              <Link to="/contact" className="btn btn-primary">Contact Us <FiArrowRight /></Link>
            </aside>

            <div className="article-back">
              <Link to="/blog" className="link-arrow"><FiArrowLeft /> Back to all articles</Link>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="eyebrow">Keep reading</div>
            <h2 className="h2" style={{ marginBottom: "2rem" }}>Related <span className="grad-text">articles</span></h2>
            <div className="grid grid-3">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="card card-hover post-card">
                  <div className="post-meta">
                    <span>{formatDate(p.date)}</span>
                    <span className="sep" />
                    <span><FiClock size={13} /> {readingTime(p.content)} min read</span>
                  </div>
                  <h3 className="h3">{p.title}</h3>
                  <p className="post-excerpt">{p.excerpt}</p>
                  <span className="link-arrow">Read article <FiArrowRight /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
