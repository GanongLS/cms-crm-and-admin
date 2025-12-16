import PublicLayout from '@/layouts/public-layout';
import { Head, Link } from '@inertiajs/react';

type Props = {
  slug: string;
};

export default function BlogShow({ slug }: Props) {
  return (
    <>
      <Head title={slug.replace('-', ' ')} />

      <article className="blog-article">
        <Link href="/blog" className="blog-back">
          ← Back to blog
        </Link>

        <h1>Why We Build Calm Software</h1>
        <span className="blog-date">2025-01-12</span>

        <div className="blog-content">
          <p>
            Calm software is not about minimal features — it is about intentional design, reduced cognitive load, and
            systems that respect attention.
          </p>

          <p>At Ganin Enterprise, every product starts with clarity before scale.</p>
        </div>
      </article>
    </>
  );
}

BlogShow.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;
