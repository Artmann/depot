import React, { ReactElement, useState } from 'react';
import MarkdownView from 'react-showdown';

import releases from './releases.json';

console.log(releases);

interface ReleaseBrowserProps {
  repositoryName: string;
};

export default function ReleaseBrowser({ repositoryName }: ReleaseBrowserProps): ReactElement {
  const [ selectedIndex, setSelectedIndex ] = useState(0);
  const release = releases[selectedIndex];

  return (
    <div className="flex flex-col-reverse md:flex-row">

      <div className="md:pr-32">
        <div className="mb-2 text-xl">
          <span className="font-bold">{ releases.length } </span> releases
        </div>

        <div className="">
          { releases.map((release, index) => {
            return (
              <div className="flex mb-2" key={ index } onClick={(() => setSelectedIndex(index))}>
                <div className="font-semibold flex-1 pr-16">
                  <span className={ index === selectedIndex ? 'text-accent' : ''}>
                    { release.tag_name }
                  </span>
                </div>
                <div className="text-right">
                  6 hours ago
                </div>
              </div>
            )
          })}
        </div>

      </div>

      <div className="mb-4">
        <h3 className="mb-4 text-2xl">
          { release.tag_name }
        </h3>
        <div className="text-sm readme">
          <MarkdownView
            markdown={ release.body }
            options={{ tables: true, emoji: true }}
          />
        </div>
      </div>

    </div>
  );
}
