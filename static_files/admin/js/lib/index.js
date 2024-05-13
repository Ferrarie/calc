
layui.extend({
	setter: "config",
	admin: "lib/admin",
	view: "lib/view"
}).define(["setter", "admin"],
function(a) {
	var e = layui.setter,
	i = layui.element,
	n = layui.admin,
	t = n.tabsPage,
	d = layui.view,
	l = function(a, d) {
		
		var l, y = r("#LAY_app_tabsheader>li"),
		b = a.replace(/(^http(s*):)|(\?[\s\S]*$)/g, "");

		var ss = y.each(function(e) {
			var i = r(this),
			n = i.attr("lay-id");
			n === a && (l = !0, t.index = e)
		})

		if (ss, d = d || "新标签页", e.pageTabs){ 
			if (l){
				var u = n.tabsBody(n.tabsPage.index).find(".layadmin-iframe");
					u[0].contentWindow.location.href = a
			}else{
				r(s).append(['<div class="layadmin-tabsbody-item layui-show">', '<iframe src="' + a + '" frameborder="0" class="layadmin-iframe"></iframe>', "</div>"].join("")), t.index = y.length, i.tabAdd(o, {
					title: "<span>" + d + "</span>",
					id: a,
					attr: b
				});
			}
		}else {
			var u = n.tabsBody(n.tabsPage.index).find(".layadmin-iframe");
			u[0].contentWindow.location.href = a
		}
			
		i.tabChange(o, a),
		n.tabsBodyChange(t.index, {
			url: a,
			text: d
		})
	},
	s = "#LAY_app_body",
	o = "layadmin-layout-tabs",
	r = layui.$;
	r(window);
	layui.config({
		base: e.base + "modules/"
	}),
	layui.each(e.extend,
	function(a, i) {
		var n = {};
		n[i] = "{/}" + e.base + "lib/extend/" + i,
		layui.extend(n)
	}),
	d().autoRender(),
	a("index", {openTabsPage: l})
});