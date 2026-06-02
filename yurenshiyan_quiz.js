const quizQuestions = [
    {
        id: 1,
        text: "文中“食已口爽”的“爽”字，在这里的正确含义是？",
        py: "wén zhāng zhōng shí yǐ kǒu shuǎng de shuǎng zì zài zhè lǐ de zhèng què hán yì shì",
        en: "What does the character 'shuǎng' mean in the phrase 'shí yǐ kǒu shuǎng'?",
        options: [
            {
                text: "感到舒服、很痛快",
                py: "gǎn dào shū fú hěn tòng kuài",
                en: "Feeling comfortable or refreshed.",
                correct: false,
                explanation: "错误。这是现代汉语的常用义，但在古汉语中，“爽”常指差错、败坏，“口爽”特指味觉麻木、口味败坏。",
                explanationPy: "cuò wù zhè shì xiàn dài hàn yǔ de cháng yòng yì dàn zài gǔ dài hàn yǔ zhōng shuǎng cháng zhǐ chā cuò bài huài kǒu shuǎng tè zhǐ wèi jué má mù bài huài",
                explanationEn: "Incorrect. This is a modern usage. In classical Chinese, 'shuang' often means defect or ruin, so 'kou shuang' means taste impairment."
            },
            {
                text: "口味败坏、味觉变得麻木麻痹",
                py: "kǒu wèi bài huài wèi jué biàn dé má mù má bì",
                en: "Taste buds ruined, losing the sense of taste.",
                correct: true,
                explanation: "正确！傻子空口吃下大量的盐，咸得舌头僵硬，导致整个味觉功能彻底败坏、麻木了。",
                explanationPy: "zhèng què shǎ zǐ kōng kǒu chī xià dà liàng de yán xián dé shé tóu jiāng yìng dǎo zhì zhěng gè wèi jué gōng néng chè dǐ bài huài má mù le",
                explanationEn: "Correct! The fool swallowed tons of salt directly, paralyzing his tongue and completely ruining his sense of taste."
            },
            {
                text: "清脆、响亮的声音",
                py: "qīng cuì xiǎng liàng de shēng yīn",
                en: "Crisp or loud sound.",
                correct: false,
                explanation: "错误。修饰“口”部的状态，不可能指声音。",
                explanationPy: "cuò wù xiū shì kǒu bù de zhuàng tài bù kě néng zhǐ shēng yīn",
                explanationEn: "Incorrect. It describes the state of the mouth and palate, which has nothing to do with auditory crispness."
            },
            {
                text: "豪爽、讲信用",
                py: "háo shuǎng jiǎng xìn yòng",
                en: "Generous or trustworthy.",
                correct: false,
                explanation: "错误。这是修饰人性格特征的名词义，在此处讲不通。",
                explanationPy: "cuò wù zhè shì xiū shì rén xìng gé tè zhēng de míng cí yì zài cǐ chù jiǎng bù tōng",
                explanationEn: "Incorrect. This adjective modifies human personality traits, which is completely irrelevant to eating food."
            }
        ]
    },
    {
        id: 2,
        text: "下列句子中，加点词“所以”的解释正确的是？",
        py: "xià liè jù zǐ zhōng jiā diǎn cí suǒ yǐ de jiě shì zhèng què de shì",
        en: "Which of the following explains 'suǒ yǐ' in 'suǒ yǐ měi zhě' correctly?",
        options: [
            {
                text: "表因果关系的关联词（因此、因而）",
                py: "biǎo yīn guǒ guān xì de guān lián cí yīn cǐ yīn ér",
                en: "A causal conjunction meaning 'therefore'.",
                correct: false,
                explanation: "错误。在古汉语中，“所以……者”是一个固定搭配短语，用来表示“……的原因”。",
                explanationPy: "cuò wù zài gǔ dài hàn yǔ zhōng suǒ yǐ zhě shì yī gè gù dìng dā pèi duǎn yǔ yòng lái biǎo显示 de yuán yīn",
                explanationEn: "Incorrect. In classical Chinese syntax, 'suoyi... zhe' is a fixed structure meaning 'the reason why'."
            },
            {
                text: "……的原因、……的缘故",
                py: "de yuán yīn de yuán gù",
                en: "The reason why / the cause of.",
                correct: true,
                explanation: "正确！“所以美者”指的就是“饭菜之所以美味的原因”。",
                explanationPy: "zhèng què suǒ yǐ měi zhě zhǐ de jiù shì fàn cài zhī suǒ yǐ měi wèi de yuán yīn",
                explanationEn: "Correct! It functions alongside 'zhe' to denote 'the underlying reason why the food tasted delicious'."
            },
            {
                text: "用来……的工具或办法",
                py: "yòng lái de gōng jù huò bàn fǎ",
                en: "The tool or method by which...",
                correct: false,
                explanation: "错误。虽然“所以”能表示工具方法，但结合后文的“缘有盐故”，此处特指原因。",
                explanationPy: "cuò wù suī rán suǒ yǐ néng biǎo shì gōng jù fāng fǎ dàn jié hé hòu wén de yuán yǒu yán gù cǐ chù tè zhǐ yuán yīn",
                explanationEn: "Incorrect. While 'suoyi' can mean the means to do something, the subsequent text 'yuan... gu' locks its meaning into a cause."
            },
            {
                text: "原来、真正的样子",
                py: "yuán lái zhēn zhèng de yàng zǐ",
                en: "Originally or the true form.",
                correct: false,
                explanation: "错误。古汉语中没有这种词汇语法功能。",
                explanationPy: "cuò wù gǔ dài hàn yǔ zhōng méi yǒu zhè zhǒng cí huì yǔ fǎ gōng néng",
                explanationEn: "Incorrect. Classical Chinese lexicons do not contain any such semantic definitions for this word."
            }
        ]
    },
    {
        id: 3,
        text: "根据文章内容，主人是如何让嫌淡无味的饭菜变好吃的？",
        py: "gēn jù wén zhāng nèi róng zhǔ rén shì rú hé ràng xián dàn wú wèi de fàn cài biàn hǎo chī de",
        en: "According to the text, how did the host make the bland food taste better?",
        options: [
            {
                text: "重新换了一桌丰盛的饭菜",
                py: "chóng xīn huàn le yī zhuō fēng shèng de fàn cài",
                en: "Replaced the meal with a whole new lavish feast.",
                correct: false,
                explanation: "错误。主人并没有换菜，而是在原来的基础上进行了调味上的加工。",
                explanationPy: "cuò wù zhǔ rén bìng méi yǒu huàn cài ér shì zài yuán lái de jī chǔ shàng jìn xíng le tiáo wèi shàng de jiā gōng",
                explanationEn: "Incorrect. The host did not swap the dishes but simply adjusted the seasoning on the existing food."
            },
            {
                text: "特地在原来的饭菜里重新添加了食盐",
                py: "tè dì zài yuán lái de fàn cài lǐ chóng xīn tiān jiā le shí yán",
                en: "Specially added more salt into the original food.",
                correct: true,
                explanation: "正确！文中写道“更为益盐”，益就是增加、添加，也就是帮他加了些盐。",
                explanationPy: "zhèng què wén zhāng zhōng xiě dào gèng wèi yì yán yì jiù shì zēng jiā tiān jiā yě jiù shì bāng tā jiā le xiē yán",
                explanationEn: "Correct! The text states 'gèng wèi yì yán', meaning the host added additional salt specifically for him."
            },
            {
                text: "给饭菜里加了许多辣椒和香料",
                py: "gěi fàn cài lǐ jiā le xǔ duō là jiāo hé xiāng liào",
                en: "Added a lot of chili and spices to the dishes.",
                correct: false,
                explanation: "错误。故事里唯一的关键调味品是盐，不要自己凭空编造其他香料。",
                explanationPy: "cuò wù gù shì lǐ wéi yī de guān jiàn tiáo wèi pǐn shì yán bú yào zì jǐ píng kōng biān zào qí tā xiāng liào",
                explanationEn: "Incorrect. Salt is the sole technical modifier in this fable; do not invent secondary spices during exams."
            },
            {
                text: "劝说愚人不要挑食，忍耐着吃下去",
                py: "quàn shuō yú rén bú yào tiāo shí rěn nài zhe chī xià qù",
                en: "Advised the fool not to be picky and just endure it.",
                correct: false,
                explanation: "错误。主人非常客气，听了抱怨后立刻通过行动（加盐）调整了饭菜味道。",
                explanationPy: "cuò wù zhǔ rén fēi cháng kè qì tīng le bào yuàn hòu lì kè tōng guò xíng dòng jiā yán tiáo zhěng le fàn cài wèi dào",
                explanationEn: "Incorrect. The host was highly accommodating and immediately adjusted the flavor profile by adding salt."
            }
        ]
    },
    {
        id: 4,
        text: "愚人认为“少有尚尔，况复多也”，这句话反映了他什么心理？",
        py: "yú rén rèn wéi shǎo yǒu shàng ěr kuàng fù duō yě zhè jù huà fǎn yìng le tā shén me xīn lǐ",
        en: "The fool believed 'if a little is good, a lot must be better'. What mindset does this reflect?",
        options: [
            {
                text: "懂得举一反三，善于推导逻辑",
                py: "dǒng dé jǔ yī fǎn sān shàn yú tuī dǎo luó jí",
                en: "Capable of learning by analogy and good at logic.",
                correct: false,
                explanation: "错误。他的这种推导是极度荒谬、不切实际的，并不是真正的聪明和善于逻辑。",
                explanationPy: "cuò wù tā de zhè zhǒng tuī dǎo shì jí dù huāng miù bú qiè shí jì de bìng bú shì zhēn zhèng de cōng míng hé shàn yú luó jí",
                explanationEn: "Incorrect. His extrapolation violates common sense and physical reality, which is the antithesis of sound logic."
            },
            {
                text: "贪心急躁，缺乏凡事皆有分寸的智慧",
                py: "tān xīn jí zào quē fá fán shì jiē yǒu fēn cùn de zhì huì",
                en: "Greedy and impatient, lacking the wisdom of moderation.",
                correct: true,
                explanation: "正确！他尝到了微量盐的甜头后，贪图更大的美味，完全忽视了凡事都要适度的道理。",
                explanationPy: "zhèng què tā cháng dào le wēi liàng yán de tián tóu hòu tān tú gèng dà de měi wèi wán quán hū shì le fán shì dōu yào shì dù de dào lǐ",
                explanationEn: "Correct! After experiencing the subtle benefits of salt, his greed led him to assume that bypassing the meal entirely would double his pleasure."
            },
            {
                text: "对主人的款待非常感激，想要多吃一点",
                py: "duì zhǔ rén de kuǎn dài fēi cháng gǎn jī xiǎng yào duō chī yī diǎn",
                en: "Very grateful for the hospitality and wishing to eat more.",
                correct: false,
                explanation: "错误。文中完全没有刻画他对主人的感激之情，他的出发点纯粹是自私的口腹之欲。",
                explanationPy: "cuò wù wén zhōng wán quán méi yǒu kè huà tā duì zhǔ rén de gǎn jī zhī qíng tā de chū fā diǎn chún cuì shì zì sī de kǒu fù zhī yù",
                explanationEn: "Incorrect. The narrative focuses purely on his flawed cognitive reasoning, not emotional warmth toward his host."
            },
            {
                text: "担心主人家的盐不够用，帮主人节省",
                py: "dān xīn zhǔ rén jiā de yán bú gòu yòng bāng zhǔ rén jié shěng",
                en: "Worried that the host's salt supply was low, trying to save it.",
                correct: false,
                explanation: "错误。他把盐全部空口吃光了（空食盐），这属于消耗浪费，完全不是节省。",
                explanationPy: "cuò wù tā bǎ yán quán bù kōng kǒu chī guāng le kōng shí yán zhè shǔ yú xiāo hào làng fèi wán quán bú shì jié shěng",
                explanationEn: "Incorrect. He single-handedly consumed the raw salt directly, which counts as structural waste rather than conservation."
            }
        ]
    },
    {
        id: 5,
        text: "下面哪一个成语或谚语最适合用来总结《愚人食盐》的寓意？",
        py: "xià miàn nǎ yī gè chéng yǔ huò yàn yǔ zuì shì hé yòng lái zǒng jié yú rén shí yán de yù yì",
        en: "Which idiom best summarizes the moral lesson of 'The Fool Eating Salt'?",
        options: [
            {
                text: "近朱者赤，近墨者黑",
                py: "jìn zhū zhě chì jìn mò zhě hēi",
                en: "Proximity to vermilion makes one red, closeness to ink makes one black.",
                correct: false,
                explanation: "错误。这是关于客观环境对人影响的道理（如孟母三迁），与吃盐的故事配不上。",
                explanationPy: "cuò wù zhè shì guān yú kè guān huán jìng duì rén yǐng xiǎng de dào lǐ rú mèng mǔ sān qiān yǔ chī yán de gù shì pèi bú shàng",
                explanationEn: "Incorrect. This idiom addresses societal and environmental impacts on character, which fails to match the food context here."
            },
            {
                text: "过犹不及，凡事过头了就跟不够一样",
                py: "guò yóu bù jí fán shì guò tóu le jiù gēn bú gòu yī yàng",
                en: "Going too far is as bad as not going far enough (Too much is as bad as too little).",
                correct: true,
                explanation: "正确！盐少了不好吃（淡无味），但如果直接过量吃盐就会伤胃（口爽为患），证明了凡事必须适度、过犹不及。",
                explanationPy: "zhèng què yán shǎo le bù hǎo chī dàn wú wèi dàn rú guǒ zhí jiē guò liàng chī yán jiù huì shāng wèi kǒu shuǎng wéi huàn zhèng míng le fán shì bì xū shì dù guò yóu bù jí",
                explanationEn: "Correct! Insufficient salt ruins a meal, but consuming it raw causes physiological distress. It perfectly reinforces the rule of moderation."
            },
            {
                text: "前人种树，后人乘凉",
                py: "qián rén zhòng shù hòu rén chéng liáng",
                en: "One generation plants the trees, the next enjoys the shade.",
                correct: false,
                explanation: "错误。这形容的是前人造福后代的奉献精神，与本寓言完全无关。",
                explanationPy: "cuò wù zhè xíng róng de shì qián rén zào fú hòu dài de fèng xiàn jīng shén yǔ běn yù yán wán quán wú guān",
                explanationEn: "Incorrect. This proverb extols historical selflessness for future lineages, holding zero baseline correlation to the text."
            },
            {
                text: "敏而好学，不耻下问",
                py: "mǐn ér hào xué bù chǐ xià wèn",
                en: "Intelligent and fond of learning, not ashamed to ask subordinates.",
                correct: false,
                explanation: "错误。这是教导人们要虚心向学，而愚人自始至终都在进行错误的闭门空想。",
                explanationPy: "cuò wù zhè shì jiào dǎo rén men yào xū xīn xiàng xué ér yú rén zì shǐ zhì zhōng dōu zài jìn xíng cuò wù de bì mén kōng xiǎng",
                explanationEn: "Incorrect. This praises proactive and humble intellectual inquiry, whereas the fool acted purely on stubborn, internal fallacies."
            }
        ]
    }
];
