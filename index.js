// javascript

const get = element => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
})

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
})



const skill = [
    {
        name: 'HTML5',
            thumbnail: '#',
    },
     {
        name: 'CSS3',
        thumbnail: '#',  
    },
     {
        name: 'JavaScript',
        thumbnail: ' fab fa-node ',
      
    },
    
    { 
        name: 'ReactJs',
        thumbnail: '#',
    
    },
    
    {
        name: 'mySQL',
        thumbnail: '#',
        //credit:
    },
    
        
    {
        name: 'PHP',
        thumbnail: '#',
        //credit:
    },

    
    
]

const skillBasket = document.getElementById("skill-basket")


skill.forEach((image) => {
    const card = document.createElement('div')
    card.classList.add('card');
    skillBasket.appendChild(card)

    const picture = document.createElement('img')
    picture.classList.add('picture');
    picture.src = image.thumbnail
    card.appendChild(picture)

    const imageName = document.createElement('h4')
    imageName.classList.add('image-name');
    imageName.innerText = image.name
    card.appendChild(imageName)
})
