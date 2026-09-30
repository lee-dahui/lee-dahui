// gitprofile.config.ts


const CONFIG = {
  github: {
    username: 'lee-dahui', // TODO: GitHub 사용자명으로 바꿔 주세요. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/', // TODO: 저장소 이름이 <USERNAME>.github.io가 아니면 '/<저장소명>/'으로 바꿔 주세요.
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['username/my-project1', 'username/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['username/my-project1', 'username/my-project2']
      },
    },
    external: {
      header: 'Research Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Dahui Lee',
    description:
      'Ph.D. student in Mathematical Sciences at UNIST, working on fractional differential equations, reservoir computing, phase-field dynamics, and numerical methods for PDEs.',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'dahee0130@unist.ac.kr',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  // Research interests (shown in the skills section)
  skills: [
    'Reservoir Computing',
    'Fractional Differential Equations',
    'Dynamics of Phase-field Models',
    'Numerical Methods for PDEs',
  ],
  experiences: [
    {
      company: 'K-AlphaTox, Kyungpook National University',
      position: 'Research Assistant',
      from: 'April 2026',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Korean Women in Mathematical Sciences',
      position: 'Intern',
      from: 'May 2026',
      to: 'Present',
      companyLink: '',
    },
    {
      company:
        'Nonlinear Dynamics & Mathematical Application Center (NDMAC), Kyungpook National University',
      position: 'Research Assistant (NRF Science Research Center)',
      from: 'March 2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Computational Mathematics Lab, UNIST',
      position: 'Undergraduate Researcher',
      from: 'January 2023',
      to: 'February 2024',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Research Scholarship for M.S. Studies',
      body: 'National Research Foundation of Korea (NRF) — Numerical Analysis of Nanofluid Heat Convection of Fractional Differential Equations',
      year: 'July 2024 – June 2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Ulsan National Institute of Science and Technology (UNIST)',
      degree: 'Ph.D. Student, Mathematical Sciences (GPA 3.81/4.3)',
      from: '2024',
      to: 'Present',
    },
    {
      institution: 'Ulsan National Institute of Science and Technology (UNIST)',
      degree: 'B.S. in Mathematical Sciences (GPA 3.63/4.3)',
      from: '2020',
      to: '2024',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
