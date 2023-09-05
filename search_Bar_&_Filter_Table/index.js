const searchFun=()=>{
    let dataTyped=document.getElementById("inputId").value.toUpperCase();
    let myTable=document.getElementById("myTable")
    let tr=myTable.getElementsByTagName("tr")
 for (var i=1; i<tr.length; i++){

    let td=tr[i].getElementsByTagName('td')[0];
    if(td){
        let textValue=td.textContent || td.innerHTML;
        if(textValue.toUpperCase().indexOf(dataTyped) >-1){
          tr[i].style.display=""; //show the element
        }else{
            tr[i].style.display="none"; // hide the element
        }
    }
 }

}