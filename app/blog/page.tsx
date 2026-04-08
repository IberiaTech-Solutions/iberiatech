import { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Blog | IberiaTech Solutions',
  description:
    'Web development tips, SEO guides, and bilingual business insights for Charleston small businesses. Practical advice from IberiaTech Solutions.',
  openGraph: {
    title: 'Blog | IberiaTech Solutions',
    description:
      'Web development tips, SEO guides, and bilingual business insights for Charleston small businesses.',
  },
}

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Tips on web development, SEO, and growing your business online.
        </p>

        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="mt-1 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {post.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
