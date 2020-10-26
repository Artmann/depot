import React, { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { FaHome, FaGit } from 'react-icons/fa';

interface PackageLinksProps {
  homepageUrl: string;
  repositoryUrl: string;
}

type Link = {
  icon: IconType;
  url: string;
};

export default function PackageLinks({ homepageUrl, repositoryUrl }: PackageLinksProps): ReactElement | null {
  const links: Link[] = [
    { icon: FaHome, url: homepageUrl },
    { icon: FaGit, url: repositoryUrl }
  ].filter(link => !!link.url);

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center mb-6 md:justify-start">
      { links.map((link, index) =>

        <a className="block mx-2 text-lg md:mx-0 md:mr-6" href={ link.url } key={ index }>
          <link.icon className="text-xl md:text-2xl" />
        </a>

      )}
    </div>
  );
}
