import { unstable_setRequestLocale } from 'next-intl/server';

const BlogPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);
  return <div className="p-8">Blog coming soon</div>;
};

export default BlogPage;
