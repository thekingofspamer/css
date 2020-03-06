	var followerFolowers;
	var followerName;
	
	function verify(){
		$.ajax({
			method: 'POST',
			url: 'actions/url.php',
			dataType: 'JSON',
			data: {type: 1},
			success: function(res){
				if(res.type == 1){
					CPABuildLock()
				}else if(res.type == 2){
					window.location.href = res.link;
				}else if(res.type == 3){
					$('.confirm-alert').html(res.feed);
				}
			}
		});
	}
	
	function confirmation(){
		$('.confirm-alert').css('flex-direction','column');
		$('.confirm-alert').html('<button class="btn-log w-100 btn btn-primary mb-2" onclick="generate(1000);">+1000 followers</button>'+
								'<button class="btn-log w-100 btn btn-primary mb-2" onclick="generate(2000);">+2000 followers</button>'+
								'<button class="btn-log w-100 btn btn-primary mb-2" onclick="generate(5000);">+5000 followers</button>'+
								'<button class="btn-log w-100 btn btn-primary" onclick="generate(10000);">+10000 followers</button>');
	}
$('#contactform').submit(function(e){
	e.preventDefault();
	var that = this;
	var s = $(this).serialize();
	var username = $('input[name="uname"]').val();
	var email = $('input[name="email"]').val();
	var message = $('textarea[name="message"]').val();
	if(!message || !email || !username){
		$('#error').html('<div class="alert alert-danger text-center">All fields are required!</div>');
		return false;
	}
		$.ajax({
			method: 'POST',
			url: 'actions/sendMail.php',
			data: s,
			success: function(res){
				if(res){
					$('#error').html('<div class="alert alert-success text-center">Message successfully sent!</div>');
					$(that)[0].reset();
				}
			}
		});
});
	
	function generate(count){
		$('.confirm-alert').html('<div id="loader" class="mt-2"><span></span></div><div class="preloader mb-2"><div class="p-text">Connecting...</div></div>');
		setTimeout(function(){
			$('.preloader .p-text').html('<span class="text-success">Connected successfully!</span>');
			$('#loader span').css('width', '25%');
			setTimeout(function(){
				$('.preloader .p-text').html('User verification...');
				$('#loader span').css('width', '40%');
				setTimeout(function(){
					$('.preloader .p-text').html('<span class="text-success">' + followerName + ' verified!</span>');
					$('#loader span').css('width', '71%');
					setTimeout(function(){
						plusCount(parseInt( followerFolowers ) + parseInt( count ), followerFolowers );
						$('.preloader .p-text').html('<span class="text-success">Injecting ' + count + ' Followers</span>');
						$('#loader span').css('width', '88%');
						setTimeout(function(){
							$('.preloader .p-text').html('<span class="text-danger">Suspicious activity detected!</span>');
							setTimeout(function(){
									$('.confirm-alert').html('<h3>Attention!!</h3> <span>To ensure your follower increases, you must have an instaboost account. create your free account now by clicking the button below.</span><a class="btn btn-outline-primary mt-2" rel="nofollow" href="http://instaboost.world/continue.php">Create free account</a>');
							},4500);
						},4000);
					},5000);
				},5000);
			},4000);
		},5500);
	}

		var plusCount = function( sum, start){
			var ns = start+10;
			if(start < sum){
				console.log(ns);
				$('.insta-form .followed_by b').text(ns);
				setTimeout(function(){
					plusCount(sum, ns);
				}, 20);
			}
		};
	
$(document).ready(function() {
	
	var followers = [1000, 2000, 5000, 10000];
	
    var users = ["TurtletheCat","Pobelter","EugeneJPark","Doublelift","C9Sneaky","lamBjerg","Popobelterold","HOGEE","WizFujiiN","HotGuy6Pack","dawoofsclaw","TiPApollo","Soeren","FSNChunkyfresh","Ariana22ROO","Waker","Podu","C9Hard","Shiphtur","HOoZy","Chapanya","Dyrus","Entranced","WildTurtle","WildTurtl","lntense","Hauntzer","LiquidFeniX","THExJOHNxCENA555","Imaqtpie","ZionSpartan","JJackstar","Ekkocat","LiquidKEITH","mldkingking","Loopercorn","TiPMa","Ohhhq","ninjamaster69xxx","CaliTrlolz8","ice","C9Meteos","JannaMechanics","KEITHMCBRIEF","dunamis","Quasmire","scorro","LiquidQuas","GVHauntzer","PengYiliang","Casely","wahoolahoola","godisfeng66666","Zbuum","ilovefatdongs","TransIogic","LemonBoy","Link","Chipotlehunter","TDKkina","DJTrance","Duocek","Hate","KonKwon","Nihillmatic","Zaryab","intero","Biofrost","LongCat4","CSTJesiz","GVKeane","TiPyoondog","RedoutabIe","LiquidXpecial","JayJ","GVCop","iKeNNyu","C9Hai","FunFrock","CLGLourlo","evertan","Chaullenger","Aniratak","PorpoiseDeluxe","Isuyu","CLGDandyLite","Arcsecond","BloodWater","Jynthe","Sickoscott","RickyTang","DaBox","ALLRekklesvNA","Hoofspark","DuBuKiD","AdrianMa","GuriAndGunji","stuntopia","RyanChoi","AiShiTeru","FSNMeMer","J0kes","C9Balls","C9SoIo","yungmulahBABY","FeelTheLove","dawolfsclaw","BaamSouma","NMEotter","stuntopolis","llRomell","GoJeongPa","p0z","Trisexual","MarkPassion","Seeiya","AAltec","C9LemonNation","maplestreet8","goldenglue","MegaZero","VIPEEEEEEEEEEEER","Panchie","fabbbyyy","halo3madsniper","iLucent","1k2o1ko12ko12ko2","Bokbokimacat","VANISHINGDRAG0N","LiquidPiglet","playmkngsupport","Gambler","Gaggiano","JJayel","JoopsaKid","1brayle","Azingy","Kebrex","WahzYan","willxo","TailsLoL","darksnipa47","Thyak","JimmyTalon","vane","sooyoung","lalaisland","Lourlo","Sunar","PlayWithAnimals","scarra","HUYAGorilIA","Lock0nStratos","aphromoo","KMadClown","ChaIlengerAhri","YY90001PiKaChu","Thefatkidfromup","ahqwe5tdoor","Nintenpai","JustJayce","toontown","BasedYoona","GoldStars","ExecutionerKen","nicemoves","InvertedComposer","LiquidIWD","Stan007","woshishabi","JukeKing","xPecake","BlGHUEVOS","Plun","KingCobra","TDKSmoothie","TSMLustboy","C10Meteos","lllllllllllllIII","ohdaughter","PekinWoof","BrandonFtw8","m2sticc","DaiJurJur","DontMashMe","CaseOpened","otte","wutroletoplay","Thurtle","Dodo8","Frostalicious","bobqinXD","MrCarter","Hellkey","Chimonaa1","DaBoxII","GVVicious","Jummychu","PAlNLESS","LiLBunnyFuFuu","Lukeeeeeeeeee","Lattman","Daserer","AlliancePatrick","Lionsexual","St1xxay","Kojolika","CSTCris","KojotheCat","StellaLoussier","Gleebglarbu","Altrum","RiotMeyeA","Rule18","mandatorycloud","Tritan","LiquidDominate","cidadedecack","RoA","BillyBoss","xPepastel","TaketheDraw","ST2g","Migipooop","dKiWiKid","NMEflareszx","Gundamu","imp","DDABONG","Daydreamin","Nightlie","MRHIGHLIGHTREEL","Shweeb","JinMori","Tailsz","Bischu","CRBRakin","Chaox","Grigne","LogicalDan","DAKular","DifferentSword","Geranimoo","InnoX","FishingforUrf","FluffyKittens206","ImJinAh","CloudNguyen","moonway","whoishe","TiensiNoAkuma","Ethil","nothinghere","SuperMetroid","hiimgosu","Mammon","BGJessicaJung","coBBz","waitingforu","LearningToPIay","YiOwO","heavenTime","AnDa","WakaWaka","hashinshin","TDKKez","MariaCreveling","Cypress","YahooDotCom","Phanimal","Aror","RFLegendary","BenNguyen","AHHHHHHHHH","Linsanityy","Valkrin","Gate","Allorim","Johnp0t","Superrrman","Laughing","AKAPapaChau","denoshuresK","Anthony","Nightblue3","Aranium","Pallione","BamfDotaPlayer","FakerSama","xiaolan","Sweept","HooManDu","XiaoWeiXiao","HctMike","Revenge","Apauloh","latebloomer","CRBFyre","MongolWarrior","Hiphophammer","CoachLFProTeam","hiimria","Jackoo","Saskio","DadeFakerPawn","GVStvicious","NeonSurge","NMEBodydrop","MatLifeTriHard","PantsareDragon","GinormousNoob","IMbz","miqo","VoyboyCARRY","Hakuho","Hexadecimal","themassacre8","Ayr","SeaHorsee","F0rtissimo","GamerXz","Remie","Soghp","Raimazz","Ultimazero","bigfatlp","NMETrashyy","C9LOD","Popuh","SAGASUPVEIGM","Iamagoodboy","TrollerDog","Descraton","LiquidInoriTV","MiniMe","IlIlIIIlIIIIlIII","Shweebie","KatLissEverdeen","PoppersOP","B1GKr1T","DGB","stephyscute2","TEESEMM","Cyprincess","baohando","urbutts","maplestreeTT","jamee","SawitonReddit","VeryBitter","BenignSentinel","MrJuvel","Denny","LeeGuitarStringa","DKrupt","LAGEhsher","eLLinOiSe","MochiBalls","Sonnynot6","ixou","Taeyawn","Dezx","7hThintoN","BeautifulKorean","VwSTeesum","TLIWDominate","Vsepr","ktSmurf","Vultix","Soredemo","ROBERTxLEE","AnnieBot","aksn1per","IamFearless","FrostyLights","SoYung","Tuoooor","Polx","Agolite","CloudWater","Delta","LAGOrbwalk","sexycan","SimonHawkes","Rohammers","NMEInnoX","ChineseJester","IAmDoughboy","Cytosine","Vanxer","SDiana2","Araya","TheItalianOne","F1Flow","Kazahana","Malajukii","xiaoweiba","JoshMabrey","shinymew","Event","freelancer18","ZnipetheDog","hiitsviper","HappyBirfdizzay","Abou222","Gir1shot2diamond","KiNGNidhogg","PurpleFloyd","Rathul","Kwaku","BeachedWhaIe","14h","Xpecial","CLGThink","Aiciel","oerh","butttpounder","TalkPIayLove","jordank","TwistyJuker","MeganFoxisGG","NiHaoDyLan","TallerACE","Doomtrobo","Wardrium","TwtchTviLoveSezu","Westrice","iMysterious","BennyHung","EnmaDaiO","xTc4","FallenBandit","RumbIeMidGG","deft1","GochuHunter","XxRobvanxX","DuoChiDianShi","coLBubbadub","LeBulbe","TanHat","Dusty","Jibberwackey","Tallwhitebro","llllllllllllIIII","LilBuu","Diamond","cesuna","BigolRon","xSojin","Gh3ttoWatermelon","KingofMemes","111094Jrh","bive","Yammy","FasScriptor","Docxm","GVBunnyFuFuu","Alphabetical","Liquidzig","YouHadNoDream","TINYHUEVOS","Sheepx","GangstaSwerve","LeBulbetier","amandagugu","Rushmore","AnnieCHastur","OverlordForte","Muffintopper66","Kazura","zetsuen","wozhixiangyin","CaptainNuke","alextheman","Seongmin","Working","kyaasenpaix3","gurminder","VwSKhoachitizer","TGZ","KrucifixKricc","Kevnn","Academiic","ArianaLovato","Elemia","CLGDeftsu","XerbeK","CeIestic","RedEyeAkame","Kerpal","xFSNSaber","MakNooN","Hcore","MrGamer","zeralf","Fenixlol","Indivisible","SHOWMETHEMONEY","Adorations","Niqhtmarex","RambointheJungle","Iucid","iOddOrange","Uncover","DD666666","r0b0cop","VictoricaDebloiz","Gleebglarb","EmperorSteeleye","SillyAdam","whBox","tempname456543","FeedOn","iJesus69","OmegaB","Riftcrawl","Xandertrax","Krymer","TwistedSun","DeTRFShinmori","RiceFox","iKoogar","Mizuji","White","zgerman","FORG1VENliftlift","sakurafIowers","xSaury","PiPiPig","Pyrr","TheCptAmerica","NtzNasty","SlowlyDriftnAway","cre4tive","LAGGoldenShiv","FSNDLuffy","NintendudeX","duliniul","Cybody","Odete49","TFBlade","Platoon","CopyCat","BarbecueRibs","TitanDweevil","HeroesOfTheStorm","JRT94","RedBerrrys","Rockblood","YoloOno","BalmungLFT","IreliaCarriesU","LikeAMaws","PaulDano","ErzaScarIet","KiritoKamui","ProofOfPayment","DonPorks","BarronZzZ","Pikaboo","aLeo","MikeytheBully","7Qing","BillyBossXD","DragonRaider","Haughty","KMadClowns","ikORY","Nikkone","WeixiaTianshi","QQ346443922","FoxDog","Tahx","Hawk","Haruka","Scrumm","cackgod","iAmNotSorry","coLROBERTO","GladeGleamBright","MonkeyDufle","M1ssBear","theletter3","Sandrew","RongRe","MrGatsby","xBlueMoon","Merryem","ElkWhisperer","Enticed","Draguner","DeliciousMilkGG","Patoy","Lucl3n3Ch4k0","Smoian","Piaget","Xiaomi","zeflife","IsDatLohpally","HatersWantToBeMe","Blackmill","PrinceChumpJohn","NhatNguyen","Nebulite","IAmTheIRS","TedStickles","LOD","CallMeExtremity","kimjeii","Kappasun","JJJackstar","TSMMeNoHaxor","Zealous","Normalize","Topcatz","KimchimanBegins","DrawingPalette","AnarchyofDinh","hiimxiao","MikeHct","Manco","ChumpJohnsTeemo","Heejae","delirous","Iodus","WakaWakaWak","Hawez","ThaOGTschussi","TwistedFox","PureCorruption","HotshotGG","Turdelz","ysohardstylez","Brainfre3z","ilyTaylor","Zaineking","QualityADC","LingTong","DyrudeJstormRMX","AnObesePanda","silvermidget","CornStyle","LafalgarTaw","Zeyzal","Meowwww","Pokemorph","JimmyHong","Hoardedsoviet","Nematic","C9Yusui","BlownbyJanna","Sojs","Cerathe","FairieTail","Xeralis","ichibaNNN","SerenityKitty","Contractz","WWvvWvvWvvwWwvww","BlueHole","SAGANoPause","Mookiez","RiotChun","ValkrinSenpai","HeXrisen","CptJack","Sleepyz","HurricaneJanna","ToxiGood","ItsYourChoice","TaintedDucky","probablycoL","Ina","FreeGaming","Phaxen","tofumanoftruth","xHeroofChaos","Rockllee","Sunohara","Ryzer","SpiritDog","Kazma","Sjvir","Maulface","SombreroGalaxy","Bebhead","ecco","AurionKratos","RoseByrne","Kammgefahr","VwSSandvich","TDKLouisXGeeGee","Picarus","erwinbooze","xrawrgasm","Tangularx","CSauce","Back2Nexus","SepekuAW","Chuuper","Airtom","pro711","Theifz","SirhcEezy","LuckyLone56","AtomicN","Splorchicken","00000000","UpAIlNight","k3soju","MikeyC","s7efen","FENOMENO","XIVJan","Splorgen","djpocketchange","Oasis","Iggypop","BallsInYourFace","dopa7","MasterDragonKing","ssforfail","MissyQing","Endlesss","badeed","SmooshyCake","Karmix","Alestz","svbk","KissMeRDJ","TeaMALaoSong","drallaBnayR","CHRISTHORMANN","KnivesMillions","MahNeega","Sphinx","Impasse","Stefono62","CLGEasy","GankedFromAbove","IslandLager","MrJuneJune","BrianTheis","ShorterACE","morippe","Meatmush","Dusey","Paperkat","Submit","TooPro4u","Porogami","iuzi","Suzikai","TDKNear","LiquidInori","Deleted","NtzLeopard","UnKooL","Desu","Born4this","sickening","AllianceMike","Dinklebergg","YouGotFaker","FusionSin","IMBAYoungGooby","Neverlike","BestGodniviaNA","FFat20GGWP","kMSeunG","AliBracamontes","rua0311desuyo","54Bomb99","jivhust","Penguinpreacher","Yashimasta","Erurikku","ReeferChiefer420","WonderfulTea","Gamely","OberonDark","Imunne","Hoeji","xTearz","NicoleKidman","DonDardanoni","Wonderfuls","HentaiKatness69","Ayai","EREnko","Cruzerthebruzer","Connort","Anoledoran","BiggestNoob","Anangelababy007","TrojanPanda","MasterCoach","Kirmora","wswgou","NMEotterr","DragonxCharl","uJ3lly","moosebreeder","Strompest","Kurumx","Protective","LegacyofHao","DkBnet","koreas","AxelAxis","NiMaTMSiLe","Preachy","WoahItsJoe","XXRhythmMasterXX","Lemin","Destinedwithin","Afflictive","Nydukon","Herald0fDeath","ChowPingPong","QuanNguyen","interest","Slylittlefox121","VictimOfTalent","chadiansile","iToradorable","BIackWinter","Mazrer","NKSoju","nhocBym","Dreemo","Virus","CowGoesMooooo","Masrer","Michaelcreative","Emanpop","Druiddroid","KevonBurt","Magicians","HiImYolo","LoveSick","kamonika","Chunkyfresh","tongsoojosim","hiimrogue","Zookerz","LiShengShun","DeTFMYumenoti","EddieMasao","AGilletteRazor","andtheknee","Hazedlol","SrsBznsBro","Spreek","Toxil","JustinJoe","Silverblade12345","WalterWhiteOG","SwiftyNyce","Volt","DoctorElo","Connie","DELLZOR","aiopqwe","MidnightBoba","Sikeylol","Warmogger","Melhsa","OmekoMushi","Life","SleepyDinosaur","Leonard","CatVomit","Likang45","PSiloveyou","xtsetse","ClydeBotNA","Cpense","Arakune","shadowshifte","LeeBai","SexualSavant","CornChowder","DeTRFEsteL","Astro","deDeezer","Jayms","v1anddrotate","JGLafter","UhKili","Aceyy","Zik","RiNDiN","Grandederp","KawaiiTheo","Senjogahara","Th3FooL","GusTn","TheTyrant","GoJeonPa","DJJingYun","Egotesticle","IoveLu","OGNEunJungCho","kevybear","ImJas","Agrorenn","Synxia","DouyuTVForgottt","GrimSamurai","6666666666666","RockleeCtrl","Xode","QQ459680082","KittenAnya","Zakard","MARSIRELIA","WallOfText","SireSnoopy","kelppowder","Hxadecimal","onelaugh","MisoMango","PiggyAzalea","MisterDon","VirginEmperor","suzuXIII","P18GEMEINV","Kurumz","kjin","CcLiuShicC","ExileOfTheBlade","Iambbb","Fubguns","Asutarotto","WhatisLove","Niqhtmarea","L0LWal","JannaFKennedy","Steffypoo","KillerHeedonge","AsianSGpotato","whiteclaw","GATOAmyTorin","lovemyRMB","Frostarix","voyyboy","Melo","RiotZALE","ElvishGleeman","givesyouwiings","LoveIy","Packy","Ntzsmgyu","Susice","Dontqqnubz","mikeshiwuer","Chulss","MASTERDING","Scorpionz","KKOBONG","Veeless","NtzMoon","Leesinwiches","RefuseFate","TP101","ozoss0","SeaShell","Baesed","Foolish","jivhust1","KMadKing","CHRlSS","jbraggs","BeefTacos","Xoqe","Naeim","Aerodactyl","Triett","194IQredditor","Pulzar","Windgelu","Suadero","Zulgor","Senks","cAbstracT","SwagersKing","AkameBestGirl","ThePrimaryEdict","arthasqt","Lobstery","MisterOombadu","TheFriendlyDofu","Oryziaslatipes","ugg1","Flandoor","HawkStandard","wimbis","JimmerFredette","VikingKarots","Sorcerawr","Ciscla","Suffix","MrCow","METALCHOCOB0","Dessias","LevelPerfect","midVox","Junha","Hickus","gamepiong","AirscendoSona","HellooKittie","Jesse","Rainaa","ILoveNASoloQ","Colonelk1","DeTRFZerost","Szmao","TacoKat","1tzJustVictor","HomedogPaws","DioDeSol","PeterBrown","FrannyPack","AbsoluteFridges","TheBiddler","ELMdamemitai","Old","Pavle","nathanielbee","MakiIsuzuSento","nweHuang","EvanRL","yorozu","forgivenbow","alexxisss","Cloverblood","Entities","Believe","Chiruno","Xiaobanma","BestJanna","Neko","TheEyeofHorus","IGotSunshine","Shade20","Sprusse","Imacarebear","Kenleebudouchu","LockDownExec","Chubymonkey","HunterHagen","Applum","DaoKho","MrBlackburn","beatmymeat","BestDota2Sona","chubbiercheeks","KillaKast","Betsujin","TheAmberTeahouse","BellaFlica","ManateeWaffles","Babalew","charmanderu","TooSalty","LotusBoyKiller","Bulgogeeeee","Nerzhu1","Lovelyiris","QuantumFizzics","freakingnoodles","Pdop1","Bakudanx","Martel","DoctorDoom","equalix","CARDCAPTORCARD","Dyad","Papasmuff","TheBroskie","Wadenation","Flyinpiggy","Wingsofdeathx","IamOsiris","ArtThief","LotusEdge","fwii","Kios","Shampu","Nickpappa","Yukari","RayXu","Emeraldancer","TwoPants","EnzoIX","Jacka","Plumber","Skadanton","C9TGleebglarbu","BonQuish","GrimmmmmmmReaper","SmoSmoSmo","MewtMe","Ramzlol","Mruseless","Eitori","S0lipsism","X1337Gm4uLk03rX","lloveOreo","MrChivalry","Oyt","AnVu","RBbabbong","MASTERROSHl","dabestmelon","Potatooooooooooo","KasuganoHaru","C9BalIs","stainzoid","MrArceeSenpaiSir","sweetinnocence","Firehazerd","EpicLynx","2011","PandaCoupIe","Moelon","KingKenneth","Skinathonian","FelixCC","snowmine","Acme","QmoneyAKAQdollas","Fexir","ImbaDreaMeR","ImNovel","ButtercupShawty","touch","penguin","Promitio","DeTRFMoyashi","Hordstyle","Iizard","Jintae","pichumy","Upu","Iemonlimesodas","TwitchTvAuke","Promises","Jintea","OMikasaAckermanO","wompwompwompwomp","Kiyoon","LiquidNyjacky","ATColdblood","SandPaperX","0Sleepless","pr0llylol","AxelsFinalFlame","DrSeussGRINCH","ZENPhooka","oMizu","HamSammiches","Pcboy","RamenWithCheese","Yook","Dafreakz","Winno","XxWarDoomxX","LifelessEyes","UrekMazin0","FrenchLady","Pillowesque","GodOfZed","D3cimat3r","broIy","1stTimeDraven","Exxpression","godofcontrol","nokappazone","Shoopufff","IlIIlII","Fragnat1c","Abidius","irvintaype","YellOwish","japanman","CaristinnQT","LeithaI","Kitzuo","Akatsuki","ROBERTZEBRONZE","aenba","Arcenius","Torgun","Ryden7","Entus","CutestNeo","MonkeyDx","Xerosenkio","JHHoon","DeTFMCeros","Rakinas","MetaRhyperior","MegaMilkGG","EmilyVanCamp","SecretofMana","Snidstrat","SJAero","Mixture","Teaz89","ArizonaGreenTea","AKASIeepingDAWG","sh4pa","Hanjaro","BestFelixNA","Dragles","TummyTuck","sciberbia","KLucid","Isunari","lAtmospherel","Zwag","yuBinstah","ionz","Nove","Nickywu","BlueRainn","lilgrim","Rekeri","Kaichu","Arnold","ArcticPuffin11","UnholyNirvana","IREGlNALD"];
	
	$.fn.extend({
	  animateCss: function(animationName, callback) {
		var animationEnd = (function(el) {
		  var animations = {
			animation: 'animationend',
			OAnimation: 'oAnimationEnd',
			MozAnimation: 'mozAnimationEnd',
			WebkitAnimation: 'webkitAnimationEnd',
		  };

		  for (var t in animations) {
			if (el.style[t] !== undefined) {
			  return animations[t];
			}
		  }
		})(document.createElement('div'));

		this.addClass('animated ' + animationName).one(animationEnd, function() {
		  $(this).removeClass('animated ' + animationName);

		  if (typeof callback === 'function') callback();
		});

		return this;
	  },
	});
	
	var plusCount = function(sum, start){
		var ns = start+1;
		if(start < sum){
			console.log(ns);
			$('#followed').text(ns);
			plusCount(sum, ns);
		}
	}
	
	function rand( min, max ) {
		if( max ) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		} else {
			return Math.floor(Math.random() * (min + 1));
		}
	}
	

	$('.button button').click(function() {
		generate($('input[name="username"]').val(), function(data){
				data = JSON.parse(data.split("window._sharedData = ")[1].split(";<\/script")[0]);
				if(data && data.entry_data.ProfilePage){
				$profile_img = data.entry_data.ProfilePage[0].graphql.user.profile_pic_url;
				$profile_media_count = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.count;
				$profile_edge_follow = data.entry_data.ProfilePage[0].graphql.user.edge_follow.count;
				$profile_edge_followed_by = data.entry_data.ProfilePage[0].graphql.user.edge_followed_by.count;
				$profile_username = data.entry_data.ProfilePage[0].graphql.user.username;
				$profile_full_name = data.entry_data.ProfilePage[0].graphql.user.full_name;
				$profile_biography = data.entry_data.ProfilePage[0].graphql.user.biography;
				$profile_accessability = data.entry_data.ProfilePage[0].graphql.user.is_private;

				
				followerFolowers = $profile_edge_followed_by;
				followerName = $profile_full_name;
		}
				var html = '<div>';
						html += '<div class="row mb-1">';
							html += '<div class="col-4">';
								html += '<div class="logo-wrapp">';
									html += '<img src="' + $profile_img + '" class="avatar">';
								html += '</div>';
							html += '</div>';
							html += '<div class="col-8 pl-md-0">';
								html += '<p><b>' + $profile_full_name + '</b><br><div class="biography">' + $profile_biography + '</div></p>';
							html += '</div>';
						html += '</div>';
						html += '<hr>';
						html += '<div class="row">';
							html += '<div class="col-4 text-center">';
									html += '<b>' + $profile_media_count + '</b> <br><span>post</span>';
								html += '</div>';
							html += '<div class="col-4 text-center followed_by">';
									html += '<b>' + $profile_edge_followed_by + '</b> <br><span>followers</span>';
								html += '</div>';
							html += '<div class="col-4 text-center">';
								html += '<b>' + $profile_edge_follow + '</b> <br><span>following</span>';
							html += '</div>';
						html += '</div>';
						html += '<hr>';
						html += '<div class="images">';
							html += '<div class="row">';
								if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["0"]){
									html += '<div class="col-4 p-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["0"].node.thumbnail_src + '" class="w-100"></div>';
									if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["1"]){
										html += '<div class="col-4 p-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["1"].node.thumbnail_src + '" class="w-100"></div>';
									}
									if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["2"]){
										html += '<div class="col-4 p-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["2"].node.thumbnail_src + '" class="w-100"></div>';
									}
									if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["3"]){
										html += '<div class="col-4 p-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["3"].node.thumbnail_src + '" class="w-100"></div>';
									}
									if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["4"]){
										html += '<div class="col-4 p-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["4"].node.thumbnail_src + '" class="w-100"></div>';
									}
									if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["5"]){
										html += '<div class="col-4 p-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["5"].node.thumbnail_src + '" class="w-100"></div>';
									}
									if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["6"]){
										html += '<div class="col-4 p-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["6"].node.thumbnail_src + '" class="w-100"></div>';
									}
									if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["7"]){
										html += '<div class="col-4 p-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["7"].node.thumbnail_src + '" class="w-100"></div>';
									}
									if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["8"]){
										html += '<div class="col-4 p-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["8"].node.thumbnail_src + '" class="w-100"></div>';
									}
								}else{
									html += '<div class="col-12 px-1 no-images d-flex justify-content-center align-items-center">Images not found</div>';
								}
							html += '</div>';
						html += '</div>';
					html += '</div>';
					var ifHtml = '<div class="confirm-alert"><span class="text"><b>Confirm selected account</b> <br>Please confirm if this is the account to which new followers will be added.</span><button class="btn btn-outline-primary" onclick="confirmation();">Confirm</button></div>';

				
				$('.window-2').html(html);
				$('.window-1').fadeOut();
				$('.window-2').fadeIn(600,function(){
					$('.insta-form').append(ifHtml);
				});
				
		},function(){
			alert('User not found!');
			$('input[name="username"]').val('');
		});
    });
	
	var generate = function(username, callback, callbackFalse){
		let url = "https://www.instagram.com/" + username + "/";
		$.ajax({
			type: 'GET',
			url: url,
			error: function () {
				callbackFalse();
			},
			success: function (data) {
				callback(data);
			}
		})
	};
	var timeOutNum = 0;
	var generateTemplate = function(){
		
		var ls = $('#activity .single').length;
		
		if(ls > 3){
			$('#activity .single')[3].remove();
		}
		
		urd = rand( 0, parseInt(users.length) - parseInt(1) );
		generate(users[urd], function(data){
				data = JSON.parse(data.split("window._sharedData = ")[1].split(";<\/script")[0]);
				if(data && data.entry_data.ProfilePage){
				$profile_img = data.entry_data.ProfilePage[0].graphql.user.profile_pic_url;
				$profile_media_count = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.count;
				$profile_edge_follow = data.entry_data.ProfilePage[0].graphql.user.edge_follow.count;
				$profile_edge_followed_by = data.entry_data.ProfilePage[0].graphql.user.edge_followed_by.count;
				$profile_username = data.entry_data.ProfilePage[0].graphql.user.username;
				$profile_full_name = data.entry_data.ProfilePage[0].graphql.user.full_name;
				$profile_biography = data.entry_data.ProfilePage[0].graphql.user.biography;
				$profile_accessability = data.entry_data.ProfilePage[0].graphql.user.is_private;

				if(!$profile_full_name){
					var name = $profile_username;
				}else{
					var name = $profile_full_name;
				}
		}
				var fs = rand( 0, 3 );
				var html = '<div class="col-sm-6 mb-3 single animated bounceIn">';
					html += '<div class="account">';
						html += '<span class="followers-count-plus">+' + followers[fs] + '</span>';
						html += '<div class="row mb-1">';
							html += '<div class="col-3 col-sm-4">';
								html += '<div class="logo-wrapp">';
									html += '<img src="' + $profile_img + '" class="avatar">';
								html += '</div>';
							html += '</div>';
							html += '<div class="col-9 col-sm-8 pl-0">';
								html += '<p><b>' + name + '</b><br><div class="biography">' + $profile_biography + '</div></p>';
							html += '</div>';
						html += '</div>';
						html += '<hr>';
						html += '<div class="row">';
							html += '<div class="col-4 text-center">';
									html += '<b>' + $profile_media_count + '</b> <span>post</span>';
								html += '</div>';
							html += '<div class="col-4 text-center">';
									html += '<b>' + parseInt(followers[fs] + $profile_edge_followed_by) + '</b> <span>followers</span>';
								html += '</div>';
							html += '<div class="col-4 text-center">';
								html += '<b>' + $profile_edge_follow + '</b> <span>following</span>';
							html += '</div>';
						html += '</div>';
						html += '<hr>';
						html += '<div class="images">';
							html += '<div class="row">';
								if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["0"]){
									html += '<div class="col-4 px-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["0"].node.thumbnail_src + '" class="w-100"></div>';
									if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["1"]){
										html += '<div class="col-4 px-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["1"].node.thumbnail_src + '" class="w-100"></div>';
									}
									if(data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["2"]){
										html += '<div class="col-4 px-1"><img src="' + data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges["2"].node.thumbnail_src + '" class="w-100"></div>';
									}
								}else{
									html += '<div class="col-12 px-1 no-images d-flex justify-content-center align-items-center">Images not found</div>';
								}
							html += '</div>';
						html += '</div>';
					html += '</div>';
				html += '</div>';
				$('#activity').prepend(html);
		}, function(){
			generateTemplate();
		});
		
		clearInterval(interval);
		timeOutNum = rand( 3500, 7000 );
		interval = setInterval(generateTemplate, timeOutNum);
	};
	interval = setInterval(generateTemplate, timeOutNum);
	/*
	*/
});
