import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
// import Container from '../../components/container'
import PostBody from '../../components/post-body'
// import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
// import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'

import Header from '../../components/myheader.js'
import { Container, Box, Text } from '@chakra-ui/layout'
import {
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'

import markdownToHtml from 'zenn-markdown-html'
import 'zenn-content-css';
import Script from 'next/script'
import React, { useState, useEffect } from 'react'


type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Box
      bg={useColorModeValue('#F0E7DB', '#202023')}
    >

      <Layout preview={preview}>

        <Header />

        <Container
          maxW={"75ch"}
        >
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>{title}</title>
                  <meta property="og:image" content={post.ogImage.url} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <div className='znc'>
                  <PostBody content={post.content} />
                </div>
              </article>
            </>
          )}
        </Container>
      </Layout>
    </Box>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  // const content = await markdownToHtml(post.content || '')
  const content = markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
