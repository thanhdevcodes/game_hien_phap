// (1) DỮ LIỆU TRÒ CHƠI: sửa câu hỏi, đáp án, gợi ý và ý chốt tại đây.
const GAME_DATA = {
  levels: [
    {
      name: "Làng quê 1945",
      theme: "DÂN CHỦ XHCN Ở VIỆT NAM",
      questions: [
        {
          prompt: "Dân chủ XHCN ở Việt Nam ra đời gắn với sự kiện nào?",
          options: ["Cách mạng Tháng Tám 1945 và sự ra đời của nước VNDCCH", "Hiệp định Giơnevơ 1954", "Đại hội VI năm 1986", "Hiến pháp năm 2013"],
          answerIndex: 0,
          hint: "Đây là cuộc cách mạng mở đầu kỷ nguyên độc lập, dân chủ.",
          explain: "Cách mạng Tháng Tám 1945 thành công, nước Việt Nam Dân chủ Cộng hòa ra đời, mở đầu nền dân chủ mới ở Việt Nam."
        },
        {
          prompt: "Phương châm thực hiện dân chủ ở cơ sở là gì?",
          options: ["Dân biết, dân bàn, dân làm, dân kiểm tra", "Dân biết, dân làm, dân hưởng, dân giám sát", "Dân bàn, dân quyết, dân làm, dân thụ hưởng", "Dân nghe, dân biết, dân làm, dân báo cáo"],
          answerIndex: 0,
          hint: "Có 4 vế, bắt đầu bằng ‘dân biết’ và kết thúc bằng ‘dân kiểm tra’.",
          explain: "Đây là phương châm thực hiện quy chế dân chủ ở cơ sở."
        },
        {
          prompt: "Mục tiêu ‘dân giàu, nước mạnh, ... , văn minh’ theo Cương lĩnh bổ sung, phát triển 2011 điền vào chỗ trống là gì?",
          options: ["dân chủ, công bằng", "tự do, bình đẳng", "độc lập, tự do", "thống nhất, hạnh phúc"],
          answerIndex: 0,
          hint: "Hai từ này gắn với chủ đề của chương.",
          explain: "Mục tiêu là ‘dân giàu, nước mạnh, dân chủ, công bằng, văn minh’."
        }
      ],
      boss: { type: "picture", title: "ĐOÁN Ý NGHĨA BỨC TRANH", duration: 120 },
      pictureQuestions: [
        { prompt: "Cách mạng Tháng Tám thành công vào năm nào?", options: ["1945", "1946", "1954", "1986"], answerIndex: 0, explain: "Cách mạng Tháng Tám thành công năm 1945." },
        { prompt: "Nước Việt Nam Dân chủ Cộng hòa ra đời ngày nào?", options: ["2/9/1945", "6/1/1946", "9/11/1946", "28/11/2013"], answerIndex: 0, explain: "Tuyên ngôn Độc lập được công bố ngày 2/9/1945." },
        { prompt: "Tổng tuyển cử đầu tiên bầu Quốc hội diễn ra ngày nào?", options: ["6/1/1946", "2/9/1945", "19/8/1945", "9/11/1946"], answerIndex: 0, explain: "Ngày 6/1/1946, nhân dân tham gia Tổng tuyển cử đầu tiên." },
        { prompt: "Ai là chủ thể của quyền lực nhà nước ở Việt Nam?", options: ["Nhân dân", "Một cá nhân", "Các cơ quan tư pháp", "Các tổ chức kinh tế"], answerIndex: 0, explain: "Nhà nước Việt Nam là của Nhân dân, do Nhân dân, vì Nhân dân." },
        { prompt: "Phương châm dân chủ ở cơ sở kết thúc bằng vế nào?", options: ["Dân kiểm tra", "Dân báo cáo", "Dân phân công", "Dân biểu quyết"], answerIndex: 0, explain: "Phương châm gồm: dân biết, dân bàn, dân làm, dân kiểm tra." },
        { prompt: "Nhà nước pháp quyền XHCN Việt Nam hoạt động trên cơ sở nào?", options: ["Hiến pháp và pháp luật", "Mệnh lệnh cá nhân", "Quy ước tự phát", "Chỉ thị nội bộ"], answerIndex: 0, explain: "Hiến pháp và pháp luật có tính tối thượng trong đời sống xã hội." },
        { prompt: "Quyền lực nhà nước được tổ chức theo nguyên tắc nào?", options: ["Thống nhất, có phân công, phối hợp, kiểm soát", "Tam quyền phân lập hoàn toàn", "Tập trung vào một cơ quan", "Các cơ quan hoạt động tách biệt"], answerIndex: 0, explain: "Quyền lực thống nhất, có phân công, phối hợp, kiểm soát." },
        { prompt: "Dân chủ cần đi đôi với điều gì?", options: ["Pháp chế, kỷ cương, kỷ luật", "Bỏ qua pháp luật", "Hạn chế quyền công dân", "Tách khỏi trách nhiệm"], answerIndex: 0, explain: "Thực hành dân chủ gắn với pháp chế, kỷ cương, kỷ luật." },
        { prompt: "Cơ chế vận hành được khái quát như thế nào?", options: ["Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ", "Nhà nước lãnh đạo, Đảng quản lý, Nhân dân làm chủ", "Nhân dân lãnh đạo, Đảng quản lý, Nhà nước làm chủ", "Đảng quản lý, Nhân dân lãnh đạo, Nhà nước làm chủ"], answerIndex: 0, explain: "Đây là cơ chế vận hành của hệ thống chính trị Việt Nam." }
      ],
      pictureMeaningAnswers: [
        "nhan dan thuc hien quyen lam chu",
        "nhan dan lam chu",
        "quyen lam chu cua nhan dan",
        "tong tuyen cu",
        "tong tuyen cu dau tien",
        "bau cu quoc hoi dau tien",
        "cu tri di bo phieu",
        "nhan dan bau quoc hoi"
      ],
      takeaways: [
        "Dân chủ XHCN ở Việt Nam ra đời từ Cách mạng Tháng Tám 1945.",
        "Tổng tuyển cử 6/1/1946 là lần đầu nhân dân thực hành quyền làm chủ.",
        "Cơ chế: Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ.",
        "Ở cơ sở: dân biết, dân bàn, dân làm, dân kiểm tra."
      ]
    },
    {
      name: "Phố phường 1946",
      theme: "NHÀ NƯỚC PHÁP QUYỀN XHCN",
      questions: [
        {
          prompt: "Nhà nước pháp quyền XHCN Việt Nam là nhà nước của ai?",
          options: ["Của Nhân dân, do Nhân dân, vì Nhân dân", "Của giai cấp công nhân, do giai cấp công nhân, vì giai cấp công nhân", "Của Đảng, do Đảng, vì Đảng", "Của cán bộ, do cán bộ, vì cán bộ"],
          answerIndex: 0,
          hint: "Chủ thể xuyên suốt là một.",
          explain: "Tất cả quyền lực nhà nước thuộc về Nhân dân."
        },
        {
          prompt: "Nền tảng của Nhà nước pháp quyền XHCN Việt Nam là liên minh giữa những lực lượng nào?",
          options: ["Công nhân – nông dân – đội ngũ trí thức", "Công nhân – tư sản – địa chủ", "Nông dân – thương nhân – quân đội", "Công nhân – quân đội – doanh nhân"],
          answerIndex: 0,
          hint: "Ba lực lượng trong khối liên minh quen thuộc.",
          explain: "Nhà nước dựa trên nền tảng liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức."
        },
        {
          prompt: "Quyền lực nhà nước ở Việt Nam được tổ chức như thế nào?",
          options: ["Thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan thực hiện quyền lập pháp, hành pháp, tư pháp", "Tam quyền phân lập hoàn toàn", "Tập trung toàn bộ vào một cá nhân", "Chia tách riêng rẽ, các cơ quan không phối hợp"],
          answerIndex: 0,
          hint: "Có từ ‘thống nhất’ và có cả ‘kiểm soát’.",
          explain: "Quyền lực nhà nước là thống nhất, có phân công, phối hợp, kiểm soát; không theo mô hình tam quyền phân lập."
        }
      ],
      boss: { type: "shadow", title: "TÌM LỖI SAI TRONG BÓNG TỐI", duration: 120 },
      shadowStatements: [
        { text: "Nhà nước tổ chức quyền lực theo nguyên tắc tam quyền phân lập.", wrong: true, explain: "Quyền lực nhà nước là thống nhất, có phân công, phối hợp, kiểm soát." },
        { text: "Cơ chế vận hành: Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ.", wrong: false, explain: "Đây là cơ chế vận hành của hệ thống chính trị Việt Nam." },
        { text: "Nhà nước tôn trọng và bảo đảm quyền con người, quyền công dân.", wrong: false, explain: "Tôn trọng và bảo đảm quyền con người, quyền công dân là nguyên tắc quan trọng." },
        { text: "Hiến pháp và pháp luật chỉ ràng buộc người dân, không ràng buộc cán bộ nhà nước.", wrong: true, explain: "Hiến pháp và pháp luật có tính tối thượng, ràng buộc mọi cơ quan, tổ chức, cá nhân." },
        { text: "Nhân dân có quyền giám sát hoạt động của Nhà nước.", wrong: false, explain: "Nhân dân thực hiện quyền làm chủ, trong đó có quyền giám sát hoạt động nhà nước." },
        { text: "Nhà nước thực hiện đường lối hòa bình, hữu nghị với các nước.", wrong: false, explain: "Đây là đường lối đối ngoại hòa bình, hữu nghị của Nhà nước Việt Nam." }
      ],
      takeaways: [
        "Nhà nước của Nhân dân, do Nhân dân, vì Nhân dân.",
        "Nền tảng: liên minh công nhân – nông dân – trí thức.",
        "Quyền lực thống nhất, có phân công, phối hợp, kiểm soát giữa lập pháp, hành pháp, tư pháp.",
        "Không theo mô hình tam quyền phân lập."
      ]
    },
    {
      name: "Lâu đài Hiến pháp",
      theme: "PHÁP QUYỀN VÀ QUYỀN CON NGƯỜI",
      questions: [
        {
          prompt: "Nhà nước pháp quyền XHCN Việt Nam bảo đảm tính tối thượng của điều gì trong đời sống xã hội?",
          options: ["Hiến pháp và pháp luật", "Nghị quyết của cấp ủy cơ sở", "Quy chế nội bộ của cơ quan", "Mệnh lệnh của người đứng đầu"],
          answerIndex: 0,
          hint: "Văn bản có hiệu lực cao nhất của quốc gia.",
          explain: "Nhà nước tổ chức và hoạt động trên cơ sở Hiến pháp và pháp luật."
        },
        {
          prompt: "Nhà nước thực hành dân chủ đi đôi với điều gì?",
          options: ["Tăng cường pháp chế, kỷ cương, kỷ luật", "Nới lỏng pháp luật để dân tự do hơn", "Hạn chế quyền của công dân", "Tách khỏi sự lãnh đạo của Đảng"],
          answerIndex: 0,
          hint: "Dân chủ không tách rời khuôn khổ pháp luật.",
          explain: "Dân chủ phải gắn với pháp chế, kỷ cương, kỷ luật."
        },
        {
          prompt: "Nhà nước pháp quyền XHCN Việt Nam do Đảng Cộng sản Việt Nam lãnh đạo, đồng thời bảo đảm điều gì?",
          options: ["Sự giám sát của Nhân dân và sự phản biện xã hội của Mặt trận Tổ quốc Việt Nam cùng các tổ chức thành viên", "Nhà nước tự giám sát nội bộ, không cần Nhân dân tham gia", "Đảng trực tiếp làm thay chức năng của Nhà nước", "Các cơ quan nhà nước hoạt động độc lập, không chịu kiểm soát nào"],
          answerIndex: 0,
          hint: "Có hai chủ thể bên ngoài bộ máy nhà nước tham gia giám sát.",
          explain: "Đảng lãnh đạo nhưng Nhà nước vẫn chịu sự giám sát của Nhân dân và sự phản biện xã hội."
        }
      ],
      boss: { type: "timeline", title: "SẮP XẾP SỰ KIỆN", duration: 120 },
      events: [
        { text: "Tuyên ngôn độc lập, nước VNDCCH ra đời", year: "2/9/1945" },
        { text: "Tổng tuyển cử đầu tiên bầu Quốc hội", year: "6/1/1946" },
        { text: "Quốc hội thông qua Hiến pháp đầu tiên", year: "9/11/1946" },
        { text: "Đại hội VI mở đầu công cuộc Đổi mới", year: "1986" },
        { text: "Cương lĩnh bổ sung, phát triển nêu mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh", year: "2011" },
        { text: "Quốc hội thông qua Hiến pháp hiện hành", year: "28/11/2013" }
      ],
      takeaways: [
        "Hiến pháp và pháp luật có tính tối thượng.",
        "Tôn trọng, bảo đảm quyền con người, quyền công dân.",
        "Dân chủ đi đôi với pháp chế, kỷ cương, kỷ luật.",
        "Đảng lãnh đạo, Nhân dân giám sát, Mặt trận Tổ quốc phản biện xã hội."
      ]
    }
  ],
  victoryThemes: [
    "Dân chủ XHCN ở Việt Nam",
    "Nhà nước pháp quyền XHCN ở Việt Nam",
    "Cơ chế Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ"
  ]
};

// (2) TRẠNG THÁI: mọi bộ đếm và khóa hiệu ứng đều được giữ tại một nơi.
const state = {
  mode: "intro",
  levelIndex: 0,
  stageIndex: 0,
  lives: 3,
  hints: 2,
  fiftyUses: 2,
  timerEnabled: true,
  soundEnabled: true,
  soundStarted: false,
  paused: false,
  locked: false,
  currentQuestion: null,
  hiddenOptions: [],
  timerRemaining: 0,
  timerInterval: null,
  transitionTimeout: null,
  generation: 0,
  bossData: null,
  shadowSelected: [],
  shadowLocked: [],
  timelineOrder: [],
  timelineSlots: [],
  timelineFixed: [],
  lightX: 0,
  lightY: 0
};

const dom = {};
const ANSWER_LETTERS = ["A", "B", "C", "D"];
const STAGE_LABELS = ["Câu 1", "Câu 2", "Câu 3", "Boss"];

function collectElements() {
  ["gameShell", "scene", "sceneFar", "sceneMid", "sceneNear", "sceneBanner", "sceneCaption", "runner", "gate", "flashlight", "routeMap", "levelName", "stageLabel", "lives", "timer", "timerValue", "pauseButton", "hostButton", "panelLevel", "panelKind", "questionKicker", "prompt", "optionsGrid", "questionTools", "feedback", "hintButton", "hintCount", "fiftyButton", "fiftyCount", "bossArea", "introScreen", "startButton", "resultScreen", "resultKicker", "resultTitle", "resultContent", "continueButton", "failureScreen", "failureMessage", "retryButton", "pauseScreen", "resumeButton", "hostDialog", "hostForm", "timerToggle", "soundToggle", "jumpSelect", "jumpButton", "resetButton", "soundStatus", "fullscreenButton"].forEach(function (id) {
    dom[id] = document.getElementById(id);
  });
}

function randomOrder(items) {
  const result = items.slice();
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function normalizeAnswer(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/đ/g, "d").replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
}

function clearClock() {
  if (state.timerInterval !== null) window.clearInterval(state.timerInterval);
  state.timerInterval = null;
}

function clearTransition() {
  if (state.transitionTimeout !== null) window.clearTimeout(state.transitionTimeout);
  state.transitionTimeout = null;
}

function cancelPendingWork() {
  state.generation += 1;
  clearClock();
  clearTransition();
  state.locked = false;
  state.paused = false;
  dom.pauseScreen.hidden = true;
}

function queueTransition(callback, delay) {
  clearTransition();
  const generation = state.generation;
  state.transitionTimeout = window.setTimeout(function () {
    state.transitionTimeout = null;
    if (generation === state.generation) callback();
  }, delay);
}

function renderRouteMap() {
  dom.routeMap.innerHTML = "";
  for (let index = 0; index < 12; index += 1) {
    const stop = document.createElement("span");
    stop.className = "route-stop" + ([3, 7, 11].includes(index) ? " boss" : "");
    stop.textContent = [3, 7, 11].includes(index) ? "★" : String(index + 1);
    stop.setAttribute("aria-label", "Chặng " + (index + 1));
    dom.routeMap.appendChild(stop);
  }
}

function drawRouteProgress() {
  const stops = dom.routeMap.querySelectorAll(".route-stop");
  stops.forEach(function (stop, index) {
    stop.classList.toggle("done", index < state.stageIndex || state.mode === "victory");
    stop.classList.toggle("current", index === state.stageIndex && !["intro", "summary", "victory"].includes(state.mode));
  });
}

function renderLives(lostNow) {
  dom.lives.innerHTML = "";
  for (let index = 0; index < 3; index += 1) {
    const star = document.createElement("span");
    star.className = "life-star" + (index >= state.lives ? " lost" : "");
    star.textContent = "★";
    star.setAttribute("aria-hidden", "true");
    if (lostNow && index === state.lives) star.classList.add("shake");
    dom.lives.appendChild(star);
  }
  dom.lives.setAttribute("aria-label", state.lives + " trên 3 ngôi sao còn lại");
}

function setMode(mode) {
  state.mode = mode;
  dom.introScreen.hidden = mode !== "intro";
  dom.resultScreen.hidden = mode !== "summary" && mode !== "victory";
  dom.failureScreen.hidden = mode !== "failed";
  dom.pauseScreen.hidden = mode !== "paused";
  dom.resultScreen.classList.toggle("victory-screen", mode === "victory");
  dom.gameShell.classList.toggle("shadow-mode", mode === "boss" && GAME_DATA.levels[state.levelIndex].boss.type === "shadow");
  drawRouteProgress();
}

// (3) VẼ GIAO DIỆN: các vùng HTML cố định được cập nhật theo trạng thái trò chơi.
function drawScene() {
  const level = GAME_DATA.levels[state.levelIndex];
  const completedInLevel = state.stageIndex % 4;
  dom.scene.classList.remove("scene-level-1", "scene-level-2", "scene-level-3", "level-1", "level-2", "level-3", "boss-dark", "dark-active", "jump", "hit", "scroll", "level-complete");
  dom.scene.classList.add("level-" + (state.levelIndex + 1));
  setTravelProgress(completedInLevel);
  dom.sceneBanner.textContent = level.name.toLocaleUpperCase("vi");
  dom.sceneCaption.textContent = ["PHIẾU NHỎ ĐANG LÊN ĐƯỜNG", "MỖI LÁ PHIẾU, MỘT QUYỀN LÀM CHỦ", "ĐƯỜNG ĐẾN CỔNG HIẾN PHÁP"][state.levelIndex];
  dom.gate.classList.toggle("gate-active", state.levelIndex === 2);
  dom.sceneFar.innerHTML = "";
  dom.sceneMid.innerHTML = "";
  dom.sceneNear.innerHTML = "";
  if (state.levelIndex === 0) drawVillageScene();
  if (state.levelIndex === 1) drawStreetScene();
  if (state.levelIndex === 2) drawConstitutionScene();
  dom.scene.classList.toggle("level-complete", state.stageIndex % 4 === 3 && state.levelIndex === 2);
}

function drawVillageScene() {
  dom.sceneFar.innerHTML = '<span class="far-hill hill-a"></span><span class="far-hill hill-b"></span><span class="distant-village-tree"><i></i></span><span class="cloud cloud-a"></span><span class="cloud cloud-b"></span>';
  dom.sceneMid.innerHTML = '<span class="field-band field-one"></span><span class="field-band field-two"></span><span class="communal-house"><i></i><b></b></span><span class="bamboo-grove grove-a"></span><span class="bamboo-grove grove-b"></span><span class="flag-pole"><i class="national-flag"><b>★</b></i></span><span class="bamboo-fence"></span>';
  dom.sceneNear.innerHTML = '<span class="rice-clump clump-a"></span><span class="rice-clump clump-b"></span><span class="rice-clump clump-c"></span><span class="path-stone stone-a"></span><span class="path-stone stone-b"></span>';
}

function drawStreetScene() {
  dom.sceneFar.innerHTML = '<span class="street-skyline"></span><span class="old-house house-a"><i></i><b></b><em></em></span><span class="old-house house-b"><i></i><b></b><em></em></span><span class="old-house house-c"><i></i><b></b><em></em></span>';
  dom.sceneMid.innerHTML = '<span class="election-banner">TỔNG TUYỂN CỬ</span><span class="street-lamp"><i></i></span><span class="market-awning"></span>';
  dom.sceneNear.innerHTML = '<span class="cobble cobble-a"></span><span class="cobble cobble-b"></span><span class="cobble cobble-c"></span>';
}

function drawConstitutionScene() {
  dom.sceneFar.innerHTML = '<span class="evening-glow"></span><span class="assembly-hall"><i class="hall-roof"></i><span class="hall-pediment">QUỐC HỘI</span><span class="hall-column column-one"></span><span class="hall-column column-two"></span><span class="hall-column column-three"></span><span class="hall-column column-four"></span><span class="hall-door"></span></span><span class="star-field star-a">★</span><span class="star-field star-b">★</span>';
  dom.sceneMid.innerHTML = '<span class="stone-stair stair-one"></span><span class="stone-stair stair-two"></span>';
  dom.sceneNear.innerHTML = '<span class="stone-block block-a"></span><span class="stone-block block-b"></span><span class="golden-star">★</span>';
}

function updateHud() {
  const level = GAME_DATA.levels[state.levelIndex];
  dom.levelName.textContent = state.mode === "intro" ? "SẴN SÀNG" : level.name.toLocaleUpperCase("vi");
  dom.stageLabel.textContent = state.mode === "intro" ? "12 CHẶNG" : "CHẶNG " + (state.stageIndex + 1) + " / 12";
  dom.timerValue.textContent = state.timerEnabled && state.mode !== "intro" ? String(state.timerRemaining) : "∞";
  dom.timer.classList.toggle("low", state.timerEnabled && state.timerRemaining <= 10 && state.timerRemaining > 0);
  dom.pauseButton.disabled = ["intro", "summary", "victory", "failed"].includes(state.mode);
  renderLives(false);
  dom.hintCount.textContent = String(state.hints);
  dom.fiftyCount.textContent = String(state.fiftyUses);
  dom.hintButton.disabled = state.hints <= 0 || state.mode !== "question" || state.locked;
  dom.fiftyButton.disabled = state.fiftyUses <= 0 || state.mode !== "question" || state.locked;
  dom.soundStatus.textContent = state.soundEnabled ? "ÂM THANH ĐANG BẬT" : "ÂM THANH ĐANG TẮT";
  dom.timerToggle.checked = state.timerEnabled;
  dom.soundToggle.checked = state.soundEnabled;
  drawRouteProgress();
}

function fillJumpMenu() {
  dom.jumpSelect.innerHTML = "";
  GAME_DATA.levels.forEach(function (level, levelIndex) {
    level.questions.forEach(function (question, questionIndex) {
      const option = document.createElement("option");
      option.value = String(levelIndex * 4 + questionIndex);
      option.textContent = "Màn " + (levelIndex + 1) + " · " + STAGE_LABELS[questionIndex] + " — " + question.prompt;
      dom.jumpSelect.appendChild(option);
    });
    const bossOption = document.createElement("option");
    bossOption.value = String(levelIndex * 4 + 3);
    bossOption.textContent = "Màn " + (levelIndex + 1) + " · Boss — " + level.boss.title;
    dom.jumpSelect.appendChild(bossOption);
  });
}

function renderQuestion() {
  cancelPendingWork();
  state.levelIndex = Math.floor(state.stageIndex / 4);
  state.currentQuestion = null;
  state.bossData = null;
  state.hiddenOptions = [];
  state.shadowSelected = [];
  state.shadowLocked = [];
  state.timelineOrder = [];
  state.timelineSlots = [];
  state.timelineFixed = [];
  setMode("question");
  drawScene();
  const localStage = state.stageIndex % 4;
  const level = GAME_DATA.levels[state.levelIndex];
  dom.panelLevel.textContent = "MÀN " + (state.levelIndex + 1);
  dom.panelKind.textContent = localStage === 3 ? "TRẬN BOSS" : "CÂU HỎI";
  dom.questionKicker.textContent = "CHẶNG " + (state.stageIndex + 1) + " / 12 · " + level.theme;
  dom.optionsGrid.innerHTML = "";
  dom.bossArea.innerHTML = "";
  dom.bossArea.hidden = true;
  dom.optionsGrid.hidden = localStage === 3;
  dom.questionTools.hidden = localStage === 3;
  dom.feedback.textContent = "";
  dom.feedback.className = "feedback";
  if (localStage < 3) renderMultipleChoice(level.questions[localStage]);
  else {
    renderBoss(level);
    setMode("boss");
  }
  updateHud();
  startClock(localStage === 3 ? level.boss.duration : 30);
}

function renderMultipleChoice(question) {
  state.currentQuestion = question;
  const shuffled = randomOrder(question.options.map(function (text, originalIndex) {
    return { text: text, originalIndex: originalIndex };
  }));
  state.currentQuestion.shuffledOptions = shuffled;
  state.currentQuestion.shuffledAnswerIndex = shuffled.findIndex(function (option) { return option.originalIndex === question.answerIndex; });
  dom.prompt.textContent = question.prompt;
  shuffled.forEach(function (option, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.answer = String(index);
    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = ANSWER_LETTERS[index];
    const label = document.createElement("span");
    label.textContent = option.text;
    button.append(letter, label);
    button.addEventListener("click", function () { answerQuestion(index); });
    dom.optionsGrid.appendChild(button);
  });
}

function renderBoss(level) {
  dom.prompt.textContent = level.boss.title;
  dom.bossArea.hidden = false;
  state.bossData = { type: level.boss.type };
  if (level.boss.type === "picture") renderPictureBoss();
  if (level.boss.type === "shadow") renderShadowBoss(level.shadowStatements);
  if (level.boss.type === "timeline") renderTimelineBoss(level.events);
}

function startClock(duration) {
  clearClock();
  state.timerRemaining = duration;
  updateHud();
  if (!state.timerEnabled || state.paused) return;
  state.timerInterval = window.setInterval(function () {
    if (state.paused || state.locked || ["summary", "victory", "failed", "intro"].includes(state.mode)) return;
    state.timerRemaining -= 1;
    updateHud();
    if (state.timerRemaining <= 0) handleTimeout();
  }, 1000);
}

function handleTimeout() {
  clearClock();
  if (state.mode === "question") {
    state.locked = true;
    const correctIndex = state.currentQuestion.shuffledAnswerIndex;
    const buttons = dom.optionsGrid.querySelectorAll(".answer-button");
    buttons.forEach(function (button, index) {
      button.disabled = true;
      if (index === correctIndex) button.classList.add("correct");
    });
    dom.feedback.className = "feedback wrong";
    dom.feedback.textContent = "Hết giờ! Đáp án đúng: " + state.currentQuestion.shuffledOptions[correctIndex].text + ". " + state.currentQuestion.explain;
    loseLife();
    queueTransition(function () { finishStage(false); }, 2200);
    return;
  }
  if (state.mode === "boss") {
    state.locked = true;
    loseLife();
    if (state.mode !== "failed") {
      showBossFeedback("Hết giờ! Chặng boss chưa hoàn thành.", true);
      queueTransition(function () { finishStage(false); }, 2100);
    }
  }
}

function answerQuestion(selectedIndex) {
  if (state.mode !== "question" || state.locked || state.hiddenOptions.includes(selectedIndex)) return;
  state.locked = true;
  clearClock();
  const isCorrect = selectedIndex === state.currentQuestion.shuffledAnswerIndex;
  const buttons = dom.optionsGrid.querySelectorAll(".answer-button");
  buttons.forEach(function (button) { button.disabled = true; });
  if (isCorrect) {
    buttons[selectedIndex].classList.add("correct");
    dom.feedback.className = "feedback";
    dom.feedback.textContent = "Chính xác! " + state.currentQuestion.explain;
    celebrateJump();
    playTone("jump");
    queueTransition(function () { finishStage(true); }, 1100);
  } else {
    buttons[selectedIndex].classList.add("incorrect");
    buttons[state.currentQuestion.shuffledAnswerIndex].classList.add("correct");
    dom.feedback.className = "feedback wrong";
    dom.feedback.textContent = "Chưa đúng. Đáp án: " + state.currentQuestion.shuffledOptions[state.currentQuestion.shuffledAnswerIndex].text + ". " + state.currentQuestion.explain;
    playTone("wrong");
    loseLife();
    if (state.mode !== "failed") queueTransition(function () { finishStage(false); }, 2300);
  }
}

function finishStage(wasCorrect) {
  cancelPendingWork();
  const nextIndex = state.stageIndex + 1;
  if (nextIndex >= 12) {
    showVictory();
    return;
  }
  if (Math.floor(nextIndex / 4) !== state.levelIndex) {
    showSummary();
    return;
  }
  state.stageIndex = nextIndex;
  renderQuestion();
}

function loseLife() {
  state.lives = Math.max(0, state.lives - 1);
  renderLives(true);
  playTone("wrong");
  dom.scene.classList.remove("hit");
  void dom.scene.offsetWidth;
  dom.scene.classList.add("hit");
  if (state.lives === 0) showFailure();
}

function showBossFeedback(message, isWrong) {
  const feedback = dom.bossArea.querySelector(".feedback");
  if (!feedback) return;
  feedback.textContent = message;
  feedback.classList.toggle("wrong", Boolean(isWrong));
}

function celebrateJump() {
  setTravelProgress(state.stageIndex % 4 + 1);
  dom.scene.classList.remove("jump", "scroll");
  void dom.scene.offsetWidth;
  dom.scene.classList.add("jump", "scroll");
}

function setTravelProgress(completedStages) {
  const progress = Math.min(4, completedStages);
  dom.runner.style.setProperty("--runner-progress", progress * 14.5 + "%");
}

function showSummary() {
  clearClock();
  state.mode = "summary";
  const level = GAME_DATA.levels[state.levelIndex];
  dom.resultKicker.textContent = "CHỐT Ý · MÀN " + (state.levelIndex + 1);
  dom.resultTitle.textContent = level.name;
  dom.resultContent.innerHTML = "<p class=\"summary-theme\"></p><ol class=\"summary-list\"></ol>";
  dom.resultContent.querySelector(".summary-theme").textContent = level.theme;
  const list = dom.resultContent.querySelector(".summary-list");
  level.takeaways.forEach(function (point) {
    const item = document.createElement("li");
    item.textContent = point;
    list.appendChild(item);
  });
  dom.continueButton.textContent = state.levelIndex === 1 ? "ĐẾN MÀN 3 ➜" : "TIẾP TỤC ➜";
  dom.resultScreen.hidden = false;
  dom.failureScreen.hidden = true;
  drawRouteProgress();
  playTone("win");
}

function showVictory() {
  clearClock();
  state.stageIndex = 11;
  state.levelIndex = 2;
  setMode("victory");
  dom.resultKicker.textContent = "TỔNG KẾT HÀNH TRÌNH";
  dom.resultTitle.textContent = "Cổng Hiến pháp đã mở";
  dom.resultContent.innerHTML = "";
  const themes = document.createElement("ol");
  themes.className = "summary-list";
  GAME_DATA.victoryThemes.forEach(function (theme) {
    const item = document.createElement("li");
    item.textContent = theme;
    themes.appendChild(item);
  });
  const finalStars = document.createElement("p");
  finalStars.className = "total-stars";
  finalStars.textContent = "Sao còn lại ở màn cuối: " + state.lives + " / 3";
  dom.resultContent.append(themes, finalStars);
  dom.continueButton.textContent = "CHƠI LẠI TỪ ĐẦU ↻";
  dom.resultScreen.hidden = false;
  dom.failureScreen.hidden = true;
  dom.scene.classList.add("level-complete");
  playTone("win");
}

function showFailure() {
  cancelPendingWork();
  state.mode = "failed";
  dom.failureMessage.textContent = "Phiếu Nhỏ đã va vào chướng ngại. Cả lớp thử lại " + GAME_DATA.levels[state.levelIndex].name + " nhé!";
  dom.failureScreen.hidden = false;
  dom.resultScreen.hidden = true;
  drawRouteProgress();
}

function advanceAfterSummary() {
  if (state.mode === "victory") {
    resetGame();
    return;
  }
  if (state.mode !== "summary") return;
  state.stageIndex = (state.levelIndex + 1) * 4;
  state.levelIndex += 1;
  state.lives = 3;
  renderLives(false);
  renderQuestion();
}

function retryLevel() {
  const firstStage = state.levelIndex * 4;
  state.stageIndex = firstStage;
  state.lives = 3;
  renderLives(false);
  renderQuestion();
}

function resetGame() {
  cancelPendingWork();
  state.levelIndex = 0;
  state.stageIndex = 0;
  state.lives = 3;
  state.hints = 2;
  state.fiftyUses = 2;
  state.currentQuestion = null;
  state.bossData = null;
  state.mode = "intro";
  dom.resultScreen.hidden = true;
  dom.failureScreen.hidden = true;
  dom.introScreen.hidden = false;
  dom.prompt.textContent = "Hành trình sắp bắt đầu.";
  dom.optionsGrid.innerHTML = "";
  dom.bossArea.hidden = true;
  dom.panelLevel.textContent = "MÀN 1";
  dom.panelKind.textContent = "CÂU HỎI";
  dom.questionKicker.textContent = "CHẶNG 1 / 12";
  dom.questionTools.hidden = false;
  dom.levelName.textContent = "SẴN SÀNG";
  dom.stageLabel.textContent = "12 CHẶNG";
  dom.timerRemaining = 0;
  updateHud();
}

function pauseGame() {
  if (["intro", "summary", "victory", "failed", "paused"].includes(state.mode)) return;
  state.paused = true;
  clearClock();
  state.modeBeforePause = state.mode;
  state.mode = "paused";
  dom.pauseScreen.hidden = false;
  drawRouteProgress();
}

function resumeGame() {
  if (state.mode !== "paused") return;
  state.mode = state.modeBeforePause || "question";
  state.paused = false;
  dom.pauseScreen.hidden = true;
  if (state.timerEnabled && !state.locked && state.timerRemaining > 0) {
    state.timerInterval = window.setInterval(function () {
      if (state.paused || state.locked) return;
      state.timerRemaining -= 1;
      updateHud();
      if (state.timerRemaining <= 0) handleTimeout();
    }, 1000);
  }
  drawRouteProgress();
}

// (4) XỬ LÝ SỰ KIỆN: nút bấm, bàn phím, trình chiếu và menu người dẫn.
function useHint() {
  if (state.mode !== "question" || state.locked || state.hints <= 0) return;
  state.hints -= 1;
  dom.feedback.className = "feedback hint";
  dom.feedback.textContent = "Gợi ý: " + state.currentQuestion.hint;
  updateHud();
}

function useFiftyFifty() {
  if (state.mode !== "question" || state.locked || state.fiftyUses <= 0 || !state.currentQuestion) return;
  state.fiftyUses -= 1;
  const wrongIndexes = state.currentQuestion.shuffledOptions.map(function (_, index) { return index; }).filter(function (index) { return index !== state.currentQuestion.shuffledAnswerIndex; });
  state.hiddenOptions = randomOrder(wrongIndexes).slice(0, 2);
  state.hiddenOptions.forEach(function (index) {
    const button = dom.optionsGrid.querySelector('[data-answer="' + index + '"]');
    if (button) button.classList.add("hidden-option");
  });
  updateHud();
}

function openHostMenu() {
  dom.timerToggle.checked = state.timerEnabled;
  dom.soundToggle.checked = state.soundEnabled;
  dom.jumpSelect.value = String(state.stageIndex);
  if (typeof dom.hostDialog.showModal === "function") dom.hostDialog.showModal();
  else dom.hostDialog.setAttribute("open", "open");
}

function jumpToStage() {
  const index = Number(dom.jumpSelect.value);
  if (!Number.isInteger(index) || index < 0 || index > 11) return;
  state.lives = 3;
  state.stageIndex = index;
  state.levelIndex = Math.floor(index / 4);
  renderQuestion();
  if (dom.hostDialog.open) dom.hostDialog.close();
}

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen().catch(function () {});
  else if (dom.gameShell.requestFullscreen) dom.gameShell.requestFullscreen().catch(function () {});
}

function handleKeys(event) {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  const key = event.key.toLowerCase();
  if (key === "f") { event.preventDefault(); toggleFullscreen(); return; }
  if (key === "p") { event.preventDefault(); state.mode === "paused" ? resumeGame() : pauseGame(); return; }
  if (key === "escape" && state.mode === "paused") { resumeGame(); return; }
  if (key === " " || key === "enter") {
    if (state.mode === "summary" || state.mode === "victory") { event.preventDefault(); advanceAfterSummary(); }
    else if (state.mode === "paused") { event.preventDefault(); resumeGame(); }
    return;
  }
  if (state.mode === "question") {
    if (key === "h") { useHint(); return; }
    if (key === "5") { useFiftyFifty(); return; }
    const index = ANSWER_LETTERS.indexOf(key.toUpperCase());
    const numericIndex = /^[1-4]$/.test(key) ? Number(key) - 1 : -1;
    if (index >= 0) answerQuestion(index);
    else if (numericIndex >= 0) answerQuestion(numericIndex);
    return;
  }
}

function wireEvents() {
  dom.startButton.addEventListener("click", function () {
    startAudio();
    state.soundStarted = true;
    state.stageIndex = 0;
    state.levelIndex = 0;
    state.lives = 3;
    renderQuestion();
  });
  dom.hintButton.addEventListener("click", useHint);
  dom.fiftyButton.addEventListener("click", useFiftyFifty);
  dom.pauseButton.addEventListener("click", pauseGame);
  dom.resumeButton.addEventListener("click", resumeGame);
  dom.hostButton.addEventListener("click", openHostMenu);
  dom.jumpButton.addEventListener("click", jumpToStage);
  dom.resetButton.addEventListener("click", function () { resetGame(); if (dom.hostDialog.open) dom.hostDialog.close(); });
  dom.timerToggle.addEventListener("change", function () {
    state.timerEnabled = dom.timerToggle.checked;
    if (!state.timerEnabled) clearClock();
    else if (!state.paused && ["question", "boss"].includes(state.mode)) startClock(state.timerRemaining || 30);
    updateHud();
  });
  dom.soundToggle.addEventListener("change", function () {
    state.soundEnabled = dom.soundToggle.checked;
    updateHud();
  });
  dom.continueButton.addEventListener("click", advanceAfterSummary);
  dom.retryButton.addEventListener("click", retryLevel);
  dom.fullscreenButton.addEventListener("click", toggleFullscreen);
  dom.gameShell.addEventListener("mousemove", updateFlashlight);
  dom.gameShell.addEventListener("touchmove", updateFlashlight, { passive: true });
  document.addEventListener("keydown", handleKeys);
  document.addEventListener("pointerdown", function (event) {
    if (event.target === dom.hostDialog) dom.hostDialog.close();
  });
  document.addEventListener("fullscreenchange", function () {
    dom.fullscreenButton.setAttribute("aria-label", document.fullscreenElement ? "Thoát toàn màn hình" : "Bật toàn màn hình");
  });
}

// (5) ÂM THANH WEB AUDIO: chỉ tạo ngữ cảnh sau thao tác Bắt đầu của người chơi.
let audioContext = null;

function startAudio() {
  if (!state.soundEnabled) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  if (!audioContext) audioContext = new AudioContextClass();
  if (audioContext.state === "suspended") audioContext.resume();
}

function playTone(kind) {
  if (!state.soundEnabled || !state.soundStarted || !audioContext) return;
  const now = audioContext.currentTime;
  const notes = kind === "jump" ? [660, 880] : kind === "wrong" ? [190, 130] : [523, 659, 784];
  notes.forEach(function (frequency, index) {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = kind === "wrong" ? "triangle" : "sine";
    oscillator.frequency.setValueAtTime(frequency, now + index * .095);
    gain.gain.setValueAtTime(.0001, now + index * .095);
    gain.gain.exponentialRampToValueAtTime(.075, now + index * .095 + .018);
    gain.gain.exponentialRampToValueAtTime(.0001, now + index * .095 + .14);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now + index * .095);
    oscillator.stop(now + index * .095 + .15);
  });
}

// (6) LOGIC BA BOSS: mở ảnh qua câu hỏi, tìm mệnh đề sai và sắp xếp mốc lịch sử.
function renderPictureBoss() {
  const questions = randomOrder(GAME_DATA.levels[0].pictureQuestions);
  state.bossData = { type: "picture", questions: questions, revealed: [], activeTile: null, won: false };
  dom.bossArea.innerHTML = '<div class="picture-boss"><div class="picture-board" role="group" aria-label="Chín thẻ ảnh tư liệu"><div class="picture-photo"></div><div class="picture-tiles"></div></div><div class="picture-aside"><p class="boss-heading">Chọn thẻ để trả lời câu hỏi, hoặc đoán ý nghĩa bức tranh để qua màn sớm.</p><p class="picture-counter" id="pictureCounter">Đã mở 0 / 9 thẻ</p><div class="picture-question" id="pictureQuestion"><p>Chọn một ô ảnh để bắt đầu.</p></div><p class="feedback" id="pictureFeedback" role="status"></p><form class="meaning-form" id="meaningForm"><label for="meaningGuess">Ý nghĩa bức tranh là gì?</label><div class="meaning-controls"><input id="meaningGuess" type="text" autocomplete="off" placeholder="Nhập ý nghĩa mà cả lớp thống nhất"><button class="primary-button compact-button" type="submit">TRẢ LỜI</button></div></form></div><p class="picture-caption" id="pictureCaption" hidden>Cử tri đi bỏ phiếu trong cuộc Tổng tuyển cử đầu tiên, 6/1/1946</p></div>';
  const tilesWrap = dom.bossArea.querySelector(".picture-tiles");
  for (let tileIndex = 0; tileIndex < 9; tileIndex += 1) {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "picture-tile";
    tile.style.left = (tileIndex % 3) * 33.3334 + "%";
    tile.style.top = Math.floor(tileIndex / 3) * 33.3334 + "%";
    tile.dataset.tile = String(tileIndex);
    tile.dataset.number = String(tileIndex + 1);
    tile.setAttribute("aria-label", "Thẻ ảnh " + (tileIndex + 1));
    tile.addEventListener("click", function () { selectPictureTile(tileIndex); });
    tilesWrap.appendChild(tile);
  }
  dom.bossArea.querySelector("#meaningForm").addEventListener("submit", submitPictureMeaning);
}

function selectPictureTile(tileIndex) {
  if (state.mode !== "boss" || state.locked || !state.bossData || state.bossData.won || state.bossData.revealed.includes(tileIndex)) return;
  state.bossData.activeTile = tileIndex;
  const question = state.bossData.questions[tileIndex];
  const container = dom.bossArea.querySelector("#pictureQuestion");
  container.innerHTML = "";
  const prompt = document.createElement("p");
  prompt.className = "picture-prompt";
  prompt.textContent = question.prompt;
  const options = document.createElement("div");
  options.className = "picture-options";
  const shuffled = randomOrder(question.options.map(function (text, originalIndex) {
    return { text: text, originalIndex: originalIndex };
  }));
  question.shuffledOptions = shuffled;
  question.shuffledAnswerIndex = shuffled.findIndex(function (option) { return option.originalIndex === question.answerIndex; });
  shuffled.forEach(function (option, optionIndex) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "picture-answer";
    button.innerHTML = "<b>" + ANSWER_LETTERS[optionIndex] + "</b>";
    const label = document.createElement("span");
    label.textContent = option.text;
    button.appendChild(label);
    button.addEventListener("click", function () { answerPictureTile(tileIndex, optionIndex); });
    options.appendChild(button);
  });
  container.append(prompt, options);
  const feedback = dom.bossArea.querySelector("#pictureFeedback");
  feedback.textContent = "";
  feedback.className = "feedback";
}

function answerPictureTile(tileIndex, optionIndex) {
  if (state.mode !== "boss" || state.locked || !state.bossData || state.bossData.won || state.bossData.activeTile !== tileIndex) return;
  const question = state.bossData.questions[tileIndex];
  const buttons = dom.bossArea.querySelectorAll(".picture-answer");
  const feedback = dom.bossArea.querySelector("#pictureFeedback");
  if (optionIndex === question.shuffledAnswerIndex) {
    state.bossData.revealed.push(tileIndex);
    const tile = dom.bossArea.querySelector('[data-tile="' + tileIndex + '"]');
    tile.classList.add("revealed");
    tile.disabled = true;
    tile.setAttribute("aria-label", "Thẻ ảnh " + (tileIndex + 1) + " đã mở");
    feedback.className = "feedback";
    feedback.textContent = "Đúng! " + question.explain;
    dom.bossArea.querySelector("#pictureCounter").textContent = "Đã mở " + state.bossData.revealed.length + " / 9 thẻ";
    state.bossData.activeTile = null;
    dom.bossArea.querySelector("#pictureQuestion").innerHTML = "<p>Chọn một thẻ chưa mở để xem câu hỏi tiếp theo.</p>";
    if (state.bossData.revealed.length === 9) {
      state.bossData.won = true;
      state.locked = true;
      dom.bossArea.querySelector("#pictureCaption").hidden = false;
      feedback.textContent = "Cả lớp đã mở toàn bộ bức ảnh! " + question.explain;
      playTone("win");
      celebrateJump();
      queueTransition(function () { finishStage(true); }, 2600);
    } else {
      playTone("jump");
    }
    return;
  }
  buttons.forEach(function (button) { button.disabled = true; });
  buttons[optionIndex].classList.add("incorrect");
  feedback.className = "feedback wrong";
  feedback.textContent = "Chưa đúng. Hãy thử lại hoặc chọn một thẻ khác.";
  loseLife();
  if (state.mode !== "failed") {
    window.setTimeout(function () {
      if (state.mode !== "boss" || !dom.bossArea.isConnected) return;
      buttons.forEach(function (button) { button.disabled = false; });
      buttons[optionIndex].classList.remove("incorrect");
    }, 650);
  }
}

function submitPictureMeaning(event) {
  if (event) event.preventDefault();
  if (state.mode !== "boss" || state.locked || !state.bossData || state.bossData.type !== "picture" || state.bossData.won) return;
  const input = dom.bossArea.querySelector("#meaningGuess");
  const guess = normalizeAnswer(input.value);
  const answers = GAME_DATA.levels[0].pictureMeaningAnswers;
  const accepted = answers.some(function (answer) { return guess.includes(answer); });
  const feedback = dom.bossArea.querySelector("#pictureFeedback");
  if (!accepted) {
    feedback.className = "feedback wrong";
    feedback.textContent = "Chưa trúng ý nghĩa. Hãy thử diễn đạt về quyền làm chủ của nhân dân.";
    input.classList.remove("input-shake");
    void input.offsetWidth;
    input.classList.add("input-shake");
    return;
  }
  state.bossData.won = true;
  state.locked = true;
  dom.bossArea.querySelectorAll(".picture-tile").forEach(function (tile) {
    tile.classList.add("revealed");
    tile.disabled = true;
  });
  dom.bossArea.querySelector("#pictureCaption").hidden = false;
  dom.bossArea.querySelector("#pictureCounter").textContent = "Ý nghĩa bức tranh đã được nhận ra · Qua màn";
  dom.bossArea.querySelector("#pictureQuestion").innerHTML = "<p>Nhân dân trực tiếp thực hiện quyền làm chủ thông qua cuộc Tổng tuyển cử đầu tiên.</p>";
  feedback.className = "feedback";
  feedback.textContent = "Chính xác! Có thể qua màn mà không cần mở hết các thẻ.";
  playTone("win");
  celebrateJump();
  queueTransition(function () { finishStage(true); }, 2600);
}

function renderShadowBoss(statements) {
  const ordered = randomOrder(statements.map(function (statement, originalIndex) {
    return { text: statement.text, wrong: statement.wrong, explain: statement.explain, originalIndex: originalIndex };
  }));
  state.bossData = { type: "shadow", statements: ordered, wrongCount: 0, won: false, lit: false };
  state.shadowSelected = [];
  state.shadowLocked = [];
  dom.bossArea.innerHTML = '<div class="shadow-boss"><p class="boss-heading">Chọn đúng 2 mệnh đề SAI. Đèn pin sẽ đi theo con trỏ.</p><div class="shadow-grid"></div><div class="boss-toolbar"><button class="tool-button" id="flashButton" type="button">☼ Bật đèn 3 giây <b>' + state.hints + "</b></button><p class=\"feedback\" role=\"status\"></p></div></div>";
  const board = dom.bossArea.querySelector(".shadow-grid");
  ordered.forEach(function (statement, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "shadow-card";
    button.dataset.statement = String(index);
    button.textContent = statement.text;
    button.addEventListener("click", function () { selectShadowStatement(index); });
    board.appendChild(button);
  });
  dom.bossArea.querySelector("#flashButton").addEventListener("click", illuminateShadowBoss);
  dom.scene.classList.add("boss-dark", "dark-active");
}

function selectShadowStatement(index) {
  if (state.mode !== "boss" || state.locked || !state.bossData || state.bossData.won || state.shadowLocked.includes(index)) return;
  const statement = state.bossData.statements[index];
  const card = dom.bossArea.querySelector('[data-statement="' + index + '"]');
  if (!statement.wrong) {
    state.shadowLocked.push(index);
    card.classList.add("locked-right");
    card.disabled = true;
    loseLife();
    if (state.mode !== "failed") showBossFeedback("Đây là ý đúng, không phải lỗi sai. Mỗi mệnh đề sai đã khóa.", true);
    return;
  }
  if (state.shadowSelected.includes(index)) return;
  state.shadowSelected.push(index);
  card.classList.add("selected");
  state.bossData.wrongCount += 1;
  if (state.bossData.wrongCount === 2) winShadowBoss();
  else showBossFeedback("Đã tìm thấy 1 / 2 mệnh đề sai. Tìm mệnh đề còn lại.", false);
}

function illuminateShadowBoss() {
  if (state.mode !== "boss" || !state.bossData || state.bossData.type !== "shadow" || state.bossData.won || state.hints <= 0) return;
  state.hints -= 1;
  const panel = dom.bossArea.querySelector(".shadow-boss");
  panel.classList.add("lit");
  const button = dom.bossArea.querySelector("#flashButton");
  button.disabled = true;
  button.querySelector("b").textContent = String(state.hints);
  updateHud();
  window.setTimeout(function () {
    if (state.bossData && state.bossData.type === "shadow" && !state.bossData.won) {
      panel.classList.remove("lit");
      button.disabled = state.hints <= 0;
    }
  }, 3000);
}

function winShadowBoss() {
  state.bossData.won = true;
  state.locked = true;
  const panel = dom.bossArea.querySelector(".shadow-boss");
  panel.classList.add("won", "lit");
  dom.bossArea.querySelectorAll(".shadow-card").forEach(function (card, index) {
    card.disabled = true;
    card.classList.add("explanation");
    const statement = state.bossData.statements[index];
    card.textContent = statement.text + " — " + statement.explain;
    card.classList.toggle("selected", statement.wrong);
  });
  showBossFeedback("Chính xác! Hai lỗi sai đã được chỉ ra; cả sáu ý đã sáng rõ.", false);
  playTone("win");
  queueTransition(function () { finishStage(true); }, 3500);
}

function updateFlashlight(event) {
  if (event && event.touches && event.touches.length) event = event.touches[0];
  if (event && typeof event.clientX === "number") {
    const rect = dom.scene.getBoundingClientRect();
    state.lightX = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
    state.lightY = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
  }
  dom.scene.style.setProperty("--light-x", state.lightX + "px");
  dom.scene.style.setProperty("--light-y", state.lightY + "px");
  const panel = dom.bossArea.querySelector(".shadow-boss");
  if (!panel || !state.bossData || state.bossData.type !== "shadow" || state.bossData.won || panel.classList.contains("lit")) return;
  const panelRect = panel.getBoundingClientRect();
  const pointerX = event && typeof event.clientX === "number" ? event.clientX : panelRect.left + state.lightX;
  const pointerY = event && typeof event.clientY === "number" ? event.clientY : panelRect.top + state.lightY;
  panel.style.setProperty("--boss-light-x", Math.max(0, Math.min(panelRect.width, pointerX - panelRect.left)) + "px");
  panel.style.setProperty("--boss-light-y", Math.max(0, Math.min(panelRect.height, pointerY - panelRect.top)) + "px");
  const cards = panel.querySelectorAll(".shadow-card");
  cards.forEach(function (card) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(pointerX - centerX, pointerY - centerY);
    card.classList.toggle("spotlit", distance < 190);
  });
}

function renderTimelineBoss(events) {
  state.bossData = { type: "timeline", events: events, won: false };
  state.timelineOrder = randomOrder(events.map(function (_, index) { return index; }));
  state.timelineSlots = Array(6).fill(null);
  state.timelineFixed = Array(6).fill(false);
  dom.bossArea.innerHTML = '<p class="boss-heading">Chọn các thẻ sự kiện lần lượt để xếp vào ô 1 → 6. Bấm thẻ đã đặt để gỡ.</p><div class="timeline-board"><div class="event-pool"></div><div class="timeline-slots"></div><div class="timeline-controls"><p class="feedback" role="status"></p><button class="primary-button compact-button" id="submitTimeline" type="button">NỘP</button></div></div>';
  const pool = dom.bossArea.querySelector(".event-pool");
  state.timelineOrder.forEach(function (eventIndex) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "event-card";
    card.dataset.event = String(eventIndex);
    card.textContent = events[eventIndex].text;
    card.addEventListener("click", function () { placeTimelineEvent(eventIndex); });
    pool.appendChild(card);
  });
  dom.bossArea.querySelector("#submitTimeline").addEventListener("click", submitTimeline);
  renderTimelineSlots();
}

function placeTimelineEvent(eventIndex) {
  if (state.mode !== "boss" || state.locked || !state.bossData || state.bossData.type !== "timeline") return;
  const oldPosition = state.timelineSlots.indexOf(eventIndex);
  if (oldPosition !== -1) {
    if (state.timelineFixed[oldPosition]) return;
    state.timelineSlots[oldPosition] = null;
  } else {
    const freeSlot = state.timelineSlots.findIndex(function (value, slot) { return value === null && !state.timelineFixed[slot]; });
    if (freeSlot === -1) return;
    state.timelineSlots[freeSlot] = eventIndex;
  }
  renderTimelineSlots();
}

function renderTimelineSlots() {
  const slotContainer = dom.bossArea.querySelector(".timeline-slots");
  if (!slotContainer) return;
  slotContainer.innerHTML = "";
  state.timelineSlots.forEach(function (eventIndex, slotIndex) {
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = "timeline-slot" + (eventIndex !== null ? " filled" : "") + (state.timelineFixed[slotIndex] ? " fixed" : "");
    slot.dataset.slot = String(slotIndex + 1);
    slot.disabled = state.timelineFixed[slotIndex] || eventIndex === null;
    if (eventIndex === null) slot.textContent = "Chọn sự kiện";
    else {
      const event = GAME_DATA.levels[2].events[eventIndex];
      slot.append(document.createTextNode(event.text));
      if (state.bossData.won || state.timelineFixed[slotIndex]) {
        const year = document.createElement("small");
        year.textContent = event.year;
        slot.appendChild(year);
      }
    }
    slot.addEventListener("click", function () {
      if (eventIndex !== null) placeTimelineEvent(eventIndex);
    });
    slotContainer.appendChild(slot);
  });
  const cards = dom.bossArea.querySelectorAll(".event-card");
  cards.forEach(function (card) {
    const eventIndex = Number(card.dataset.event);
    const isPlaced = state.timelineSlots.includes(eventIndex);
    card.classList.toggle("placed", isPlaced);
    card.disabled = isPlaced || state.timelineFixed.includes(true) && state.timelineSlots.includes(eventIndex);
  });
}

function submitTimeline() {
  if (state.mode !== "boss" || state.locked || !state.bossData || state.bossData.type !== "timeline") return;
  if (state.timelineSlots.some(function (eventIndex) { return eventIndex === null; })) {
    showBossFeedback("Hãy đặt đủ sáu sự kiện trước khi nộp.", true);
    return;
  }
  const correctCount = state.timelineSlots.reduce(function (count, eventIndex, slotIndex) {
    return count + (eventIndex === slotIndex ? 1 : 0);
  }, 0);
  if (correctCount === 6) {
    state.locked = true;
    state.bossData.won = true;
    state.timelineFixed = Array(6).fill(true);
    renderTimelineSlots();
    showBossFeedback("Chính xác! Sáu mốc lịch sử đã vào đúng vị trí.", false);
    playTone("win");
    queueTransition(function () { finishStage(true); }, 2400);
    return;
  }
  loseLife();
  if (state.mode === "failed") return;
  state.timelineSlots.forEach(function (eventIndex, slotIndex) {
    if (eventIndex === slotIndex) state.timelineFixed[slotIndex] = true;
    else if (!state.timelineFixed[slotIndex]) state.timelineSlots[slotIndex] = null;
  });
  renderTimelineSlots();
  showBossFeedback("Đúng " + correctCount + " / 6 vị trí. Thẻ màu xanh đã được khóa; xếp lại các thẻ còn lại.", true);
}

function initializeGame() {
  collectElements();
  renderRouteMap();
  fillJumpMenu();
  wireEvents();
  drawScene();
  updateHud();
  setMode("intro");
}

initializeGame();