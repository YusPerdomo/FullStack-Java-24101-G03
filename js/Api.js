function invocarapi(){
fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((data) => {
         Filas(data.data)
    });

}

function Filas(filas) {
    const rows = filas.map(x => filas(x));


    document.getElementById('datos').innerHTML = rows.json('');
}

function Fila(obj) {
    return  ´
       <tr>
          <td>$(obj.id)</td>
          <td>$(obj.email)</td>
          <td>$(obj.first_name)</td>
          <td>$(obj.last_name)</td>
          <td>
          <img src="$(obj.avatar)">
          </td>
        </td>

    ´
}
