/**
 * Docsify config
 */
gitalkConfig = {
  clientID: "ddad7a91dde4a6d2f804",
  clientSecret: "43987d27c43146f45f445ba4628133742d5a56bc",
  repo: "prism-vue-doc",
  owner: "wlx200510",
  admin: ["wlx200510"],
  perPage: 20,
  language: "en",
  labels: ["💬Gitalk"],
  pagerDirection: "last",
  distractionFreeMode: false
};
window.$docsify = {
  name: "prism-vue-doc",
  repo: "https://github.com/",
  auto2top: true,
  loadNavbar: true,
  loadSidebar: true,
  mergeNavbar: true,
  subMaxLevel: 2,
  homepage: "README.md",
  ga: "UA-122081516-1",
  search: {
    noData: {
      "/zh-cn/": "找不到结果!",
      "/": "No results!"
    },
    paths: "auto",
    placeholder: {
      "/zh-cn/": "搜索",
      "/": "Search"
    }
  },
  plugins: [
    function(hook, vm) {
      hook.beforeEach(function(html) {
        //var url =
        //  "https://github.com/wlx200510/prism-vue-doc/blob/master/" +  vm.route.file;
        var url = "https://github.com/Air-s/DocumentOnline/";
        var editHtml = "[📝 EDIT DOCUMENT](" + url + ")\n";
        return editHtml + html;
      });

      hook.doneEach(function() {
        var label, domObj, main, divEle, gitalk;
        label = vm.route.path.split("/").pop();
        domObj = Docsify.dom;
        main = domObj.getNode("#main");

        /**
         * render gittalk
         */
        if (vm.route.path.includes("zh-cn")) {
          gitalkConfig.language = "zh-CN";
        }
        Array.apply(
          null,
          document.querySelectorAll("div.gitalk-container")
        ).forEach(function(ele) {
          ele.remove();
        });
        divEle = domObj.create("div");
        divEle.id = "gitalk-container-" + label;
        divEle.className = "gitalk-container";
        divEle.style = "width: " + main.clientWidth + "px; margin: 0 auto 20px;";
        domObj.appendTo(domObj.find(".content"), divEle);
        gitalk = new Gitalk(
          Object.assign(gitalkConfig, { id: !label ? "home" : label })
        );
        gitalk.render("gitalk-container-" + label);
      });
    }
  ]
};
