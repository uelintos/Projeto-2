const form = document.getElementById('formulario');
let lines = ''
form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = document.getElementById('name');
    let tel = document.getElementById('telphone');
    let table = document.getElementById('table')
    table.style.display = 'inline-table';
    
    
   function line(){
    let line = `<tr>`;
    line += `<td id="lColumn" name="person">${name.value}</td>`
    line += `<td name="personNum">${tel.value}</td>`
    line += `<tr/>`
    lines += line
    const agenda = document.querySelector('tbody');
    agenda.innerHTML = lines  
}
    if(line != null){
        line()   
    }
    name.value =''
    tel.value =''

})