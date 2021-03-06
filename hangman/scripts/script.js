let colors = [
      [62, 35, 255],
      [60, 255, 60],
      [255, 35, 98],
      [45, 175, 230],
      [255, 0, 255],
      [255, 128, 0]
    ],
    step = 0,
    colorIndices = [0, 1, 2, 3],
    gradientSpeed = 0.002;

function updateGradient() {
  let c0_0 = colors[colorIndices[0]];
  let c0_1 = colors[colorIndices[1]];
  let c1_0 = colors[colorIndices[2]];
  let c1_1 = colors[colorIndices[3]];
  let istep = 1 - step;
  let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  let color1 = `rgb(${r1},${g1},${b1})`;
  let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  let color2 = `rgb(${r2},${g2},${b2})`;
  $('#gradient')
      .css({
        background: `-webkit-gradient(linear, left top, right top, from(${color1}), to(${color2}))`
      })
      .css({
        background: `-moz-linear-gradient(left, ${color1} 0%, ${color2} 100%)`
      });
  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
  }
}
setInterval(updateGradient, 10);
const words = new Map([
  ["accord", "concurrence of opinion"],
  ["credit", "an estimate of ability to fulfill financial commitments"],
  ["essay", "an analytic or interpretive literary composition"],
  ["consul", "a diplomat appointed to protect a government's interests"],
  ["credible", "capable of being believed"],
  ["tread", "put down, place, or press the foot"],
  ["perpetual", "continuing forever or indefinitely"],
  ["vanity", "feelings of excessive pride"],
  ["flourish", "grow vigorously"],
  ["theology", "the rational and systematic study of religion"],
  ["creed", "any system of principles or beliefs"],
  ["plague", "any large-scale calamity"],
  ["brace", "a support that steadies or strengthens something else"],
  ["dreary", "lacking in liveliness or charm or surprise"],
  ["dainty", "something considered choice to eat"],
  ["benevolent", "showing or motivated by sympathy and understanding"],
  ["opera", "a drama set to music"],
  ["haughty", "having or showing arrogant superiority"],
  ["beseech", "ask for or request earnestly"],
  ["prodigy", "an unusually gifted or intelligent person"],
  ["hypothesis", "a tentative insight that is not yet verified or tested"],
  ["slack", "not tense or taut"],
  ["manifestation", "a clear appearance"],
  ["dogma", " a doctrine or code of beliefs accepted as authoritative"],
  ["wilderness", " a wild and uninhabited area left in its natural condition"],
  ["cohere", "cause to form a united, orderly, and consistent whole"],
  ["conscientious", "characterized by extreme care and great effort"],
  ["arbitrary", " based on or subject to individual discretion or preference"],
  ["affliction", "a cause of great suffering and distress"],
  ["yoke", " a wooden frame across the shoulders for carrying buckets"],
  ["placid", "calm and free from disturbance"],
  ["ominous", "threatening or foreshadowing evil or tragic developments"],
  ["impetuous", "characterized by undue haste and lack of thought"],
  ["insurrection", "organized opposition to authority"],
  ["acquiesce", "agree or express agreement"],
  ["felicity", "pleasing and appropriate manner or style"],
  ["vindicate", "show to be right by providing justification or proof"],
  ["temperate", "not extreme"],
  ["incredulous", " not disposed or willing to believe; unbelieving"],
  ["peruse", " examine or consider with attention and in detail"],
  ["plausible", " apparently reasonable, valid, or truthful"],
  ["languid", " lacking spirit or liveliness"],
  ["imp", "one who is playfully mischievous"],
  ["caravan", "a procession traveling together in single file"],
  ["cloister", "residence that is a place of religious seclusion"],
  ["scourge", " something causing misery or death"],
  ["sundry", "consisting of a haphazard assortment of different kinds"],
  ["vexation", "anger produced by some annoying irritation"],
  ["conceit", " the trait of being unduly vain"],
  ["cask", "a cylindrical container that holds liquids"],
  ["rampart", "an embankment built around a space for defensive purposes"],
  ["efficacy", "capacity or power to produce a desired result"],
  ["decorum", " propriety in manners and conduct"],
  ["cant", "a slope in the turn of a road or track"],
  ["gnaw", " bite or chew on with the teeth"],
  ["thesis", "an unproved statement advanced as a premise in an argument"],
  ["fleece", "outer coat of especially sheep and yaks"],
  ["sordid", "foul and run-down and repulsive"],
  ["importune", " beg persistently and urgently"],
  ["fortitude", "strength of mind that enables one to endure adversity"],
  ["privation", "the act of stripping someone of food, money, or rights"],
  ["prodigal", "recklessly wasteful"],
  ["brazen", "unrestrained by convention or propriety"],
  ["pestilence", " any epidemic disease with a high death rate"],
  ["pecuniary", " relating to or involving money"],
  ["precarious", " not secure; beset with difficulties"],
  ["hypocrite", "a person who professes beliefs that he or she does not hold"],
  ["beacon", " a fire that can be seen from a distance"],
  ["miscellaneous", " having many aspects"],
  ["gruff", " blunt and unfriendly or stern"],
  ["calumny", " a false accusation of an offense"],
  ["precinct", " an administrative district of a city or town"],
  ["parity", " functional equality"],
  ["squall", " a loud and harsh cry"],
  ["adroit", " quick or skillful or adept in action or thought"],
  ["motley", "consisting of a haphazard assortment of different kinds"],
  ["assemblage", "several things grouped together or considered as a whole"],
  ["belligerent", " characteristic of an enemy or one eager to fight"],
  ["slick", " made smooth, as by ice, grease, or water"],
  ["carcass", "the dead body of an animal"],
  ["reverie", " an abstracted state of absorption"],
  ["vindictive", "disposed to seek revenge or intended for revenge"],
  ["gaudy", " tastelessly showy"],
  ["aperture", "a natural opening in something"],
  ["antecedent", " a preceding occurrence or cause or event"],
  ["vestige", " an indication that something has been present"],
  ["plumb", "  exactly vertical"],
  ["droll", " comical in an odd or whimsical manner"],
  ["benign", " kind in disposition or manner"],
  ["ember", " a hot, smoldering fragment of wood left from a fire"],
  ["pernicious", " exceedingly harmful"],
  ["oversight", "an unintentional omission from failure to notice something"],
  ["arid", "lacking sufficient water or rainfall"],
  ["harangue", "a loud bombastic declamation expressed with strong emotion"],
  ["premiere", "the first public performance of a play or movie"],
  ["parry", "impede the movement of"],
  ["tithe", "a levy of one tenth of something"],
  ["surly", "unfriendly and inclined toward anger or irritation"],
  ["caper", "a playful leap or hop"],
  ["pique", "call forth, as an emotion, feeling, or response"],
  ["goad", "stab or urge on as if with a pointed stick"],
  ["saucy", "improperly forward or bold"],
  ["engender", " call forth"],
  ["declaim", "recite in a skilled and formal way"],
  ["expiate", " make amends for"],
  ["jostle", "make one's way by pushing or shoving"],
  ["delineate", "represented accurately or precisely"],
  ["promulgate", "state or announce"],
  ["anterior", "of or near the head end or toward the front plane of a body"],
  ["extol", " praise, glorify, or honor"],
  ["parley", " a negotiation between enemies"],
  ["antipathy", " a feeling of intense dislike"],
  ["verdure", " green foliage"],
  ["fictitious", "formed or conceived by the imagination"],
  ["nettle", " plant having stinging hairs that cause skin irritation"],
  ["inscrutable", "difficult or impossible to understand"],
  ["tardy", "after the expected or usual time"],
  ["languor", " inactivity; showing an unusual lack of energy"],
  ["eddy", "a miniature whirlpool or whirlwind"],
  ["purgatory", "a temporary state of the dead in Roman Catholic theology"],
  ["tenet", "a basic principle or belief that is accepted as true"],
  ["aver", "declare or affirm solemnly and formally as true"],
  ["voluble", "marked by a ready flow of speech"],
  ["levity", "a manner lacking seriousness"],
  ["resplendent", "having great beauty"],
  ["reprobate", " a person without moral scruples"],
  ["anarchist", " an advocate of the abolition of governments"],
  ["axiom", "a proposition that is not susceptible of proof or disproof"],
  ["naive", "marked by or showing unaffected simplicity"],
  ["pantomime", " a performance using gestures and movements without words"],
  ["prosaic", "lacking wit or imagination"],
  ["buccaneer", " someone who robs at sea or plunders the land from the sea"],
  ["philology", "the humanistic study of language and literature"],
  ["nebula", " an immense cloud of gas and dust in interstellar space"],
  ["renegade", "  someone who rebels and becomes an outlaw"],
  ["soliloquy", "speech you make to yourself"],
  ["pedantic", "  marked by a narrow focus on or display of learning"],
  ["brocade", "thick expensive material with a raised pattern"],
  ["verdant", "characterized by abundance of vegetation and green foliage"],
  ["disparate", "fundamentally different or distinct in quality or kind"],
  ["empirical", "derived from experiment and observation rather than theory"],
  ["inveterate", "habitual"],
  ["precocity", "intelligence achieved far ahead of normal development"],
  ["imperturbable", "marked by extreme calm and composure"],
  ["restitution", " the act of restoring something to its original state"],
  ["antiquated", "so extremely old as seeming to belong to an earlier period"],
  ["invective", " abusive language used to express blame or censure"],
  ["squalid", "foul and run-down and repulsive"],
  ["tempestuous", "characterized by violent emotions or behavior"],
  ["effeminate", "lacking traits typically associated with men or masculinity"],
  ["virulent", "extremely poisonous or injurious; producing venom"],
  ["inimitable", "matchless"],
  ["equanimity", "steadiness of mind under stress"],
  ["dissident", " a person who objects to some established policy"],
  ["glib", "artfully persuasive in speech"],
  ["laconic", "brief and to the point"],
  ["urbane", "showing a high degree of refinement"],
  ["egoism", "concern for your own interests and welfare"],
  ["beleaguer", "annoy persistently"],
  ["embryonic", "of an organism prior to birth or hatching"],
  ["fete", " an elaborate party, often outdoors"],
  ["phalanx", "any closely ranked crowd of people"],
  ["affidavit", "written declaration made under oath"],
  ["obviate", "do away with"],
  ["hurtle", "move with or as if with a rushing sound"],
  ["ennui", "the feeling of being bored by something tedious"],
  ["intemperance", "excess in action and immoderate indulgence of appetites"],
  ["vortex", "a powerful circular current of water"],
  ["testy", "easily irritated or annoyed"],
  ["presage", "a foreboding about what is about to happen"],
  ["parochial", "relating to or supported by or located in a parish"],
  ["viand", "a choice or delicious dish"],
  ["timorous", "shy and fearful by nature"],
  ["assuage", " provide physical relief, as from pain"],
  ["commiserate", "feel or express sympathy or compassion"],
  ["preamble", "a preliminary introduction, as to a statute or constitution"],
  ["ligament", "a band of fibrous tissue connecting bones or cartilages"],
  ["disparity", "inequality or difference in some respect"],
  ["cabal", "a clique that seeks power usually through intrigue"],
  ["mendicant", "a pauper who lives by begging"],
  ["dearth", "an insufficient quantity or number"],
  ["menagerie", "a collection of live animals for study or display"],
  ["diadem", "an ornamental jeweled headdress signifying sovereignty"],
  ["trepidation", "a feeling of alarm or dread"],
  ["clique", "an exclusive circle of people with a common purpose"],
  ["moratorium", "suspension of an ongoing activity"],
  ["passe", "out of fashion"],
  ["threadbare", "thin and tattered with age"],
  ["waif", "a homeless child especially one forsaken or orphaned"],
  ["condone", "excuse, overlook, or make allowances for"],
  ["polemic", "a verbal or written attack, especially of a belief or dogma"],
  ["temerity", "fearless daring"],
  ["gist", "the central meaning or theme of a speech or literary work"],
  ["purvey", "supply with provisions"],
  ["syndrome", " a pattern of symptoms indicative of some disease"],
  ["punitive", "inflicting punishment"],
  ["acrid", "strong and sharp, as a taste or smell"],
  ["indubitable", "too obvious to be doubted"],
  ["truculent", "defiantly aggressive"],
  ["carrion", "the dead and rotting body of an animal; unfit for human food"],
  ["contemporaneous", "occurring in the same period of time"],
  ["eclectic", "selecting what seems best of various styles or ideas"],
  ["convivial", "occupied with or fond of the pleasures of good company"],
  ["pliant", "capable of being shaped or bent or drawn out"],
  ["torpor", "a state of motor and mental inactivity"],
  ["distraught", "deeply agitated especially from emotion"],
  ["cohort", "a band of warriors"],
  ["effrontery", "audacious behavior that you have no right to"],
  ["cupidity", "extreme greed for material wealth"],
  ["recant", "formally reject or disavow a formerly held belief"],
  ["deify", "exalt to the position of a God"],
  ["sinuous", "curved or curving in and out"],
  ["nostalgia", " a longing for something past"],
  ["puissant", "powerful"],
  ["apriori", "reasoned from a general principle to a necessary effect"],
  ["homespun", "made of cloth woven in one's household"],
  ["guileless", "innocent and free of deceit"],
  ["unabashed", " not embarrassed"],
  ["bemoan", " regret strongly"],
  ["mausoleum", " a large burial chamber, usually above ground"],
  ["abstruse", "difficult to understand"],
  ["hearsay", "gossip passed around by word of mouth"],
  ["liturgy", "a rite or body of rites prescribed for public worship"],
  ["elixir", "a substance believed to cure all ills"],
  ["paraphernalia", "equipment consisting of miscellaneous articles"],
  ["commensurate", "corresponding in size or degree or extent"],
  ["wiggle", "move to and fro"],
  ["expatriate", "a person who is voluntarily absent from home or country"],
  ["tawdry", " tastelessly showy"],
  ["egregious", "conspicuously and outrageously bad or reprehensible"],
  ["irascible", "quickly aroused to anger"],
  ["polarize", "cause to concentrate about two conflicting positions"],
  ["rapine", "the act of despoiling a country in warfare"],
  ["demographic", " a statistic characterizing human populations"],
  ["concierge", "a caretaker in an apartment complex or hotel"],
  ["aggrandize", "embellish; increase the scope, power, or importance of"],
  ["execrable", "unequivocally detestable"],
  ["stratify", "form, arrange, or deposit in layers"],
  ["mote", "a tiny piece of anything"],
  ["camouflage", "an outward semblance misrepresenting the nature of something"],
  ["gruel", "a thin porridge"],
  ["probity", "complete and confirmed integrity"],
  ["squalor", "sordid dirtiness"],
  ["congeal", " solidify, thicken, or come together"],
  ["unfettered", "not bound or restrained, as by shackles and chains"],
  ["recrimination", "mutual accusations"],
  ["motif", "a recurrent element in a literary or artistic work"],
  ["gregarious", " temperamentally seeking and enjoying the company of others"],
  ["invidious", "containing or implying a slight or showing prejudice"],
  ["matrix", "an enclosure within which something originates or develops"],
  ["recumbent", "lying down; in a position of comfort or rest"],
  ["fortuitous", "lucky; occurring by happy chance"],
  ["certitude", "complete assurance or confidence"],
  ["quixotic", "not sensible about practical matters"],
  ["slake", "satisfy, as thirst"],
  ["maudlin", "effusively or insincerely emotional"],
  ["lexicon", "a reference book containing an alphabetical list of words"],
  ["rejuvenate", "make younger or more youthful"],
  ["skein", "coils of worsted yarn"],
  ["simper", "smile in an insincere, unnatural, or coy way"],
  ["abhorrent", "offensive to the mind"],
  ["nuance", "a subtle difference in meaning or opinion or attitude"],
  ["gawk", "look with amazement"],
  ["abnegate", "deny or renounce"],
  ["furor", "an interest followed with exaggerated zeal"],
  ["psychosis", "severe mental disorder in which contact with reality is lost"],
  ["careen", "move at high speed and in an uncontrolled way"],
  ["stalemate", "a situation in which no progress can be made"],
  ["vignette", " a brief literary description"],
  ["impasse", "a situation in which no progress can be made"],
  ["unctuous", "unpleasantly and excessively suave or ingratiating"],
  ["ambrosia", "the food and drink of the gods"],
  ["scurrilous", "expressing offensive, insulting, or scandalous criticism"],
  ["emend", "make corrections to"],
  ["loquacious", " full of trivial conversation"],
  ["neophyte", "any new participant in some activity"],
  ["hauteur", "overbearing pride with a superior manner toward inferiors"],
  ["dolorous", "showing sorrow"],
  ["palaver", "loud and confused and empty talk"],
  ["dilettante", "an amateur engaging in an activity without serious intention"],
  ["pusillanimous", "lacking in courage, strength, and resolution"],
  ["lien", "the right to take and hold the property of a debtor"],
  ["churlish", "having a bad disposition; surly"],
  ["interloper", "someone who intrudes on the privacy or property of another"],
  ["vapid", "lacking significance or liveliness or spirit or zest"],
  ["fetid", "offensively malodorous"],
  ["chaperone", "one who accompanies and supervises young people"],
  ["exhume", "dig up for reburial or for medical investigation"],
  ["spate", "a sudden forceful flow"],
  ["theocracy", "a political unit governed by a deity"],
  ["hiatus", "an interruption in the intensity or amount of something"],
  ["prevaricate", "be deliberately ambiguous or unclear"],
  ["guru", "a Hindu or Buddhist religious leader and spiritual teacher"],
  ["malevolence", "wishing evil to others"],
  ["diagnostic", "concerned with identifying the nature or cause of something"],
  ["stentorian", "very loud or booming"],
  ["diurnal", "having a daily cycle or occurring every day"],
  ["ramshackle", "in poor or broken-down condition"],
  ["astringent", "tending to draw together or constrict soft organic tissue"],
  ["elysian", "relating to the abode of the blessed after death"],
  ["fulminate", "cause to explode violently and with loud noise"],
  ["tantamount", "being essentially equal to something"],
  ["profundity", "the quality of being physically deep"],
  ["pummel", "strike, usually with the fist"],
  ["manumit", "free from slavery or servitude"],
  ["quandary", "state of uncertainty in a choice between unfavorable options"],
  ["litany", "a prayer led by clergy with responses from the congregation"],
  ["plethora", "extreme excess"],
  ["dissemination", "the act of dispersing or diffusing something"],
  ["attrition", "the act of rubbing together"],
  ["protuberance", "something that bulges out or projects from its surroundings"],
  ["promulgation", "a public statement containing information about an event"],
  ["provender", " food for domestic livestock"],
  ["effete", "excessively self-indulgent, affected, or decadent"],
  ["disingenuous", "not straightforward or candid"],
  ["peroration", "the concluding section of a rhetorical address"],
  ["maelstrom", "a powerful circular current of water"],
  ["Zeitgeist", "the spirit of the time"],
  ["emeritus", " a professor or minister who is retired from assigned duties"],
  ["rubric", "category name"],
  ["regalia", " paraphernalia indicative of royalty or other high office"],
  ["fracas", "a noisy quarrel"],
  ["detonation", "the act of setting off an explosive"],
  ["zealot", "a fervent and even militant proponent of something"],
  ["adventitious", "associated by chance and not an integral part"],
  ["sere", "having lost all moisture"],
  ["recondite", "difficult to understand"],
  ["fulsome", "unpleasantly and excessively suave or ingratiating"],
  ["melee", "a noisy riotous fight"],
  ["zephyr", "a slight wind"],
  ["countermand", "cancel officially"],
  ["sophist", "someone whose reasoning is subtle and often specious"],
  ["regatta", "a series of boat races"],
  ["milieu", "the environmental condition"],
  ["dotage", "mental infirmity as a consequence of old age"],
  ["repercussion", " a remote or indirect consequence of some action"],
  ["machete", "a large knife used as a weapon or for cutting vegetation"],
  ["denouement", "the outcome of a complex sequence of events"],
  ["unconscionable", "greatly exceeding bounds of reason or moderation"],
  ["insensate", " devoid of feeling and consciousness and animation"],
  ["pandemic", " existing everywhere"],
  ["beatific", "resembling or befitting an angel or saint"],
  ["billowing", "characterized by great swelling waves or surges"],
  ["evolutionist", "a person who believes in Darwinian theory"],
  ["limn", "make a portrait of"],
  ["rancid", "having an offensive smell or taste"],
  ["factitious", " not produced by natural forces; artificial or fake"],
  ["censorious", "harshly critical or expressing censure"],
  ["verve", "an energetic style"],
  ["gestate", "be pregnant with"],
  ["traduce", "speak unfavorably about"],
  ["bombastic", "ostentatiously lofty in style"],
  ["decrepitude", "a state of deterioration due to old age or long use"],
  ["hypodermic", "a piston syringe that is fitted with a needle for injections"],
  ["tureen", "large deep serving dish with a cover"],
  ["apocryphal", "being of questionable authenticity"],
  ["awl", "a pointed tool for marking surfaces or for punching holes"],
  ["moiety", "one of two approximately equal parts"],
  ["bellicose", "having or showing a ready disposition to fight"],
  ["apposite", "being of striking appropriateness and pertinence"],
  ["agog", "highly excited"],
  ["agape", "with the mouth wide open as in wonder or awe"],
  ["cathartic", " emotionally purging"],
  ["halcyon", " a mythical bird said to breed at the winter solstice"],
  ["coeval", "of the same period"],
  ["malaise", "a feeling of mild sickness or depression"],
  ["cachet", "an indication of approved or superior status"],
  ["euphoria", "a feeling of great elation"],
  ["zeroin", "direct onto a point or target"],
  ["polyglot", "a person who speaks more than one language"],
  ["filigree", "delicate and intricate ornamentation"],
  ["leeway", "a permissible difference"],
  ["contusion", " an injury in which the skin is not broken"],
  ["salubrious", "promoting health"],
  ["frenetic", "fast and energetic in an uncontrolled or wild way"],
  ["odoriferous", "emitting a smell, especially an unpleasant smell"],
  ["addle", "mix up or confuse"],
  ["zany", "ludicrous or foolish"],
  ["incinerate", "become reduced to ashes"],
  ["dulcet", "pleasing to the ear"],
  ["fulcrum", "the pivot about which a lever turns"],
  ["bemused", "perplexed by many conflicting situations or statements"],
  ["sanctimonious", "excessively or hypocritically pious"],
  ["palliative", "moderating pain or sorrow by making it easier to bear"],
  ["quatrain", "a stanza of four lines"],
  ["alliteration", "use of the same consonant at the beginning of each word"],
  ["clangor", "a loud resonant repeating noise"],
  ["naivete", "lack of sophistication or worldliness"],
  ["extemporaneous", " with little or no preparation or forethought"],
  ["feckless", "generally incompetent and ineffectual"],
  ["wangle", " accomplishing something by scheming or trickery"],
  ["aegis", "armor plate that protects the chest"],
  ["alimony", "support paid by one spouse to another after separation"],
  ["stodgy", "excessively conventional and unimaginative and hence dull"],
  ["verisimilitude", "the appearance of truth; the quality of seeming to be true"],
  ["macabre", " shockingly repellent; inspiring horror"],
  ["cornucopia", " a horn filled with fruit and grain symbolizing prosperity"],
  ["bacchanalian", "used of riotously drunken merrymaking"],
  ["bedizen", "decorate tastelessly"],
  ["obsolescent", "becoming disused or outdated"],
  ["kudos", " an expression of approval and commendation"],
  ["hypochondriac", "a patient with imaginary symptoms and ailments"],
  ["febrile", "of or relating to or characterized by fever"],
  ["ornery", "having a difficult and contrary disposition"],
  ["pogrom", " organized persecution of an ethnic group, especially Jews"],
  ["aficionado", " a serious devotee of some activity, genre, or performer"],
  ["sidereal", "of or relating to the stars or constellations"],
  ["rotundity", "the roundness of a 3-dimensional object"],
  ["kosher", "conforming to dietary laws"],
  ["indemnification", "compensation for loss or damage or for trouble and annoyance"],
  ["nepotism", " favoritism shown to relatives or friends by those in power"],
  ["protean", " taking on different forms"],
  ["tourniquet", "a bandage that stops the flow of blood by applying pressure"],
  ["hubris", "overbearing pride or presumption"],
  ["renege", "fail to fulfill a promise or obligation"],
  ["xenophobia", "a fear of foreigners or strangers"],
  ["concatenation", "the act of linking together as in a series or chain"],
  ["imbroglio", "an intricate and confusing interpersonal situation"],
  ["tautology", "useless repetition"],
  ["comity", "a state or atmosphere of harmony or mutual civility"],
  ["montage", "the technique of splicing together different sections of film to convey an idea"],
  ["euthanasia", "the act of killing someone painlessly"],
  ["aneurysm", "an abnormal bulge caused by weakening of an artery wall"],
  ["philistine", "a person who is uninterested in intellectual pursuits"],
  ["acerbity", "a sharp bitterness"],
  ["prophylactic", "preventing or contributing to the prevention of disease"],
  ["utopia", " ideally perfect state"],
  ["bedlam", "a state of extreme confusion and disorder"],
  ["confrere", "a person who is member of one's class or profession"],
  ["intransigence", "stubborn refusal to compromise or change"],
  ["distrait", "having the attention diverted especially because of anxiety"],
  ["finicky", "fussy, especially about details"],
  ["cenotaph", "monument to honor those whose remains are interred elsewhere"],
  ["pastiche", "a work of art that imitates the style of some previous work"],
  ["nonpareil", "model of excellence or perfection of a kind"],
  ["megalomania", "a psychological state characterized by delusions of grandeur"],
  ["atavistic", "characteristic of a throwback"],
  ["desuetude", "a state of inactivity or disuse"],
  ["equivalence", "essential comparability and interchangeability"],
  ["jingoism", "fanatical patriotism"],
  ["ersatz", "an artificial or inferior substitute or imitation"],
  ["mezzanine", "intermediate floor just above the ground floor"],
  ["palimpsest", "a manuscript on which more than one text has been written"],
  ["denigrate", " attack the good name and reputation of someone"],
  ["avuncular", "being or relating to an uncle"],
  ["aural", "of or pertaining to hearing or the ear"],
  ["conformist", "someone who follows established standards of conduct"],
  ["antebellum", "belonging to a period before a war"],
  ["sycophantic", "attempting to win favor by flattery"],
  ["eleemosynary", "generous in assistance to the poor"],
  ["meaculpa", "an acknowledgment of your error or guilt"],
  ["insularity", "lack of openness to new ideas; narrow-mindedness"],
  ["aphasia", "inability to use language because of a brain lesion"],
  ["tumid", "abnormally distended especially by fluids or gas"],
  ["potpourri", "a collection containing a variety of sorts of things"],
  ["uxorious", " foolishly fond of or submissive to your wife"],
  ["ciliated", "having a margin or fringe of hairlike projections"],
  ["actuarial", "relating to statistics to calculate insurance premiums"],
  ["pejorative", "expressing disapproval"],
  ["acidulous", "being sour to the taste"],
  ["tergiversate", "be deliberately ambiguous or unclear in order to mislead"],
  ["raspy", "unpleasantly harsh or grating in sound"],
  ["ichthyology", "the branch of zoology that studies fishes"],
  ["acuity", "sharpness of vision"],
  ["abattoir", "a building where animals are butchered"],
  ["ineluctable", "impossible to avoid or evade"],
  ["frisson", "an almost pleasurable sensation of fright"],
  ["dystopia", "state in which the conditions of life are extremely bad"],
  ["prestidigitation", "manual dexterity in the execution of tricks"],
  ["sybaritic", "displaying luxury and furnishing gratification to the senses"],
  ["sashay", "walk with a lofty proud gait, often to impress others"],
  ["sociopath", "a person with an antisocial personality disorder"],
  ["pleonasm", "using more words than necessary"],
  ["modality", "the manner or style in which something is done"],
  ["boondoggle", "work of little or no value done merely to look busy"],
  ["experiential", "of or relating to direct observation or participation"],
  ["narcissist", "someone who is excessively self-centered"],
  ["mortician", "one whose business is the management of funerals"],
  ["masochist", "someone who obtains pleasure from receiving punishment"],
  ["autochthonous", "originating where it is found"],
  ["tintinnabulation", "the sound of a bell ringing"],
  ["doppelganger", "a ghostly double that haunts its living counterpart"],
  ["sesquipedalian", "a very long word (a foot and a half long)"],
  ["malapropism", "misuse of a word by confusion with one that sounds similar"],
  ["zilch", "a quantity of no importance"],
  ["zeugma", "rhetorical use of a word to govern two or more words"],
  ["discombobulated", "having self-possession upset; thrown into confusion"],
  ["absquatulate", "run away, taking something or somebody along"],
  ["indiscrete", "not divided or divisible into parts"],
  ["pablum", "worthless or oversimplified ideas"],
  ["litotes", "understatement for rhetorical effect"]
]);
const letterDiv = document.querySelector('.letter-div');
const definitionButton = document.getElementById('definition-btn');
const resetButton = document.querySelector('.reset-btn');
const definitionDiv = document.querySelector('.definition-div');
const definitionText = document.querySelector('.definition-txt');
const liveSpan = document.querySelector('.lives');
const wordDiv = document.querySelector('.word-div');
const notif = document.querySelector('.notif');
const notifContent = document.querySelector('.notif-content');
const notifSpan = document.querySelector('.notif-span');
const playAgain = document.querySelector('.notif-btn');
let letters, lives;
let mistakes = 0;
// making a list of only keys from words
const word_list = [...words.keys()];
// get random word from word_list function
const getRandomWord = list => list[Math.floor(word_list.length * Math.random())];
// random word will be selected upon every reset and init
let select_word;
// class for changing the picture
class HangmanPic {
  constructor(picNumber) {
    this.picNumber = picNumber;
  }
  describeSelf() {
    document.getElementById('hangmanPic')
        .src = 'images/' + mistakes + '.PNG';
  }
}
class Definition {
  constructor(words) {
    this.words = words;
  }
  describeSelf() {
    definitionDiv.classList.toggle('hidden');
    definitionText.classList.toggle('hidden');
    definitionText.textContent = words.get(select_word);
  }
}
const init = state => {
  wordDiv.innerHTML = '';
  if (state === 'start') {
    select_word = getRandomWord(word_list);
    definitionText.classList.add('hidden');
    for (const i of 'abcdefghijklmnopqrstuvwxyz') {
      const html = `<button class="alpha btn btn-lg btn-primary m-2 p-2">${i.toUpperCase()}</button>`;
      letterDiv.insertAdjacentHTML('beforeend', html);
    }
  } else if (state === 'reset') {
    select_word = getRandomWord(word_list);
    mistakes = 0;
    const resetPic = new HangmanPic(0);
    resetPic.describeSelf();
    letters.forEach(btn => {
      btn.classList.remove('disabled');
      definitionText.classList.add('hidden');
      notif.classList.add('hidden');
    });
  }
  lives = 7;
  letters = document.querySelectorAll('.alpha');
  liveSpan.textContent = lives;
  // putting selected word
  for (const item of select_word) {
    const html = `<p class="word">_</p>`;
    wordDiv.insertAdjacentHTML('beforeend', html);
  }
};
init('start');
const showNotif = function(msg) {
  notif.classList.remove('hidden');
  notifSpan.textContent = select_word;
  notifContent.textContent = `You ${msg}`;
};
decreaseLife = function() {
  mistakes++;
  let resetPic = new HangmanPic(mistakes);
  resetPic.describeSelf();
  lives--;
  liveSpan.textContent = lives;
  if (lives === 0) {
    showNotif('lost');
    mistakes = 0;
    for (let i = 0; i < 26; i++) {
      letterDiv.children[i].classList.add('disabled');
    }
  }
};
getindexes = letter => {
  let indexes = [];
  let i;
  for (let i1 = 0; i1 < select_word.length; i1++) {
    let val = select_word[i1];
    if (val === letter) {
      indexes.push(i1);
    }
  }
  return indexes;
};
checkWord = () => {
  let val = true;
  for (let i = 0; wordDiv.children.length > i; i++) {
    if (wordDiv.children[i].textContent !== '_') {
      continue;
    }
    val = false;
  }
  return val;
};

function letterPress() {
  const letter = this.textContent.toLowerCase();
  if (select_word.indexOf(letter) !== -1) {
    const indexes_list = getindexes(letter);
    indexes_list.forEach(val => {
      wordDiv.children[val].textContent = this.textContent;
    });
    if (checkWord()) {
      showNotif('won');
      for (let i = 0; i < 26; i++) {
        letterDiv.children[i].classList.add('disabled');
      }
    }
  } else {
    decreaseLife();
  }
  this.classList.add('disabled');
}

function changeDefinition() {
  definitionDiv.classList.toggle('hidden');
  definitionText.classList.toggle('hidden');
  definitionText.textContent = words.get(select_word);
}
letters.forEach(btn => btn.addEventListener('click', letterPress));
definitionButton.addEventListener('click', new Definition(words)
    .describeSelf);
resetButton.addEventListener('click', () => init('reset'));
playAgain.addEventListener('click', () => init('reset'));