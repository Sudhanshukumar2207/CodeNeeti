import "./Blog.css";
import POSTS from "./blogData";
import { useParams, useNavigate } from "react-router-dom";

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

    const headingMatch = trimmed.match(/^(#{2,6})\s+(.*)$/);
    if (headingMatch) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      const level = headingMatch[1].length;
      html += `<h${level}>${escapeHtml(headingMatch[2])}</h${level}>`;
      return;
    }

    if (trimmed.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${escapeHtml(trimmed.slice(2))}</li>`;
      return;
    }

    if (inList) {
      html += "</ul>";
      inList = false;
    }

    html += `<p>${escapeHtml(trimmed)}</p>`;
  });

  if (inList) {
    html += "</ul>";
  }

  return html;
}

export default function BlogPost() {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const navigate = useNavigate();
  const post = POSTS.find((p) => p.id === postId) || null;

  if (!post) {
    return (
      <div className="section">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <h2 className="section-title">Post Not Found</h2>
          <p className="section-desc">The requested article could not be located.</p>
          <div style={{ marginTop: "1.5rem" }}>
            <button className="btn btn-primary" onClick={() => { navigate("/blog"); }}>
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="section-inner">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-tag">Article</div>
          <h1 style={{ marginTop: "0.5rem" }}>{post.title}</h1>
          <div style={{ color: "var(--text-muted)", marginBottom: "1.25rem" }}>{post.date}</div>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />

          <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem" }}>
            <button className="btn btn-outline" onClick={() => { navigate("/blog"); }}>
              Back to Articles
            </button>
            <button className="btn btn-primary" onClick={() => { navigate("/contact"); window.scrollTo({ top: 0 }); }}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
