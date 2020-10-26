import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import Readme from './readme';

import PackageLinks from './package-links';

import packageDetails from './package.json';
import ReleaseBrowser from './release-browser';

export default function PackageRoute(): ReactElement {
  const params = useParams();

  const latestVersion = packageDetails['dist-tags']['latest'] || '1.0.0';
  const repositoryUrl = (packageDetails.repository.url || '')
    .replace('git+https', 'https')
    .replace(/\.git$/, '');


  console.log(packageDetails);

  console.log(params);

  return (
    <div className="">

      { /* Header */ }
      <div className="bg-accent py-8 text-center text-white shadow-md md:text-left md:py-16">
        <div className="container mx-auto px-8">

          <div className="flex items-baseline justify-center mb-4 md:justify-start">
            <div className="text-sm invisible md:hidden">
              { latestVersion }
            </div>
            <h1 className="block text-2xl uppercase mr-2 md:text-4xl">
              { packageDetails.name }
            </h1>
            <div className="text-sm md:text-xl">
              { latestVersion }
            </div>
          </div>

          <div className="mb-6 md:text-lg">
            { packageDetails.description }
          </div>

          <PackageLinks
            homepageUrl={ packageDetails.homepage }
            repositoryUrl={ repositoryUrl }
            />

        </div>
      </div>

      { /* Details */}
      <div className="bg-gray-300 py-8 shadow-md md:py-16">
        <div className="container mx-auto px-8">

        <div>
          <div className="flex justify-center text-center mb-16 md:justify-start md:text-left">
            <div className="px-6">
              <div className="mb-2 text-xs tracking-wide uppercase">
                License
              </div>
              <div className="text-lg">
                MIT
              </div>
            </div>
            <div className="px-6 border-l border-r border-gray-200">
              <div className="mb-2 text-xs tracking-wide uppercase">
                Published
              </div>
              <div className="text-lg uppercase">
                7 months ago
              </div>
            </div>
            <div className="px-6">
              <div className="mb-2 text-xs tracking-wide uppercase">
                Stars
              </div>
              <div className="text-lg">
                123
              </div>
            </div>
          </div>

          <div className="mb-4 text-center md:text-left">
            <div className="font-mono p-3 text-sm mx-auto w-auto">
              <span className="bg-gray-200 px-8 py-4 shadow-md md:pr-32">
                yarn add <span className="text-indigo-700">{ packageDetails.name }@{ latestVersion }</span>
              </span>
            </div>
          </div>

        </div>

        </div>
      </div>

      { /* Readme */ }
      <div className="container mx-auto px-8 py-4 shadow-md md:py-8">
        <Readme repositoryName={ "chalk/chalk" }>
          { packageDetails.readme }
        </Readme>
      </div>

      { /* Details */}
      <div className="bg-gray-300 py-8 shadow-md md:py-16">
        <div className="container mx-auto px-8">
          <ReleaseBrowser repositoryName="chalk/chalk" />
        </div>
      </div>

    </div>
  );
}
