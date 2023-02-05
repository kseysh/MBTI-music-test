// EI/NS/FT/JP 순서대로 01234567

const qnaList = [
  {
    q: '1. 내가 좋아하는 음악 장르는?',
    a: [
      { answer: 'a. 나만 아는 인디음악!', type: [1,2,4] },
      { answer: 'b. 몸이 들썩들썩 kpop!', type: [0,3] },
      { answer: 'c. 언제나 감성적인 발라드!', type: [1,3 ] },
    ]
  },
  {
    q: '2. 나는 노래를 들을 때 ',
    a: [
      { answer: 'a. 그때그때 듣고싶은 노래를 듣는다. ', type: [2] },
      { answer: 'b. 내가 만들어 둔 플레이리스트를 듣는다.', type: [3,6] },
      { answer: 'c. 음악 앱에서 나오는 대로 듣는다.', type: [3,7] },
    ]
  },
  {
    q: '3. 둘 중 내가 더 끌리는 노래는?',
    a: [
      { answer: 'a. 내 취향의 처음 들어보는 노래가 끌려', type: [2] },
      { answer: 'b. 자주 듣는 노래에는 이유가 다 있지~', type: [3,6] },
      { answer: 'c. 둘 다 좋은걸..?.', type: [3,7] }
    ]
  },
  {
    q: '4. 나는 음악을 들을 때',
    a: [
      { answer: 'a. 음악에 집중할 수 있는 이어폰이나 헤드폰으로 들어" ', type: [2] },
      { answer: 'b. 노래는 크게 트는게 제 맛이지, 스피커로 들어!" ', type: [3,6 ] },
      { answer: 'c. 항상 노래를 틀 수 있는 핸드폰을 두고 굳이..?, 핸드폰으로 들으면 되지~" ', type: [3,7] },
    ]
  },
  {
    q: '5. 나는 노래방을 가면',
    a: [
      { answer: 'a. 당연히 스타트는 내가 끊어야지!', type: [0,7] },
      { answer: 'b. 먼저 부르는건 조금 부끄러우니 조금 있다가 불러야지', type: [1,6]},
      { answer: 'c. 주인공은 맨 마지막에 나서는 법!', type: [] },
    ]
  },

  {
    q: '6. 음악은 이 때 듣는게 제일 좋은 것 같아',
    a: [
      { answer: 'a. 드라이브하며 크게 틀어놓고 감상할 때', type: [2,5] },
      { answer: 'b. 잔잔하게 산책하면서~', type: [1,2,4] },
      { answer: 'c. 축제나 공연에서 신나게 들을 때!', type: [0,3,5 ] },
    ]
  },
  {
    q: '7. 좋아하는 가수의 앨범이 나왔을 때',
    a: [
      { answer: 'a. 제일 유명한 대표곡부터 많이 들은 순으로 듣는다.', type: [0] },
      { answer: 'b. 앨범 수록곡중 끌리는 음악을 듣는다.', type: [1,4 ] },
      { answer: 'c. 수록된 노래를 전부 듣는다.', type: [1 ] },
    ]
  },
  {
    q: '8. 인생곡을 발견했을 때 나는',
    a: [
      { answer: 'a. 동네방네 소문낸다.', type: [0 ] },
      { answer: 'b. 혼자 무한반복해서 듣는다.', type: [1 ] },
      { answer: 'c. 친한 사람에게만 공유한다.', type: [] },
    ]
  },
  {
    q: '9. 친구가 "내가 힘들었을 때 버티게 해줬던 노랜데 한 번 들어봐!"',
    a: [
      { answer: 'a. 오 어떤 노랜데??', type: [5 ] },
      { answer: 'b. 헐랭..왜 힘들었었어...ㅠㅠ', type: [4] },
      { answer: 'c. 잉...귀찮아...', type: [5] },
    ]
  },
  {
    q: '10. 노래를 들을 때 더 집중하는 것은? ',
    a: [
      { answer: 'a. 당연히 멜로디지~', type: [2,4,7] },
      { answer: 'b. 아냐 당연히 가사에 집중해야지', type: [3,4,6] },
      { answer: 'c. 야야 그 뒤에 숨겨져있는 비트가 중요한거야..!', type: [0,3,5] },
    ]
  },
  {
    q: '11. 나는 보통 음악 감상을 하며 ',
    a: [
      { answer: 'a. 공원을 걸으면서 산책을 해.', type: [2,4] },
      { answer: 'b. 열심히 일이나 공부를 해!', type: [2,5] },
      { answer: 'c. 응..? 출근해야지....', type: [3,5,6] },
    ]
  },
  {
    q: '12. 이 노래가 나오는 장면에서 내가 주인공이라면??',
    a: [
      { answer: 'a. 데이트 가는 길일 것 같은데?', type: [4] },
      { answer: 'b. 아침에 일어나서 하루를 시작할 것 같아!', type: [1,6] },
      { answer: 'c. 친구랑 여행을 떠날 것 같아~', type: [0]},
    ]
  }
]

const infoList = [
  {
    name: '음악은 나에게 휴식 공간',
    desc: '혼자서 음악으로 지친 하루를 달래는 당신! 노래를 들으며 가끔 울기도 한다.',
    music: ['백예린 : Dear my blue', '잔나비 : She', '이강승 : 우리가 맞다는 대답을 할거에요', 'Michael Jackson : Heal the World','아이유 : 겨울잠','짙은 : 잘 지내자, 우리, 잘 지내자, 우리','그_냥 : 행복할거야','볼빨간사춘기 : 나의 사춘기에게','그_냥 : 손편지','펀치 : 밤이 되니까','나오미 스콧 : Speecheless','Billie Eilish : idontwannabeyouanymore','잔나비 : 가을밤에 든 생각']
    ,friend:[1,6]
  },//isfp, infp 0
  {
    name: '언제나 안정적인게 좋아 너무 어딘가에 치우치지 않는 음악!  ',
    desc: '음악이던 인간관계던 안정적인 것을 추구하는 당신! 트렌디 하면서 적당히 신나고 적당히 잔잔한 음악을 좋아한다. 감성적인 힙합이나 팝송도 좋아한다'
    ,music:['아이유 : 마음', '김동률 : 배려', 'Sam Smith : To Die For','비비 : PADO','헤이즈 : And July','악동뮤지션 : 고래','해쉬 스완 : 나는 과연 너를','펀치 : Done For Me','줍에이 : 반복','Owen : City','Pink Sweat : At my worst','한요한 : 람보르기니','릴러말즈 : OUT OF MY SIGHT','10CM : 그라데이션']
    ,friend:[0,6]
  },//isfj, estp?? 1
  {
    name: '도입부만으로 노래 전체를 판단할 수 있는 선견지명!  ',
    desc: '도입부가 좋아야 하는 도입부 띵곡을 주로 듣는 당신! 이 타입에게 받는 노래 추천은 성공할 확률 100%!'
    ,music:['Fifth Harmony : Worth it','SURAN : 오늘 취하면','Troye Sivan : Angel Baby','keshi : 2 soon', 'LANY : dna','Unlike Pluto : Everything Black','Coldplay : Everglow','AKMU : 째깍 째깍 째깍','I Don\'t Think That I Like Her','아이유 : 어푸','10cm : 서울의 잠 못 이루는 밤','Harry Styles : As It Was','Owl City : Good Time']
    ,friend:[4,5]
  },//istp, entp 2
  {
    name: '남에게 절대 자신의 끼를 드러내지 않는 내적 댄스러!',
    desc: '혼자 있는 것을 즐기며 내적 댄스 유발하는 음악을 들으며 산책하는 것을 좋아한다. 친한친구에게는 숨겨져 있던 끼가 드러날지도...?'
    ,music:['Fitz and The Tantrums : HandClap','유라 : 춤','MAX : Checklist','Conan Gray : Maniac','Charilie Puth : Done for Me','Lil Nas X : Star Walkin','Nathan Evans : Wellerman','OneRepublic : I Ain\'t Worried','Anne-Marie : 2002','버스커 버스커 : 그댈 마주하는건 힘들어','아이유 : Coin','Big Naughty : Vancouver','Charlie Puth : That\'s Hilarious','Alan Walker : The Drum']
    ,friend:[7,8]
  },//istj 3 
  {
    name: '한 곡에 꽂히면 질릴 때 까지 파는 두더지! ',
    desc: '노래 하나를 하루종일 반복노래로 듣는 당신! 특별한 취향 덕에 꽂힌 노래가 남에게는 호불호가 갈리기도 한다'
    ,music:['백예린 : 그건 아마 우리의 잘못은 아닐 거야','데이먼스 이어 : Auburn','Fall Out Boy : Centuries','CHEEZE : Mandaleine Love','이강승 : 우리가 맞다는 대답을 할 거에요','Coldplay : Viva la vida','Post Malone : Stay','AKMU : 전쟁터','BIGBANG : Blue','자우림 : 스물다섯, 스물하나','잔나비 : November Rain','10CM : 서랍']
    ,friend:[2,5]
  },//intj, esfp 4
  {
    name: '나만 아는 노래를 수집하는 숨겨진 원석 탐험가!',
    desc: '남과 같은 것은 거부하는 당신! 남에게 흔하지 않은 노래를 추천해 줄 때 뿌듯함을 느낀다. 음악을 고를 때 자신만의 기준이 확고하다. 멜론 차트에 있는 노래보다는 직접 찾은 노래를 선호한다. 나만 알던 노래가 순위권에 들어가게 되면 괜히 섭섭해진다.    '
    ,music:['거미 : Autumn Breeze','Anson Seabra : Peter Pan Was Right','카더가든 : 가까운 듯 먼 그대여','잔나비 : 꿈나라 별나라','너드커넥션 : 29','위수 : 교토','신해경 그대는 총천연색','잔나비 : 달','Seori : 긴 밤','Finn Askew : Roses','Billie Eilish : bellyache','해쉬 스완 : Indian Summer','시온 : Braindead']
    ,friend:[2,4]
  },//infj,intp 5
  {
    name: '사람에게 상처받은 마음을 음악으로 치유하는 타입',
    desc: '정이 많아 주변사람들에게 잘해주는 만큼 상처받기도 하고 힘들어하기도 하는 당신! 이별하게 되면 후유증이 오래가며 마음이 돌아서면 다시 돌이키기 어렵다. 사람 만나는 것도, 혼자 있는 것도 모두 좋아한다.'
    ,music:['다비치 : 안녕이라고 말하지마','CHEEZE : Mood Indigo','노을 : 늦은 밤 너의 집 앞 골목길에서','권진아 : 운이 좋았지','알레프 : No One Told Me Why','김나영 : 솔직하게 말해서 나', '한요한 : 불꽃','악동뮤지션 : 어떻게 이별까지 사랑하겠어, 널 사랑하는 거지','다비치 : 거북이','잔나비 : 꿈과 책과 힘과 벽','DAY6 : 한 페이지가 될 수 있게','아이유 : 잠 못드는 밤 비는 내리고','매드클라운 : 우리집을 못 찾겠군요']
    ,friend:[0,1]
  },//enfj 6
  {
    name: '긍정 가득 열정 가득 몰입왕 노동요는 나에게 각성제!',
    desc: '열정이 가득해 과제나 일을 하며 효율성을 올리기 위해 음악을 듣는 당신! 대중적인 음악을 좋아해 차트에 있는 음악을 주기적으로 체크하기도 한다.'
    ,music:['Lizzo : Juice','Mark Ronson : Uptown Funk','Psy : 어땠을까','Imagine Dragon : Enemy','Avicii : The Nights','The Weeknd : Blinding Lights','줍에이 : 하루를 어떻게 써야 해','Post Malone : Circles','AKMU : 낙하','GAYLE : abcdfu','Lil Nas X : INDUSTRY BABY','DAY6 : Love me or Leave me','Coldplay : My Universe','AJR : World\'s Smallest Violin','Kelly Clarkson : Stronger','LMFAO : Party Rock Anthem']
    ,friend:[3,8]
  },//estj, esfj,entj 7
  {
    name: '흥이 난다 흥이나 인간 비타민!',
    desc: '흥이 뭔지 아는 당신! 신나는 노래를 주로 좋아하며 사랑 노래를 들으며 혼자 이성과 상상 속에서 사랑에 빠지다가 금방 이별 노래를 들으며 상상속 이성과 가슴 아픈 이별을 하기도 한다. 좋아하는 노래가 금방 바뀌며 누구보다 순수한 마음을 가지고 있다.'
    ,music:['BIGBANG : Tonight','Charlie Puth : Light Switch','윤하 : 비밀번호 486','Weeekly : After School','엔플라잉 : 옥탑방','NewJeans : Cookie','윤하 : 오르트구름','아이유 : 삐삐','츄 : 일과 이분의 일','NewJeans : Hype Boy','Carly Rae Jepsen : Call Me Maybe','Bruno Mars : Marry You','Aqua : Barbie Girl','Kesha : TiK ToK','샤키라 : Try Everything','One Direction : What Makes You Beautiful','레게 강 같은 평화 : 부산 바캉스']
    ,friend:[3,7]
  }//enfp 8
]
