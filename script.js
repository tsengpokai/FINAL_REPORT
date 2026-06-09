// ============================================
//   期末報告 — 地震學 2026 學期回顧
//   Interaction Logic & Data (v2 — 完整修正版)
// ============================================

// --------------------------------------------
// 1. Weekly Data (Modal Content) — 全面加量版
// --------------------------------------------
const weeklyData = {
  1: {
    date: '2026 / 02 / 25',
    title: '🤖 WEEK 1 — AI 輔助學習啟航',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>這週我們沒有急著翻開課本硬背名詞，而是先學習了如何利用現代 AI 工具（如 <strong>Antigravity、NotebookLM、Gemini Gem</strong>）來輔助學習。老師強調，地震學課本是厚重的原文書，但我們不需要傳統逐頁死讀，而是可以用更聰明的方法來理解。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>我學到了透過 <strong>Antigravity</strong> 將課本 PDF 拆分成章節，再丟入 <strong>NotebookLM</strong> 建立專屬的地震學資料庫，讓 AI 依據指定教材回答，而不是只靠網路搜尋或憑空生成。此外也學會了利用 AI 的<strong>交叉比對功能</strong>來驗證理解是否正確——例如同時問 Gemini、ChatGPT、Claude，看回答是否一致。</p>
      <p>最重要的心得是：<strong>AI 不是取代學習的捷徑，而是幫助我們更快「找到問題核心」的工具。</strong>最後仍然需要自己判斷答案是否合理。這種學習模式，為接下來 15 週的課程打下了基礎。</p>
      
      <h3>📋 成果</h3>
      <p>建立了個人專屬的 NotebookLM 地震學資料庫，完成 AI 工具使用方法論筆記。</p>
    `
  },
  2: {
    date: '2026 / 03 / 04',
    title: '🌊 WEEK 2 — 彈性波基礎 & GitHub Pages 部署',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>第二週進入了地震學的物理核心：<strong>彈性體與彈性波</strong>。我們從胡克定律出發，推導出 P 波與 S 波的數學形式，並理解它們在地球內部的傳播特性。同時，老師教我們將這些知識整理成互動式網頁，並學習使用 <strong>GitHub Pages</strong> 進行部署。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p><strong>P 波（壓縮波）：</strong>是縱波，靠介質的壓縮與膨脹傳遞，傳遞速度最快，能在固體、液體與氣體中傳播。</p>
      <p><strong>S 波（剪力波）：</strong>是橫波，靠介質的形狀變化傳遞，速度次於 P 波，<strong>無法穿透液態外核</strong>。</p>
      <p>我也學到了<strong>瞬間作用力與長期作用力的差異</strong>：地震發生時是短時間能量釋放，產生快速傳播的震波；但板塊運動與應力累積則是長時間的地質過程。地震不是突然憑空發生，而是長期應力累積後，在斷層面上快速破裂的結果。</p>
      <p>最特別的是，這讓我第一次體會到，將生硬的科學知識<strong>轉化為視覺化的網頁</strong>，不僅能加深自己的印象，還能讓其他人更容易理解。</p>
      
      <h3>📋 成果：CH1 互動式網頁</h3>
      <div style="background:var(--bg-glass);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:1.5rem;margin:1rem 0;">
        <p style="margin:0 0 0.5rem"><strong>🌐 地震學第一章互動網頁</strong></p>
        <p style="margin:0;font-size:0.9rem;">涵蓋彈性體力學、P 波與 S 波傳遞動畫、地球內部波速剖面、胡克定律互動演示等內容。使用者可以點擊不同概念，透過動畫與圖表理解地震波的物理本質。</p>
      </div>
      <div class="modal-links">
        <a href="https://tsengpokai.github.io/dizhenshare_ch_1/" target="_blank" class="modal-link-btn btn-web">🌐 前往觀看：CH1 互動網頁</a>
      </div>
    `
  },
  3: {
    date: '2026 / 03 / 11',
    title: '🎤 WEEK 3 — 張睿明博士演講 & AI 交叉驗證',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>這週我們聆聽了<strong>張睿明博士</strong>的演講，主題涵蓋了 2022 年關山、池上地震、中央山脈斷層等地震事件分析，以及不同頻率地震波對不同樓層建築物的影響。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>最令我印象深刻的是：「<strong>高頻地震波會對低矮樓層造成較大破壞，而低頻（長週期）地震波則容易與高樓產生共振。</strong>」這讓我驚覺，地震的破壞力不能單看規模大小，頻率與建築物的自然頻率是否產生「共振」才是關鍵。</p>
      <p>此外，我也學到了使用 AI 時必須具備辨識能力。不同平台與模型（Gemini、ChatGPT、Grok、Claude）會給出不同角度的答案，但不一定都正確。因此<strong>交叉詢問、比對資料來源、判斷邏輯合理性</strong>變得非常重要。AI 可以是研究助理，但真正負責判斷的人仍然是自己。</p>
      
      <h3>📋 成果</h3>
      <div class="modal-links">
        <a href="演講心得_U11310015.pdf" target="_blank" class="modal-link-btn btn-pdf">📄 張睿明博士演講心得報告 (PDF)</a>
      </div>
    `
  },
  4: {
    date: '2026 / 03 / 18',
    title: '🌧 WEEK 4 — 水保署 AI 災防 & 震測實驗準備',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>這週老師分享了在<strong>水土保持署</strong>關於 AI 應用於災防的演講內容，並開始為下週的戶外震測實驗做準備。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>我們看到多個 AI 模型的組合如何強大地預測降雨、土石流潛勢，甚至是地震後的二次災害預警。這讓我感受到，<strong>地震學與土木、水利工程的結合，加上 AI 技術，是未來防災的重要趨勢。</strong></p>
      <p>下半節課，我們學習了<strong>節點式地震儀 SmartSolo</strong> 的操作原理與佈設注意事項，包含如何挖洞放置儀器、調整水平、指北針校正方位、等待 GPS 定位等步驟，為下週的實驗做好充分準備。</p>
      
      <h3>📋 成果</h3>
      <p>完成 SmartSolo 儀器操作知識學習與實驗前準備。</p>
    `
  },
  5: {
    date: '2026 / 03 / 25',
    title: '📡 WEEK 5 — SmartSolo 震測實驗實作',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>這週我們扛著 <strong>SmartSolo 節點式地震儀</strong>到戶外，進行實際的震測實驗。從尋找合適地點、挖洞、確認水平到開機紀錄，每個步驟都充滿學問。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>我才明白<strong>一筆地震資料的產生其實非常不容易</strong>——從儀器與地面耦合、方位校正到三分量資料的判讀，每個細節都可能影響分析結果：</p>
      <p>• 儀器若沒有與地面良好耦合，記錄到的震動可能會失真<br>
      • 方位若沒有對準，後續三分量資料的判讀就可能出錯<br>
      • 水平若沒有調好，感測器對上下與水平振動的反應也可能產生偏差</p>
      <p>收集資料後，我們使用 Python 的 <strong>ObsPy</strong> 套件處理波形，濾除高低頻雜訊，並進行了三分量波形圖、頻譜圖與 RMS 分析。我學到地震學並不是看到波形就立刻判斷為地震，而是要綜合波形特徵、三分量同步性、頻率分布、持續時間與環境背景，才能判斷訊號究竟是自然地震、人工震源，還是近地表雜訊。</p>
      
      <h3>📸 實驗資料分析</h3>
      <div class="photo-gallery">
        <div class="photo-item" onclick="openLightbox('螢幕擷取畫面 2026-06-10 003847.png')">
          <img src="螢幕擷取畫面 2026-06-10 003847.png" alt="SmartSolo 實驗資料分析截圖">
          <div class="photo-caption">SmartSolo 震測實驗資料分析截圖</div>
        </div>
      </div>
      
      <h3>📋 成果</h3>
      <div style="background:var(--bg-glass);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:1.5rem;margin:1rem 0;">
        <p style="margin:0 0 0.5rem"><strong>🤗 HuggingFace 震測實驗互動分析平台</strong></p>
        <p style="margin:0;font-size:0.9rem;">將 SmartSolo 收集到的 SAC 資料上傳至 HuggingFace Spaces，建立了互動式波形瀏覽器，可以即時調整濾波參數、觀看三分量波形與頻譜分析結果。</p>
      </div>
      <div class="modal-links">
        <a href="震測實驗心得報告.pdf" target="_blank" class="modal-link-btn btn-pdf">📄 下載震測實驗心得報告 (PDF)</a>
        <a href="https://huggingface.co/spaces/tspokai/seismic_exp" target="_blank" class="modal-link-btn btn-hf">🤗 HuggingFace 實驗資料分析</a>
      </div>
    `
  },
  6: {
    date: '2026 / 04 / 01',
    title: '🏛 WEEK 6 — 國震中心參訪 (NCREE)',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>我們來到<strong>國家地震工程研究中心 (NCREE)</strong>，實地參觀了地震工程研究的核心設施，包含多軸向振動台、反力牆、隔震制震設備，以及各種建築抗震技術。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>透過地震危害度分析 <strong>PSHA</strong>，我學到工程設計不是只看某一次大地震，而是要考慮震源分區、地震目錄、衰減公式、場址條件與超越機率。地震工程的目標也不是讓建築永遠不受損，而是透過「<strong>小震不壞、中震可修、大震不倒</strong>」的理念，讓風險控制在可接受範圍內。</p>
      <p>我也學到了<strong>地盤放大效應</strong>——不同地質條件會放大不同週期的震波：盆地沉積層可能放大中長週期地震動，對中高樓層建築特別危險；而較硬的礫石層則可能與短週期震動有關，對低樓層結構影響較明顯。此外，<strong>軟弱底層、剪力牆不足、任意拆除支撐或改建</strong>，都可能使建築在強震中產生嚴重破壞。</p>
      
      <h3>📸 參訪照片精選</h3>
      <div class="photo-gallery">
        <div class="photo-item" onclick="openLightbox('pictures/Exterior of the National Earthquake Research Center building.jpeg')">
          <img src="pictures/Exterior of the National Earthquake Research Center building.jpeg" alt="國震中心外觀">
          <div class="photo-caption">國家地震工程研究中心大樓外觀</div>
        </div>
        <div class="photo-item" onclick="openLightbox('pictures/Vibration table on the first floor.jpg')">
          <img src="pictures/Vibration table on the first floor.jpg" alt="振動台">
          <div class="photo-caption">一樓振動台設施</div>
        </div>
        <div class="photo-item" onclick="openLightbox('pictures/First floor reaction wall.jpg')">
          <img src="pictures/First floor reaction wall.jpg" alt="反力牆">
          <div class="photo-caption">一樓反力牆實驗設施</div>
        </div>
        <div class="photo-item" onclick="openLightbox('pictures/Multiaxial test vibration table.jpeg')">
          <img src="pictures/Multiaxial test vibration table.jpeg" alt="多軸向振動台">
          <div class="photo-caption">多軸向測試振動台</div>
        </div>
        <div class="photo-item" onclick="openLightbox('pictures/Earthquake-damaged building cases1.jpeg')">
          <img src="pictures/Earthquake-damaged building cases1.jpeg" alt="地震損壞建築案例">
          <div class="photo-caption">地震損壞建築案例展示</div>
        </div>
        <div class="photo-item" onclick="openLightbox('pictures/Simulated earthquake control facility experience.jpeg')">
          <img src="pictures/Simulated earthquake control facility experience.jpeg" alt="地震模擬體驗">
          <div class="photo-caption">模擬地震控制設施體驗</div>
        </div>
        <div class="photo-item" onclick="openLightbox('pictures/Examples of seismic isolation facilities1.jpg')">
          <img src="pictures/Examples of seismic isolation facilities1.jpg" alt="隔震設施">
          <div class="photo-caption">隔震設施範例</div>
        </div>
        <div class="photo-item" onclick="openLightbox('pictures/taipei101.jpeg')">
          <img src="pictures/taipei101.jpeg" alt="台北101阻尼器">
          <div class="photo-caption">台北 101 阻尼器相關展示</div>
        </div>
      </div>
      
      <h3>📋 成果</h3>
      <div class="modal-links">
        <a href="U11310015_曾柏凱_國震中心參訪與心得總結報告.pdf" target="_blank" class="modal-link-btn btn-pdf">📄 國震中心參訪與心得總結報告 (PDF)</a>
      </div>
    `
  },
  7: {
    date: '2026 / 04 / 08',
    title: '📋 WEEK 7 — 期中考說明',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>這週主要是老師說明下週的期中考形式與範圍，我們花時間整理前半學期的所有學習筆記。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>透過整理筆記的過程，我把從 AI 輔助學習、彈性波理論、張睿明博士演講、SmartSolo 震測實驗、到國震中心參訪的知識串聯起來，建立了一個完整的學習脈絡。這讓我發現，前半學期的每一週其實都環環相扣——理論是基礎，實驗是驗證，參訪是應用。</p>
    `
  },
  8: {
    date: '2026 / 04 / 15',
    title: '📝 WEEK 8 — 期中考與期中報告',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>這週是期中考，驗收前半學期所有學習成果。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>考試範圍包含了<strong>第一章彈性波理論（P 波、S 波、體波、面波）、第二章地球內部構造</strong>，以及我們對震測實驗與國震中心參訪的理解與反思。透過準備期中考，我重新整理了對地震波傳播、彈性模數、波速計算等基礎概念的掌握程度。</p>
    `
  },
  9: {
    date: '2026 / 04 / 22',
    title: '💪 WEEK 9 — 應力應變複習 & 宋冠毅老師演講',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>期中考後，我們重新複習了物理學中的<strong>應力（Stress）與應變（Strain）</strong>，這是理解斷層錯動與地震波能量釋放的基礎。此外，我們聆聽了<strong>宋冠毅老師</strong>的演講，他分享了走向國際的地震學研究經驗。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>應力應變的複習讓我更深入理解了<strong>彈性回跳理論</strong>：地殼岩石在板塊運動的推擠下逐漸累積彈性應變能，當斷層面上的摩擦力無法承受時，岩石瞬間破裂釋放能量，這就是地震。</p>
      <p>宋冠毅老師的演講則讓我看到，地震學研究不只是在台灣進行，而是需要<strong>跨國界合作</strong>的全球性科學。他鼓勵我們不僅要學好專業知識，還要培養國際視野、學好英文，並積極參與國際研討會與合作計畫。</p>
      
      <h3>📋 成果</h3>
      <div class="modal-links">
        <a href="宋冠毅老師演講心得.pdf" target="_blank" class="modal-link-btn btn-pdf">📄 宋冠毅老師演講心得報告 (PDF)</a>
      </div>
    `
  },
  10: {
    date: '2026 / 04 / 29',
    title: '🌍 WEEK 10 — 地震學第三章互動式網頁',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>第三章帶領我們利用地震波來「看穿」地球。我們學習了走時曲線、折射震測、反射震測、球狀地球中的波傳、體波走時研究、非均向性、衰減與地函地核組成等主題，並將這些內容製作成互動式網頁。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>我學到 P 波與 S 波在不同深度因為密度與彈性模數變化而產生的<strong>折射與反射現象</strong>。透過這些波形，科學家證明了外核是液態的、發現了地函與地核的邊界（CMB）。地震波就像是<strong>替地球做內部掃描</strong>的超級工具。</p>
      <p>我也學會了從資料中辨認不同相位、如何把多個測站的波形排列成 Record Section 剖面、如何解釋距離與抵達時間的關係。</p>
      
      <h3>📸 走時與波形分析</h3>
      <div class="photo-gallery">
        <div class="photo-item" onclick="openLightbox('record_section.png')">
          <img src="record_section.png" alt="走時與波形 Record Section">
          <div class="photo-caption">自選地震資料繪製的 Record Section — 觀察不同距離測站的波形抵達差異</div>
        </div>
      </div>
      
      <h3>📋 成果：CH3 互動式網頁</h3>
      <div style="background:var(--bg-glass);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:1.5rem;margin:1rem 0;">
        <p style="margin:0 0 0.5rem"><strong>🌐 地震學第三章互動網頁</strong></p>
        <p style="margin:0;font-size:0.9rem;">涵蓋走時曲線互動演示、非均向性地球結構視覺化、地函與地核組成圖解、自選地震資料的走時與波形剖面圖等內容。使用者可以互動操作，深入理解地震波如何揭示地球內部的層狀構造。</p>
      </div>
      <div class="modal-links">
        <a href="https://tsengpokai.github.io/SEISmology_ch3/" target="_blank" class="modal-link-btn btn-web">🌐 前往觀看：CH3 互動網頁</a>
      </div>
    `
  },
  11: {
    date: '2026 / 05 / 06',
    title: '🎓 WEEK 11 — 報告第三章 & 學習設計技巧',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>同學們輪流上台報告自己製作的第三章網頁內容，互相觀摩與學習。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>看到其他同學利用 JavaScript 與 CSS 動畫做出超酷的地球震波傳遞效果，我學到了很多<strong>網頁設計與資料視覺化的技巧</strong>。有同學做了地球切面動畫、有同學做了互動式速度剖面、也有同學用 3D 效果呈現地震波的折射路徑。</p>
      <p>這讓我未來設計網頁能更精準，也直接激發了我製作這次期末報告網頁的靈感。</p>
      
      <h3>📋 成果</h3>
      <p>從同學報告中學習到的設計技巧筆記，包含 CSS 動畫、響應式設計、資料視覺化的最佳實踐。</p>
    `
  },
  12: {
    date: '2026 / 05 / 13',
    title: '🏖 WEEK 12 — 海灘球判讀 & 震源機制球',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>進入地震學第四章，學習震源機制解（Focal Mechanism），也就是俗稱的「海灘球」。我們學會了如何手繪震源機制球，並利用 Google Colab 寫 Python 程式驗證手繪結果。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>我學到震源機制球其實是地震斷層錯動方式的投影。透過 <strong>strike（走向）、dip（傾角）、rake（滑移角）</strong>，可以描述斷層面的幾何與滑移方向：</p>
      <p>• <strong>逆斷層</strong>：受擠壓，上盤上移，海灘球中間黑色<br>
      • <strong>正斷層</strong>：受拉張，上盤下移，海灘球兩側黑色<br>
      • <strong>走向滑移斷層</strong>：水平錯動，海灘球四象限黑白相間</p>
      <p>更重要的是，單靠震源機制球<strong>通常無法直接判斷哪一個節面是真正斷層面</strong>，必須結合地體構造背景、餘震分布、地表破裂或其他地質資料才能進一步判斷。</p>
      <p>在 Kamchatka 震源機制解報告中，我把巨大隱沒帶地震與震源機制球判讀結合起來，學到低角度傾斜面通常較符合隱沒帶板塊介面的幾何特徵。</p>
      
      <h3>📸 手繪海灘球練習</h3>
      <div class="photo-gallery">
        <div class="photo-item" onclick="openLightbox('手繪2025 Kamchatka Peninsula, Russia Earthquake.jpeg')">
          <img src="手繪2025 Kamchatka Peninsula, Russia Earthquake.jpeg" alt="手繪 Kamchatka 地震海灘球">
          <div class="photo-caption">手繪 Kamchatka 地震震源機制球</div>
        </div>
        <div class="photo-item" onclick="openLightbox('上課練習範例1.jpeg')">
          <img src="上課練習範例1.jpeg" alt="上課練習範例 1">
          <div class="photo-caption">上課練習：海灘球投影判讀技巧 (1)</div>
        </div>
        <div class="photo-item" onclick="openLightbox('上課練習範例2.jpeg')">
          <img src="上課練習範例2.jpeg" alt="上課練習範例 2">
          <div class="photo-caption">上課練習：海灘球投影判讀技巧 (2)</div>
        </div>
      </div>
      
      <h3>📋 成果</h3>
      <div style="background:var(--bg-glass);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:1.5rem;margin:1rem 0;">
        <p style="margin:0 0 0.5rem"><strong>🤗 CH4.1 & 4.2 HuggingFace 互動網頁</strong></p>
        <p style="margin:0;font-size:0.9rem;">製作了地震學第四章 4.1 與 4.2 的互動式報告，涵蓋震源機制基礎、海灘球判讀教學、不同斷層類型的視覺化比較。</p>
      </div>
      <div class="modal-links">
        <a href="2025_Kamchatka_震源機制解報告.pdf" target="_blank" class="modal-link-btn btn-pdf">📄 Kamchatka 震源機制解報告 (PDF)</a>
        <a href="https://huggingface.co/spaces/tspokai/CH4.1_4.2?logs=container" target="_blank" class="modal-link-btn btn-hf">🤗 CH4.1 & 4.2 互動網頁</a>
      </div>
    `
  },
  13: {
    date: '2026 / 05 / 20',
    title: '✍️ WEEK 13 — P波初動手繪震源機制解',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>這週進行了硬核的<strong>純手繪實作</strong>。從 P 檔（24271505.P25）中讀出各個測站的方位角、起飛角與初動極性，然後手繪出完整的震源機制球。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>操作步驟如下：</p>
      <p>1️⃣ 從 P 檔讀取測站的 <strong>azimuth（方位角）、take-off angle（起飛角）、初動極性（Up/Down）</strong><br>
      2️⃣ 使用 Wulff net 將測站點位投影到二維平面<br>
      3️⃣ 分辨壓縮區（初動上推）與拉張區（初動下拉）<br>
      4️⃣ 劃出兩個相互垂直的<strong>節面（Nodal planes）</strong></p>
      <p>這個過程讓我完全理解了電腦程式在畫海灘球背後的數學與幾何邏輯。以前我只看到最後漂亮的震源機制球，現在我知道背後其實是一筆一筆測站資料、一個一個初動方向，以及不斷修正節面位置的判讀過程。</p>
      
      <h3>📋 成果：Focal Mechanism 互動網頁</h3>
      <div style="background:var(--bg-glass);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:1.5rem;margin:1rem 0;">
        <p style="margin:0 0 0.5rem"><strong>🌐 Focal Mechanism 互動視覺化網頁</strong></p>
        <p style="margin:0;font-size:0.9rem;">包含 P 波初動判讀教學、手動繪製訣竅整理、震源機制球原理互動演示、以及 24271505.P25 檔案分析的完整 Demo。使用者可以即時調整 strike/dip/rake 參數，觀看海灘球即時變化。</p>
      </div>
      <div class="modal-links">
        <a href="https://tsengpokai.github.io/Focal-Mechanism/" target="_blank" class="modal-link-btn btn-web">🌐 前往觀看：Focal Mechanism 互動網頁</a>
      </div>
    `
  },
  14: {
    date: '2026 / 05 / 27',
    title: '🤖 WEEK 14 — Raspberry Pi 地震儀實作',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>這是這學期最令我興奮的專案！我們使用了 <strong>Raspberry Pi + MPU6050（六軸陀螺儀與加速度計）</strong>，透過麵包板接線與 I2C 通訊，打造出屬於自己的小型 IoT 地震儀。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>我們撰寫 Python 程式即時讀取三軸加速度資料，並加入了：</p>
      <p>• <strong>高通濾波</strong>：去除重力影響，只保留震動訊號<br>
      • <strong>STA/LTA 演算法</strong>：透過短長天期平均法自動觸發判斷地震事件<br>
      • <strong>PGA 計算</strong>：計算地動加速度峰值<br>
      • <strong>位移趨勢分析</strong>：透過積分計算相對位移</p>
      <p>這讓我把地震學從課本中的理論、SmartSolo 的專業儀器，延伸到自己可以動手組裝的教學型地震儀。我開始理解地震觀測系統的基本架構：<strong>感測 → 記錄 → 分析 → 判斷 → 傳輸 → 警示</strong>。</p>
      
      <h3>📸 Raspberry Pi 地震儀成果</h3>
      <div class="photo-gallery">
        <div class="photo-item" onclick="openLightbox('螢幕擷取畫面 2026-06-10 001426.png')">
          <img src="螢幕擷取畫面 2026-06-10 001426.png" alt="Bangka-07 地震事件分析報告 Discord 推播">
          <div class="photo-caption">第七組 Bangka-07 自動生成的地震事件分析報告（Discord 推播）</div>
        </div>
        <div class="photo-item" onclick="openLightbox('螢幕擷取畫面 2026-06-10 001450.png')">
          <img src="螢幕擷取畫面 2026-06-10 001450.png" alt="三方向相對位移趨勢分析截圖">
          <div class="photo-caption">三方向相對位移趨勢分析，有效震動區間的漂移積分</div>
        </div>
      </div>
      
      <p>以下是我們 MPU6050 教學展示型 IoT 地震觀測站的高清分析圖表：</p>
      
      <div class="photo-gallery">
        <div class="photo-item" onclick="openLightbox('BANGKA07_20260608_140523_report.png')">
          <img src="BANGKA07_20260608_140523_report.png" alt="完整儀表板報告">
          <div class="photo-caption">完整儀表板：含高通濾波後三軸波形、STA/LTA 特徵函數、頻譜分析 (FFT)、滑動 RMS、陀螺儀角速度波形、事件資訊總覽</div>
        </div>
        <div class="photo-item" onclick="openLightbox('BANGKA07_20260608_140523_displacement_trend.webp')">
          <img src="BANGKA07_20260608_140523_displacement_trend.webp" alt="三方向相對位移趨勢圖">
          <div class="photo-caption">去漂移展示版的三方向相對位移趨勢圖，最大相對位移 69.18 mm</div>
        </div>
      </div>
    `
  },
  15: {
    date: '2026 / 06 / 03',
    title: '📄 WEEK 15 — Overleaf 學術報告製作',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>接近學期尾聲，老師教我們使用 <strong>LaTeX 與 Overleaf</strong> 製作專業的學術報告與簡報。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>地震學不只需要會觀測與分析，也需要能把研究結果清楚呈現。比起 Word，LaTeX 能夠完美處理複雜的數學公式與排版，讓我們的期末書面報告看起來就像是在專業期刊上發表的學術論文一樣。</p>
      <p>透過 Overleaf 的線上協作功能，我也學到了<strong>如何與團隊成員同時編輯同一份報告</strong>，這對未來的研究生涯非常有幫助。</p>
      
      <h3>📋 成果</h3>
      <p>完成 LaTeX 排版技能學習，包含公式編輯、圖表引用、參考文獻管理、雙欄排版等學術報告必備技巧。</p>
    `
  },
  16: {
    date: '2026 / 06 / 10',
    title: '🎉 WEEK 16 — 期末報告 — 就是這個網頁！',
    content: `
      <h3>📖 這週在做什麼？</h3>
      <p>所有的終點都是新的起點！我們將這 16 週的學習歷程，包含了所有的文本、照片、PDF 報告、互動實驗，全部濃縮製作成了你現在正在觀看的這個「期末報告互動網頁」。</p>
      
      <h3>🎓 學到了什麼？</h3>
      <p>製作期末報告的過程本身就是一次學習——如何將龐大的學習歷程整理成有邏輯的時間軸、如何把文字搭配圖片讓內容更生動、如何設計互動遊戲讓知識傳達更有效果。</p>
      
      <h3>📋 成果</h3>
      <p>你現在看到的這整個網頁就是最終成果！包含 16 週時間軸、詳細子頁面、3 個互動小遊戲、國震中心照片集、手繪海灘球、Raspberry Pi 分析報告等完整內容。</p>
      <p>希望你喜歡這個充滿互動性與設計感的學期回顧！現在，去上面的遊戲區挑戰看看你吸收了多少知識吧！ 🚀</p>
    `
  }
};

// --------------------------------------------
// 2. Navigation & Scrolling Effects
// --------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initSeismicCanvas();
  setupObservers();
  setupNav();
});

function setupObservers() {
  const options = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        if (entry.target.classList.contains('stat-card')) {
          const numberEl = entry.target.querySelector('.stat-number');
          const target = parseInt(numberEl.getAttribute('data-target'));
          animateValue(numberEl, 0, target, 2000);
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.timeline-item, .stat-card, .game-card').forEach(el => {
    if (el.hasAttribute('data-delay')) {
      el.style.transitionDelay = el.getAttribute('data-delay') + 'ms';
    }
    observer.observe(el);
  });
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function setupNav() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.floating-nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// --------------------------------------------
// 3. Modal & Lightbox Logic
// --------------------------------------------
function openModal(weekNum) {
  const data = weeklyData[weekNum];
  if (!data) return;

  document.getElementById('modalDate').innerText = data.date;
  document.getElementById('modalTitle').innerText = data.title;
  document.getElementById('modalBody').innerHTML = data.content;
  
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay') && !e.target.classList.contains('modal-close')) {
    return;
  }
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function openLightbox(imgSrc) {
  document.getElementById('lightboxImg').src = imgSrc;
  document.getElementById('lightboxOverlay').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightboxOverlay').classList.remove('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeLightbox();
    closeGameModal();
  }
});

// --------------------------------------------
// 4. Visual Effects
// --------------------------------------------
function createParticles() {
  const container = document.getElementById('particles');
  const count = 30;
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
    particle.style.animationDelay = (Math.random() * 5) + 's';
    container.appendChild(particle);
  }
}

function initSeismicCanvas() {
  const canvas = document.getElementById('seismicCanvas');
  const ctx = canvas.getContext('2d');
  
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = 200;
  };
  
  window.addEventListener('resize', resize);
  resize();

  let time = 0;
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      
      const freq = 0.01 + (j * 0.005);
      const amp = 20 + (j * 15);
      
      for (let i = 0; i < canvas.width; i += 5) {
        const distFromCenter = Math.abs(i - canvas.width / 2);
        const burstMultiplier = Math.max(0.1, 1 - (distFromCenter / (canvas.width / 3)));
        const noise = (Math.random() - 0.5) * 10 * burstMultiplier;
        const y = canvas.height / 2 + Math.sin(i * freq + time + j) * amp * burstMultiplier + noise;
        ctx.lineTo(i, y);
      }
      
      const colors = ['rgba(0, 245, 212, 0.5)', 'rgba(187, 134, 252, 0.3)', 'rgba(105, 240, 174, 0.2)'];
      ctx.strokeStyle = colors[j];
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    time -= 0.05;
    requestAnimationFrame(draw);
  }
  
  draw();
}

// --------------------------------------------
// 5. Games Logic
// --------------------------------------------
function closeGameModal(e) {
  if (e && e.target !== document.getElementById('gameModalOverlay') && !e.target.classList.contains('game-close-btn')) {
    return;
  }
  document.getElementById('gameModalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function showGame(title, htmlContent) {
  document.getElementById('gameTitle').innerText = title;
  document.getElementById('gameContent').innerHTML = htmlContent;
  document.getElementById('gameModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// --- Game 1: Quiz ---
const quizQuestions = [
  {
    q: "地震波中，哪一種波傳遞速度最快，且能在固體與液體中傳播？",
    options: ["S 波（剪力波）", "P 波（壓縮波）", "Love 波", "Rayleigh 波"],
    ans: 1,
    exp: "P 波是縱波，靠介質的壓縮與膨脹傳遞，速度最快，且能在固體、液體與氣體中傳遞。"
  },
  {
    q: "震源機制球（海灘球）中，黑色的區域代表什麼？",
    options: ["拉張區（Dilatation）", "無地震波區", "壓縮區（Compression）", "斷層破裂區"],
    ans: 2,
    exp: "黑色區域代表波的第一動是朝向測站的（壓縮區/推），白色代表遠離測站（拉張區/拉）。"
  },
  {
    q: "發現地球外核是液態的主要證據為何？",
    options: ["P 波在外核速度突然變快", "S 波無法穿透外核而產生陰影區", "地球磁場的變動", "深海鑽探採樣"],
    ans: 1,
    exp: "S 波是剪力波，無法在液體中傳遞，因此在震央距 103° 以外會產生 S 波陰影區，證明外核為液態。"
  },
  {
    q: "我們在 Raspberry Pi IoT 實驗中，主要使用什麼演算法來「自動觸發」判斷地震發生？",
    options: ["傅立葉轉換（FFT）", "AI 深度學習", "STA/LTA（短長天期平均法）", "高通濾波（High-pass filter）"],
    ans: 2,
    exp: "STA/LTA 演算法透過計算短期平均值與長期平均值的比值，當能量突然增加（比值大於閾值）時，判斷為地震觸發。"
  },
  {
    q: "國震中心的抗震設計理念是什麼？",
    options: ["建築物必須完全不受損", "小震不壞、中震可修、大震不倒", "只要不倒塌就好", "所有建築都加裝阻尼器"],
    ans: 1,
    exp: "地震工程的目標不是讓建築永遠不受損，而是透過「小震不壞、中震可修、大震不倒」的理念，讓風險控制在可接受範圍內。"
  },
  {
    q: "SmartSolo 節點式地震儀記錄的三分量 Z / E / N 各代表什麼方向？",
    options: ["Z 東西、E 南北、N 垂直", "Z 垂直、E 東西、N 南北", "Z 南北、E 垂直、N 東西", "隨機排列，無固定方向"],
    ans: 1,
    exp: "Z 軸記錄垂直向震動，E 軸記錄東西向水平晃動，N 軸記錄南北向水平晃動。"
  },
  {
    q: "在震源機制球中，strike、dip、rake 分別描述什麼？",
    options: ["震央位置、震源深度、規模大小", "斷層走向、傾角、滑移角", "地震波速度、頻率、振幅", "P 波方向、S 波方向、面波方向"],
    ans: 1,
    exp: "strike 描述斷層面的走向，dip 描述傾角，rake 描述滑移方向，三者完整定義了斷層的幾何與錯動方式。"
  },
  {
    q: "以下何者最能說明「盆地效應」對地震的影響？",
    options: ["盆地會阻擋地震波進入", "盆地沉積層可能放大特定週期的震波", "盆地內的地震波比山區弱", "盆地的地質比較穩定"],
    ans: 1,
    exp: "盆地沉積層可能放大中長週期地震動，對中高樓層建築特別危險，這就是所謂的地盤放大效應或場址效應。"
  },
  {
    q: "彈性回跳理論（Elastic Rebound Theory）的核心概念是什麼？",
    options: ["地震是由火山爆發引起的", "地殼岩石累積彈性應變能後在斷層面上瞬間破裂釋放", "地震波會彈回震源", "板塊碰撞後會彈開"],
    ans: 1,
    exp: "彈性回跳理論說明，地殼岩石在板塊運動的推擠下逐漸累積彈性應變能，當斷層面上的摩擦力無法承受時，岩石瞬間破裂釋放能量。"
  },
  {
    q: "為什麼「高頻地震波傷低樓、低頻地震波傷高樓」？",
    options: ["高樓比較堅固", "共振效應：建築物的自然頻率與地震波頻率接近時振幅放大", "高頻波能量比較大", "這個說法其實是錯的"],
    ans: 1,
    exp: "低矮建築自然頻率較高，容易與高頻地震波產生共振；高層建築自然頻率較低，容易與長週期（低頻）地震波產生共振，導致更大的搖晃。"
  }
];

let currentQuizIdx = 0;
let quizScore = 0;

function startQuizGame() {
  currentQuizIdx = 0;
  quizScore = 0;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  if (currentQuizIdx >= quizQuestions.length) {
    let msg = '';
    const pct = quizScore / quizQuestions.length;
    if (pct === 1) msg = '🏆 太神啦！你根本是地震學大師！完美滿分！';
    else if (pct >= 0.8) msg = '🎉 非常優秀！你對地震學的掌握令人印象深刻！';
    else if (pct >= 0.6) msg = '👏 不錯喔！大部分都答對了，再複習一下會更厲害！';
    else msg = '💪 加油！回去翻翻時間軸的內容，你可以做得更好！';

    const html = `
      <div class="quiz-score">
        <div class="score-number">${quizScore} / ${quizQuestions.length}</div>
        <p>${msg}</p>
        <button class="game-start-btn" onclick="startQuizGame()" style="margin-top:2rem">🔄 再玩一次</button>
      </div>
    `;
    showGame('地震知識問答 Quiz', html);
    return;
  }

  const qData = quizQuestions[currentQuizIdx];
  const progress = ((currentQuizIdx) / quizQuestions.length) * 100;
  
  let optionsHtml = '';
  qData.options.forEach((opt, idx) => {
    optionsHtml += `<button class="quiz-option" onclick="selectQuizAnswer(${idx})">${opt}</button>`;
  });

  const html = `
    <div class="quiz-progress">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${progress}%"></div></div>
      <span>${currentQuizIdx + 1} / ${quizQuestions.length}</span>
    </div>
    <div class="quiz-question">${currentQuizIdx + 1}. ${qData.q}</div>
    <div class="quiz-options" id="quizOptions">
      ${optionsHtml}
    </div>
    <div id="quizFeedback" class="quiz-feedback"></div>
    <button id="quizNextBtn" class="quiz-next-btn" onclick="nextQuizQuestion()">下一題 ➔</button>
  `;
  
  showGame('地震知識問答 Quiz', html);
}

window.selectQuizAnswer = function(selectedIdx) {
  const qData = quizQuestions[currentQuizIdx];
  const options = document.getElementById('quizOptions').children;
  const feedback = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('quizNextBtn');

  for (let i = 0; i < options.length; i++) {
    options[i].classList.add('disabled');
    if (i === qData.ans) {
      options[i].classList.add('correct');
    }
  }

  if (selectedIdx === qData.ans) {
    quizScore++;
    feedback.innerText = '✅ 答對了！' + qData.exp;
    feedback.className = 'quiz-feedback show correct-feedback';
  } else {
    options[selectedIdx].classList.add('wrong');
    feedback.innerText = '❌ 答錯了！' + qData.exp;
    feedback.className = 'quiz-feedback show wrong-feedback';
  }

  nextBtn.classList.add('show');
};

window.nextQuizQuestion = function() {
  currentQuizIdx++;
  renderQuizQuestion();
};


// --- Game 2: Beach Ball ---
let currentBeachballIdx = 0;
const beachballQuestions = [
  {
    type: "逆斷層（Reverse Fault）",
    desc: "受擠壓應力，上盤向上移動。海灘球中間為壓縮區（著色）。",
    correct: 0
  },
  {
    type: "正斷層（Normal Fault）",
    desc: "受拉張應力，上盤向下移動。海灘球兩側為壓縮區（著色），中間為白色。",
    correct: 1
  },
  {
    type: "走向滑移斷層（Strike-slip Fault）",
    desc: "兩盤水平錯動。海灘球呈現四象限著色/白色相間。",
    correct: 2
  }
];

function drawBeachball(canvasId, type) {
  const canvas = document.getElementById(canvasId);
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 100, 100);
  
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#e8eaf6';
  
  ctx.beginPath();
  ctx.arc(50, 50, 48, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#00f5d4';

  if (type === 'reverse') {
    ctx.beginPath();
    ctx.ellipse(50, 50, 25, 48, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  } 
  else if (type === 'normal') {
    ctx.beginPath();
    ctx.arc(50, 50, 48, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#0d1230';
    ctx.beginPath();
    ctx.ellipse(50, 50, 25, 48, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  else if (type === 'strike') {
    ctx.beginPath();
    ctx.moveTo(50, 2);
    ctx.lineTo(50, 98);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(2, 50);
    ctx.lineTo(98, 50);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(50, 50, 48, 0, Math.PI/2);
    ctx.lineTo(50,50);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(50, 50, 48, Math.PI, Math.PI*1.5);
    ctx.lineTo(50,50);
    ctx.fill();
  }
}

window.startBeachBallGame = function() {
  currentBeachballIdx = Math.floor(Math.random() * 3);
  const q = beachballQuestions[currentBeachballIdx];
  
  const html = `
    <div class="beachball-game">
      <div class="beachball-question">請選出符合「<span class="gradient-text">${q.type}</span>」的海灘球：</div>
      <p style="font-size:0.9rem; color:var(--text-secondary)">提示：${q.desc}</p>
      
      <div class="beachball-options" id="bbOptions">
        <div class="beachball-option" onclick="checkBeachball(0)">
          <canvas id="bb-canv-0" width="100" height="100"></canvas>
          <span>逆斷層型</span>
        </div>
        <div class="beachball-option" onclick="checkBeachball(1)">
          <canvas id="bb-canv-1" width="100" height="100"></canvas>
          <span>正斷層型</span>
        </div>
        <div class="beachball-option" onclick="checkBeachball(2)">
          <canvas id="bb-canv-2" width="100" height="100"></canvas>
          <span>走向滑移型</span>
        </div>
      </div>
      
      <div id="bbFeedback" class="quiz-feedback" style="text-align:left"></div>
      <button class="game-start-btn" style="margin-top:1rem" onclick="startBeachBallGame()">🔄 換一題</button>
    </div>
  `;
  
  showGame('震源機制球配對', html);
  
  setTimeout(() => {
    drawBeachball('bb-canv-0', 'reverse');
    drawBeachball('bb-canv-1', 'normal');
    drawBeachball('bb-canv-2', 'strike');
  }, 100);
}

window.checkBeachball = function(idx) {
  const q = beachballQuestions[currentBeachballIdx];
  const options = document.getElementById('bbOptions').children;
  const feedback = document.getElementById('bbFeedback');
  
  for (let i = 0; i < options.length; i++) {
    options[i].classList.add('disabled');
    if (i === q.correct) {
      options[i].classList.add('correct');
    }
  }
  
  if (idx === q.correct) {
    feedback.innerText = '✅ 完美！你完全看懂海灘球了！';
    feedback.className = 'quiz-feedback show correct-feedback';
  } else {
    options[idx].classList.add('wrong');
    feedback.innerText = '❌ 哎呀，選錯了！請再看看提示說明喔。';
    feedback.className = 'quiz-feedback show wrong-feedback';
  }
}


// --- Game 3: Wave Sort ---
let sortItems = [
  { id: 'rayleigh', emoji: '🌊', name: 'Rayleigh 波（R波）', hint: '表面波，造成橢圓滾動', speed: 4 },
  { id: 'pwave', emoji: '⚡', name: 'P 波（壓縮波）', hint: '體波，縱波', speed: 1 },
  { id: 'love', emoji: '🐍', name: 'Love 波（L波）', hint: '表面波，水平蛇行', speed: 3 },
  { id: 'swave', emoji: '〰️', name: 'S 波（剪力波）', hint: '體波，橫波', speed: 2 }
];

window.startWaveSortGame = function() {
  const shuffled = [...sortItems].sort(() => Math.random() - 0.5);
  
  let listHtml = '';
  shuffled.forEach((item) => {
    listHtml += `
      <div class="sortable-item" draggable="true" data-speed="${item.speed}">
        <div class="wave-emoji">${item.emoji}</div>
        <div class="wave-name">${item.name} <div class="wave-hint">${item.hint}</div></div>
        <div>↕️</div>
      </div>
    `;
  });

  const html = `
    <div class="wave-sort-game">
      <div class="wave-sort-instruction">請拖曳項目，將地震波依照「傳播速度」由 <strong>最快（上）</strong> 排到 <strong>最慢（下）</strong>：</div>
      <div class="sortable-list" id="sortList">
        ${listHtml}
      </div>
      <div id="sortResult" class="sort-result"></div>
      <button class="sort-check-btn" onclick="checkSort()">驗證答案 ✔️</button>
    </div>
  `;
  
  showGame('地震波速度排序', html);
  
  setTimeout(initDragAndDrop, 100);
}

function initDragAndDrop() {
  const list = document.getElementById('sortList');
  let draggedItem = null;

  list.addEventListener('dragstart', e => {
    draggedItem = e.target.closest('.sortable-item');
    setTimeout(() => draggedItem.classList.add('dragging'), 0);
  });

  list.addEventListener('dragend', e => {
    const item = e.target.closest('.sortable-item');
    if (item) item.classList.remove('dragging');
    draggedItem = null;
  });

  list.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(list, e.clientY);
    const draggingElement = document.querySelector('.dragging');
    if (!draggingElement) return;
    if (afterElement == null) {
      list.appendChild(draggingElement);
    } else {
      list.insertBefore(draggingElement, afterElement);
    }
  });
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.sortable-item:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

window.checkSort = function() {
  const items = document.querySelectorAll('#sortList .sortable-item');
  let isCorrect = true;
  
  items.forEach((item, index) => {
    const expectedSpeed = index + 1;
    const actualSpeed = parseInt(item.getAttribute('data-speed'));
    if (expectedSpeed !== actualSpeed) {
      isCorrect = false;
    }
  });
  
  const resultDiv = document.getElementById('sortResult');
  if (isCorrect) {
    resultDiv.innerHTML = '✅ <strong>完全正確！</strong><br>速度順序為：P波 > S波 > Love波 > Rayleigh波';
    resultDiv.className = 'sort-result show correct-sort';
  } else {
    resultDiv.innerHTML = '❌ <strong>順序有誤！</strong><br>提示：體波一定比表面波快，P波比S波快喔！';
    resultDiv.className = 'sort-result show wrong-sort';
  }
}
