var dp=document.createElement('div');
var dc1=document.createElement('div');
var dc2=document.createElement('div');
var dc3=document.createElement('div');
var dh1=document.createElement('h1');
var dh2=document.createElement('h1');
var dh3=document.createElement('h1');
dh1.innerText='A';
dh2.innerText='B';
dh3.innerText='C';
dc1.appendChild(dh1);
dc2.appendChild(dh2);
dc3.appendChild(dh3);
var pd=document.body.appendChild(dp);
pd.appendChild(dc1);
pd.appendChild(dc2);
pd.appendChild(dc3);

dp.style.height='400px';
dp.style.width='800px';
dp.style.border='2px solid black';
dp.style.display='flex';
dp.style.justifyContent=' space-evenly';
dp.style.alignItems='center';
dc1.style.border='2px solid black';
dc2.style.border='2px solid black';
dc3.style.border='2px solid black';
dc1.style.height='300px'
dc1.style.width='100px'
dc2.style.height='300px'
dc2.style.width='100px'
dc3.style.height='300px'
dc3.style.width='100px'
dh1.style.padding='50px';
dh2.style.padding='50px';
dh3.style.padding='50px'