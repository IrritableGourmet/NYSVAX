class UtilityHandler {

	constructor(btn_id, txt_id, output_id) {
		this.data = {
			button: document.getElementById(btn_id),
			textarea: document.getElementById(txt_id),
			output: document.getElementById(output_id)
		};
		
		let counties_num = [["Albany", "518-447-4580"],["Allegany", "585-268-9250"],["Broome", "607-778-2802"],["Cattaraugus", "716-373-8050"],["Cayuga", "315-253-1560"],["Chautauqua", "716-753-4590"],["Chemung", "607-737-2028"],["Chenango", "607-337-1660"],["Clinton", "518-565-4840"],["Columbia", "518-828-3358"],["Cortland", "607-753-5036"],["Delaware", "607-832-5200"],["Dutchess", "845-486-3432"],["Erie", "716-858-7690"],["Essex", "518-873-3500"],["Franklin", "518-481-1710"],["Fulton", "518-736-5720"],["Genesee", "585-344-2580"],["Greene", "518-719-3600"],["Hamilton", "518-648-6497"],["Herkimer", "315-867-1176"],["Jefferson", "315-786-3710"],["Lewis", "315-376-5453"],["Livingston", "585-243-7270"],["Madison", "315-366-2361"],["Monroe", "585-753-2991"],["Montgomery", "518-853-3531"],["Nassau", "516-227-9500"],["New York City", "347-396-4100"]["Niagara", "716-439-7435"],["Oneida", "315-798-6400"],["Onondaga", "315-435-3252"],["Ontario", "585-396-4343"],["Orange", "845-291-2332"],["Orleans", "585-589-3278"],["Oswego", "315-349-3545"],["Otsego", "607-547-4230"],["Putnam", "845-808-1390"],["Rensselaer", "518-270-2655"],["Rockland", "845-364-2512"],["Saratoga", "518-584-7460"],["Schenectady", "518-386-2824"],["Schoharie", "518-295-8365"],["Schuyler", "607-535-8140"],["Seneca", "315-539-1925"],["St. Lawrence", "315-386-2325"],["Steuben", "607-664-2438"],["Suffolk", "631-854-0000"],["Sullivan", "845-292-5910"],["Tioga", "607-687-8600"],["Tompkins", "607-274-6600"],["Ulster", "845-340-3150"],["Warren", "518-761-6580"],["Washington", "518-746-2400"],["Wayne", "315-946-5749"],["Westchester", "914-813-5000"],["Wyoming", "585-786-8890"],["Yates", "315-536-5160"]];
		
		let counties_obj = [
			"Albany","Allegany","Bronx","Broome","Cattaraugus","Cayuga","Chautauqua","Chemung","Chenango","Clinton",
			"Columbia","Cortland","Delaware","Dutchess","Erie","Essex","Franklin","Fulton","Genesee","Greene","Hamilton",
			"Herkimer","Jefferson","Kings","Lewis","Livingston","Madison","Monroe","Montgomery","Nassau","New York",
			"Niagara","Oneida","Onondaga","Ontario","Orange","Orleans","Oswego","Otsego","Putnam","Queens","Rensselaer",
			"Richmond","Rockland","Saint Lawrence","Saratoga","Schenectady","Schoharie","Schuyler","Seneca","Steuben",
			"Suffolk","Sullivan","Tioga","Tompkins","Ulster","Warren","Washington","Wayne","Westchester","Wyoming","Yates"
		].map(c=>new County(c));

		let counties_zips = [
			["Suffolk", "00501"],["Suffolk", "00544"],["Suffolk", "06390"],["New York", "10001"],["New York", "10002"],["New York", "10003"],["New York", "10004"],["New York", "10005"],["New York", "10006"],["New York", "10007"],
			["New York", "10008"],["New York", "10009"],["New York", "10010"],["New York", "10011"],["New York", "10012"],["New York", "10013"],["New York", "10014"],["New York", "10015"],["New York", "10016"],["New York", "10017"],
			["New York", "10018"],["New York", "10019"],["New York", "10020"],["New York", "10021"],["New York", "10022"],["New York", "10023"],["New York", "10024"],["New York", "10025"],["New York", "10026"],["New York", "10027"],
			["New York", "10028"],["New York", "10029"],["New York", "10030"],["New York", "10031"],["New York", "10032"],["New York", "10033"],["New York", "10034"],["New York", "10035"],["New York", "10036"],["New York", "10037"],
			["New York", "10038"],["New York", "10039"],["New York", "10040"],["New York", "10041"],["New York", "10043"],["New York", "10044"],["New York", "10045"],["New York", "10046"],["New York", "10047"],["New York", "10048"],
			["New York", "10055"],["New York", "10060"],["New York", "10069"],["New York", "10072"],["New York", "10079"],["New York", "10080"],["New York", "10081"],["New York", "10082"],["New York", "10087"],["New York", "10090"],
			["New York", "10094"],["New York", "10095"],["New York", "10096"],["New York", "10098"],["New York", "10099"],["New York", "10101"],["New York", "10102"],["New York", "10103"],["New York", "10104"],["New York", "10105"],
			["New York", "10106"],["New York", "10107"],["New York", "10108"],["New York", "10109"],["New York", "10110"],["New York", "10111"],["New York", "10112"],["New York", "10113"],["New York", "10114"],["New York", "10115"],
			["New York", "10116"],["New York", "10117"],["New York", "10118"],["New York", "10119"],["New York", "10120"],["New York", "10121"],["New York", "10122"],["New York", "10123"],["New York", "10124"],["New York", "10125"],
			["New York", "10126"],["New York", "10128"],["New York", "10129"],["New York", "10130"],["New York", "10131"],["New York", "10132"],["New York", "10133"],["New York", "10138"],["New York", "10149"],["New York", "10150"],
			["New York", "10151"],["New York", "10152"],["New York", "10153"],["New York", "10154"],["New York", "10155"],["New York", "10156"],["New York", "10157"],["New York", "10158"],["New York", "10159"],["New York", "10160"],
			["New York", "10161"],["New York", "10162"],["New York", "10163"],["New York", "10164"],["New York", "10165"],["New York", "10166"],["New York", "10167"],["New York", "10168"],["New York", "10169"],["New York", "10170"],
			["New York", "10171"],["New York", "10172"],["New York", "10173"],["New York", "10174"],["New York", "10175"],["New York", "10176"],["New York", "10177"],["New York", "10178"],["New York", "10179"],["New York", "10184"],
			["New York", "10185"],["New York", "10196"],["New York", "10197"],["New York", "10199"],["New York", "10203"],["New York", "10211"],["New York", "10212"],["New York", "10213"],["New York", "10242"],["New York", "10249"],
			["New York", "10256"],["New York", "10257"],["New York", "10258"],["New York", "10259"],["New York", "10260"],["New York", "10261"],["New York", "10265"],["New York", "10268"],["New York", "10269"],["New York", "10270"],
			["New York", "10271"],["New York", "10272"],["New York", "10273"],["New York", "10274"],["New York", "10275"],["New York", "10276"],["New York", "10277"],["New York", "10278"],["New York", "10279"],["New York", "10280"],
			["New York", "10281"],["New York", "10282"],["New York", "10285"],["New York", "10286"],["New York", "10292"],["Richmond", "10301"],["Richmond", "10302"],["Richmond", "10303"],["Richmond", "10304"],["Richmond", "10305"],
			["Richmond", "10306"],["Richmond", "10307"],["Richmond", "10308"],["Richmond", "10309"],["Richmond", "10310"],["Richmond", "10311"],["Richmond", "10312"],["Richmond", "10313"],["Richmond", "10314"],["Bronx", "10451"],
			["Bronx", "10452"],["Bronx", "10453"],["Bronx", "10454"],["Bronx", "10455"],["Bronx", "10456"],["Bronx", "10457"],["Bronx", "10458"],["Bronx", "10459"],["Bronx", "10460"],["Bronx", "10461"],
			["Bronx", "10462"],["Bronx", "10463"],["Bronx", "10464"],["Bronx", "10465"],["Bronx", "10466"],["Bronx", "10467"],["Bronx", "10468"],["Bronx", "10469"],["Bronx", "10470"],["Bronx", "10471"],
			["Bronx", "10472"],["Bronx", "10473"],["Bronx", "10474"],["Bronx", "10475"],["Bronx", "10499"],["Westchester", "10501"],["Westchester", "10502"],["Westchester", "10503"],["Westchester", "10504"],["Westchester", "10505"],
			["Westchester", "10506"],["Westchester", "10507"],["Putnam", "10509"],["Westchester", "10510"],["Westchester", "10511"],["Putnam", "10512"],["Westchester", "10514"],["Putnam", "10516"],["Westchester", "10517"],["Westchester", "10518"],
			["Westchester", "10519"],["Westchester", "10520"],["Westchester", "10521"],["Westchester", "10522"],["Westchester", "10523"],["Putnam", "10524"],["Westchester", "10526"],["Westchester", "10527"],["Westchester", "10528"],["Westchester", "10530"],
			["Westchester", "10532"],["Westchester", "10533"],["Westchester", "10535"],["Westchester", "10536"],["Putnam", "10537"],["Westchester", "10538"],["Westchester", "10540"],["Putnam", "10541"],["Putnam", "10542"],["Westchester", "10543"],
			["Westchester", "10545"],["Westchester", "10546"],["Westchester", "10547"],["Westchester", "10548"],["Westchester", "10549"],["Westchester", "10550"],["Westchester", "10551"],["Westchester", "10552"],["Westchester", "10553"],["Westchester", "10557"],
			["Westchester", "10558"],["Westchester", "10560"],["Westchester", "10562"],["Westchester", "10566"],["Westchester", "10567"],["Westchester", "10570"],["Westchester", "10571"],["Westchester", "10572"],["Westchester", "10573"],["Westchester", "10576"],
			["Westchester", "10577"],["Westchester", "10578"],["Putnam", "10579"],["Westchester", "10580"],["Westchester", "10583"],["Westchester", "10587"],["Westchester", "10588"],["Westchester", "10589"],["Westchester", "10590"],["Westchester", "10591"],
			["Westchester", "10594"],["Westchester", "10595"],["Westchester", "10596"],["Westchester", "10597"],["Westchester", "10598"],["Westchester", "10601"],["Westchester", "10602"],["Westchester", "10603"],["Westchester", "10604"],["Westchester", "10605"],
			["Westchester", "10606"],["Westchester", "10607"],["Westchester", "10610"],["Westchester", "10701"],["Westchester", "10702"],["Westchester", "10703"],["Westchester", "10704"],["Westchester", "10705"],["Westchester", "10706"],["Westchester", "10707"],
			["Westchester", "10708"],["Westchester", "10709"],["Westchester", "10710"],["Westchester", "10801"],["Westchester", "10802"],["Westchester", "10803"],["Westchester", "10804"],["Westchester", "10805"],["Rockland", "10901"],["Orange", "10910"],
			["Rockland", "10911"],["Orange", "10912"],["Rockland", "10913"],["Orange", "10914"],["Orange", "10915"],["Orange", "10916"],["Orange", "10917"],["Orange", "10918"],["Orange", "10919"],["Rockland", "10920"],
			["Orange", "10921"],["Orange", "10922"],["Rockland", "10923"],["Orange", "10924"],["Orange", "10925"],["Orange", "10926"],["Rockland", "10927"],["Orange", "10928"],["Orange", "10930"],["Rockland", "10931"],
			["Orange", "10932"],["Orange", "10933"],["Orange", "10940"],["Orange", "10941"],["Orange", "10943"],["Orange", "10949"],["Orange", "10950"],["Rockland", "10952"],["Orange", "10953"],["Rockland", "10954"],
			["Rockland", "10956"],["Orange", "10958"],["Orange", "10959"],["Rockland", "10960"],["Rockland", "10962"],["Orange", "10963"],["Rockland", "10964"],["Rockland", "10965"],["Rockland", "10968"],["Orange", "10969"],
			["Rockland", "10970"],["Orange", "10973"],["Rockland", "10974"],["Orange", "10975"],["Rockland", "10976"],["Rockland", "10977"],["Orange", "10979"],["Rockland", "10980"],["Orange", "10981"],["Rockland", "10982"],
			["Rockland", "10983"],["Rockland", "10984"],["Orange", "10985"],["Rockland", "10986"],["Orange", "10987"],["Orange", "10988"],["Rockland", "10989"],["Orange", "10990"],["Orange", "10992"],["Rockland", "10993"],
			["Rockland", "10994"],["Orange", "10996"],["Orange", "10997"],["Orange", "10998"],["Nassau", "11001"],["Nassau", "11002"],["Nassau", "11003"],["Queens", "11004"],["Queens", "11005"],["Nassau", "11010"],
			["Nassau", "11020"],["Nassau", "11021"],["Nassau", "11022"],["Nassau", "11023"],["Nassau", "11024"],["Nassau", "11025"],["Nassau", "11026"],["Nassau", "11027"],["Nassau", "11030"],["Nassau", "11040"],
			["Nassau", "11041"],["Nassau", "11042"],["Nassau", "11043"],["Nassau", "11044"],["Nassau", "11050"],["Nassau", "11051"],["Nassau", "11052"],["Nassau", "11053"],["Nassau", "11054"],["Nassau", "11055"],
			["Nassau", "11096"],["Nassau", "11099"],["Queens", "11101"],["Queens", "11102"],["Queens", "11103"],["Queens", "11104"],["Queens", "11105"],["Queens", "11106"],["Queens", "11109"],["Queens", "11120"],
			["Kings", "11201"],["Kings", "11202"],["Kings", "11203"],["Kings", "11204"],["Kings", "11205"],["Kings", "11206"],["Kings", "11207"],["Kings", "11208"],["Kings", "11209"],["Kings", "11210"],
			["Kings", "11211"],["Kings", "11212"],["Kings", "11213"],["Kings", "11214"],["Kings", "11215"],["Kings", "11216"],["Kings", "11217"],["Kings", "11218"],["Kings", "11219"],["Kings", "11220"],
			["Kings", "11221"],["Kings", "11222"],["Kings", "11223"],["Kings", "11224"],["Kings", "11225"],["Kings", "11226"],["Kings", "11228"],["Kings", "11229"],["Kings", "11230"],["Kings", "11231"],
			["Kings", "11232"],["Kings", "11233"],["Kings", "11234"],["Kings", "11235"],["Kings", "11236"],["Kings", "11237"],["Kings", "11238"],["Kings", "11239"],["Kings", "11240"],["Kings", "11241"],
			["Kings", "11242"],["Kings", "11243"],["Kings", "11244"],["Kings", "11245"],["Kings", "11247"],["Kings", "11248"],["Kings", "11249"],["Kings", "11251"],["Kings", "11252"],["Kings", "11254"],
			["Kings", "11255"],["Kings", "11256"],["Queens", "11351"],["Queens", "11352"],["Queens", "11354"],["Queens", "11355"],["Queens", "11356"],["Queens", "11357"],["Queens", "11358"],["Queens", "11359"],
			["Queens", "11360"],["Queens", "11361"],["Queens", "11362"],["Queens", "11363"],["Queens", "11364"],["Queens", "11365"],["Queens", "11366"],["Queens", "11367"],["Queens", "11368"],["Queens", "11369"],
			["Queens", "11370"],["Queens", "11371"],["Queens", "11372"],["Queens", "11373"],["Queens", "11374"],["Queens", "11375"],["Queens", "11377"],["Queens", "11378"],["Queens", "11379"],["Queens", "11380"],
			["Queens", "11381"],["Queens", "11385"],["Queens", "11386"],["Queens", "11390"],["Queens", "11405"],["Queens", "11411"],["Queens", "11412"],["Queens", "11413"],["Queens", "11414"],["Queens", "11415"],
			["Queens", "11416"],["Queens", "11417"],["Queens", "11418"],["Queens", "11419"],["Queens", "11420"],["Queens", "11421"],["Queens", "11422"],["Queens", "11423"],["Queens", "11424"],["Queens", "11425"],
			["Queens", "11426"],["Queens", "11427"],["Queens", "11428"],["Queens", "11429"],["Queens", "11430"],["Queens", "11431"],["Queens", "11432"],["Queens", "11433"],["Queens", "11434"],["Queens", "11435"],
			["Queens", "11436"],["Queens", "11439"],["Queens", "11451"],["Queens", "11499"],["Nassau", "11501"],["Nassau", "11507"],["Nassau", "11509"],["Nassau", "11510"],["Nassau", "11514"],["Nassau", "11516"],
			["Nassau", "11518"],["Nassau", "11520"],["Nassau", "11530"],["Nassau", "11531"],["Nassau", "11535"],["Nassau", "11536"],["Nassau", "11542"],["Nassau", "11545"],["Nassau", "11547"],["Nassau", "11548"],
			["Nassau", "11549"],["Nassau", "11550"],["Nassau", "11551"],["Nassau", "11552"],["Nassau", "11553"],["Nassau", "11554"],["Nassau", "11555"],["Nassau", "11556"],["Nassau", "11557"],["Nassau", "11558"],
			["Nassau", "11559"],["Nassau", "11560"],["Nassau", "11561"],["Nassau", "11563"],["Nassau", "11565"],["Nassau", "11566"],["Nassau", "11568"],["Nassau", "11569"],["Nassau", "11570"],["Nassau", "11571"],
			["Nassau", "11572"],["Nassau", "11575"],["Nassau", "11576"],["Nassau", "11577"],["Nassau", "11579"],["Nassau", "11580"],["Nassau", "11581"],["Nassau", "11582"],["Nassau", "11590"],["Nassau", "11592"],
			["Nassau", "11594"],["Nassau", "11595"],["Nassau", "11596"],["Nassau", "11597"],["Nassau", "11598"],["Nassau", "11599"],["Queens", "11690"],["Queens", "11691"],["Queens", "11692"],["Queens", "11693"],
			["Queens", "11694"],["Queens", "11695"],["Queens", "11697"],["Suffolk", "11701"],["Suffolk", "11702"],["Suffolk", "11703"],["Suffolk", "11704"],["Suffolk", "11705"],["Suffolk", "11706"],["Suffolk", "11707"],
			["Suffolk", "11708"],["Nassau", "11709"],["Nassau", "11710"],["Suffolk", "11713"],["Nassau", "11714"],["Suffolk", "11715"],["Suffolk", "11716"],["Suffolk", "11717"],["Suffolk", "11718"],["Suffolk", "11719"],
			["Suffolk", "11720"],["Suffolk", "11721"],["Suffolk", "11722"],["Suffolk", "11724"],["Suffolk", "11725"],["Suffolk", "11726"],["Suffolk", "11727"],["Suffolk", "11729"],["Suffolk", "11730"],["Suffolk", "11731"],
			["Nassau", "11732"],["Suffolk", "11733"],["Nassau", "11735"],["Nassau", "11736"],["Nassau", "11737"],["Suffolk", "11738"],["Suffolk", "11739"],["Suffolk", "11740"],["Suffolk", "11741"],["Suffolk", "11742"],
			["Suffolk", "11743"],["Suffolk", "11746"],["Suffolk", "11747"],["Suffolk", "11749"],["Suffolk", "11750"],["Suffolk", "11751"],["Suffolk", "11752"],["Nassau", "11753"],["Suffolk", "11754"],["Suffolk", "11755"],
			["Nassau", "11756"],["Suffolk", "11757"],["Nassau", "11758"],["Suffolk", "11760"],["Nassau", "11762"],["Suffolk", "11763"],["Suffolk", "11764"],["Nassau", "11765"],["Suffolk", "11766"],["Suffolk", "11767"],
			["Suffolk", "11768"],["Suffolk", "11769"],["Suffolk", "11770"],["Nassau", "11771"],["Suffolk", "11772"],["Nassau", "11773"],["Nassau", "11774"],["Suffolk", "11775"],["Suffolk", "11776"],["Suffolk", "11777"],
			["Suffolk", "11778"],["Suffolk", "11779"],["Suffolk", "11780"],["Suffolk", "11782"],["Nassau", "11783"],["Suffolk", "11784"],["Suffolk", "11786"],["Suffolk", "11787"],["Suffolk", "11788"],["Suffolk", "11789"],
			["Suffolk", "11790"],["Nassau", "11791"],["Suffolk", "11792"],["Nassau", "11793"],["Suffolk", "11794"],["Suffolk", "11795"],["Suffolk", "11796"],["Nassau", "11797"],["Suffolk", "11798"],["Nassau", "11801"],
			["Nassau", "11802"],["Nassau", "11803"],["Nassau", "11804"],["Nassau", "11815"],["Nassau", "11819"],["Nassau", "11853"],["Nassau", "11854"],["Nassau", "11855"],["Suffolk", "11901"],["Suffolk", "11930"],
			["Suffolk", "11931"],["Suffolk", "11932"],["Suffolk", "11933"],["Suffolk", "11934"],["Suffolk", "11935"],["Suffolk", "11937"],["Suffolk", "11939"],["Suffolk", "11940"],["Suffolk", "11941"],["Suffolk", "11942"],
			["Suffolk", "11944"],["Suffolk", "11946"],["Suffolk", "11947"],["Suffolk", "11948"],["Suffolk", "11949"],["Suffolk", "11950"],["Suffolk", "11951"],["Suffolk", "11952"],["Suffolk", "11953"],["Suffolk", "11954"],
			["Suffolk", "11955"],["Suffolk", "11956"],["Suffolk", "11957"],["Suffolk", "11958"],["Suffolk", "11959"],["Suffolk", "11960"],["Suffolk", "11961"],["Suffolk", "11962"],["Suffolk", "11963"],["Suffolk", "11964"],
			["Suffolk", "11965"],["Suffolk", "11967"],["Suffolk", "11968"],["Suffolk", "11969"],["Suffolk", "11970"],["Suffolk", "11971"],["Suffolk", "11972"],["Suffolk", "11973"],["Suffolk", "11975"],["Suffolk", "11976"],
			["Suffolk", "11977"],["Suffolk", "11978"],["Suffolk", "11980"],["Albany", "12007"],["Schenectady", "12008"],["Albany", "12009"],["Montgomery", "12010"],["Greene", "12015"],["Montgomery", "12016"],["Columbia", "12017"],
			["Rensselaer", "12018"],["Saratoga", "12019"],["Saratoga", "12020"],["Rensselaer", "12022"],["Albany", "12023"],["Rensselaer", "12024"],["Fulton", "12025"],["Saratoga", "12027"],["Rensselaer", "12028"],["Columbia", "12029"],
			["Schoharie", "12031"],["Fulton", "12032"],["Rensselaer", "12033"],["Schoharie", "12035"],["Schoharie", "12036"],["Columbia", "12037"],["Rensselaer", "12040"],["Albany", "12041"],["Greene", "12042"],["Schoharie", "12043"],
			["Albany", "12045"],["Albany", "12046"],["Albany", "12047"],["Columbia", "12050"],["Greene", "12051"],["Rensselaer", "12052"],["Schenectady", "12053"],["Albany", "12054"],["Albany", "12055"],["Schenectady", "12056"],
			["Rensselaer", "12057"],["Greene", "12058"],["Albany", "12059"],["Columbia", "12060"],["Rensselaer", "12061"],["Rensselaer", "12062"],["Rensselaer", "12063"],["Otsego", "12064"],["Saratoga", "12065"],["Montgomery", "12066"],
			["Albany", "12067"],["Montgomery", "12068"],["Montgomery", "12069"],["Montgomery", "12070"],["Schoharie", "12071"],["Montgomery", "12072"],["Schoharie", "12073"],["Saratoga", "12074"],["Columbia", "12075"],["Schoharie", "12076"],
			["Albany", "12077"],["Fulton", "12078"],["Rensselaer", "12082"],["Greene", "12083"],["Albany", "12084"],["Albany", "12085"],["Montgomery", "12086"],["Greene", "12087"],["Rensselaer", "12089"],["Rensselaer", "12090"],
			["Schoharie", "12092"],["Schoharie", "12093"],["Rensselaer", "12094"],["Fulton", "12095"],["Columbia", "12106"],["Albany", "12107"],["Hamilton", "12108"],["Albany", "12110"],["Columbia", "12115"],["Otsego", "12116"],
			["Fulton", "12117"],["Saratoga", "12118"],["Albany", "12120"],["Rensselaer", "12121"],["Schoharie", "12122"],["Rensselaer", "12123"],["Greene", "12124"],["Columbia", "12125"],["Albany", "12128"],["Columbia", "12130"],
			["Schoharie", "12131"],["Columbia", "12132"],["Rensselaer", "12133"],["Fulton", "12134"],["Columbia", "12136"],["Schenectady", "12137"],["Rensselaer", "12138"],["Hamilton", "12139"],["Rensselaer", "12140"],["Schenectady", "12141"],
			["Albany", "12143"],["Rensselaer", "12144"],["Albany", "12147"],["Saratoga", "12148"],["Schoharie", "12149"],["Schenectady", "12150"],["Saratoga", "12151"],["Rensselaer", "12153"],["Rensselaer", "12154"],["Otsego", "12155"],
			["Rensselaer", "12156"],["Schoharie", "12157"],["Albany", "12158"],["Albany", "12159"],["Schoharie", "12160"],["Albany", "12161"],["Hamilton", "12164"],["Columbia", "12165"],["Montgomery", "12166"],["Delaware", "12167"],
			["Rensselaer", "12168"],["Rensselaer", "12169"],["Saratoga", "12170"],["Columbia", "12172"],["Columbia", "12173"],["Columbia", "12174"],["Schoharie", "12175"],["Greene", "12176"],["Montgomery", "12177"],["Rensselaer", "12180"],
			["Rensselaer", "12181"],["Rensselaer", "12182"],["Albany", "12183"],["Columbia", "12184"],["Rensselaer", "12185"],["Albany", "12186"],["Schoharie", "12187"],["Saratoga", "12188"],["Albany", "12189"],["Hamilton", "12190"],
			["Greene", "12192"],["Albany", "12193"],["Schoharie", "12194"],["Columbia", "12195"],["Rensselaer", "12196"],["Otsego", "12197"],["Rensselaer", "12198"],["Albany", "12201"],["Albany", "12202"],["Albany", "12203"],
			["Albany", "12204"],["Albany", "12205"],["Albany", "12206"],["Albany", "12207"],["Albany", "12208"],["Albany", "12209"],["Albany", "12210"],["Albany", "12211"],["Albany", "12212"],["Albany", "12214"],
			["Albany", "12220"],["Albany", "12222"],["Albany", "12223"],["Albany", "12224"],["Albany", "12225"],["Albany", "12226"],["Albany", "12227"],["Albany", "12228"],["Albany", "12229"],["Albany", "12230"],
			["Albany", "12231"],["Albany", "12232"],["Albany", "12233"],["Albany", "12234"],["Albany", "12235"],["Albany", "12236"],["Albany", "12237"],["Albany", "12238"],["Albany", "12239"],["Albany", "12240"],
			["Albany", "12241"],["Albany", "12242"],["Albany", "12243"],["Albany", "12244"],["Albany", "12245"],["Albany", "12246"],["Albany", "12247"],["Albany", "12248"],["Albany", "12249"],["Albany", "12250"],
			["Albany", "12252"],["Albany", "12255"],["Albany", "12256"],["Albany", "12257"],["Albany", "12260"],["Albany", "12261"],["Albany", "12288"],["Schenectady", "12301"],["Schenectady", "12302"],["Schenectady", "12303"],
			["Schenectady", "12304"],["Schenectady", "12305"],["Schenectady", "12306"],["Schenectady", "12307"],["Schenectady", "12308"],["Schenectady", "12309"],["Schenectady", "12325"],["Schenectady", "12345"],["Ulster", "12401"],["Ulster", "12402"],
			["Ulster", "12404"],["Greene", "12405"],["Delaware", "12406"],["Greene", "12407"],["Ulster", "12409"],["Ulster", "12410"],["Ulster", "12411"],["Ulster", "12412"],["Greene", "12413"],["Greene", "12414"],
			["Ulster", "12416"],["Ulster", "12417"],["Greene", "12418"],["Ulster", "12419"],["Ulster", "12420"],["Delaware", "12421"],["Greene", "12422"],["Greene", "12423"],["Greene", "12424"],["Greene", "12427"],
			["Ulster", "12428"],["Ulster", "12429"],["Delaware", "12430"],["Greene", "12431"],["Ulster", "12432"],["Ulster", "12433"],["Delaware", "12434"],["Ulster", "12435"],["Greene", "12436"],["Delaware", "12438"],
			["Greene", "12439"],["Ulster", "12440"],["Ulster", "12441"],["Greene", "12442"],["Ulster", "12443"],["Greene", "12444"],["Ulster", "12446"],["Ulster", "12448"],["Ulster", "12449"],["Greene", "12450"],
			["Greene", "12451"],["Greene", "12452"],["Ulster", "12453"],["Greene", "12454"],["Delaware", "12455"],["Ulster", "12456"],["Ulster", "12457"],["Ulster", "12458"],["Delaware", "12459"],["Greene", "12460"],
			["Ulster", "12461"],["Greene", "12463"],["Ulster", "12464"],["Ulster", "12465"],["Ulster", "12466"],["Greene", "12468"],["Albany", "12469"],["Greene", "12470"],["Ulster", "12471"],["Ulster", "12472"],
			["Greene", "12473"],["Delaware", "12474"],["Ulster", "12475"],["Ulster", "12477"],["Ulster", "12480"],["Ulster", "12481"],["Greene", "12482"],["Ulster", "12483"],["Ulster", "12484"],["Greene", "12485"],
			["Ulster", "12486"],["Ulster", "12487"],["Ulster", "12489"],["Ulster", "12490"],["Ulster", "12491"],["Greene", "12492"],["Ulster", "12493"],["Ulster", "12494"],["Ulster", "12495"],["Greene", "12496"],
			["Ulster", "12498"],["Dutchess", "12501"],["Columbia", "12502"],["Columbia", "12503"],["Dutchess", "12504"],["Dutchess", "12506"],["Dutchess", "12507"],["Dutchess", "12508"],["Dutchess", "12510"],["Dutchess", "12511"],
			["Dutchess", "12512"],["Columbia", "12513"],["Dutchess", "12514"],["Ulster", "12515"],["Columbia", "12516"],["Columbia", "12517"],["Orange", "12518"],["Orange", "12520"],["Columbia", "12521"],["Dutchess", "12522"],
			["Columbia", "12523"],["Dutchess", "12524"],["Ulster", "12525"],["Columbia", "12526"],["Dutchess", "12527"],["Ulster", "12528"],["Columbia", "12529"],["Columbia", "12530"],["Dutchess", "12531"],["Dutchess", "12533"],
			["Columbia", "12534"],["Dutchess", "12537"],["Dutchess", "12538"],["Dutchess", "12540"],["Columbia", "12541"],["Ulster", "12542"],["Orange", "12543"],["Columbia", "12544"],["Dutchess", "12545"],["Dutchess", "12546"],
			["Ulster", "12547"],["Ulster", "12548"],["Orange", "12549"],["Orange", "12550"],["Orange", "12551"],["Orange", "12552"],["Orange", "12553"],["Orange", "12555"],["Ulster", "12561"],["Putnam", "12563"],
			["Dutchess", "12564"],["Columbia", "12565"],["Orange", "12566"],["Dutchess", "12567"],["Ulster", "12568"],["Dutchess", "12569"],["Dutchess", "12570"],["Dutchess", "12571"],["Dutchess", "12572"],["Dutchess", "12574"],
			["Orange", "12575"],["Orange", "12577"],["Dutchess", "12578"],["Dutchess", "12580"],["Dutchess", "12581"],["Dutchess", "12582"],["Dutchess", "12583"],["Orange", "12584"],["Dutchess", "12585"],["Orange", "12586"],
			["Ulster", "12588"],["Ulster", "12589"],["Dutchess", "12590"],["Dutchess", "12592"],["Columbia", "12593"],["Dutchess", "12594"],["Dutchess", "12601"],["Dutchess", "12602"],["Dutchess", "12603"],["Dutchess", "12604"],
			["Sullivan", "12701"],["Sullivan", "12719"],["Sullivan", "12720"],["Sullivan", "12721"],["Sullivan", "12722"],["Sullivan", "12723"],["Sullivan", "12724"],["Sullivan", "12725"],["Sullivan", "12726"],["Sullivan", "12727"],
			["Orange", "12729"],["Sullivan", "12732"],["Sullivan", "12733"],["Sullivan", "12734"],["Sullivan", "12736"],["Sullivan", "12737"],["Sullivan", "12738"],["Sullivan", "12740"],["Sullivan", "12741"],["Sullivan", "12742"],
			["Sullivan", "12743"],["Sullivan", "12745"],["Orange", "12746"],["Sullivan", "12747"],["Sullivan", "12748"],["Sullivan", "12749"],["Sullivan", "12750"],["Sullivan", "12751"],["Sullivan", "12752"],["Sullivan", "12754"],
			["Sullivan", "12758"],["Sullivan", "12759"],["Sullivan", "12760"],["Sullivan", "12762"],["Sullivan", "12763"],["Sullivan", "12764"],["Sullivan", "12765"],["Sullivan", "12766"],["Sullivan", "12767"],["Sullivan", "12768"],
			["Sullivan", "12769"],["Sullivan", "12770"],["Orange", "12771"],["Sullivan", "12775"],["Sullivan", "12776"],["Sullivan", "12777"],["Sullivan", "12778"],["Sullivan", "12779"],["Orange", "12780"],["Sullivan", "12781"],
			["Sullivan", "12783"],["Sullivan", "12784"],["Sullivan", "12785"],["Sullivan", "12786"],["Sullivan", "12787"],["Sullivan", "12788"],["Sullivan", "12789"],["Sullivan", "12790"],["Sullivan", "12791"],["Sullivan", "12792"],
			["Warren", "12801"],["Saratoga", "12803"],["Warren", "12804"],["Warren", "12808"],["Washington", "12809"],["Warren", "12810"],["Warren", "12811"],["Hamilton", "12812"],["Warren", "12814"],["Warren", "12815"],
			["Washington", "12816"],["Warren", "12817"],["Washington", "12819"],["Warren", "12820"],["Washington", "12821"],["Saratoga", "12822"],["Washington", "12823"],["Warren", "12824"],["Washington", "12827"],["Washington", "12828"],
			["Saratoga", "12831"],["Washington", "12832"],["Saratoga", "12833"],["Washington", "12834"],["Saratoga", "12835"],["Warren", "12836"],["Washington", "12837"],["Washington", "12838"],["Washington", "12839"],["Washington", "12841"],
			["Hamilton", "12842"],["Warren", "12843"],["Warren", "12844"],["Warren", "12845"],["Warren", "12846"],["Hamilton", "12847"],["Washington", "12848"],["Washington", "12849"],["Saratoga", "12850"],["Essex", "12851"],
			["Essex", "12852"],["Warren", "12853"],["Washington", "12854"],["Essex", "12855"],["Warren", "12856"],["Essex", "12857"],["Essex", "12858"],["Saratoga", "12859"],["Warren", "12860"],["Washington", "12861"],
			["Warren", "12862"],["Saratoga", "12863"],["Hamilton", "12864"],["Washington", "12865"],["Saratoga", "12866"],["Essex", "12870"],["Saratoga", "12871"],["Essex", "12872"],["Washington", "12873"],["Warren", "12874"],
			["Warren", "12878"],["Essex", "12879"],["Essex", "12883"],["Saratoga", "12884"],["Warren", "12885"],["Warren", "12886"],["Washington", "12887"],["Clinton", "12901"],["Clinton", "12903"],["Clinton", "12910"],
			["Clinton", "12911"],["Clinton", "12912"],["Essex", "12913"],["Franklin", "12914"],["Franklin", "12915"],["Franklin", "12916"],["Franklin", "12917"],["Clinton", "12918"],["Clinton", "12919"],["Franklin", "12920"],
			["Clinton", "12921"],["Saint Lawrence", "12922"],["Clinton", "12923"],["Clinton", "12924"],["Franklin", "12926"],["Saint Lawrence", "12927"],["Essex", "12928"],["Clinton", "12929"],["Franklin", "12930"],["Essex", "12932"],
			["Clinton", "12933"],["Clinton", "12934"],["Clinton", "12935"],["Essex", "12936"],["Franklin", "12937"],["Franklin", "12939"],["Essex", "12941"],["Essex", "12942"],["Essex", "12943"],["Clinton", "12944"],
			["Franklin", "12945"],["Essex", "12946"],["Saint Lawrence", "12949"],["Essex", "12950"],["Clinton", "12952"],["Franklin", "12953"],["Clinton", "12955"],["Essex", "12956"],["Franklin", "12957"],["Clinton", "12958"],
			["Clinton", "12959"],["Essex", "12960"],["Essex", "12961"],["Clinton", "12962"],["Essex", "12964"],["Saint Lawrence", "12965"],["Franklin", "12966"],["Saint Lawrence", "12967"],["Franklin", "12969"],["Franklin", "12970"],
			["Clinton", "12972"],["Saint Lawrence", "12973"],["Essex", "12974"],["Essex", "12975"],["Franklin", "12976"],["Essex", "12977"],["Clinton", "12978"],["Clinton", "12979"],["Franklin", "12980"],["Clinton", "12981"],
			["Franklin", "12983"],["Clinton", "12985"],["Franklin", "12986"],["Essex", "12987"],["Franklin", "12989"],["Clinton", "12992"],["Essex", "12993"],["Franklin", "12995"],["Essex", "12996"],["Essex", "12997"],
			["Essex", "12998"],["Onondaga", "13020"],["Cayuga", "13021"],["Cayuga", "13022"],["Cayuga", "13024"],["Cayuga", "13026"],["Onondaga", "13027"],["Oswego", "13028"],["Onondaga", "13029"],["Onondaga", "13030"],
			["Onondaga", "13031"],["Madison", "13032"],["Cayuga", "13033"],["Cayuga", "13034"],["Madison", "13035"],["Oswego", "13036"],["Madison", "13037"],["Onondaga", "13039"],["Cortland", "13040"],["Onondaga", "13041"],
			["Oswego", "13042"],["Madison", "13043"],["Oswego", "13044"],["Cortland", "13045"],["Onondaga", "13051"],["Madison", "13052"],["Tompkins", "13053"],["Oneida", "13054"],["Cortland", "13056"],["Onondaga", "13057"],
			["Onondaga", "13060"],["Madison", "13061"],["Tompkins", "13062"],["Onondaga", "13063"],["Cayuga", "13064"],["Seneca", "13065"],["Onondaga", "13066"],["Tompkins", "13068"],["Oswego", "13069"],["Cayuga", "13071"],
			["Madison", "13072"],["Tompkins", "13073"],["Oswego", "13074"],["Oswego", "13076"],["Cortland", "13077"],["Onondaga", "13078"],["Onondaga", "13080"],["Cayuga", "13081"],["Onondaga", "13082"],["Oswego", "13083"],
			["Onondaga", "13084"],["Cortland", "13087"],["Onondaga", "13088"],["Onondaga", "13089"],["Onondaga", "13090"],["Tompkins", "13092"],["Oswego", "13093"],["Cortland", "13101"],["Tompkins", "13102"],["Oswego", "13103"],
			["Onondaga", "13104"],["Oswego", "13107"],["Onondaga", "13108"],["Onondaga", "13110"],["Cayuga", "13111"],["Onondaga", "13112"],["Cayuga", "13113"],["Oswego", "13114"],["Oswego", "13115"],["Onondaga", "13116"],
			["Cayuga", "13117"],["Cayuga", "13118"],["Onondaga", "13119"],["Onondaga", "13120"],["Oswego", "13121"],["Madison", "13122"],["Oneida", "13123"],["Chenango", "13124"],["Oswego", "13126"],["Oswego", "13131"],
			["Oswego", "13132"],["Madison", "13134"],["Oswego", "13135"],["Chenango", "13136"],["Onondaga", "13137"],["Onondaga", "13138"],["Cayuga", "13139"],["Cayuga", "13140"],["Cortland", "13141"],["Oswego", "13142"],
			["Wayne", "13143"],["Oswego", "13144"],["Oswego", "13145"],["Wayne", "13146"],["Cayuga", "13147"],["Seneca", "13148"],["Onondaga", "13152"],["Onondaga", "13153"],["Wayne", "13154"],["Chenango", "13155"],
			["Cayuga", "13156"],["Oneida", "13157"],["Cortland", "13158"],["Onondaga", "13159"],["Cayuga", "13160"],["Oneida", "13162"],["Madison", "13163"],["Onondaga", "13164"],["Seneca", "13165"],["Cayuga", "13166"],
			["Oswego", "13167"],["Onondaga", "13201"],["Onondaga", "13202"],["Onondaga", "13203"],["Onondaga", "13204"],["Onondaga", "13205"],["Onondaga", "13206"],["Onondaga", "13207"],["Onondaga", "13208"],["Onondaga", "13209"],
			["Onondaga", "13210"],["Onondaga", "13211"],["Onondaga", "13212"],["Onondaga", "13214"],["Onondaga", "13215"],["Onondaga", "13217"],["Onondaga", "13218"],["Onondaga", "13219"],["Onondaga", "13220"],["Onondaga", "13221"],
			["Onondaga", "13224"],["Onondaga", "13225"],["Onondaga", "13235"],["Onondaga", "13244"],["Onondaga", "13250"],["Onondaga", "13251"],["Onondaga", "13252"],["Onondaga", "13261"],["Onondaga", "13290"],["Oneida", "13301"],
			["Oswego", "13302"],["Oneida", "13303"],["Oneida", "13304"],["Lewis", "13305"],["Oneida", "13308"],["Oneida", "13309"],["Madison", "13310"],["Lewis", "13312"],["Oneida", "13313"],["Madison", "13314"],
			["Otsego", "13315"],["Oneida", "13316"],["Montgomery", "13317"],["Oneida", "13318"],["Oneida", "13319"],["Montgomery", "13320"],["Oneida", "13321"],["Oneida", "13322"],["Oneida", "13323"],["Herkimer", "13324"],
			["Lewis", "13325"],["Otsego", "13326"],["Lewis", "13327"],["Oneida", "13328"],["Herkimer", "13329"],["Herkimer", "13331"],["Chenango", "13332"],["Otsego", "13333"],["Madison", "13334"],["Otsego", "13335"],
			["Otsego", "13337"],["Oneida", "13338"],["Montgomery", "13339"],["Herkimer", "13340"],["Oneida", "13341"],["Otsego", "13342"],["Lewis", "13343"],["Lewis", "13345"],["Madison", "13346"],["Otsego", "13348"],
			["Herkimer", "13350"],["Oneida", "13352"],["Hamilton", "13353"],["Oneida", "13354"],["Madison", "13355"],["Herkimer", "13357"],["Hamilton", "13360"],["Herkimer", "13361"],["Oneida", "13362"],["Oneida", "13363"],
			["Madison", "13364"],["Herkimer", "13365"],["Lewis", "13367"],["Lewis", "13368"],["Oneida", "13401"],["Madison", "13402"],["Oneida", "13403"],["Lewis", "13404"],["Herkimer", "13406"],["Herkimer", "13407"],
			["Madison", "13408"],["Madison", "13409"],["Montgomery", "13410"],["Chenango", "13411"],["Oneida", "13413"],["Otsego", "13415"],["Herkimer", "13416"],["Oneida", "13417"],["Madison", "13418"],["Herkimer", "13420"],
			["Madison", "13421"],["Oneida", "13424"],["Oneida", "13425"],["Oswego", "13426"],["Montgomery", "13428"],["Herkimer", "13431"],["Lewis", "13433"],["Oneida", "13435"],["Hamilton", "13436"],["Oswego", "13437"],
			["Oneida", "13438"],["Otsego", "13439"],["Oneida", "13440"],["Oneida", "13441"],["Oneida", "13442"],["Oneida", "13449"],["Otsego", "13450"],["Montgomery", "13452"],["Herkimer", "13454"],["Oneida", "13455"],
			["Oneida", "13456"],["Otsego", "13457"],["Schoharie", "13459"],["Chenango", "13460"],["Oneida", "13461"],["Chenango", "13464"],["Madison", "13465"],["Otsego", "13468"],["Oneida", "13469"],["Fulton", "13470"],
			["Oneida", "13471"],["Herkimer", "13472"],["Lewis", "13473"],["Herkimer", "13475"],["Oneida", "13476"],["Oneida", "13477"],["Oneida", "13478"],["Oneida", "13479"],["Oneida", "13480"],["Otsego", "13482"],
			["Oneida", "13483"],["Madison", "13484"],["Madison", "13485"],["Oneida", "13486"],["Otsego", "13488"],["Lewis", "13489"],["Oneida", "13490"],["Herkimer", "13491"],["Oneida", "13492"],["Oswego", "13493"],
			["Oneida", "13494"],["Oneida", "13495"],["Oneida", "13501"],["Oneida", "13502"],["Oneida", "13503"],["Oneida", "13504"],["Oneida", "13505"],["Oneida", "13599"],["Jefferson", "13601"],["Jefferson", "13602"],
			["Jefferson", "13603"],["Jefferson", "13605"],["Jefferson", "13606"],["Jefferson", "13607"],["Jefferson", "13608"],["Jefferson", "13611"],["Jefferson", "13612"],["Saint Lawrence", "13613"],["Saint Lawrence", "13614"],["Jefferson", "13615"],
			["Jefferson", "13616"],["Saint Lawrence", "13617"],["Jefferson", "13618"],["Jefferson", "13619"],["Lewis", "13620"],["Saint Lawrence", "13621"],["Jefferson", "13622"],["Saint Lawrence", "13623"],["Jefferson", "13624"],["Saint Lawrence", "13625"],
			["Lewis", "13626"],["Lewis", "13627"],["Jefferson", "13628"],["Saint Lawrence", "13630"],["Lewis", "13631"],["Jefferson", "13632"],["Saint Lawrence", "13633"],["Jefferson", "13634"],["Saint Lawrence", "13635"],["Jefferson", "13636"],
			["Jefferson", "13637"],["Jefferson", "13638"],["Saint Lawrence", "13639"],["Jefferson", "13640"],["Jefferson", "13641"],["Saint Lawrence", "13642"],["Jefferson", "13643"],["Saint Lawrence", "13645"],["Saint Lawrence", "13646"],["Saint Lawrence", "13647"],
			["Lewis", "13648"],["Saint Lawrence", "13649"],["Jefferson", "13650"],["Jefferson", "13651"],["Saint Lawrence", "13652"],["Saint Lawrence", "13654"],["Franklin", "13655"],["Jefferson", "13656"],["Jefferson", "13657"],["Saint Lawrence", "13658"],
			["Jefferson", "13659"],["Saint Lawrence", "13660"],["Jefferson", "13661"],["Saint Lawrence", "13662"],["Saint Lawrence", "13664"],["Jefferson", "13665"],["Saint Lawrence", "13666"],["Saint Lawrence", "13667"],["Saint Lawrence", "13668"],["Saint Lawrence", "13669"],
			["Saint Lawrence", "13670"],["Jefferson", "13671"],["Saint Lawrence", "13672"],["Jefferson", "13673"],["Jefferson", "13674"],["Jefferson", "13675"],["Saint Lawrence", "13676"],["Saint Lawrence", "13677"],["Saint Lawrence", "13678"],["Jefferson", "13679"],
			["Saint Lawrence", "13680"],["Saint Lawrence", "13681"],["Jefferson", "13682"],["Saint Lawrence", "13683"],["Saint Lawrence", "13684"],["Jefferson", "13685"],["Saint Lawrence", "13687"],["Saint Lawrence", "13690"],["Jefferson", "13691"],["Jefferson", "13692"],
			["Jefferson", "13693"],["Saint Lawrence", "13694"],["Saint Lawrence", "13695"],["Saint Lawrence", "13696"],["Saint Lawrence", "13697"],["Saint Lawrence", "13699"],["Chenango", "13730"],["Delaware", "13731"],["Tioga", "13732"],["Chenango", "13733"],
			["Tioga", "13734"],["Tioga", "13736"],["Broome", "13737"],["Cortland", "13738"],["Delaware", "13739"],["Delaware", "13740"],["Tioga", "13743"],["Broome", "13744"],["Broome", "13745"],["Broome", "13746"],
			["Otsego", "13747"],["Broome", "13748"],["Broome", "13749"],["Delaware", "13750"],["Delaware", "13751"],["Delaware", "13752"],["Delaware", "13753"],["Broome", "13754"],["Delaware", "13755"],["Delaware", "13756"],
			["Delaware", "13757"],["Chenango", "13758"],["Broome", "13760"],["Broome", "13761"],["Broome", "13762"],["Broome", "13763"],["Delaware", "13774"],["Delaware", "13775"],["Otsego", "13776"],["Broome", "13777"],
			["Chenango", "13778"],["Chenango", "13780"],["Delaware", "13782"],["Delaware", "13783"],["Cortland", "13784"],["Delaware", "13786"],["Broome", "13787"],["Delaware", "13788"],["Broome", "13790"],["Broome", "13794"],
			["Broome", "13795"],["Otsego", "13796"],["Broome", "13797"],["Chenango", "13801"],["Broome", "13802"],["Cortland", "13803"],["Delaware", "13804"],["Delaware", "13806"],["Otsego", "13807"],["Otsego", "13808"],
			["Chenango", "13809"],["Otsego", "13810"],["Tioga", "13811"],["Tioga", "13812"],["Broome", "13813"],["Chenango", "13814"],["Chenango", "13815"],["Otsego", "13820"],["Otsego", "13825"],["Broome", "13826"],
			["Tioga", "13827"],["Chenango", "13830"],["Chenango", "13832"],["Broome", "13833"],["Otsego", "13834"],["Tioga", "13835"],["Delaware", "13837"],["Delaware", "13838"],["Delaware", "13839"],["Tioga", "13840"],
			["Chenango", "13841"],["Delaware", "13842"],["Chenango", "13843"],["Chenango", "13844"],["Tioga", "13845"],["Delaware", "13846"],["Delaware", "13847"],["Broome", "13848"],["Otsego", "13849"],["Broome", "13850"],
			["Broome", "13851"],["Delaware", "13856"],["Otsego", "13859"],["Delaware", "13860"],["Otsego", "13861"],["Broome", "13862"],["Cortland", "13863"],["Tioga", "13864"],["Broome", "13865"],["Broome", "13901"],
			["Broome", "13902"],["Broome", "13903"],["Broome", "13904"],["Broome", "13905"],["Erie", "14001"],["Erie", "14004"],["Genesee", "14005"],["Erie", "14006"],["Niagara", "14008"],["Wyoming", "14009"],
			["Erie", "14010"],["Wyoming", "14011"],["Niagara", "14012"],["Genesee", "14013"],["Genesee", "14020"],["Genesee", "14021"],["Wyoming", "14024"],["Erie", "14025"],["Erie", "14026"],["Erie", "14027"],
			["Niagara", "14028"],["Allegany", "14029"],["Erie", "14030"],["Erie", "14031"],["Erie", "14032"],["Erie", "14033"],["Erie", "14034"],["Erie", "14035"],["Genesee", "14036"],["Wyoming", "14037"],
			["Erie", "14038"],["Wyoming", "14039"],["Genesee", "14040"],["Cattaraugus", "14041"],["Cattaraugus", "14042"],["Erie", "14043"],["Erie", "14047"],["Chautauqua", "14048"],["Erie", "14051"],["Erie", "14052"],
			["Genesee", "14054"],["Erie", "14055"],["Genesee", "14056"],["Erie", "14057"],["Genesee", "14058"],["Erie", "14059"],["Cattaraugus", "14060"],["Erie", "14061"],["Chautauqua", "14062"],["Chautauqua", "14063"],
			["Cattaraugus", "14065"],["Wyoming", "14066"],["Niagara", "14067"],["Erie", "14068"],["Erie", "14069"],["Cattaraugus", "14070"],["Erie", "14072"],["Erie", "14075"],["Erie", "14080"],["Chautauqua", "14081"],
			["Wyoming", "14082"],["Wyoming", "14083"],["Erie", "14085"],["Erie", "14086"],["Erie", "14091"],["Niagara", "14092"],["Niagara", "14094"],["Niagara", "14095"],["Orleans", "14098"],["Cattaraugus", "14101"],
			["Erie", "14102"],["Orleans", "14103"],["Niagara", "14105"],["Niagara", "14107"],["Niagara", "14108"],["Niagara", "14109"],["Erie", "14110"],["Erie", "14111"],["Erie", "14112"],["Wyoming", "14113"],
			["Niagara", "14120"],["Genesee", "14125"],["Niagara", "14126"],["Erie", "14127"],["Cattaraugus", "14129"],["Wyoming", "14130"],["Niagara", "14131"],["Niagara", "14132"],["Cattaraugus", "14133"],["Erie", "14134"],
			["Chautauqua", "14135"],["Chautauqua", "14136"],["Cattaraugus", "14138"],["Erie", "14139"],["Erie", "14140"],["Erie", "14141"],["Genesee", "14143"],["Niagara", "14144"],["Wyoming", "14145"],["Erie", "14150"],
			["Erie", "14151"],["Chautauqua", "14166"],["Wyoming", "14167"],["Cattaraugus", "14168"],["Erie", "14169"],["Erie", "14170"],["Cattaraugus", "14171"],["Niagara", "14172"],["Cattaraugus", "14173"],["Niagara", "14174"],
			["Erie", "14201"],["Erie", "14202"],["Erie", "14203"],["Erie", "14204"],["Erie", "14205"],["Erie", "14206"],["Erie", "14207"],["Erie", "14208"],["Erie", "14209"],["Erie", "14210"],
			["Erie", "14211"],["Erie", "14212"],["Erie", "14213"],["Erie", "14214"],["Erie", "14215"],["Erie", "14216"],["Erie", "14217"],["Erie", "14218"],["Erie", "14219"],["Erie", "14220"],
			["Erie", "14221"],["Erie", "14222"],["Erie", "14223"],["Erie", "14224"],["Erie", "14225"],["Erie", "14226"],["Erie", "14227"],["Erie", "14228"],["Erie", "14231"],["Erie", "14233"],
			["Erie", "14240"],["Erie", "14241"],["Erie", "14260"],["Erie", "14261"],["Erie", "14263"],["Erie", "14264"],["Erie", "14265"],["Erie", "14267"],["Erie", "14269"],["Erie", "14270"],
			["Erie", "14272"],["Erie", "14273"],["Erie", "14276"],["Erie", "14280"],["Niagara", "14301"],["Niagara", "14302"],["Niagara", "14303"],["Niagara", "14304"],["Niagara", "14305"],["Monroe", "14410"],
			["Orleans", "14411"],["Wayne", "14413"],["Livingston", "14414"],["Yates", "14415"],["Genesee", "14416"],["Yates", "14418"],["Monroe", "14420"],["Genesee", "14422"],["Livingston", "14423"],["Ontario", "14424"],
			["Ontario", "14425"],["Wyoming", "14427"],["Monroe", "14428"],["Orleans", "14429"],["Monroe", "14430"],["Ontario", "14432"],["Wayne", "14433"],["Livingston", "14435"],["Livingston", "14437"],["Yates", "14441"],
			["Ontario", "14443"],["Monroe", "14445"],["Wayne", "14449"],["Monroe", "14450"],["Orleans", "14452"],["Ontario", "14453"],["Livingston", "14454"],["Ontario", "14456"],["Ontario", "14461"],["Livingston", "14462"],
			["Ontario", "14463"],["Monroe", "14464"],["Livingston", "14466"],["Monroe", "14467"],["Monroe", "14468"],["Ontario", "14469"],["Orleans", "14470"],["Ontario", "14471"],["Monroe", "14472"],["Ontario", "14475"],
			["Orleans", "14476"],["Orleans", "14477"],["Yates", "14478"],["Orleans", "14479"],["Livingston", "14480"],["Livingston", "14481"],["Genesee", "14482"],["Livingston", "14485"],["Genesee", "14486"],["Livingston", "14487"],
			["Livingston", "14488"],["Wayne", "14489"],["Wayne", "14502"],["Ontario", "14504"],["Wayne", "14505"],["Monroe", "14506"],["Yates", "14507"],["Monroe", "14508"],["Livingston", "14510"],["Monroe", "14511"],
			["Ontario", "14512"],["Wayne", "14513"],["Monroe", "14514"],["Monroe", "14515"],["Wayne", "14516"],["Livingston", "14517"],["Ontario", "14518"],["Wayne", "14519"],["Wayne", "14520"],["Seneca", "14521"],
			["Wayne", "14522"],["Genesee", "14525"],["Monroe", "14526"],["Yates", "14527"],["Steuben", "14529"],["Wyoming", "14530"],["Ontario", "14532"],["Livingston", "14533"],["Monroe", "14534"],["Wyoming", "14536"],
			["Ontario", "14537"],["Wayne", "14538"],["Livingston", "14539"],["Seneca", "14541"],["Wayne", "14542"],["Monroe", "14543"],["Yates", "14544"],["Livingston", "14545"],["Monroe", "14546"],["Ontario", "14547"],
			["Ontario", "14548"],["Wyoming", "14549"],["Wyoming", "14550"],["Wayne", "14551"],["Wayne", "14555"],["Livingston", "14556"],["Genesee", "14557"],["Livingston", "14558"],["Monroe", "14559"],["Livingston", "14560"],
			["Ontario", "14561"],["Wayne", "14563"],["Ontario", "14564"],["Wayne", "14568"],["Wyoming", "14569"],["Orleans", "14571"],["Steuben", "14572"],["Monroe", "14580"],["Ontario", "14585"],["Monroe", "14586"],
			["Seneca", "14588"],["Wayne", "14589"],["Wayne", "14590"],["Wyoming", "14591"],["Livingston", "14592"],["Monroe", "14602"],["Monroe", "14603"],["Monroe", "14604"],["Monroe", "14605"],["Monroe", "14606"],
			["Monroe", "14607"],["Monroe", "14608"],["Monroe", "14609"],["Monroe", "14610"],["Monroe", "14611"],["Monroe", "14612"],["Monroe", "14613"],["Monroe", "14614"],["Monroe", "14615"],["Monroe", "14616"],
			["Monroe", "14617"],["Monroe", "14618"],["Monroe", "14619"],["Monroe", "14620"],["Monroe", "14621"],["Monroe", "14622"],["Monroe", "14623"],["Monroe", "14624"],["Monroe", "14625"],["Monroe", "14626"],
			["Monroe", "14627"],["Monroe", "14638"],["Monroe", "14639"],["Monroe", "14642"],["Monroe", "14643"],["Monroe", "14644"],["Monroe", "14645"],["Monroe", "14646"],["Monroe", "14647"],["Monroe", "14649"],
			["Monroe", "14650"],["Monroe", "14651"],["Monroe", "14652"],["Monroe", "14653"],["Monroe", "14664"],["Monroe", "14673"],["Monroe", "14683"],["Monroe", "14692"],["Monroe", "14694"],["Chautauqua", "14701"],
			["Chautauqua", "14702"],["Cattaraugus", "14706"],["Allegany", "14707"],["Allegany", "14708"],["Allegany", "14709"],["Chautauqua", "14710"],["Allegany", "14711"],["Chautauqua", "14712"],["Allegany", "14714"],["Allegany", "14715"],
			["Chautauqua", "14716"],["Allegany", "14717"],["Chautauqua", "14718"],["Cattaraugus", "14719"],["Chautauqua", "14720"],["Allegany", "14721"],["Chautauqua", "14722"],["Chautauqua", "14723"],["Chautauqua", "14724"],["Cattaraugus", "14726"],
			["Allegany", "14727"],["Chautauqua", "14728"],["Cattaraugus", "14729"],["Cattaraugus", "14730"],["Cattaraugus", "14731"],["Chautauqua", "14732"],["Chautauqua", "14733"],["Allegany", "14735"],["Chautauqua", "14736"],["Cattaraugus", "14737"],
			["Chautauqua", "14738"],["Allegany", "14739"],["Chautauqua", "14740"],["Cattaraugus", "14741"],["Chautauqua", "14742"],["Cattaraugus", "14743"],["Allegany", "14744"],["Allegany", "14745"],["Chautauqua", "14747"],["Cattaraugus", "14748"],
			["Chautauqua", "14750"],["Cattaraugus", "14751"],["Chautauqua", "14752"],["Cattaraugus", "14753"],["Allegany", "14754"],["Cattaraugus", "14755"],["Chautauqua", "14756"],["Chautauqua", "14757"],["Chautauqua", "14758"],["Cattaraugus", "14760"],
			["Cattaraugus", "14766"],["Chautauqua", "14767"],["Chautauqua", "14769"],["Cattaraugus", "14770"],["Cattaraugus", "14772"],["Allegany", "14774"],["Chautauqua", "14775"],["Allegany", "14777"],["Cattaraugus", "14778"],["Cattaraugus", "14779"],
			["Chautauqua", "14781"],["Chautauqua", "14782"],["Cattaraugus", "14783"],["Chautauqua", "14784"],["Chautauqua", "14785"],["Allegany", "14786"],["Chautauqua", "14787"],["Cattaraugus", "14788"],["Steuben", "14801"],["Allegany", "14802"],
			["Allegany", "14803"],["Allegany", "14804"],["Schuyler", "14805"],["Allegany", "14806"],["Steuben", "14807"],["Steuben", "14808"],["Steuben", "14809"],["Steuben", "14810"],["Schuyler", "14812"],["Allegany", "14813"],
			["Chemung", "14814"],["Schuyler", "14815"],["Chemung", "14816"],["Tompkins", "14817"],["Schuyler", "14818"],["Steuben", "14819"],["Steuben", "14820"],["Steuben", "14821"],["Allegany", "14822"],["Steuben", "14823"],
			["Schuyler", "14824"],["Chemung", "14825"],["Steuben", "14826"],["Steuben", "14827"],["Steuben", "14830"],["Steuben", "14831"],["Livingston", "14836"],["Yates", "14837"],["Chemung", "14838"],["Steuben", "14839"],
			["Steuben", "14840"],["Schuyler", "14841"],["Yates", "14842"],["Steuben", "14843"],["Chemung", "14845"],["Livingston", "14846"],["Seneca", "14847"],["Tompkins", "14850"],["Tompkins", "14851"],["Tompkins", "14852"],
			["Tompkins", "14853"],["Tompkins", "14854"],["Steuben", "14855"],["Steuben", "14856"],["Yates", "14857"],["Steuben", "14858"],["Tioga", "14859"],["Seneca", "14860"],["Chemung", "14861"],["Schuyler", "14863"],
			["Chemung", "14864"],["Schuyler", "14865"],["Tompkins", "14867"],["Schuyler", "14869"],["Steuben", "14870"],["Chemung", "14871"],["Chemung", "14872"],["Steuben", "14873"],["Steuben", "14874"],["Schuyler", "14876"],
			["Steuben", "14877"],["Schuyler", "14878"],["Steuben", "14879"],["Allegany", "14880"],["Tompkins", "14881"],["Tompkins", "14882"],["Tioga", "14883"],["Allegany", "14884"],["Steuben", "14885"],["Tompkins", "14886"],
			["Schuyler", "14887"],["Chemung", "14889"],["Schuyler", "14891"],["Tioga", "14892"],["Schuyler", "14893"],["Chemung", "14894"],["Allegany", "14895"],["Allegany", "14897"],["Steuben", "14898"],["Chemung", "14901"],
			["Chemung", "14902"],["Chemung", "14903"],["Chemung", "14904"],["Chemung", "14905"],["Chemung", "14925"]
		];

		console.log("starting build");

		let ix = -1;

		console.log("starting phones");

		counties_num.forEach((c)=>{
			if(c !== undefined){
				ix = counties_obj.findIndex(n=>n.name === c[0]);
				if(ix >= 0)
					counties_obj[ix].phone = c[1];
			}
		});

		console.log("starting zips");

		counties_zips.forEach((c)=>{
			ix = counties_obj.findIndex(n=>n.name === c[0]);
			if(ix >= 0)
				counties_obj[ix].addZip(c[1]);
		});

		console.log("ending build");

		counties_obj.filter(c=>c.phone == "").forEach(c=>console.log(c.name));

		this.data.output.innerHTML = JSON.stringify(counties_obj);

		//this.initialize();

		//this.boroughManager = new BoroughManager();
	}
}

class County{
	constructor(name){
		this.name = name;
		this.phone = "347-396-4100";
		this.zips = [];
	}

	addZip(zip){
		if(this.zips.indexOf(zip) < 0)
			this.zips.push(zip);
	}

	finalize(){
		this.zips.sort();
	}
}