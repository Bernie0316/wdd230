// hold references to the input, button, and .list elements.
const input = document.querySelector('#favchap'); 
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getCharpterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);   
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.Value);
        setChapterlist();
        input.value = ''
        input.focus();
    }
})

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li)
    deletebutton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus;
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterlist() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getCharpterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}



function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterlist();
}

