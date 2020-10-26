import React, { ReactElement } from 'react';
import MarkdownView from 'react-showdown';

import './index.css';

interface ReadmeProps {
  children: string;
  repositoryName: string;
};

export default function Readme({ children, repositoryName }: ReadmeProps): ReactElement {
  const baseUrl = `https://raw.githubusercontent.com/${ repositoryName }/HEAD/`;
  const imgRegex = /<img.*?src="(.+?)".*?alt="(.*?)"(.*?)\/?>/gi;

  const getAbsoluteUrl = (url: string): string => {
    if (/(?:^[a-z][a-z0-9+.-]*:|\/\/)/.test(url)) {
      return url;
    }

    return `${ baseUrl }/${ url }`.replace(/([^:]\/)\/+/g, "$1");
  }

  const imageUrlReplacer = {
    type: 'output',
    filter: (text: string): string => {
      return text.replace(imgRegex, function(match, url: string, alt: string): string {
        return `<img alt="${ alt }" src="${ getAbsoluteUrl(url) }" />`;
      });
    }
    //regex: imgRegex,
    //replace: '$1'
  };

  return (
    <div className="readme">
      <MarkdownView
        extensions={ [ imageUrlReplacer ] }
        markdown={ children }
        options={{ tables: true, emoji: true }}
        />
    </div>
  );
}
