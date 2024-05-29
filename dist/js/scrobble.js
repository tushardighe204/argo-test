function welcomeFn(){var t=document.getElementById("userName").value;""==t?UIkit.notification({message:"<span uk-icon='icon: warning'></span> Error! Enter a Last.fm user name.",status:"danger"}):UIkit.notification({message:"<span uk-icon='icon: check'></span> Visualising your data now. Scroll down if on a mobile device.",status:"primary"}),$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getinfo&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(e){var a=e.user.realname,n="<b>"+e.user.playcount+"</b>",o=e.user.playcount,r=e.user.registered.unixtime,s=e.user.image[2]["#text"],i=new Date(1e3*r),c=i.getFullYear(),m="<b>"+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i.getMonth()]+" "+i.getDate()+", "+c+"</b>!",u=new Date(1e3*r),l=new Date,d="<b>"+Math.round(Math.abs((u.getTime()-l.getTime())/864e5))+"</b>",g="<b>"+(o/Math.round(Math.abs((u.getTime()-l.getTime())/864e5))).toFixed()+"</b>";$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(e){var o=e.recenttracks.track[1].name,r=e.recenttracks.track[1].date["#text"],i=e.recenttracks.track[1].url,c=e.recenttracks.track[1].image[2]["#text"],u=e.recenttracks.track[1].artist["#text"],l="<b>"+e.recenttracks.track[1].album["#text"]+"</b>";document.getElementById("welcome").innerHTML="Hi "+a,document.getElementById("totalScrobbles").innerHTML="You have heard a total of "+n+" songs since joining Last.fm on "+m+" It means "+d+" days have elapsed since then! Oh, it also means that you have listened to "+g+" songs per day! Keep it up.",document.getElementById("image").src=s,$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&limit=10&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(e){var a="",n=e.toptracks.track[0].name,o=e.toptracks.track[0].artist.name,r=e.toptracks.track[0].image[2]["#text"],s=e.toptracks.track[0]["@attr"].rank;$.each(e.toptracks.track,function(t,e){a+="<li><b>"+e.name+"</b> - Play count : "+e.playcount+"</li>"}),document.getElementById("toptentracksLabel").innerHTML="Your Top 10 Most Played Songs: -",document.getElementById("toptentrackscard").hidden=!1,document.getElementById("mostplayedtrackimage").src=r,document.getElementById("mostplayedsongtitle").innerHTML=n,document.getElementById("mostplayedsongartist").innerHTML="by <i>"+o+"</i>",document.getElementById("mostplayedsongrank").innerHTML="Ranking : # "+s,$("#toptentracks").empty(),$("#toptentracks").append(a),$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&limit=10&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(e){var a="",n=e.topartists.artist[0].name,o=e.topartists.artist[0].image[2]["#text"],r=e.topartists.artist[0]["@attr"].rank;$.each(e.topartists.artist,function(t,e){a+="<li><b>"+e.name+"</b> - Play count : "+e.playcount+"</li>"}),document.getElementById("toptenArtistsLabel").innerHTML="Your Top 10 Most Played Artists: -",document.getElementById("toptenartistscard").hidden=!1,document.getElementById("mostplayedartistimage").src=o,document.getElementById("mostplayedartist").innerHTML=n,document.getElementById("mostplayedartistrank").innerHTML="Ranking : # "+r,$("#toptenartists").empty(),$("#toptenartists").append(a),$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&limit=10&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(t){var e="",a=t.topalbums.album[0].name,n=t.topalbums.album[0].artist.name,o=t.topalbums.album[0].image[2]["#text"],r=t.topalbums.album[0]["@attr"].rank;$.each(t.topalbums.album,function(t,a){e+="<li><b>"+a.name+"</b> - Play count : "+a.playcount+"</li>"}),document.getElementById("toptenAlbumsLabel").innerHTML="Your Top 10 Most Played Albums: -",document.getElementById("toptenalbumscard").hidden=!1,document.getElementById("mostplayedalbumimage").src=o,document.getElementById("mostplayedalbum").innerHTML=a,document.getElementById("mostplayedalbumartist").innerHTML="by <i>"+n+"</i>",document.getElementById("mostplayedalbumrank").innerHTML="Ranking : # "+r,$("#toptenalbums").empty(),$("#toptenalbums").append(e)})})});document.getElementById("recentTracks").innerHTML='<i class="fas fa-compact-disc fa-spin"></i> Your last played song is : <b>'+o+"</b> by : <b>"+u+"</b> from the Album : "+l,document.getElementById("lastplayed").src=c,document.getElementById("lastplayedsongdetails").hidden=!1,document.getElementById("lastplayedsongtitle").innerHTML=o,document.getElementById("lastplayedsongtime").innerHTML="Played on : "+r,document.getElementById("lastplayedsongdescription").innerHTML="Artist : <b>"+u+"</b> Album : "+l+". To read more about the song, click the link below.",document.getElementById("lastplayedsonglink").href=i;var b=encodeURIComponent(u),p=encodeURIComponent(o),y="https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=6e616452b7c762a15256272ddb774c56&username="+t+"&artist="+b+"&track="+p+"&format=json";$.getJSON(y,function(t){var e=t.track.userplaycount,a=t.track.playcount,n=t.track.listeners,o=e/a;document.getElementById("trackuserplaycount").innerHTML="You have played this song <b>"+e+"</b> times! <b>"+n+"</b> other listeners have also played this song. Your listenership is <b>"+o.toFixed(4)+"</b> based on the global play-count of <b>"+a+"</b>."})})})}function drawChart(){var t=document.getElementById("userName").value;$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&limit=20&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(t){var e=new google.visualization.DataTable;e.addColumn("string","Song Title"),e.addColumn("number","Play Count");for(var a=0;a<t.toptracks.track.length;a++){e.addRow([t.toptracks.track[a].name,parseInt(t.toptracks.track[a].playcount)]);new google.visualization.ColumnChart(document.getElementById("mostplayedtracks")).draw(e,{title:"Most Played Tracks. (Hover mouse to see the title.)",hAxis:{textPosition:"none"},chartArea:{width:"85%",height:"78%"},legend:{position:"bottom"}})}document.getElementById("top20tracksLabel").innerHTML="And here are your Top 20 Most Played Songs: -"}),$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&limit=20&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(t){var e=new google.visualization.DataTable;e.addColumn("string","Artist"),e.addColumn("number","Play Count");for(var a=0;a<t.topartists.artist.length;a++){e.addRow([t.topartists.artist[a].name,parseInt(t.topartists.artist[a].playcount)]);new google.visualization.ColumnChart(document.getElementById("mostplayedartists")).draw(e,{title:"Most Heard Artists. (Hover mouse to see the title.)",chartArea:{width:"85%",height:"78%"},legend:"bottom",hAxis:{textPosition:"none"}})}document.getElementById("top20artistsLabel").innerHTML="And here are your Top 20 Most Heard Artists: -"}),$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&limit=20&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(t){var e=new google.visualization.DataTable;e.addColumn("string","Album"),e.addColumn("number","Play Count");for(var a=0;a<t.topalbums.album.length;a++){e.addRow([t.topalbums.album[a].name,parseInt(t.topalbums.album[a].playcount)]);new google.visualization.ColumnChart(document.getElementById("mostplayedalbums")).draw(e,{title:"Most Heard Albums. (Hover mouse to see the title.)",chartArea:{width:"85%",height:"78%"},legend:"bottom",hAxis:{textPosition:"none"}})}document.getElementById("top20albumsLabel").innerHTML="And here are your Top 20 Most Heard Albums: -"}),$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettoptags&limit=5&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(t){var e=new google.visualization.DataTable;e.addColumn("string","Tags/Genre"),e.addColumn("number","Count");for(var a=0;a<t.toptags.tag.length;a++){e.addRow([t.toptags.tag[a].name,parseInt(t.toptags.tag[a].count)]);new google.visualization.PieChart(document.getElementById("toptags")).draw(e,{title:"Top Tags/Genre. (Hover mouse to see the title.)",chartArea:{width:"85%",height:"95%"},pieSliceText:"label",legend:"none",pieHole:.4})}document.getElementById("toptagsLabel").innerHTML="Your Top Tags/Genre: -"})}function fetchNumber(){var t=document.getElementById("userName").value;$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(e){$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(e){$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(t){var e=t.topalbums["@attr"].total;document.getElementById("numuniquealbums").innerHTML="Albums : "+e});var a=e.topartists["@attr"].total;document.getElementById("numuniqueartists").innerHTML="Artists : "+a+" "});var a=e.toptracks["@attr"].total;document.getElementById("numunique").innerHTML="In case you want to know how many distinct Tracks/Artists/Albums you have listened to, here the data is.",document.getElementById("numuniquetracks").innerHTML="Tracks :  "+a+" "})}function scrobblesDaily(){var t=document.getElementById("userName").value,e=(new Date).setUTCHours(0,0,0,0)/1e3;$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&from="+e+"&format=json",function(t){var e="<b>"+t.recenttracks["@attr"].total+"</b>";document.getElementById("todaysscrobbles").innerHTML="You have listened to "+e+" songs today."})}function uniqueTracks(){var t="https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&limit=10&api_key=6e616452b7c762a15256272ddb774c56&user="+document.getElementById("userName").value+"&format=json",e=new XMLHttpRequest,a=new XMLHttpRequest;e.open("GET",t),a.open("GET","https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=6e616452b7c762a15256272ddb774c56&limit=10&format=json"),e.responseType="json",a.responseType="json";var n=[],o=[];e.onload=function(){for(var t=0;t<10;t++){var a=e.response.toptracks.track[t].name;n.push(a)}},e.send(),a.onload=function(){for(var t=0;t<10;t++){var e=a.response.tracks.track[t].name;o.push(e)}var r=$(o).not(n).get();document.getElementById("trackuniqueness").innerHTML="Unique-O-Meter",document.getElementById("diff").innerHTML="Your listening taste uniqueness quotient is <b>"+10*r.length+"</b>. It means "+(10-r.length)+" of your top 10 tracks match the global top 10!";var s=google.visualization.arrayToDataTable([["Label","Value"],["Uniqueness",10*r.length]]);new google.visualization.Gauge(document.getElementById("uniquetracksguage")).draw(s,{redFrom:90,redTo:100,yellowFrom:75,yellowTo:90,minorTicks:5})},a.send()}function uniqueArtists(){var t="https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&limit=10&api_key=6e616452b7c762a15256272ddb774c56&user="+document.getElementById("userName").value+"&format=json",e=new XMLHttpRequest,a=new XMLHttpRequest;e.open("GET",t),a.open("GET","https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=6e616452b7c762a15256272ddb774c56&limit=10&format=json"),e.responseType="json",a.responseType="json";var n=[],o=[];e.onload=function(){for(var t=0;t<10;t++){var a=e.response.topartists.artist[t].name;n.push(a)}},e.send(),a.onload=function(){for(var t=0;t<10;t++){var e=a.response.artists.artist[t].name;o.push(e)}var r=$(o).not(n).get();document.getElementById("artistuniqueness").innerHTML="Unique-O-Meter",document.getElementById("artist_diff").innerHTML="Your Artist/Singer uniqueness quotient is <b>"+10*r.length+"</b>. It means "+(10-r.length)+" of your top 10 Artists match the global top 10!";var s=google.visualization.arrayToDataTable([["Label","Value"],["Uniqueness",10*r.length]]);new google.visualization.Gauge(document.getElementById("uniqueartistsguage")).draw(s,{redFrom:90,redTo:100,yellowFrom:75,yellowTo:90,minorTicks:5})},a.send()}function firstSong(){var t=document.getElementById("userName").value;$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&page=200000&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(e){var a=e.recenttracks["@attr"].totalPages,n="https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&page="+a+"&format=json";$.getJSON(n,function(t){var e=t.recenttracks.track[t.recenttracks.track.length-1].name,a=t.recenttracks.track[t.recenttracks.track.length-1].artist["#text"],n=t.recenttracks.track[t.recenttracks.track.length-1].album["#text"],o=t.recenttracks.track[t.recenttracks.track.length-1].date["#text"],r=t.recenttracks.track[t.recenttracks.track.length-1].image[2]["#text"];document.getElementById("firstsongmessage").innerHTML="<U>Details of your first scrobbled song.<U>",document.getElementById("firstsongname").innerHTML="<b>Title : </b>"+e,document.getElementById("firstartistname").innerHTML="<b>Artist : </b>"+a,document.getElementById("firstalbumname").innerHTML="<b>Album : </b>"+n,document.getElementById("firstsongdate").innerHTML="<b>Date : </b>"+o,document.getElementById("firstsongimage").src=r})})}function currentPlaying(){var t=document.getElementById("userName").value;$.getJSON("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&nowplaying=true&page=1&api_key=6e616452b7c762a15256272ddb774c56&user="+t+"&format=json",function(t){var e=t.recenttracks.track[0].name,a=t.recenttracks.track[0].artist["#text"],n=t.recenttracks.track[0].album["#text"];document.getElementById("nowplayingsong").innerHTML='<i class="fas fa-music fa-spin"></i> Now playing : <b>'+e+"</b> by : <b>"+a+"</b> from the Album : <b>"+n+"</b>"})}"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js"),google.charts.load("current",{packages:["corechart"]}),google.charts.load("current",{packages:["gauge"]}),google.charts.load("current",{packages:["gauge"]});