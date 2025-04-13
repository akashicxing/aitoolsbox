import { useMatches, Link } from 'react-router-dom';
import { generateBreadcrumbSchema } from '../utils/schema';

interface Handle {
  breadcrumb: (params: any) => string;
}

interface Match {
  pathname: string;
  params: any;
  handle?: Handle;
}

export const Breadcrumb = () => {
  const matches = useMatches() as Match[];
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.breadcrumb))
    .map((match) => {
      const breadcrumb = match.handle!.breadcrumb(match.params);
      return {
        name: breadcrumb,
        url: match.pathname
      };
    });

  // 生成 Schema.org 结构化数据
  const schema = generateBreadcrumbSchema(crumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="breadcrumb" className="py-4 mb-4">
        <ol className="flex items-center space-x-2 text-sm">
          {crumbs.map((crumb, index) => (
            <li key={crumb.url} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">/</span>}
              {index === crumbs.length - 1 ? (
                <span className="text-gray-600 font-medium">{crumb.name}</span>
              ) : (
                <Link
                  to={crumb.url}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}; 