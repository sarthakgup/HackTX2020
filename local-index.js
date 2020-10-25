const instructions = 
[
    { name: 'Project By: Sarthak Gupta' },
    { name: '\nThe goal is to leave you with helpful resources to stay up to date with COVID Developments' },
    { name: '\nClick on the different boxes to explore cool resources such as stats, news, and even mask 3D printing tips!' },
    { name: '\nEnjoy my first web app ever which I built using html and javascript and deployed on the incredible Azure \n' },
]


function displayDogs()
{
    for (let instruction of instructions)
    {
        const dogUI = document.createElement('li');
        dogUI.className = 'list-group-item';
        dogUI.innerText = instruction.name;

        document.getElementById('dogs-list').appendChild(dogUI);
    }
}


async function main()
{
    displayDogs();
}

main();