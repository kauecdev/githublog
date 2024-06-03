import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

const GITHUB_USERNAME = 'kauecdev'
const GITHUB_REPO_NAME = 'githublog'

interface UserDetails {
  login: string
  name: string
  bio: string
  html_url: string
  followers: number
  company: string
  avatar_url: string
}

export interface Issue {
  number: number
  title: string
  body: string
  html_url: string
  comments: number
  created_at: string
}

interface BlogContextType {
  userDetails: UserDetails
  issues: Issue[]
  fetchGithubIssues: (querySearch: string) => void
  fetchGithubIssueById: (id: string) => Promise<Issue>
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    bio: '',
    avatar_url: '',
    company: '',
    followers: 0,
    html_url: '',
    login: '',
  })

  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchGithubUserDetails() {
    const response = await api.get(`/users/${GITHUB_USERNAME}`)
    setUserDetails(response.data)
  }

  async function fetchGithubIssues(querySearch: string = '') {
    const response = await api.get(
      `/search/issues?q=${querySearch}%20repo:${GITHUB_USERNAME}/${GITHUB_REPO_NAME}`,
    )
    setIssues(response.data.items)
  }

  async function fetchGithubIssueById(id: string) {
    const response = await api.get(
      `repos/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/issues/${id}`,
    )

    return response.data
  }

  useEffect(() => {
    fetchGithubUserDetails()
  }, [])

  return (
    <BlogContext.Provider
      value={{ userDetails, issues, fetchGithubIssues, fetchGithubIssueById }}
    >
      {children}
    </BlogContext.Provider>
  )
}
