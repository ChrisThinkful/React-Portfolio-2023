import reactThumb from "../assets/reactThumb.png"
import toDoApp from '../assets/toDoApp.gif'
import Calculator from '../assets/Calculator.gif'
import EtchASketch from '../assets/EtchASketch.gif'

const items = [
    {
      src: toDoApp,
      alt: "To Do App",
      label: "To Do App",
      body: "A react application that allows users to jot down a quick list of things they hope to accomplish. Check those to-dos off that you complete to keep track of your progress, and delete them when you're done.",
      repo: 'https://github.com/ChrisThinkful/To-Do-App',
      site: 'https://to-do-app-pearl.vercel.app/',
    },
    {
      src: Calculator,
      alt: 'Calculator',
      label: 'Calculator',
      body: "When in need of a quick calculation that goes just beyond what the user might be able to do in their head, the Calculator app is the perfec tool for the job.",
      repo: 'https://github.com/ChrisThinkful/Calculator',
      site: 'https://christhinkful.github.io/Calculator/',
    },
    {
      src: EtchASketch,
      alt: "Etch-A-Sketch",
      label: "Etch-A-Sketch",
      body: "The Etch-A-Sketch allows the user to draw and create on an adjustable canvas with a limited array of colors and 'brush' sizes to choose from.",
      repo: 'https://github.com/ChrisThinkful/Etch-A-Sketch',
      site: 'https://christhinkful.github.io/Etch-A-Sketch/',
    },
    {
      src: reactThumb,
      alt: 4,
      label: "Sample 4",
      body: "This is dummy information to act as a placeholder until I create some new projects to populate each of these cards.",
      repo: '',
      site: '',
    },
    
  ];

  export default items;