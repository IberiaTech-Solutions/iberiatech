import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BLOG_POSTS, getBlogPost } from '@/data/blog'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPost(params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['IberiaTech Solutions'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'IberiaTech Solutions',
      url: 'https://iberiatech.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'IberiaTech Solutions',
      url: 'https://iberiatech.com',
    },
    keywords: post.tags,
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://iberiatech.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://iberiatech.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://iberiatech.com/blog/${post.slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
      <article className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link
            href="/blog"
            className="text-sm text-primary-700 dark:text-primary-400 hover:underline mb-8 inline-block"
          >
            &larr; Back to Blog
          </Link>
          <header className="mb-10">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {post.content
              .trim()
              .split('\n')
              .map((line, i) => {
                const trimmed = line.trim()
                if (!trimmed) return <br key={i} />
                if (trimmed.startsWith('# '))
                  return null // skip h1 — already in header
                if (trimmed.startsWith('## '))
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4"
                    >
                      {trimmed.slice(3)}
                    </h2>
                  )
                if (trimmed.startsWith('### '))
                  return (
                    <h3
                      key={i}
                      className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-3"
                    >
                      {trimmed.slice(4)}
                    </h3>
                  )
                if (trimmed.startsWith('- **'))
                  return (
                    <li key={i} className="ml-4 text-gray-700 dark:text-gray-300 mb-2">
                      <strong>{trimmed.match(/\*\*(.*?)\*\*/)?.[1]}</strong>
                      {trimmed.replace(/- \*\*.*?\*\*/, '').replace(/—/, ' —')}
                    </li>
                  )
                if (trimmed.startsWith('- '))
                  return (
                    <li key={i} className="ml-4 text-gray-700 dark:text-gray-300 mb-2">
                      {trimmed.slice(2)}
                    </li>
                  )
                if (trimmed === '---')
                  return (
                    <hr key={i} className="my-10 border-gray-200 dark:border-gray-700" />
                  )
                if (trimmed.startsWith('*') && trimmed.endsWith('*'))
                  return (
                    <p key={i} className="text-gray-500 dark:text-gray-400 italic mt-6">
                      {trimmed.slice(1, -1)}
                    </p>
                  )
                return (
                  <p key={i} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {trimmed}
                  </p>
                )
              })}
          </div>
        </div>
      </article>
    </>
  )
}
