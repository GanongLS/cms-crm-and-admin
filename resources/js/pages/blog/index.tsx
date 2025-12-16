import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';

const posts = [
  {
    title: 'Why We Build Calm Software',
    slug: 'why-we-build-calm-software',
    excerpt: 'Our philosophy on clarity, focus, and sustainable systems.',
    date: '2025-01-12',
  },
  {
    title: 'Ganin Enterprise: Direction & Vision',
    slug: 'ganin-direction-vision',
    excerpt: 'How our projects connect across industries.',
    date: '2025-01-05',
  },
];

export default function BlogIndex() {
  return (
    <>
      <Head title="Blog" />

      <section className="blog-index">
        <header className="blog-header">
          <h1>Blog</h1>
          <p>Updates, insights, and public releases from Ganin Enterprise.</p>
        </header>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <span className="blog-date">{post.date}</span>

              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

BlogIndex.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;
