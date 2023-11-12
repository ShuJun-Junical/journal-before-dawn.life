import{_ as t,o as e,c as r,Q as a}from"./chunks/framework.fd8801d6.js";const g=JSON.parse('{"title":"中文文案排版指北","description":"","frontmatter":{},"headers":[],"relativePath":"typo-test.md","filePath":"typo-test.md"}'),o={name:"typo-test.md"},d=a('<h1 id="中文文案排版指北" tabindex="-1">中文文案排版指北 <a class="header-anchor" href="#中文文案排版指北" aria-label="Permalink to &quot;中文文案排版指北&quot;">​</a></h1><p>统一中文文案、排版的相关用法，降低团队成员之间的沟通成本，增强网站气质。</p><h2 id="空格" tabindex="-1">空格 <a class="header-anchor" href="#空格" aria-label="Permalink to &quot;空格&quot;">​</a></h2><blockquote><p>「有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。</p><p>与大家共勉之。」——<a href="https://github.com/vinta/pangu.js" target="_blank" rel="noreferrer">vinta/paranoid-auto-spacing</a></p></blockquote><h3 id="中英文之间需要增加空格" tabindex="-1">中英文之间需要增加空格 <a class="header-anchor" href="#中英文之间需要增加空格" aria-label="Permalink to &quot;中英文之间需要增加空格&quot;">​</a></h3><p>正确：</p><blockquote><p>在 LeanCloud 上，数据存储是围绕 <code>AVObject</code> 进行的。</p></blockquote><p>错误：</p><blockquote><p>在 LeanCloud 上，数据存储是围绕<code>AVObject</code>进行的。</p><p>在 LeanCloud 上，数据存储是围绕<code>AVObject</code> 进行的。</p></blockquote><p>完整的正确用法：</p><blockquote><p>在 LeanCloud 上，数据存储是围绕 <code>AVObject</code> 进行的。每个 <code>AVObject</code> 都包含了与 JSON 兼容的 key-value 对应的数据。数据是 schema-free 的，你不需要在每个 <code>AVObject</code> 上提前指定存在哪些键，只要直接设定对应的 key-value 即可。</p></blockquote><p>例外：「豆瓣 FM」等产品名词，按照官方所定义的格式书写。</p><h3 id="中文与数字之间需要增加空格" tabindex="-1">中文与数字之间需要增加空格 <a class="header-anchor" href="#中文与数字之间需要增加空格" aria-label="Permalink to &quot;中文与数字之间需要增加空格&quot;">​</a></h3><p>正确：</p><blockquote><p>今天出去买菜花了 5000 元。</p></blockquote><p>错误：</p><blockquote><p>今天出去买菜花了 5000 元。</p><p>今天出去买菜花了 5000 元。</p></blockquote><h3 id="数字与单位之间需要增加空格" tabindex="-1">数字与单位之间需要增加空格 <a class="header-anchor" href="#数字与单位之间需要增加空格" aria-label="Permalink to &quot;数字与单位之间需要增加空格&quot;">​</a></h3><p>正确：</p><blockquote><p>我家的光纤入屋宽带有 10 Gbps，SSD 一共有 20 TB</p></blockquote><p>错误：</p><blockquote><p>我家的光纤入屋宽带有 10Gbps，SSD 一共有 20TB</p></blockquote><p>例外：度数／百分比与数字之间不需要增加空格：</p><p>正确：</p><blockquote><p>角度为 90° 的角，就是直角。</p><p>新 MacBook Pro 有 15% 的 CPU 性能提升。</p></blockquote><p>错误：</p><blockquote><p>角度为 90 ° 的角，就是直角。</p><p>新 MacBook Pro 有 15 % 的 CPU 性能提升。</p></blockquote><h3 id="全角标点与其他字符之间不加空格" tabindex="-1">全角标点与其他字符之间不加空格 <a class="header-anchor" href="#全角标点与其他字符之间不加空格" aria-label="Permalink to &quot;全角标点与其他字符之间不加空格&quot;">​</a></h3><p>正确：</p><blockquote><p>刚刚买了一部 iPhone，好开心！</p></blockquote><p>错误：</p><blockquote><p>刚刚买了一部 iPhone ，好开心！</p><p>刚刚买了一部 iPhone， 好开心！</p></blockquote><h3 id="用-text-spacing-来挽救" tabindex="-1">用 <code>text-spacing</code> 来挽救？ <a class="header-anchor" href="#用-text-spacing-来挽救" aria-label="Permalink to &quot;用 `text-spacing` 来挽救？&quot;">​</a></h3><p>CSS Text Module Level 4 的 <a href="https://www.w3.org/TR/css-text-4/#text-spacing-property" target="_blank" rel="noreferrer"><code>text-spacing</code></a> 和 Microsoft 的 <a href="https://msdn.microsoft.com/library/ms531164(v=vs.85).aspx" target="_blank" rel="noreferrer"><code>-ms-text-autospace</code></a> 可以实现自动为中英文之间增加空白。不过目前并未普及，另外在其他应用场景，例如 macOS、iOS、Windows 等用户界面目前并不存在这个特性，所以请继续保持随手加空格的习惯。</p><h2 id="标点符号" tabindex="-1">标点符号 <a class="header-anchor" href="#标点符号" aria-label="Permalink to &quot;标点符号&quot;">​</a></h2><h3 id="不重复使用标点符号" tabindex="-1">不重复使用标点符号 <a class="header-anchor" href="#不重复使用标点符号" aria-label="Permalink to &quot;不重复使用标点符号&quot;">​</a></h3><p>虽然中国大陆的标点符号用法允许重复使用标点符号，但是这么做会破坏句子的美观性。</p><p>正确：</p><blockquote><p>德国队竟然战胜了巴西队！</p><p>她竟然对你说「喵」？！</p></blockquote><p>错误：</p><blockquote><p>德国队竟然战胜了巴西队！！</p><p>德国队竟然战胜了巴西队！！！！！！！！</p><p>她竟然对你说「喵」？？！！</p><p>她竟然对你说「喵」？！？！？？！！</p></blockquote><h2 id="全角和半角" tabindex="-1">全角和半角 <a class="header-anchor" href="#全角和半角" aria-label="Permalink to &quot;全角和半角&quot;">​</a></h2><p>不明白什么是全角（全形）与半角（半形）符号？请查看维基百科条目『<a href="https://zh.wikipedia.org/wiki/%E5%85%A8%E5%BD%A2%E5%92%8C%E5%8D%8A%E5%BD%A2" target="_blank" rel="noreferrer">全角和半角</a>』。</p><h3 id="使用全角中文标点" tabindex="-1">使用全角中文标点 <a class="header-anchor" href="#使用全角中文标点" aria-label="Permalink to &quot;使用全角中文标点&quot;">​</a></h3><p>正确：</p><blockquote><p>嗨！你知道嘛？今天前台的小妹跟我说「喵」了哎！</p><p>核磁共振成像（NMRI）是什么原理都不知道？JFGI！</p></blockquote><p>错误：</p><blockquote><p>嗨! 你知道嘛? 今天前台的小妹跟我说 &quot;喵&quot; 了哎！</p><p>嗨!你知道嘛?今天前台的小妹跟我说&quot;喵&quot;了哎！</p><p>核磁共振成像 (NMRI) 是什么原理都不知道? JFGI!</p><p>核磁共振成像(NMRI)是什么原理都不知道?JFGI!</p></blockquote><p>例外：中文句子内夹有英文书籍名、报刊名时，不应借用中文书名号，应以英文斜体表示。</p><h3 id="数字使用半角字符" tabindex="-1">数字使用半角字符 <a class="header-anchor" href="#数字使用半角字符" aria-label="Permalink to &quot;数字使用半角字符&quot;">​</a></h3><p>正确：</p><blockquote><p>这个蛋糕只卖 1000 元。</p></blockquote><p>错误：</p><blockquote><p>这个蛋糕只卖 １０００ 元。</p></blockquote><p>例外：在设计稿、宣传海报中如出现极少量数字的情形时，为方便文字对齐，是可以使用全角数字的。</p><h3 id="遇到完整的英文整句、特殊名词-其内容使用半角标点" tabindex="-1">遇到完整的英文整句、特殊名词，其内容使用半角标点 <a class="header-anchor" href="#遇到完整的英文整句、特殊名词-其内容使用半角标点" aria-label="Permalink to &quot;遇到完整的英文整句、特殊名词，其内容使用半角标点&quot;">​</a></h3><p>正确：</p><blockquote><p>乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」</p><p>推荐你阅读 <em>Hackers &amp; Painters: Big Ideas from the Computer Age</em>，非常地有趣。</p></blockquote><p>错误：</p><blockquote><p>乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」</p><p>推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。</p></blockquote><h2 id="名词" tabindex="-1">名词 <a class="header-anchor" href="#名词" aria-label="Permalink to &quot;名词&quot;">​</a></h2><h3 id="专有名词使用正确的大小写" tabindex="-1">专有名词使用正确的大小写 <a class="header-anchor" href="#专有名词使用正确的大小写" aria-label="Permalink to &quot;专有名词使用正确的大小写&quot;">​</a></h3><p>大小写相关用法原属于英文书写范畴，不属于本 wiki 讨论内容，在这里只对部分易错用法进行简述。</p><p>正确：</p><blockquote><p>使用 GitHub 登录</p><p>我们的客户有 GitHub、Foursquare、Microsoft Corporation、Google、Facebook, Inc.。</p></blockquote><p>错误：</p><blockquote><p>使用 github 登录</p><p>使用 GITHUB 登录</p><p>使用 Github 登录</p><p>使用 gitHub 登录</p><p>使用 g ｲん ĤЦ8 登录</p><p>我们的客户有 github、foursquare、microsoft corporation、google、facebook, inc.。</p><p>我们的客户有 GITHUB、FOURSQUARE、MICROSOFT CORPORATION、GOOGLE、FACEBOOK, INC.。</p><p>我们的客户有 Github、FourSquare、MicroSoft Corporation、Google、FaceBook, Inc.。</p><p>我们的客户有 gitHub、fourSquare、microSoft Corporation、google、faceBook, Inc.。</p><p>我们的客户有 g ｲん ĤЦ8、ｷ ouЯƧqu ﾑ гє、๓เςг๏ร๏Ŧt ς๏гק๏гคtเ๏ภn、900913、ƒ4ᄃëв๏๏к, IПᄃ.。</p></blockquote><p>注意：当网页中需要配合整体视觉风格而出现全部大写／小写的情形，HTML 中请使用标淮的大小写规范进行书写；并通过 <code>text-transform: uppercase;</code>／<code>text-transform: lowercase;</code> 对表现形式进行定义。</p><h3 id="不要使用不地道的缩写" tabindex="-1">不要使用不地道的缩写 <a class="header-anchor" href="#不要使用不地道的缩写" aria-label="Permalink to &quot;不要使用不地道的缩写&quot;">​</a></h3><p>正确：</p><blockquote><p>我们需要一位熟悉 TypeScript、HTML5，至少理解一种框架（如 React、Next.js）的前端开发者。</p></blockquote><p>错误：</p><blockquote><p>我们需要一位熟悉 Ts、h5，至少理解一种框架（如 RJS、nextjs）的 FED。</p></blockquote><h2 id="争议" tabindex="-1">争议 <a class="header-anchor" href="#争议" aria-label="Permalink to &quot;争议&quot;">​</a></h2><p>以下用法略带有个人色彩，即：无论是否遵循下述规则，从语法的角度来讲都是<strong>正确</strong>的。</p><h3 id="链接之间增加空格" tabindex="-1">链接之间增加空格 <a class="header-anchor" href="#链接之间增加空格" aria-label="Permalink to &quot;链接之间增加空格&quot;">​</a></h3><p>用法：</p><blockquote><p>请 <a href="#">提交一个 issue</a> 并分配给相关同事。</p><p>访问我们网站的最新动态，请 <a href="#">点击这里</a> 进行订阅！</p></blockquote><p>对比用法：</p><blockquote><p>请<a href="#">提交一个 issue</a>并分配给相关同事。</p><p>访问我们网站的最新动态，请<a href="#">点击这里</a>进行订阅！</p></blockquote><h3 id="简体中文使用直角引号" tabindex="-1">简体中文使用直角引号 <a class="header-anchor" href="#简体中文使用直角引号" aria-label="Permalink to &quot;简体中文使用直角引号&quot;">​</a></h3><p>用法：</p><blockquote><p>「老师，『有条不紊』的『紊』是什么意思？」</p></blockquote><p>对比用法：</p><blockquote><p>“老师，‘有条不紊’的‘紊’是什么意思？”</p></blockquote><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><table><thead><tr><th>仓库</th><th>系列</th><th>语言</th></tr></thead><tbody><tr><td><a href="https://github.com/vinta/pangu.js" target="_blank" rel="noreferrer">pangu.js</a></td><td>pangu</td><td>JavaScript</td></tr><tr><td><a href="https://github.com/vinta/pangu" target="_blank" rel="noreferrer">pangu-go</a></td><td>pangu</td><td>Go</td></tr><tr><td><a href="https://github.com/vinta/pangu.java" target="_blank" rel="noreferrer">pangu.java</a></td><td>pangu</td><td>Java</td></tr><tr><td><a href="https://github.com/vinta/pangu.py" target="_blank" rel="noreferrer">pangu.py</a></td><td>pangu</td><td>Python</td></tr><tr><td><a href="https://github.com/dlackty/pangu.rb" target="_blank" rel="noreferrer">pangu.rb</a></td><td>pangu</td><td>Ruby</td></tr><tr><td><a href="https://github.com/cchlorine/pangu.php" target="_blank" rel="noreferrer">pangu.php</a></td><td>pangu</td><td>PHP</td></tr><tr><td><a href="https://github.com/hotoo/pangu.vim" target="_blank" rel="noreferrer">pangu.vim</a></td><td>pangu</td><td>Vim</td></tr><tr><td><a href="https://github.com/serkodev/vue-pangu" target="_blank" rel="noreferrer">vue-pangu</a></td><td>pangu</td><td>Vue.js (Web Converter)</td></tr><tr><td><a href="https://plugins.jetbrains.com/plugin/19665-pangu" target="_blank" rel="noreferrer">intellij-pangu</a></td><td>pangu</td><td>Intellij Platform Plugin</td></tr><tr><td><a href="https://github.com/huacnlee/autocorrect" target="_blank" rel="noreferrer">autocorrect</a></td><td>autocorrect</td><td>Rust, WASM, CLI tool</td></tr><tr><td><a href="https://github.com/huacnlee/autocorrect/tree/main/autocorrect-node" target="_blank" rel="noreferrer">autocorrect-node</a></td><td>autocorrect</td><td>Node.js</td></tr><tr><td><a href="https://github.com/huacnlee/autocorrect/tree/main/autocorrect-py" target="_blank" rel="noreferrer">autocorrect-py</a></td><td>autocorrect</td><td>Python</td></tr><tr><td><a href="https://github.com/huacnlee/autocorrect/tree/main/autocorrect-rb" target="_blank" rel="noreferrer">autocorrect-rb</a></td><td>autocorrect</td><td>Ruby</td></tr><tr><td><a href="https://github.com/huacnlee/autocorrect/tree/main/autocorrect-java" target="_blank" rel="noreferrer">autocorrect-java</a></td><td>autocorrect</td><td>Java</td></tr><tr><td><a href="https://github.com/longbridgeapp/autocorrect" target="_blank" rel="noreferrer">autocorrect-go</a></td><td>autocorrect</td><td>Go</td></tr><tr><td><a href="https://github.com/NauxLiu/auto-correct" target="_blank" rel="noreferrer">autocorrect-php</a></td><td>autocorrect</td><td>PHP</td></tr><tr><td><a href="https://marketplace.visualstudio.com/items?itemName=huacnlee.autocorrect" target="_blank" rel="noreferrer">autocorrect-vscode</a></td><td>autocorrect</td><td>VS Code Extension</td></tr><tr><td><a href="https://plugins.jetbrains.com/plugin/20244-autocorrect" target="_blank" rel="noreferrer">autocorrect-idea-plugin</a></td><td>autocorrect</td><td>Intellij Platform Plugin</td></tr><tr><td><a href="https://github.com/jxlwqq/chinese-typesetting" target="_blank" rel="noreferrer">jxlwqq/chinese-typesetting</a></td><td>other</td><td>PHP</td></tr><tr><td><a href="https://github.com/sparanoid/space-lover" target="_blank" rel="noreferrer">sparanoid/space-lover</a></td><td>other</td><td>PHP (WordPress)</td></tr><tr><td><a href="https://github.com/sparanoid/grunt-auto-spacing" target="_blank" rel="noreferrer">sparanoid/grunt-auto-spacing</a></td><td>other</td><td>Node.js (Grunt)</td></tr><tr><td><a href="https://github.com/hjiang/scripts/blob/master/add-space-between-latin-and-cjk" target="_blank" rel="noreferrer">hjiang/scripts/add-space-between-latin-and-cjk</a></td><td>other</td><td>Python</td></tr><tr><td><a href="https://github.com/hustcc/hint" target="_blank" rel="noreferrer">hustcc/hint</a></td><td>other</td><td>Python</td></tr><tr><td><a href="https://github.com/n0vad3v/Tekorrect" target="_blank" rel="noreferrer">n0vad3v/Tekorrect</a></td><td>other</td><td>Python</td></tr></tbody></table><h2 id="谁在这样做" tabindex="-1">谁在这样做？ <a class="header-anchor" href="#谁在这样做" aria-label="Permalink to &quot;谁在这样做？&quot;">​</a></h2><table><thead><tr><th>网站</th><th>文案</th><th>UGC</th></tr></thead><tbody><tr><td><a href="https://www.apple.com/cn/" target="_blank" rel="noreferrer">Apple 中国</a></td><td>是</td><td>N/A</td></tr><tr><td><a href="https://www.apple.com/hk/" target="_blank" rel="noreferrer">Apple 香港</a></td><td>是</td><td>N/A</td></tr><tr><td><a href="https://www.apple.com/tw/" target="_blank" rel="noreferrer">Apple 台湾</a></td><td>是</td><td>N/A</td></tr><tr><td><a href="https://www.microsoft.com/zh-cn/" target="_blank" rel="noreferrer">Microsoft 中国</a></td><td>是</td><td>N/A</td></tr><tr><td><a href="https://www.microsoft.com/zh-hk/" target="_blank" rel="noreferrer">Microsoft 香港</a></td><td>是</td><td>N/A</td></tr><tr><td><a href="https://www.microsoft.com/zh-tw/" target="_blank" rel="noreferrer">Microsoft 台湾</a></td><td>是</td><td>N/A</td></tr><tr><td><a href="https://leancloud.cn/" target="_blank" rel="noreferrer">LeanCloud</a></td><td>是</td><td>N/A</td></tr><tr><td><a href="https://www.v2ex.com/" target="_blank" rel="noreferrer">V2EX</a></td><td>是</td><td>是</td></tr><tr><td><a href="https://apple4us.com/" target="_blank" rel="noreferrer">Apple4us</a></td><td>是</td><td>N/A</td></tr><tr><td><a href="https://ruby-china.org/" target="_blank" rel="noreferrer">Ruby China</a></td><td>是</td><td>是</td></tr><tr><td><a href="https://sspai.com/" target="_blank" rel="noreferrer">少数派</a></td><td>是</td><td>N/A</td></tr></tbody></table><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://www.thoughtco.com/guidelines-for-using-capital-letters-1691724" target="_blank" rel="noreferrer">Guidelines for Using Capital Letters - ThoughtCo.</a></li><li><a href="https://en.wikipedia.org/wiki/Letter_case" target="_blank" rel="noreferrer">Letter case - Wikipedia</a></li><li><a href="https://en.oxforddictionaries.com/grammar/punctuation" target="_blank" rel="noreferrer">Punctuation - Oxford Dictionaries</a></li><li><a href="https://owl.english.purdue.edu/owl/section/1/6/" target="_blank" rel="noreferrer">Punctuation - The Purdue OWL</a></li><li><a href="https://www.wikihow.com/Use-English-Punctuation-Correctly" target="_blank" rel="noreferrer">How to Use English Punctuation Correctly - wikiHow</a></li><li><a href="https://zh.opensuse.org/index.php?title=Help:%E6%A0%BC%E5%BC%8F" target="_blank" rel="noreferrer">格式 - openSUSE</a></li><li><a href="https://zh.wikipedia.org/wiki/%E5%85%A8%E5%BD%A2%E5%92%8C%E5%8D%8A%E5%BD%A2" target="_blank" rel="noreferrer">全形和半形 - 维基百科</a></li><li><a href="https://zh.wikipedia.org/wiki/%E5%BC%95%E8%99%9F" target="_blank" rel="noreferrer">引号 - 维基百科</a></li><li><a href="https://zh.wikipedia.org/wiki/%E7%96%91%E5%95%8F%E9%A9%9A%E5%98%86%E8%99%9F" target="_blank" rel="noreferrer">疑问惊叹号 - 维基百科</a></li></ul><h2 id="forks" tabindex="-1">Forks <a class="header-anchor" href="#forks" aria-label="Permalink to &quot;Forks&quot;">​</a></h2><p>衍生项目的用法可能与本项目存在差异。</p><ul><li><a href="https://github.com/mzlogin/chinese-copywriting-guidelines" target="_blank" rel="noreferrer">mzlogin/chinese-copywriting-guidelines</a></li></ul>',94),p=[d];function l(n,c,h,i,u,s){return e(),r("div",null,p)}const k=t(o,[["render",l]]);export{g as __pageData,k as default};
