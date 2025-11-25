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

let idown = document.getElementById('idown');

function showFilters()
{
   if (flist.style.display != 'block')
   {
      idown.innerHTML = 'stat_1'
      flist.style.display = 'block';
   }
   else
   {
      idown.innerHTML = 'stat_minus_1'
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

//#region 

let thpdate = document.getElementById('th-pdate')

let trpdate1 = document.getElementById('tr-pdate1');

let trpdate2 = document.getElementById('tr-pdate2');

let dayName = [];

let i = 0;

const actualDate = new Date();

const monthDay = actualDate.getDate();

const unformweekDay = actualDate.getDay();
let weekDay = [];

let actmonth = document.getElementById('act-month');

let actualmonth = actualDate.getMonth();

const abrir = document.getElementById('openCalendar');

const input = document.getElementById('inputDate');

abrir.addEventListener('click', () => {
  input.showPicker(); // abre o seletor nativo de data
});

switch (actualmonth)
{
      case 0:
         actualmonth = "January";
      break;
      
      case 1:
         actualmonth = "Febuary";
      break;

      case 2:
         actualmonth = "March";
      break;

      case 3:
         actualmonth = "April";
      break;

      case 4:
         actualmonth = "May";
      break;

      case 5:
         actualmonth = "June";
      break;

      case 6:
         actualmonth = "July";
      break;

      case 7:
         actualmonth = "August";
      break;

      case 8:
         actualmonth = "September";
      break;

      case 9:
         actualmonth = "October";
      break;

      case 10:
         actualmonth = "November";
      break;

      case 11:
         actualmonth = "December";
      break;
}

actmonth.innerHTML += `${actualmonth}`;



for (i = 0 ; i < 7 ; i++)
{
   weekDay.push(unformweekDay + i);
}

for (i = 0 ; i < 7 ; i++)
{
   switch (weekDay[i])
   {
      case 0:
         dayName[i] = "Sun";
      break;
      
      case 1:
         dayName[i] = "Mon";
      break;

      case 2:
         dayName[i] = "Tue";
      break;

      case 3:
         dayName[i] = "Wed";
      break;

      case 4:
         dayName[i] = "Thu";
      break;

      case 5:
         dayName[i] = "Fri";
      break;

      case 6:
         dayName[i] = "Sat";
      break;

      case 7:
         dayName[i] = "Sun";
      break;

      case 8:
         dayName[i] = "Mon";
      break;

      case 9:
         dayName[i] = "Tue";
      break;

      case 10:
         dayName[i] = "Wed";
      break;

      case 11:
         dayName[i] = "Thu";
      break;

      case 12:
         dayName[i] = "Fri";
      break;
      
   }
}

let altern = weekDay.length - 2;

for (i = 0 ; i < 7 ; i++)
{
   if (i < 2)
   {
      trpdate1.innerHTML += `<th>${dayName[i + altern]}</th>`;
   }
   else 
   {
      for (j = 0 ; j <= 5 ; j++)
      {
         if (weekDay[j] == unformweekDay)
         {
            trpdate1.innerHTML += `<th id="todayis">${dayName[j]}</th>`;
            i++;
         }
         else
         {
            trpdate1.innerHTML += `<th>${dayName[j]}</th>`; 
            i++;
         }
      }
   }
}


// Pega a data atual
let hoje = new Date();
let diaAtual = hoje.getDate();
let mesAtual = hoje.getMonth(); // 0 = janeiro
let anoAtual = hoje.getFullYear();

// Função que retorna o último dia de um mês
function ultimoDiaDoMes(ano, mes) {
  return new Date(ano, mes + 1, 0).getDate();
}

// Criar o intervalo: 2 dias antes e 5 dias depois
let dias = [];

for (let i = -2; i <= 5; i++) {
  let data = new Date(anoAtual, mesAtual, diaAtual + i);
  dias.push(data.getDate());
}

// Limpa o trpdate2 e adiciona os dias
trpdate2.innerHTML = "";

dias.forEach((dia, index) => {
  if (index === 2) {
    // O terceiro elemento (0,1,2) é o dia atual
    trpdate2.innerHTML += `<td id="num-todayis">${dia}</span></td>`;
  } else {
    trpdate2.innerHTML += `<td>${dia}</td>`;
  }
});

/* Sincroniza o inputDate com a tabela de dias:
   ao alterar a data no input, recria as duas linhas (tr-pdate1 e tr-pdate2)
   colocando a data selecionada na 3ª célula (índice 2). */
(function setupDateInputSync() {
  const inputEl = document.getElementById('inputDate');
  const tr1 = document.getElementById('tr-pdate1');
  const tr2 = document.getElementById('tr-pdate2');
  const actmonthEl = document.getElementById('act-month');

  if (!inputEl || !tr1 || !tr2) return;

  const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const monthNames = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];

  function renderFor(date) {
    const ref = new Date(date.getFullYear(), date.getMonth(), date.getDate()); // normalize
    const offsets = [];
    for (let o = -2; o <= 5; o++) offsets.push(o);

    tr1.innerHTML = '';
    tr2.innerHTML = '';

    offsets.forEach((off, idx) => {
      const d = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate() + off);
      const name = dayNames[d.getDay()];
      const num = d.getDate();

      if (idx === 2) {
        tr1.innerHTML += `<th id="todayis">${name}</th>`;
        tr2.innerHTML += `<td id="num-todayis">${num}</td>`;
      } else {
        tr1.innerHTML += `<th>${name}</th>`;
        tr2.innerHTML += `<td>${num}</td>`;
      }
    });

    if (actmonthEl) actmonthEl.textContent = `${monthNames[ref.getMonth()]}`;
  }

  // inicial: quando o usuário escolher uma data
  inputEl.addEventListener('change', (ev) => {
    const v = ev.target.value;
    if (!v) return;
    const sel = new Date(v + 'T00:00:00');
    if (isNaN(sel)) return;
    renderFor(sel);
  });
})();

//#endregion

//------------------------------------------

