// 理想罗盘 - 数据层
// ============================================================
// DATA
// ============================================================

// ============================================================
// IDEAL TYPE PATHWAYS & CULTIVATION SYSTEM
// ============================================================
const IDEAL_PATHWAYS = {
  moon: { name: "月亮途径", icon: "🌙", tagline: "向内求 · 修炼自我", desc: "你的理想指向内心深处——你想成为一个更清醒、更完整、更不被外界左右的人。你的力量来自觉察、内省和精神的深度。", stages: [
    { name: "觉察者", desc: "开始观察自己的情绪、欲望和惯性反应。能从「我为什么这样想」追溯到「我真的要什么」。标志：可以独立分辨自己的真实需求和外部期待。", milestone: "连续7天每天写15分钟反思日记", icon: "👁️" },
    { name: "守心者", desc: "建立稳定的内在秩序。外界的评价、诱惑和压力不再轻易晃动你的方向。标志：被质疑时能心平气和地表达立场而不自我怀疑。", milestone: "在3次令你焦虑的外界压力中保持自己的判断", icon: "🛡️" },
    { name: "觉者", desc: "你不仅能觉察自己，还能帮助他人看清他们的方向。你的存在本身就是一种安静的力量。标志：有人因为你的一句话或一个行为而改变了人生的选择。", milestone: "写出你的个人哲学并分享给至少10个人", icon: "💡" }
  ]},
  star: { name: "星火途径", icon: "🔥", tagline: "向外行 · 改变世界", desc: "你的理想指向外部——你想做事、创造价值、留下痕迹。你的动力来自行动、影响和可见的成果。", stages: [
    { name: "播火者", desc: "找到一个具体的问题或目标，点燃第一簇火焰。不再只是想，而是开始做。标志：完成一项你筹划已久的行动——哪怕很小。", milestone: "启动一个具体的项目或行动，做出第一个可见成果", icon: "🌱" },
    { name: "燎原者", desc: "你的行动产生了涟漪效应——有人被带动、被影响。你开始从个人行动走向协作和放大。标志：你的行动直接影响了至少5个人。", milestone: "带领至少3个人参与你的项目，产生集体成果", icon: "🔥" },
    { name: "铸光者", desc: "你在某个领域建立了系统性的改变——不是一时的热度，而是可持续的结构、方法或作品。标志：你的成果可以脱离你本人继续运作。", milestone: "建立一个可以自行运转的机制或产出持久作品", icon: "✨" }
  ]},
  bridge: { name: "桥梁途径", icon: "🌉", tagline: "连接人 · 搭建关系", desc: "你的理想指向人与人之间——你想连接、沟通、赋能他人。你的力量来自理解、倾听和编织关系网络。", stages: [
    { name: "倾听者", desc: "学会真正听见别人——不只是语言，还有言外之意。标志：有人对你说「你是第一个真正理解我的人」。", milestone: "和3个不同的人深度交谈，只问问题不给建议", icon: "👂" },
    { name: "织网者", desc: "主动连接不同的人，创造原本不会发生的协作和友谊。标志：你促成了至少一次有价值的「人脉连接」。", milestone: "组织一次小型聚会或协作，连接不同圈子的人", icon: "🕸️" },
    { name: "架桥者", desc: "你搭建的桥梁可以承载很多人——一个社区、一个平台、一个长久的连接机制。标志：你创造的连接在你离开后依然活跃。", milestone: "建立一个持续运营的社群或协作网络", icon: "🌉" }
  ]},
  root: { name: "根源途径", icon: "🧿", tagline: "守护 · 传承", desc: "你的理想指向守护——你想保护和传承那些有价值但正在消逝的东西。你的力量来自坚定、耐心和对历史的尊重。", stages: [
    { name: "守护者", desc: "识别并开始保护一样你珍视的事物——可能是一段记忆、一种手艺、一个地方或一种传统。标志：你为守护对象做了第一件具体的事。", milestone: "记录或学习一项你珍视但正在消失的技能/知识", icon: "🏛️" },
    { name: "修复者", desc: "从守护走向修复——不只是保存，而是让它重新鲜活。标志：你修复的对象开始被更多人看到或使用。", milestone: "将你守护的东西以新形式呈现给至少20个人", icon: "🔧" },
    { name: "传灯者", desc: "培养下一代守护者。知识和热情开始跨越代际传递。标志：有人因为你而主动接过了守护的责任。", milestone: "找到或培养至少1个愿意接下你守护使命的人", icon: "🕯️" }
  ]},
  edge: { name: "破界途径", icon: "🌪️", tagline: "探索 · 突破边界", desc: "你的理想指向未知——你想突破现有的边界，探索新的可能。你的力量来自好奇心、勇气和对舒适的永不满足。", stages: [
    { name: "远行者", desc: "走出熟悉的领域，走进陌生的方向。标志：你主动接触了一个完全不熟悉的领域并开始学习。", milestone: "掌握一项与你现有能力完全无关的新技能", icon: "🧭" },
    { name: "破界者", desc: "在已知与未知之间建立联系——发现原本不相关的两个领域之间的隐秘桥梁。标志：你创造了一种「跨界」的成果。", milestone: "将两个不同领域的知识结合，做出一个创新成果", icon: "⚡" },
    { name: "开荒者", desc: "开创全新的领域——不只是跨界，而是发现或定义了一个全新的方向。标志：你的探索为后来者打开了大门。", milestone: "公开发布你的独特方法论或开辟一个新方向", icon: "🗺️" }
  ]}
};

// Weighted classification: deep path uses score vectors, regular path uses keyword matching
function classifyIdealType(answers) {
  var scores = { moon: 0, star: 0, bridge: 0, root: 0, edge: 0 };
  // Try deep path score accumulation first
  if (deepAnswers && deepAnswers.length > 0) {
    deepAnswers.forEach(function(a) {
      a.score.forEach(function(s, i) {
        var keys = ["moon", "star", "bridge", "root", "edge"];
        var roundWeight = (a.round || 1);
        if (a.round === 1 || a.round === 12 || a.round === 17) roundWeight *= 1.5; // repetition rounds
        scores[keys[i]] += s * roundWeight;
      });
    });
  } else {
    // Regular path: weighted keyword matching
    var vals = Object.values(answers);
    vals.forEach(function(a) {
      if (typeof a !== 'string') return;
      var w = 1;
      if (/内|独|思考|觉察|精神|平静|阅读|写|观/i.test(a)) scores.moon += w;
      if (/行动|创造|改|做|影响|项目|启|带领/i.test(a)) scores.star += w;
      if (/人|连接|沟通|倾听|帮|关系|陪伴|社区/i.test(a)) scores.bridge += w;
      if (/守护|保护|传承|修复|历史|保存|传统|手艺/i.test(a)) scores.root += w;
      if (/探|冒|突破|边界|未知|新|冒险|陌生|跨界/i.test(a)) scores.edge += w;
    });
  }
  var best = "moon"; var bestScore = -999;
  Object.keys(scores).forEach(function(k) { if (scores[k] > bestScore) { bestScore = scores[k]; best = k; } });
  // Reset negative scores from reverse rounds
  if (bestScore <= 0) {
    // Fallback: use the first answer's strongest direction
    var keys = ["moon", "star", "bridge", "root", "edge"];
    var mx = 0;
    keys.forEach(function(k) { if (scores[k] > mx) { mx = scores[k]; best = k; } });
    if (mx <= 0) best = "moon";
  }
  return best;
}

// Stage-specific resources for each pathway
const STAGE_RESOURCES = {
  moon: [
    { stage: 0, icon: "👁️", name: "觉察者资源", books: ["被讨厌的勇气", "当下的力量", "也许你该找个人聊聊"], vids: [{ title: "正念冥想入门", type: "Headspace" }, { title: "什么是真正的自我觉察？", type: "The School of Life" }], actions: ["连续7天每天写15分钟情绪日记", "花一周观察自己的三个惯性反应并记录下来"] },
    { stage: 1, icon: "🛡️", name: "守心者资源", books: ["沉思录", "道德经", "活出生命的意义"], vids: [{ title: "斯多葛主义的生活艺术", type: "YouTube" }, { title: "如何在混乱中保持内心秩序？", type: "TED" }], actions: ["在3次令你焦虑的压力中保持自己的判断并记录", "进行一次24小时独处挑战——关掉手机，和自己相处"] },
    { stage: 2, icon: "💡", name: "觉者资源", books: ["思想的力量", "禅与摩托车维修艺术", "有限与无限的游戏"], vids: [{ title: "如何帮助他人找到方向？", type: "TED" }, { title: "哲学如何拯救你的生活？", type: "The School of Life 系列" }], actions: ["写出你的个人哲学并分享给至少10个人", "为一个人做一次深度的'方向教练'——只问问题不給建议"] }
  ],
  star: [
    { stage: 0, icon: "🌱", name: "播火者资源", books: ["从零到一", "原子习惯", "搞定"], vids: [{ title: "如何开始一个项目？", type: "TED" }, { title: "从想法到行动", type: "YouTube" }], actions: ["启动一个小项目并在两周内完成第一个版本", "把你一直想做的项目写成200字描述，发给3个朋友"] },
    { stage: 1, icon: "🔥", name: "燎原者资源", books: ["影响力", "引爆点", "疯传"], vids: [{ title: "如何发起一场运动？", type: "TED (Derek Sivers)" }, { title: "伟大的领导者做什么？", type: "TED (Simon Sinek)" }], actions: ["带领至少3个人一起推进你的项目", "把你的成果写成文章或做成视频，让更多人看到"] },
    { stage: 2, icon: "✨", name: "铸光者资源", books: ["基业长青", "创新者的窘境", "系统之美"], vids: [{ title: "如何建立可持续的系统？", type: "TED" }, { title: "从创业者到建造者", type: "YouTube" }], actions: ["设计一个可以在没有你的情况下自动运行的流程", "把你的方法论写下来，让后来的人可以参考复制"] }
  ],
  bridge: [
    { stage: 0, icon: "👂", name: "倾听者资源", books: ["非暴力沟通", "共情的力量", "社交天性"], vids: [{ title: "脆弱的力量", type: "TED (Brené Brown)" }, { title: "如何成为一个更好的倾听者？", type: "The School of Life" }], actions: ["和3个不同的人深度倾听——只问问题、不给建议", "每天记录一个你从别人那里听到的、让你触动的故事"] },
    { stage: 1, icon: "🕸️", name: "织网者资源", books: ["群体的智慧", "连接", "部落"], vids: [{ title: "如何建立深度连接？", type: "TED" }, { title: "社群的力量", type: "YouTube" }], actions: ["组织一次小型聚会，把两个不同圈子的人连在一起", "主动为三个人牵线——介绍可以互相帮助的人认识"] },
    { stage: 2, icon: "🌉", name: "架桥者资源", books: ["平台革命", "社群的逻辑", "赋能"], vids: [{ title: "如何建立一个持久社群？", type: "TED" }, { title: "从连接到生态", type: "YouTube" }], actions: ["建立或加入一个社群的核心运营团队", "设计一个机制让社群在没有引领者时也能自运转"] }
  ],
  root: [
    { stage: 0, icon: "🏛️", name: "守护者资源", books: ["瓦尔登湖", "留住手艺", "匠人精神"], vids: [{ title: "为什么传统值得守护？", type: "TED" }, { title: "手工艺的复兴", type: "纪录片" }], actions: ["学习一项正在消失的技能——向一位长辈或老师傅请教", "用照片或文字记录一件你所珍视的事物——做一份档案"] },
    { stage: 1, icon: "🔧", name: "修复者资源", books: ["建筑的永恒之道", "修复与再生", "文化记忆"], vids: [{ title: "修复的力量", type: "TED" }, { title: "让旧物重生的设计师们", type: "纪录片" }], actions: ["选一件破损的物件，亲手修复它并记录过程", "把你守护的知识或技能教给至少5个人"] },
    { stage: 2, icon: "🕯️", name: "传灯者资源", books: ["传承", "教育的目的", "最后一堂课"], vids: [{ title: "如何培养接班人？", type: "TED" }, { title: "跨越代际的对话", type: "YouTube" }], actions: ["找到或培养一个愿意继承你使命的人", "为你想传承的东西设计一套教学方案或入门指南"] }
  ],
  edge: [
    { stage: 0, icon: "🧭", name: "远行者资源", books: ["荒野生存", "夜航西飞", "天生就会跑"], vids: [{ title: "为什么走出舒适区如此重要？", type: "TED" }, { title: "跨领域学习的力量", type: "YouTube" }], actions: ["掌握一项与你现有技能完全无关的新技能——30天挑战", "一个人去一个完全陌生的地方——不跟团、不定详细计划"] },
    { stage: 1, icon: "⚡", name: "破界者资源", books: ["创新者的基因", "跨界思考", "创造力的本质"], vids: [{ title: "如何把不同领域的知识结合？", type: "TED" }, { title: "创新的秘密", type: "YouTube" }], actions: ["把两个不同领域的知识/技能结合，做出一件作品", "写一篇'跨界笔记'——分析一个你不熟悉的领域，找出其中可迁移到你的领域的东西"] },
    { stage: 2, icon: "🗺️", name: "开荒者资源", books: ["创新者的解答", "从0到1", "未来的冲击"], vids: [{ title: "如何开拓一个全新的方向？", type: "TED" }, { title: "先驱者的故事", type: "YouTube" }], actions: ["公开发布你的独特方法论或作品——让更多人进入这个新领域", "设计一个'入门路径'，让后来者可以沿着你的足迹前进"] }
  ]
};

// ============================================================
// DEEP QUESTION TREE (branching, multi-round)
// ============================================================
const DEEP_TREE = {
  // R1: What makes you lose track of time?
  r1: { id: "r1", round: 1, q: "什么样的时刻让你觉得「时间消失了」——完全沉浸，忘了周围一切？", presets: [
    { text: "一个人安静地阅读、写作或思考，周围越安静越好。", next: "r2", score: [4,0,1,0,0] },
    { text: "在做一个具体的项目或任务——做手工、写代码、搭东西。", next: "r2", score: [0,4,0,1,1] },
    { text: "和一个或几个人深度聊天，互相倾诉、倾听、分享。", next: "r2", score: [1,0,4,0,1] },
    { text: "整理旧物、修复破损的东西、把混乱变得井井有条。", next: "r2", score: [0,1,0,4,0] },
    { text: "尝试完全陌生的东西——旅行、学新技能、闯进未知。", next: "r2", score: [0,1,1,0,4] }
  ]},
  r2: { id: "r2", round: 2, q: "做什么样的事情让你做完之后精力充沛，而不是疲惫不堪？", presets: [
    { text: "一个人深度思考或学习——弄懂一件事让我很兴奋。", next: "r3", score: [4,0,1,0,1] },
    { text: "做成了一件看得见摸得着的事——很有成就感。", next: "r3", score: [0,4,0,1,1] },
    { text: "帮助了别人，或者促成了一群人的交流合作。", next: "r3", score: [0,1,4,0,0] },
    { text: "修复或保存了一样有价值的东西——物件、关系或记忆。", next: "r3", score: [1,0,1,4,0] },
    { text: "发现了一个新领域、新想法，或者突破了之前的边界。", next: "r3", score: [1,1,0,0,4] }
  ]},
  r3: { id: "r3", round: 3, q: "从小到大，别人最常因为什么夸奖你？", presets: [
    { text: "聪明、想得深——你能看到别人看不到的东西。", next: "r4_branch", score: [4,0,1,0,1] },
    { text: "能干、执行力强——说做就做，而且做得很好。", next: "r4_branch", score: [0,4,1,0,0] },
    { text: "善解人意、好相处——你总能让人感到舒服和被理解。", next: "r4_branch", score: [1,0,4,1,0] },
    { text: "细心、靠谱——交给你的事情一定会被认真对待。", next: "r4_branch", score: [1,1,0,4,0] },
    { text: "有创意、敢冒险——你总是第一个尝试新东西。", next: "r4_branch", score: [0,1,0,0,4] }
  ]},
  // R4-R7: Branch deepening (5 branches x 4 rounds each)
  r4_branch: { id: "r4_branch", round: 4, q: "当你回顾自己最满意的时刻，那个时刻的核心元素是什么？", presets: [
    { text: "我一个人想通了一个重要的问题——内在的顿悟。", next: "r5_moon_a", score: [5,0,0,0,0] },
    { text: "我完成了一件具体的事——成果看得见摸得着。", next: "r5_star_a", score: [0,5,0,0,0] },
    { text: "我和别人产生了深度的共鸣——被理解或理解别人。", next: "r5_bridge_a", score: [0,0,5,0,0] },
    { text: "我保护或修复了某样重要的东西——让它免于消失。", next: "r5_root_a", score: [0,0,0,5,0] },
    { text: "我跨越了一个之前觉得不可能的边界——打开了新世界。", next: "r5_edge_a", score: [0,0,0,0,5] }
  ]},
  // Moon branch
  r5_moon_a: { id: "r5_moon_a", round: 5, q: "当你独处时，什么样的内心活动让你觉得「这样活着很值得」？", presets: [
    { text: "突然理解了一件困惑很久的事——「原来如此」。", next: "r6_moon", score: [5,0,0,0,1] },
    { text: "感受到深层的平静和满足——不是狂喜，而是「对了」。", next: "r6_moon", score: [5,0,1,0,0] },
    { text: "在创作中表达了自己——文字、画、音乐。", next: "r6_moon", score: [3,2,0,0,1] }
  ]},
  r6_moon: { id: "r6_moon", round: 6, q: "回顾你人生中最重要的成长时刻，它通常发生在什么情境下？", presets: [
    { text: "独处反思——我一个人想通了关键问题。", next: "r7_moon", score: [5,0,0,0,0] },
    { text: "面对挑战——困难逼出了我最好的一面。", next: "r7_moon", score: [1,3,0,0,1] },
    { text: "被某个人触动——他让我看到了不一样的自己。", next: "r7_moon", score: [2,0,3,0,0] }
  ]},
  r7_moon: { id: "r7_moon", round: 7, q: "你觉得一个人最重要的内在品质是什么？", presets: [
    { text: "清醒——不被表象迷惑，能看到本质。", next: "r8", score: [5,0,0,0,0] },
    { text: "韧性——被打倒后能站起来。", next: "r8", score: [2,2,0,1,0] },
    { text: "温暖——在理智的同时不失去对人的温度。", next: "r8", score: [1,0,4,0,0] }
  ]},
  // Star branch
  r5_star_a: { id: "r5_star_a", round: 5, q: "做事的时候，什么让你最有成就感？", presets: [
    { text: "从零到一——把想法变成了现实。", next: "r6_star", score: [0,5,0,0,0] },
    { text: "克服了恐惧——做了以前不敢做的事。", next: "r6_star", score: [0,3,0,0,2] },
    { text: "影响了别人——有人因为我做的事也开始行动。", next: "r6_star", score: [0,3,3,0,0] }
  ]},
  r6_star: { id: "r6_star", round: 6, q: "如果你的行动只能产生很小的影响，你还愿意持续做下去吗？", presets: [
    { text: "愿意——小影响也是影响，重要的是我在做。", next: "r7_star", score: [0,3,2,0,0] },
    { text: "看情况——如果它能成长或复制就没问题。", next: "r7_star", score: [0,2,1,2,1] },
    { text: "不太愿意——想把精力放在能产生最大改变的地方。", next: "r7_star", score: [0,5,0,0,0] }
  ]},
  r7_star: { id: "r7_star", round: 7, q: "你更倾向于哪种行动方式？", presets: [
    { text: "独自完成——效率高、控制感强。", next: "r8", score: [1,4,0,0,0] },
    { text: "带领团队——一起做更大的事。", next: "r8", score: [0,2,3,0,0] },
    { text: "启发别人——成为火花，不一定要做最大。", next: "r8", score: [0,3,2,0,0] }
  ]},
  // Bridge branch
  r5_bridge_a: { id: "r5_bridge_a", round: 5, q: "在人与人的关系中，你最看重什么？", presets: [
    { text: "深度的理解——有人真正知道你是谁。", next: "r6_bridge", score: [2,0,4,0,0] },
    { text: "温暖和归属感——知道自己属于一个群体。", next: "r6_bridge", score: [1,0,5,0,0] },
    { text: "赋能——帮助别人变得更好。", next: "r6_bridge", score: [0,2,4,0,0] }
  ]},
  r6_bridge: { id: "r6_bridge", round: 6, q: "你觉得一个人能给另一个人最宝贵的礼物是什么？", presets: [
    { text: "理解——「我懂你」的力量超过一切。", next: "r7_bridge", score: [2,0,4,0,0] },
    { text: "希望——让对方相信明天可以更好。", next: "r7_bridge", score: [0,3,3,0,0] },
    { text: "自由——帮助对方从牢笼里走出来。", next: "r7_bridge", score: [4,0,1,0,0] }
  ]},
  r7_bridge: { id: "r7_bridge", round: 7, q: "帮助别人最深层的动机是什么？", presets: [
    { text: "这是我的使命——我经历过黑暗，所以想给别人光。", next: "r8", score: [2,0,4,0,0] },
    { text: "这样人生才有意义——被需要让我确认自己的价值。", next: "r8", score: [1,2,3,0,0] },
    { text: "这是最自然的活法——人本来就该互相支持。", next: "r8", score: [1,0,3,1,0] }
  ]},
  // Root branch
  r5_root_a: { id: "r5_root_a", round: 5, q: "你想守护的东西，最重要的价值是什么？", presets: [
    { text: "承载了记忆和历史——没有它，过去就消失了。", next: "r6_root", score: [0,0,0,5,0] },
    { text: "它本身就很美——艺术、工艺、大自然的造化。", next: "r6_root", score: [1,0,0,4,1] },
    { text: "能让未来的人受益——传承给后代。", next: "r6_root", score: [0,1,1,4,0] }
  ]},
  r6_root: { id: "r6_root", round: 6, q: "守护和传承，你更在意哪一个？", presets: [
    { text: "守护——此时此刻保护它不被破坏。", next: "r7_root", score: [0,0,0,5,0] },
    { text: "传承——让它活下去，超过我的生命。", next: "r7_root", score: [0,1,1,4,0] },
    { text: "让它进化——在传承中注入新活力。", next: "r7_root", score: [0,1,0,2,3] }
  ]},
  r7_root: { id: "r7_root", round: 7, q: "守护的过程中，最难战胜的敌人是什么？", presets: [
    { text: "时间的流逝——东西会坏、人会老、记忆会褪色。", next: "r8", score: [0,0,0,5,0] },
    { text: "人们的漠视——大家觉得不重要，没人帮忙。", next: "r8", score: [0,1,3,2,0] },
    { text: "自己的怀疑——有时候我也在想「这值得吗」。", next: "r8", score: [4,0,0,1,0] }
  ]},
  // Edge branch
  r5_edge_a: { id: "r5_edge_a", round: 5, q: "你探索的动力主要来自哪里？", presets: [
    { text: "好奇心——「我不知道，我想搞清楚」。", next: "r6_edge", score: [2,0,0,0,4] },
    { text: "对自由的渴望——「我不想被任何边界定义」。", next: "r6_edge", score: [1,1,0,0,4] },
    { text: "对现状不满足——「一定还有更好的方式」。", next: "r6_edge", score: [0,3,0,0,3] }
  ]},
  r6_edge: { id: "r6_edge", round: 6, q: "突破边界最让你兴奋的是什么？", presets: [
    { text: "看到别人没看到的——发现新大陆。", next: "r7_edge", score: [0,0,0,0,5] },
    { text: "把不可能变成可能——用行动证明。", next: "r7_edge", score: [0,3,0,0,3] },
    { text: "打破别人的思维局限——帮更多人看到更大的世界。", next: "r7_edge", score: [1,1,3,0,1] }
  ]},
  r7_edge: { id: "r7_edge", round: 7, q: "如果给你完全的自由、没有任何约束，你第一件事做什么？", presets: [
    { text: "去一个陌生的地方，重新开始。", next: "r8", score: [0,1,0,0,5] },
    { text: "开始做那个一直想做但没敢做的事。", next: "r8", score: [0,4,0,0,1] },
    { text: "什么都不做——享受自由本身。", next: "r8", score: [4,0,0,0,1] }
  ]},
  // R8-R10: Values (shared)
  r8: { id: "r8", round: 8, q: "如果让你选一个，你觉得什么样的人生最值得过？", presets: [
    { text: "清醒自觉的一生——充分了解自己，不被外界摆布。", next: "r9", score: [5,0,0,0,0] },
    { text: "创造改变的一生——留下点什么，让世界因我不同。", next: "r9", score: [0,5,0,0,0] },
    { text: "深度连接的一生——被爱、被记住、被需要。", next: "r9", score: [0,0,5,0,0] },
    { text: "守护传承的一生——保护重要的东西不被时间抹去。", next: "r9", score: [0,0,0,5,0] },
    { text: "自由探索的一生——不被任何边界定义，永远在路上。", next: "r9", score: [0,0,0,0,5] }
  ]},
  r9: { id: "r9", round: 9, q: "对你来说，最不能妥协的是什么？", presets: [
    { text: "对自己诚实——我不骗自己。", next: "r10", score: [5,0,0,0,0] },
    { text: "做的事必须有意义——不能虚度光阴。", next: "r10", score: [0,4,0,1,0] },
    { text: "不能伤害身边的人——善良是底线。", next: "r10", score: [0,0,5,0,0] },
    { text: "重要的东西不能丢——断了就要接上。", next: "r10", score: [0,0,0,5,0] },
    { text: "不能被任何东西绑架我的人生。", next: "r10", score: [1,0,0,0,4] }
  ]},
  r10: { id: "r10", round: 10, q: "你想为了什么而承受痛苦？值得你吃苦的东西通常就是你的方向。", presets: [
    { text: "为了了解真相——即使真相让人不舒服。", next: "r11", score: [4,0,1,0,1] },
    { text: "为了做出改变——不怕苦，怕没结果。", next: "r11", score: [0,4,0,0,1] },
    { text: "为了在乎的人——为别人吃苦我愿意。", next: "r11", score: [0,0,4,1,0] },
    { text: "为了守护原则——有些底线不能退。", next: "r11", score: [0,0,0,5,0] },
    { text: "为了自由——吃苦是为了以后不被人掌控。", next: "r11", score: [0,1,0,0,4] }
  ]},
  // R11-R13: Reverse layer (REPETITION from opposite angle)
  r11: { id: "r11", round: 11, q: "（换个角度看自己）什么样的事让你做完之后感到「能量被掏空了」？", presets: [
    { text: "被迫参加大型社交活动——人太多、太吵、要营业。", next: "r12", score: [3,0,-2,0,1] },
    { text: "做重复的、没有创造性的机械工作。", next: "r12", score: [0,-2,0,-1,2] },
    { text: "处理人际冲突——吵架、冷战、夹在中间调解。", next: "r12", score: [1,0,-2,0,0] },
    { text: "在混乱无序的环境中——没有计划、没有结构。", next: "r12", score: [0,-1,0,-2,0] },
    { text: "被困在同一个地方、同一个节奏太久——无聊至极。", next: "r12", score: [0,-1,0,0,-2] }
  ]},
  r12: { id: "r12", round: 12, q: "你见过的最让你不想过的人生是什么样的？描述那种状态。", presets: [
    { text: "麻木的——每天重复一样的事，眼里没有光。", next: "r13", score: [3,1,0,0,1] },
    { text: "空虚的——什么都有，但不知道活着为了什么。", next: "r13", score: [4,0,0,0,1] },
    { text: "孤独的——没有人真正理解他，没有深度关系。", next: "r13", score: [0,0,4,0,0] },
    { text: "被遗忘的——做了一辈子，什么都没留下。", next: "r13", score: [0,2,0,3,0] },
    { text: "被困住的——想走但走不了，被现实绑死。", next: "r13", score: [0,1,0,0,4] }
  ]},
  r13: { id: "r13", round: 13, q: "把刚才你写下的「不想成为的样子」翻转——它的反面是不是就是你真正的理想？用你的语言描述。", presets: [
    { text: "对——我不想变麻木，所以我要永远保持好奇和清醒。", next: "r14", score: [4,0,1,0,1] },
    { text: "对——我不想变空虚，所以我要做有意义有影响的事。", next: "r14", score: [0,4,0,0,1] },
    { text: "对——我不想被遗忘也不想孤独，所以我要建立深度连接。", next: "r14", score: [0,0,4,1,0] },
    { text: "对——我不想重要的东西消失，所以我要守护和传承。", next: "r14", score: [0,0,0,5,0] },
    { text: "对——我不想被困住，所以我要永远保持自由和突破。", next: "r14", score: [0,0,0,0,5] }
  ]},
  // R14-R16: Vision (shared)
  r14: { id: "r14", round: 14, q: "如果十年后你成为了理想中的自己，你最希望身边的人怎么描述你？", presets: [
    { text: "「他/她是一个内心非常强大、非常清醒的人。」", next: "r15", score: [5,0,0,0,0] },
    { text: "「他/她是一个真正改变了某些事情的人。」", next: "r15", score: [0,5,0,0,0] },
    { text: "「他/她让很多人感受到了温暖和被理解。」", next: "r15", score: [0,0,5,0,0] },
    { text: "「他/她守护了一些很重要的东西，没有让它们消失。」", next: "r15", score: [0,0,0,5,0] },
    { text: "「他/她过着一种完全不同的生活，让人羡慕也佩服。」", next: "r15", score: [0,0,0,0,5] }
  ]},
  r15: { id: "r15", round: 15, q: "你想在这个世界上留下什么？不一定要很大——可以是很具体的东西。", presets: [
    { text: "一种看待世界的方式——帮助人更清醒地活着。", next: "r16", score: [4,0,1,1,0] },
    { text: "一个改变——某个规则、系统或环境因为我变好了。", next: "r16", score: [0,4,0,1,1] },
    { text: "一群因为我的存在而变得不一样的人。", next: "r16", score: [0,1,4,0,0] },
    { text: "一种手艺、知识或记忆——让它不要断代。", next: "r16", score: [0,0,0,5,0] },
    { text: "一种可能性——给后来者打开一扇之前没有的门。", next: "r16", score: [0,1,0,0,4] }
  ]},
  r16: { id: "r16", round: 16, q: "想象你80岁生日那天，回顾一生，你最骄傲的是什么？", presets: [
    { text: "我从未停止了解自己——活得清醒、活得真实。", next: "r17", score: [5,0,0,0,0] },
    { text: "我做了几件真正改变事情的事——留下了痕迹。", next: "r17", score: [0,5,0,0,0] },
    { text: "我身边的人都因我过得更好——被记住了。", next: "r17", score: [0,0,5,0,0] },
    { text: "我守住了对我重要的东西——没有辜负自己。", next: "r17", score: [0,0,0,5,0] },
    { text: "我按自己的方式活了一辈子——没有模板。", next: "r17", score: [0,0,0,0,5] }
  ]},
  // R17-R18: Tradeoff (REPETITION of values, forced ranking)
  r17: { id: "r17", round: 17, q: "（回到价值观——最后一道考验）如果你必须放弃以下之一，你最后放弃哪个？选最后放弃的那个。", presets: [
    { text: "自我认知——放弃了解自己的机会。", next: "r18", score: [5,0,0,0,0] },
    { text: "影响力——放弃改变世界的机会。", next: "r18", score: [0,5,0,0,0] },
    { text: "深度关系——放弃和少数人的真正连接。", next: "r18", score: [0,0,5,0,0] },
    { text: "传承——放弃把重要的东西留下去的机会。", next: "r18", score: [0,0,0,5,0] },
    { text: "自由——放弃不被任何人和事束缚的权利。", next: "r18", score: [0,0,0,0,5] }
  ]},
  r18: { id: "r18", round: 18, q: "如果让你选一个「绝对不会放弃」的东西——没有任何商量余地——是什么？", presets: [
    { text: "对自己的诚实——我不骗自己，绝不。", next: "r19", score: [5,0,0,0,0] },
    { text: "对世界的影响力——我来过，就要留下痕迹。", next: "r19", score: [0,5,0,0,0] },
    { text: "对爱的人的承诺——辜负信任我的人，我做不到。", next: "r19", score: [0,0,5,0,0] },
    { text: "对信念的坚守——有些东西比命重要。", next: "r19", score: [0,0,0,5,0] },
    { text: "对自己的主权——谁也不能替我决定我的人生。", next: "r19", score: [0,0,0,0,5] }
  ]},
  // R19-R20: Integration (shared)
  r19: { id: "r19", round: 19, q: "回顾你所有的回答——你发现了一个什么样的规律或主题？试着用一句话总结。", presets: [
    { text: "我一直在追求「清醒」——不被骗、不麻木、不随波逐流。", next: "r20", score: [5,0,1,0,0] },
    { text: "我一直在追求「创造」——做出点什么、留下点什么。", next: "r20", score: [0,5,0,0,1] },
    { text: "我一直在追求「连接」——人与人之间的温度和力量。", next: "r20", score: [0,0,5,0,0] },
    { text: "我一直在追求「完整」——重要的东西不能断、不能丢。", next: "r20", score: [0,0,0,5,0] },
    { text: "我一直在追求「突破」——永远有下一个边界等着打破。", next: "r20", score: [0,0,0,0,5] }
  ]},
  r20: { id: "r20", round: 20, q: "给你的理想起一个名字——可以是一句话、一个词、一个意象。你会叫它什么？", presets: [
    { text: "「明月」——内心的光明和清醒。", next: "end_moon", score: [5,0,0,0,0] },
    { text: "「淬火」——行动如烈火，淬炼出真实的自己。", next: "end_star", score: [0,5,0,0,0] },
    { text: "「渡桥」——连接此岸和彼岸，连接人和人。", next: "end_bridge", score: [0,0,5,0,0] },
    { text: "「青山」——不动如山，守护岁月的馈赠。", next: "end_root", score: [0,0,0,5,0] },
    { text: "「破浪」——永远向未知的海域出发。", next: "end_edge", score: [0,0,0,0,5] }
  ]},
  end_moon: { id: "end_moon", end: true, type: "moon" },
  end_star: { id: "end_star", end: true, type: "star" },
  end_bridge: { id: "end_bridge", end: true, type: "bridge" },
  end_root: { id: "end_root", end: true, type: "root" },
  end_edge: { id: "end_edge", end: true, type: "edge" }
};
// Deep exploration state
let deepNode = null, deepAnswers = [], deepIdealType = null;

const PATH_META = {
  reflect: { name: "静思 · 与自己对话", emoji: "🌙", desc: "准备好纸笔（或就在这里写），给自己一段不被打扰的时间。下面几个问题没有标准答案，只有真实的你。" },
  act: { name: "行动 · 在尝试中感受", emoji: "🔥", desc: "有些答案只在行动中浮现。我们为你设计几个微型实验，做完了再回来写感受。" },
  dialogue: { name: "对话 · 在表达中理清", emoji: "💬", desc: "我会持续追问，像一位不带评判的朋友。你不需要完美的答案，只需要诚实的回应。" },
  observe: { name: "观照 · 从他人身上看见", emoji: "👁️", desc: "阅读下面这些真实写下的理想档案。哪些地方引起了你的共鸣？哪些让你觉得「这也是我想要的」？" },
  frame: { name: "建构 · 用框架分析自我", emoji: "🧭", desc: "从多个维度系统地审视自己。不需要一次填完，但越诚实，结果越有用。" },
  reverse: { name: "反观 · 从不想成为的样子反推", emoji: "🪞", desc: "有时候，知道自己不想要什么比知道自己想要什么更容易。从反面入手，反向照亮你的方向。" }
};

const REFLECT_PROMPTS = [
  { q: "童年时，你最喜欢做什么事？那时的你为什么感到快乐？", hint: "不要评判它是否「有用」，只是回忆。" },
  { q: "你曾经羡慕过谁？羡慕他/她的什么？", hint: "羡慕是一面镜子，照出你真正渴望的东西。" },
  { q: "如果完全不会失败，你最想尝试的一件事是什么？", hint: "去掉恐惧之后，剩下的就是方向。" },
  { q: "你希望80岁的自己如何评价这一生？", hint: "从终点回望，什么才真正重要。" },
  { q: "什么样的时刻让你觉得「这才是我」？描述一个具体的场景。", hint: "也许只是一个瞬间，但它有线索。" }
];

const ACT_EXPERIMENTS = [
  { title: "做一件你一直想但没做的事", desc: "哪怕很小——画一幅画、写一篇文章、和一个陌生人聊天、做一道从没做过的菜。花30分钟，就今天。", q: "做完之后，你的感受是什么？过程中有没有哪个瞬间让你觉得投入或享受？" },
  { title: "观察你一周中的高峰时刻", desc: "接下来一周，每天记录三个让你觉得充实或愉悦的时刻。不是刷手机的快乐，而是做完之后觉得「今天没白过」的那种。", q: "回顾你的记录，有没有什么规律？这些时刻在做什么类型的事？" },
  { title: "和一个你做不来的人聊聊", desc: "找一个和你走在完全不同道路上的人——不同的行业、不同的生活方式——和他/她聊一聊，问问对方为什么选择这条路。", q: "对方的哪一个观点让你觉得意外或触动？为什么？" },
  { title: "想象你的「反事实人生」", desc: "选一个你人生中的转折点。如果当时你做了另一个选择，你现在会在做什么？认真想象那条路。", q: "那个平行世界里的你，拥有你现在缺少的什么？你现在拥有的，有没有那个世界里的你也羡慕的？" }
];

const DIALOGUE_START = { q: "告诉我，最近一次让你觉得「这件事值得做」是什么时候？", name: "q1" };
const DIALOGUE_FOLLOWUPS = {
  q1: { q: "那种「值得」的感觉，具体来自哪里——是事情本身有趣，还是它带来的结果让你满足？", next: "q2" },
  q2: { q: "如果剥离外在的认可（钱、掌声、别人的看法），你还会做类似的事吗？", next: "q3" },
  q3: { q: "如果不考虑任何现实限制，你希望把生命中接下来十年投入到什么事情上？", next: "q4" },
  q4: { q: "你说出了那个方向。现在想想，你已经在为它做什么了？哪怕很小。", next: "q5" },
  q5: { q: "最后一个问题：如果五年后你回头看今天的自己，你最希望今天的你迈出的第一步是什么？", next: null }
};

const SAMPLE_PROFILES = [
  { name: "匿名 · 26岁", statement: "我想成为那种能用文字让人感到「被理解」的人。小时候我喜欢给朋友写信，不是那种寒暄的信，而是认真地告诉对方我觉得他有多特别。后来我学了金融，但我发现我做报表的时候在想「能不能把这份分析报告写得像一封信」。可能我的理想不是什么具体的职位——而是无论做什么，都保持用文字真诚地连接人。", values: ["真诚", "连接", "表达"], action: "每周写一篇短文，不为了发表，只是为了练习真诚地说话。" },
  { name: "匿名 · 31岁", statement: "我想成为一个「搭桥的人」。我的社区里有很多有才华的年轻人，但他们不知道去哪里找机会。我在大公司工作了八年，看到了两边——一边是需要人才的企业，一边是找不到路的人。我的理想是做一个连接器，把资源引到被忽视的地方。不是做慈善，是做生态。", values: ["公平", "赋能", "创造"], action: "已经开始在工作之余搭建一个技能分享的小组，目前有12个人每周见面。" },
  { name: "匿名 · 22岁", statement: "说实话我不知道我想成为什么样的人。但我知道我不想成为什么样——我不想成为一个麻木的人。我看到太多人30岁以后就不再好奇了，不再激动了，不再觉得「哇这个世界还有这么多我不知道的东西」。所以目前我的理想很简单：保持好奇，保持柔软，不要让自己变硬。", values: ["好奇", "柔软", "成长"], action: "每个月学一样完全陌生的东西。上个月是陶艺，这个月是观鸟。" }
];

// Reverse exploration (反观)
const REVERSE_PROMPTS = [
  { q: "你见过的最让你不想过的人生是什么样的？描述一个人（可以是真实认识的，也可以是看到的）。他/她的什么状态让你感到'我绝对不要变成这样'？", hint: "具体描述——是麻木的表情、机械的生活、还是放弃了曾经的梦想？" },
  { q: "如果你继续现在的生活方式十年不变，你最担心自己变成什么样子？", hint: "不要回避，写下那个最让你不安的可能性。" },
  { q: "把上面你写下的'不想成为的样子'翻转过来——它的反面是什么？那个反面，是不是就是你真正想要的？", hint: "比如：'不想变得麻木'的反面可能是'永远对新事物保持好奇和兴奋'。" },
  { q: "有没有一件事你一直在逃避，但内心深处知道'如果我做了，我会更接近我想成为的人'？是什么？", hint: "逃避比失败消耗更多能量。直面它。" }
];

// Preset answers for exploration questions
const REFLECT_PRESETS = [
  ["观察昆虫/植物", "一个人搭积木或拼图", "给家人讲故事或表演", "拆东西再装回去（不一定成功）", "看书看到忘记时间"],
  ["羡慕朋友总能自然地和任何人聊天", "羡慕那些能靠画画/音乐表达自己的人", "羡慕那些说走就走去冒险的人", "羡慕能把复杂事情讲清楚的人", "羡慕对工作充满热情的长辈"],
  ["开一家自己的小店/工作室", "写一本书或拍一部短片", "环游世界，边走边记录", "建立一个帮助别人的组织", "学一门完全不同的手艺"],
  ["希望自己是一个对别人有用的人", "希望自己没有因为害怕而退缩过", "希望自己活得尽兴，没白来一趟", "希望有人因为我的存在过得更好"],
  ["和朋友深夜聊天，完全忘记时间", "做一道难题做到废寝忘食", "帮助别人后看到对方的笑容", "完成一件自己满意的作品", "一个人在山里或海边，感到无比平静"]
];
const REVERSE_PRESETS = [
  ["每天重复同样的事，眼睛没有光的人", "在饭局上不停抱怨但什么都不改变的人", "年轻时有很多梦想但一个都没试过的长辈", "为了钱做自己完全不喜欢的事的人", "对什么都不再好奇、不再学习的人"],
  ["变成一个麻木的、不再对任何事感到兴奋的人", "变成一个把所有时间都花在不喜欢的工作上的人", "变成一个不再读书、不再思考、只是消耗时间的人", "变成一个和朋友们渐渐疏远、孤独终老的人"],
  ["勇敢尝试新事物的人", "对生活保持热情和好奇的人", "把时间和精力投入热爱之事的人", "真诚地连接他人的人"],
  ["换个工作/专业，但一直不敢行动", "公开表达自己的想法或作品", "和某个重要的人说一句一直没说出口的话", "一个人去旅行，不设行程", "开始学一个一直觉得「太晚了」的技能"]
];
const OBSERVE_PRESETS = [
  "第一个故事触动了我——我也想用自己擅长的方式真诚地连接他人。",
  "第二个故事让我有共鸣——我想做那个把资源和机会连接起来的人。",
  "第三个故事说出了我的心里话——我不想变麻木，我要保持好奇和柔软。",
  "三个故事都很好，但我有自己不同的方向。"
];
const DIALOGUE_PRESETS = [
  ["上周帮朋友解决了一个实际问题，看到对方如释重负的表情。", "写了一段自己满意的文字或代码，进入心流状态。", "参加了一次志愿活动，虽然累但觉得有意义。", "和一个陌生人深度聊天，分享了一些从未对人说过的话。"],
  ["是事情本身吸引我——我喜欢那个沉浸其中的过程。", "是结果让我满足——看到自己的努力产生了具体的影响。", "两者都有——过程很享受，结果也让我确认了自己在做对的事。"],
  ["会的。即使没有人知道是我做的，我还是会做。", "可能不会。如果没有人认可，我可能会怀疑这件事的意义。", "不确定。我可能需要重新想想到底什么对我最重要。"],
  ["我想花十年时间研究一个我真正好奇的问题，不管有没有用。", "我想建立一个连接人和资源的组织，让更多人找到属于自己的路。", "我想创作——写书、拍片、做音乐，留下一些能超越我生命的东西。", "我想走遍世界，和不同文化的人交流，记录那些被忽略的故事。"],
  ["其实我还没开始。我只是在想。", "我一直在业余时间自学相关的技能，虽然进展很慢。", "我已经和几个做这件事的人聊过了，开始摸清楚门路。", "我正在存钱/做计划，准备明年迈出第一步。"],
  ["立刻行动——哪怕只是发一封邮件、打一个电话、查一个信息。", "对自己诚实——承认现在做的事情不是我真正想要的，然后开始调整方向。", "找到一个已经在这条路上的人，和他/她聊聊，请教第一步应该怎么走。", "写下我要做的事，告诉一个我信任的人，让他/她监督我。"]
];
const ACT_PRESETS = [
  ["做完之后发现比想象中简单，那个投入的过程让我忘了时间。", "过程中有点困难，但完成后很有成就感。", "不太确定感觉如何，但我很高兴自己至少试了。", "发现我可能并不真的喜欢这件事，这也是收获。"],
  ["我发现自己最享受的时刻都是在创造——写、画、做东西。", "高峰时刻几乎都和人有关——聊天、聚会、帮助别人。", "我的高峰时刻很奇怪，都是在一个人深度思考或学习的时候。", "规律似乎不明显，我需要再观察一段时间。"],
  ["对方说，最重要的不是选择哪条路，而是选择之后怎么走。", "让我意外的是，对方说他也曾经迷茫了好几年，并不是一开始就清楚的。", "对方说了一句让我震住的话：'如果你明天就要死，你今天干嘛还要做你不喜欢的事？'"],
  ["那个平行世界里的我拥有的是勇气，现在这个我拥有的是稳定。", "如果当时选了另一条路，我可能会更自由，但也会失去现在拥有的安全感。", "我发现不管哪条路，其实都有各自的好和坏，没有完美的选择。"]
];
const FRAME_DIMENSIONS = [
  { title: "能量来源", q: "什么样的事情让你精力充沛而不是疲惫？", tags: ["独自思考", "与人交流", "创造东西", "解决问题", "组织协调", "动手操作", "学习新知", "帮助他人"] },
  { title: "核心恐惧", q: "你最害怕自己的人生变成什么样子？", tags: ["一事无成", "失去自由", "被人遗忘", "平庸度日", "伤害他人", "孤独终老", "没有意义", "停滞不前"] },
  { title: "心之所向", q: "你希望这个世界因为你的存在而有什么不同？", tags: ["更公平", "更美", "更高效", "更温暖", "更有趣", "更健康", "更智慧", "更自由"] }
];

// ---- Reading Platforms ----
const READING_PLATFORMS = {
  douban: { name: "豆瓣读书", icon: "📝", searchUrl: "https://search.douban.com/book/subject_search?search_text={}", gbk: false },
  jd: { name: "京东", icon: "📦", searchUrl: "https://search.jd.com/Search?keyword={}&enc=utf-8", gbk: false },
  dangdang: { name: "当当", icon: "📚", searchUrl: "https://search.dangdang.com/?key={}", gbk: true }
};

// ---- Ideal Books ----
const BOOKS = [
  { title: "活出生命的意义", author: "维克多·弗兰克尔", query: "活出生命的意义 弗兰克尔", why: "一位从纳粹集中营幸存的心理学家，用一生证明：人可以在任何处境中找到意义。如果你觉得「我不知道为什么而活」，这本书是起点。", emoji: "📖", color: "#fef2f2" },
  { title: "牧羊少年奇幻之旅", author: "保罗·柯艾略", query: "牧羊少年奇幻之旅 柯艾略", why: "一个关于追随内心召唤的寓言。当你真正渴望某件事时，整个宇宙都会合力助你实现。短小、易读，但可能改变你看待理想的方式。", emoji: "🐪", color: "#fefce8" },
  { title: "你想活出怎样的人生", author: "吉野源三郎", query: "你想活出怎样的人生 吉野源三郎", why: "一本在日本影响了几代人的书，借一个少年和舅舅的对话，探讨「人为什么活着」「什么是真正的价值」。宫崎骏的同名电影也由此而发。", emoji: "🌏", color: "#f0fdf4" },
  { title: "被讨厌的勇气", author: "岸见一郎 / 古贺史健", query: "被讨厌的勇气 岸见一郎", why: "阿德勒心理学的通俗化解读。核心观点：你的现在不由过去决定，你的理想也不需要别人认可。如果你总在顾虑他人眼光，这本书是解药。", emoji: "🦁", color: "#fdf4ff" },
  { title: "斯坦福大学人生设计课", author: "比尔·博内特 / 戴夫·伊万斯", query: "斯坦福大学人生设计课", why: "用设计思维面对人生——不是找到「唯一正确的路」，而是不断原型、测试、迭代。实操性极强，有很多可以立刻上手的练习。", emoji: "🎨", color: "#eff6ff" },
  { title: "小王子", author: "安托万·德·圣-埃克苏佩里", query: "小王子 圣埃克苏佩里", why: "不是童书。关于什么才是「重要的事」，关于用心去看那些眼睛看不见的东西。当你被实用主义淹没时，回来读一读小王子。", emoji: "⭐", color: "#fff7ed" },
  { title: "当我谈跑步时我谈些什么", author: "村上春树", query: "当我谈跑步时我谈些什么 村上春树", why: "村上通过跑步反思写作和人生。他的核心洞察：持久的热情不是靠冲动，而是靠日复一日的纪律。理想不是激情，是习惯。", emoji: "🏃", color: "#f5f5f4" },
  { title: "人类群星闪耀时", author: "斯蒂芬·茨威格", query: "人类群星闪耀时 茨威格", why: "14个改变世界的历史瞬间。读这本书会让你意识到：一个人的决定可以改变历史的走向。你不是旁观者，你是潜在的「群星」之一。", emoji: "✨", color: "#fefce8" }
];

// ---- Daily Inspiration Cards ----
const DAILY_CARDS = [
  { type: "quote", text: "「人生中最大的危险，就是太早找到一个正确答案。」", source: "—— 詹姆斯·卡斯 《有限与无限的游戏》" },
  { type: "question", text: "如果今天是你生命中的最后一年，你还会做你现在正在做的事吗？如果不会，那你想做什么？", source: "" },
  { type: "fact", text: "全球有 2.58 亿儿童和青少年失学。如果你擅长教、写、编程或讲故事——你知道你的理想可能和这个数字有关吗？", source: "" },
  { type: "quote", text: "「二十岁时你有一张你想要成为什么样的人的脸，三十岁时你有一张你值得成为什么样的人的脸。」", source: "—— 加缪" },
  { type: "question", text: "你羡慕的那些人——他们过的生活里，具体是哪一点触动了你？那个触动的背后，藏着你自己的理想。", source: "" },
  { type: "quote", text: "「我们需要的不是在地图上找到出路，而是有勇气走进未知的森林。」", source: "—— 赫尔曼·黑塞" },
  { type: "fact", text: "地球上 80 亿人中，近一半从未使用过互联网。你在这个「已连接」的世界里掌握的技能，能为「未连接」的那一半做些什么？", source: "" },
  { type: "question", text: "你 80 岁的时候，最希望回忆起的一件事是什么？你现在距离那件事，还有多远？", source: "" },
  { type: "quote", text: "「成为你本可以成为的人，永远不会太晚。」", source: "—— 乔治·艾略特" },
  { type: "fact", text: "全球碳排放的 50% 来自最富裕的 10% 人口。如果你关心公平或自然——你在哪里可以成为解决方案的一部分？", source: "" },
  { type: "question", text: "如果没有任何人评价你——没有父母的期待、没有社会的标准——你想成为什么样的人？", source: "" },
  { type: "quote", text: "「人不是生来就要被打败的。一个人可以被毁灭，但不能被打败。」", source: "—— 海明威 《老人与海》" }
];

// ---- Grand Narratives ----
const NARRATIVES = [
  { number: "7.35亿", fact: "全球有7.35亿人面临饥饿", detail: "相当于每10个人中就有1个人不知道下一顿饭在哪里。不是因为食物不够——全球生产的食物足以喂饱所有人。是分配、冲突、气候和不公让粮食到不了需要的人手里。", reflection: "如果你拥有组织资源、制定政策、搭建系统或传播信息的能力——你愿意为改变这个数字做什么？", emoji: "🌾", moreLink: "https://www.baidu.com/s?wd=全球饥饿问题 粮食危机", moreLabel: "百度搜索：全球饥饿与粮食危机" },
  { number: "2.58亿", fact: "全球有2.58亿儿童和青少年失学", detail: "其中大多数集中在撒哈拉以南非洲和南亚。这不是因为他们不想学习——是因为贫穷、战争、性别歧视。教育是打破贫困循环最有效的方式，但它偏偏最不容易到达需要它的人。", reflection: "如果你擅长教学、写作、技术或组织——有什么方式是你可以把知识送到那些去不了学校的孩子面前的？", emoji: "📚", moreLink: "https://www.unicef.org/zh/教育", moreLabel: "UNICEF：全球教育" },
  { number: "80亿", fact: "地球上住着80亿人，但有近一半人从未使用过互联网", detail: "数字鸿沟比我们想象的大得多。在部分非洲国家，上网率不到20%。这意味着全球近一半的声音、创意和潜力从未被世界听到。", reflection: "如果你懂得技术、设计或内容创作——你愿意为「连接另一半世界」做点什么？", emoji: "🌐", moreLink: "https://www.baidu.com/s?wd=数字鸿沟 全球互联网普及", moreLabel: "百度搜索：数字鸿沟" },
  { number: "100万", fact: "每年有100万物种面临灭绝威胁", detail: "根据IPBES报告，地球上约八分之一的物种正面临灭绝风险。这不是遥远的未来——它正在发生。森林在消失，海洋在酸化，昆虫在减少。生物多样性是人类生存的基础。", reflection: "如果你关心自然、擅长科学或传播——你愿意用什么方式成为这个星球的守护者？", emoji: "🦋", moreLink: "https://www.baidu.com/s?wd=生物多样性 物种灭绝", moreLabel: "百度搜索：生物多样性与物种保护" },
  { number: "50%", fact: "全球碳排放的50%来自最富裕的10%人口", detail: "气候变化是不平等的放大器：碳排放最少的最贫困国家，承受着最大的气候灾难——洪水、干旱、飓风。富人制造问题，穷人承受后果。", reflection: "如果你关心公平、懂得技术或政策——你能做什么来推动一个更可持续也更公正的世界？", emoji: "🌍", moreLink: "https://www.baidu.com/s?wd=气候变化 碳排放 气候公平", moreLabel: "百度搜索：气候变化与碳公平" },
  { number: "1/3", fact: "全球三分之一的女性曾遭遇暴力", detail: "根据WHO的数据，这是全球最普遍但最不被看见的人权危机之一。它发生在每个国家、每个阶层。改变它需要的不是单一的英雄，而是无数人从各自的位置上推动文化、法律和观念的变化。", reflection: "无论你的性别——如果你在乎公平、安全和尊严，你可以在哪里发挥作用？", emoji: "🤲", moreLink: "https://www.baidu.com/s?wd=性别平等 全球女性权益", moreLabel: "百度搜索：性别平等与女性权益" }
];

// ---- Resource Map (value → recommended resources) ----
const RESOURCE_MAP = {
  "自由": { books: ["被讨厌的勇气", "瓦尔登湖", "逃避自由"], vids: [{ title: "自由的真正含义是什么？", type: "TED-Ed" }, { title: "极简主义：记录生命中的重要事物", type: "纪录片" }], actions: ["尝试一周「零承诺」生活——不预设任何社交和任务，看看你的自由感从何而来", "列一张「不做什么」的清单，比「做什么」更重要"] },
  "创造": { books: ["艺术与恐惧", "创新者的窘境", "赖声川的创意学"], vids: [{ title: "创造力来自哪里？", type: "TED" }, { title: "抽象：设计的艺术", type: "Netflix 纪录片系列" }], actions: ["每天做一件和主业无关的创作——画画、写诗、做菜、拍照——连做14天", "加入一个创作者社群，每周分享一次自己的作品"] },
  "连接": { books: ["非暴力沟通", "群体的智慧", "社交天性"], vids: [{ title: "脆弱的力量", type: "TED (Brené Brown)" }, { title: "如何建立更深的连接？", type: "The School of Life" }], actions: ["这周主动联系一个你很久没联系但欣赏的人，告诉对方你为什么想起他/她", "组织一次小型的「理想夜谈」——邀请3-5个朋友，每个人分享自己真正想做的事"] },
  "成长": { books: ["终身成长", "刻意练习", "原子习惯"], vids: [{ title: "成长型思维的力量", type: "TED (Carol Dweck)" }, { title: "学习如何学习", type: "Coursera 免费课程" }], actions: ["选一个你一直想学但觉得「太难了」的技能，每天投入25分钟，坚持21天", "写一份「月度成长复盘」——你学到了什么？什么改变了你的想法？"] },
  "公平": { books: ["正义论", "贫穷的本质", "看不见的女性"], vids: [{ title: "正义：该如何做是好？", type: "哈佛公开课 (Michael Sandel)" }, { title: "不平等如何影响我们？", type: "TED (Richard Wilkinson)" }], actions: ["研究一个你关心的公平议题（教育、收入、性别、种族），写一篇1000字的分析", "在你所在的社区或行业找一个你可以推动的小改变——哪怕是修改一份不合理的流程"] },
  "影响": { books: ["影响力", "引爆点", "疯传"], vids: [{ title: "如何发起一场运动？", type: "TED (Derek Sivers)" }, { title: "伟大的领导者做什么？", type: "TED (Simon Sinek)" }], actions: ["把你的理想写成一篇公开文章，发在朋友圈或社交媒体上，看看谁会响应", "找一个你认同的组织，主动联系他们，问「我可以用什么方式帮忙」"] },
  "智慧": { books: ["思想的力量", "道德经", "思考，快与慢"], vids: [{ title: "哲学如何拯救你的生活？", type: "The School of Life 系列" }, { title: "斯多葛主义的生活艺术", type: "YouTube 公开课" }], actions: ["每天留20分钟「沉思时间」——不看书不看手机，只是思考一个你认为重要的问题", "找一个和你的思维方式完全不同的人深聊一次，不是为了说服对方，而是为了理解"] },
  "温暖": { books: ["爱的艺术", "共情的力量", "好好告别"], vids: [{ title: "善良的科学", type: "TED" }, { title: "临终前最后悔的五件事", type: "TEDx" }], actions: ["每天做一件不求回报的好事，记录对方的反应和你自己的感受", "去看望一位老人（祖父母、邻居、社区的长者），认真听他/她讲年轻时的故事"] },
  "独立": { books: ["瓦尔登湖", "一间只属于自己的房间", "在自己房间里的旅行"], vids: [{ title: "独处的力量", type: "TED" }, { title: "如何做出真正属于自己的决定？", type: "The School of Life" }], actions: ["做一个「如果没有任何人在乎，我会怎么做」的选择——哪怕是小事", "写一份「独立宣言」：在什么方面你想减少对他人的依赖？在什么方面你愿意接受互相依存？"] },
  "冒险": { books: ["荒野生存", "夜航西飞", "天生就会跑"], vids: [{ title: "为什么冒险对成长至关重要？", type: "TED" }, { title: "徒手攀岩", type: "纪录片 (Free Solo)" }], actions: ["选一个让你心跳加速但可以控制风险的事——攀岩、公开演讲、独自旅行——这周就做", "列出三件你一直因为恐惧而没做的事，选一件最小、最简单的开始"] },
  "真实": { books: ["脆弱的力量", "成为", "把自己作为方法"], vids: [{ title: "真实的代价", type: "TED" }, { title: "如何过一种真实的人生？", type: "The School of Life" }], actions: ["本周和一个人进行一次「不舒服但诚实」的对话——说出你真正在想的事", "写一封信给10年前的自己，不和任何人分享——看看你对「真实」的定义如何改变了"] },
  "平衡": { books: ["慢下来", "深度工作", "精力管理"], vids: [{ title: "如何实现工作与生活的平衡？", type: "TED" }, { title: "正念革命", type: "Headspace 系列" }], actions: ["重新设计你的一天：把时间分成「创造时间」和「恢复时间」，各占多少？试试新比例", "尝试一周「数字安息日」——每周有一天完全不上网，看你失去了什么、得到了什么"] },
  "卓越": { books: ["刻意练习", "心流", "从优秀到卓越"], vids: [{ title: "卓越的秘密", type: "TED" }, { title: "为什么完美的练习比天才更重要？", type: "TED-Ed" }], actions: ["选一个你已有的技能，设定一个「突破性目标」——不是提高10%，而是想翻倍的", "找一个在你领域里比你强得多的人，请他/她喝杯咖啡，问「我应该怎么练」"] }
};

const DEFAULT_RESOURCE = { books: ["你想活出怎样的人生", "活出生命的意义"], vids: [{ title: "如何找到你真正热爱的事？", type: "TED" }, { title: "Ikigai：日本人长寿幸福的原因", type: "YouTube" }], actions: ["把你想做的事写下来，读给你信任的人听，问对方的反馈", "找三个已经在做这件事的人，看他们的路径——不是模仿，是学习可能性", "每天留20分钟，什么也不做，只问自己一个问题：我今天做的事，离我想成为的人更近了吗？"] };

// Community seeds
const SEED_COMMUNITY = [
  { id: "seed1", name: "林小月", date: "2026-05-20", statement: "我想成为一个能让老人不孤独的人。去年外公去世后，我发现他最后几年最缺的不是医疗，是有人认真听他说话。我打算开一个社区口述历史项目，帮老人记录他们的故事。目前已经采访了6位老人。", values: ["倾听", "传承", "温暖"], progress: "正在申请社区场地" },
  { id: "seed2", name: "陈远", date: "2026-05-18", statement: "我想造一栋自己设计的房子。不是成为建筑师——我是程序员——而是我越来越觉得，写代码和造房子是同一件事：都是在搭建让人感到「待在这里真好」的空间。我想把这种理念融入到我的产品设计里。", values: ["创造", "空间", "归属"], progress: "业余时间自学建筑基础，同时在工作中尝试UX方向的转型" },
  { id: "seed3", name: "张思齐", date: "2026-05-15", statement: "我想成为那种40岁时眼睛里还有光的人。听起来很虚，但我见过太多人被生活磨平了。我的理想不是某个职业，而是一种状态——永远在成长，永远对人有好奇心，永远不觉得「就这样了」。", values: ["成长", "好奇", "生命力"], progress: "保持每个月认识一个新朋友，读一本不在自己舒适区的书" },
  { id: "seed4", name: "小野", date: "2026-05-12", statement: "我花了好几年才承认：我只想做植物相关的事。不是开玩笑。从小我就能盯着一片叶子看半天，大学学了计算机因为「好就业」，但我的阳台现在有47盆植物。我辞职了，现在在一家园艺公司做数字化，工资少了一半，但每天早上是跑着去上班的。", values: ["热爱", "自然", "勇气"], progress: "正在准备考园艺师资格证" }
];

// ============================================================
// STATE
// ============================================================

let currentPath = null, currentStep = 0, answers = {}, dialogueHistory = [], idealProfile = null;
let homeTab = "paths";
let actionSelections = { resources: [], actions: [] };
let observedIdx = null;

// ============================================================
// PERSISTENCE
// ============================================================

function loadProfile() { const raw = localStorage.getItem("ic_profile"); return raw ? JSON.parse(raw) : null; }
function saveProfile(p) { idealProfile = p; localStorage.setItem("ic_profile", JSON.stringify(p)); var hist = loadProfileHistory(); hist.push({ statement: p.statement, values: p.values, actions: p.actions, date: new Date().toISOString() }); if (hist.length > 20) hist = hist.slice(-20); localStorage.setItem("ic_profile_history", JSON.stringify(hist)); }
function loadProfileHistory() { var raw = localStorage.getItem("ic_profile_history"); return raw ? JSON.parse(raw) : []; }
async function loadCommunity() {
  try {
    var { data, error } = await supabase.from("community").select("*").order("created_at", { ascending: false });
    if (!error && data && data.length > 0) return data;
  } catch(e) { console.log("Supabase fetch failed, using local fallback"); }
  var raw = localStorage.getItem("ic_community");
  var e = raw ? JSON.parse(raw) : [];
  if (e.length === 0) { e = SEED_COMMUNITY; seedSupabase(); }
  return e;
}
async function seedSupabase() {
  try {
    for (var i = 0; i < SEED_COMMUNITY.length; i++) {
      var s = SEED_COMMUNITY[i];
      await supabase.from("community").upsert({
        id: s.id, name: s.name, date: s.date, statement: s.statement,
        values: JSON.stringify(s.values || []), progress: s.progress, ideal_type: "", stage: 0
      });
    }
  } catch(e) {}
}
function saveCommunityEntry(entry) {
  try { supabase.from("community").insert({
    id: entry.id, name: entry.name, date: entry.date, statement: entry.statement,
    values: JSON.stringify(entry.values || []), progress: entry.progress,
    ideal_type: entry.idealType || "", stage: entry.stage || 0
  }).then(function() {}).catch(function() {}); } catch(e) {}
  var raw = localStorage.getItem("ic_community");
  var e = raw ? JSON.parse(raw) : [];
  e.unshift(entry); localStorage.setItem("ic_community", JSON.stringify(e));
}
function loadAchievements() { const raw = localStorage.getItem("ic_achievements"); return raw ? JSON.parse(raw) : []; }
function saveAchievements(a) { localStorage.setItem("ic_achievements", JSON.stringify(a)); }
function loadActionPlan() { const raw = localStorage.getItem("ic_actionplan"); return raw ? JSON.parse(raw) : null; }
function saveActionPlan(p) { localStorage.setItem("ic_actionplan", JSON.stringify(p)); }
function loadNickname() { return localStorage.getItem("ic_nickname") || ""; }
function saveNickname(n) { localStorage.setItem("ic_nickname", n); }
function loadReadingPref() { return localStorage.getItem("ic_readingpref") || "douban"; }
function saveReadingPref(p) { localStorage.setItem("ic_readingpref", p); }
function loadTheme() { return localStorage.getItem("ic_theme") || "light"; }
function saveTheme(t) { localStorage.setItem("ic_theme", t); applyTheme(t); }
function applyTheme(t) { document.documentElement.setAttribute("data-theme", t); document.getElementById("theme-toggle").textContent = t === "dark" ? "☀️" : "🌙"; }
function toggleTheme() { var t = loadTheme(); saveTheme(t === "dark" ? "light" : "dark"); }

// ============================================================
// NAVIGATION
// ============================================================

function navigate(screen) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".topbar-link").forEach(l => l.classList.remove("active"));
  const target = document.getElementById("screen-" + screen);
  if (target) target.classList.add("active");
  const link = document.querySelector('[data-nav="' + screen + '"]');
  if (link) link.classList.add("active");
  if (screen === "profile") renderProfile();
  if (screen === "community") renderCommunity();
  if (screen === "home") { renderHomeTab(); }
  if (screen === "action") renderActionModule();
  if (screen === "home") { currentPath = null; currentStep = 0; answers = {}; dialogueHistory = []; }
}

// ============================================================
// HOME SCREEN — SUB TABS
// ============================================================

function switchHomeTab(tab) {
  homeTab = tab;
  document.querySelectorAll("#home-subtabs .subtab").forEach(s => s.classList.remove("active"));
  const st = document.querySelector('[data-sub="' + tab + '"]');
  if (st) st.classList.add("active");
  renderHomeTab();
}

function renderHomeTab() {
  const container = document.getElementById("home-tab-content");
  if (homeTab === "paths") renderPathsTab(container);
  else if (homeTab === "books") renderBooksTab(container);
  else if (homeTab === "narratives") renderNarrativesTab(container);
}

function getDailyCard() {
  var today = new Date().toISOString().slice(0, 10);
  var hash = 0;
  for (var i = 0; i < today.length; i++) hash = ((hash << 5) - hash) + today.charCodeAt(i);
  var idx = Math.abs(hash) % DAILY_CARDS.length;
  return DAILY_CARDS[idx];
}
function renderPathsTab(container) {
  var dc = getDailyCard();
  var dailyHtml = '<div class="daily-card"><div class="daily-label">' + (dc.type === 'quote' ? '今日一语' : dc.type === 'question' ? '今日一问' : '今日视野') + '</div><p class="daily-text">' + escapeHtml(dc.text) + '</p>' + (dc.source ? '<p class="daily-source">' + escapeHtml(dc.source) + '</p>' : '') + '</div>';
  var accentMap = { reflect: 'a1', act: 'a2', dialogue: 'a3', observe: 'a4', frame: 'a5', reverse: 'a6' };
  container.innerHTML = '<h1>你想成为<br>什么样的人？</h1><p class="sub">不是「你能做什么工作」，而是「你想成为谁」。<br>每个人寻找理想的方式都不一样——选择一条适合你的路径，开始探索。</p>' + dailyHtml + '<div class="deep-hero" onclick="startDeepExplore()"><div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;"><span style="font-size:1.6rem;">🧬</span><div><span style="font-weight:700;font-size:1rem;color:var(--fg);">深度探索 · 层层递进找到你的理想类型</span><span style="display:inline-block;background:var(--accent);color:#fff;font-size:0.7rem;padding:2px 8px;border-radius:10px;margin-left:8px;font-weight:650;">推荐</span></div></div><p style="font-size:0.8rem;color:var(--muted);">通过分支式追问，深度探析你的理想。完成后会为你匹配专属的「理想途径」和修炼路线。</p></div><p style="font-size:0.85rem;color:var(--muted);margin-bottom:14px;font-weight:600;letter-spacing:0.03em;">或选择快速探索方式</p><div class="path-grid">' + Object.entries(PATH_META).map(function(entry) { var key = entry[0], m = entry[1]; return '<div class="path-card" onclick="startPath(\'' + key + '\')"><span class="emoji-wrap">' + m.emoji + '</span><div class="path-body"><span class="title">' + m.name + '</span><span class="hint">' + m.desc.slice(0, 50) + '……</span><div class="path-accent ' + (accentMap[key] || 'a5') + '"></div></div></div>'; }).join("") + '</div>';
}

function renderBooksTab(container) {
  var pref = loadReadingPref();
  var platforms = Object.entries(READING_PLATFORMS);
  container.innerHTML = '<h1>理想之书</h1><p class="sub">有些书不教你技能，而是帮你看到自己。以下是我们精选的八本与理想、意义和人生方向有关的书。</p><div class="reading-pref-bar"><span style="font-size:0.78rem;color:var(--muted);margin-right:4px;">你习惯在哪里看书？</span>' + platforms.map(function(p) { var key = p[0], pl = p[1]; return '<span class="reading-pref-btn ' + (pref === key ? 'active' : '') + '" onclick="setReadingPref(\'' + key + '\')">' + pl.icon + ' ' + pl.name + '</span>'; }).join("") + '</div>' + BOOKS.map(function(b) { var pl = READING_PLATFORMS[pref] || READING_PLATFORMS["douban"]; return '<div class="book-card"><div class="book-cover" style="background:' + b.color + ';">' + b.emoji + '</div><div class="book-info"><div class="book-title">' + escapeHtml(b.title) + '</div><div class="book-author">' + escapeHtml(b.author) + '</div><div class="book-why">「' + escapeHtml(b.why) + '」</div><div class="book-links"><a class="book-link" href="#" onclick="openBookSearch(\'' + escapeHtml(b.query).replace(/'/g, "\\'") + '\',\'' + pref + '\');return false;">' + pl.icon + ' ' + pl.name + '</a>' + platforms.filter(function(p) { return p[0] !== pref; }).slice(0, 2).map(function(p) { return '<a class="book-link" href="#" onclick="openBookSearch(\'' + escapeHtml(b.query).replace(/'/g, "\\'") + '\',\'' + p[0] + '\');return false;">' + p[1].icon + '</a>'; }).join("") + '</div></div></div>'; }).join("") + '<p style="text-align:center;color:var(--muted);font-size:0.85rem;margin-top:16px;">读完任何一本，回来用「静思」路径写下你的感受。</p><button class="btn btn-outline" onclick="switchHomeTab(\'paths\')" style="margin-top:8px;display:block;margin-left:auto;margin-right:auto;">回到寻路</button>';
}

function setReadingPref(key) { saveReadingPref(key); renderHomeTab(); }

function renderNarrativesTab(container) {
  container.innerHTML = '<h1>宏大叙事</h1><p class="sub">这个世界很大，大到每个人的理想都能找到一个值得的方向。以下是一些正在发生的事实——也许其中一个会唤醒你想做的事。</p>' + NARRATIVES.map(function(n) { return '<div class="narrative-card"><div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px;"><span style="font-size:1.5rem;">' + n.emoji + '</span><span class="narrative-number">' + escapeHtml(n.number) + '</span></div><p class="narrative-fact">' + escapeHtml(n.fact) + '</p><p class="narrative-detail">' + escapeHtml(n.detail) + '</p><p class="narrative-reflection">「' + escapeHtml(n.reflection) + '」</p><a class="book-link" href="' + n.moreLink + '" target="_blank" rel="noopener" style="margin-top:8px;display:inline-block;">🔗 ' + escapeHtml(n.moreLabel) + '</a></div>'; }).join("") + '<p style="text-align:center;color:var(--muted);font-size:0.85rem;margin-top:16px;">看到让你心动的方向？回到「寻路」选一条路径开始探索。</p><button class="btn btn-outline" onclick="switchHomeTab(\'paths\')" style="margin-top:8px;display:block;margin-left:auto;margin-right:auto;">回到寻路</button>';
}

// ============================================================
// EXPLORATION PATHS (existing, ported)
// ============================================================

// ============================================================
// DEEP EXPLORATION (branching question tree)
// ============================================================
function saveDeepProgress() {
  try { localStorage.setItem("ic_deep_progress", JSON.stringify({ deepNode: deepNode, deepAnswers: deepAnswers })); } catch(e) {}
}
function startDeepExplore() {
  deepNode = "r1"; deepAnswers = []; deepIdealType = null;
  answers = {}; dialogueHistory = [];
  saveDeepProgress();
  navigate("explore");
  renderDeepStep();
}
function renderDeepStep() {
  var card = document.getElementById("explore-card");
  var node = DEEP_TREE[deepNode];
  if (!node || node.end) { finishDeepExplore(); return; }
  var prev = answers["deep_" + deepNode] || "";
  var presetParts = [];
  node.presets.forEach(function(pre, pi) {
    presetParts.push('<span class="tag-btn" style="font-size:0.8rem;padding:6px 12px;cursor:pointer;" onclick="pickPreset(' + pi + ')">' + escapeHtml(pre.text.slice(0, 35)) + (pre.text.length > 35 ? '…' : '') + '</span>');
  });
  window._deepPresets = node.presets;
  var presetHtml = '<div class="tag-group" style="margin-top:6px;">' + presetParts.join('') + '<span style="font-size:0.73rem;color:var(--muted);">（点击填入，可修改）</span></div>';
  var progress = deepAnswers.length + 1;
  var totalDots = 20;
  card.innerHTML = '<div class="fade-in"><div class="step-indicator"><span>深度探索 · 第 ' + progress + ' / 20 轮</span><div class="step-dot-row">' + Array.from({length: totalDots}, function(_, i) { return '<div class="step-dot ' + (i < progress ? 'done' : '') + '"></div>'; }).join("") + '</div></div><p class="prompt-question">' + escapeHtml(node.q) + '</p><textarea class="text-input" id="deep-answer" placeholder="写下你的真实想法……" style="min-height:80px;">' + escapeHtml(prev) + '</textarea>' + presetHtml + '<div style="margin-top:20px;display:flex;gap:10px;justify-content:space-between;"><button class="btn btn-ghost" onclick="deepBack()" ' + (deepAnswers.length === 0 ? 'disabled' : '') + '>返回上题</button><button class="btn btn-primary" onclick="advanceDeepExplore()">' + (progress >= 19 ? '查看我的理想类型' : '继续') + '</button></div></div>';
  setTimeout(function() { var ta = document.getElementById("deep-answer"); if (ta) ta.focus(); }, 100);
}
function pickPreset(idx) {
  var ta = document.getElementById("deep-answer");
  var pre = window._deepPresets[idx];
  if (ta && pre) { ta.value = pre.text; ta.focus(); }
}
function deepBack() {
  if (deepAnswers.length === 0) return;
  var prev = deepAnswers.pop();
  deepNode = prev.node;
  answers["deep_" + deepNode] = prev.answer;
  saveDeepProgress();
  renderDeepStep();
}
function advanceDeepExplore() {
  var val = document.getElementById("deep-answer").value.trim();
  if (!val) return;
  var node = DEEP_TREE[deepNode];
  var matchedPreset = null;
  if (node && node.presets) {
    for (var i = 0; i < node.presets.length; i++) {
      if (val.indexOf(node.presets[i].text) === 0) { matchedPreset = node.presets[i]; break; }
    }
  }
  if (!matchedPreset && node && node.presets && node.presets.length > 0) { matchedPreset = node.presets[0]; }
  answers["deep_" + deepNode] = val;
  deepAnswers.push({ node: deepNode, answer: val, score: matchedPreset ? matchedPreset.score : [1,1,1,1,1], round: matchedPreset && node ? (node.round || 1) : 1 });
  if (!node || node.end) { finishDeepExplore(); return; }
  var nextNode = matchedPreset ? matchedPreset.next : "r8";
  deepNode = nextNode;
  if (deepAnswers.length >= 20 || (DEEP_TREE[deepNode] && DEEP_TREE[deepNode].end)) { finishDeepExplore(); return; }
  saveDeepProgress();
  renderDeepStep();
}

function finishDeepExplore() {
  deepIdealType = classifyIdealType(answers);
  var pw = IDEAL_PATHWAYS[deepIdealType];
  var stage1 = pw.stages[0];
  // Generate answer presets from deep answers
  var summaryText = deepAnswers.map(function(a) { return a.answer; }).join("；");
  var genPresets = [
    "我想成为一个在「" + pw.name + "」上不断修炼的人——" + pw.tagline + "。",
    "我渴望" + pw.tagline.slice(0, 6) + "，当前正在走向「" + stage1.name + "」的路上。",
    "我的理想是" + pw.desc.slice(0, 30) + "……"
  ];
  var card = document.getElementById("explore-card");
  card.innerHTML = '<div class="fade-in"><div style="text-align:center;margin-bottom:20px;"><span style="font-size:3rem;display:block;margin-bottom:6px;">' + pw.icon + '</span><h2>你的理想类型</h2><span style="display:inline-block;background:var(--accent-bg);color:var(--accent);font-weight:700;padding:6px 18px;border-radius:20px;font-size:1rem;margin-bottom:10px;">' + pw.name + '</span><p style="color:var(--fg2);font-size:0.9rem;margin-top:4px;">' + pw.tagline + '</p></div><p style="color:var(--fg);font-size:0.95rem;line-height:1.7;margin-bottom:16px;">' + pw.desc + '</p><div style="background:var(--green-bg);border:1px solid var(--green-border);border-radius:var(--radius);padding:16px;margin-bottom:16px;"><span style="font-weight:700;color:var(--green);">⚡ 当前阶段：' + stage1.name + '（' + stage1.icon + '）</span><p style="font-size:0.85rem;color:var(--fg2);margin-top:4px;">' + stage1.desc + '</p></div><div style="background:var(--accent-bg);border:1.5px solid var(--accent-border);border-radius:var(--radius);padding:20px;margin-bottom:16px;"><h3 style="color:var(--accent);margin-bottom:6px;">🎯 你想成为什么样的人？</h3><p style="font-size:0.78rem;color:var(--muted);margin-bottom:8px;">根据你的5轮探索，我们生成了以下预设。选择一个或自己写——这将成为你分享卡片的核心。</p><textarea class="text-input" id="deep-answer" style="min-height:60px;font-size:1.1rem;font-weight:600;" placeholder="我想成为……">' + escapeHtml(genPresets[0]) + '</textarea><div class="tag-group" style="margin-top:6px;">' + genPresets.map(function(pre) { return '<span class="tag-btn" style="font-size:0.78rem;padding:5px 10px;cursor:pointer;" onclick="fillTextarea(\'deep-answer\',\'' + escapeHtml(pre).replace(/'/g,"\\\\'") + '\')">' + escapeHtml(pre.slice(0,35)) + (pre.length>35?'…':'') + '</span>'; }).join("") + '<span style="font-size:0.73rem;color:var(--muted);">（AI根据你的回答生成，点击填入，可修改）</span></div></div><div class="profile-section"><h3>探索摘要</h3><textarea class="text-input" id="deep-summary" style="min-height:60px;">' + escapeHtml(summaryText) + '</textarea></div><p style="font-size:0.78rem;color:var(--muted);margin-bottom:16px;">摘要和答案都可以修改。确认无误后保存。</p><button class="btn btn-primary" onclick="saveDeepProfile()">保存并生成我的理想档案 →</button><button class="btn btn-ghost" onclick="startDeepExplore()" style="margin-left:8px;">重新探索</button></div>';
}
function saveDeepProfile() {
  var answer = document.getElementById("deep-answer").value.trim();
  var summary = document.getElementById("deep-summary").value.trim();
  var pw = IDEAL_PATHWAYS[deepIdealType];
  var stage1 = pw.stages[0];
  saveProfile({ answer: answer, statement: summary, values: [pw.name, stage1.name], actions: stage1.milestone, path: "deep", idealType: deepIdealType, stage: 0, createdAt: new Date().toISOString() });
  saveCommunityEntry({ id: "user_" + Date.now(), name: loadNickname() || "我的档案", date: new Date().toISOString().slice(0, 10), statement: summary, values: [pw.name, stage1.name], progress: stage1.milestone, idealType: deepIdealType, stage: 0 });
  navigate("profile");
}

function startPath(path) { currentPath = path; currentStep = 0; answers = {}; dialogueHistory = []; navigate("explore"); renderExploreStep(); }

function getPathLength() {
  if (currentPath === "reflect") return REFLECT_PROMPTS.length;
  if (currentPath === "act") return ACT_EXPERIMENTS.length;
  if (currentPath === "dialogue") return Object.keys(DIALOGUE_FOLLOWUPS).length + 1;
  if (currentPath === "observe") return 1;
  if (currentPath === "frame") return FRAME_DIMENSIONS.length;
  if (currentPath === "reverse") return REVERSE_PROMPTS.length;
  return 5;
}

function renderExploreStep() {
  const card = document.getElementById("explore-card");
  const meta = PATH_META[currentPath];
  if (currentStep === 0) {
    card.innerHTML = '<div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;"><span style="font-size:1.8rem;">' + meta.emoji + '</span><div><span style="font-weight:700;font-size:1.1rem;">' + meta.name + '</span><span style="color:var(--muted);font-size:0.8rem;display:block;">第 ' + (currentStep + 1) + ' 步 / 共 ' + (getPathLength() + 1) + ' 步</span></div></div><p class="sub">' + meta.desc + '</p><button class="btn btn-primary" onclick="advanceExplore()">开始</button><button class="btn btn-ghost" onclick="navigate(\'home\')" style="margin-left:8px;">返回</button>';
    return;
  }
  if (currentPath === "reflect") renderReflectStep(card);
  else if (currentPath === "act") renderActStep(card);
  else if (currentPath === "dialogue") renderDialogueStep(card);
  else if (currentPath === "observe") renderObserveStep(card);
  else if (currentPath === "frame") renderFrameStep(card);
  else if (currentPath === "reverse") renderReverseStep(card);
}

function advanceExplore() {
  currentStep++;
  if (currentPath === "reflect" && currentStep > REFLECT_PROMPTS.length) { buildProfileFromAnswers(); return; }
  if (currentPath === "act" && currentStep > ACT_EXPERIMENTS.length) { buildProfileFromAnswers(); return; }
  if (currentPath === "dialogue" && currentStep > Object.keys(DIALOGUE_FOLLOWUPS).length + 1) { buildProfileFromAnswers(); return; }
  if (currentPath === "observe" && currentStep > 1) { buildProfileFromAnswers(); return; }
  if (currentPath === "frame" && currentStep > FRAME_DIMENSIONS.length) { buildProfileFromAnswers(); return; }
  if (currentPath === "reverse" && currentStep > REVERSE_PROMPTS.length) { buildProfileFromAnswers(); return; }
  renderExploreStep();
}

// --- Reflect ---
function renderReflectStep(card) {
  var idx = currentStep - 1, p = REFLECT_PROMPTS[idx], total = REFLECT_PROMPTS.length, prev = answers["reflect_" + idx] || "";
  var dots = ""; for (var i = 0; i < total; i++) { dots += '<div class="step-dot ' + (i < idx ? 'done' : i === idx ? 'current' : '') + '"></div>'; }
  var presets = REFLECT_PRESETS[idx] || [];
  var presetHtml = '<div class="tag-group" style="margin-top:4px;">' + presets.map(function(pre, pi) { return '<span class="tag-btn" style="font-size:0.78rem;padding:5px 10px;cursor:pointer;" onclick="fillTextarea(\'reflect-answer\',\'' + escapeHtml(pre).replace(/'/g, "\\'") + '\')">' + escapeHtml(pre.slice(0, 30)) + (pre.length > 30 ? '…' : '') + '</span>'; }).join("") + '<span style="font-size:0.73rem;color:var(--muted);">（点击填入，可修改）</span></div>';
  card.innerHTML = '<div class="fade-in"><div class="step-indicator"><span>' + currentStep + ' / ' + (total + 1) + '</span><div class="step-dot-row">' + dots + '</div></div><p class="prompt-question">' + escapeHtml(p.q) + '</p><p style="color:var(--muted);font-size:0.82rem;margin-bottom:10px;">' + escapeHtml(p.hint) + '</p><textarea class="text-input" id="reflect-answer" placeholder="写下你真实的感受……">' + escapeHtml(prev) + '</textarea>' + presetHtml + '<div style="margin-top:20px;display:flex;gap:10px;justify-content:space-between;"><button class="btn btn-ghost" onclick="currentStep--;renderExploreStep();" ' + (currentStep <= 1 ? 'disabled' : '') + '>上一题</button><button class="btn btn-primary" onclick="saveReflectAnswer(' + idx + ')">' + (idx < total - 1 ? '下一题' : '完成') + '</button></div></div>';
  setTimeout(function() { var ta = document.getElementById("reflect-answer"); if (ta) ta.focus(); }, 100);
}
function saveReflectAnswer(idx) { answers["reflect_" + idx] = document.getElementById("reflect-answer").value.trim(); advanceExplore(); }

// --- Act ---
function renderActStep(card) {
  var idx = currentStep - 1, exp = ACT_EXPERIMENTS[idx], total = ACT_EXPERIMENTS.length, prev = answers["act_" + idx] || "";
  var dots = ""; for (var i = 0; i < total; i++) { dots += '<div class="step-dot ' + (i < idx ? 'done' : i === idx ? 'current' : '') + '"></div>'; }
  card.innerHTML = '<div class="fade-in"><div class="step-indicator"><span>实验 ' + currentStep + ' / ' + (total + 1) + '</span><div class="step-dot-row">' + dots + '</div></div><div style="background:var(--accent-bg);border:1px solid var(--accent-border);border-radius:var(--radius-sm);padding:16px;margin-bottom:16px;"><span style="font-weight:700;font-size:1rem;">🧪 ' + escapeHtml(exp.title) + '</span><p style="font-size:0.9rem;color:var(--fg2);margin-top:6px;">' + escapeHtml(exp.desc) + '</p></div><p class="prompt-question" style="font-size:1rem;">' + escapeHtml(exp.q) + '</p><textarea class="text-input" id="act-answer" placeholder="做完实验后，回来写下你的感受……">' + escapeHtml(prev) + '</textarea><div class="tag-group" style="margin-top:4px;">' + (ACT_PRESETS[idx] || []).map(function(pre) { return '<span class="tag-btn" style="font-size:0.78rem;padding:5px 10px;cursor:pointer;" onclick="fillTextarea(\'act-answer\',\'' + escapeHtml(pre).replace(/'/g, "\\'") + '\')">' + escapeHtml(pre.slice(0, 30)) + (pre.length > 30 ? '…' : '') + '</span>'; }).join("") + '<span style="font-size:0.73rem;color:var(--muted);">（点击填入，可修改）</span></div><div style="margin-top:20px;display:flex;gap:10px;justify-content:space-between;"><button class="btn btn-ghost" onclick="currentStep--;renderExploreStep();" ' + (currentStep <= 1 ? 'disabled' : '') + '>上一个实验</button><button class="btn btn-primary" onclick="saveActAnswer(' + idx + ')">' + (idx < total - 1 ? '下一个实验' : '完成') + '</button></div></div>';
}
function saveActAnswer(idx) { answers["act_" + idx] = document.getElementById("act-answer").value.trim(); advanceExplore(); }

// --- Dialogue ---
function renderDialogueStep(card) {
  var step = currentStep - 1, q;
  if (step === 0) q = DIALOGUE_START;
  else { var prevKey = step === 1 ? "q1" : DIALOGUE_FOLLOWUPS["q" + (step - 1)]?.next; if (!prevKey) { buildProfileFromAnswers(); return; } q = DIALOGUE_FOLLOWUPS[prevKey]; if (!q) { buildProfileFromAnswers(); return; } }
  var total = Object.keys(DIALOGUE_FOLLOWUPS).length + 1, prev = answers["dialogue_" + step] || "";
  var dots = ""; for (var i = 0; i < total; i++) { dots += '<div class="step-dot ' + (i < step ? 'done' : i === step ? 'current' : '') + '"></div>'; }
  var hist = "";
  if (dialogueHistory.length > 0) { hist = '<div style="margin-bottom:20px;padding:16px;background:var(--card);border-radius:var(--radius-sm);max-height:200px;overflow-y:auto;">'; dialogueHistory.forEach(function(h) { hist += '<p style="font-size:0.82rem;color:var(--muted);margin-bottom:2px;">—— 我问：</p><p style="font-size:0.88rem;margin-bottom:8px;">' + escapeHtml(h.q) + '</p><p style="font-size:0.82rem;color:var(--muted);margin-bottom:2px;">—— 你答：</p><p style="font-size:0.88rem;margin-bottom:14px;color:var(--fg2);">' + escapeHtml(h.a) + '</p>'; }); hist += '</div>'; }
  var dPresets = DIALOGUE_PRESETS[step] || [];
  var dPresetHtml = '<div class="tag-group" style="margin-top:4px;">' + dPresets.map(function(pre) { return '<span class="tag-btn" style="font-size:0.78rem;padding:5px 10px;cursor:pointer;" onclick="fillTextarea(\'dialogue-answer\',\'' + escapeHtml(pre).replace(/'/g, "\\'") + '\')">' + escapeHtml(pre.slice(0, 30)) + (pre.length > 30 ? '…' : '') + '</span>'; }).join("") + '<span style="font-size:0.73rem;color:var(--muted);">（点击填入，可修改）</span></div>';
  card.innerHTML = '<div class="fade-in"><div class="step-indicator"><span>对话 ' + currentStep + ' / ' + (total + 1) + '</span><div class="step-dot-row">' + dots + '</div></div>' + hist + '<p class="prompt-question">' + escapeHtml(q.q) + '</p><textarea class="text-input" id="dialogue-answer" placeholder="想到什么就写什么……">' + escapeHtml(prev) + '</textarea>' + dPresetHtml + '<div style="margin-top:20px;display:flex;gap:10px;justify-content:space-between;"><button class="btn btn-ghost" onclick="dialogueBack()" ' + (currentStep <= 1 ? 'disabled' : '') + '>返回</button><button class="btn btn-primary" onclick="saveDialogueAnswer(' + step + ')">' + (step < total - 1 ? '继续' : '完成') + '</button></div></div>';
  setTimeout(function() { var ta = document.getElementById("dialogue-answer"); if (ta) ta.focus(); }, 100);
}
function saveDialogueAnswer(step) {
  var val = document.getElementById("dialogue-answer").value.trim(); answers["dialogue_" + step] = val;
  var qText = step === 0 ? DIALOGUE_START.q : DIALOGUE_FOLLOWUPS[step === 1 ? "q1" : DIALOGUE_FOLLOWUPS["q" + (step - 1)]?.next]?.q || "";
  dialogueHistory.push({ q: qText, a: val }); advanceExplore();
}
function dialogueBack() { if (currentStep > 1) { dialogueHistory.pop(); currentStep--; renderExploreStep(); } }

// --- Observe ---
function renderObserveStep(card) {
  card.innerHTML = '<div class="fade-in"><p class="prompt-question">阅读这些真实的理想档案</p><p style="color:var(--muted);font-size:0.85rem;margin-bottom:20px;">点击任何一个让你有共鸣的，或者全部读完再做决定。</p><div style="display:flex;flex-direction:column;gap:14px;margin-bottom:20px;">' + SAMPLE_PROFILES.map(function(p, i) { return '<div class="persona-card" onclick="observePick(' + i + ')" id="observe-' + i + '" style="cursor:pointer;"><div class="persona-header"><span class="persona-name">' + escapeHtml(p.name) + '</span></div><p class="persona-statement" style="-webkit-line-clamp:unset;">' + escapeHtml(p.statement) + '</p><div class="tag-group" style="margin-top:8px;">' + p.values.map(function(v) { return '<span class="tag-btn picked" style="cursor:default;font-size:0.78rem;padding:4px 12px;">' + escapeHtml(v) + '</span>'; }).join("") + '</div></div>'; }).join("") + '</div><p class="prompt-question" style="font-size:1rem;">哪一份档案最触动你？为什么？有没有哪句话让你觉得「这也是我想说的」？</p><textarea class="text-input" id="observe-reflection" placeholder="写下你的感受……">' + escapeHtml(answers["observe_reflection"] || "") + '</textarea><div class="tag-group" style="margin-top:4px;">' + OBSERVE_PRESETS.map(function(pre) { return '<span class="tag-btn" style="font-size:0.78rem;padding:5px 10px;cursor:pointer;" onclick="fillTextarea(\'observe-reflection\',\'' + escapeHtml(pre).replace(/'/g, "\\'") + '\')">' + escapeHtml(pre.slice(0, 32)) + (pre.length > 32 ? '…' : '') + '</span>'; }).join("") + '<span style="font-size:0.73rem;color:var(--muted);">（点击填入，可修改）</span></div><div style="margin-top:20px;display:flex;gap:10px;justify-content:space-between;"><button class="btn btn-ghost" onclick="navigate(\'home\')">返回</button><button class="btn btn-primary" onclick="saveObserveAnswer()">生成我的理想档案</button></div></div>';
}
function observePick(i) { observedIdx = i; document.querySelectorAll("[id^='observe-']").forEach(function(el) { el.style.borderColor = "var(--border)"; }); var el = document.getElementById("observe-" + i); if (el) el.style.borderColor = "var(--accent)"; }
function saveObserveAnswer() { answers["observe_reflection"] = document.getElementById("observe-reflection").value.trim(); if (observedIdx !== null) answers["observe_picked"] = observedIdx; advanceExplore(); }
function fillTextarea(id, text) { var ta = document.getElementById(id); if (ta) { ta.value = text; ta.focus(); } }

// --- Frame ---
function renderFrameStep(card) {
  var idx = currentStep - 1, dim = FRAME_DIMENSIONS[idx], total = FRAME_DIMENSIONS.length, picked = answers["frame_" + idx] || [];
  var dots = ""; for (var i = 0; i < total; i++) { dots += '<div class="step-dot ' + (i < idx ? 'done' : i === idx ? 'current' : '') + '"></div>'; }
  card.innerHTML = '<div class="fade-in"><div class="step-indicator"><span>维度 ' + currentStep + ' / ' + (total + 1) + '</span><div class="step-dot-row">' + dots + '</div></div><div style="margin-bottom:16px;"><span style="font-weight:700;color:var(--accent);font-size:0.85rem;letter-spacing:0.03em;">' + escapeHtml(dim.title) + '</span></div><p class="prompt-question">' + escapeHtml(dim.q) + '</p><p style="color:var(--muted);font-size:0.82rem;margin-bottom:12px;">选择最符合的（可多选）</p><div class="tag-group" id="frame-tags">' + dim.tags.map(function(t) { var isP = picked.indexOf(t) >= 0; return '<span class="tag-btn ' + (isP ? 'picked' : '') + '" onclick="toggleFrameTag(this, \'' + escapeHtml(t).replace(/'/g, "\\'") + '\', ' + idx + ')">' + escapeHtml(t) + '</span>'; }).join("") + '</div><div style="margin-top:20px;display:flex;gap:10px;justify-content:space-between;"><button class="btn btn-ghost" onclick="currentStep--;renderExploreStep();" ' + (currentStep <= 1 ? 'disabled' : '') + '>上一个维度</button><button class="btn btn-primary" onclick="saveFrameAnswer(' + idx + ')">' + (idx < total - 1 ? '下一个维度' : '完成') + '</button></div></div>';
}
function toggleFrameTag(el, tag, idx) { var key = "frame_" + idx; if (!answers[key]) answers[key] = []; var arr = answers[key]; if (arr.indexOf(tag) >= 0) { answers[key] = arr.filter(function(t) { return t !== tag; }); el.classList.remove("picked"); } else { arr.push(tag); el.classList.add("picked"); } }
function saveFrameAnswer(idx) { advanceExplore(); }

// --- REVERSE ---
function renderReverseStep(card) {
  var idx = currentStep - 1, p = REVERSE_PROMPTS[idx], total = REVERSE_PROMPTS.length, prev = answers["reverse_" + idx] || "";
  var dots = ""; for (var i = 0; i < total; i++) { dots += '<div class="step-dot ' + (i < idx ? 'done' : i === idx ? 'current' : '') + '"></div>'; }
  var presets = REVERSE_PRESETS[idx] || [];
  var presetHtml = '<div class="tag-group" style="margin-top:4px;">' + presets.map(function(pre) { return '<span class="tag-btn" style="font-size:0.78rem;padding:5px 10px;cursor:pointer;" onclick="fillTextarea(\'reverse-answer\',\'' + escapeHtml(pre).replace(/'/g, "\\'") + '\')">' + escapeHtml(pre.slice(0, 30)) + (pre.length > 30 ? '…' : '') + '</span>'; }).join("") + '<span style="font-size:0.73rem;color:var(--muted);">（点击填入，可修改）</span></div>';
  card.innerHTML = '<div class="fade-in"><div class="step-indicator"><span>' + currentStep + ' / ' + (total + 1) + '</span><div class="step-dot-row">' + dots + '</div></div><p class="prompt-question">' + escapeHtml(p.q) + '</p><p style="color:var(--muted);font-size:0.82rem;margin-bottom:10px;">' + escapeHtml(p.hint) + '</p><textarea class="text-input" id="reverse-answer" placeholder="写下你真实的感受……">' + escapeHtml(prev) + '</textarea>' + presetHtml + '<div style="margin-top:20px;display:flex;gap:10px;justify-content:space-between;"><button class="btn btn-ghost" onclick="currentStep--;renderExploreStep();" ' + (currentStep <= 1 ? 'disabled' : '') + '>上一题</button><button class="btn btn-primary" onclick="saveReverseAnswer(' + idx + ')">' + (idx < total - 1 ? '下一题' : '完成') + '</button></div></div>';
  setTimeout(function() { var ta = document.getElementById("reverse-answer"); if (ta) ta.focus(); }, 100);
}
function saveReverseAnswer(idx) { answers["reverse_" + idx] = document.getElementById("reverse-answer").value.trim(); advanceExplore(); }

// ============================================================
// PROFILE BUILDING (from exploration)
// ============================================================

function buildProfileFromAnswers() { renderBuildProfile(document.getElementById("explore-card")); }

function renderBuildProfile(card) {
  var syn = synthesizeProfile();
  var answerPresets = generateAnswerPresets(syn);
  var answerPresetHtml = '<div class="tag-group" style="margin-top:4px;">' + answerPresets.map(function(pre) { return '<span class="tag-btn" style="font-size:0.78rem;padding:5px 10px;cursor:pointer;" onclick="fillTextarea(\'profile-answer\',\'' + escapeHtml(pre).replace(/'/g, "\\'") + '\')">' + escapeHtml(pre.slice(0, 35)) + (pre.length > 35 ? '…' : '') + '</span>'; }).join("") + '<span style="font-size:0.73rem;color:var(--muted);">（AI 根据你的回答生成，点击填入，可修改）</span></div>';
  card.innerHTML = '<div class="fade-in"><div style="text-align:center;margin-bottom:24px;"><span style="font-size:3rem;display:block;margin-bottom:8px;">✨</span><h2>你的理想档案 · 初稿</h2><p style="color:var(--fg2);font-size:0.9rem;">根据你的回答，这是你的理想草图。你可以修改任何部分。</p></div><div class="profile-section" style="background:var(--accent-bg);border:1.5px solid var(--accent-border);border-radius:var(--radius);padding:20px;margin-bottom:24px;"><h3 style="color:var(--accent);">🎯 你想成为什么样的人？</h3><p style="font-size:0.8rem;color:var(--muted);margin-bottom:8px;">用一句话回答——这句话会出现在你的分享卡片上，也会让朋友一眼看懂你的方向。</p><textarea class="text-input" id="profile-answer" style="min-height:60px;font-size:1.1rem;font-weight:600;" placeholder="我想成为……">' + escapeHtml(syn.answer || "") + '</textarea>' + answerPresetHtml + '</div><div class="profile-section"><h3>核心陈述（展开说说）</h3><textarea class="text-input" id="profile-statement" style="min-height:120px;">' + escapeHtml(syn.statement) + '</textarea></div><div class="profile-section"><h3>对你重要的价值</h3><div class="tag-group" id="profile-values">' + ["自由", "创造", "连接", "成长", "公平", "美", "智慧", "温暖", "独立", "影响", "安全", "冒险", "真实", "平衡", "卓越"].map(function(v) { return '<span class="tag-btn ' + (syn.values.indexOf(v) >= 0 ? 'picked' : '') + '" onclick="this.classList.toggle(\'picked\')">' + v + '</span>'; }).join("") + '</div></div><div class="profile-section"><h3>我接下来的实验 / 行动</h3><textarea class="text-input" id="profile-actions" style="min-height:80px;" placeholder="接下来你打算做什么来验证或接近这个理想？">' + escapeHtml(syn.actions) + '</textarea></div><div style="display:flex;gap:10px;justify-content:center;margin-top:20px;"><button class="btn btn-outline" onclick="currentStep=0;renderExploreStep();">重新探索</button><button class="btn btn-primary" onclick="finalizeProfile()">保存我的理想档案</button></div></div>';
}

function synthesizeProfile() {
  var statement = "", values = [], actions = "";
  if (currentPath === "reflect") { var all = Object.values(answers).filter(Boolean); if (all.length > 0) { statement = "根据你写下的内容：\n\n" + all.map(function(a) { return "· " + a; }).join("\n\n") + "\n\n——这是你的原材料。试着把它们浓缩成一句话：你想成为什么样的人？"; } else { statement = "你还没有写下太多，但没关系。试着用一句话描述：你想成为什么样的人？"; } values = ["真实", "成长", "自由"]; actions = "每天留15分钟给自己思考这个问题，不受打扰。"; }
  else if (currentPath === "act") { var all = Object.values(answers).filter(Boolean); statement = all.length > 0 ? "通过实验，你发现：\n\n" + all.map(function(a, i) { return "实验" + (i + 1) + "的感受：" + a; }).join("\n\n") : "你在实验中注意到什么？"; values = ["创造", "行动", "好奇"]; actions = "继续每周做一个小实验，记录感受。"; }
  else if (currentPath === "dialogue") { if (dialogueHistory.length > 0) { statement = "在对话中，你逐渐接近了核心：\n\n" + dialogueHistory.map(function(h) { return "问：" + h.q + "\n答：" + h.a; }).join("\n\n"); } else { statement = "对话帮助你理清了一些方向。试着用一句话总结你的发现。"; } values = ["真实", "智慧", "独立"]; actions = "找一位信任的朋友，和他/她面对面聊聊你今天写下的这些。"; }
  else if (currentPath === "observe") { if (observedIdx !== null) { var picked = SAMPLE_PROFILES[observedIdx]; statement = "你被「" + picked.name + "」的档案触动了。那份档案中说：\n\n「" + picked.statement + "」\n\n现在，用你自己的语言，写下属于你的版本。"; values = picked.values.slice(); actions = picked.action; } else { statement = "你读了几份真实的理想档案。哪些地方让你产生了共鸣？把这些共鸣写下来，那就是你的线索。"; values = ["真实", "连接", "成长"]; actions = ""; } var refl = answers["observe_reflection"]; if (refl) statement += "\n\n你的感受：" + refl; }
  else if (currentPath === "frame") { var parts = []; FRAME_DIMENSIONS.forEach(function(dim, i) { var p = answers["frame_" + i] || []; if (p.length > 0) { parts.push("【" + dim.title + "】" + p.join("、")); values = values.concat(p); } }); statement = "通过系统分析：\n\n" + parts.join("\n") + "\n\n现在，试着把这些碎片拼成一幅完整的图景。"; values = values.filter(function(v, i, a) { return a.indexOf(v) === i; }).slice(0, 6); actions = "对照上面的分析，找出一个你可以马上启动的小项目。"; }
  else if (currentPath === "reverse") { var all = Object.values(answers).filter(Boolean); if (all.length > 0) { statement = "通过反观，你看到了自己不想成为的样子：\n\n" + all.map(function(a, i) { return "· " + a; }).join("\n\n") + "\n\n——现在，把这些翻转过来。你真正想成为的人，就藏在你不想要的反面。试着用一句话写下那个'反面'。"; } else { statement = "你还没有写下太多。试着回答：你最不想成为什么样的人？它的反面就是你真正的方向。"; } values = ["真实", "觉醒", "勇气"]; actions = "写下「我不想______，所以我要______」的三句话，贴在每天能看到的地方。"; }
  var answer = allAnswersToAnswer();
  return { statement: statement, values: values, actions: actions, answer: answer };
}
function allAnswersToAnswer() {
  var all = Object.values(answers).filter(Boolean);
  if (all.length === 0) return "";
  return "我想成为一个" + (all[all.length - 1] || "").slice(0, 20) + "……的人";
}
function generateAnswerPresets(syn) {
  var presets = [];
  var vals = (syn.values || []).slice(0, 3);
  if (vals.length >= 2) presets.push("我想成为一个既" + vals[0] + "又" + vals[1] + "的人。");
  if (vals.length >= 1) presets.push("我想用" + vals[0] + "的方式，让这个世界变得更好一点。");
  var allAns = Object.values(answers).filter(Boolean);
  if (allAns.length >= 2) {
    var last = allAns[allAns.length - 1];
    if (last.length > 30) last = last.slice(0, 30) + "……";
    presets.push("我想成为一个" + last + "的人");
  }
  presets.push("我想成为那种多年以后回头看，不会后悔浪费了时间的人。");
  return presets;
}

function finalizeProfile() {
  var answer = document.getElementById("profile-answer").value.trim();
  var statement = document.getElementById("profile-statement").value.trim();
  var valueEls = document.querySelectorAll("#profile-values .tag-btn.picked");
  var values = Array.from(valueEls).map(function(el) { return el.textContent; });
  var actions = document.getElementById("profile-actions").value.trim();
  var idealType = classifyIdealType(answers);
  saveProfile({ answer: answer, statement: statement, values: values, actions: actions, path: currentPath, idealType: idealType, stage: 0, createdAt: new Date().toISOString() });
  saveCommunityEntry({ id: "user_" + Date.now(), name: loadNickname() || "我的档案", date: new Date().toISOString().slice(0, 10), statement: statement, values: values, progress: answer || actions, idealType: idealType, stage: 0 });
  navigate("profile");
}

// ============================================================
// PROFILE VIEW
// ============================================================

function renderProfile() {
  var card = document.getElementById("profile-card"), p = loadProfile(), achievements = loadAchievements();
  if (!p) { card.innerHTML = '<div class="empty-state fade-in"><div class="icon">📜</div><h2>还没有理想档案</h2><p style="color:var(--fg2);margin-bottom:20px;">完成一次探索，你的理想档案会出现在这里。</p><button class="btn btn-primary" onclick="navigate(\'home\')">开始探索</button></div>'; return; }
  var nickname = loadNickname();
  var achHtml = "";
  if (achievements.length > 0) {
    achHtml = '<div class="profile-section"><h3>已点亮成就</h3><div class="achievement-grid">' + achievements.map(function(a) { return '<div class="achievement-badge earned"><span class="badge-icon">' + escapeHtml(a.icon) + '</span><span class="badge-name">' + escapeHtml(a.name) + '</span><span class="badge-date">' + escapeHtml(a.date) + '</span></div>'; }).join("") + '</div></div>';
  }
  var hist = loadProfileHistory(); var timeHtml = '';
  if (hist.length > 1) { timeHtml = '<div class="profile-section"><h3>理想时间线</h3><div style="font-size:0.85rem;color:var(--muted);">' + hist.slice(-5).reverse().map(function(h) { return '<div style="padding:6px 0;border-bottom:1px solid var(--border);">' + new Date(h.date).toLocaleDateString("zh-CN") + ' — ' + escapeHtml((h.statement || "").slice(0, 60)) + (h.statement && h.statement.length > 60 ? '……' : '') + '</div>'; }).join("") + '</div></div>'; }
  card.innerHTML = '<div class="fade-in"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;"><h2 style="margin:0;">我的理想档案</h2><button class="btn btn-sm btn-outline" onclick="editProfile()">编辑</button></div><div class="profile-section"><h3>我的昵称</h3><div style="display:flex;gap:8px;"><input class="text-input" id="nickname-input" value="' + escapeHtml(nickname) + '" placeholder="设置昵称后导出档案给朋友……" style="min-height:auto;padding:10px 14px;font-size:0.9rem;"><button class="btn btn-sm btn-outline" onclick="saveNicknameFromInput()">保存</button></div></div><p style="font-size:0.8rem;color:var(--muted);margin-bottom:20px;">创建于 ' + new Date(p.createdAt).toLocaleDateString("zh-CN") + ' · 通过「' + (p.path === "deep" ? "深度探索" : PATH_META[p.path]?.name || "未知") + '」探索</p>' + (p.answer ? '<div class="profile-section" style="background:var(--accent-bg);border:1.5px solid var(--accent-border);border-radius:var(--radius);padding:20px;margin-bottom:24px;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><h3 style="color:var(--accent);margin:0;">🎯 你想成为什么样的人？</h3><button class="btn btn-sm btn-outline" onclick="editAnswer()">编辑</button></div><p id="answer-display" style="font-size:1.15rem;font-weight:650;line-height:1.6;color:var(--fg);">' + escapeHtml(p.answer) + '</p><div id="answer-edit" style="display:none;"><textarea class="text-input" id="answer-edit-input" style="min-height:60px;font-size:1.1rem;font-weight:600;">' + escapeHtml(p.answer) + '</textarea><button class="btn btn-sm btn-primary" onclick="saveAnswerEdit()" style="margin-top:8px;">保存</button><button class="btn btn-sm btn-ghost" onclick="cancelAnswerEdit()" style="margin-top:8px;">取消</button></div></div>' : '') + (p.idealType ? renderIdealTypeBox(p) : '') + '<div class="profile-section"><h3>我想成为……</h3><div class="profile-block ' + (!p.statement ? 'empty' : '') + '">' + (p.statement || "还没有写下") + '</div></div><div class="profile-section"><h3>我的核心价值</h3><div class="tag-group">' + (p.values || []).map(function(v) { return '<span class="tag-btn picked" style="cursor:default;">' + escapeHtml(v) + '</span>'; }).join("") + '</div></div><div class="profile-section"><h3>我正在做的尝试</h3><div class="profile-block ' + (!p.actions ? 'empty' : '') + '">' + (p.actions || "还没有行动计划") + '</div></div>' + achHtml + timeHtml + '<hr><div style="display:flex;flex-wrap:wrap;gap:8px;"><button class="btn btn-outline btn-sm" onclick="navigate(\'action\')">进入行理想 →</button><button class="btn btn-outline btn-sm" onclick="navigate(\'community\')">去理想广场 →</button><button class="btn btn-primary btn-sm" onclick="exportData()">📤 导出档案</button><button class="btn btn-outline btn-sm" onclick="exportAllData()">💾 备份全部</button><button class="btn btn-primary btn-sm" onclick="generateShareCard()">🖼️ 生成分享卡片</button></div></div>';
}
function editAnswer() { document.getElementById("answer-display").style.display = "none"; document.getElementById("answer-edit").style.display = "block"; document.getElementById("answer-edit-input").focus(); }
function saveAnswerEdit() { var p = loadProfile(); p.answer = document.getElementById("answer-edit-input").value.trim(); saveProfile(p); navigate("profile"); }
function cancelAnswerEdit() { document.getElementById("answer-display").style.display = "block"; document.getElementById("answer-edit").style.display = "none"; }
function renderIdealTypeBox(p) {
  var pw = IDEAL_PATHWAYS[p.idealType]; if (!pw) return '';
  var stage = pw.stages[p.stage || 0];
  return '<div class="ideal-type-box"><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;"><span style="font-size:1.8rem;">' + pw.icon + '</span><div><span style="font-weight:700;font-size:1rem;color:var(--fg);">' + pw.name + '</span><span style="font-size:0.78rem;color:var(--muted);display:block;">' + pw.tagline + '</span></div></div><p style="font-size:0.82rem;color:var(--fg2);margin-bottom:12px;">' + pw.desc + '</p><div class="ideal-stage-box"><span style="font-size:0.75rem;color:var(--green);font-weight:650;">⚡ 当前境界：' + stage.name + '（' + stage.icon + '）</span><p style="font-size:0.78rem;color:var(--fg2);margin-top:2px;">' + stage.desc + '</p></div><div style="font-size:0.73rem;color:var(--muted);">修炼路径：' + pw.stages.map(function(s,i) { return '<span style="color:' + (i <= (p.stage||0) ? 'var(--green)' : 'var(--muted)') + ';">' + s.icon + s.name + '</span>'; }).join(" → ") + '</div></div>';
}
function editProfile() { var p = loadProfile(); if (!p) return; answers = {}; currentPath = p.path; dialogueHistory = []; navigate("explore"); currentStep = getPathLength() + 1; renderBuildProfile(document.getElementById("explore-card")); }

// ============================================================
// COMMUNITY
// ============================================================

async function renderCommunity() {
  var card = document.getElementById("community-card");
  card.innerHTML = '<div class="fade-in"><h2>理想广场</h2><p class="sub">正在加载……</p></div>';
  var entries = await loadCommunity();
  // Normalize entries from Supabase or localStorage
  entries = entries.map(function(e) {
    var vals = e.values;
    if (typeof vals === "string") { try { vals = JSON.parse(vals); } catch(ex) { vals = []; } }
    return { id: e.id, name: e.name, date: e.date, statement: e.statement, values: vals || [], progress: e.progress, idealType: e.ideal_type || e.idealType, stage: e.stage || 0 };
  });
  card.innerHTML = '<div class="fade-in"><h2>理想广场</h2><p class="sub">这里有一些人认真写下了他们的理想。每个人的档案都实时存储在云端。</p><div style="display:flex;gap:8px;margin-bottom:16px;"><button class="btn btn-outline btn-sm" onclick="document.getElementById(\'import-file\').click()">📥 导入朋友档案</button><input type="file" id="import-file" accept=".json" style="display:none;" onchange="importData(event)"><input type="file" id="restore-file" accept=".json" style="display:none;" onchange="importAllData(event)"><button class="btn btn-outline btn-sm" onclick="triggerRestore()">🔄 恢复备份</button></div><div class="community-grid">' + entries.map(function(e) { var pwBadge = ''; if (e.idealType) { var pw = IDEAL_PATHWAYS[e.idealType]; if (pw) { var st = pw.stages[e.stage || 0]; pwBadge = '<span style="display:inline-flex;align-items:center;gap:4px;font-size:0.75rem;color:var(--accent);margin-bottom:6px;">' + pw.icon + ' ' + pw.name + ' · ' + (st ? st.icon + st.name : '入门') + '</span>'; } } return '<div class="persona-card" onclick="openProfile(\'' + e.id + '\')"><div class="persona-header"><span class="persona-name">' + escapeHtml(e.name) + '</span><span class="persona-date">' + escapeHtml(e.date) + '</span></div>' + pwBadge + '<p class="persona-statement">' + escapeHtml((e.statement || "").substring(0, 150)) + ((e.statement || "").length > 150 ? '……' : '') + '</p><div class="tag-group" style="margin-top:8px;">' + (e.values || []).map(function(v) { return '<span class="tag-btn picked" style="cursor:default;font-size:0.78rem;padding:4px 12px;">' + escapeHtml(v) + '</span>'; }).join("") + '</div>' + (e.progress ? '<p style="font-size:0.8rem;color:var(--accent);margin-top:8px;">→ ' + escapeHtml(e.progress) + '</p>' : '') + '</div>'; }).join("") + '</div></div>';
}
function openProfile(id) {
  var entries = loadCommunity(), e = entries.find(function(en) { return en.id === id; }); if (!e) return;
  var pwHtml = '';
  if (e.idealType) { var pw = IDEAL_PATHWAYS[e.idealType]; if (pw) { var st = pw.stages[e.stage || 0]; pwHtml = '<div style="background:linear-gradient(135deg,var(--accent-bg),var(--card));border:1px solid var(--accent-border);border-radius:8px;padding:14px;margin-bottom:16px;"><div style="display:flex;align-items:center;gap:8px;"><span style="font-size:1.5rem;">' + pw.icon + '</span><div><span style="font-weight:650;color:var(--fg);">' + pw.name + '</span><span style="font-size:0.78rem;color:var(--muted);display:block;">' + pw.tagline + ' · 当前境界：' + (st ? st.icon + st.name : '入门') + '</span></div></div></div>'; } }
  document.getElementById("modal-container").innerHTML = '<div class="modal-overlay fade-in" onclick="if(event.target===this)closeModal()"><div class="modal"><div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:16px;"><h2 style="margin:0;">' + escapeHtml(e.name) + '</h2><span style="font-size:0.8rem;color:var(--muted);">' + escapeHtml(e.date) + '</span></div>' + pwHtml + '<div class="profile-section"><h3>想成为……</h3><div class="profile-block">' + escapeHtml(e.statement || "（未填写）") + '</div></div><div class="profile-section"><h3>核心价值</h3><div class="tag-group">' + (e.values || []).map(function(v) { return '<span class="tag-btn picked" style="cursor:default;">' + escapeHtml(v) + '</span>'; }).join("") + '</div></div>' + (e.progress ? '<div class="profile-section"><h3>正在做的尝试</h3><div class="profile-block">' + escapeHtml(e.progress) + '</div></div>' : '') + '<button class="btn btn-ghost" onclick="closeModal()" style="margin-top:16px;">关闭</button></div></div>';
}
function closeModal() { document.getElementById("modal-container").innerHTML = ""; }

// ============================================================
// ACTION MODULE (行理想)
// ============================================================

function renderActionModule() {
  var card = document.getElementById("action-card"), p = loadProfile(), plan = loadActionPlan();
  if (!p) { card.innerHTML = '<div class="empty-state fade-in"><div class="icon">🗺️</div><h2>先找到你的理想</h2><p style="color:var(--fg2);margin-bottom:20px;">完成探索，有了理想档案之后，这里会帮你设计行动路线。</p><button class="btn btn-primary" onclick="navigate(\'home\')">去探索</button></div>'; return; }
  if (!plan) { renderActionStep1(card, p); return; }
  renderActionDashboard(card, p, plan);
}
function getCultivationHeader(p) {
  if (!p.idealType) return '';
  var pw = IDEAL_PATHWAYS[p.idealType]; if (!pw) return '';
  var stage = pw.stages[p.stage || 0];
  return '<div style="background:linear-gradient(135deg,var(--accent-bg),var(--card));border:1px solid var(--accent-border);border-radius:var(--radius-sm);padding:14px 16px;margin-bottom:16px;"><div style="display:flex;align-items:center;gap:8px;"><span style="font-size:1.4rem;">' + pw.icon + '</span><div style="flex:1;"><span style="font-weight:650;font-size:0.9rem;color:var(--fg);">' + pw.name + ' · ' + stage.name + '</span><span style="font-size:0.75rem;color:var(--muted);display:block;">' + pw.tagline + ' — 完成里程碑可突破至下一境界</span></div></div></div>';
}

// Step 1: Resource & action selection
function openBookSearch(title, platformKey) {
  var key = platformKey || loadReadingPref();
  var pl = READING_PLATFORMS[key] || READING_PLATFORMS["douban"];
  if (pl.gbk) {
    var form = document.createElement("form");
    form.method = "GET"; form.action = pl.searchUrl.replace("{}", ""); form.acceptCharset = "GBK"; form.target = "_blank";
    var input = document.createElement("input"); input.type = "hidden"; input.name = "key"; input.value = title;
    form.appendChild(input); document.body.appendChild(form); form.submit(); document.body.removeChild(form);
  } else {
    window.open(pl.searchUrl.replace("{}", encodeURIComponent(title)), "_blank", "noopener");
  }
}
function getBookSearchUrl(title) {
  var pref = loadReadingPref();
  var pl = READING_PLATFORMS[pref] || READING_PLATFORMS["douban"];
  return pl.searchUrl.replace("{}", encodeURIComponent(title));
}
function renderActionStep1(card, p) {
  var values = p.values || [];
  var allResources = []; var seenR = {};
  // Stage-specific resources take priority
  if (p.idealType && STAGE_RESOURCES[p.idealType]) {
    var sr = STAGE_RESOURCES[p.idealType][p.stage || 0];
    if (sr) {
      sr.books.forEach(function(b) { if (!seenR["b:" + b]) { seenR["b:" + b] = true; allResources.push({ type: "book", name: b, icon: "📖" }); } });
      sr.vids.forEach(function(vd) { var key = "v:" + vd.title; if (!seenR[key]) { seenR[key] = true; allResources.push({ type: "video", name: vd.title, tag: vd.type, icon: "🎬" }); } });
      sr.actions.forEach(function(a) { var key = "a:" + a; if (!seenR[key]) { seenR[key] = true; allResources.push({ type: "action", name: a, icon: "🎯" }); } });
    }
  }
  // Also add value-based resources
  values.forEach(function(v) {
    var rm = RESOURCE_MAP[v] || DEFAULT_RESOURCE;
    rm.books.forEach(function(b) { if (!seenR["b:" + b]) { seenR["b:" + b] = true; allResources.push({ type: "book", name: b, icon: "📖" }); } });
    rm.vids.forEach(function(vd) { var key = "v:" + vd.title; if (!seenR[key]) { seenR[key] = true; allResources.push({ type: "video", name: vd.title, tag: vd.type, icon: "🎬" }); } });
    rm.actions.forEach(function(a) { var key = "a:" + a; if (!seenR[key]) { seenR[key] = true; allResources.push({ type: "action", name: a, icon: "🎯" }); } });
  });
  if (allResources.length === 0) { allResources = DEFAULT_RESOURCE.books.map(function(b) { return { type: "book", name: b, icon: "📖" }; }).concat(DEFAULT_RESOURCE.vids.map(function(vd) { return { type: "video", name: vd.title, tag: vd.type, icon: "🎬" }; })).concat(DEFAULT_RESOURCE.actions.map(function(a) { return { type: "action", name: a, icon: "🎯" }; })); }

  actionSelections = { resources: [], actions: [] };
  var pref = loadReadingPref();
  var pl = READING_PLATFORMS[pref] || READING_PLATFORMS["douban"];
  card.innerHTML = '<div class="fade-in"><h2>行理想</h2>' + getCultivationHeader(p) + '<p class="sub">根据你的理想方向和当前境界，我们推荐以下资源。勾选你感兴趣的，系统会帮你生成修炼里程碑。<br><span style="font-size:0.78rem;color:var(--muted);">点击卡片勾选，点击右侧链接直接找书 —— 在「理想之书」中可切换阅读平台</span></p><div style="margin-bottom:20px;"><h3 style="color:var(--accent);font-size:0.85rem;letter-spacing:0.03em;margin-bottom:10px;">📚 技能与知识资源</h3>' + allResources.filter(function(r) { return r.type === "book" || r.type === "video"; }).map(function(r, i) { var linkHtml = ''; if (r.type === 'book') { linkHtml = '<a class="book-link" href="#" onclick="event.stopPropagation();openBookSearch(\'' + escapeHtml(r.name).replace(/'/g, "\\'") + '\');return false;" style="flex-shrink:0;margin-left:8px;" title="在' + pl.name + '搜索">🔍 找书</a>'; } return '<div class="resource-card" id="res-' + i + '" onclick="toggleResource(\'res-' + i + '\', \'' + escapeHtml(r.name).replace(/'/g, "\\'") + '\', \'' + r.type + '\')"><span class="resource-icon">' + r.icon + '</span><div class="resource-info"><div class="resource-name">' + escapeHtml(r.name) + '</div>' + (r.tag ? '<div class="resource-type">' + escapeHtml(r.tag) + '</div>' : '') + '</div>' + linkHtml + '</div>'; }).join("") + '</div><div style="margin-bottom:20px;"><h3 style="color:var(--accent);font-size:0.85rem;letter-spacing:0.03em;margin-bottom:10px;">🎯 资源争取与尝试行动</h3>' + allResources.filter(function(r) { return r.type === "action"; }).map(function(r, i) { var idx = "act-" + i; return '<div class="resource-card" id="' + idx + '" onclick="toggleResource(\'' + idx + '\', \'' + escapeHtml(r.name).replace(/'/g, "\\'") + '\', \'action\')"><span class="resource-icon">🎯</span><div class="resource-info"><div class="resource-name">' + escapeHtml(r.name) + '</div></div></div>'; }).join("") + '</div><button class="btn btn-primary" onclick="generateMilestones()">生成我的里程碑 →</button><button class="btn btn-ghost" onclick="navigate(\'profile\')" style="margin-left:8px;">返回档案</button></div>';
}

function toggleResource(id, name, type) {
  var el = document.getElementById(id); if (!el) return;
  el.classList.toggle("selected");
  var arr = type === "action" ? actionSelections.actions : actionSelections.resources;
  var idx = arr.indexOf(name);
  if (idx >= 0) arr.splice(idx, 1); else arr.push(name);
}

// Step 2: Generate milestones
function generateMilestones() {
  var card = document.getElementById("action-card"), p = loadProfile();
  var milestones = [];
  actionSelections.resources.forEach(function(r, i) { milestones.push({ title: "学习：" + r, desc: "阅读或观看并做笔记，完成后点亮", done: false, icon: "📖" }); });
  actionSelections.actions.forEach(function(a, i) { milestones.push({ title: "行动：" + a, desc: "完成这项尝试后回来打卡", done: false, icon: "🎯" }); });
  if (p.idealType) { var pw = IDEAL_PATHWAYS[p.idealType]; if (pw) { var stage = pw.stages[p.stage || 0]; milestones.push({ title: "突破：" + stage.name + " → " + (pw.stages[(p.stage||0)+1] ? pw.stages[(p.stage||0)+1].name : "圆满"), desc: stage.milestone, done: false, icon: "⚡", isBreakthrough: true }); } }
  if (milestones.length === 0) { milestones.push({ title: "写下你的第一步", desc: "花15分钟写下你接下来一周想做的一件事", done: false, icon: "✍️" }); }
  var plan = { milestones: milestones, createdAt: new Date().toISOString() };
  saveActionPlan(plan);
  renderActionDashboard(card, p, plan);
}

// Step 3: Dashboard with check-in
function renderActionDashboard(card, p, plan) {
  var achievements = loadAchievements();
  var doneCount = plan.milestones.filter(function(m) { return m.done; }).length;
  var total = plan.milestones.length;
  var pct = total > 0 ? Math.round(doneCount / total * 100) : 0;

  var allDone = doneCount === total && total > 0;
  var breakthroughHtml = '';
  if (allDone && p.idealType) {
    var pw = IDEAL_PATHWAYS[p.idealType];
    if (pw && (p.stage || 0) < pw.stages.length - 1) {
      var nextStage = pw.stages[(p.stage || 0) + 1];
      breakthroughHtml = '<div style="background:linear-gradient(135deg,var(--accent-bg),var(--card));border:2px solid var(--accent-border);border-radius:var(--radius);padding:18px;margin-top:16px;text-align:center;"><span style="font-size:1.6rem;display:block;margin-bottom:4px;">⚡</span><p style="font-weight:700;color:var(--accent);margin-bottom:4px;">突破境界：' + (pw.stages[p.stage||0].name + ' → ' + nextStage.name) + '</p><p style="font-size:0.82rem;color:var(--fg2);margin-bottom:10px;">' + nextStage.desc + '</p><button class="btn btn-primary btn-sm" onclick="breakthrough()">✨ 突破！</button></div>';
    }
  }
  card.innerHTML = '<div class="fade-in"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><h2 style="margin:0;">行理想</h2><button class="btn btn-sm btn-outline" onclick="clearActionPlan()">重新规划</button></div>' + getCultivationHeader(p) + '<div style="background:var(--green-bg);border:1px solid var(--green-border);border-radius:var(--radius-sm);padding:16px;margin-bottom:20px;text-align:center;"><span style="font-size:2rem;font-weight:800;color:var(--green);">' + pct + '%</span><p style="font-size:0.85rem;color:var(--fg2);margin-top:4px;">' + doneCount + ' / ' + total + ' 个里程碑已完成</p><div style="background:var(--border);border-radius:4px;height:6px;margin-top:8px;overflow:hidden;"><div style="background:var(--green);height:100%;width:' + pct + '%;transition:width 0.3s;"></div></div></div><h3 style="margin-bottom:12px;">你的修炼里程碑</h3>' + plan.milestones.map(function(m, i) { var linkHtml = ''; if (m.title.indexOf('学习：') === 0) { var bookName = m.title.replace('学习：', ''); linkHtml = ' <a class="book-link" href="#" onclick="openBookSearch(\'' + escapeHtml(bookName).replace(/'/g, "\\'") + '\');return false;" style="font-size:0.7rem;">🔍 找书</a>'; } var isB = m.isBreakthrough ? ' style="border-color:var(--accent-border);background:var(--accent-bg);"' : ''; return '<div class="milestone-item"' + isB + '><div class="milestone-check ' + (m.done ? 'checked' : '') + '" onclick="checkMilestone(' + i + ')">' + (m.done ? '✓' : '') + '</div><div class="milestone-body"><div class="milestone-title ' + (m.done ? 'milestone-done-title' : '') + '"><span style="margin-right:6px;">' + escapeHtml(m.icon) + '</span>' + escapeHtml(m.title) + linkHtml + '</div><div class="milestone-desc">' + escapeHtml(m.desc) + '</div></div></div>'; }).join("") + breakthroughHtml + '<hr><h3>成就记录</h3><div class="achievement-grid" style="margin-bottom:16px;">' + achievements.map(function(a) { return '<div class="achievement-badge earned"><span class="badge-icon">' + escapeHtml(a.icon) + '</span><span class="badge-name">' + escapeHtml(a.name) + '</span><span class="badge-date">' + escapeHtml(a.date) + '</span></div>'; }).join("") + (achievements.length === 0 ? '<p style="color:var(--muted);font-size:0.85rem;">完成里程碑来点亮你的第一个成就……</p>' : '') + '</div><div class="share-bar"><button class="btn btn-outline btn-sm" onclick="shareAchievements()">📤 分享成就</button><button class="btn btn-outline btn-sm" onclick="shareMilestones()">📋 复制里程碑</button></div></div>';
}

function checkMilestone(idx) {
  var plan = loadActionPlan(); if (!plan) return;
  plan.milestones[idx].done = !plan.milestones[idx].done;
  if (plan.milestones[idx].done) {
    var achs = loadAchievements();
    var m = plan.milestones[idx];
    achs.push({ name: m.title, icon: m.icon, date: new Date().toLocaleDateString("zh-CN") });
    saveAchievements(achs);
  } else {
    var achs = loadAchievements();
    var m = plan.milestones[idx];
    var found = -1;
    for (var i = achs.length - 1; i >= 0; i--) { if (achs[i].name === m.title) { found = i; break; } }
    if (found >= 0) achs.splice(found, 1);
    saveAchievements(achs);
  }
  saveActionPlan(plan);
  var card = document.getElementById("action-card"), p = loadProfile();
  renderActionDashboard(card, p, plan);
}

function breakthrough() {
  var p = loadProfile(); if (!p || !p.idealType) return;
  var pw = IDEAL_PATHWAYS[p.idealType]; if (!pw) return;
  var newStage = (p.stage || 0) + 1;
  if (newStage >= pw.stages.length) return;
  var oldStageName = pw.stages[newStage-1].name;
  p.stage = newStage;
  saveProfile(p);
  localStorage.removeItem("ic_actionplan");
  var nextStage = pw.stages[newStage];
  var sr = STAGE_RESOURCES[p.idealType] ? STAGE_RESOURCES[p.idealType][newStage] : null;
  var tip = nextStage.desc.slice(0, 50) + '…';
  var toast = document.createElement("div"); toast.className = "copied-toast";
  toast.innerHTML = '🎉 <strong>' + oldStageName + ' → ' + nextStage.name + '</strong>（' + nextStage.icon + '）<br><span style="font-size:0.75rem;">' + tip + '</span>';
  toast.style.whiteSpace = "normal"; toast.style.maxWidth = "400px"; toast.style.lineHeight = "1.5";
  document.body.appendChild(toast); setTimeout(function() { toast.remove(); }, 6000);
  navigate("action");
}
function clearActionPlan() { localStorage.removeItem("ic_actionplan"); var card = document.getElementById("action-card"), p = loadProfile(); renderActionStep1(card, p); }

// Share
function shareAchievements() {
  var achs = loadAchievements(), p = loadProfile();
  var text = "✨ 我的理想罗盘成就 ✨\n\n" + (p ? "我的理想：" + (p.statement ? p.statement.slice(0, 100) : "还在探索中") + "\n\n" : "") + "已点亮成就：\n";
  if (achs.length === 0) text += "（还在努力中……）\n"; else achs.forEach(function(a) { text += a.icon + " " + a.name + " — " + a.date + "\n"; });
  text += "\n—— 来自「理想罗盘」";
  copyText(text);
}
function shareMilestones() {
  var plan = loadActionPlan(), p = loadProfile();
  if (!plan) return;
  var done = plan.milestones.filter(function(m) { return m.done; }).length, total = plan.milestones.length;
  var text = "🗺️ 我的理想行动路线\n\n进度：" + done + "/" + total + " (" + Math.round(done / total * 100) + "%)\n\n";
  plan.milestones.forEach(function(m) { text += (m.done ? "✅ " : "⬜ ") + m.title + "\n"; });
  text += "\n—— 来自「理想罗盘」";
  copyText(text);
}
function copyText(text) {
  navigator.clipboard.writeText(text).then(function() {
    var toast = document.createElement("div"); toast.className = "copied-toast"; toast.textContent = "已复制到剪贴板，可以分享给朋友了！";
    document.body.appendChild(toast); setTimeout(function() { toast.remove(); }, 2500);
  }).catch(function() { alert("分享内容：\n\n" + text); });
}

// ============================================================
// EXPORT / IMPORT
// ============================================================

function saveNicknameFromInput() {
  var val = document.getElementById("nickname-input").value.trim();
  saveNickname(val);
  var toast = document.createElement("div"); toast.className = "copied-toast"; toast.textContent = "昵称已保存";
  document.body.appendChild(toast); setTimeout(function() { toast.remove(); }, 1800);
}

function exportData() {
  var p = loadProfile(), achs = loadAchievements(), plan = loadActionPlan(), nickname = loadNickname();
  if (!p) { alert("还没有理想档案，请先完成探索。"); return; }
  var data = {
    name: nickname || "一位探索者",
    date: new Date().toISOString().slice(0, 10),
    answer: p.answer,
    statement: p.statement,
    values: p.values,
    actions: p.actions,
    achievements: achs.map(function(a) { return { name: a.name, icon: a.icon, date: a.date }; }),
    milestones: plan ? plan.milestones.filter(function(m) { return m.done; }).map(function(m) { return m.title; }) : [],
    exportedAt: new Date().toISOString()
  };
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a"); a.href = url; a.download = "理想档案_" + (data.name || "export") + ".json";
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  var toast = document.createElement("div"); toast.className = "copied-toast"; toast.textContent = "档案已下载！把这个文件发给朋友吧";
  document.body.appendChild(toast); setTimeout(function() { toast.remove(); }, 2500);
}

function importData(event) {
  var file = event.target.files[0]; if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
      if (!data.statement && !data.name) { alert("文件格式不正确，无法导入。"); return; }
      var exists = loadCommunity().find(function(en) { return en.id === "import_" + data.name; });
      if (exists) { alert("「" + data.name + "」的档案已经导入过了。"); return; }
      saveCommunityEntry({
        id: "import_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
        name: data.name || "一位朋友",
        date: data.date || "",
        statement: data.answer || data.statement || "",
        values: data.values || [],
        progress: (data.achievements && data.achievements.length > 0)
          ? "已点亮 " + data.achievements.length + " 个成就：" + data.achievements.map(function(a) { return a.name; }).join("、")
          : (data.actions || "")
      });
      renderCommunity();
      var toast = document.createElement("div"); toast.className = "copied-toast"; toast.textContent = "「" + (data.name || "朋友") + "」的档案已加入广场！";
      document.body.appendChild(toast); setTimeout(function() { toast.remove(); }, 2500);
    } catch (err) { alert("文件解析失败，请确认是「理想罗盘」导出的 JSON 文件。"); }
  };
  reader.readAsText(file);
  event.target.value = "";
}

// ============================================================
// SHARE CARD
// ============================================================

function generateShareCard() {
  var p = loadProfile(); if (!p) { alert("请先创建理想档案。"); return; }
  var nick = loadNickname() || "一位探索者";
  var answer = p.answer || p.statement || "还在寻找中……";
  var c = document.createElement("canvas"); c.width = 600; c.height = 800;
  var ctx = c.getContext("2d");
  // Warm cream background
  var bg = ctx.createLinearGradient(0, 0, 0, 800); bg.addColorStop(0, "#fffbeb"); bg.addColorStop(0.5, "#fdfaf5"); bg.addColorStop(1, "#fefce8");
  ctx.fillStyle = bg; ctx.fillRect(0, 0, 600, 800);
  // Subtle top decoration - thin gold line + thicker accent
  ctx.fillStyle = "#fde68a"; ctx.fillRect(0, 0, 600, 2);
  ctx.fillStyle = "#d97706"; ctx.fillRect(0, 2, 600, 4);
  // Decorative circles (subtle background pattern)
  for (var di = 0; di < 3; di++) {
    ctx.beginPath(); ctx.arc(100 + di * 200, 120, 60 + di * 30, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(217,119,6,0.03)"; ctx.fill();
  }
  // Compass icon - larger, centered
  ctx.strokeStyle = "#d97706"; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(300, 60, 24, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = "#d97706"; ctx.beginPath(); ctx.moveTo(300, 38); ctx.lineTo(307, 56); ctx.lineTo(300, 52); ctx.lineTo(293, 56); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.arc(300, 60, 4.5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "rgba(217,119,6,0.3)"; ctx.beginPath(); ctx.moveTo(300, 82); ctx.lineTo(293, 64); ctx.lineTo(300, 68); ctx.lineTo(307, 64); ctx.closePath(); ctx.fill();
  // Brand name
  ctx.fillStyle = "#d97706"; ctx.font = "bold 18px 'PingFang SC','Microsoft YaHei',sans-serif"; ctx.textAlign = "center"; ctx.fillText("理想罗盘", 300, 112);
  // Main question - larger and more prominent
  ctx.fillStyle = "#292524"; ctx.font = "bold 22px 'PingFang SC','Microsoft YaHei',sans-serif"; ctx.fillText("你想成为什么样的人？", 300, 158);
  // Divider with dot
  ctx.fillStyle = "#fde68a"; ctx.fillRect(240, 172, 120, 2);
  ctx.fillStyle = "#d97706"; ctx.beginPath(); ctx.arc(300, 173, 4, 0, Math.PI * 2); ctx.fill();
  // "xxx 的回答"
  ctx.fillStyle = "#a8a29e"; ctx.font = "14px 'PingFang SC','Microsoft YaHei',sans-serif"; ctx.fillText(nick + " 的回答", 300, 200);
  // Answer text - card style
  var answerLines = wrapText(ctx, answer, 420);
  var y = 240;
  ctx.fillStyle = "#292524"; ctx.font = "bold 17px 'PingFang SC','Microsoft YaHei',sans-serif";
  for (var i = 0; i < answerLines.length && i < 8; i++) {
    ctx.textAlign = "center"; ctx.fillText(answerLines[i], 300, y); y += 32;
  }
  ctx.textAlign = "start";
  // Values
  y += 30;
  if (p.values && p.values.length > 0) {
    ctx.fillStyle = "#d97706"; ctx.font = "bold 13px 'PingFang SC','Microsoft YaHei',sans-serif"; ctx.fillText("✦ 核心价值", 70, y); y += 28;
    var vx = 70;
    for (var j = 0; j < p.values.length; j++) {
      var tw = ctx.measureText(p.values[j]).width + 24;
      if (vx + tw > 530) { vx = 70; y += 32; }
      ctx.fillStyle = "#fef3c7"; ctx.strokeStyle = "#d97706"; ctx.lineWidth = 1;
      roundRect(ctx, vx, y - 16, tw, 26, 13); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#92400e"; ctx.font = "12px 'PingFang SC','Microsoft YaHei',sans-serif"; ctx.fillText(p.values[j], vx + 12, y);
      vx += tw + 10;
    }
  }
  // Footer
  y = 700;
  ctx.fillStyle = "#e7e5e4"; ctx.fillRect(60, y, 480, 1.5);
  y += 30;
  ctx.fillStyle = "#a8a29e"; ctx.font = "12px 'PingFang SC','Microsoft YaHei',sans-serif"; ctx.textAlign = "center";
  ctx.fillText("不是「你能做什么工作」，而是「你想成为谁」", 300, y);
  y += 20;
  ctx.fillText("来理想罗盘，写下你自己的答案  ·  qingming-123.github.io/ideal-compass", 300, y);
  ctx.textAlign = "start";
  // Download
  c.toBlob(function(blob) { var url = URL.createObjectURL(blob); var a = document.createElement("a"); a.href = url; a.download = "我的理想_" + nick + ".png"; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url); });
  var toast = document.createElement("div"); toast.className = "copied-toast"; toast.textContent = "分享卡片已下载！可以发朋友圈啦";
  document.body.appendChild(toast); setTimeout(function() { toast.remove(); }, 2500);
}
function wrapText(ctx, text, maxWidth) {
  var words = text.split(""); var lines = []; var current = "";
  for (var i = 0; i < words.length; i++) { var test = current + words[i]; if (ctx.measureText(test).width > maxWidth && current.length > 0) { lines.push(current); current = words[i]; } else { current = test; } }
  if (current.length > 0) lines.push(current);
  return lines;
}
function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r); ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h); ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r); ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath(); }


function exportAllData() {
  var data = { profile: loadProfile(), achievements: loadAchievements(), actionPlan: loadActionPlan(), history: loadProfileHistory(), exportedAt: new Date().toISOString() };
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a"); a.href = url; a.download = "理想罗盘_备份_" + new Date().toISOString().slice(0,10) + ".json";
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  var toast = document.createElement("div"); toast.className = "copied-toast"; toast.textContent = "全部数据已备份！";
  document.body.appendChild(toast); setTimeout(function() { toast.remove(); }, 2500);
}
function importAllData(event) {
  var file = event.target.files[0]; if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var data = JSON.parse(e.target.result);
      if (!data.profile) { alert("备份文件格式不正确。"); return; }
      if (!confirm("将恢复档案、成就、行动计划和历史记录。当前数据将被覆盖，确定吗？")) return;
      if (data.profile) saveProfile(data.profile);
      if (data.achievements) saveAchievements(data.achievements);
      if (data.actionPlan) saveActionPlan(data.actionPlan);
      if (data.history) localStorage.setItem("ic_profile_history", JSON.stringify(data.history));
      var toast = document.createElement("div"); toast.className = "copied-toast"; toast.textContent = "数据恢复成功！";
      document.body.appendChild(toast); setTimeout(function() { toast.remove(); }, 2500);
    } catch(err) { alert("文件解析失败。"); }
  };
  reader.readAsText(file);
  event.target.value = "";

function triggerRestore() { document.getElementById("restore-file").click(); }
}

// ============================================================
// UTILS
// ============================================================

function escapeHtml(str) { if (!str) return ""; var div = document.createElement("div"); div.textContent = str; return div.innerHTML; }

// ============================================================
// INIT
// ============================================================

idealProfile = loadProfile();
applyTheme(loadTheme());
renderHomeTab();

// Check for saved deep exploration progress
(function() {
  try {
    var saved = localStorage.getItem("ic_deep_progress");
    if (saved) {
      var data = JSON.parse(saved);
      if (data.deepAnswers && data.deepAnswers.length > 0) {
        var cont = confirm("你上次的深度探索还没完成（已完成 " + data.deepAnswers.length + " 轮）。要继续吗？");
        if (cont) { deepNode = data.deepNode; deepAnswers = data.deepAnswers; navigate("explore"); renderDeepStep(); return; }
        localStorage.removeItem("ic_deep_progress");
      }
    }
  } catch(e) {}
})();

// Welcome overlay - show once
(function() {
  try {
    if (localStorage.getItem("ic_welcomed")) { var el = document.getElementById("welcome-overlay"); if (el) el.style.display = "none"; return; }
  } catch(e) {}
  var overlay = document.getElementById("welcome-overlay");
  if (!overlay) return;
  function dismissWelcome() {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    setTimeout(function() { overlay.style.display = "none"; }, 600);
    try { localStorage.setItem("ic_welcomed", "1"); } catch(e) {}
  }
  overlay.onclick = dismissWelcome;
  setTimeout(dismissWelcome, 3500);
})()