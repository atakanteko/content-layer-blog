import React from 'react';

const BlogDetailPage = ({ params }: { params: { slug: string } }) => {
  console.log('debug-issue', params.slug);

  return <div>BlogDetailPage</div>;
};

export default BlogDetailPage;
