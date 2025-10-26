const toDoList = document.getElementById('toDoList');
const toDoInput = document.getElementById('toDoInput');

toDoInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        save();
    }
});

function save(){
    if(!toDoInput.value){
        return;
    }else{
        const toDo = document.createElement('p');
        toDo.textContent = toDoInput.value;
        toDoInput.value = null;
        
        const card = document.createElement('div');
        card.classList.add('card');

        const doneBtn = document.createElement('button');
        doneBtn.textContent = "📌";
        doneBtn.classList.add('doneBtn')

        doneBtn.addEventListener('click', () => {
            toDo.classList.toggle('active');
            doneBtn.classList.toggle('active');
            if(doneBtn.textContent != "✅"){
                doneBtn.textContent = "✅"
            }else{
                doneBtn.textContent = "📌";
            }
        })

        const delBtn = document.createElement('button')
        delBtn.textContent = "🗑️";
        delBtn.classList.add('delBtn')

        delBtn.addEventListener('click', () => {
            card.remove();
        })

        card.appendChild(doneBtn);
        card.appendChild(toDo);
        card.appendChild(delBtn);    
        toDoList.append(card);        
    }

}