//XMLHttoRequest - >Ajax
const request = obj =>{
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        xhr.addEventListener('load', ()=>{
        if(xhr.status >= 200 && xhr.status < 300){
            resolve(xhr.responseText);
        } else{
            reject(xhr.statusText);/*{code: xhr.status,msg:xhr.statusText}*/
        }
    });
    });
};
//Iniciando os comandos
document.addEventListener('click',(e)=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPag(el);
    }
});
//Chamando AJAX
async function carregaPag(el){
    const href = el.getAttribute('href');
    const objOne = {
        method: 'GET',
        url: href
    };
    try{
   const response = await request(objOne);
   carregaResultado(response);
    }catch(e){
        console.log(e);
    };
}
function carregaResultado(response){
    const resultado = document.querySelector('.Resultado');
    resultado.innerHTML = response;
};