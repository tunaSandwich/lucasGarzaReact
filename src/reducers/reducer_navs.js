export default function(){
  return [
    {
      title: 'Lucas Garza',
      backgroundImg: '../../style/images/backgroundLucas.jpg',
      occupation: 'Software Engineer',
      github: {title: 'Github', imgLink: '../../style/images/stackSymbols/githubIcon.png', link: 'https://github.com/tunaSandwich'},
      linkedin: {title: 'LinkedIn', imgLink: '../../style/images/stackSymbols/linkedIcon.png', link: 'www.linkedin.com/in/lucasgonzalezgarza'},
      skillSets: [
        [{ id: 'one', icon: '../../style/images/stackSymbols/JSLogo.png', name: 'JavaScript'}, { id: '2', icon: '../../style/images/stackSymbols/ES6Logo.jpg', name: 'ES6 Syntax'}, { id: '3', icon: '../../style/images/stackSymbols/mongoDBLogo.png', name: 'MongoDB'}, { id: '4', icon: '../../style/images/stackSymbols/socketIOLogo.gif', name: 'SocketIO'}],
        [{ id: '5', icon: '../../style/images/stackSymbols/mongoLabLogo.png', name: 'Mongo Lab'}, { id: '6', icon: '../../style/images/stackSymbols/reactIcon.png', name: 'React'}, { id: '7', icon: '../../style/images/stackSymbols/reduxLogo.png', name: 'Redux'}, { id: '8', icon: '../../style/images/stackSymbols/herokuIcon.png', name: 'Heroku'}],
        [{ id: '9', icon: '../../style/images/stackSymbols/nodeJSLogo.png', name: 'NodeJS'}, { id: '10', icon: '../../style/images/stackSymbols/expressLogo.png', name: 'Express'}, { id: '11', icon: '../../style/images/stackSymbols/htmlLogo.png', name: 'HTML'}, { id: '12', icon: '../../style/images/stackSymbols/cssLogo.png', name: 'CSS'}],
      ],
      phone: '(626) 807-5538',
      email: 'gonzalezgarza.lucas@gmail.com',
      id: 'Lucas'
    },
    {
      title: 'Projects',
      project: [
        {
          title: 'My Map App',
          projectStack: 'Javascript, Node, Express, MongoDB. Mongoose, MongoLab, EJS, Heroku, Bootstrap',
          description: 'I am the sole developer on this project. Users build up their personal map with all the cities and destinations that they have visited. They can then follow other users’ maps to compare each other’s destinations. I used an authentication middleware for Node called Passport.js. This project is far from finished, and I will continue to add features to this project. ',
          link: 'https://mymapapp.herokuapp.com',
          imgLink: 'https://feel-planet.com/wp-content/uploads/2015/05/yellowstone-national-park-usa.jpg'
        },
        {
          title: 'Personal Website',
          projectStack: 'React, Redux, JavaScript, ES6, SocketIO, Webpack, Babel',
          description: ' This site is built with the React Framework together with Redux. The message form establishes a connection with my express server using SocketIO.',
          link: 'http://lucasgarza.com',
          imgLink: '../../style/images/lucasGarzaImg.jpg'
        }
      ],
      id: 'Projects'
    },
    {
      title: 'Résumé',
      file: '../../style/lucasResumeProgramming.pdf',
      page: 1,
      id: 'Resume'
    }
]
}
