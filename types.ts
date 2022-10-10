import { ParsedUrlQuery } from 'querystring'
import React from 'react'

export interface PostMeta {
    title: string,
    description: string,
    tags: string[],
    publishedAt: string
}

export interface Post {
    meta: PostMeta
    content: string
}

export interface PostParams extends ParsedUrlQuery {
    slug: string,
}

export interface ChildrenProp {
    children: React.ReactNode
}