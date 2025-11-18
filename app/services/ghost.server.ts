import GhostContentAPI from "@tryghost/content-api";

// Initialize Ghost API
const api = new GhostContentAPI({
  url: import.meta.env.VITE_GHOST_URL || "https://blog.f1lab.ru",
  key: import.meta.env.VITE_GHOST_CONTENT_API_KEY!,
  version: "v5.0",
});

export interface GhostPost {
  id: string;
  title: string;
  slug: string;
  html: string;
  excerpt: string;
  feature_image: string;
  published_at: string;
  updated_at: string;
  created_at: string;
  authors: Array<{
    id: string;
    name: string;
    slug: string;
    profile_image?: string;
  }>;
  tags: Array<{
    id: string;
    name: string;
    slug: string;
    color?: string;
  }>;
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
  twitter_image?: string;
  reading_time: number;
}

export interface GhostTag {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  feature_image?: string;
  count: {
    posts: number;
  };
}

export async function getPosts(options?: {
  limit?: number;
  page?: number;
  include?: string[];
  filter?: string;
  order?: string;
}): Promise<GhostPost[]> {
  try {
    const posts = await api.posts.browse({
      limit: options?.limit || 15,
      page: options?.page || 1,
      include: options?.include || ["tags", "authors"],
      filter: options?.filter,
      order: options?.order || "published_at DESC",
      formats: ["html"],
    });

    return posts as GhostPost[];
  } catch (error) {
    console.error("Error fetching posts from Ghost:", error);
    throw new Error("Failed to fetch posts");
  }
}

export async function getPostBySlug(slug: string): Promise<GhostPost | null> {
  try {
    const post = await api.posts.read(
      { slug },
      {
        include: ["tags", "authors"],
        formats: ["html"],
      }
    );

    return post as GhostPost;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

export async function getPostById(id: string): Promise<GhostPost | null> {
  try {
    const post = await api.posts.read(
      { id },
      {
        include: ["tags", "authors"],
        formats: ["html"],
      }
    );

    return post as GhostPost;
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    return null;
  }
}

export async function getTags(): Promise<GhostTag[]> {
  try {
    const tags = await api.tags.browse({
      include: ["count.posts"],
      order: "count.posts DESC",
    });

    return tags as GhostTag[];
  } catch (error) {
    console.error("Error fetching tags from Ghost:", error);
    throw new Error("Failed to fetch tags");
  }
}

export async function getPostsByTag(
  tagSlug: string,
  options?: {
    limit?: number;
    page?: number;
  }
): Promise<GhostPost[]> {
  try {
    const posts = await api.posts.browse({
      limit: options?.limit || 15,
      page: options?.page || 1,
      include: ["tags", "authors"],
      filter: `tag:${tagSlug}`,
      order: "published_at DESC",
      formats: ["html"],
    });

    return posts as GhostPost[];
  } catch (error) {
    console.error(`Error fetching posts for tag ${tagSlug}:`, error);
    throw new Error("Failed to fetch posts by tag");
  }
}

export async function searchPosts(
  query: string,
  options?: {
    limit?: number;
    page?: number;
  }
): Promise<GhostPost[]> {
  try {
    const posts = await api.posts.browse({
      limit: options?.limit || 15,
      page: options?.page || 1,
      include: ["tags", "authors"],
      filter: `title:~'${query}',excerpt:~'${query}'`,
      order: "published_at DESC",
      formats: ["html"],
    });

    return posts as GhostPost[];
  } catch (error) {
    console.error(`Error searching posts with query ${query}:`, error);
    throw new Error("Failed to search posts");
  }
}
