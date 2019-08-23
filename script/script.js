var n = 1;
var mouseBoneco = 1;
var mensagem = 0
var clikeBoneco = 1;

function clike(){
    mensagem ++
    if(mensagem == 1){
        M.toast({html: 'Opa tudo certo ! 🙂'})
    }else if(mensagem == 2){
        M.toast({html: 'Estomos em Desenvolvimento  🙂'})
    }else if(mensagem == 3){
        M.toast({html: 'Em breve nossa equipe de um só atualizara o site  🙂'})
    }else if(mensagem == 4){
        M.toast({html: 'Em breve a A.I estara disponivel  🙂'})
    }else if(mensagem == 5){
        M.toast({html: 'Calme meu filho, naceu em 3 messes ? 😐'})
    }else if(mensagem == 6){
        M.toast({html: ' 😠 '})
    }else if(mensagem == 7){
        M.toast({html: ' 😡 '})
    }else{
        M.toast({html: ' ... '})
    }
}
function nota10(){
    if(n <= 1){
        M.toast({html: 'Praticamente impossível não dar nota 10 🙂! '});
    }else if(n == 2){
        M.toast({html: 'É verdade esse site é bom de mais 🙂! '});
    }else if(n == 3){
        M.toast({html: 'Tabom você gostou muito do site kkkk 🙂! '});
    }else if(n == 4){
        M.toast({html: 'OK, ja entendi ! '});
    }else if(n == 5 ){
        M.toast({html: 'Tabom'});
    }else{
        M.toast({html: '... '});
    }
    n ++;
}
function boneco(){
    mouseBoneco ++
    if(mouseBoneco == 20){
        document.getElementById('fotoBoneco').src="img/boneco/boneco2.png";
    }else  if(mouseBoneco == 30){
        document.getElementById('fotoBoneco').src="img/boneco/boneco3.png";
    }else  if(mouseBoneco == 40){
        document.getElementById('fotoBoneco').src="img/boneco/boneco4.png";
    }else  if(mouseBoneco >= 50){
        document.getElementById('fotoBoneco').src="img/boneco/boneco5.png";
        mouseBoneco = 1;
    }
}
function bonecoClik(){
    clikeBoneco ++
    if(clikeBoneco == 2){
        document.getElementById('fotoBoneco').src="img/boneco/boneco2.png";
    }else  if(clikeBoneco == 3){
        document.getElementById('fotoBoneco').src="img/boneco/boneco3.png";
    }else  if(clikeBoneco == 4){
        document.getElementById('fotoBoneco').src="img/boneco/boneco4.png";
    }else  if(clikeBoneco >= 5){
        document.getElementById('fotoBoneco').src="img/boneco/boneco5.png";
        clikeBoneco = 1;
    }
}
function bonecoNormal(){
    document.getElementById('fotoBoneco').src="img/boneco/boneco1.png";
}
function alerta(){
    document.getElementById('recado').src="";
}

