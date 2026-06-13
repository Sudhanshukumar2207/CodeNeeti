import "./Blog.css";
import POSTS from "./blogData";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="blog-page">
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: "center" }}>
            <div className="section-tag">From the Blog</div>
            <h2 className="section-title">Latest <span>Articles</span></h2>
            <p className="section-desc" style={{ margin: "0 auto", maxWidth: 720 }}>
              Insights, tutorials and updates from the CodeNeeti team.
            </p>
          </div>

          <div className="posts-grid" style={{ marginTop: "2.5rem" }}>
            {POSTS.map((p) => (
              <article
                className="card card-post"
                key={p.id}
                style={{ cursor: "pointer" }}
              >
                <div className="post-meta">
                  <span className="post-date">{p.date}</span>
                </div>
                <h3 className="post-title">{p.title}</h3>
                <p className="post-excerpt">{p.excerpt}</p>
                <div className="post-actions">
                  <Link to={`/blog/${p.slug}`} className="btn btn-outline" onClick={() => window.scrollTo({ top: 0 })}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
