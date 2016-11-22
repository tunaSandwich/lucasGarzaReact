export default function(){
  return [
    {
      title: 'Lucas Garza',
      backgroundImg: '../../style/images/backgroundLucas.jpg',
      occupation: 'Softare Engineer',
      skills: [['JavaScript', 'ES6 Syntax', 'MongoDB', 'Mongoose'], ['MongoLab', 'React', 'Redux', 'JSX'], ['NodeJS', 'Express', 'HTML/CSS', 'APIs/Documentation']],
      skillSymbols: [
        ['../../style/images/stackSymbols/JSLogo.png', '../../style/images/stackSymbols/ES6Logo.jpg', '../../style/images/stackSymbols/mongoDBLogo.png', '../../style/images/stackSymbols/socketIOLogo.png'],
        ['../../style/images/stackSymbols/mongoLabLogo.png', '../../style/images/stackSymbols/reactLogo.jpg', '../../style/images/stackSymbols/reduxLogo.png', '../../style/images/stackSymbols/JSXLogo.png'],
        ['../../style/images/stackSymbols/nodeJSLogo.png', '../../style/images/stackSymbols/expressLogo.png', '../../style/images/stackSymbols/htmlLogo.png', '../../style/images/stackSymbols/cssLogo.png']],
      github: 'https://github.com/tunaSandwich',
      cell: '(626) 807-5538',
      email: 'gonzalezgarza.lucas@gmail.com',
      LinkedIn: 'www.linkedin.com/in/lucasgonzalezgarza'
    },
    {
      title: 'Projects',
      project: [
        {
          title: 'My Map App',
          projectStack: 'Javascript, Node, Express, MongoDB. Mongoose, MongoLab, EJS, Bootstrap',
          description: 'I am the sole developer on this project. Users build up their personal map with all the cities and destinations that they have visited. They can then follow other users’ maps to compare each other’s destinations. I used an authentication middleware for Node called Passport.js. This project is far from finished, and I will continue to add features to this project. ',
          link: 'https://mymapapp.herokuapp.com',
          imgLink: 'https://feel-planet.com/wp-content/uploads/2015/05/yellowstone-national-park-usa.jpg'
        },
        {
          title: 'Personal Website',
          projectStack: 'React, Redux, JavaScript, ES6, SocketIO, Webpack, Babel',
          description: ' corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
          link: 'http://lucasgarza.com',
          imgLink: '../../style/images/lucasGarzaImg.jpg'
        }
      ]
    },
    {
      title: 'Résumé'

    }
  ]
}
