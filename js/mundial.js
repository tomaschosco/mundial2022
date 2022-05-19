let cruces=[{
    posicion:'primero1',
    
    ruta:[['llaveCuartos1','1cuartos1','1cuartos2'],['llaveSemis1','1semis1','1semis2'],['llaveFinal','final1','final2']],
},
{
    posicion:'segundo2',
    ruta:[['llaveCuartos1','1cuartos1','1cuartos2'],['llaveSemis1','1semis1','1semis2'],['llaveFinal','final1','final2']],
},
{
    posicion:'primero3',
    ruta:[['llaveCuartos1','1cuartos2','1cuartos1'],['llaveSemis1','1semis1','1semis2'],['llaveFinal','final1','final2']],
},
{
    posicion:'segundo4',
    ruta:[['llaveCuartos1','1cuartos2','1cuartos1'],['llaveSemis1','1semis1','1semis2'],['llaveFinal','final1','final2']],
},
{
    posicion:'primero5',
    ruta:[['llaveCuartos2','2cuartos1','2cuartos2'],['llaveSemis1','1semis2','1semis1'],['llaveFinal','final1','final2']],
},
{
    posicion:'segundo6',
    ruta:[['llaveCuartos2','2cuartos1','2cuartos2'],['llaveSemis1','1semis2','1semis1'],['llaveFinal','final1','final2']],
},
{
    posicion:'primero7',
    ruta:[['llaveCuartos2','2cuartos2','2cuartos1'],['llaveSemis1','1semis2','1semis1'],['llaveFinal','final1','final2']],
},
{
    posicion:'segundo8',
    ruta:[['llaveCuartos2','2cuartos2','2cuartos1'],['llaveSemis1','1semis2','1semis1'],['llaveFinal','final1','final2']],
},

{
    posicion:'primero2',
    ruta:[['llaveCuartos3','3cuartos1','3cuartos2'],['llaveSemis2','2semis1','2semis2'],['llaveFinal','final2','final1']],
},
{
    posicion:'segundo1',
    ruta:[['llaveCuartos3','3cuartos1','3cuartos2'],['llaveSemis2','2semis1','2semis2'],['llaveFinal','final2','final1']],
},
{
    posicion:'primero4',
    ruta:[['llaveCuartos3','3cuartos2','3cuartos1'],['llaveSemis2','2semis1','2semis2'],['llaveFinal','final2','final1']],
},
{
    posicion:'segundo3',
    ruta:[['llaveCuartos3','3cuartos2','3cuartos1'],['llaveSemis2','2semis1','2semis2'],['llaveFinal','final2','final1']],
},
{
    posicion:'primero6',
    ruta:[['llaveCuartos4','4cuartos1','4cuartos2'],['llaveSemis2','2semis2','1semis1'],['llaveFinal','final2','final1']],
},
{
    posicion:'segundo5',
    ruta:[['llaveCuartos4','4cuartos1','4cuartos2'],['llaveSemis2','2semis2','1semis1'],['llaveFinal','final2','final1']],
},
{
    posicion:'primero8',
    ruta:[['llaveCuartos4','4cuartos2','4cuartos1'],['llaveSemis2','2semis2','1semis1'],['llaveFinal','final2','final1']],
},
{
    posicion:'segundo7',
    ruta:[['llaveCuartos4','4cuartos2','4cuartos1'],['llaveSemis2','2semis2','1semis1'],['llaveFinal','final2','final1']],
}
];


let removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

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
    let aux= removeAccents(selected).toLowerCase().replace(/ /g, "");
    img.setAttribute("src",`files/${aux}.png` );
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
            let imprimir;
            if(e.target.name[3]=='1'){
                name= e.target.name.replace('1','2');
                if(document.querySelector(`input[name=${name}][value='${selected}']`).checked){
                    console.log('estoy aca');
                    document.querySelectorAll(`input[name=${name}`).forEach( (x) => x.checked = false );
                    //limpiar
                    nodosl=document.querySelector(`#segundo${j}`).children;
                    imgl=nodosl[0];
                    pl=nodosl[1];
                    inputl=nodosl[2];
                    pl.textContent='';
                    imgl.setAttribute("src",'' );
                    inputl.setAttribute("hidden",true);

                }
                nodos= document.querySelector(`#primero${j}`).children;
                imprimir=`primero${j}`;
            }
            else{
                name= e.target.name.replace('2','1');
                if(document.querySelector(`input[name=${name}][value='${selected}']`).checked){
                    console.log('estoy aca');
                    document.querySelectorAll(`input[name=${name}`).forEach( (x) => x.checked = false );
                    //limpiar
                    nodosl=document.querySelector(`#primero${j}`).children;
                    imgl=nodosl[0];
                    pl=nodosl[1];
                    inputl=nodosl[2];
                    pl.textContent='';
                    imgl.setAttribute("src",'' );
                    inputl.setAttribute("hidden",true);
                }
                nodos= document.querySelector(`#segundo${j}`).children;
                imprimir=`segundo${j}`;
            }
            console.log(imprimir);
            // inicializa
            let img=nodos[0];
            let p=nodos[1];
            let input=nodos[2];
            //
            if(p.textContent != ''){
                //eliminar Ruta
                //ruta:[['llaveCuartos1','1cuartos1','1cuartos2'],['llaveSemis1','1semis1','1semis2'],
                //['llaveFinal','final1','final2']],
                let index= cruces.find(cruce=> cruce.posicion == imprimir);
                let rutas= index.ruta;
                for(let ruta of rutas){
                    //desmarcar
                    document.querySelectorAll(`input[name='${ruta[1]}'`).forEach( (x) => x.checked = false );
                    //
                    // elimino los datos de la ruta
                    let contenedor1= document.getElementById(ruta[1]).children;
                    let contenedor2= document.getElementById(ruta[2]).children;
                    contenedor1[0].setAttribute("src",'');
                    contenedor1[1].textContent='';
                    contenedor1[2].setAttribute("value",'');
                    contenedor1[2].setAttribute("hidden",true);
                    contenedor1[2].checked=false;
                    //desmarco el otro input
                    contenedor2[2].checked=false;
                }
            }
            p.textContent=selected;
            let aux= removeAccents(selected).toLowerCase().replace(/ /g, "");
            img.setAttribute("src",`files/${aux}.png` );
            input.setAttribute("value",selected);
            input.removeAttribute("hidden", "");
        }
    })
}

for(let n=1;n<=8;n++){
    let llave= document.getElementById(`llave${n}`);
    llave.addEventListener('click',(e)=> {

        if(e.target && e.target.tagName ==='INPUT'){
            console.log(e.target.parentNode.id);
            let cuarto= document.getElementById(`${e.target.name}`).children;
            let img=cuarto[0];
            let p =cuarto[1];
            let input=cuarto[2];
            if(p.textContent != ''){
                //eliminar Ruta
                //ruta:[['llaveCuartos1','1cuartos1','1cuartos2'],['llaveSemis1','1semis1','1semis2'],
                //['llaveFinal','final1','final2']],

                let index= cruces.find(cruce=> cruce.posicion == e.target.parentNode.id);
                let rutas= new Array(index.ruta[1],index.ruta[2]);
                for(let ruta of rutas){
                    //desmarcar
                    document.querySelectorAll(`input[name='${ruta[1]}'`).forEach( (x) => x.checked = false );
                    //
                    // elimino los datos de la ruta
                    let contenedor1= document.getElementById(ruta[1]).children;
                    let contenedor2= document.getElementById(ruta[2]).children;
                    contenedor1[0].setAttribute("src",'');
                    contenedor1[1].textContent='';
                    contenedor1[2].setAttribute("value",'');
                    contenedor1[2].setAttribute("hidden",true);
                    contenedor1[2].checked=false;
                    //desmarco el otro input
                    contenedor2[2].checked=false;
                }
            }
            let aux= removeAccents(e.target.value).toLowerCase().replace(/ /g, "");
            img.setAttribute("src",`files/${aux}.png`)
            input.setAttribute("value",e.target.value);
            input.removeAttribute("hidden","");
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
            let input=semis[2];
            if(p.textContent!=''){
                document.querySelectorAll(`input[name='${input.name}'`).forEach( (x) => x.checked = false );
                img.setAttribute("src",'');
                p.textContent='';
                input.setAttribute("value",'');
                let index=document.getElementById(input.name).children;
                index[0].setAttribute('src','');
                index[1].textContent='';
                index[2].setAttribute('value','');
                index[2].setAttribute('hidden',true);
                document.querySelectorAll(`input[name='${index[2].name}'`).forEach( (x) => x.checked = false );
            }
            let aux= removeAccents(e.target.value).toLowerCase().replace(/ /g, "");
            img.setAttribute("src",`files/${aux}.png`)
            input.setAttribute("value",e.target.value);
            input.removeAttribute("hidden","");
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
            let aux= removeAccents(e.target.value).toLowerCase().replace(/ /g, "");
            img.setAttribute("src",`files/${aux}.png`)
            input.setAttribute("value",e.target.value);
            input.removeAttribute("hidden","");
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
