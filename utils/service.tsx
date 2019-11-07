export function getProjects() {
  return [
    {
      slug: 'social-graphs-project',
      title: 'Social Graphs and Interactions - Final project',
      body: `Here are some requirements
      - The page should say clearly what the dataset is and give the reader some idea of its most important properties (kind of Project Assignment A-style).
      - The page should contain your network and text analysis (that's the main part).
      - There should be download options for data sets (so the user can play around).
      - You must link to the Explainer Notebook (more details below) that explains the details of your analysis (including all of the machine learning, the model selection, etc). You can achieve this with a link to an IPython notebook displaying on the nbviewer.
      
      For hosting, I recommend using your DTU website or github pages.`,
    },
    {
      slug: 'c40-cities',
      title: 'C40 Solution Roadmap',
      body: 'body',
      urls: ['http://nextgenerationcityaction.com/2-ee-nairobi/'],
      img:
        'https://www.c40.org/assets/C40_logo-57b38ee305dfba11d55bea4e52203d6606e588e60d5aaf91fb196307221acf90.svg',
      updatedDate: Date.now(),
    },
    {
      slug: 'hardtech-rewop',
      title: 'REWOP',
      body: 'body',
      img: '/rewop-logo.png',
    },
    {
      slug: 'next-best-evah',
      title: 'Next.js is the best evah',
      body:
        'This site is one of my projects. So thank you ZEIT for NextJS to make this site a reality',
      urls: ['https://nextjs.org/', 'https://zeit.co/'],
      img: 'https://miro.medium.com/max/512/1*lZZf1laALWBuD-U3WNJiuA.jpeg',
    },
  ];
}

export function getProject(slug: string) {
  return getProjects().find(p => p.slug == slug);
}
