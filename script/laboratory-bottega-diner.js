//Bottega bar branch

let titlefixedallapp = ['Bottega Bar', '¡¡¡Wellcome!!!', 'Good morning!', 'Good afternoom', 'Good night'];
let datafixedallapp = ['Menu', 'Breakfast', 'Lunch', 'Diner', 'Article', 'Ingredient', 'Garnish', 'Supplement', 'piece', '25 centiliter glass', 'slice'];
let tipsfixedallapp = ['It is very tasty', 'It is very nutritious', 'It is very healthy'];

const listarticlecreated = [];
let identifier = 0;
class articlesbottegabar{
    constructor(id, narticlebb, lhealthbb, particlebb, uarticlebb ){
        identifier = ++id;
        this.namearticlebottegabar = narticlebb;
        this.levelhealth = lhealthbb;
        this.pricearticlebottegabar = particlebb;
        this.unitarticlebottegabar = uarticlebb;
        const objectarticlebottegabar = { 
            'identifier': identifier,
            'namearticle':this.namearticlebottegabar,
            'levelhealt':this.levelhealth,
            'priceart':this.pricearticlebottegabar,
            'unitmeas':this.unitarticlebottegabar
            };
        listarticlecreated.push(objectarticlebottegabar);
    }
}

const articlenum0001 = new articlesbottegabar(identifier,'egg','0.75','0.82', datafixedallapp[8]);
const articlenum0002 = new articlesbottegabar(identifier,'bacon','1.25','1.63', datafixedallapp[10]);
const articlenum0003 = new articlesbottegabar(identifier,'juice orange','0.25','4.89', datafixedallapp[9]);
const articlenum0004 = new articlesbottegabar(identifier,'bacon','1.25','1.63', datafixedallapp[10]);
const articlenum0005 = new articlesbottegabar(identifier,'toast','1.25','1.63', datafixedallapp[8]);
const articlenum0006 = new articlesbottegabar(identifier,'butter','1.25','1.63', datafixedallapp[8]);
const articlenum0007 = new articlesbottegabar(identifier,'jewish','0.25','1.13', datafixedallapp[8]);
const articlenum0008 = new articlesbottegabar(identifier,'potato','0.25','1.67', datafixedallapp[8]);
const articlenum0009 = new articlesbottegabar(identifier,'carrot','0.25','1.21', datafixedallapp[8]);
const articlenum0010 = new articlesbottegabar(identifier,'broccoli','0.25','1.16', datafixedallapp[8]);
const articlenum0011 = new articlesbottegabar(identifier,'tomato','0.25','3.99', datafixedallapp[8]);
const articlenum0012 = new articlesbottegabar(identifier,'lettuce','0.25','2.17', datafixedallapp[8]);
const articlenum0013 = new articlesbottegabar(identifier,'onion','0.25','1.52', datafixedallapp[8]);
const articlenum0014 = new articlesbottegabar(identifier,'meat pork','1.50','9.33', datafixedallapp[8]);
const articlenum0015 = new articlesbottegabar(identifier,'fish','0.75','7.86', datafixedallapp[8]);
const articlenum0016 = new articlesbottegabar(identifier,'chips','1.75','3.69', datafixedallapp[8]);
const articlenum0017 = new articlesbottegabar(identifier,'mashed potatoes','1.75','6.09', datafixedallapp[8]);

/*
//console.log(listarticlecreated);
for( let x in listarticlecreated){
    console.log(listarticlecreated[x].identifier + ' ' + listarticlecreated[x].namearticle);
}
*/

/*
let identifierarticle = 0;
function NewArticleBottegaBar (id, narticlebb, lhealthbb,particlebb, uarticlebb ){
    identifierarticle = id;    this.namearticlebottegabar = narticlebb;
    this.levelhealth = lhealthbb;
    this.pricearticlebottegabar = particlebb;
    this.unitarticlebottegabar = uarticlebb;
    const objectarticlebottegabar = { 
        'identifier':identifierarticle,
        'namearticle':this.namearticlebottegabar,
        'levelhealt':this.levelhealth,
        'priceart':this.pricearticlebottegabar,
        'unitmeas':this.unitarticlebottegabar
    };
    listarticlecreated.push(objectarticlebottegabar);
};
*/

//console.log(listarticlecreated);
/*
//let articlenum00000 = new NewArticleBottegaBar(0,'egg','0.75','0.82', datafixedallapp[8]);
let articlenum00001 = new NewArticleBottegaBar(1,'bacon','1.25','1.63', datafixedallapp[10]);
let articlenum00002 = new NewArticleBottegaBar(2,'juice orange','0.25','4.89', datafixedallapp[9]);
let articlenum00003 = new NewArticleBottegaBar(3,'bacon','1.25','1.63', datafixedallapp[10]);
let articlenum00004 = new NewArticleBottegaBar(4,'toast','1.25','1.63', datafixedallapp[8]);
let articlenum00005 = new NewArticleBottegaBar(5,'butter','1.25','1.63', datafixedallapp[8]);
let articlenum00006 = new NewArticleBottegaBar(6,'jewish','0.25','1.13', datafixedallapp[8]);
let articlenum00007 = new NewArticleBottegaBar(7,'potato','0.25','1.67', datafixedallapp[8]);
let articlenum00008 = new NewArticleBottegaBar(8,'carrot','0.25','1.21', datafixedallapp[8]);
let articlenum00009 = new NewArticleBottegaBar(9,'broccoli','0.25','1.16', datafixedallapp[8]);
let articlenum00010 = new NewArticleBottegaBar(10,'tomato','0.25','3.99', datafixedallapp[8]);
let articlenum00011 = new NewArticleBottegaBar(11,'lettuce','0.25','2.17', datafixedallapp[8]);
let articlenum00012 = new NewArticleBottegaBar(12,'onion','0.25','1.52', datafixedallapp[8]);
let articlenum00013 = new NewArticleBottegaBar(13,'meat pork','1.50','9.33', datafixedallapp[8]);
let articlenum00014 = new NewArticleBottegaBar(14,'fish','0.75','7.86', datafixedallapp[8]);
let articlenum00015 = new NewArticleBottegaBar(15,'chips','1.75','3.69', datafixedallapp[8]);
let articlenum00016 = new NewArticleBottegaBar(16,'mashed potatoes','1.75','6.09', datafixedallapp[8]);
*/

let identifiercombined = 0;
function NewCombinedBottegaBar(id, ncombinedbb, tcombinedbb,dcombinedbb,...listingcombined){
    identifiercombined = id;
    this.namecombinedbottegabar = ncombinedbb;
    this.typecombinedbottegabar = tcombinedbb;
    this.descriptioncombinedbottegabar = dcombinedbb;
    this.pricecombinedbottegabar = 0;
    this.levelhealthcombinedbottegabar = 0;
    this.listingredientscombinedbottegabar = listingcombined;
    let salesmargin = 0.45;
    let salesmargindiner = 0.35;

    for( let k = 0; k < listingcombined.length;k++){
        if( ncombinedbb === datafixedallapp[2]){
            //console.log('Diner');
            if( k % 2 == 0){
                let linelevelhealth = parseFloat(listingcombined[k].levelhealt);
                this.levelhealthcombinedbottegabar += linelevelhealth;
                let totalline = parseFloat(listingcombined[k].priceart) * listingcombined[k+1];
                this.pricecombinedbottegabar += totalline;
                let result = this.pricecombinedbottegabar * salesmargindiner;
                this.pricecombinedbottegabar += result;
            }
        }else{
            if( k % 2 == 0){
                let linelevelhealth = parseFloat(listingcombined[k].levelhealt);
                this.levelhealthcombinedbottegabar += linelevelhealth;
                let totalline = parseFloat(listingcombined[k].priceart) * listingcombined[k+1];
                this.pricecombinedbottegabar += totalline;
                let result = this.pricecombinedbottegabar * salesmargin;
                this.pricecombinedbottegabar += result;
            }
        }
    };

    const listingredientscombined = { 
        'identifier' : identifiercombined,
        'namecombined' : this.namecombinedbottegabar,
        'typecombined' : this.typecombinedbottegabar,
        'descriptioncombined' : this.descriptioncombinedbottegabar,
        'listingredients' : this.listingredientscombinedbottegabar,
        'pricecombined' : this.pricecombinedbottegabar,
        'levelhealth' : this.levelhealthcombinedbottegabar
    };
    listcombinedcreate.push(listingredientscombined);
};

const listcombinedcreate = [];
let combined00000 = new NewCombinedBottegaBar(0, datafixedallapp[1],datafixedallapp[0], 'Menu 0 : Egg + toast + juice orange + butter + full cooffe',listarticlecreated[0],1,listarticlecreated[4],1,listarticlecreated[2],1,listarticlecreated[5],1);
let combined00001 = new NewCombinedBottegaBar(1, datafixedallapp[1],datafixedallapp[0], 'Menu 1 : Egg(2) + toast(2) + butter(2) + full cooffe',listarticlecreated[0],2,listarticlecreated[4],2,listarticlecreated[5],2);
let combined00002 = new NewCombinedBottegaBar(2, datafixedallapp[2],datafixedallapp[0], 'Menu 2 : Meat pork + egg + toast + butter',listarticlecreated[13],1,listarticlecreated[0],1,listarticlecreated[4],1,listarticlecreated[5],1);
let combined00003 = new NewCombinedBottegaBar(3, datafixedallapp[2],datafixedallapp[0], 'Menu 3 : Fish + egg',listarticlecreated[14],1,listarticlecreated[0],1);
let combined00004 = new NewCombinedBottegaBar(4, datafixedallapp[3],datafixedallapp[0], 'Menu 4 : Meat pork + egg + toast + butter',listarticlecreated[13],1,listarticlecreated[0],1,listarticlecreated[4],1,listarticlecreated[5],1);
let combined00005 = new NewCombinedBottegaBar(5, datafixedallapp[3],datafixedallapp[0], 'Menu 5 : Fish + egg',listarticlecreated[14],1,listarticlecreated[0],1);
let combined00006 = new NewCombinedBottegaBar(6, datafixedallapp[6],datafixedallapp[6], 'Guarnish 6 : Vegetables',listarticlecreated[6],1,listarticlecreated[7],1,listarticlecreated[8],1,listarticlecreated[9],1);
let combined00007 = new NewCombinedBottegaBar(7, datafixedallapp[6],datafixedallapp[6], 'Guarnish 7 : Salad',listarticlecreated[10],1,listarticlecreated[11],1,listarticlecreated[12],1);
let combined00008 = new NewCombinedBottegaBar(8, datafixedallapp[6],datafixedallapp[6], 'Guarnish 8 : Mashed potatoes',listarticlecreated[16],1);

function NewTicket(list){
    let totalticket = 0;
    for( let i = 0 ; i < list.length; i++){
        if(list[i].typecombined === datafixedallapp[0]){
            console.log(list[i].descriptioncombined + '  - - - ' + (list[i].pricecombined).toFixed(2) + '€');
        }else{
            console.log(list[i].descriptioncombined + '  - - - ' + (list[i].pricecombined).toFixed(2) + '€');
        }
    };
    console.log('¿Quieres realizar un pedido?');
    let mselect = prompt('¿Seleccione un menu, por favor?');
    if(mselect){
        if(mselect >= 0 && mselect <= 5){
            if( list[mselect].levelhealth <= 2){
                alert(tipsfixedallapp[2]);
            }; 
            if( list[mselect].levelhealth > 2 && list[mselect].levelhealth <= 4){
                alert(tipsfixedallapp[1]);
            };
            if( list[mselect].levelhealth > 4){
                alert(tipsfixedallapp[0]);
            };
            console.log('Has seleccionado, ' + list[mselect].descriptioncombined + ' - - - ' + (list[mselect].pricecombined).toFixed(2) + '€');
            totalticket += list[mselect].pricecombined;
            let gselect = prompt('¿Seleccione una guarnicion, por favor?');
            if(gselect){
                if(gselect >= 6 && gselect <= 8){
                    if( list[gselect].levelhealth <= 2){
                        alert(tipsfixedallapp[2]);
                    }; 
                    if( list[gselect].levelhealth > 2 && list[gselect].levelhealth <= 4){
                        alert(tipsfixedallapp[1]);
                    };
                    if( list[gselect].levelhealth > 4){
                        alert(tipsfixedallapp[0]);
                    };
                    console.log('Has seleccionado, ' + list[gselect].descriptioncombined + ' - - - ' + (list[gselect].pricecombined).toFixed(2) + '€');
                    totalticket += list[gselect].pricecombined;
                    console.log('Total ticket : ' + (totalticket).toFixed(2) + '€');
                }else{
                    alert('You must select a digit between 6 and 8 please');
                    console.log('You must select a digit between 6 and 8 please');
                }
            }else{
                alert('You must enter the guarnish digit please');
                console.log('You must enter the guarnish digit please');
            }
        }else{
            alert('You must select a digit between 0 and 5 please');
            console.log('You must select a digit between 0 and 5 please');
        }
    }else{
        alert('You must enter the menu digit please');
        console.log('You must enter the menu digit please');
    };
};

function main(){
    let usernow = prompt('¿Seleccione un tipo user (0)Admin ó (1)Client?');
    //admin
    if( usernow === '0'){
        console.log('Hola Administrador');
        let passusernow = prompt('Introduzca su password por favor : ');
        if( passusernow === '1234567890'){
            console.log('Administrator Board');
        }
        else{
            console.log('La password no es correcta');
        }
    }
    //client
    if( usernow === 'client'){
        console.log('titlefixedallapp[1]');
        console.log( titlefixedallapp[1] + ' ' + titlefixedallapp[0] );
        NewTicket(listcombinedcreate);
    }
}

main();