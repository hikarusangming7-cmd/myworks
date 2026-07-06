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
        workSkill: `HTML/CSS/JavaScript`,
        workTerm: `3週間`,
        workPoint: `スクラップブック風のデザインになっています。ケージから出してほしくて震えさせたり等、愛犬らしさを意識して作りました。工夫した点は、GSAPで手書き風の文字をIllustratorで描いたり、ただのポートフォリオにならないように、楽しめる仕掛けを考えたところです。`,
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
        workImage:`images/banner.png`,
        workTitle: `ドッグランのバナー`,
        workItem: `愛犬家,週末にペットとお出かけしたい20〜40代の男女`,
        workSkill: `Canva`,
        workPoint: `屋外の開放感と楽しそうな雰囲気を伝えるため、夏らしい鮮やかなイエローとヤシの木のグリーンを基調に、南国風の爽やかな世界観を目指しました。
        最初は全部白い文字でフチをつけて見やすくしていましたが、あまり楽しそうに見えなかったため、メインの「DOG RUN」をパッと目を引く鮮やかなカラフルグラデーションに変更し、
        続く「OPEN」をシンプルな白文字にすることで、賑やかで楽しそうな印象を与えつつ、文字が背景に埋もれずくっきりと前に飛び出してくるように工夫しました。`,

    },
        {
        workImage:`images/creamsoda.png`,
        workTitle: `夏の新作ジュースの広告バナー(300 × 250px)`,
        workItem: `期間限定のスイーツやトレンドに敏感な若層、学生`,
        workSkill: `Canva`,
        workPoint: `夏らしさと爽やかさを演出するため、青空の背景にフレアを組み合わせ、アクセントに黄色を取り入れました。最も目立たせたい「果汁100%」を1番に、次に「クリームソーダ」へ視線が流れるよう動線を設計しています。また、文字の視認性を高めるため、ドロップシャドウで立体感を出したり、下部にカラーの背景帯を敷くなどの工夫を施しました。`,

    },
            {
        workImage:`images/chocolatnoir.png`,
        workTitle: `新作チョコレートの広告バナー(300 × 250px)`,
        workItem: `30代〜50代の、普段がんばっているご褒美が必要な女性`,
        workSkill: `Canva`,
        workPoint: `真ん中で少し斜めに分けることで、板チョコレートをパキッと割ったときの様子を表現しました。「Noir（黒）」を象徴するトリュフを、右側にシズル感のあるチョコレートソースを配置し、「静」と「動」の対比で目を引く構成にしています。背景に埋もれないよう白文字や下地の帯を敷くことで可読性を確保しつつ、細いラインやゴールドのキラキラといった繊細なあしらいで、上質な雰囲気を崩さずにまとめました。`,

    },
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

    if(work.workSkill === "Canva"){
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

        if (work.workSkill === "Canva") {
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