import { GithubUserType } from "@/app/integrate/github/route";
import { Endpoints } from "@octokit/types";

export type GithubUserReposType = Endpoints["GET /users/{username}/repos"]["response"]["data"];

export type GithubInputType = {
    bio: string | null,
    avatar_url: string | null,
    name: string | null,
    html_url: string,
    company: string | null,
    login: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    blog: string | null,
    repos: GithubRepoType[]
}

export type GithubRepoType = {
    name: string, 
    full_name: string, 
    fork: boolean, 
    html_url: string, 
    homepage: string | null | undefined, 
    language: string | null | undefined,
    size: number | undefined, 
    stargazers_count: number | undefined, 
    license: {
        key?: string | undefined;
        name?: string | undefined;
        spdx_id?: string | undefined;
        url?: string | undefined;
        node_id?: string | undefined;
    } | null | undefined, 
    private_status: boolean, 
    description: string | null, 
    created_at: string | null | undefined, 
    updated_at: string | null | undefined, 
    forks_count: number | undefined, 
    visibility: string | undefined, 
    allow_forking: boolean | undefined
}

export async function fetchUserRepos(reposUrl: string): Promise<GithubRepoType[]> {
    const res = await fetch(reposUrl);
    const repos: GithubUserReposType = await res.json();

    return repos.map(repo => {
        const { name, full_name, fork, html_url, homepage, language, size, stargazers_count, license, private: private_status, description, created_at, updated_at, forks_count, visibility, allow_forking } = repo;

        return {
            name, full_name, fork, html_url, homepage, language, size, stargazers_count, license, private_status, description, created_at, updated_at, forks_count, visibility, allow_forking
        }
    })
    
}

export async function integrateGithub(user: GithubUserType): Promise<GithubInputType> {
    const { bio, avatar_url, html_url, company, login, name, public_repos, public_gists, followers, following, blog, repos_url } = user;

    const repos = await fetchUserRepos(repos_url);

    return {
        name,
        bio,
        avatar_url,
        html_url,
        company,
        login,
        public_repos,
        public_gists,
        followers,
        following ,
        blog,
        repos
    }
}