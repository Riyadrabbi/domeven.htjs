// const h1Collection = document.getElementsByTagName('h1')
// for (const h1 of h1Collection) {
//     console.log(h1);
//     h1.style.color = 'red'
//     h1.style.fontWeight = 'bold'
//     h1.style.textDecoration = 'underline'
//     h1.style.textShadow = ' 2px 2px 2px black'
//     h1.innerText = 'I Hacked your system'

// }


// const container = document.getElementById('container')

// const ulContainer = document.createElement('ul')

// const li1 = document.createElement('li')
// const li2 = document.createElement('li')
// const li3 = document.createElement('li')
// li1.innerText = 'Rangamati'
// li2.innerText = 'Jessore'
// li3.innerText = 'Dhamrai'

// ulContainer.appendChild(li1);
// ulContainer.appendChild(li2);
// ulContainer.appendChild(li3);
// container.appendChild(ulContainer)

const sectionContainer = document.getElementById('Container2')
const ul = document.createElement('ul')
ul.innerHTML = `
<li>DHAKA</li>
<li>DHAMRAI</li>
<li>CHITTAGONG</li>
<li>CUMILLA</li>

`
sectionContainer.appendChild(ul)