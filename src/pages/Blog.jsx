import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowRight, FiClock } from "react-icons/fi";
import POSTS from "./blogData";
import { Reveal, PageHero, CtaBand } from "../components/ui";
import { formatDate, readingTime, sortByDate } from "./blogUtils";

function Meta({ post }) {
  return (
    <div className="post-meta">
      <span>{formatDate(post.date)}</span>
      <span className="sep" />
      <span><FiClock size={13} /> {readingTime(post.content)} min read</span>
    </div>
  );
}

export default function Blog() {
  const [featured, ...rest] = sortByDate(POSTS);

  return (
    <>
      <Helmet>
        <title>Blog | CodeNeeti</title>
        <meta
          name="description"
          content="Read the latest articles on web development, AI automation, SEO and technology from CodeNeeti."
        />
      </Helmet>

      <PageHero
        crumb="Blog"
        eyebrow="From the blog"
        title={<>Latest <span className="grad-text">articles</span></>}
        desc="Insights, tutorials and updates on web development, AI automation, SEO and tech careers."
      />

      <section className="section">
        <div className="container">
          {featured && (
            <Reveal>
              <Link to={`/blog/${featured.slug}`} className="card card-hover post-featured">
                <div className="post-featured-art" aria-hidden="true">
                  <span>{featured.title.split(" ").slice(0, 2).join(" ")}</span>
                </div>
                <div className="post-featured-body">
                  <span className="chip chip-accent">Latest</span>
                  <h2 className="h2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginTop: "1rem" }}>{featured.title}</h2>
                  <p className="lead" style={{ fontSize: "1rem" }}>{featured.excerpt}</p>
                  <Meta post={featured} />
                  <span className="link-arrow" style={{ marginTop: "1.25rem" }}>Read article <FiArrowRight /></span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="grid grid-3" style={{ marginTop: "1.25rem" }}>
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <Link to={`/blog/${p.slug}`} className="card card-hover post-card">
                  <Meta post={p} />
                  <h3 className="h3">{p.title}</h3>
                  <p className="post-excerpt">{p.excerpt}</p>
                  <span className="link-arrow">Read article <FiArrowRight /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
