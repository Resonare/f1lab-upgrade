import { useContext } from "react";
import { Link } from "@remix-run/react";

import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import ContentCard from "../../components/cards/ContentCard";
import ArticleCard from "../../components/cards/ArticleCard";

import PropTypes from "prop-types";

const Articles = ({ posts = [] }) => {
  const { bgColor } = useContext(ThemeContext);

  // Transform Ghost posts to match your existing ArticleCard structure
  const transformGhostPost = (post) => ({
    id: post.id,
    date: new Date(post.published_at),
    author: post.authors?.[0]?.name || "F1Lab",
    imagePath: post.feature_image,
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    tags:
      post.tags?.map((tag) => ({
        id: tag.id,
        title: tag.name,
        color: tag.color || "consulting", // Use Ghost color or default
      })) || [],
  });

  const transformedPosts = posts.map(transformGhostPost);
  const featuredPost = transformedPosts[0];
  const regularPosts = transformedPosts.slice(1);

  return (
    <Section hero={true}>
      <SectionTitle col="max-sm:[&>p]:text-[28px] col-start-1 lg:col-end-4 md:col-end-3 col-end-5 max-sm:mb-30">
        Следите за актуальными новостями
      </SectionTitle>

      <div className="lg:col-start-4 md:col-start-3 col-start-1 col-end-5">
        <ContentCard className={`${bgColor} border-y max-sm:ml-[1px]`}>
          Здесь вы найдете новости о событиях в отрасли и анонсы F1lab
        </ContentCard>
      </div>

      {featuredPost && (
        <Link to={`/blog/${featuredPost.slug}`} className="contents">
          <ArticleCard
            className="my-[50px]"
            col="col-start-1 col-end-5"
            articleData={featuredPost}
            small={false}
            bgColor={bgColor}
          />
        </Link>
      )}

      {regularPosts.length === 0 && !featuredPost && (
        <div className="col-start-1 col-end-5 text-center py-20">
          <p className="text-gray-500">Статьи не найдены</p>
        </div>
      )}

      {regularPosts.map((articleData, index) => {
        const col =
          index % 2 === 0
            ? `col-start-1 lg:col-end-3 col-end-5`
            : `lg:col-start-3 col-start-1 col-end-5`;

        return (
          <Link
            to={`/blog/${articleData.slug}`}
            key={articleData.id}
            className="contents"
          >
            <ArticleCard
              className="lg:mb-60 mb-30"
              col={col}
              articleData={articleData}
            />
          </Link>
        );
      })}
    </Section>
  );
};

Articles.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default Articles;
