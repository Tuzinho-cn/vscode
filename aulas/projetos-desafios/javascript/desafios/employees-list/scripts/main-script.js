let home = document.getElementById("home");

let stats = document.getElementById("stats");

let favv = document.getElementById("favorite");

let empl = document.getElementById("employees");

let sett = document.getElementById("setting");

//--------------------

let bhome = document.getElementById("bhome");

let bstats = document.getElementById("bstats");

let bfavv = document.getElementById("bfavv");

let bempl = document.getElementById("bempl");

let bsett = document.getElementById("bsett");

//--------------------

let ihome = document.getElementById("ihome");

let istats = document.getElementById("istats");

let ifavv = document.getElementById("ifavv");

let iempl = document.getElementById("iempl");

let isett = document.getElementById("isett");

function Show(type)
{
   switch (type)
   {
      case 's-home':
         home.style.display = 'block';
         bhome.style.setProperty('background', '#FFFFFF', 'important')
         ihome.style.setProperty('color', '#5d4181', 'important');

         stats.style.display = 'none';
         bstats.style.background = 'transparent'
         istats.style.color = '#FFFFFF'
         
         favv.style.display = 'none';
         bfavv.style.background = 'transparent'
         ifavv.style.color = '#FFFFFF'

         empl.style.display = 'none';
         bempl.style.background = 'transparent'
         iempl.style.color = '#FFFFFF'

         sett.style.display = 'none';
         bsett.style.background = 'transparent'
         isett.style.color = '#FFFFFF'
      break;

      case 's-stats':
         home.style.display = 'none';
         bhome.style.background = 'transparent';
         ihome.style.color = '#FFFFFF'

         stats.style.display = 'block';
         bstats.style.setProperty('background', '#FFFFFF', 'important')
         istats.style.setProperty('color', '#5d4181', 'important');

         favv.style.display = 'none';
         bfavv.style.background = 'transparent'
         ifavv.style.color = '#FFFFFF'

         empl.style.display = 'none';
         bempl.style.background = 'transparent'
         iempl.style.color = '#FFFFFF'

         sett.style.display = 'none';
         bsett.style.background = 'transparent'
         isett.style.color = '#FFFFFF'
      break;

      case 's-favv':
         home.style.display = 'none';
         bhome.style.background = 'transparent';
         ihome.style.color = '#FFFFFF'

         stats.style.display = 'none';
         bstats.style.background = 'transparent'
         istats.style.color = '#FFFFFF'

         favv.style.display = 'block';
         bfavv.style.setProperty('background', '#FFFFFF', 'important')
         ifavv.style.setProperty('color', '#5d4181', 'important');

         empl.style.display = 'none';
         bempl.style.background = 'transparent'
         iempl.style.color = '#FFFFFF'

         sett.style.display = 'none';
         bsett.style.background = 'transparent'
         isett.style.color = '#FFFFFF'
      break;

      case 's-empl':
         home.style.display = 'none';
         bhome.style.background = 'transparent';
         ihome.style.color = '#FFFFFF'

         stats.style.display = 'none';
         bstats.style.background = 'transparent'
         istats.style.color = '#FFFFFF'

         favv.style.display = 'none';
         bfavv.style.background = 'transparent'
         ifavv.style.color = '#FFFFFF'

         empl.style.display = 'block';
         bempl.style.setProperty('background', '#FFFFFF', 'important')
         iempl.style.setProperty('color', '#5d4181', 'important');

         sett.style.display = 'none';
         bsett.style.background = 'transparent'
         isett.style.color = '#FFFFFF'
      break;

      case 's-sett':
         home.style.display = 'none';
         bhome.style.background = 'transparent';
         ihome.style.color = '#FFFFFF'

         stats.style.display = 'none';
         bstats.style.background = 'transparent'
         istats.style.color = '#FFFFFF'

         favv.style.display = 'none';
         bfavv.style.background = 'transparent'
         ifavv.style.color = '#FFFFFF'

         empl.style.display = 'none';
         bempl.style.background = 'transparent'
         iempl.style.color = '#FFFFFF'

         sett.style.display = 'block';
         bsett.style.setProperty('background', '#FFFFFF', 'important')
         isett.style.setProperty('color', '#5d4181', 'important');
      break;
   }
}

//--------------------

let bacts = document.getElementById("bactions");

let bactp = document.getElementById('bactionp');

function Pressed(which)
{
   if (which == 'bsec')
   {
         bacts.style.setProperty('background', '#FFFFFF', 'important')
         bacts.style.setProperty('color', '#5d4181', 'important');

         bactp.style.background = '#7351A1'
         bactp.style.color = '#FFFFFF'
   }
   else if (which == 'bpri')
   {
         bacts.style.background = '#7351A1'
         bacts.style.color = '#FFFFFF'

         bactp.style.setProperty('background', '#FFFFFF', 'important')
         bactp.style.setProperty('color', '#5d4181', 'important');
   }
}

//--------------------

let flist = document.getElementById('filter-list');

function showFilters()
{
   if (flist.style.display != 'block')
   {
      flist.style.display = 'block';
   }
   else
   {
      flist.style.display = 'none';
   }
}

//------------------------

//PRECISO FAZER ESSA MERDA DE FILTRO FUNFAR LEGALZIN

//#region FILTRO
//-------------------

// let cfema = document.getElementById('cfema');

// let cmale = document.getElementById('cmale');

// let cfive = document.getElementById('cfive');

// let listsexArray = [];
// let listtrArray = [];

// listsexArray.push(document.getElementById('1').textContent);
// listsexArray.push(document.getElementById('3').textContent);
// listsexArray.push(document.getElementById('2').textContent);
// listsexArray.push(document.getElementById('4').textContent);
// listsexArray.push(document.getElementById('5').textContent);
// listsexArray.push(document.getElementById('6').textContent);



// listtrArray.push(document.getElementById('tr1'));
// listtrArray.push(document.getElementById('tr2'));
// listtrArray.push(document.getElementById('tr3'));
// listtrArray.push(document.getElementById('tr4'));
// listtrArray.push(document.getElementById('tr5'));
// listtrArray.push(document.getElementById('tr6'));

// let i = 1;

// let maxlisttrArray = listtrArray.length;

// function Filter()
// {
    let test = document.getElementById('test');
//       for (i = 1 ; i <= maxlisttrArray ; i++)
//       {
//          if (listsexArray[i] != "Female")
//          {
//             listtrArray[i].style.display = 'none';
//          }
//          else
//          {
//             if (listtrArray[i].style.display == 'none')
//             {
//                test.innerHTML = "funfou";
//             }
//          }
//       }
// }

//#endregion

//-------------------------



