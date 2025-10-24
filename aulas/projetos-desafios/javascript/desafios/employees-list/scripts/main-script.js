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
         bhome.style.background = '#FFFFFF'
         ihome.style.color = '#5d4181'

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
         bstats.style.background = '#FFFFFF'
         istats.style.color = '#5d4181'

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
         bfavv.style.background = '#FFFFFF'
         ifavv.style.color = '#5d4181'

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
         bempl.style.background = '#FFFFFF'
         iempl.style.color = '#5d4181'

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
         bsett.style.background = '#FFFFFF'
         isett.style.color = '#5d4181'
      break;
   }
}