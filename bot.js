var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexmfl = /^\/mflpa/;  botRegexDL = /^\/DDL/i; botRegexSalt = /^\/salt/; botRegexRules = /^\/rules/
      botRegexAd=/^\/vance/; botRegexGTA = /^\/gta/; botRegexsdl = /^\/sdl/i; botRegexODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexporp = /^\/purpose/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegextrades = /^\/trades/; botRegexFats = /^\/404/; botRegexWAT = /^\/wat/;
      botRegexPurp = /^\/porpoise/; botRegexProp = /^\/propose/; botRegexRec = /^\/records/; botRegexMacho = /^\/machoman/;
      botRegexDuck2 = /^\/ducking/; botRegexTony = /^\/tony/; botRegexDiv = /^\/division/; botRegexJpg = /^\/jpeg/; botRegexGoat = /^\/goat/;
      botRegex420 = /^\/420/; botRegexHuh = /^\/huh/; botRegexStand = /^\/standings/; botRegexCarlos = /^\/carlos/; botRegexDET = /^\/detroitpride/;
      botRegexAss = /^\/assemble/; botRegexDD = /^\/dd/; botRegexSIM = /^\/sim/; botRegexFuck = /^\/fuck/; botRegexSnap = /^\/snap/;
      botRegexToby = /^\/toby/; botRegexDerr = /^\/derrick/; botRegexKerm = /^\/kermit/; botRegexDalt = /^\/dalton/; botRegexFat = /^\/fatty/;
      botRegexPreach = /^\/preach/; botRegexVote = /^\/vote/; botRegexAnyway = /^\/anyway/; botRegexFif = /^\/fif/; botRegexGood = /^\/goodell/;
      botRegexRoar = /^\/roar/; botRegexRespek = /^\/respek/; botRegexFM = /^\/fuckmoney/; botRegexBob = /^\/bobsanders/; botRegexGolf = /^\/golf/;
      botRegexRock = /^\/rockthevote/; botRegexStats = /^\/stats/; botRegexEric = /^\/eric/; botRegexBrain = /^\/brain/; botRegexReject = /^\/rejected/;
      botRegexSch = /^\/sch/; botRegexGreat = /^\/greatness/; botRegexGoat2 = /^\/goatest/; botRegexCardz = /^\/(.*cardz)(\s+.*)/;
      botRegexTemp = /^\/nfl/; botRegexBF = /^\/battlefield/; 
      botRegexSiege = /^\/siege/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegexmfl.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1yrYajVQDuf-TjSDCUZ3l4fvhap3YHiXeMVsaFLUilOc/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MFLPA/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://cdn1.theodysseyonline.com/files/2016/02/20/635915966979689414-1281759650_vance.png");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MFL/rules");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexsdl.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/MFLPA/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/MFLPA/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexporp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://assets.worldwildlife.org/photos/7505/images/story_full_width/Wang_Xiaoqiang_(IHB).jpg?1412017255");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.philly.com/images/092713_shrug_600.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegextrades.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1Jf__XBAxnpj9zqt3uJA5QAKv7taKyGXctWeOR0VdnuU/edit#gid=1420968061");
    this.res.end();
  }
  else if(request.text && botRegexFats.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/YyKPbc5OOTSQE/giphy.gif");
    this.res.end();
  }
    else if(request.text && botRegexWAT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/AxtzziK.gifz");
    this.res.end();
  }
  else if(request.text && botRegexPurp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://engaged.robbinsbrothers.com/wp-content/uploads/2014/01/propose-live-on-tv.jpeg");
    this.res.end();
  }
  else if(request.text && botRegexProp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://goo.gl/forms/Ufc94BnPR9GRPBgs2");
    this.res.end();
  }
    else if(request.text && botRegexRec.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/MFLPA/stats/career");
    this.res.end();
  }
    else if(request.text && botRegexMacho.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.prowrestlingtees.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/m/a/machoman1037_1.png");
    this.res.end();
  }
    else if(request.text && botRegexDuck2.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://orig02.deviantart.net/ca0a/f/2013/074/6/5/mighty_ducks_by_elgota-d5y52vr.jpg");
    this.res.end();
  }
    else if(request.text && botRegexTony.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://kingrichiespizza.com/wp-content/uploads/2014/05/Pepperoni1.jpg");
    this.res.end();
  }
    else if(request.text && botRegexDiv.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://yr3ghajnsielem.files.wordpress.com/2010/06/division.png");
    this.res.end();
  }  
    else if(request.text && botRegexJpg.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://youtu.be/QEzhxP-pdos");
    this.res.end();
  } 
    else if(request.text && botRegexGoat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.washingtonpost.com/wp-srv/photo/gallery/091126/GAL-09Nov26-3194/media/PHO-09Nov26-190137.jpg");
    this.res.end();
  }     
    else if(request.text && botRegex420.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://lh4.googleusercontent.com/-EVVxWTALwVQ/VEpknkiPblI/AAAAAAAABKM/708bOTD7qjI/w702-h336/snoop-cover-702x336.png");
    this.res.end();
  }   
    else if(request.text && botRegexHuh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.blogcdn.com/blog.moviefone.com/media/2008/03/super_high_me.jpg");
    this.res.end();
  }    
    else if(request.text && botRegexStand.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mflpa/standings");
    this.res.end();
  }      
    else if(request.text && botRegexCarlos.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAI8AAAAJGE0NzBmZDhjLWVjYzAtNDRjYi05YTcxLTJhYTA3NzMxYzJlOA.jpg");
    this.res.end();
  }        
    else if(request.text && botRegexDET.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/LZKNNI9.jpg");
    this.res.end();
  }      
    else if(request.text && botRegexAss.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/ZdSr4Jo.png");
    this.res.end();
  }    
    else if(request.text && botRegexDD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://cdn.hitfix.com/photos/4254300/Debbie-Downer.jpg");
    this.res.end();
  }      
    else if(request.text && botRegexSIM.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/v40J3gD.jpg");
    this.res.end();
  }    
    else if(request.text && botRegexFuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.youtube.com/watch?v=Opv_GPC2iFY");
    this.res.end();
  }      
    else if(request.text && botRegexSnap.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media2.giphy.com/media/bU2nZJegR7rz2/200_s.gif");
    this.res.end();
  }      
    else if(request.text && botRegexToby.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://hobbydb-production.s3.amazonaws.com/processed_uploads/subject_photo/subject_photo/image/8117/1436139910-3-8568/Toblerone.jpg");
    this.res.end();
   }
    else if(request.text && botRegexDerr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("/tony");
    this.res.end();
   } 
    else if(request.text && botRegexKerm.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://wac.450f.edgecastcdn.net/80450F/1079ishot.com/files/2014/06/Lipton_Kermit-630x422.png");
    this.res.end();
   }    
    else if(request.text && botRegexDalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/zwcbYRB.jpg");
    this.res.end();
   }      
    else if(request.text && botRegexFat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/hOqSJ2H.jpg");
    this.res.end();
   }    
    else if(request.text && botRegexPreach.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media.washtimes.com.s3.amazonaws.com/media/image/2013/11/12/texans-reed-footballjpeg-06254.jpg");
    this.res.end();
   }   
    else if(request.text && botRegexVote.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://goo.gl/forms/eGJbPCrhCHIeboW03");
    this.res.end();
   }       
    else if(request.text && botRegexAnyway.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://uk.dice.com/technews/wp-content/uploads/2014/12/Moving-on-When-is-the-Right-Time-1.jpg");
    this.res.end();
   }         
    else if(request.text && botRegexFif.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://500daysasunder.files.wordpress.com/2013/01/screen-shot-2013-01-15-at-1-57-15-am.png");
    this.res.end();
   }     
    else if(request.text && botRegexGood.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://jeffwinbush.files.wordpress.com/2015/07/bradys-soft-balls.png");
    this.res.end();
   }     
    else if(request.text && botRegexRoar.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.blackenterprise.com/wp-content/blogs.dir/1/files/2012/10/Woods.jpg");
    this.res.end();
   }        
    else if(request.text && botRegexRespek.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://cdn.contentdeliverywizard.com/sites/15/2016/05/08123736/birdman-1024x535.jpg");
    this.res.end();
   }           
    else if(request.text && botRegexFM.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://youtu.be/RXccTS_CvJU");
    this.res.end();
    }
    else if(request.text && botRegexBob.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mflpa/players?name=&position=all&team=all&injured=1")
    this.res.end();
    }
    else if(request.text && botRegexGolf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1WHEhoNLbMZbe80Bw7erveDx7NDxxHpE4suxqJ5HTTiw/edit#gid=0")
    this.res.end();
    }    
      else if(request.text && botRegexRock.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://goo.gl/forms/cy2I05dlK2jImfu73”)
    this.res.end();
    }      
    else if(request.text && botRegexStats.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mflpa/stats/player")
    this.res.end();
    }     
      else if(request.text && botRegexEric.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/instances/400x/58337600.jpg")
    this.res.end();
    }     
      else if(request.text && botRegexBrain.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://d3d2maoophos6y.cloudfront.net/wp-content/uploads/sites/7/2015/05/08184132/Bobby-The-Brain-Heenan.jpg")
    this.res.end();
    }      
    else if(request.text && botRegexReject.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cmgajcpolitics.files.wordpress.com/2014/04/mutombo.jpg")
    this.res.end();
    }   
    else if(request.text && botRegexSch.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/736x/1d/8a/cd/1d8acd8c6e8e337ce31bef84a8636491.jpg")
    this.res.end();
    }   
    else if(request.text && botRegexGreat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/1GKKJi0.jpg")
    this.res.end();
    }       
      else if(request.text && botRegexGoat2.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media0.giphy.com/media/pnMm35fFjw16U/giphy.gif")
    this.res.end();
    }         
      else if(request.text && botRegexCardz.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.directordealabanza.com/wp-content/uploads/2014/03/no.jpg")
    this.res.end();
    }          
    else if(request.text && botRegexTemp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1yrYajVQDuf-TjSDCUZ3l4fvhap3YHiXeMVsaFLUilOc/edit#gid=1029800088")
    this.res.end();
    }   
     else if(request.text && botRegexBF.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/original/000/210/690/battlefield_3_vs_pike.jpg")
    this.res.end();
    }  
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
