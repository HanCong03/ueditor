/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['ui/toolbar.js']) {
  _$jscoverage['ui/toolbar.js'] = [];
  _$jscoverage['ui/toolbar.js'][1] = 0;
  _$jscoverage['ui/toolbar.js'][2] = 0;
  _$jscoverage['ui/toolbar.js'][6] = 0;
  _$jscoverage['ui/toolbar.js'][7] = 0;
  _$jscoverage['ui/toolbar.js'][9] = 0;
  _$jscoverage['ui/toolbar.js'][12] = 0;
  _$jscoverage['ui/toolbar.js'][13] = 0;
  _$jscoverage['ui/toolbar.js'][16] = 0;
  _$jscoverage['ui/toolbar.js'][19] = 0;
  _$jscoverage['ui/toolbar.js'][20] = 0;
  _$jscoverage['ui/toolbar.js'][21] = 0;
  _$jscoverage['ui/toolbar.js'][23] = 0;
  _$jscoverage['ui/toolbar.js'][28] = 0;
  _$jscoverage['ui/toolbar.js'][29] = 0;
  _$jscoverage['ui/toolbar.js'][30] = 0;
  _$jscoverage['ui/toolbar.js'][32] = 0;
  _$jscoverage['ui/toolbar.js'][35] = 0;
  _$jscoverage['ui/toolbar.js'][38] = 0;
}
_$jscoverage['ui/toolbar.js'].source = ["<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","    <span class=\"k\">var</span> utils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>utils<span class=\"k\">,</span>","        uiUtils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>uiUtils<span class=\"k\">,</span>","        UIBase <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>UIBase<span class=\"k\">,</span>","        Toolbar <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>Toolbar <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">(</span>options<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>initOptions<span class=\"k\">(</span>options<span class=\"k\">);</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>initToolbar<span class=\"k\">();</span>","        <span class=\"k\">}</span><span class=\"k\">;</span>","    Toolbar<span class=\"k\">.</span>prototype <span class=\"k\">=</span> <span class=\"k\">{</span>","        items<span class=\"k\">:</span> <span class=\"k\">null</span><span class=\"k\">,</span>","        initToolbar<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>items <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>items <span class=\"k\">||</span> <span class=\"k\">[];</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>initUIBase<span class=\"k\">();</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        add<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>item<span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">.</span>push<span class=\"k\">(</span>item<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        getHtmlTpl<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"k\">var</span> buff <span class=\"k\">=</span> <span class=\"k\">[];</span>","            <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i<span class=\"k\">=</span><span class=\"s\">0</span><span class=\"k\">;</span> i<span class=\"k\">&lt;</span><span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">.</span>length<span class=\"k\">;</span> i<span class=\"k\">++)</span> <span class=\"k\">{</span>","                buff<span class=\"k\">[</span>i<span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">[</span>i<span class=\"k\">].</span>renderHtml<span class=\"k\">();</span>","            <span class=\"k\">}</span>","            <span class=\"k\">return</span> <span class=\"s\">'&lt;div id=\"##\" class=\"edui-toolbar %%\" onselectstart=\"return false;\" onmousedown=\"return $$._onMouseDown(event, this);\"&gt;'</span> <span class=\"k\">+</span>","                buff<span class=\"k\">.</span>join<span class=\"k\">(</span><span class=\"s\">''</span><span class=\"k\">)</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;/div&gt;'</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        postRender<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"k\">var</span> box <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>getDom<span class=\"k\">();</span>","            <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i<span class=\"k\">=</span><span class=\"s\">0</span><span class=\"k\">;</span> i<span class=\"k\">&lt;</span><span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">.</span>length<span class=\"k\">;</span> i<span class=\"k\">++)</span> <span class=\"k\">{</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>items<span class=\"k\">[</span>i<span class=\"k\">].</span>postRender<span class=\"k\">();</span>","            <span class=\"k\">}</span>","            uiUtils<span class=\"k\">.</span>makeUnselectable<span class=\"k\">(</span>box<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        _onMouseDown<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"k\">return</span> <span class=\"k\">false</span><span class=\"k\">;</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","    utils<span class=\"k\">.</span>inherits<span class=\"k\">(</span>Toolbar<span class=\"k\">,</span> UIBase<span class=\"k\">);</span>","","<span class=\"k\">}</span><span class=\"k\">)();</span>"];
_$jscoverage['ui/toolbar.js'][1]++;
(function () {
  _$jscoverage['ui/toolbar.js'][2]++;
  var utils = baidu.editor.utils, uiUtils = baidu.editor.ui.uiUtils, UIBase = baidu.editor.ui.UIBase, Toolbar = (baidu.editor.ui.Toolbar = (function (options) {
  _$jscoverage['ui/toolbar.js'][6]++;
  this.initOptions(options);
  _$jscoverage['ui/toolbar.js'][7]++;
  this.initToolbar();
}));
  _$jscoverage['ui/toolbar.js'][9]++;
  Toolbar.prototype = {items: null, initToolbar: (function () {
  _$jscoverage['ui/toolbar.js'][12]++;
  this.items = (this.items || []);
  _$jscoverage['ui/toolbar.js'][13]++;
  this.initUIBase();
}), add: (function (item) {
  _$jscoverage['ui/toolbar.js'][16]++;
  this.items.push(item);
}), getHtmlTpl: (function () {
  _$jscoverage['ui/toolbar.js'][19]++;
  var buff = [];
  _$jscoverage['ui/toolbar.js'][20]++;
  for (var i = 0; (i < this.items.length); (i++)) {
    _$jscoverage['ui/toolbar.js'][21]++;
    buff[i] = this.items[i].renderHtml();
}
  _$jscoverage['ui/toolbar.js'][23]++;
  return ("<div id=\"##\" class=\"edui-toolbar %%\" onselectstart=\"return false;\" onmousedown=\"return $$._onMouseDown(event, this);\">" + buff.join("") + "</div>");
}), postRender: (function () {
  _$jscoverage['ui/toolbar.js'][28]++;
  var box = this.getDom();
  _$jscoverage['ui/toolbar.js'][29]++;
  for (var i = 0; (i < this.items.length); (i++)) {
    _$jscoverage['ui/toolbar.js'][30]++;
    this.items[i].postRender();
}
  _$jscoverage['ui/toolbar.js'][32]++;
  uiUtils.makeUnselectable(box);
}), _onMouseDown: (function () {
  _$jscoverage['ui/toolbar.js'][35]++;
  return false;
})};
  _$jscoverage['ui/toolbar.js'][38]++;
  utils.inherits(Toolbar, UIBase);
})();
