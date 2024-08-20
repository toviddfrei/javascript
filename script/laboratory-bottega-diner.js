//Carte Bottega

// Menu application database
const cartebottega = {
  breakfast: {
    firstplate: {
      first: { nameplate: 'EGGS', costplate: 3.33 },
      second: { nameplate: 'RIZE', costplate: 4.4 },
      third: { nameplate: 'MEAT', costplate: 5.16 }
    },
    secondplate: {
      first: { nameplate: 'FISH', costplate: 6.21 },
      second: { nameplate: 'VEGETABLES', costplate: 7.18 },
      third: { nameplate: 'SALAD', costplate: 8.96 }
    },
    thirdplate: {
      first: { nameplate: 'DESSERT', costplate: 4.22 },
      second: { nameplate: 'FRUIT', costplate: 6.56 },
      third: { nameplate: 'COFFE', costplate: 9.61 }
    }
  },
  lunch: {
    firstplate: {
      first: { nameplate: 'POTATOES', costplate: 7.69 },
      second: { nameplate: 'DRINK', costplate: 4.4 },
      third: { nameplate: 'VEGETABLES', costplate: 5.16 }
    },
    secondplate: {
      first: { nameplate: 'FISH', costplate: 6.21 },
      second: { nameplate: 'MEAT', costplate: 7.18 },
      third: { nameplate: 'SALAD', costplate: 8.96 }
    },
    thirdplate: {
      first: { nameplate: 'ORANGE', costplate: 4.22 },
      second: { nameplate: 'APPLE', costplate: 6.56 },
      third: { nameplate: 'BANANA', costplate: 9.61 }
    }
  },
  diner: {
    firstplate: {
      first: { nameplate: 'SOUP', costplate: 11.69 },
      second: { nameplate: 'DRINK', costplate: 14.4 },
      third: { nameplate: 'VEGETABLES', costplate: 15.16 }
    },
    secondplate: {
      first: { nameplate: 'FISH', costplate: 16.21 },
      second: { nameplate: 'MEAT', costplate: 17.18 },
      third: { nameplate: 'SALAD', costplate: 18.96 }
    },
    thirdplate: {
      first: { nameplate: 'ORANGE', costplate: 14.22 },
      second: { nameplate: 'APPLE', costplate: 16.56 },
      third: { nameplate: 'BANANA', costplate: 19.61 }
    }
  }
};

/**
 * SelectUserTime: Ask the time of day, conditional to choose menu
 * @returns boolean or str
*/

function SelectUserTime() {
    try {
        this.userhasselectedprompt =  prompt('Please can you enter the time in the requested format. Thank you. \nSpecified format ( HH:MM )');

        // verified null
        if( this.userhasselectedprompt == null ){
          throw 'Error : The user canceled the prompt';
        };
        
        // work table
        let workvariablefunction = this.userhasselectedprompt;

        // verified lenght
        if( workvariablefunction.length != 5 ){
          alert( 'Please use the specified format. Thank you.' );
          return false;
        };

        const verifiedregex = new RegExp( '^[0-9]{2}:[0-9]{2}' );

        if (verifiedregex.test(workvariablefunction) === false) {
            alert('Please use the specified format. Thank you.');
            return false;
        } else if (workvariablefunction < '00:00' || workvariablefunction > '23:59' || workvariablefunction.substring(3) > '59') {
            alert('The correct format is between 00:00 and 23:59, thank you.');
            return false;
        } else {
            return this.userhasselectedprompt;
        };
    } catch (e) {
        console.error(e);
    };
};

/**
 * SelectorMenuUserTime : Show the menu that corresponds according to the time
 * @param {*} userhasselectedprompt // return SelectUserTime()
 */

function SelectorMenuUserTime () {
  try{
    // Ask the time
    while (SelectUserTime() === false) {
      SelectUserTime();
    };

    let titlemenu = '';

    if (userhasselectedprompt >= '00:00' && userhasselectedprompt < '11:00') {
      let menuselectedschedule = cartebottega.breakfast;
      titlemenu = 'BOTTEGA MENU : BREADFAST';
      PrintFullMenuBottega(menuselectedschedule, titlemenu);
    } else if (userhasselectedprompt > '10:59' && userhasselectedprompt < '17:00') {
      let menuselectedschedule = cartebottega.lunch;
      titlemenu = 'BOTTEGA MENU : LUNCH';
      PrintFullMenuBottega(menuselectedschedule, titlemenu);
    } else if (userhasselectedprompt > '16:59' && userhasselectedprompt <= '23:59') {
      let menuselectedschedule = cartebottega.diner;
      titlemenu = 'BOTTEGA MENU : DINER';
      PrintFullMenuBottega(menuselectedschedule, titlemenu);
    };
  }catch(e){
    console.error(e);
  };
};

/**
 * PrintFullMenuBottega : Object moved according to user menu selection
 * Print alert with entire menu, call the request function select the first plate
 * @param {*} menuselectedschedule // Object recovered from SelectorMenuUserTime()
 * @param {*} titlemenu // str recovered from SelectorMenuUserTime()
 */

function PrintFullMenuBottega (menuselectedschedule, titlemenu) {
  try{
      for (let [key, value] of Object.entries(menuselectedschedule)) {
        if (key === 'firstplate') {
          CreateVisionMenuPlate(menuselectedschedule[key])
          this.alertviewfirstplate = '' + '\n' + key + '\n' + '---------------------' + '\n' + this.plateviewingformat + '\n';
        };
        if (key === 'secondplate') {
          CreateVisionMenuPlate(menuselectedschedule[key])
          this.alertviewsecondplate = '' + '\n' + key + '\n' + '---------------------' + '\n' + this.plateviewingformat + '\n';
        };
        if (key === 'thirdplate') {
          CreateVisionMenuPlate(menuselectedschedule[key])
          this.alertviewthirdplate = '' + '\n' + key + '\n' + '---------------------' + '\n' + this.plateviewingformat + '\n';
        };
      };
      
      if( this.alertviewfirstplate && this.alertviewsecondplate && this.alertviewthirdplate && titlemenu){
        alert( titlemenu + '\n' + this.alertviewfirstplate + this.alertviewsecondplate +  this.alertviewthirdplate );
        CreateTicketAskUser(menuselectedschedule);
      }else{
        throw 'The entire menu could not be printed';
      };
  } catch(e){
      console.error(e);
  };
};


/**
 * CreateVisionMenuPlate : Individually create the three plates on each menu
 * @param {*} menuplate // Object recovered from PrintFullMenuBottega()
 */

function CreateVisionMenuPlate (menuplate) {
  this.plateviewingformat = '';
  plateviewingformat = plateviewingformat.concat( menuplate.first.nameplate + ' ---------- ' + menuplate.first.costplate + ' €' + '\n' );
  plateviewingformat = plateviewingformat.concat( menuplate.second.nameplate + ' ---------- ' + menuplate.second.costplate + ' €' + '\n' );
  plateviewingformat = plateviewingformat.concat( menuplate.third.nameplate + ' ---------- ' + menuplate.third.costplate + ' €' + '\n' );
};

/**
 * AskUserOpcion : Ask the user which plate menu option they want
 * @param {*} optionmenuselecthorary // Object recovered from CreateTicketAskUser()
 * @param {*} alertviewmenuplate // View of the selected plate
 * @returns
 */

function AskUserOpcion (optionmenuselecthorary, alertviewmenuplate) {
  try{
      this.statusfunction = '';
      this.selectedplatenameplate = '';
      this.selectedplatecostplate = '';

      let optionmenu = Object.entries(optionmenuselecthorary);
      
      let result = prompt( alertviewmenuplate + '\n' + 'Select a plate, please.');
      
      // verified null
      if( result == null ){
        alert('You must write the name of the desired plate please. Thank you');
        localStorage.clear();
        AskUserOpcion (optionmenuselecthorary, alertviewmenuplate);
      } else{
        result = result.toLocaleUpperCase();
      };

      const listado = optionmenu.forEach(([key,value]) => {
        if( value.nameplate === result ){
          this.selectedplatenameplate = value.nameplate;
          this.selectedplatecostplate = value.costplate;
          statusfunction = 'verified';
        };
      });

      if( statusfunction !== 'verified'){
        alert('You must write the name of the desired plate please. Thank you');
        AskUserOpcion (optionmenuselecthorary, alertviewmenuplate);
      };
  } catch(e){
      console.error(e);
  }; 
};

/**
 * CreateTicketAskUser : Complete order ticket generator
 * @param {*} menuselecthorary // Object recovered from PrintFullMenuBottega()
 */

function CreateTicketAskUser (menuselecthorary) {
  try{
      let totalprice = 0;
      
      for (let [key, value] of Object.entries(menuselecthorary)) {
        if (key === 'firstplate') {
          AskUserOpcion(menuselecthorary[key], this.alertviewfirstplate);
          alert( 'You have selected: ' + '\n' + this.selectedplatenameplate + '     -------     ' + this.selectedplatecostplate + ' €' );
          totalprice += this.selectedplatecostplate;
          this.lineticket1 = ('You first plate selected : ' + this.selectedplatenameplate + '     -------     ' + this.selectedplatecostplate + ' €' + '\n' );
        };
        if (key === 'secondplate') {
          AskUserOpcion(menuselecthorary[key], this.alertviewsecondplate);
          alert( 'You have selected: ' + '\n' + this.selectedplatenameplate + '     -------     ' + this.selectedplatecostplate + ' €' );
          totalprice += this.selectedplatecostplate;
          this.lineticket2 = ('You second plate selected : ' + this.selectedplatenameplate + '     -------     ' + this.selectedplatecostplate + ' €' + '\n' );
        };
        if (key === 'thirdplate') {
          AskUserOpcion(menuselecthorary[key], this.alertviewthirdplate);
          alert( 'You have selected: ' + '\n' + this.selectedplatenameplate + '     -------     ' + this.selectedplatecostplate + ' €' );
          totalprice += this.selectedplatecostplate;
          this.lineticket3 = ('You third plate selected : ' + this.selectedplatenameplate + '     -------     ' + this.selectedplatecostplate + ' €' + '\n' );
        };
      };
      if( this.lineticket1 && this.lineticket2 && this.lineticket3 && totalprice ){
        alert( 'Order : ' + '\n' +  this.lineticket1 + '\n' + this.lineticket2 + '\n' + this.lineticket3 + '\n' + 'Total amount ordered :' + totalprice.toFixed(2) + ' €' );
      } else{
        throw 'Error: It was not possible to create the ticket';
      };
    }catch(e){
      console.error(e);
  };
}; 

function main () {
  try{
    
    // Show the menu according to the selected time
    SelectorMenuUserTime();
  
  }catch(e){
    console.error(e);
  };
};

main();