const mask = document.querySelector("#mask");
const modal = document.querySelector("#modal");
const close = document.querySelector(".close");
const openButtons = document.querySelectorAll(".open");
const workTitle = document.querySelector("#workTitle");
const workItem = document.querySelector("#workItem");
const workSkill = document.querySelector("#workSkill");
const workTerm = document.querySelector("#workTerm");
const workPoint = document.querySelector("#workPoint");
const workUrl = document.querySelector("#workUrl");
const workImage = document.querySelector("#workImage");
const thumbnails = document.querySelectorAll(".work-thumb");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const imagePreviewMask = document.querySelector("#imagePreviewMask");
const imagePreviewModal = document.querySelector("#imagePreviewModal");
const previewImage = document.querySelector("#previewImage");
const termArea = document.querySelector("#termArea");
const urlArea = document.querySelector("#urlArea");
const itemLabel = document.querySelector("#itemLabel");





const works = [
    {
        workImage:`images/portfolio.png`,
        workTitle: `うみぼうずはどこだ？ポートフォリオサイト`,
        workItem: `隠れているチワワが何匹いるかを探し出すポートフォリオサイト`,
        workSkill: `HTML/CSS/JavaScript/Illustrator/Photoshop/figma`,
        workTerm: `3週間`,
        workPoint: `スクラップブック風のデザインになっています。ケージから出してほしくて震えさせたり等、愛犬らしさを意識して作りました。工夫した点は、GSAPで手書き風の文字をIllustratorで描いたり、ただのポートフォリオにならないように、楽しめる仕掛けを考えたところです。骨、肉球、うみぼうずはどこだ？は手描きで、フィルムは手作りです。看板も自作で、フリー素材をクリッピングマスクしています。`,
        workUrl:`https://hikarusangming7-cmd.github.io/umibozu_portfolio/`
    },
    {
        workImage:`images/stmaker.png`,
        workTitle: `物語メーカー`,
        workItem: `ランダムで物語、キャラクター、告白の台詞、保留にしていた告白を断る台詞を生成してくれるアプリ`,
        workSkill: `HTML/CSS/JavaScript`,
        workTerm: `2週間`,
        workPoint: `localStorageで保存、削除ができるようになっています。また、保存したデータを後から編集できる機能を実装しました。編集内容はブラウザに再保存され、ページを再読み込みしても保持されます。また、編集後は画面表示も即時更新されるようにしました。`,
        workUrl:`https://hikarusangming7-cmd.github.io/Story__Maker/`
    },
    {
        workImage:`images/saveanimal.png`,
        workTitle: `Save Animals`,
        workItem: `犬猫保護団体サイト`,
        workSkill: `WordPress`,
        workTerm: `1週間`,
        workPoint: `訓練校の授業でブロックテーマで作りました。サイトを訪れるユーザーが迷わないように、わかりやすさを意識しました。`,
        workUrl:`https://shy-iki-9326.main.jp/wordpress/`

    },
    {
        workImage:`images/kaidan.png`,
        workTitle: `運命怪談`,
        workItem: `マルチエンディングホラーゲーム`,
        workSkill: `HTML/CSS/JavaScript`,
        workTerm: `製作中`,
        workPoint: `シナリオはシーンデータとして配列で管理し、各シーンに一意のIDを付与しています。選択肢には遷移先の nextSceneId を持たせ、ユーザーの選択に応じて対応するシーンを表示するようにしました。`,
        workUrl:`https://hikarusangming7-cmd.github.io/unmeikaidan/assets/`


    },
    {
        workImage:`images/pokeapi.png`,
        workTitle: `API図鑑`,
        workItem: `APIでデータを取得して保存できるサイト`,
        workSkill: `HTML/CSS/JavaScript`,
        workTerm: `製作中`,
        workPoint: `API取得とlocalStorageの練習をするために作ったサイトです。`,
        workUrl:`https://hikarusangming7-cmd.github.io/api_practice/Pokemon/`

    },
        {
        isBanner: true,
        workImage:`images/banner.png`,
        workTitle: `ドッグランのバナー`,
        workItem: `愛犬家,週末にペットとお出かけしたい20〜40代の男女`,
        workSkill: `Canva`,
        workPoint: `屋外の開放感と楽しそうな雰囲気を伝えるため、夏らしい鮮やかなイエローとヤシの木のグリーンを基調に、南国風の爽やかな世界観を目指しました。
        最初は全部白い文字でフチをつけて見やすくしていましたが、あまり楽しそうに見えなかったため、メインの「DOG RUN」をパッと目を引く鮮やかなカラフルグラデーションに変更し、
        続く「OPEN」をシンプルな白文字にすることで、賑やかで楽しそうな印象を与えつつ、文字が背景に埋もれずくっきりと前に飛び出してくるように工夫しました。`,

    },
        {
        isBanner: true,
        workImage:`images/creamsoda.png`,
        workTitle: `夏の新作ジュースの広告バナー(300 × 250px)`,
        workItem: `期間限定のスイーツやトレンドに敏感な若層、学生`,
        workSkill: `Canva,photoshop`,
        workPoint: `夏らしさと爽やかさを演出するため、青空の背景にフレアを組み合わせ、アクセントに黄色を取り入れました。最も目立たせたい「果汁100%」を1番に、次に「クリームソーダ」へ視線が流れるよう動線を設計しています。また、文字の視認性を高めるため、ドロップシャドウで立体感を出したり、下部にカラーの背景帯を敷くなどの工夫を施しました。`,

    },
            {
        isBanner: true,
        workImage:`images/sinsakuchoko.png`,
        workTitle: `新作チョコレートの広告バナー(300 × 250px)`,
        workItem: `30代〜50代の、普段がんばっているご褒美が必要な女性`,
        workSkill: `Canva,photoshop`,
        workPoint: `板チョコレートをパキッと割ったときの様子を表現しています。「Noir（黒）」を象徴するトリュフを、右側にシズル感のあるチョコレートソースを配置し、「静」と「動」の対比で目を引く構成にしています。主張したいのは左側のトリュフなので、左を範囲広めにしています。`,

    },
            {
        isBanner: true,
        workImage:`images/nailmonitor.png`,
        workTitle: `ネイルサロンのモニター募集のバナー(640 × 200px)`,
        workItem: `「ネイルはしたいけれど、毎月の出費を抑えたい」と思っている学生やフリーター、若手会社員。`,
        workSkill: `Canva,photoshop`,
        workPoint: `左側がごちゃつかないように文字それぞれが独立して見えるようにフォントやエフェクトを工夫しました。photoshopで手を明るくし、クリックしたくなるようにボタンのような角丸を入れ、CLICK!!と書き色を目立たせました。`,

    },
                {
        isBanner: true,
        workImage:`images/gymbannerbig.png`,
        workTitle: `セミパーソナルジムのバナー(1200 × 900px)`,
        workItem: `「24時間ジムに通ったけど、マシンの使い方が分からず幽霊会員になった」という挫折経験がある人。「マンツーマンのパーソナルは高すぎて続けられない」と悩む人。`,
        workSkill: `Canva,photoshop`,
        workPoint: `フリー素材の男性の顔が暗かったため、怖いインストラクターがいると思わせないためにphotoshopで顔を明るくしました。筋トレ感を出すために左側は黒のグラデーションを2枚重ね、パワーを感じるオレンジ色をアクセントにし、文字はジャンプ率を意識しました。`,

    },
                    {
        isBanner: true,
        workImage:`images/sale.png`,
        workTitle: `ECサイトのセールのバナー(320 × 250px)`,
        workItem: `セールを心待ちにしているユーザー。`,
        workSkill: `Canva,photoshop,Illustrator`,
        workPoint: `photoshopでフリー素材の女性を漫画風にして、illustratorで中央線と黄色のテープを作りました。普段は少し高価で手が届きにくい美容家電やヘアケア商品を扱うECサイトにおいて、「今日だけ驚きの価格で手に入る」という強烈なお得感と緊急性をユーザーに直感的に伝えることをコンセプトに設計しました。`,

    },
    //                 {
    //     isBanner: true,
    //     workImage:`images/magokoropet.png`,
    //     workTitle: `ペット保険のバナー(320 × 250px)`,
    //     workItem: `ペットを飼っている人、これからペットを飼おうか考えている人`,
    //     workSkill: `photoshop`,
    //     workPoint: `photoshopで平行四辺形を作り、その中に動物の写真を入れてクリッピングマスクして、左側だけ背景からはみ出た部分を白く塗っています。今すぐお見積もりをしないと！とユーザーがクリックしたくなるような文にしました。`,

    // },
];

let currentIndex = 0;

const showWork = (index) =>{
    currentIndex = index; //const index = Number(button.dataset.index);

    const work = works[currentIndex]; 

    workImage.src = work.workImage;
    workTitle.textContent = work.workTitle;
    workItem.textContent = work.workItem || "";
    workSkill.textContent = work.workSkill;
    workTerm.textContent = work.workTerm || "";
    workPoint.textContent = work.workPoint || "";

    if (work.workUrl) {
        workUrl.textContent = work.workUrl;
        workUrl.href = work.workUrl.replace("URL：", "");
    } else {
        workUrl.textContent = "";
        workUrl.href = "#";
    }
    //replaceは、URL:の文字とURLをわけるために書いている。文字列.replace("置き換えたい文字", "新しい文字")
    //const text = "こんにちは";
// console.log(text.replace("にち", ""));

// ↓

// こんは

// になる

    if(work.isBanner){
        itemLabel.textContent = "想定ターゲット：";
        workImage.classList.add("is-banner");
        termArea.style.display = "none";
        urlArea.style.display = "none";

        workTitle.style.cursor = "pointer";
        workTitle.style.textDecoration = "underline";

        workTitle.onclick = () => {
            previewImage.src = work.workImage; // 拡大用モーダルに画像セット
            imagePreviewMask.classList.remove("hidden");
            imagePreviewModal.classList.remove("hidden");
        };
    }else{
        itemLabel.textContent = "作ったもの："; 
        workImage.classList.remove("is-banner");
        termArea.style.display = "block";
        urlArea.style.display = "block";

        workTitle.style.cursor = "default";
        workTitle.style.textDecoration = "none";
        workTitle.onclick = null;
    }

}

const openModal = () => {
        modal.classList.remove("hidden");
        mask.classList.remove("hidden");
};

const closeModal = () => {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
};


openButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const index = Number(button.dataset.index);// HTMLで、data-indexと書くと、button.dataset.indexで取得できる。datasetで取得した値は文字列なので、Stringと表示されてしまう。配列の番号で取得したいので、数字に変換している。

        showWork(index);
        openModal();

    })

})//複数形だとそのままaddEventListener使えないので、forEachの中で使う。



// openButtons.addEventListener("click",()=>{
//     modal.classList.remove("hidden");
//     mask.classList.remove("hidden");
//     if(close.addEventListener("click",()=>{
//         modal.classList.add("hidden");
//         mask.classList.add("hidden");
//     }));
// });

close.addEventListener("click", () => {
    closeModal();
});

mask.addEventListener("click", () => {
    closeModal();
});

right.addEventListener("click",()=>{
    currentIndex++;
    if(currentIndex >= works.length){
        currentIndex = 0;
    }

    showWork(currentIndex);
})

left.addEventListener("click", () => {
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = works.length -1;
    }

    showWork(currentIndex);
})


imagePreviewMask.addEventListener("click", () => {
    imagePreviewMask.classList.add("hidden");
    imagePreviewModal.classList.add("hidden");
});







const captions = document.querySelectorAll(".caption");

captions.forEach((caption, index) => {
    caption.style.cursor = "pointer";

    caption.addEventListener("click", (e) => {
        const work = works[index];

        if (work.isBanner) {
            e.preventDefault(); 
            previewImage.src = work.workImage; 
            imagePreviewMask.classList.remove("hidden");
            imagePreviewModal.classList.remove("hidden");
        } else {
            showWork(index);
            openModal();
        }
    });
});

openButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        showWork(index);
        openModal();
    });
});