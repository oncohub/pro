var proctcae = [{
    id: 1,
    term: "口の中の乾き",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "口の中の乾きは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        forsearch: "かわき、くち",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Dry mouth",
    ctcaev5: "Dry mouth",
    meddra: 10013781
}, {
    id: 2,
    term: "食べ物が飲み込みにくい",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "食べ物が飲み込みにくいことは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Difficulty swallowing",
    ctcaev5: "Dysphagia",
    meddra: 10013950
}, {
    id: 3,
    term: "口の中や喉の痛み",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "口の中や喉の痛みは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "口の中や喉の痛みはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Mouth/throat sores",
    ctcaev5: "Mucositis oral",
    meddra: 10028130
}, {
    id: 4,
    term: "口の端のひび割れ",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "口の端のひび割れは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Cracking at the corners of the mouth (cheilosis/cheilitis)",
    ctcaev5: "Cheilitis",
    meddra: 10008417
}, {
    id: 5,
    term: "声の変化",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "声の変化がありましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Voice quality changes",
    ctcaev5: "Voice alteration",
    meddra: 10047681
}, {
    id: 6,
    term: "かすれ声",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "かすれ声は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Hoarseness",
    ctcaev5: "Hoarseness",
    meddra: 10020201
}, {
    id: 7,
    term: "食べ物や飲み物の味がわからない(または、味が変わった)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "食べ物や飲み物の味がわからない(または、味が変わった)ということは一 番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Taste changes",
    ctcaev5: "Dysgeusia",
    meddra: 10013911
}, {
    id: 8,
    term: "食欲不振",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "食欲不振は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日間に、",
        ask: "食欲不振はどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Decreased appetite",
    ctcaev5: "Anorexia",
    meddra: 10002646
},
{
    id: 9,
    term: "吐き気",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "吐き気はありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "吐き気は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Nausea",
    ctcaev5: "Nausea",
    meddra: 10028813
},
{
    id: 10,
    term: "嘔吐",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "嘔吐はありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "嘔吐は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Vomiting",
    ctcaev5: "Vomiting",
    meddra: 10047700
}, {
    id: 11,
    term: "胸焼け",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "胸焼けがしましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "胸焼けは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Heartburn",
    ctcaev5: "Dyspepsia",
    meddra: 10013946
}, {
    id: 12,
    term: "おなら(またはお腹にガスが溜まっている感じ)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "おならがでる(またはお腹にガスが溜まっている感じがする)回数が増えましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Gas",
    ctcaev5: "Flatulence",
    meddra: 10016766
}, {
    id: 13,
    term: "腹部膨満感(お腹がはった感じ)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "腹部膨満感(お腹がはった感じ)はありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "腹部膨満感(お腹がはった感じ)は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Bloating",
    ctcaev5: "Bloating",
    meddra: 10005265
}, {
    id: 14,
    term: "しゃっくり",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "しゃっくりがでましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "しゃっくりは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Hiccups",
    ctcaev5: "Hiccups",
    meddra: 10020039
}, {
    id: 15,
    term: "便秘",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "便秘は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Constipation",
    ctcaev5: "Constipation",
    meddra: 10010774
}, {
    id: 16,
    term: "下痢をすること(ゆるい便や水っぽい便)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "下痢をすること(ゆるい便や水っぽい便)がありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Diarrhea",
    ctcaev5: "Diarrhea",
    meddra: 10012727
}, {
    id: 17,
    term: "腹痛",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "腹痛はありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "腹痛は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 3,
        prefix: "この7日の間に、",
        ask: "腹痛はどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Abdominal pain",
    ctcaev5: "Abdominal pain",
    meddra: 10000081
}, {
    id: 18,
    header: "この7日の間のことを思い出してください。",
    term: "便失禁(便通をコントロールできず、もらしてしまう)",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "便失禁(便通をコントロールできず、もらしてしまう)がありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "便失禁(便通をコントロールできず、もらしてしまう)はどの程度ふだんの 生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Fecal incontinence",
    ctcaev5: "Fecal incontinence",
    meddra: 10016296
}, {
    id: 19,
    term: "息切れ",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "息切れは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "息切れはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Shortness of breath",
    ctcaev5: "Dyspnea",
    meddra: 10013963
}, {
    id: 20,
    term: "咳(せき)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "咳(せき)は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "咳(せき)はどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Cough",
    ctcaev5: "Cough",
    meddra: 10011224
}, {
    id: 21,
    header: "この7日の間のことを思い出してください。",
    term: "喘鳴(息をすると胸で笛が鳴るような音がする)",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "喘鳴(息をすると胸で笛が鳴るような音がする)は一番ひどい時でどの程度 でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Wheezing",
    ctcaev5: "Wheezing",
    meddra: 10047924
}, {
    id: 22,
    term: "腕や脚のむくみ",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "腕や脚がむくみましたか?",
        ans: ["むくみはなかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "腕や脚のむくみは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 3,
        prefix: "この7日の間に、",
        ask: "腕や脚のむくみはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Swelling",
    ctcaev5: "Edema limbs",
    meddra: 10050068
}, {
    id: 23,
    term: "心臓がどきどきしたり、鼓動が速くなること(動悸)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "心臓がどきどきしたり、鼓動が速くなること(動悸)がありましたか?",
        ans: ["しなかった", "ほとんどしなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "心臓がどきどきしたり、鼓動が速くなること(動悸)は、一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Heart palpitations",
    ctcaev5: "Palpitations",
    meddra: 10033557
}, {
    id: 24,
    term: "発疹",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "肌に発疹ができましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Rash",
    ctcaev5: "Rash maculo-papular",
    meddra: 10037868
}, {
    id: 25,
    term: "肌の乾燥",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "肌の乾燥は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Skin dryness",
    ctcaev5: "Dry skin",
    meddra: 10013786
}, {
    id: 26,
    term: "顔や胸にできたニキビや吹き出物",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "顔や胸にできたニキビや吹き出物は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Acne",
    ctcaev5: "Rash acneiform",
    meddra: 10037847
}, {
    id: 27,
    term: "毛髪が抜ける",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "普段より毛髪が抜けましたか?",
        ans: ["いいえ", "少し", "ある程度", "かなり", "ものすごく"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Hair loss",
    ctcaev5: "Alopecia",
    meddra: 10001760
}, {
    id: 28,
    term: "皮膚の痒み",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "皮膚の痒みは一番ひどかった時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Itching",
    ctcaev5: "Pruritus",
    meddra: 10037087
}, {
    id: 29,
    term: "じんましん",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "じんましん(皮膚が赤く盛り上がって痒い)がでましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Hives",
    ctcaev5: "Urticaria",
    meddra: 10046735
}, {
    id: 30,
    term: "手足症候群(手足にできる皮疹で、ひび割れ、皮がむける、赤くなる、痛みなどの症状)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "手足症候群(手足にできる皮疹で、ひび割れ、皮がむける、赤くなる、痛み などの症状)は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Hand-foot syndrome",
    ctcaev5: "Palmar-plantar erythrodysesthesia syndrome",
    meddra: 10054524
}, {
    id: 31,
    term: "手足の爪が剥がれる",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "手足の爪が剥がれましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Nail loss",
    ctcaev5: "Nail loss",
    meddra: 10049281
}, {
    id: 32,
    term: "手足の爪の線状、またはデコボコの隆起",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "手足の爪に縦か横に、線状、またはデコボコの隆起ができましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Nail ridging",
    ctcaev5: "Nail ridging",
    meddra: 10062283
}, {
    id: 33,
    term: "爪変色",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "手足の爪に変色がみられましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Nail discoloration",
    ctcaev5: "Nail discoloration",
    meddra: 10028691
}, {
    id: 34,
    term: "皮膚の日光過敏",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "皮膚が日光に過敏になることがありましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Sensitivity to sunlight",
    ctcaev5: "Photosensitivity",
    meddra: 10034966
}, {
    id: 35,
    term: "とこずれ",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "とこずれはありましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Bed/pressure sores",
    ctcaev5: "Skin ulceration",
    meddra: 10040947
}, {
    id: 36,
    term: "放射線治療による日焼けややけど",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "放射線治療による日焼けや、やけどのような症状は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度", "私には当てはまらない質問です"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Radiation skin reaction",
    ctcaev5: "Dermatitis radiation",
    meddra: 10061103
}, {
    id: 37,
    term: "皮膚の異常な黒ずみ",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "皮膚が異常に黒ずみましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Skin darkening",
    ctcaev5: "Skin hyperpigmentation",
    meddra: 10040865
}, {
    id: 38,
    term: "妊娠線のような線",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "肌がひきつれたところに妊娠線のような線がでましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Stretch marks",
    ctcaev5: "Skin and subcutaneous tissue disorders – Other, specifiy: (Striae)",
    meddra: 10040785
}, {
    id: 39,
    term: "手足の痺れやピリピリ感",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "手や足の痺れやピリピリ感は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "手や足の痺れやピリピリ感はどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Numbness & tingling",
    ctcaev5: "Peripheral sensory neuropathy",
    meddra: 10034620
}, {
    id: 40,
    term: "めまい",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "めまいは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "めまいはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Dizziness",
    ctcaev5: "Dizziness",
    meddra: 10013573
}, {
    id: 41,
    term: "かすみ目",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "目のかすみは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "目のかすみはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Blurred vision",
    ctcaev5: "Blurred vision",
    meddra: 10005886
}, {
    id: 42,
    term: "閃光(稲妻のような光)が走る",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "目の前に急に閃光(稲妻のような光)が走ることはありましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        red: [0]
    }],
    prov1: "Flashing lights",
    ctcaev5: "Flashing lights",
    meddra: 10016757
}, {
    id: 43,
    term: "目の前に飛ぶ点や線(飛蚊症)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "目の前に点や線がひらひらと飛んでいる(飛蚊症)のが見えましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Visual floaters",
    ctcaev5: "Floaters",
    meddra: 10016778
}, {
    id: 44,
    term: "涙目(涙が出る)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "涙目(涙がでる)は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "涙目(涙がでる)はどの程度普段の生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Watery eyes",
    ctcaev5: "Watering eyes",
    meddra: 10047848
}, {
    id: 45,
    term: "耳鳴り",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "耳鳴りは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Ringing in ears",
    ctcaev5: "Tinnitus",
    meddra: 10043882
}, {
    id: 46,
    term: "集中力の低下",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "集中力の低下は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "集中力の低下はどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Concentration",
    ctcaev5: "Concentration impairment",
    meddra: 10010250
}, {
    id: 47,
    term: "物忘れ",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "物忘れは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "物忘れはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Memory",
    ctcaev5: "Memory impairment",
    meddra: 10027175
}, {
    id: 48,
    term: "痛み",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "体のどこかに痛みはありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "痛みは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 3,
        prefix: "この7日の間に、",
        ask: "痛みはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "General Pain",
    ctcaev5: "Pain",
    meddra: 10033371
}, {
    id: 49,
    term: "頭痛",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "頭痛はありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "頭痛は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 3,
        prefix: "この7日の間に、",
        ask: "頭痛はどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Headache",
    ctcaev5: "Headache",
    meddra: 10019211
}, {
    id: 50,
    term: "筋肉の痛み",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "筋肉の痛みはありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "筋肉の痛みは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 3,
        prefix: "この7日の間に、",
        ask: "筋肉の痛みはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Muscle pain",
    ctcaev5: "Myalgia",
    meddra: 10028411
}, {
    id: 51,
    term: "関節の痛み(肘、膝、肩などの関節)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "関節(肘、膝、肩などの関節)の痛みはありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "関節(肘、膝、肩などの関節)の痛みは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 3,
        prefix: "この7日の間に、",
        ask: "関節(肘、膝、肩などの関節)の痛みはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Joint pain",
    ctcaev5: "Arthralgia",
    meddra: 10003239
}, {
    id: 52,
    term: "不眠(寝付きが悪い、途中で目が覚める、早く起きてしまう)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "不眠(寝付きが悪い、途中で目が覚める、早く起きてしまう)は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "不眠(寝付きが悪い、途中で目が覚める、早く起きてしまう)はどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Insomnia",
    ctcaev5: "Insomnia",
    meddra: 10022437
}, {
    id: 53,
    term: "疲れ、だるさ、活力低下",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "疲れ、だるさ、活力低下は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "疲れ、だるさ、活力低下はどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Fatigue",
    ctcaev5: "Fatigue",
    meddra: 10016256
}, {
    id: 54,
    term: "不安感",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "不安を感じましたか?",
        ans: ["感じなかった", "ほとんど感じなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "不安が最も強かったときで、どの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 3,
        prefix: "この7日の間に、",
        ask: "不安を感じることはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Anxious",
    ctcaev5: "Anxiety",
    meddra: 10002855
}, {
    id: 55,
    term: "何をしても気分が晴れない",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "何をしても気分が晴れないと感じることはありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "何をしても気分が晴れないと感じることは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 3,
        prefix: "この7日の間に、",
        ask: "何をしても気分が晴れないと感じることはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Discouraged",
    ctcaev5: "Depression",
    meddra: 10012378
}, {
    id: 56,
    term: "悲しい、不幸だと感じる",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "悲しい、不幸だと感じたことはありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "一番強く悲しい、不幸だと感じたとき、それはどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 3,
        prefix: "この7日の間に、",
        ask: "悲しい、不幸だという気持ちはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Sad",
    ctcaev5: "Depression",
    meddra: 10012378
}, {
    id: 57,
    term: "生理不順",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "生理不順がありましたか?",
        ans: ["あった", "なかった", "私には当てはまらない質問です"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Irregular periods/vaginal bleeding",
    ctcaev5: "Irregular menstruation",
    meddra: 10022992
}, {
    id: 58,
    term: "予定された生理がこない",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "予定された生理がこなかったですか?",
        ans: ["はい", "いいえ", "私には当てはまらない質問です"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Missed expected menstrual period",
    ctcaev5: "Irregular menstruation",
    meddra: 10022992
}, {
    id: 59,
    term: "普段と異なるおりもの",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "膣から普段と異なるおりものがありましたか?",
        ans: ["いいえ", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Vaginal dischargeVaginal discharge",
    ctcaev5: "Vaginal discharge",
    meddra: 10046901
}, {
    id: 60,
    term: "膣の乾燥",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "膣の乾燥は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Vaginal dryness",
    ctcaev5: "Vaginal dryness",
    meddra: 10046904
}, {
    id: 61,
    term: "排尿時の痛みや焼けるような感じ",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "排尿時の痛みや焼けるような感じは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Painful urination",
    ctcaev5: "Urinary tract pain",
    meddra: 10062225
}, {
    id: 62,
    term: "切迫した尿意",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "突然切迫した尿意を感じたことはありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "突然の切迫した尿意はどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Urinary urgency",
    ctcaev5: "Urinary urgency",
    meddra: 10046593
}, {
    id: 63,
    term: "尿が近い",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "尿が近いことはありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "尿が近いことはどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Urinary frequency",
    ctcaev5: "Urinary frequency",
    meddra: 10046539
}, {
    id: 64,
    term: "尿の色が普段と違う",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "尿の色が普段と違うことがありましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Change in usual urine color",
    ctcaev5: "Urine discoloration",
    meddra: 10046628
}, {
    id: 65,
    term: "尿失禁(または尿漏れ)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "尿失禁(または尿漏れ)したことがありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間に、",
        ask: "尿失禁(または尿漏れ)はどの程度ふだんの生活の妨げになりましたか?",
        ans: ["全然ならなかった", "少し", "ある程度", "かなり", "ものすごく"],
        title: "生活の妨げ: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Urinary incontinence",
    ctcaev5: "Urinary incontinence",
    meddra: 10046543
}, {
    id: 66,
    term: "勃起しにくい、またはすぐ萎える",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "勃起しにくい、またはすぐ萎えるということは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度", "性行為はしていない", "回答辞退"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Achieve and maintain erection",
    ctcaev5: "Erectile dysfunction",
    meddra: 10061461
}, {
    id: 67,
    term: "射精に関する問題",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "射精に関する問題がありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも", "性行為はしていない", "回答辞退"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Ejaculation",
    ctcaev5: "Ejaculation disorder",
    meddra: 10014326
}, {
    id: 68,
    term: "性欲減退",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "性欲減退は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度", "性行為はしていない", "回答辞退"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Decreased libido",
    ctcaev5: "Libido decreased",
    meddra: 10024419
}, {
    id: 69,
    term: "オルガズムやクライマックスまでに時間がかかりすぎる",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "普段に比べてオルガズムやクライマックスまでに時間がかかりすぎると感じたことはありますか?",
        ans: ["はい", "いいえ", "性行為はしていない", "回答辞退"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Delayed orgasm",
    ctcaev5: "Delayed orgasm",
    meddra: 10057066
}, {
    id: 70,
    term: "普段に比べてオルガズムやクライマックスが無い",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "セックスをしてもオルガズムやクライマックスが無いことがありましたか?",
        ans: ["はい", "いいえ", "性行為はしていない", "回答辞退"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Unable to have orgasm",
    ctcaev5: "Anorgasmia",
    meddra: 10002652
}, {
    id: 71,
    term: "性交時の痛み(膣内)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "性交時の痛み(膣内)は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度", "性行為はしていない", "回答辞退"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Pain w/sexual intercourse",
    ctcaev5: "Dyspareunia",
    meddra: 10013941
}, {
    id: 72,
    term: "乳房の張りや圧痛",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "乳房の張りや圧痛(触ったり押したりすると痛い)は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Breast swelling and tenderness",
    ctcaev5: "Gynecomastia (males), Breast pain (women)",
    meddra: 10018801 // 10006298
}, {
    id: 73,
    term: "内出血(黒や青のあざ)",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "よく内出血(黒や青のあざ)しましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        red: [0]
    }],
    prov1: "Bruising",
    ctcaev5: "Bruising",
    meddra: 10006504
}, {
    id: 74,
    term: "震えや寒け",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "震えや寒けを感じましたか?",
        ans: ["感じなかった", "ほとんど感じなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "震えや寒けは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Chills",
    ctcaev5: "Chills",
    meddra: 10008531
}, {
    id: 75,
    term: "昼間または夜間の予想外、または大量の汗",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間に、",
        ask: "昼間または夜、(体のほてりやのぼせとは関係なく)予想外に汗をかく、または、大量の汗をかくことがありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "昼間または夜にかいた、(体のほてりやのぼせとは関係なく)予想外の汗、または大量の汗は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Increased sweating",
    ctcaev5: "Hyperhidrosis",
    meddra: 10020642
}, {
    id: 76,
    term: "汗が予想外に少ない",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "汗が予想外に少ないということはありましたか?",
        ans: ["はい", "いいえ"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Decreased sweating",
    ctcaev5: "Hypohidrosis",
    meddra: 10021013
}, {
    id: 77,
    term: "ほてりやのぼせ",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "体のほてりやのぼせを感じたことはありましたか?",
        ans: ["なかった", "ほとんどなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "体のほてりやのぼせは一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Hot flashes",
    ctcaev5: "Hot flashes",
    meddra: 10020407
}, {
    id: 78,
    term: "鼻血",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "鼻血がでましたか?",
        ans: ["でなかった", "ほとんどでなかった", "ときどき", "頻繁に", "ほとんどいつも"],
        title: "頻度: ",
        yellow: [2],
        red: [3, 4]
    }, {
        q: 2,
        prefix: "この7日の間で、",
        ask: "鼻血は一番ひどい時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Nosebleed",
    ctcaev5: "Epistaxis",
    meddra: 10015090
}, {
    id: 79,
    term: "注射部が痛む、腫れる、赤くなる",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "注射または点滴をしたところに、痛み、腫れ、赤くなることがありましたか?",
        ans: ["はい", "いいえ", "私にはあてはまらない質問です"],
        title: "有無: ",
        yellow: [0]
    }],
    prov1: "Pain and swelling at injection site",
    ctcaev5: "Injection site reaction",
    meddra: 10022095
}, {
    id: 80,
    term: "体臭",
    header: "この7日の間のことを思い出してください。",
    items: [{
        q: 1,
        prefix: "この7日の間で、",
        ask: "あなたの体臭は一番強い時でどの程度でしたか?",
        ans: ["そういうことはなかった", "軽度", "中等度", "高度", "極めて高度"],
        title: "程度: ",
        yellow: [2],
        red: [3, 4]
    }],
    prov1: "Body odor",
    ctcaev5: "Body odor",
    meddra: 10005901
}
];

// 頻度, 程度, 生活の妨げ, total 
var proToCtcae = [[0, 0, 0, 0],
[1, 0, 0, 0],
[1, 0, 1, 1],
[1, 0, 2, 1],
[1, 0, 3, 2],
[1, 0, 4, 2],
[1, 1, 0, 1],
[1, 1, 1, 1],
[1, 1, 2, 1],
[1, 1, 3, 2],
[1, 1, 4, 2],
[1, 2, 0, 1],
[1, 2, 1, 2],
[1, 2, 2, 2],
[1, 2, 3, 2],
[1, 2, 4, 3],
[1, 3, 0, 2],
[1, 3, 1, 2],
[1, 3, 2, 2],
[1, 3, 3, 3],
[1, 3, 4, 3],
[1, 4, 0, 2],
[1, 4, 1, 2],
[1, 4, 2, 3],
[1, 4, 3, 3],
[1, 4, 4, 3],
[2, 0, 0, 0],
[2, 0, 1, 1],
[2, 0, 2, 1],
[2, 0, 3, 2],
[2, 0, 4, 2],
[2, 1, 0, 1],
[2, 1, 1, 1],
[2, 1, 2, 1],
[2, 1, 3, 2],
[2, 1, 4, 2],
[2, 2, 0, 2],
[2, 2, 1, 2],
[2, 2, 2, 2],
[2, 2, 3, 3],
[2, 2, 4, 3],
[2, 3, 0, 2],
[2, 3, 1, 2],
[2, 3, 2, 2],
[2, 3, 3, 3],
[2, 3, 4, 3],
[2, 4, 0, 2],
[2, 4, 1, 2],
[2, 4, 2, 3],
[2, 4, 3, 3],
[2, 4, 4, 3],
[3, 0, 0, 1],
[3, 0, 1, 1],
[3, 0, 2, 1],
[3, 0, 3, 2],
[3, 0, 4, 2],
[3, 1, 0, 1],
[3, 1, 1, 1],
[3, 1, 2, 1],
[3, 1, 3, 2],
[3, 1, 4, 2],
[3, 2, 0, 2],
[3, 2, 1, 2],
[3, 2, 2, 2],
[3, 2, 3, 3],
[3, 2, 4, 3],
[3, 3, 0, 2],
[3, 3, 1, 2],
[3, 3, 2, 3],
[3, 3, 3, 3],
[3, 3, 4, 3],
[3, 4, 0, 2],
[3, 4, 1, 2],
[3, 4, 2, 3],
[3, 4, 3, 3],
[3, 4, 4, 3],
[4, 0, 0, 1],
[4, 0, 1, 1],
[4, 0, 2, 1],
[4, 0, 3, 2],
[4, 0, 4, 2],
[4, 1, 0, 1],
[4, 1, 1, 1],
[4, 1, 2, 2],
[4, 1, 3, 2],
[4, 1, 4, 3],
[4, 2, 0, 2],
[4, 2, 1, 2],
[4, 2, 2, 2],
[4, 2, 3, 3],
[4, 2, 4, 3],
[4, 3, 0, 2],
[4, 3, 1, 2],
[4, 3, 2, 3],
[4, 3, 3, 3],
[4, 3, 4, 3],
[4, 4, 0, 2],
[4, 4, 1, 2],
[4, 4, 2, 3],
[4, 4, 3, 3],
[4, 4, 4, 3],
[0, 0, undefined, 0],
[1, 0, undefined, 1],
[1, 1, undefined, 1],
[1, 2, undefined, 1],
[1, 3, undefined, 2],
[1, 4, undefined, 2],
[2, 0, undefined, 1],
[2, 1, undefined, 1],
[2, 2, undefined, 2],
[2, 3, undefined, 2],
[2, 4, undefined, 2],
[3, 0, undefined, 1],
[3, 1, undefined, 1],
[3, 2, undefined, 2],
[3, 3, undefined, 3],
[3, 4, undefined, 3],
[4, 0, undefined, 1],
[4, 1, undefined, 1],
[4, 2, undefined, 2],
[4, 3, undefined, 3],
[4, 4, undefined, 3],
[undefined, 0, 0, 0],
[undefined, 1, 0, 1],
[undefined, 1, 1, 1],
[undefined, 1, 2, 1],
[undefined, 1, 3, 2],
[undefined, 1, 4, 2],
[undefined, 2, 0, 1],
[undefined, 2, 1, 1],
[undefined, 2, 2, 2],
[undefined, 2, 3, 2],
[undefined, 2, 4, 3],
[undefined, 3, 0, 1],
[undefined, 3, 1, 2],
[undefined, 3, 2, 2],
[undefined, 3, 3, 3],
[undefined, 3, 4, 3],
[undefined, 4, 0, 2],
[undefined, 4, 1, 2],
[undefined, 4, 2, 2],
[undefined, 4, 3, 3],
[undefined, 4, 4, 3],
[0, undefined, 0, 0],
[1, undefined, 0, 1],
[1, undefined, 1, 1],
[1, undefined, 2, 1],
[1, undefined, 3, 2],
[1, undefined, 4, 2],
[2, undefined, 0, 1],
[2, undefined, 1, 1],
[2, undefined, 2, 1],
[2, undefined, 3, 2],
[2, undefined, 4, 2],
[3, undefined, 0, 1],
[3, undefined, 1, 1],
[3, undefined, 2, 2],
[3, undefined, 3, 3],
[3, undefined, 4, 3],
[4, undefined, 0, 1],
[4, undefined, 1, 1],
[4, undefined, 2, 2],
[4, undefined, 3, 3],
[4, undefined, 4, 3],
[0, undefined, undefined, 0],
[1, undefined, undefined, 1],
[2, undefined, undefined, 1],
[3, undefined, undefined, 2],
[4, undefined, undefined, 3],
[undefined, 0, undefined, 0],
[undefined, 1, undefined, 1],
[undefined, 2, undefined, 2],
[undefined, 3, undefined, 3],
[undefined, 4, undefined, 3],
[undefined, undefined, 0, 0],
[undefined, undefined, 1, 1],
[undefined, undefined, 2, 1],
[undefined, undefined, 3, 2],
[undefined, undefined, 4, 2]];