let xp=0;
let gold=50;
let health=100;
let weapon=0;
let curw=0;
let power=2;
let inv=["Stick"];
let monh=0;
const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");
const button3=document.querySelector("#button3");
const text=document.querySelector("#text");
const xpt=document.querySelector("#xpText");
const hp=document.querySelector("#healthText");
const goldt=document.querySelector("#goldText");
const ms=document.querySelector("#monsterStats");
const mh=document.querySelector("#monsterHealth");
const mn=document.querySelector("#monsterName");
const button4=document.querySelector("#button4");
const powert=document.querySelector("#powerText");
const cele=document.querySelector("#celebration");
const ld=document.querySelector("#dead");
const defe=document.querySelector("#defeated");
let fighting = 0;
button1.onclick = gost;
button2.onclick = goca;
button3.onclick =fid;

const beasts=[
  {
    name:"Joshi",
    health:10,
    attack:1,
    weapon:"his laptop",
  },
  {
    name:"Singh",
    health:70,
    attack:2,
    weapon:"his pilas",
  },
  {
    name:"bencho",
    health:120,
    attack:5,
    weapon:"mirchi",
  },
  {
    name:"beend",
    health:100,
    attack:7,
    weapon:"nakhun",
  },
  {
    name:"tau",
    health:130,
    attack:10,
    weapon:"chooran"
  },
  {
    name:"golu",
    health:150,
    attack:11,
    weapon:"Vaseline",
  },
  {
    name:"toti",
    health:200,
    attack:17,
    weapon:"slap",
  },
  {
    name:"saand",
    health:250,
    attack:20,
    weapon:"sendha namak",
  },
  {
    name:"R.K. Pandey",
    health:500,
    attack:50,
    weapon:"DisCo",
  }
]
const locations=[
    {
      name:"town sqaure",
      "button text":["Go to Store","Go to Cave","Fight R.K. Pandey"],
      "button function":[gost,goca,fid],
      text:"Welcome to the town sqaure. You see a sign that says \"Store\".",
    },
    {
      name:"Store",
      "button text":["Buy 10 Helath(10 gold)","Buy weapon(30 gold)","Go Back"],
      "button function":[buyhp,buyw,gotown],
      text:"You are now in store.",
    },
    {
      name:"cave",
      "button text":["Fight "+ beasts[fighting].name +".","Fight fanged beast","Go Back"],
      "button function":[fis,fifb,gotown],
      text:"You are in the Cave.",
    },
    {
      name:"fight",
      "button text":["attack","dodge","escape to town"],
      "button function":[attack,dodge,gotown],
      text:"",
    },
    {
      name:"dragon fight",
      "button text":["attack","dodge","escape to town"],
      "button function":[attackd,dodged,gotown],
    }
  ]
const weapons=[
  {
    name:"Stick",
    power:2,
    exp:0,
    lvl:10,
  },
  {
    name:"Wooden Sword",
    power:5,
    exp:0,
    lvl:25,
  },
  {
    name:"Sword",
    power:10,
    exp:0,
    lvl:50,
  },
  {
    name:"Spear",
    power:15,
    exp:0,
    lvl:100,
  },
  {
    name:"Bow and Arrow",
    power:20,
    exp:0,
    lvl:250,
  },
  {
    name:"Katta",
    power:25,
    exp:0,
    lvl:500,
  },
  {
    name:"Rifle",
    power:50,
    exp:0,
    lvl:1000,
  }
]

function update(location)
{
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  if(location.name=="cave")
  {
    button2.setAttribute("hidden","hidden");
    button1.innerText="Fight "+beasts[fighting].name+".";
  }
  else
  {
    button2.removeAttribute("hidden");
  }
  if(location.name=="Store")
  {
    button4.removeAttribute("hidden");
    button4.onclick=lusp;
  }
  else
  {
    button4.setAttribute("hidden","hidden");
  }
  button1.onclick = location["button function"][0];
  button2.onclick = location["button function"][1];
  button3.onclick = location["button function"][2];
  text.innerText = location.text;
}

function gost()
{
  
  update(locations[1]);
}

function lusp()
{
  if(gold<3)
  {
    text.innerText="Can not play the spin"
  }
  else
  {
      gold=gold-3;
      let x=Math.floor(Math.random()*31)-15+xp/10;
      if(x<0)
      {
        if(Math.abs(x)>=gold)
        {
          gold=0;
        }
        else
        {
          gold=gold+x;
        }
      }
      else
      {
        gold=gold+x;
      }
      // if(gold==0)
      // {
      //   text.innerText="You are Bankrupt, Game over";
      //   location.reload();
      // }
      goldt.innerText=gold;
  }
}

function buyhp()
{
  if(gold<10)
  {
    text.innerText="Insufficient gold";
  }
  else
  {
    gold=gold-10;
    health=health+10;
    goldt.innerText=gold;
    hp.innerText=health;
    text.innerText="Bought health";
    
  }
}

function buyw()
{
  if(curw<weapons.length-1)
  {
      if(gold>=30)
      {
        gold-=30;
        curw++;
        goldt.innerText=gold;
        let neww=weapons[curw].name;
        power=weapons[curw].power;
        text.innerText="You now have a "+neww+".";
        inv.push(neww);
        text.innerText+="\nYour inventory has "+inv+".";
        powert.innerText=power;
      }
      else
      {
        text.innerText="Insufficient gold";
      }
  }
  else
  {
    text.innerText="Already bought the most powerful weapon";
    button2.innerText="Sell Weapon(15 gold)";
    button2.onclick=sellw;
  }
}

function sellw()
{
  if(inv.length>1)
  {
    gold+=15;
    goldt.innerText=gold;
    let selw=inv.shift();
    text.innerText="You sold "+selw+".";
    text.innerText="\nYour inventory now has "+inv+".";
  }
  else
  {
    text.innerText="Don't sell your only weapon";
  }
}

function gotown()
{
  cele.style.display="none";
  ms.style.display="none";
  button1.removeAttribute("hidden");
  button2.removeAttribute("hidden");
  button3.removeAttribute("hidden");
  update(locations[0]);
}

function goca()
{
  cele.style.display="none";
  ms.style.display="none";
  button1.removeAttribute("hidden");
  button3.removeAttribute("hidden");
  update(locations[2]);
  if(fighting>=beasts.length-1)
  {
    text.innerText+="\nYou have defeated 4 Kamre.";
    button1.setAttribute("hidden","hidden");
  }
  
}

function fid()
{
  button1.removeAttribute("hidden");
  button2.removeAttribute("hidden");
  button3.removeAttribute("hidden");
  update(locations[4])
  ms.style.display="block";
  monh=500
  mn.innerText = "R.K. Pandey";
  mh.innerText = monh;
  text.innerText+="You are fighting R.K. Pandey.";
}

function fis()
{
  update(locations[3]);
  button1.removeAttribute("hidden");
  button2.removeAttribute("hidden");
  button3.removeAttribute("hidden");
  text.innerText+="You are fighting "+beasts[fighting].name+".";
  ms.style.display="block";
  monh = beasts[fighting].health;
  mn.innerText= beasts[fighting].name;
  mh.innerText = monh;
}

function fifb()
{
  //make
}

function attack()
{
  text.innerText="You attacked "+beasts[fighting].name+" with a "+weapons[curw].name+".\n";
  let att=Math.random()-0.3;
  if(att<0)
  {
    text.innerText+="You missed\n";
  }
  text.innerText+=beasts[fighting].name+" attacked you with "+beasts[fighting].weapon+".\n";
  let matt=Math.random()-0.3;
  if(matt<0)
  {
    text.innerText+=beasts[fighting].name +" missed";
  }
  if(att>0)
  {
    monh=monh-weapons[curw].power;
  }
  if(matt>0)
  {
    health-=beasts[fighting].attack;
  }
  mh.innerText = monh;
  hp.innerText=health;
  if(health<=0)
  {
    lose();
  }
  if(monh<=0)
  {
    defeat();
  }
}

function dodge()
{
  if(Math.random()-0.7>0)
  {
    text.innerText="You dodged";
  }
  else
  {
    health-=beasts[fighting].attack;
    hp.innerText=health;
  }

  if(health<=0)
  {
    lose();
  }
}

function defeat()
{
  cele.innerText="You defeated "+ beasts[fighting].name+".";
  text.innerText="You defeated "+beasts[fighting].name+".";
  xp=beasts[fighting].health;
  fighting++;
  gold+=30*fighting;
  xpt.innerText=xp;
  goldt.innerText=gold;
  button1.innerText="Go to Town";
  button2.innerText="Go to Cave";
  button1.onclick = gotown;
  button2.onclick = goca;
  button3.innerText = "Sucide";
  button3.onclick = sucide;
  cele.style.display="flex";
  
  // celebration();
}

function sucide()
{
  ld.style.display="flex";
  button1.innerText = "Respawn"
  button1.onclick = respawn;
  button2.setAttribute("hidden","hidden");
  button3.setAttribute("hidden","hidden");
  text.innerText="You died";
  cele.style.display="none";
}

function lose()
{
  defe.style.display="flex";
  button1.innerText = "Respawn"
  button1.onclick = respawn;
  button2.setAttribute("hidden","hidden");
  button3.setAttribute("hidden","hidden");
  text.innerText="You died";
  cele.style.display="none";
}

function respawn()
{
  location.reload();
}

function attackd()
{
  text.innerText="You attacked "+beasts[8].name+" with a "+weapons[curw].name+".\n";
  let att=Math.random()-0.3;
  if(att<0)
  {
    text.innerText+="You missed\n";
  }
  text.innerText+=beasts[8].name+" attacked you with "+beasts[8].weapon+".\n";
  let matt=Math.random()-0.3;
  if(matt<0)
  {
    text.innerText+=beasts[8].name +" missed";
  }
  if(att>0)
  {
    monh=monh-weapons[curw].power;
  }
  if(matt>0)
  {
    health-=beasts[8].attack;
  }
  mh.innerText = monh;
  hp.innerText=health;
  if(health<=0)
  {
    lose();
  }
  if(monh<=0)
  {
    defeat();
  }
}

function defeatd()
{
  cele.innerText="You Defeated R.K. Pandey";
  text.innerText="You defeated "+beasts[8].name+".";
  text.innerText="You WON!!!";
  button1.innerText="Go to Town";
  button2.innerText="Go to Cave";
  button1.onclick = gotown;
  button2.onclick = goca;
  button3.innerText = "Celebrate";
  button3.onclick = lose;
  cele.style.display="flex";
}

function dodged()
{
  if(Math.random()-0.1>0)
  {
    text.innerText="You dodged";
  }
  else
  {
    health-=beasts[8].attack;
    hp.innerText=health;
  }

  if(health<=0)
  {
    lose();
  }
}