const filterBtns = document.querySelectorAll('.filter__btn');
const filterPanels = document.querySelectorAll('.filter__panel');

let currentfilter = 0;

function filterClicked(id) {
    console.log(id);
    if(id == currentfilter){return;}

    filterBtns.forEach(btn => { if(btn.classList.contains('active')){btn.classList.remove('active')};});
    filterBtns.forEach(btn => { if(btn.id == id){btn.classList.add('active')};});

    if(id == 0)
    {
        filterPanels.forEach(pnl => {if(!pnl.classList.contains('active')){pnl.classList.add('active')};});
    }
    else
    {
        filterPanels.forEach(pnl => {if(pnl.classList.contains('active')){pnl.classList.remove('active')};});
        filterPanels.forEach(pnl => {if(pnl.classList.contains(`f${id}`)){pnl.classList.add('active')};});
    }

    currentfilter = id;
}