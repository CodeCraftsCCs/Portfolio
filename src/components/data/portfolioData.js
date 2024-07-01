/**
 * @SofiDev This is JSDOC, if you find it complicated you can just delete it, it is a comment, it will not affect anything
 * @typedef PortafolioData
 * @property {string} imgSrc Image URL
 * @property {string} title Card title
 * @property {string[]} skills Array with your skills e.g.: ['React', 'CSS', 'JavaScript']
 * @property {string} description Card description
 * @property {string} demoURL URL of a demo page
 * @property {string} repoURL URL of the repository, e.g.: https://github.com/user/repo
 * @property {string} anim The animation that will be executed when the card loads, e.g.: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness How bright the background color of the card will be, e.g.: 0.1
 */

/**
 * @SofiDev This is JSDOC, if you find it complicated you can just delete it, it is a comment, it will not affect anything
 * @type {PortafolioData[]}
 */
 export const portafolioData = [
    {
        imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
        title: 'First Project',
        skills: ['React', 'StyledComponents'],
        description:
            'Lorem ipsum',
        demoURL: '',
        repoURL: '',
        anim: 'fade-right',
    },
];

const skillIcons = {
    JavaScript: 'skill-icons:javascript',
    React: 'skill-icons:react-dark',
    Astro: 'skill-icons:astro',
    CSS: 'skill-icons:css',
    Sass: 'skill-icons:sass',
    StyledComponents: 'skill-icons:styledcomponents',
    Bootstrap: 'skill-icons:bootstrap',
    Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Maps the portafolioData to include skill icons
 *  You can see Array.map at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
    return {
        // Include all previous content of the item
        ...item,
        // Replace skills with the corresponding icons
        skills: item.skills.map((skill) => skillIcons[skill]),
    };
});
