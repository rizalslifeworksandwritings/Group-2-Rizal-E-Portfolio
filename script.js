/* =========================================================
   JOSE RIZAL E-PORTFOLIO — COMPLETE JAVASCRIPT
   ========================================================= */

const quizQuestions = [
  {
    q: "When was José Rizal born?",
    choices: ["June 19, 1861", "December 30, 1896", "June 12, 1898", "August 21, 1872"],
    answer: 0
  },
  {
    q: "Where was Rizal born?",
    choices: ["Manila", "Calamba, Laguna", "Cebu", "Vigan"],
    answer: 1
  },
  {
    q: "What was Rizal's mother's name?",
    choices: ["Trinidad Rizal", "Saturnina Rizal", "Teodora Alonso", "Narcisa Rizal"],
    answer: 2
  },
  {
    q: "Who was one of Rizal's teachers in Biñan?",
    choices: ["Don Justiniano Aquino Cruz", "Padre Dámaso", "Marcelo del Pilar", "Ferdinand Blumentritt"],
    answer: 0
  },
  {
    q: "Which event in 1872 greatly affected Rizal and Filipino society?",
    choices: ["The Philippine Revolution", "The execution of Gomburza", "The declaration of independence", "The opening of the Suez Canal"],
    answer: 1
  }
];
let currentQuestion=0, score=0;

function startQuiz(){
  const intro=document.querySelector('.intro-container');
  const quiz=document.getElementById('quizSection');
  if(intro) intro.classList.add('hidden');
  if(quiz) quiz.classList.remove('hidden');
  currentQuestion=0; score=0; showQuestion();
}
function showQuestion(){
  const q=quizQuestions[currentQuestion]; if(!q) return;
  const set=(id,text)=>{const el=document.getElementById(id);if(el)el.textContent=text};
  set('questionNumber',`Question ${currentQuestion+1} of ${quizQuestions.length}`);
  set('scoreDisplay',`Score: ${score}`); set('question',q.q); set('quizFeedback','');
  const bar=document.getElementById('progressBar'); if(bar) bar.style.width=`${((currentQuestion+1)/quizQuestions.length)*100}%`;
  const next=document.getElementById('nextBtn'); if(next) next.classList.add('hidden');
  const answers=document.getElementById('answers'); if(!answers)return; answers.innerHTML='';
  q.choices.forEach((choice,index)=>{const btn=document.createElement('button');btn.className='answer-btn';btn.type='button';btn.textContent=choice;btn.addEventListener('click',()=>selectAnswer(index,btn));answers.appendChild(btn)});
}
function selectAnswer(index,clicked){
  const q=quizQuestions[currentQuestion]; const buttons=document.querySelectorAll('.answer-btn'); buttons.forEach(b=>b.disabled=true);
  if(index===q.answer){score++;clicked.classList.add('correct');document.getElementById('quizFeedback').textContent='✓ Correct!';}
  else{clicked.classList.add('wrong');if(buttons[q.answer])buttons[q.answer].classList.add('correct');document.getElementById('quizFeedback').textContent=`Not quite. The correct answer is: ${q.choices[q.answer]}`;}
  document.getElementById('scoreDisplay').textContent=`Score: ${score}`;document.getElementById('nextBtn').classList.remove('hidden');
}
function nextQuestion(){currentQuestion++;if(currentQuestion<quizQuestions.length)showQuestion();else showResult()}
function showResult(){
  document.getElementById('quizSection')?.classList.add('hidden');document.getElementById('resultSection')?.classList.remove('hidden');
  document.getElementById('finalScore').textContent=`You scored ${score} out of ${quizQuestions.length}.`;
  const title=document.getElementById('resultTitle'),msg=document.getElementById('resultMessage');
  if(!title||!msg)return; if(score===quizQuestions.length){title.textContent='Rizal Scholar! 🏆';msg.textContent="Excellent! You are ready to explore Rizal's works."}else if(score>=3){title.textContent='Good Job! 📚';msg.textContent='You have a good foundation. Now explore the portfolio and discover more.'}else{title.textContent='Time to Explore! 🌱';msg.textContent='No worries! The e-portfolio is here to help you learn more about Rizal.'}
}
function toggleMenu(){const nav=document.getElementById('mainNav');if(nav)nav.classList.toggle('open')}

const works = [
  {id:"noli",title:"Noli Me Tangere",type:"Novel",category:"novel",year:"1887",image:"images/noli-me-tangere.jpg",
   sections:[
    ["Title of the Work","Noli Me Tangere, a Latin phrase that means “Touch Me Not,” is José Rizal’s first novel."],
    ["Type / Genre","Novel written originally in Spanish. It can be considered a social and political novel because it presents problems and realities experienced by Filipinos during the Spanish colonial period."],
    ["Date / Year Written or Published","Published in 1887 in Berlin, Germany."],
    ["Background / History","Rizal wrote Noli Me Tangere during Spanish colonial rule, when Filipinos experienced discrimination, inequality, and abuses from some people in positions of power. Through fictional characters and events, Rizal reflected the real situation of Philippine society."],
    ["Summary / Main Content","The story follows Crisóstomo Ibarra, a young Filipino who returns to the Philippines after studying in Europe. He hopes to help his fellow Filipinos, especially through education and peaceful reforms. He encounters corruption, discrimination, and abuse of authority."],
    ["Main Characters","Crisóstomo Ibarra — believes in education and peaceful reform. María Clara — Ibarra’s beloved. Elias — represents the struggles of the oppressed. Padre Dámaso — represents abuse of power by some colonial clergy. Padre Salví — an influential friar. Kapitan Tiago — a wealthy Filipino closely connected to Spanish authorities."],
    ["Major Themes and Ideas","Colonial oppression and injustice; abuse of power; social inequality; importance of education; love of country; need for social change."],
    ["Purpose of Rizal","To expose problems and injustices in Philippine society during Spanish rule and encourage Filipinos to become aware of their social realities."],
    ["Historical Significance","The novel played an important role in awakening national consciousness by exposing abuses and inequalities under colonial rule."],
    ["Contribution","It demonstrated that literature could be used as a powerful tool for social awareness and change and became one of the most important works in Philippine literature."],
    ["Important Lesson","We cannot solve society’s problems if we refuse to recognize them. The novel highlights education, awareness, justice, and courage."]
   ]},
  {id:"fili",title:"El Filibusterismo",type:"Novel",category:"novel",year:"1891",image:"images/el-filibusterismo.jpg",
   sections:[
    ["Title of the Work","El Filibusterismo, often translated as “The Reign of Greed,” is José Rizal’s second novel and the sequel to Noli Me Tangere."],
    ["Type / Genre","Novel originally written in Spanish; a social and political novel about Philippine society under Spanish colonial rule."],
    ["Date / Year Written or Published","1891 in Ghent, Belgium."],
    ["Background / History","A continuation of Noli Me Tangere, presenting a darker view of society and showing what can happen when injustice and oppression continue without being addressed."],
    ["Summary / Main Content","Years after Noli Me Tangere, Crisóstomo Ibarra returns under the identity of Simoun, a wealthy jeweler. Disillusioned by what happened to him and his country, he plans change while the story shows students, farmers, and ordinary Filipinos suffering from inequality and injustice."],
    ["Main Characters","Simoun (Crisóstomo Ibarra); Basilio; Isagani; Kabesang Tales; Padre Florentino; Juli."],
    ["Major Themes and Ideas","Oppression and injustice; corruption and greed; reform and revolution; consequences of inequality; role of youth; revenge and its consequences; freedom and love of country."],
    ["Purpose of Rizal","To continue exposing social problems and show possible consequences when injustice is ignored. It also encourages reflection on what genuine change should mean."],
    ["Historical Significance","Together with Noli Me Tangere, it contributed to the growth of Filipino nationalism and deeper discussions about freedom, justice, and the nation's future."],
    ["Contribution","It strengthened literature as a vehicle for political and social ideas and remains important in Philippine education through Republic Act No. 1425."],
    ["Important Lesson","When injustice continues, it can lead to anger and conflict. True freedom should be based on justice, morality, and genuine love of country, not simply revenge."]
   ]},
  {id:"ultimo",title:"Mi Último Adiós",type:"Poem",category:"poem",year:"1896",image:"images/mi-ultimo-adios.jpg",
   sections:[
    ["Title of the Work","Mi Último Adiós means “My Last Farewell.” Rizal’s poem was originally untitled; the title was supplied afterward."],
    ["Type / Genre","Poem / patriotic farewell poem written in Spanish."],
    ["Date / Year Written or Published","Written December 29, 1896, while Rizal was imprisoned at Fort Santiago. It circulated and was published after his death; a version appeared in Hong Kong in 1897 and Ultimo Adios was later published in La Independencia in 1898."],
    ["Background / History","Rizal wrote the poem during the final hours of his imprisonment before his execution on December 30, 1896. Historical accounts associate the handwritten poem with a small alcohol stove/lampara received by his sister Trinidad."],
    ["Summary / Main Content","The poem is Rizal’s farewell to his beloved country. Rather than focusing on fear, the speaker expresses love for the Philippines and willingness to sacrifice himself for the country’s freedom and welfare."],
    ["Main Characters","The speaker/Rizal; the Philippines/Fatherland; the Filipino people."],
    ["Major Themes and Ideas","Love of country; sacrifice; freedom; selflessness; memory and legacy."],
    ["Purpose of Rizal","To express his final love and farewell to the Philippines and leave a message of patriotism and sacrifice."],
    ["Historical Significance","Written immediately before Rizal’s execution, the poem became closely associated with his final thoughts and sacrifice for the Philippines."],
    ["Contribution","It became one of the most important patriotic poems in Philippine literature and a major representation of Rizal’s ideals."],
    ["Important Lesson","Genuine love for one’s country involves responsibility, service, courage, and selflessness."]
   ]},
  {id:"juventud",title:"A la Juventud Filipina",type:"Poem / Ode",category:"poem",year:"1879",image:"images/a-la-juventud-filipina.jpg",
   sections:[
    ["Title of the Work","A la Juventud Filipina, approximately “To the Philippine Youth.”"],
    ["Type / Genre","Poem / ode written in Spanish."],
    ["Date / Year Written or Published","1879. Rizal entered it in a literary competition organized by the Liceo Artístico-Literario de Manila and won first prize."],
    ["Background / History","Written while Rizal was still a teenager, showing his early belief in the potential of Filipino youth, education, and intellectual development."],
    ["Summary / Main Content","The poem encourages Filipino youth to develop their abilities, intelligence, talents, and education and use them for the advancement of their country."],
    ["Main Characters","No conventional characters. The Filipino youth is the primary audience, while the Philippines/Motherland is the nation whose future depends on them."],
    ["Major Themes and Ideas","Importance of youth; education and knowledge; national progress; Filipino potential; patriotism."],
    ["Purpose of Rizal","To inspire Filipino youth to recognize and develop their potential and use education and talent for the improvement of their country."],
    ["Historical Significance","It demonstrates that Rizal’s nationalist ideas were already developing during his youth and that a young Filipino writer could gain recognition in a Spanish-language literary setting."],
    ["Contribution","An important early poem demonstrating Filipino literary ability in Spanish and an early expression of Filipino nationalism."],
    ["Important Lesson","Young people have the ability and responsibility to contribute to the future of their country."]
   ]},
  {id:"century",title:"Filipinas Dentro de Cien Años",type:"Socio-political Essay",category:"essay",year:"1889–1890",image:"images/filipinas-dentro-de-cien-anos.jpg",
   sections:[
    ["Title of the Work","Filipinas Dentro de Cien Años — The Philippines a Century Hence."],
    ["Type / Genre","Socio-political / political and historical essay."],
    ["Date / Year Written or Published","Written and published serially in La Solidaridad from September 1889 to January 1890; later reprinted in book form in 1905."],
    ["Background / History","Rizal examined Philippine history under Spanish rule while Filipinos were demanding political and social reforms. He considered how Spain’s treatment of Filipinos would shape the country’s future."],
    ["Summary / Main Content","Rizal examines the past, present, and possible future of the Philippines. He considers continued Spanish rule with reforms, foreign intervention, or eventual independence, emphasizing that continued oppression could make separation increasingly likely."],
    ["Main Characters","Not applicable."],
    ["Major Themes and Ideas","Filipino nationalism; colonial oppression; political reform; freedom and independence; justice and human rights; the future of the Philippines."],
    ["Purpose of Rizal","To analyze and warn about the country’s future and encourage meaningful political and social reforms."],
    ["Historical Significance","It was written several years before the Philippine Revolution and the end of Spanish sovereignty in 1898, showing the development of Filipino political consciousness."],
    ["Contribution","An important political writing of the Propaganda Movement that directly analyzed Philippine history, colonial government, and political possibilities."],
    ["Important Lesson","Understanding a nation’s past is important in preparing for its future; continued injustice can lead people to demand greater freedom."]
   ]},
  {id:"indolence",title:"Sobre la Indolencia de los Filipinos",type:"Socio-political Essay",category:"essay",year:"1890",image:"images/sobre-la-indolencia.jpg",
   sections:[
    ["Title of the Work","Sobre la Indolencia de los Filipinos — The Indolence of the Filipinos."],
    ["Type / Genre","Socio-political essay divided into five parts."],
    ["Date / Year Written or Published","Published in La Solidaridad in Madrid in five installments dated July 15, July 31, August 15, August 31, and September 15, 1890."],
    ["Background / History","Rizal challenged the colonial accusation that Filipinos were naturally lazy. He examined social, economic, political, and colonial conditions that discouraged productivity and progress."],
    ["Summary / Main Content","Rizal acknowledges that indolence exists among some Filipinos but rejects it as an inherent racial trait. He points to historical evidence of Filipino agriculture, trade, navigation, and commerce and analyzes colonial conditions that affected productivity."],
    ["Main Characters","Not applicable."],
    ["Major Themes and Ideas","Colonial oppression; Filipino nationalism; education; freedom and opportunity; effects of colonialism; rejection of racial stereotypes; historical awareness."],
    ["Purpose of Rizal","To defend Filipinos against the accusation that they were naturally lazy and explain the historical conditions behind indolence."],
    ["Historical Significance","It challenged a common colonial justification for treating Filipinos as inferior and became an important reformist and nationalist work."],
    ["Contribution","It used historical reasoning, observation, and social criticism to challenge colonial stereotypes and encourage national consciousness."],
    ["Important Lesson","People should not be blamed for a condition without understanding its causes. Education, freedom, fair opportunities, and good government are necessary for progress."]
   ]},
  {id:"malolos",title:"Sa Mga Kababayang Dalaga sa Malolos",type:"Epistolary Essay / Open Letter",category:"letter",year:"1889",image:"images/young-women-malolos.jpg",
   sections:[
    ["Title of the Work","Sa Mga Kababayang Dalaga sa Malolos — To the Young Women of Malolos."],
    ["Type / Genre","Epistolary essay / socio-political open letter."],
    ["Date / Year Written or Published","Written on February 22, 1889."],
    ["Background / History","Written at the request of Marcelo H. del Pilar after 20 young women from Malolos petitioned Governor-General Valeriano Weyler for permission to open a night school to learn Spanish despite opposition from local friars."],
    ["Summary / Main Content","Rizal praises the women for their courage and desire for education. He discusses women’s responsibilities, especially in raising enlightened and patriotic children, and urges reason and true knowledge."],
    ["Main Characters","Not applicable; the letter is addressed directly to the young women of Malolos."],
    ["Major Themes and Ideas","Women’s empowerment and education; civic responsibility; rejection of blind obedience; reason; critical thinking; intellectual independence."],
    ["Purpose of Rizal","To praise and encourage the women, emphasize women’s role in forming free-thinking citizens, and criticize the misuse of religious authority."],
    ["Historical Significance","It is considered an important early document on women’s education and participation in the reform movement."],
    ["Contribution","A foundational Philippine sociopolitical writing that presented women as enlightened educators and active participants in society."],
    ["Important Lesson","True piety is not blind obedience; it involves independent thinking, moral character, and the pursuit of knowledge."]
   ]},
  {id:"retiro",title:"Mi Retiro",type:"Autobiographical Lyric Poetry",category:"poem",year:"1895",image:"images/mi-retiro.jpg",
   sections:[
    ["Title of the Work","Mi Retiro — My Retreat."],
    ["Type / Genre","Autobiographical lyric poetry with pastoral and elegiac elements."],
    ["Date / Year Written or Published","October 1895."],
    ["Background / History","Composed during Rizal’s exile in Dapitan at the request of his mother, Doña Teodora Alonso, who asked him to describe his serene, isolated lifestyle."],
    ["Summary / Main Content","The poem describes Rizal’s quiet rustic life in Dapitan, the sea and nature around him, and his reflections on past struggles, lost youth, love of country, and peaceful yet sorrowful isolation."],
    ["Main Characters","Not applicable; it is autobiographical lyric poetry."],
    ["Major Themes and Ideas","Inner peace through nature; nostalgia; longing for family and nation; stoic acceptance of exile; enduring patriotism."],
    ["Purpose of Rizal","To fulfill his mother’s request and express his emotions and reflections during exile."],
    ["Historical Significance","It provides an intimate glimpse into Rizal’s mindset during his Dapitan exile from 1892 to 1896."],
    ["Contribution","An important example of Spanish-language lyric poetry showing rich imagery and emotional depth."],
    ["Important Lesson","Even during unjust restriction or exile, a person can find dignity, peace, and purpose through reflection, nature, and enduring values."]
   ]},
  {id:"talisay",title:"Himno a Talisay",type:"Poem / Hymn",category:"poem",year:"1895",image:"images/himno-a-talisay.jpg",
   sections:[
    ["Title of the Work","Himno a Talisay — Hymn to Talisay."],
    ["Type / Genre","Poem / hymn."],
    ["Date / Year Written or Published","October 13, 1895, written in Dapitan."],
    ["Background / History","Rizal wrote it during his Dapitan exile as a school hymn for his students. Talisay was his peaceful property surrounded by trees, plants, and water."],
    ["Summary / Main Content","The poem describes Talisay as a meaningful place where young boys learn, play, explore nature, and develop courage and strength. It emphasizes science, history, languages, practical skills, and character."],
    ["Main Characters","No main characters; the poem centers on Rizal’s students and Talisay."],
    ["Major Themes and Ideas","Education; youth; courage; patriotism; discipline; nature; self-improvement."],
    ["Purpose of Rizal","To teach and inspire his students to value education, be brave, and become responsible members of their community and country."],
    ["Historical Significance","It illustrates Rizal’s role as a teacher and mentor during exile."],
    ["Contribution","It reflects his educational ideals and provides a glimpse into his teaching activities in Dapitan."],
    ["Important Lesson","Education, courage, discipline, and hard work can prepare young people to contribute to their families and country."]
   ]},
  {id:"piden",title:"Me Piden Versos",type:"Poem",category:"poem",year:"1882 / 1889",image:"images/me-piden-versos.jpg",
   sections:[
    ["Title of the Work","Me Piden Versos — They Ask Me for Verses."],
    ["Type / Genre","Poem."],
    ["Date / Year Written or Published","1882, written in Madrid; later published in La Solidaridad on March 31, 1889."],
    ["Background / History","Rizal wrote it while in Madrid and involved with the Filipino community there. Despite literary and social activities, he deeply missed the Philippines."],
    ["Summary / Main Content","Rizal is asked to write poems but struggles because he misses his homeland, childhood, and loved ones. The poem reflects homesickness and how distance affected his inspiration."],
    ["Main Characters","No conventional characters. The speaker is Rizal; the Philippines/homeland is central to his memories and emotions."],
    ["Major Themes and Ideas","Homesickness; love of country; loneliness; memory; sadness; patriotism."],
    ["Purpose of Rizal","To express sadness and homesickness and share his enduring love for the Philippines."],
    ["Historical Significance","It gives insight into Rizal’s emotional experience while living abroad."],
    ["Contribution","An important example of early Spanish poetry expressing Filipino identity, homesickness, and patriotism."],
    ["Important Lesson","Being far from home can deepen appreciation for our roots, people, memories, and homeland."]
   ]},
  {id:"filipinas",title:"A Filipinas",type:"Poem",category:"poem",year:"1880",image:"images/a-filipinas.jpg",
   sections:[
    ["Title of the Work","A Filipinas — To the Philippines."],
    ["Type / Genre","Poem written in Spanish."],
    ["Date / Year Written or Published","February 1880."],
    ["Background / History","Written during Rizal’s youth as one of his early literary works, reflecting his growing love for the Philippines and patriotic outlook."],
    ["Summary / Main Content","The poem praises the Philippines and its natural beauty and expresses hope that Filipinos would value their nation and identity."],
    ["Main Characters","No main characters; the Philippines itself is the central subject."],
    ["Major Themes and Ideas","Love of country; patriotism; national pride; Filipino identity; hope for the nation’s future."],
    ["Purpose of Rizal","To express devotion to the Philippines and awaken national feeling, especially among the youth."],
    ["Historical Significance","An early expression of Rizal’s nationalism and developing Filipino consciousness."],
    ["Contribution","An early patriotic poem contributing to the development of nationalist thought in Philippine literature."],
    ["Important Lesson","Filipinos should love, honor, and value their homeland and identity."]
   ]},
  {id:"junto",title:"Junto al Pasig",type:"Melodrama / Zarzuela",category:"drama",year:"1880",image:"images/junto-al-pasig.jpg",
   sections:[
    ["Title of the Work","Junto al Pasig — Beside the Pasig."],
    ["Type / Genre","Melodrama and zarzuela."],
    ["Date / Year Written or Published","1880."],
    ["Background / History","Rizal wrote it as a contribution to festivities honoring La Inmaculada Concepcion, the patroness of Ateneo, while he was president of the Academia de la Literatura Castellana."],
    ["Summary / Main Content","Children prepare offerings for the Virgin Mary and plan to decorate a banca for the procession. Leonido is missing and encounters Satan disguised as a diwata, who tries to tempt him. Leonido remains faithful, and an Angel appears; goodness and faith triumph."],
    ["Main Characters","Leonido; Candido; Pascual; Satan; Angel."],
    ["Major Themes and Ideas","Good versus evil; faith and devotion; temptation; religious devotion; innocence and childhood; triumph of goodness."],
    ["Purpose of Rizal","Primarily to contribute to the Ateneo celebration and demonstrate his literary ability at a young age."],
    ["Historical Significance","An early artistic expression combining local setting, Marian devotion, and Filipino cultural elements."],
    ["Contribution","Shows Rizal experimenting with drama, verse, and music while using Filipino scenery and customs."],
    ["Important Lesson","Remain faithful to one’s beliefs despite temptation; courage and goodness can overcome evil."]
   ]},
  {id:"consejo",title:"El Consejo de los Dioses",type:"Allegorical Play",category:"drama",year:"1880",image:"images/el-consejo-de-los-dioses.jpg",
   sections:[
    ["Title of the Work","El Consejo de los Dioses — The Council of the Gods."],
    ["Type / Genre","Allegorical play."],
    ["Date / Year Written or Published","Often dated 1880; some sources give 1879."],
    ["Background / History","Rizal entered a literary contest associated with the commemoration of Miguel de Cervantes. His work ultimately received the prize after the judging process."],
    ["Summary / Main Content","Jupiter plans to give literary honors represented by a lyre, trumpet, and golden laurel crown. Juno supports Homer, Venus supports Virgil, and Minerva supports Cervantes. Justice evaluates the works, and Jupiter assigns the honors."],
    ["Main Characters","Jupiter; Juno; Minerva; Venus; Justice."],
    ["Major Themes and Ideas","Love of literature; recognition of writers; wisdom; intellectual excellence; justice and equality; power of literature."],
    ["Purpose of Rizal","To honor Miguel de Cervantes and demonstrate his own literary ability, while showing that a young Filipino could compete in a Spanish literary environment."],
    ["Historical Significance","An important early literary achievement demonstrating Rizal’s talent at a young age."],
    ["Contribution","An example of Rizal’s mastery of Spanish literary writing and Filipino participation in literary institutions."],
    ["Important Lesson","Talent and intelligence should be recognized regardless of nationality or social status."]
   ]},
  {id:"makamisa",title:"Makamisa",type:"Unfinished Novel",category:"novel",year:"1891–1892",image:"images/makamisa.jpg",
   sections:[
    ["Title of the Work","Makamisa."],
    ["Type / Genre","Unfinished novel."],
    ["Date / Year Written or Published","Written between 1891 and 1892; published in 1995 in Prosa por José Rizal."],
    ["Background / History","An attempted third novel written in Tagalog and in a lighter, more comic and satirical manner than Noli Me Tangere and El Filibusterismo."],
    ["Summary / Main Content","The story begins in Tulig after mass. Father Agaton’s sudden anger causes gossip and fear. Town leaders worry about the priest’s wrath, while rumors spread about his behavior toward Aleng Anday and his cook."],
    ["Main Characters","Fr. Agaton; Capitan Lucas; Aleng Anday; Marcela; Capitan Tibo; Don Segundo."],
    ["Major Themes and Ideas","Satire of church power; gossip and observation; submissiveness of local leaders; fear of authority."],
    ["Purpose of Rizal","To portray Tagalog customs, psychology, and daily life in the native language through humor and satire."],
    ["Historical Significance","It is regarded as Rizal’s unfinished third novel and an important attempt to write a novel in Tagalog."],
    ["Contribution","Highlights Rizal’s Tagalog humor and satire and his interest in the national language."],
    ["Important Lesson","Blind fear and excessive obedience to powerful people can create panic and rumors; understanding should replace fear."]
   ]},
  {id:"memorias",title:"Memorias de un Estudiante de Manila",type:"Autobiography / Memoirs",category:"memoir",year:"1878–1881",image:"images/memorias-estudiante-manila.jpg",
   sections:[
    ["Title of the Work","Memorias de un Estudiante de Manila — Memoirs of a Student in Manila."],
    ["Type / Genre","Autobiography / memoirs."],
    ["Date / Year Written or Published","Written between 1878 and 1881 when Rizal was around 17–20 years old."],
    ["Background / History","Rizal wrote the memoirs during his student years to record early life and personal memories, using the pseudonym P. Jacinto."],
    ["Summary / Main Content","It shares memories of growing up in Calamba, family life, early heartbreak, his mother’s arrest, schooling in Biñan, and student life at Ateneo Municipal de Manila and the University of Santo Tomas."],
    ["Main Characters","José Rizal/P. Jacinto; Teodora Alonso; Francisco Mercado; Paciano Rizal; Segunda Katigbak."],
    ["Major Themes and Ideas","Love of family and home; education; intellectual growth; pain of injustice and heartbreak; personal growth; national identity."],
    ["Purpose of Rizal","To reflect on formative childhood and student experiences and document how family, studies, and hardships shaped him."],
    ["Historical Significance","A valuable personal record of Rizal’s youth and student life written directly by him."],
    ["Contribution","Provides insight into 19th-century student life and family dynamics in the Philippines."],
    ["Important Lesson","Education, strong family values, and resilience through early struggles help build character."]
   ]},
  {id:"vision",title:"La Visión del Fray Rodriguez",type:"Satirical Prose / Allegorical Narrative",category:"satire",year:"1889",image:"images/la-vision-fray-rodriguez.jpg",
   sections:[
    ["Title of the Work","La Visión del Fray Rodriguez — The Vision of Friar Rodriguez."],
    ["Type / Genre","Satirical prose piece / short allegorical narrative."],
    ["Date / Year Written or Published","1889."],
    ["Background / History","Written after Friar Rodríguez criticized Noli Me Tangere and attacked Rizal’s ideas. The piece served as a satirical defense against the friar’s accusations."],
    ["Summary / Main Content","A vision or dream confronts Friar Rodríguez with criticism of arrogance, vanity, and abuses associated with religious authority. Humor and allegory expose hypocrisy, greed, and misuse of power."],
    ["Main Characters","Fray Jose Rodriguez; a mysterious old man or stranger; in some retellings, religious figures such as Augustine, Dominic, Francis of Assisi, and Ignatius of Loyola."],
    ["Major Themes and Ideas","Clerical arrogance and hypocrisy; abuse of power; satire as protest; truth; moral accountability; religious sincerity."],
    ["Purpose of Rizal","To defend Noli Me Tangere, expose misuse of religious authority, challenge blind obedience, and encourage critical thinking."],
    ["Historical Significance","Shows Rizal’s direct opposition to the domination of Spanish friars in Philippine society and his use of satire in nationalist writing."],
    ["Contribution","A strong example of political satire and allegory reflecting intellectual protest during the late Spanish colonial period."],
    ["Important Lesson","Authority should never be used for pride, greed, or abuse; people should stand for truth and think critically."]
   ]}
];
function renderWorks(filter='all'){
  const grid=document.getElementById('worksGrid');if(!grid)return;grid.innerHTML='';
  const list=works.filter(w=>filter==='all'||w.category===filter);
  list.forEach(w=>{const card=document.createElement('article');card.className='work-card';card.innerHTML=`<img src="${w.image}" alt="${w.title}"><div class="work-info"><span class="work-type">${w.type}</span><h3>${w.title}</h3><p class="work-year">${w.year}</p><button type="button" class="primary-btn" data-work="${w.id}">EXPLORE WORK</button></div>`;const img=card.querySelector('img');img.addEventListener('error',()=>{img.classList.add('image-missing');img.insertAdjacentHTML('afterend',`<div class="image-placeholder">${w.title}</div>`)});card.querySelector('[data-work]').addEventListener('click',()=>openWork(w.id));grid.appendChild(card)});
}
function openWork(id){const w=works.find(x=>x.id===id);const modal=document.getElementById('workModal');const body=document.getElementById('modalBody');if(!w||!modal||!body)return;body.innerHTML=`<div class="modal-layout"><img src="${w.image}" alt="${w.title}"><div class="modal-body"><p class="eyebrow">${w.type}</p><h2>${w.title}</h2><p class="modal-meta">${w.year}</p>${w.sections.map(s=>`<section><h3>${s[0]}</h3><p>${s[1]}</p></section>`).join('')}</div></div>`;const img=body.querySelector('img');img.addEventListener('error',()=>{img.classList.add('image-missing');img.insertAdjacentHTML('afterend',`<div class="image-placeholder">${w.title}</div>`)});modal.classList.remove('hidden');document.body.style.overflow='hidden'}
function closeModal(){const modal=document.getElementById('workModal');if(modal){modal.classList.add('hidden');document.body.style.overflow=''}}

const matchQuestions=[{work:'Noli Me Tangere',answer:'Novel'},{work:'Mi Último Adiós',answer:'Poem'},{work:'Junto al Pasig',answer:'Drama / Play'},{work:'Filipinas Dentro de Cien Años',answer:'Essay'},{work:'Memorias de un Estudiante de Manila',answer:'Memoir'}];
function buildMatchGame(){const box=document.getElementById('matchGame');if(!box)return;box.innerHTML=matchQuestions.map((q,i)=>`<div class="match-row"><label for="match${i}">${q.work}</label><select id="match${i}"><option value="">Choose...</option><option>Novel</option><option>Poem</option><option>Essay</option><option>Drama / Play</option><option>Memoir</option></select></div>`).join('')}
function checkMatches(){let correct=0;matchQuestions.forEach((q,i)=>{const el=document.getElementById(`match${i}`);if(el&&el.value===q.answer)correct++});const result=document.getElementById('matchResult');if(result)result.textContent=`You got ${correct}/${matchQuestions.length} correct!`}

function closeReflection(id){const modal=document.getElementById(id);if(modal){modal.classList.remove('show');document.body.style.overflow=''}}
function openReflection(id){const modal=document.getElementById(id);if(modal){modal.classList.add('show');document.body.style.overflow='hidden'}}

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();document.querySelectorAll('.reflection-modal.show').forEach(m=>m.classList.remove('show'));document.body.style.overflow=''}});
document.addEventListener('click',e=>{const modal=document.getElementById('workModal');if(modal&&e.target===modal)closeModal();document.querySelectorAll('.reflection-modal.show').forEach(m=>{if(e.target===m)closeReflection(m.id)})});
document.addEventListener('DOMContentLoaded',()=>{
  renderWorks(); buildMatchGame();
  document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderWorks(btn.dataset.filter)}));
  document.querySelectorAll('.reflection-modal').forEach(modal=>modal.addEventListener('click',e=>{if(e.target===modal)closeReflection(modal.id)}));
  document.querySelectorAll('.site-header nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mainNav')?.classList.remove('open')));
});
