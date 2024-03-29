let background = document.createElement('div')
let startButton = document.getElementById('start')
let answers = ['It is certain', 'Reply hazy, try again', 'Don’t count on it', 'It is decidedly so', 'Ask again later', 'My reply is no', 'Without a doubt', 'Better not tell you now', 'My sources say no', 'Yes definitely', 'Cannot predict now', 'Outlook not so good', 'You may rely on it', 'Concentrate and ask again', 'Very doubtful', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes']
startButton.addEventListener('click', createGamePage)
let Page2 = document.createElement('div')

function createGamePage() {
    Page2 = document.createElement('div')
    document.body.appendChild(Page2)
    Page2.classList.add('screen')
    Page2.setAttribute('id', 'page2')
    Page2.classList.remove('invisible')
    let ball = document.createElement('div')
    ball.classList.add('ball')
    ball.setAttribute('id', 'ball')
    Page2.appendChild(ball)
    let scene = document.createElement('div')
    scene.classList.add('scene')
    let whiteSurface = document.createElement('div')
    whiteSurface.classList.add('whiteSurface')
    whiteSurface.setAttribute('id', 'whiteSurface')
    ball.appendChild(scene)
    ball.appendChild(whiteSurface)
    let form = document.createElement('form')
    form.setAttribute('id', 'form')
    let label = document.createElement('label')
    let labelText = document.createTextNode('Ask the ball a question')
    label.appendChild(labelText)
    label.setAttribute('for', 'questionInput')
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    let submit = document.createElement('input')
    submit.setAttribute('id', 'submit')
    submit.setAttribute('type', 'button')
    submit.setAttribute('value', 'Ask')
    submit.addEventListener('click', () => { ballAnswer(ev) })
    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(submit)
    Page2.appendChild(form)
    let quitButton = document.createElement('button')
    quitButton.setAttribute('id', 'quitButton')
    const quitButtonText = document.createTextNode('Click to Surrender')
    quitButton.appendChild(quitButtonText)
    quitButton.addEventListener('click', returnToHomescreen)
    Page2.appendChild(quitButton)
    document.getElementById('title').remove()
    //document.getElementById('start').removeEventListener('click', createGamePage)
    document.getElementById('start').remove()
    console.log(document.getElementById('background') !== null)
    if (document.getElementById('background') !== null) {
        document.getElementById('background').remove()
    }
}

function returnToHomescreen() {
    // Page2 = document.createElement('div')
    background = document.createElement('div')
    document.body.appendChild(background)
    background.classList.add('background')
    background.setAttribute('id', 'background')
    let title = document.createElement('h1')
    title.setAttribute('id', 'title')
    let titleText = document.createTextNode('Magic Eight Ball')
    title.appendChild(titleText)
    background.appendChild(title)
    startButton = document.createElement('button')
    startButton.classList.add('startButton')
    startButton.setAttribute('id', 'start')
    let startButtonText = document.createTextNode('Test your luck...')
    startButton.appendChild(startButtonText)
    startButton.addEventListener('click', createGamePage)
    background.appendChild(startButton)
    console.log(ball.querySelectorAll('*'))
    document.getElementById('ball').remove()
    document.getElementById('form').remove()
   // document.getElementById('quitButton').removeEventListener('click', returnToHomescreen)
    document.getElementById('quitButton').remove()
    Page2.remove()
}

function ballAnswer(ev) {
    document.createElement('8ballAnswer')
    console.log(ev.type) 

function askAnswer(){
var ballAnswers = [
"Yes",
"It is Certain",
"It is Decidedly so",
"Yes Definitely", 
"Without a Doubt",
"You May Rely on it",
"Obvisouly", 
"Don't Count on it",
"Very Doubtful",
"My Reply is No",
"Outlook Not so Good",
"My Sources say No",
"No", 
"Of Course Not", 
"Most Likely",
"Outlook Good",
"As I See it, Yes",
"Signs Point to Yes",
"Not so Likely",
"In a way, Yes",
"Possibly",
"Better Not Tell You Now",
"Ask Again Later",
"Hazy Reply, Try Again",
"Not Sure, Don't Really Care",
"Too Hard to Say",
"How Should I Know?",
"Something to Ask Yourself"];

var random = Math.floor(Math.random() * ballAnswers.length);
var answers = ballAnswers[random];

    document.getElementById('8ballAnswer').textContent = answers;
}
}

