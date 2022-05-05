let findSelected = (i) => {
    let index=i;
    let nodos= document.querySelector(`#repechaje${index}`).children;
    let selected = document.querySelector(`input[name='repechajeG${index}']:checked`).value;
    let img=nodos[0];
    let p=nodos[1];
    let input=nodos[2];
    let input2=nodos[3];
    p.textContent=selected;
    input.removeAttribute("hidden", "");
    input2.removeAttribute("hidden", "");
    input.setAttribute("id",selected);
    input.setAttribute("value",selected);
    input2.setAttribute("value",selected);
    img.setAttribute("src",`files/${selected}.png` )
    console.log(selected);
}

for(let i=1;i<=3;i++){
    let radiobtns = document.querySelectorAll(`input[name='repechajeG${i}']`);
    console.log(radiobtns);
    radiobtns.forEach(radiobtn =>{
        radiobtn.addEventListener("change",(evt)=>findSelected(i));
        
    });
}
for (let j=1;j<=8; j++){
    let grupo= document.getElementById(`fase${j}` );
    grupo.addEventListener('click',(e) =>{
        if(e.target && e.target.tagName === 'INPUT'){
            let nodos;
            let selected = e.target.value;
            let name;
            let nodosl;
            let imgl;
            let pl;
            let inputl;
            if(e.target.name[3]=='1'){
                name= e.target.name.replace('1','2');
                if(document.querySelector(`input[name=${name}][value=${selected}]`).checked){
                    console.log('estoy aca');
                    document.querySelectorAll(`input[name=${name}`).forEach( (x) => x.checked = false );
                    //limpiar
                    nodosl=document.querySelector(`#segundo${j}`).children;
                    imgl=nodosl[0];
                    pl=nodosl[1];
                    inputl=nodosl[2];
                    pl.textContent='';
                    imgl.setAttribute("src",'' );

                }
                nodos= document.querySelector(`#primero${j}`).children;
            }
            else{
                name= e.target.name.replace('2','1');
                if(document.querySelector(`input[name=${name}][value=${selected}]`).checked){
                    console.log('estoy aca');
                    document.querySelectorAll(`input[name=${name}`).forEach( (x) => x.checked = false );
                    //limpiar
                    nodosl=document.querySelector(`#primero${j}`).children;
                    imgl=nodosl[0];
                    pl=nodosl[1];
                    inputl=nodosl[2];
                    pl.textContent='';
                    imgl.setAttribute("src",'' );
                }
                nodos= document.querySelector(`#segundo${j}`).children;
            }
            let img=nodos[0];
            let p=nodos[1];
            let input=nodos[2];
            p.textContent=selected;
            img.setAttribute("src",`files/selected.png` );
            input.setAttribute("value",selected);
            console.log(selected);


        }
    })
}

for(let n=1;n<=8;n++){
    let llave= document.getElementById(`llave${n}`);
    llave.addEventListener('click',(e)=> {

        if(e.target && e.target.tagName ==='INPUT'){
            console.log(e.target.name);
            let cuarto= document.getElementById(`${e.target.name}`).children;
            let img=cuarto[0];
            let p =cuarto[1];
            let input=cuarto[2]
            input.setAttribute("value",e.target.value);
            p.textContent=e.target.value;

        }
    });
}
for(let m=1;m<=4; m++){
    let cuartos= document.getElementById(`llaveCuartos${m}`);
    cuartos.addEventListener('click',(e)=> {
        if(e.target && e.target.tagName === 'INPUT'){
            let semis= document.getElementById(`${e.target.name}`).children;
            let img=semis[0];
            let p =semis[1];
            let input=semis[2]
            input.setAttribute("value",e.target.value);
            p.textContent=e.target.value;   
        }
    })

}
for(let m=1;m<=2; m++){
    let cuartos= document.getElementById(`llaveSemis${m}`);
    cuartos.addEventListener('click',(e)=> {
        if(e.target && e.target.tagName === 'INPUT'){
            let final= document.getElementById(`${e.target.name}`).children;
            let img=final[0];
            let p =final[1];
            let input=final[2]
            input.setAttribute("value",e.target.value);
            p.textContent=e.target.value;   
        }
    })

}
let finalOG=document.getElementById('llaveFinal');
finalOG.addEventListener('click',(e)=>{
    if(e.target && e.target.tagName === 'INPUT'){
        console.log(`EL GANADOR ES ${e.target.value}`)   
    }
})

