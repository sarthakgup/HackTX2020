const instructions = 
[
    { name: 'Project By: Sarthak Gupta' },
    { name: '\nThe goal is to leave you with helpful resources to stay up to date with COVID Developments' },
    { name: '\nClick on the different boxes to explore cool resources such as stats, news, and even mask 3D printing tips!' },
    { name: '\nEnjoy my first web app ever which I built using html and javascript and deployed on the incredible Azure \n' },
]

//creating method displayInstructions to run a for each loop and run through and display each element in 'instructions'
function displayInstructions()
{
    for (let instruction of instructions)
    {
        const instUI = document.createElement('li');
        instUI.className = 'list-group-item';
        instUI.innerText = instruction.name;

        document.getElementById('instructions-list').appendChild(instUI);
    }
}

async function main()
{
    //Calling displayInstructions method
    displayInstructions();
}

main();