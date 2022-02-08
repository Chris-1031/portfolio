const header = {
  // all the properties are optional - can be left empty or deleted
 
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Cristi Mihaes',
  role: 'Web Developer',
  description:
    'Initially in the health sector, I chose to become a web and mobile developer via the Wild Code School training. Teamwork, adapting to any situation, managing stress and patience are qualities acquired during my past professional experiences.',
    // resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/cristi-mihaes-607b02217/',
    github: 'https://github.com/Chris-1031',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Wild Pod School',
    description:
      'First project made with my team at the begging of the Wild Code School training.',
    stack: ['CSS', 'HTML'],
    sourceCode: 'https://github.com/Tbiarneix/WildPodSchool',
    livePreview: 'https://wild-pod-school.vercel.app/',
  },
  {
    name: 'BikeBuster',
    description:
      'Bike application made in one month with my team using new methods. Only usseful on Toulouse city',
    stack: ['CSS', 'HTML', 'React', 'JavaScript', 'BootStrap'],
    sourceCode: 'https://github.com/WildCodeSchool/tlse0921-js-p2-BikeBust',
    livePreview: 'https://tlse0921-js-p2-bike-buster.vercel.app/',
  },
  {
    name: 'TbSeeds',
    description:
      'Application for a real client who need a platform for follow all the coachs and students information easily',
    stack: ['StyledComponents', 'JavaScript', 'React', 'Node.Js', 'MySql', 'Express', 'Prisma'],
    sourceCode: 'https://github.com',
    livePreview: 'https://tlse0921-js-p3-tbseeds-frontend.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'StyledComponents',
  'Material UI',
  'BootStrap',
  'Git',
  'GitHub',
  'MySql',
  'Express',
  'Prisma'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mihaes_cristi@yahoo.fr',
}

export { header, about, projects, skills, contact }
