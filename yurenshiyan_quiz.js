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
                explanationPy: "cuò wù zhè shì xiàn dài hàn yǔ de cháng yòng yì dàn zài gǔ dài hàn yǔ zhōng shuǎng cháng zhǐ chā cuò bài huài kǒu shuǎng tè zhǐ wèi jué má mù bài huài"
            },
            {
                text: "口味败坏、味觉变得麻木麻痹",
                py: "kǒu wèi bài huài wèi jué biàn dé má mù má bì",
                en: "Taste buds ruined, losing the sense of taste.",
                correct: true,
                explanation: "正确！傻子空口吃下大量的盐，咸得舌头僵硬，导致整个味觉功能彻底败坏、麻木了。",
                explanationPy: "zhèng què shǎ zǐ kōng kǒu chī xià dà liàng de yán xián dé shé tóu jiāng yìng dǎo zhì zhěng gè wèi jué gōng néng chè dǐ bài huài má mù le"
            },
            {
                text: "清脆、响亮的声音",
                py: "qīng cuì xiǎng liàng de shēng yīn",
                en: "Crisp or loud sound.",
                correct: false,
                explanation: "错误。修饰“口”部的状态，不可能指声音。",
                explanationPy: "cuò wù xiū shì kǒu bù de zhuàng tài bù kě néng zhǐ shēng yīn"
            },
            {
                text: "豪爽、讲信用",
                py: "háo shuǎng jiǎng xìn yòng",
                en: "Generous or trustworthy.",
                correct: false,
                explanation: "错误。这是修饰人性格特征的名词义，在此处讲不通。",
                explanationPy: "cuò wù zhè shì xiū shì rén xìng gé tè zhēng de míng cí yì zài cǐ chù jiǎng bù tōng"
            }
        ]
    },
    {
        id: 2,
        text: "下列句子中，加点词“所以”的解释正确的是？",
        py: "xià liè jù zǐ zhōng jiā diǎn cí suǒ yǐ de jiè shì zhèng què de shì",
        en: "Which of the following explains 'suǒ yǐ' in 'suǒ yǐ měi zhě' correctly?",
        options: [
            {
                text: "表因果关系的关联词（因为……所以）",
                py: "biǎo yīn guǒ guān xì de guān lián cí yīn wèi suǒ yǐ", 
                en: "A causal conjunction meaning 'therefore'.",
                correct: false,
                explanation: "错误。在古汉语中，“所以……者”是一个固定搭配短语，用来表示“……的原因”。",
                explanationPy: "cuò wù zài gǔ dài hàn yǔ zhōng suǒ yǐ zhě shì yī gè gù dìng dā pèi duǎn yǔ yòng lái biǎo shì de yuán yīn"
            },
            {
                text: "……的原因、……的缘故",
                py: "de yuán yīn de yuán gù", 
                en: "The reason why / the cause of.",
                correct: true,
                explanation: "正确！“所以美者”指的就是“饭菜之所以美味的原因”。",
                explanationPy: "zhèng què suǒ yǐ měi zhě zhǐ de jiù shì fàn cài zhī suǒ yǐ měi wèi de yuán yīn"
            },
            {
                text: "用来……的工具或办法",
                py: "yòng lái de gōng jù huò bàn fǎ",
                en: "The tool or method by which...",
                correct: false,
                explanation: "错误。虽然“所以”能表示工具方法，但结合后文的“缘有盐故”，此处特指原因。",
                explanationPy: "cuò wù suī rán suǒ yǐ néng biǎo shì gōng jù fāng fǎ dàn jiè hé hòu wén de yuán yǒu yán gù cǐ chù tè zhǐ yuán yīn"
            },
            {
                text: "原来、真正的样子",
                py: "yuán lái zhēn zhèng de yàng zǐ",
                en: "Originally or the true form.",
                correct: false,
                explanation: "错误。古汉语中没有这种词汇语法功能。",
                explanationPy: "cuò wù gǔ dài hàn yǔ zhōng méi yǒu zhè zhǒng cí huì yǔ fǎ gōng néng"
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
                explanationPy: "cuò wù zhǔ rén bìng méi yǒu huàn cài ér shì zài yuán lái de jī chǔ shàng jìn xíng le tiáo wèi shàng de jiā gōng"
            },
            {
                text: "特地在原来的饭菜里重新添加了食盐",
                py: "tè dì zài yuán lái de fàn cài lǐ chóng xīn tiān jiā le shí yán",
                en: "Specially added more salt into the original food.",
                correct: true,
                explanation: "正确！文中写道“更为益盐”，益就是增加、添加，也就是帮他加了些盐。",
                explanationPy: "zhèng què wén zhāng zhōng xiě dào gèng wèi yì yán yì jiù shì zēng jiā tiān jiā yě jiù shì bāng tā jiā le xiē yán"
            },
            {
                text: "给饭菜里加了许多辣椒和香料",
                py: "gěi fàn cài lǐ jiā le xǔ duō là jiāo hé xiāng liào",
                en: "Added a lot of chili and spices to the dishes.",
                correct: false,
                explanation: "错误。故事里唯一的关键调味品是盐，不要自己凭空编造其他香料。",
                explanationPy: "cuò wù gù shì lǐ wéi yī de guān jiàn tiáo wèi pǐn shì yán bú yào zì jǐ píng kōng biān zào qí tā xiāng liào"
            },
            {
                text: "劝说愚人不要挑食，忍耐着吃下去",
                py: "quàn shuō yú rén bú yào tiāo shí rěn nài zhe chī xià qù",
                en: "Advised the fool not to be picky and just endure it.",
                correct: false,
                explanation: "错误。主人非常客气，听了抱怨后立刻通过行动加盐调整了饭菜味道。",
                explanationPy: "cuò wù zhǔ rén fēi cháng kè qì tīng le bào yuàn hòu lì kè tōng guò xíng dòng jiā yán tiáo zhěng le fàn cài wèi dào"
            }
        ]
    }
];
