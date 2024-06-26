"use strict";

let trackArt = document.querySelector(".track-art img");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");
let trackLyrics = document.querySelector(".track-lyrics");

let playPauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

let seekSlider = document.querySelector(".seek_slider");
let volumeSlider = document.querySelector(".volume_slider");
let currTime = document.querySelector(".current-time");
let totalDuration = document.querySelector(".total-duration");
let dot = document.querySelector("#dots");
let playList = document.querySelector(".playlist");
let playList2 = document.querySelector(".playlist-2");
// let playListName = document.querySelector(".playlist-name");
let ListBar = document.querySelector(".bar");

let trackIndex = 0;
let isPlaying = false;
let updateTimer;

let track = document.createElement("audio");

let trackList = [
  {
    name: "We're All Alone",
    artist: "Dave",
    image: "image/img1.jpg",
    path: "music/Dave-We're-All-Alone-(TrendyBeatz.com).mp3",
    lyrics: `I remember when I used to be innocent, ain't shit changed
I'm a young black belligerent
Child of an immigrant, lifestyle frivolous
'Round here we keep bad company cah them people pay dividends
What's the point of bein' rich when your family ain't?
It's like flyin' first class on a crashin' plane
Dinners with the same niggas, just higher bills
And all the models Himalayan, they got higher heels
We're all alone in this together, right?
(Quiet on set, places everybody)
You know the seats in the Aston red leather, like
(And action) yeah
I had dreams of doin' architecture
Or sittin' through a Harvard lecture
How the fuck I end up bein' Harvey Specter?
Young black art collector, I could take the pressure
Had the scales, now suits that come made to measure
I drew the thin line between love and hate
Double date, what you drinkin'? Let me cut the games
Backstabbin' man, I'd rather that you cut my face
If I ain't charmin' to women, it's all the fuckin' snakes
You idolize the girl, there's no way I wife her
She only fucks with rich niggas, that's the way I like it
I can't fabricate the truth, it's just the way I write it
You got points on your creative license
Ask Rapz, that's a criminal graduatin' in civil law
Nothin' ain't civil 'bout the Civil War
Grip a four, Gryffindor, this'll have you lyin' on your chest
I got 99 marks, I wasn't tryin' on my test
I'm blessed (why?)
Because the pasta is gamberoni, the watch is a classic Rollie
The pussy is sacred, it's holy, like matrimony
I'm payin' the alimony to numb all the acrimony
The flight is to Santorini, the car is a Lamborghini
The cheese, the cheddar, the mozzarella, the fettuccini the only aim
Look at my ego in the daily life
You see what happens when you got the fuckin' game in a vice
We're all alone
I got a message from a kid on Sunday mornin'
Said he don't know what to do
And that he's thinkin' of killin' himself
Me and him got more in common than he thinks
But I tell him to see a shrink, so I can go on and live with myself
I knew that my life was a film
From when I had to share a bed with my mum and I was pissin' myself
I just want my flowers while I'm here
So I can put them at the front of the grave
That I've been diggin' myself
I grew up in a two-bed flat with seven people livin' with me
You don't know what I did for myself
My mum's the one that gave me opportunities
And put me in positions that I couldn't have pictured myself
We're from Nigeria, Benin City, Sin City
Don't know what it's like? Take a trip for yourself
Poverty's killin' us, the government's killin' us
If they ain't killin' us, then we're killin' ourselves
I would die for the niggas I love
My life's full of plotholes, and I'm fillin' 'em up
I told mummy, "I ain't nothin' like my father"
I'ma show her there's a different definition to love
I tell my fans we're all alone in this together
You can trust me
All the shit you been feelin', you're feelin' with me
We all the took the wrong turns in different streets
We all cry the same tears on different cheeks
I got a message from a kid on Monday mornin'
Said he's grateful I responded and he's feelin' at peace with himself
Me and him got more in common than he thinks
But I tell him it's nothin' big, so I can go on and live with myself
I knew that God would cast me as the leader
Somethin' special when he messaged me and told me that I saved his life
In 23 years, I done so much wrong
But in that moment, I just felt like I had made it right`,
  },
  {
    name: "Verdansk",
    artist: "Dave",
    image: "image/img1.jpg",
    path: "music/Dave-Verdansk-(TrendyBeatz.com).mp3",
    lyrics: `Just had to kick a chick out of the studio, shit's nuts, fam
(Hahahaha)
Nah, like, in Kyle's words, fam, the truth is madder than fiction, fam
It's nuts out here
(Oi, ayy, write that shit down)
Look
I see a ting that I touched, tell me about talkin' stage,
Gotta tell her, "Don't force it"
Beef man, pepper and salt it, me and RJ gotta pull up, no talkin'
Trap, you ain't got a rack to your name
My bro Brick Lane, we don't know 'bout Shoreditch
Rental, I never insured it, M25, gotta whip that calmly
Man try beef with my dargy, Warzone ting how I come third party
My little nigga can't lose that cash, I drop YGs, do it like Kehlani
I don't rock Gucci or Armani, ST from ST, I can't
Squash that beef like fruit and barley
Still got a one black star like Kwame
Three car convoy in Sutton, my mum got matching whips with Yungen
Should've made Shanei hold on suttin'
But it never would've worked 'cause the girl too stubborn
Young G's talking my name in the Ends
Gotta' tell a man, "Please don't risk it"
On a right day, man ah just frisk him
On a wrong day, I'm gettin' man airlifted
I'm in Hollywood Hills with a white Rolls-Royce
In the one brownin' from Compton
The Lambo parked just in front
Man pull up to the bumper and do it like Konshens
She wanna go LV, no problem
Went for the cheapest bag, that's nonsense
I took a hundred bags from Barclays bank
No cap, you can go and ask Ellie
That one mine, Bouncing Betty
The bag 4K, like a HD telly
Best believe that I'm back like Nelly
Chest petite with a back like jelly
I'm seein' man send indirects
If you wanna war man then you better be vocal
My right hand got a semi, that's local
And this Brownin' I can't post on socials
My girl gotta be far from social
I don't wanna see her at Carni'
Four-double-eight in the party, LBC how I nicked the Ferrari
Girls say we're the littiest batch in South London and bro, it's a fact
Airport, we're going for bants, I hopped out the plane, I ain't going Verdansk
What you know about telling a 10/10 to keep her clothes on and moving good?
I ain't on beating or misogyny, it's mahogany, I got bougie wood
Look, Airbnb with the guys, it's a white mans face that I use to book
Chill with the stupid looks, or it's gonna be a kettle that I use to cook
I see a ting that I touched, tell me about talkin' stage
Gotta tell her, "Don't force it"
Beef man, pepper and salt it, me and RJ gotta pull up, no talkin'
Trap, you ain't got a rack to your name
My bro Brick Lane, we don't know 'bout Shoreditch
Rental, I never insured it, M25, gotta whip that calmly
Man try beef with my dargy, Warzone ting how I come third party
My little nigga can't lose that cash, I drop YGs, do it like Kehlani
I don't rock Gucci or Armani, ST from ST, I can't
Squash that beef like fruit and barley
Still got a one black star like-`,
  },
  {
    name: "Three River",
    artist: "Dave",
    image: "image/img1.jpg",
    path: "music/Dave-Three-Rivers-(TrendyBeatz.com).mp3",
    lyrics: `Look
Imagine an island where the party never ends
Where it's less about money and it's more about friends
Where the vibes can't done
It's less about fundin' and and more about fun
Tropical sun, that's life in the '60s comin' from the Caribbean
You know Ian, Delroy, Vivian, Winston
Who got drafted to England
Windrush babies from Kingston to Brixton
To say they're the life of the party, you're wrong
My Jamaicans the entire party, you can't see?
Big Notting Hill carni, you can't see?
And the ride's fiber glass, G, you wan' see?
Imagine a place where you raise your kids
The only place you live says you ain't a Brit
They're deportin' our people and it makes me sick
'Cause they were broken by the country that they came to fix
It's like
They came at the invitation of the British Government
The passports were stamped indefinitely to remain
But for some who were children then, that was a false promise
"Thirty-seven years of paying taxes
And I got a letter saying I was an illegal immigrant
I came to England at the age of ten and I've lived here all my life"
Look, imagine a world that's flawed and full of evil
Where dictators and leaders are persecutin' your people
The bodies of the innocent are pilin' to the steeples
The ironic part is they're preyin' on the feeble
That's life in the 90's, you're Eastern European
And you seein' people dyin' 'cause they're fightin' for their freedom
And show you violence for havin' a voice
You move out with your kids in hope of havin' a choice
Life throws you a spanner, you can't handle the pain
So you gamble and you drink and then you gamble again
You argue with your wife and then you sleep on the couch
You hit your children, then start freezin' 'em out
You try and work things out, but it's never the same
All the women in your household are livin' afraid
When you look into the mirror you're reminded again
That you've become the dictator you were fightin' against
It's like
We're fightin' for our rights, for all our mothers
And then we, we
We are fighting for our homes
We are fighting for our own
Look, imagine a world that's fucked and untrue
Where the many pay a price for the few
And every day the sun rises a little later
That's how it is when your oppressor is your liberator
That's right now livin' in the Middle East
Praise Allah for the peace
Death from a sky littered with stars
You run away with your kids so you can give them a chance
But your asylum has got you in a different war
Because the British wanna know what you're livin' here for
We rely on migration more than ever before
They're key workers, but they couldn't even get in the door
When you're at Heaven's Gates, what you tellin' the Lord?
You wouldn't even let a kid into some steadier shores
That's a life they may never afford
Surely you would wanna give your people chances
That were better than yours?
No?
"In ten years of conflict
More than twelve-thousand children have been killed or injured"
"The children here are just a tiny fraction
Of the estimated six-million
In need of emergency humanitarian assistance
It's thought perhaps, as many of three-million
No longer live in their own homes
And up to two-million children no longer attend school
The opportunities of this generation
Have been changed forever by this conflict"
"I went to silence when I need to who the, who the fuck I was, bro
Like, I won't hear anyone else, shut everyone else out
So I could just hear myself, bro
You know what I'm sayin'?
'Cause we live in this world, yeah
You stand still, the way the tides set up
It will take you away from yourself, you feel me?
So then I was like "Aight, cool"
But, I had to get silent, but it's not like mans goin' against the tide
'Cause goin' against the tide still makes it about them
Still makes it about the poison
That you've internalized in your mind, you feel me?
It's like "Bro, why am I in this water?
Man, this water doesn't even like me, it's not even for me
It's not takin' me where I wanna go, it's not takin' me where I wanna go
It's who the fuck I am, bro, you know I'm sayin'?
It's like the tide will tell me that bein' black is an obstacle
See what I'm sayin'?
I had to, switch rivers, bro
It's like bein' black is an asset
I am who I am because I'm black
And I love everything about it, you feel me?
And that's who the fuck I am"`,
  },
  {
    name: "Twenty To one",
    artist: "Dave",
    image: "image/img1.jpg",
    path: "music/Dave-Twenty-To-One-(TrendyBeatz.com).mp3",
    lyrics: `Look
Twenty-to-one, look at the time, it's twenty-to-one
I'm on the ride with the guys, and we're lookin' for him
If we catch him it's twenty to one
Feds behind me, drivin' a Beemer
Odds on my freedom are twenty-to-one
I make a call, I'm gettin' in touch
Twenty-to-one, twenty-to-one, yeah-yeah
Maze in the street
My nigga nearly got done for an AM
He went on the run, he was stayin' with me
I told my girl that we can't be together
She's cryin', that's somethin' I hated to see
Really I struggled to stay on my feet
I'm lookin' for her and the lady I meet
I got two letters that you're gonna see
If you're someone that want it, the way in the beef
A and the E, playin' with me
We send him up to his maker to meet
Where I stay on the street, there's no love, there's no love
Twenty-to-one, look at the time, it's twenty-to-one
I'm on the ride with the guys, and we're lookin' for him
If we catch him it's twenty to one
Feds behind me, drivin' a Beemer
Odds on my freedom are twenty-to-one
I make a call, I'm gettin' in touch
Twenty-to-one, twenty-to-one, yeah-yeah
Twenty-to-one, look at the time, it's twenty-to-one
I'm on the ride with the guys, and we're lookin' for him
If we catch him it's twenty to one
Feds behind me, drivin' a Beemer
Odds on my freedom are twenty-to-one
I make a call, I'm gettin' in touch
Twenty-to-one, twenty-to-one, yeah-yeah
Man try stick me two months back
Hands on the wheel, so the car don't crash
Run up on me, there's a price to pay
Dawg, I ain't takin' card or cash
I really did it with class, no math's
Mind don't matter, when heart don't match
A good girl like Pokémon
Easy to see, but hard to catch
I'm so real that it's hard to cap
I been low, so it's hard to brag
I been hurt, so it's hard to love
Mum needs it, so it's hard to have
Any ride out, I'm good to go
Bros got my back, it's good to know
If she a nine, that's good to see
If she a ten, she's good to roll
Man clout chase, it's tough to watch
Bad friends is tough to drop
'Nuff man tried buy respect
That don't work, 'cause it's tough to cop
Some times it's tough to think
No liver left, it's tough to drink
Through the noise it's tough to hear
Through the pressure, it's tough to live
Through the wire and through the wall
Through the sea and through the earth
Through the fire and through the war
Through the death and through the birth
Through the pleasure and through the pain
Through the drought and through the rain
Through the dark and through the day
Through the love and through the hate
Twenty-to-one, look at the time, it's twenty-to-one
I'm on the ride with the guys, and we're lookin' for him
If we catch him it's twenty to one
Feds behind me, drivin' a Beemer
Odds on my freedom are twenty-to-one
I make a call, I'm gettin' in touch
Twenty-to-one, twenty-to-one, yeah-yeah
Twenty-to-one, look at the time, it's twenty-to-one
I'm on the ride with the guys, and we're lookin' for him
If we catch him it's twenty to one
Feds behind me, drivin' a Beemer
Odds on my freedom are twenty-to-one
I make a call, I'm gettin' in touch
Twenty-to-one, twenty-to-one, yeah-yeah`,
  },
  {
    name: "Heart Attack",
    artist: "Dave",
    image: "image/img1.jpg",
    path: "music/Dave-Heart-Attack-(TrendyBeatz.com).mp3",
    lyrics: `"Knife crime is at a near record high
With more than forty blade offenses every day in London"
"At a youth club in South London
Not far from where someone was stabbed
Less that twenty-four hours ago
He outlined a direct link between violent crimes
Social exclusion and austerity"
"A study by City Hall found that London
Has seen an increase of 71%
In victims of serious youth violence since 2012
The Mayor says this is linked to an increase in poverty
And the highest rates of violence take place in some of the poorest boroughs"
Look, I bet them boys think I'm panickin'
Check what my young Gs are carrying
His blade same length as a javelin
I don't know about B-ball, what's happenin'
But know that it's fucked if he's travellin' and we see him
I can't lie, I was depressed at phases
I was nineteen when the team nearly left him faceless
Hopin' that we never left no traces
You know when you're so damn tired in your house
But you can't sleep 'cause you got pendin' cases
I used to love temptin' fate, but now it's temptin' faces
For half my career I was part of that
My best friend got a burner, and it's lookin' like an artifact
Put it in your puffer or your Prada hat
Like fuck panic, that's a heart attack
Yeah, it's like, life so fucked in the time that we're in
We're fightin' the world, and we're fightin' within
Somali dad ran away from a war
Now his son's in a war, that's the cycle we're in
I know niggas that didn't do time in a bin
That have never had freedom of mind, are you sick?
'Round here main way to provide for your kin
Is in a flick blade, little push bike and a SIM
In London a place where it's nicer to live
Is only five minutes out from the guys on the strip
Where man make ye' work, heard he's a soldier
I know that nigga hasn't got balls like Grey Worm
As I grow older, change of perspective
I gotta stay loyal to my girl, that's the trait she was blessed with
Restaurants, raves with my bredrins
Life's too short, so we gotta turn up
Man talk on my ting for the 'Gram, it's intrusive
I never really thought 'bout taking a life
'Til I found out my ex-girl's dad is abusive
I felt "How could I be man and not do shit?"
I'm on the way there now, and I don't wanna lose it
But fightin' her battle's only hurtin' the girl
How can I protect her from the world
When I couldn't even protect her from myself?
On my grandmother's grave, shit happens again
I put a knife through a family friend
Most the women that I know had shit happen to them
So innocent 'til guilty, ain't somethin' I have to respect
I think back to my youth and I was so ungrateful
How many of our parents had dreams
They abandoned so they could put food on the table?
Intelligent, worthy and able, that's somebody's parent
You know?
And that affected the way that I see shit
Night club toilet, you peed on the seat
'Cause you don't know how it feels when your mom's gotta clean shit
And her boss treats her like she don't even mean shit
And she gotta wait for the bus in the rain and it's freezin'
And Mrs. said that you would never be shit
And you don't wanna cry about dad, but you need him
I grew up so fucked, but I didn't even deep it
I'm numb to the feelin' of grievin'
And man gettin' birded
African moms on the floor, just screamin'
It's mad cah I try so hard
Death's got to be easy, cah life's so hard
I was twelve wishin' that I was a white man, hard
Cah if I was then they probably wouldn't life mans dargs
I was dead broke, fam, I couldn't swipe mans card
And time might pass, but I still gotta stay with it
It wasn't his beef, but I see him try claimin' it
That's why he caught a bullet with another man's name on it
Now he can't do leg day or put strain on it
Every time you hear me freestyle, I put pain in it
I used to wonder "Does God have favorites?"
Touch me, it's dangerous, I wouldn't play with it
'Cause you can go sleep, and have a different type of wake for it
I miss my dawgs, unstable
You violate Chris? Then rah, turn Chris Benoit
Have him hit from far, nah
Fill 'em up with bricks and glass, nah
My young Gs will grip, then blast
Have you tried in the street? Fuck findin' my feet
I could ride, but it's better when I'm ridin a beat
My emotions are peak, it ain't a sign of defeat or the weak
I would've- you, then cried in my sleep
Dropped just two racks and told them "Buy the machine"
I'm LeBron in Miami, I provide for the heat
God strike me if I'm lyin', I ain't cryin' in this beef
Unless the tears comin' tatted on the side of my cheek
I provide for my peeps, the Lamb' white in the seat
So I'm literally a wolf disguised in a sheep
You have five figure dreams, I have five figure sleep
Five hours more than enough time that I need
Man want a fair fight, but I ain't on it when I see him
Fuck honor, this revolver is onomatopoeic
Let it "Stut-tut-tut-tut-tut-tut-ter" when you see him
Free Scalez, Free C and free my niggas 'til I see 'em
I wouldn't wanna be him
My old Gs roamin', I don't need a coliseum
You see it?
So I'm playin' it good, let hood politics stay in the hood
Fuck the internet, you see this new generation
The Insta beefin' and I ain't into speakin'
When I duck down
I had him runnin' in a lift like he missed a meetin'
There's no good reason to risk your freedom
The yutes dem snitch and them bitches sneakin'
She don't wanna talk 'bout friendships
She just wanna deal with the pipe like I'm fixin' leakin'
And sleep with a legend like Chrissy Teigen
Where I'm from the word "Life" has a different meanin'
Man smile in your face, but them niggas schemin'
Try involve me in a flakey dealin'
Sistine Chapel, I'ma paint the ceilin'
I been violated and I hate the feelin'
That's why nowadays man hates the preachin'
We smile in the visit, cah we ain't defeated
The Supreme Court's where my mates appealin'
I can't breed that girl, that's torture
South London, it's just slags on the corner
And influencers tryna bag them a baller
She a gold-digger, I can tell from her aura
Her socials say princess, she a pauper
When it's time for it, need more for my daughter
Call me a talker, but man are gettin' lined like lambs in the slaughter
It's life-threatening and I can tell from the borer
Cut through a nigga like a knife though flora
Feds got the guys on a case and they stalk us
It's a conspiracy like tinfoil hats and a new world order
Touch me, you better have a life insurer
Blood thirsty, I got sharks in the water
And trust me, I know a killer whale, no orca
Have you ever seen a nightmare brought to life?
Where I'm from, you get cheffed on a normal night
Men talk on my name, but it's porkie pies
I really put it in a prick like a porcupine
Little bro wanna save for a .45
Go board a flight, there's more to life
Yutes on the M6 all the time
We don't need TFL for a northern line
All the best politicians been taught to lie
Where do they buy cocaine when they're snorting white?
Are their dealers safe or on the borderline?
It's ironic, cah we don't where to draw the line
Man see Blue Story, they're mortified
Man see Scarface and it's glorified
'Cause when you're black, everything gets scrutinized
That's why they call it "Urban", it gets euphemized
South London, man are gettin' euthanized
I see a yutes demise, I wasn't too surprised
He got soaked but his right hand scuba dived
Don't die by a sword that you used to shine
You can drown for your king, you don't know about Ophelia
Cah we got iron, I don't know about anaemia
I took the hard road, we don't know 'bout the easier
One bag of whores and drug paraphernalia
When ends got sticky, had a flicky with Emelia, I mean Olivia
This ain't Libya, this ain't Syria
You act sillier, we let it seep in your skin like Nivea
Who wants to be a millionaire? I won it
Never done a gameshow or trivia
I done Wandsworth, Erlestoke visitor
I done Springhill, Grendon, Swinfen, Whitemoor, Swaleside, Brixton visitor
I done M-way trips, done shit that I wished I never did
Becah I could have been a prisoner
Is this the shit that appeals to the listeners?
Road ain't no amazing life
The ends full of snakes and jails, just a waste of time
I tell my young Gs "Take your time"
Fuck Jazz, you can really see a major nine
Yo, I'm so ashamed of how I used to get figures
Man sell you a dream like the road tings lit
And then they leave out the parts where you're burying your niggas
Or in jail, wonderin' who's puttin' dick inside your Mrs
I'm so fuckin' determined
I was in intensive care when I was born, mummy fell down the stairs
Whether I was gonna live or not was somethin' uncertain
I used the word "Fell", with the commas inverted
You see, growin' up I had it far from perfect
But nobody did, so I'm a normal person
I gotta be grateful, we all have demons and all see angels
Or maybe it's me
A black yutes more than a face on a screen
A number on a laptop or name on a sheet
We got stories to tell and got places to be
From my heart, that's the makin' of me
I was selling look, I was selling tomatoes
I sat on my two hands
I struggled 'cause I didn't want to suffer again
I just wanted, it just make me so upset
I went to Hannover, they sent me back
I tried so much, we have no say it here
I was in detention camps for months at the end, I didn't give up
I was not even twenty when I left Africa
I was determined to survive
I was determined to succeed
I didn't have anybody, nobody was ready to help me
Even when you were born
You were six weeks old, this one is not even Africa, it's this nation
I was on the streets for three years
I have three babies in my hand
Nobody let me in, nobody in this nation
I couldn't pay my rent, deported gangsters carried
I didn't give up, I carried my babies everywhere
And now this is happening
Pay me back for all those pain that I go through
Everyday, I'm in pain, I'm in pain
You see what he's doing to me
You want to kill me, you want to kill me`,
  },
  {
    name: "Surivor's Guilt",
    artist: "Dave",
    image: "image/img1.jpg",
    path: "music/Dave-Survivor's-Guilt-(TrendyBeatz.com).mp3",
    lyrics: `Look
Let me show you behind the scene
Behind the glitz and the glamour and all the lights you see
Behind the rumors on the life I lead
Let me talk to the people like it's the mic in me
The truth is I got really bad anxiety
I'm on the motorway, cryin' in the driver's seat
I don't even know where I'm goin'
I got love, but I don't know how to show it, is this life?
When you feel like givin' up, know you're close
I been sayin' the least and knowin' the most
I've had ups and downs, but the highest of the highs
Never last for as long as the lowest of lows
Survivor's guilt
I feel the worst at my happiest
'Cause I miss all my niggas that couldn't be in this life I built
But that's the type of shit that only I can feel
Gettin' me in a mood
My ex's got ivory skin
Which is funny 'cause it's really the elephant in the room
Is that enough reason to bury me in a tomb?
I fell in love with an Albanian, I know it's mad
We're not together, 'cause her family would hold us back
I saw the red flags, I wouldn't want my child to grow in that
Rum and Red Bull, it's a culture clash (fuckin' hell)
I don't wanna let life tear us apart
I see the Internet gossip and it wears on my heart
I fuck with her, she was there from the start
I'm seein' them laugh at me, cah I'm vulnerable
Ain't that the shit that rappers' supposed to do
I'd rather rap about arguin' with my girl than fuckin' your girl
But I don't mind, because the both are true
Ignorin' my messages, these times I know she on her
Worst part is I wouldn't even do the same
Hate it or love it, you gotta charge it to the game
(Gotta charge it to the)
Heavy is the head, but don't play with my heart
I feel like a footballer when I'm makin' my art
Through ball, how I'm managin' the weight of the past
I felt so much pain that I got favorite scars
And my house got wings like my favorite cars
And the Millie Rock my favorite dance
You can call it what you want it, but I got it off of takin' a chance
I didn't take an advance
Fame comes with a price, you can't pay in advance
For six long years, I've been playin' my part
Like a freak in a circus when they're makin' them dance
I got nights where it's light and I got days where it's dark
And the waters that I swim in, it ain't safe for the sharks
He a gangster, but the stress gonna take him apart
I'm with the niggas that I claimed from the start
I see you niggas changin', they didn't make it
It's a shame it takes fallin' to your death
For a person to appreciate fully the gravity of the situation
But that's just irony at its finest
Black women, I just wanna say I'm sorry
I done a lot of dumb shit, I won't lie to you
I wanna be a voice for you, be a light for you
I know I haven't done enough, I wanna try for you
Wanna be on the frontline for you
Campaign for you, make change for you
I just wanna help in any way
Bein' genuine, I think about it every day
Tour life, travellin' every day
Nerves paralyzing when you get to stage
You feel love for an hour, and then it gets to fade
Imagine what that does to your mental state
Imagine bein' a millionaire at a tender age
You don't even know whether to spend or save
My mum had to grow up fast, she expects the same
I was twenty with a mortgage and rent to pay
So what's happenin'? I got gorillas all around me, allow me
Don't get grabbed in a party or lackin'
You'll die for a wine like Joffrey Baratheon
Pattern 'em
The government ain't gonna help with all the issues that I'm tacklin'
The way you talk about politics is bafflin'
I wouldn't even trust my own shadow in a cabinet
Cabbin' it can't drive no more
I been lookin' for the answers, sure that I'll find 'em
I don't judge an accent but the story behind it
We all know loss, but there's glory behind it
I'ma make a film for my mum
And tell her tale to the world, this album is just the soundtrack
Look at her story in a year in her life
And tell me if it doesn't bring a fuckin' tear to your eyes
In this together
I thought wishin' wouldn't hurt, but take it over
I'm done holdin' at your lies
So knowin' that it weren't for any one thing
You know you love fast and I know you wanna stay
In the clouds, my heads sippin' up
Let the other try, said I don't wanna try
I thought wishin' wouldn't hurt, but take it over
I'm done holdin' at your lies
So knowin' that it weren't for any one thing
"What I've realized
What I realized 'bout who I am
Is that, you're kinda taught
You're taught to die for what you stand for, you feel me?
But I realize I'm here to live for what I stand for
'Cause I wanna see it, bro, I wanna enjoy it, bro
I wanna see what I feel, like I am, you know what I'm sayin'?
Out there, while I'm here, and that's that, bro
But, yeah, link up soon my guy, you know how it is
Hustle o'clock bruv
Shine on 'em"`,
  },
  {
    name: "In The Fire",
    artist: "Dave",
    image: "image/img1.jpg",
    path: "music/Dave-In-The-Fire-(TrendyBeatz.com).mp3",
    lyrics: `I know I got religion
I belong to the laws and crew
You see we fought when we get happy
That's the way we Christian do
Oh
(Have you been tried-)
Have you been tried in that fire?
I heard bullets sing higher than Mariah in choir
Spent a lot of time trappin', now I'm tryna retire
But this shit runs in my blood, and I'm the guy they require
And these guns bring nothin' but prison and death, still
All my niggas just admire the fire
Bro squeeze and he miss, but we admire a trier
Finesse king, you can never lie to a liar
But Fred got the fire, I fire for days
I gotta write them in my notes, they'll be ignitin' the page
Grindin' on cold nights, puttin' light to the flame
Now there's no flame that can melt the ice in my chain, yeah
I really put the ice in rice for the 'caine
Me and Santan, you won't see nothin' like this again
That's my young boys again, on the glide with the flame
I just really hope your block came with fire-escapes
Before my entrance, I took the fire exit
Tried and tested, about twenty times arrested
Two times guilty, no comment, I guess they guessed it
Couple time bail, no forensics
This a Deezy pendant, I don't need a necklace
We stay protected and connected
It's the energies I'm blessed with
And now they watchin' like Netflix, had me doin' next shit
Tryna get rich, but what's rich?
Took more losses than Boris
I sold more boxes than the post-office
Twenty-one in jail, it turned me so solid
Why you think my vision sick, I changed the game in my brain
And sold robotics
If you fell in my fire, you probably roast on it
Heat up the stove and put hope on it
Cah they don't care 'bout our lives, I put my soul on it
I'm done tryna be somebody to some nobodies
I'm bein' so honest, and they don't know porridge
If I get burnin' while I'm watchin', higher learnin'
Guns bustin', tyres turnin', that's a Russian and a German
That's your phone ringin', you can hear the beep
You won't be saved by the bell when you hear the screech
And it's so deep, open, ocean
This man escapin' some shells they can barely see
Me and bro raisin' hell, we gon' share the heat
Now put us in the same cell, we gon' share the sleep
Am I my brothers keeper (it's deeper)
I'm my brothers leader (speaker)
I'm the eldest
The one who had to make a name so the bells ring
So nobody would trouble my siblings in this whirlwind
My older cousin wasn't known for nothin'
Never had no one I could call, but I was old in somethin'
I'm diggin' deep with this tool like I'm known for plumbin'
Somethin' in your chest like it's Robitussin
Word to arsonist, I burn all this
I stood in front of all three dragons and heard "Dracarys"
And now we're jumpin' out G-Wagons and murkin' parties
Man are comin' out with these bangers and dirty dancin'
Nobody puts baby in a corner
I uplift my girl, like I'm Swayze in the water
And if it's already written, maybe I'm the author
So accustomed to the fire, I get shivers when I'm naked in the sauna
How, many times have they mistaken me for Scorcher?
I'm lookin' in the mirror, sayin' "Justin, just cool, huh"
Send Ghetts downstairs and tell them "Just bring me water"
And tell Ghetts I put somethin' in the formula
I'm focused, I don't need to burn the kush
This is Moses speakin' to the burnin' bush
I stood in front of the fire and learned to cook
Finished my verse and never heard a hook
Riskiest numbers, this jungle, stick through your youngers
He's hungry, picked off the fungus
Kept humble, slipped him a hundred
Yeah, lived in a dungeon
Those AirMax, which nigga stung them?
Can't walk in my shoes, you could be riskin' a bunion
The government's twisted
I cover this shift to cover this Christmas
Forget them old friends, I'm done with those bitches
They color coded my brothers and sisters
Run the rhythm, you're a brother, but you run the rhythm
Try accusin' me of colorism
Blinded 'cause you look at me with tunnel vision
I was fallin', but I've gone and risen
Is this nigga trusty or Sideshow Bob when he's creepin' on Krusty?
Streets keep me tusslin', people disgust me
Racist disease, that shit that disgust me
Don't touch me on the streets with the sweeper
'Cause the streets pretty dusty
And I've always got love for genuine people that bust me
Santan and the gang advisor, I'ma check him out, I'm a analyzer
She was callin' me an antagonizer
Let me sanitize, where's the sanitizer? (Jheeze)
Just flutter by, he said "Giggs can you handle this?"
He said "Float like a butterfly"
I bring truth, but they love a lie
Plans, I'm the man you should run 'em by
In the fire, been tried
Affected the way I been wired inside
You can hide or glide
I could've been deported
That's the definition of a "Fight or flight"
You can type all you like
I know about homeless
Immigration, they took me from my mums arms
Fuck a gun charge, two swords, I'm a ronin
Błaszczykowski, I'm tryna score with the Polish
Pain in my eyes, plans of me stayin' in the guide
With a vision of this changin' my life
Crimes on the rise, hates on the rise
Feel like everythin' but my mum's pay's on the rise
"Did you come through?" that's the question
Affording a burner was never mans problem
Adoption, we couldn't find homes for the weapons
By the station, we got polls, no election
In the fire, been tested
Before I had money, it was time I invested
Nothin' change, still time I invest in
Watch-game delicate, Tutankhamun, there's money in skeletons
All I gotta do is point, they're gonna sever his head
And tell- that we're better as friends
Nights that I can't remember with some people I could never forget
Caza Cruz, you could bet a Nusr-et
Don't make me call a young gunner in the back of a PED
Slappin' a lead, civilians grabbin' your friends
There's chaos on the main road
They called choppers and PEDs
All because of some shit that you said
I got killers with me (killers with me)
And they love me, they make a mans heart stop
The shit you find horrifyin' gets laughed off
I'm like Meekz, bro, I won't stop, can't stop
Yeah, it's kinda different when the fire's what you start from
Have you been tried in the fire? (Hot)
Have you been tried in the fire? (Yeah)
Have you been tried in the fire? (Oh yeah)
Tell me (did you come to)
Did you come to
Have you been
"Do your research to travel
Don't see, don't really see the corners of the world
That are alien to you, really do interest you
And you know, 'cause in due process then you'll meet new people
And then those people will tell you new stories
Then you become a voice for the voiceless
I mean, you should ask Daniel, really, truly, where he goes to find himself
'Cause I don't know anything, I'm just speculatin'
More importantly for you and your family
You then get to ask the questions and answer the questions
About where you were made
Like "Where you come from, where you're goin, London, Lagos, LA"
The journey is the film"`,
  },
  {
    name: "Clash",
    artist: "Dave & Stormzy",
    image: "image/img1.jpg",
    path: "music/Dave-Ft-Stormzy-Clash-(TrendyBeatz.com).mp3",
    lyrics: `Jordan 4s or Jordan 1s, Rolexes, got more than one
My AP cost thirty-one, millimeters, forty-one
Stick him up with a stick-stick, he drew the shorter one
You can't short me one, in the club with the shortest one
Lighty, the shortest one, on my mind, Jorja one
Crocodile bag, I bought her one, vegan ting, I slaughter one
Freaks, I got more than one, fuck, daddy and daughter one (One)
Tory puttin' in labor, this that Jeremy Corbin one
Awkward one, race me there, wait, hare, tortoise one
I need a ting, thirty plus, Blackberry and Walkman 1s
Look, I left my phone and my babies, silent mode
My guys on ridin' mode, zombies, survival mode
He's got a new vest? Man, pop that shield, no microphone
I'll ride for bro, he's next to I like typin' O
The score, 5 an 0, 6-to-1
For the kicks I love, twelve-fifty-four like 6-to-1
Babe, can't look at my mentions, that's Area 51
I'm so close to my pension, my left wrist is sixty-one
My left wrist retired, mm
My apprentice tryna give Alan Sugar, there's no way I can-
Jordan 4s or Jordan 1s, Rolexes, got more than one
My AP cost thirty-one, millimeters, forty-one
Stick him up with a stick-stick, he drew the shorter one
You can't short me one, in the club with the shortest one
Lighty, the shortest one, on my mind, Jorja one
Crocodile bag, I bought her one, vegan ting, I slaughter one
Freaks, I got more than one, fuck, daddy and daughter one (One)
Tory puttin' in labor, this that Jeremy Corbin one
Overrated one, most hated one
Slid 'round after his birthday, gave him a happy belated one
Burned that bridge, cremated one, boom-boom, bailiff one
Got away with murder, this that Viola Davis one
They stop and stare, watch rare, clear, stainless one
Debate this one, hatin' niggas gonna hate this one, ah
I live life on the high
Might fly to Dubai with the guys 'cause the weather's been shit
I can wear a different kettle every day of the month from a different-
Rollies, got twenty-one, I been lit since twenty-one
Girl, I need that gently one, that Savage and Fenty one, hmm
Dave's got the new Aston Martin plug, could you send me one?
He said "No need to be rentin' one"
Big Flex is inventin' one, cold, cold
My bros don't chat, we just wear all-black on a blend in one
Man are talkin' war, don't know 'bout war 'til you end in one
The machine got sweets, not the vending one
Needed a hit, could have penned him one, cah you're pendin' one
Aight, she wanna go to the cinema, so we just walk downstairs (walk downstairs)
The mortgage cleared, we've overtaken all our peers (all our peers)
After all these years, disrespect is all I hear
I'm Pep, I ball with flair
Off the set, they storm like, off the set, they storm like Piers
That's what I call mornin' tears
Them man are talkin' bare, but it's cool 'cause-
I got my ting so I'm more than good, anytime that I walk my hood
I got the Jordan 4s and 6s, all I need now is Jordyn Woods
Don't get caught for pus, don't die for nyash
We slide and crash, sixteen, don't write and clash
Sixteen, don't battlerap
She got the WAP and a wap, what are you thinkin'?
Mans on simpin', I'll buy her a car like a pair of-
Jordan 4s or Jordan 1s, Rolexes, got more than one
My AP cost thirty-one, millimeters, forty-one
Stick him up with a stick-stick, he drew the shorter one
You can't short me one, in the club with the shortest one
Lighty, the shortest one, on my mind, Jorja one
Crocodile bag, I bought her one, vegan ting, I slaughter one
Freaks, I got more than one, fuck, daddy and daughter one (One)
Tory puttin' in labor, this that Jeremy Corbin one`,
  },
  {
    name: "Both Sides Of A Smile",
    artist: "Dave & James Blake",
    image: "image/img1.jpg",
    path: "music/Dave-Ft-James-Blake-Both-Sides-Of-A-Smile-(TrendyBeatz.com).mp3",
    lyrics: `"And then, the finer details, who's your Juliet?
What's the dynamic in the situation between the two leads?
You know, I guess we're all just
We're all just looking for a happy ending somewhere"
Babe, it's okay (it's okay)
I don't care if no one knows my name
Pain, it's all the same (all the same)
Even if you think it's all in vain
'Cause now you're turning her into a rose
Into a rose, into a rose, oh-oh
Into a rose, into a rose, into a rose
Oh, could we let it slide?
Mm-hmm, mm-hmm, mm-hmm, mm-hmm
Looking back it ain't last
The future's just a lie
We'll be there in a night
Mm-hmm, mm-hmm, mm-hmm, mm-hmm
We're both sides of a smile
Yeah
You keep the bread all to yourself and you get mold from it
You give a good girl a rose and you get gold from it
Have a child with a rat and you'll get a mouse from it
You give a woman a brick and you'll get a house from it
The first time splittin' up always the hardest thing
Love's a film and I'm just flickin' through the parts I'm in
I told her, "I don't wanna argue in this car I'm in"
And that's when she hit me with a
"Well, I don't get why you would tell me you want me to be your wifey
When you wanna be Romeo, have me here for the rodeo
I don't believe you when you gas me up and hype me
'Cause you're lustin'
And these women you're fuckin' look nothin' like me, David
You find asylum in the countries that you fly me
And carry all of your guilt in designers bags that you buy me, David
I ain't askin' you to be someone you wasn't
I just wanna fuck with the person I fell in love with, but uh
Petite waist, sweet face, I'll find another man"
You must have forgotten who the fuck I am
There's plenty niggas waitin' for chances
Ask me if I'm taken, I say, "Taken for granted"
But you know this already
'Cause we've spoken already
Want me to wait 'cause you ain't ready
Now we're both in our twenties
I'd date a man before I wait for a man
This ends here
'Cause I'll be damned if I give a fucking loser my best years
Got my own car, own money and my own body
If I show body, this for me, this ain't for nobody
I'ma change the lock on the door, think I'm a homebody?
You won't have a house to fucking live in
'Cause you taught me you don't listen
There's a difference in mistakes and in decisions, David
The first time was the worst time
It didn't hurt like the second or the third time
She put her life on pause
'Cause now you're turning her into a rose
Into a rose, into a rose, oh-oh
Into a rose, into a rose, into a rose
Oh, could we let it slide?
Mm-hmm, mm-hmm, mm-hmm, mm-hmm
Looking back at our lives
The future's just a lie
We'll be there in a night
Mm-hmm, mm-hmm, mm-hmm, mm-hmm
On both sides of a smile
Mm-hmm-hmm, mm, mm, mm, mm
Mm-hmm-hmm, mm, mm, mm, mm, mm
Mm-hmm-hmm, mm, mm, mm, mm, mm, mm-mm
Yeah
I just came to the area I grew up in
And they can't even see the car but from the engine
They know it's me
From no fix to bow to the coast of Greece
I'm most at home in the places I ain't supposed to be
I grew up seeing mummy count pennies
Tryna buy a train ticket but forget sayin' woe is me
Now I'm in LA with the open sea
They both feel like things I wasn't supposed to see
Used to be my post, we was close
Now we argue to the rhythm of a broken beat
To the beat of a broken heart
Napoleon Bonaparte meets Joan of Arc
(Shh) we're both fightin' the sea, this is Noah's ark
We're lovers with a broken past, grow apart
Most things that last have the slowest start
A lotta pain and a lotta tears
The only reason that I lie is 'cause of what I fear
My girl knows that I'm a fan of charity
But there's some information
I ain't never gonna volunteer
I wish that I could pay for my sins with a lump sum
Restore her belief in me with a trust fund
The money can't buy nothing when the love's done
I used to cheat with Americans for a living
I felt nervous every time
I got a call from a plus one
It takes years to build when you love one
Two and half minutes and it's undone
Bought my girl a Birkin
And she told me that these bitches can't chat to her
I'm tellin' her they never could
You know you love her when you're doin' shit you never would
Come up off the drugs and bank scams
How the fuck you think I got the name Santan?
Run up on me and get a skin tan
Only when you're gone they feel your impact
Nineteen, I had dreams of a wedding ring
So focused on running our race
You can ask James Blake, I ain't see the color in anything
And then the world got darker than its ever been
Real estate, I buss a smile
International, that's how I'm comin' now
Mortgage on the yard like twenty-two hundred
But the rent's got it covered by a country mile
Feels like my luck's been runnin' out
It feels like my luck's been runnin' out
Feels like my luck's been runnin' out
It feels like my luck's been runnin' out
Mm-hmm-hmm, mm, mm, mm, mm, mm, mm-mm
Mm-hmm-hmm, mm, mm, mm, mm, mm, mm-mm
Mm-hmm-hmm, mm, mm, mm, mm, mm, mm-mm
It feels like my luck's been runnin' out
Oh, oh, oh
It feels like my luck's been runnin' out
Oh, oh, oh
It feels like my luck's been runnin' out
Oh, oh, oh
(It feels like my luck's been)
Oh, oh, oh
It feels like my luck's been runnin' out
Oh, oh, oh
Oh, oh, oh
Mm-hmm-hmm, mm, mm, mm, mm, mm, mm-mm
Mm-hmm-hmm, mm, mm, mm, mm, mm, mm-mm`,
  },
  {
    name: "System",
    artist: "Dave & Wizkid",
    image: "image/img1.jpg",
    path: "music/Dave-ft-Wizkid-System-(TrendyBeatz.com).mp3",
    lyrics: `Whine baby, show me that your whine am well
Yeah, show me that your whine am well, yeah, yeah, yeah
I never knew about you so well
But money make her kiss and tell, yeah
Only pray for love, God and peace and love
My enemies only pray for war
Uh, If you wanna get rich, there's a million ways
Sweet chick, familiar face
Wine, I got a brilliant taste
Whine, she got a brilliant waist
Money and fame
My people know struggle and pain
My people nah gon' suffer in vain
Don't call me by my government name
My girl, she badder than Rambo, a rider
Wan-Bissaka, the Lambo a spider
Michael Phelps, the AP a diver
Martial, my right hand, a striker
Tried to call, she blocked me, I Skype her
Damn it, I think that she got me a Lyca
Yardie lover, yard pussy me ah die for
Rack city, man, I'm comin' like, look
Whine baby, show me that your whine am well
Yeah, show me that your whine am well, yeah, yeah, yeah
I never knew about you so well
But money make her kiss and tell, yeah
Only pray for love, God and peace and love
My enemies only pray for war
So I dey give them? (yeah)
So I dey give them?
One more time when she feelin' it (yeah)
One more time when she givin' it
One more time when she's livin' lit
Henny for system, yeah
One more time when she feelin' it
One more time and she givin' it
One more time and we livin' it
I just caught one whine, now I'm feelin' like an MVP
I know that they're talkin' my name
But them man are old news like NBC
Tell the DJ dash 'way his MP3
Who's that girl with a leng DP?
Wait, what am I saved under
When I change numbers, I don't send BC's
Listen, it's a big flex if you're talkin' to me
ST, God bless my haters
She wanna do SMS, not save my soul
That's spend my savings
Waiter, can you bring more champagne in?
For the times I was livin' in stress
I wanna own all my, shh
But the system's built so we're livin' in debt
Man 'fi rise up 'cause we livin' in, yeah
Whine baby, show me that your whine am well
Yeah, show me that your whine am well, yeah, yeah, yeah
I never knew about you so well
But money make her kiss and tell, yeah
Only pray for love, God and peace and love
My enemies only pray for war
So I dey give them? (yeah)
So I dey give them?
One more time when she feelin' it (yeah)
One more time when she givin' it
One more time when she's livin' lit, ah
Henny for system, yeah
One more time when she's feelin' it
One more time when she givin' me
One more time and we livin' it, ah
One more time and we livin' it, ah`,
  },
  {
    name: "Lazarus",
    artist: "Dave & Boj",
    image: "image/img1.jpg",
    path: "music/Dave-ft-BOJ-Lazarus-(TrendyBeatz.com).mp3",
    lyrics: `Anyone weapon formed against me can't prosper
Imposter, I'ma fill 'em with lead
My best friend like Tommy Lee Sparta
I'm in the Gaza just tryna get bread
The Chinese wanna take away Naija
Most of my people, they struggle in stress
Political corruption
I rise up until there ain't a government left
Cost to be the boss
Even though I'm financed, the man couldn't afford it
Fifteen, mummy found my shank
And I nearly got shipped, I was gonna do boardin'
I had a one lightie from Pecks
And a ten-ten Europa babe from Shoreditch
If you got a body like Uche, text me and I'ma pay your father's mortgage
Listen, I'ma pay your uncle's rent
And if rap don't pay then we would have been getting it off of crack cocaine
I don't know how man could chat so brave
Little nigga, you ain't bad, no way
I think me, women, and Italian shoes
Work well together like Maggi and cube
Pretty in pink, but she badder in blue
If you were me, you'd be arrogant too

[Boj:]
Óya tété dé
Jèkin dé, gbówó dé
Jèkó kpé, óda bi kpé kó kpé kpé kpé
Óda bi kpé kó kpé kpé kpé
Óya tété dé
Jèkin dé, gbówó dé
Jèkó kpé, óda bi kpé kó kpé kpé kpé
Óda bi kpé ó ya wéré

[Dave:]
No enemy can curse me
Bad energy I give back to the sender
My life lessons must enter Lagos
I gotta go back in December
Club full of girls, I'm tipsy
A brownie one wanna whine on me and kiss me
How she make it clap is a mystery
I see her pastor, I said, "Jesu Kristi"
I see a man say Christ of Nazareth
I yell, "Ay, your pum pum so fabulous"
First round, I thought I was dead but
He brought man back to life like Lazarus
The way she back up the somethin' and just—ooh, park it
You don't need mirrors and cameras
I've been getting money in from long time
The first rack that he made was lamina

Cut
I need my music right now, come on, man
Where is the fucking music? (I, I)

[Boj:]
Óya tété dé
Jèkin dé, gbówó dé
Jèkó kpé, óda bi kpé kó kpé kpé kpé
Óda bi kpé kó kpé kpé kpé
Óya tété dé
Jèkin dé, gbówó dé
Jèkó kpé, óda bi kpé kó kpé kpé kpé
Óda bi kpé ó ya wéré
Óya tété dé
Jèkin dé, gbówó dé
Jèkó kpé, óda bi kpé kó kpé kpé kpé
Óda bi kpé kó kpé kpé kpé
Óya tété dé
Jèkin dé, gbówó dé
Jèkó kpé, óda bi kpé kó kpé kpé kpé
Óda bi kpé ó ya wéré`,
  },
  {
    name: "Law Of Attraction",
    artist: "Dave & Snoh Aalegra",
    image: "image/img1.jpg",
    path: "music/Dave-Ft-Snoh-Aalegra-Law-Of-Attraction-(TrendyBeatz.com).mp3",
    lyrics: `Yeah
Yeah
Mmm
JAE5
You keep talkin', I've been silent
Now, what's the point to watch when you can't read between?
The lines you crossed, I'm sick of fightin', yeah
You keep trying, that don't mean a thing
And now I don't mind sayin' how I feel or how I think about you
And I don't mind sayin' how I feel, I'm good without you
But you could have been all that I want, that I need (could have been)
All (yeah-yeah) that I want (yeah-yeah), that I need (could have been)
We could have been, we could have been
We could have been (look)
I don't want no distractions
I'ma speak with my actions, check this
I put your name on a necklace
That's a chain reaction
Don't judge me for adaptin'
She studyin' law of attraction
Doin' her own taxes
Too complex for a caption
It's better I hurt you than somebody else, fuck with me
I put you in a truck with me, you're stuck with me
Can't take back all the shit that you've done with me
You're gonna break a bone, you fall out of love with me (man)
I need a bulletproof vest
For all of the shots that you're drinking for me
Answer the phone, make it simple for me
Girl, I know that you're thinkin' of me, D
And now I don't mind sayin' how I feel or how I think about you
And I don't mind sayin' how I feel, I'm good without you
But you could have been all that I want, that I need (could have been)
All (yeah-yeah) that I want (yeah-yeah) that I need (could have been)
We could have been, we could have been
We could have been
Yeah, when I met you, I found affinity
Swore I wouldn't stop 'til you found stability
Santan, banking's our ability
But I'm still learning accountability
I'd rather lie with you than lie to you
, Got a sex drive, I drive to you
Wanna go central? Cool
Don't know what to pick, I'll decide for you
And put a Louis bag on the side for you, rich love
She a wicked woman, I need witch love
Dress up, go out, take pics, love
Don't wanna talk over a text
I could see how you're over your ex
Could that be me? Pray I never find out
"Sorry" don't slap the same second time 'round
I ain't perfect, but I'll say that I'm real
If it's real, say how you feel
We could have been
We could have been
We could have been`,
  },
];

function loadTrack(index) {
  clearInterval(updateTimer);
  resetValues();

  track.src = trackList[index].path;
  track.load();

  trackArt.src = trackList[index].image;
  trackName.textContent = trackList[index].name;
  trackArtist.textContent = trackList[index].artist;
  trackLyrics.textContent = trackList[index].lyrics;

  updateTimer = setInterval(seekUpdate, 1000);

  track.addEventListener("ended", nextTrack);
  // track.addEventListener("timeupdate", scrollLyrics);
}

function resetValues() {
  currTime.textContent = "00:00";
  totalDuration.textContent = "00:00";
  // trackLyrics.textContent = "";
  seekSlider.value = 0;
}

function playPauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  track.play();
  isPlaying = true;
  playPauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  track.pause();
  isPlaying = false;
  playPauseBtn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack(e) {
  if (trackIndex < trackList.length - 1) {
    trackIndex += 1;
  } else {
    trackIndex = 0;
  }
  loadTrack(trackIndex);
  playTrack();
}

function prevTrack() {
  if (trackIndex > 0) {
    trackIndex -= 1;
  } else {
    trackIndex = trackList.length - 1;
  }
  loadTrack(trackIndex);
  playTrack();
}

function seekTo() {
  let seekTo = track.duration * (seekSlider.value / 100);
  track.currentTime = seekTo;
  // scrollLyrics();
}

function scrollLyrics() {
  let scrollHeight = trackLyrics.scrollHeight - trackLyrics.clientHeight;
  let scrollPosition = (track.currentTime / track.duration) * scrollHeight;
  trackLyrics.scrollTop = scrollPosition;
}

function setVolume() {
  track.volume = volumeSlider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(track.duration)) {
    seekPosition = track.currentTime * (100 / track.duration);
    seekSlider.value = seekPosition;

    let currentMinutes = Math.floor(track.currentTime / 60);
    let currentSeconds = Math.floor(track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(track.duration / 60);
    let durationSeconds = Math.floor(track.duration - durationMinutes * 60);

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    currTime.textContent = currentMinutes + ":" + currentSeconds;
    totalDuration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

dot.addEventListener("click", () => {
  trackLyrics.classList.toggle("show");
  playList.classList.remove("list_active");
});

function setToLocalStorage() {
  localStorage.setItem("item", JSON.stringify(trackList));
}
setToLocalStorage();

function getFromlocalStorage() {
  const data = localStorage.getItem("item");
  return JSON.parse(data);
}

const localData = getFromlocalStorage();

localData.forEach((item, index) => {
  let playlist2 = document.createElement("div");
  let playlistImg = document.createElement("div");
  let playlistName = document.createElement("div");
  let name = document.createElement("h4");
  let artist = document.createElement("p");
  let image = document.createElement("img");

  playlist2.className = "playlist-2";
  playlistImg.className = "playlist-img";
  image.className = "playlist-img img";
  playlistName.className = "playlist-name";
  name.className = "playlist-name h4";
  artist.className = "playlist-name p";

  image.src = localData[index].image;
  name.textContent = localData[index].name;
  artist.textContent = localData[index].artist;

  playList.appendChild(playlist2);
  playlist2.appendChild(playlistImg);
  playlist2.appendChild(playlistName);
  playlistImg.appendChild(image);
  playlistName.appendChild(name);
  playlistName.appendChild(artist);

  playlist2.addEventListener("click", () => {
    loadTrack(index);
    playTrack();
  });
});

ListBar.addEventListener("click", (e) => {
  if (e.target) {
    playList.classList.toggle("list_active");
    trackLyrics.classList.remove("show");
  }
});

playPauseBtn.addEventListener("click", playPauseTrack);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);
seekSlider.addEventListener("input", seekTo);
volumeSlider.addEventListener("input", setVolume);

loadTrack(trackIndex);
