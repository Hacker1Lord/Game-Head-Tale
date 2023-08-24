<!DOCTYPE html>
<html>

<head>
 <meta name="viewport" content="width=device-width, initial-scale=1">
<h2><center><marquee>FLIP GAME</marquee></center></h2>
</head>

<body>
  <button onclick="checkHead();">HEAD</button>
  <button onclick="checkTail();">TAIL</button>

  <button onclick="restart();">RESTART</button>

  <script>


    let depositAmount=prompt("DEPOSIT AMOUNT");



    let stakeAmount=prompt("ENTER STAKE");

    score={
        'computer':0,
        'mine':0,
        'bet':stakeAmount,
        'deposit':depositAmount

    }
  function restart()
    {score.mine=0;
     score.computer=0;
    }

  function head1()
  {
   let myHead=Math.floor(Math.random()*2+1);
   return myHead;
  }
  function tail()
  {
   let myTail=Math.floor(Math.random()*2+1);
   return myTail;
  }

  function computer_play()
  {

      let myComp=Math.floor(Math.random()*2+1);
      return myComp;
  }

  function checkHead()
  {if(head1()===1 && computer_play()===1)
   {alert("YOU WIN");
    alert(score.bet+=100);
   }
   else
   {alert("YOU LOOSE");
    alert(score.deposit-=Number(score.bet));}


   if(score.mine<0)
   {alert("YOU ARE OUT OF CASH. STOP PLAYING");


  }

  }
  function checkTail()
  {if(tail()==2 && computer_play()==2)
   {alert("YOU WIN");
   }
   else
       alert("YOU LOOSE");
  }
</script>
</body>

</html>
