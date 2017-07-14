var CDN = "", app = {}, page = 1, o = {}, video = document.getElementById("video");
$(function () {
    function a() {
        var e = $(window).width(), t = $(window).height();
        $("#WxMomentVideo").height(e * 360 / 640), e > t ? ($("#three").css({
            width: t,
            height: e,
            "-webkit-transform": "translate(" + (e - t) / 2 + "px, " + (t - e) / 2 + "px) rotate(-90deg)"
        }), app.stage.size(t, e).update()) : ($("#three").css({
            width: "100%",
            height: "100%",
            "-webkit-transform": "translateZ(0)"
        }), app.stage.size(e, t).update()), $("#status").html(e + " " + t)
    }

    var e = new WxMoment.Analytics({projectName: ""}), t = "images/", n = new WxMoment.Loader, r = ["arrow.png", "btn.png", "logo-l.png", "logo-r.png", "music.png", "p1-bg.jpg", "p1-car.png", "p1-water.png", "p1-w-col.png", "p1-w-w.png", "p1-w-x.png", "p2-bg.jpg", "p2-car.png", "p2-smoke.png", "p2-w-col.png", "p2-w-w.png", "p2-w-j.png", "p3-bg.jpg", "p3-car1.png", "p3-car2.png", "p3-car3.png", "p3-line.png", "p3-w-col.png", "p3-w-w.png", "p3-w-x.png", "tip.png"];
    for (var i = 0; i < r.length; i++)n.addImage(t + r[i]);
    n.start();
    var s = new WxMoment.Share, u = new WxMoment.Video({
        vid: "c002356f2p2", autoplay: !0, oninited: function () {
            $(".music").hasClass("on") ? $("#WxMomentVideo video")[0].muted = !1 : $("#WxMomentVideo video")[0].muted = !0
        }, onallended: function () {
            $("#three").append(app.stage.el), $("#video-box").hide()
        }
    });
    $(".music").on("touchend", function () {
        $(this).toggleClass("on"), $(this).hasClass("on") ? $("#WxMomentVideo video")[0].muted = !1 : $("#WxMomentVideo video")[0].muted = !0
    }), $("#three").on("touchstart", function (e) {
        o.sy = e.changedTouches[0].clientY
    }).on("touchend", function (e) {
        o.ey = e.changedTouches[0].clientY;
        if (o.ey - o.sy < -50)switch (page) {
            case 1:
                $("#three")[0].className = "page2", page = 2;
                break;
            case 2:
                $(".tip").hide(), $(".btns").show(), $("#three")[0].className = "page3", page = 3
        } else if (o.ey - o.sy > 50)switch (page) {
            case 2:
                $("#three")[0].className = "page1", page = 1;
                break;
            case 3:
                $(".btns").hide(), $(".tip").show(), $("#three")[0].className = "page2", page = 2
        }
    }), app.stage = new C3D.Stage, app.stage.size(window.innerWidth, window.innerHeight).material({color: "#000"}).update(), app.logo = C3D.create({
        type: "sprite",
        name: "logo",
        position: [0, 0, 0],
        children: [{
            type: "plane",
            name: "logo-l",
            size: [112, 40],
            position: [-1150, -1350, -1800],
            scale: [2.8],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/logo-l.png"}]
        }, {
            type: "plane",
            name: "logo-r",
            size: [107, 119],
            position: [1160, -1405, -1800],
            scale: [2.8],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/logo-r.png"}]
        }]
    }), app.stage.addChild(app.logo), app.page1 = C3D.create({
        type: "sprite",
        name: "page1",
        position: [0, 0, 0],
        children: [{
            type: "plane",
            name: "bg",
            size: [1280, 1200],
            position: [0, -150, -2e3],
            scale: [3.2],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p1-bg.jpg"}]
        }, {
            type: "plane",
            name: "car",
            size: [709, 255],
            position: [-170, 180, -678],
            scale: [1],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p1-car.png"}]
        }, {
            type: "plane",
            name: "water",
            size: [1112, 943],
            position: [80, -20, -300],
            scale: [.44],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p1-water.png"}]
        }, {
            type: "plane",
            name: "w-col",
            size: [415, 535],
            position: [10, -235, -678],
            scale: [1],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p3-w-col.png"}]
        }, {
            type: "plane",
            name: "w-w",
            size: [150, 166],
            position: [210, -300, -540],
            scale: [.8],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p1-w-w.png"}]
        }, {
            type: "plane",
            name: "w-x",
            size: [164, 208],
            position: [155, -150, -480],
            scale: [.7],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p3-w-x.png"}]
        }]
    }), app.page2 = C3D.create({
        type: "sprite",
        name: "page2",
        position: [0, 0, 0],
        children: [{
            type: "plane",
            name: "bg",
            size: [1280, 1200],
            position: [0, 0, -2e3],
            scale: [3.2],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p2-bg.jpg"}]
        }, {
            type: "plane",
            name: "car",
            size: [961, 351],
            position: [-130, 240, -678],
            scale: [1],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p2-car.png"}]
        }, {
            type: "plane",
            name: "smoke",
            size: [1280, 693],
            position: [0, 100, -300],
            scale: [.44],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p2-smoke.png"}]
        }, {
            type: "plane",
            name: "w-col",
            size: [460, 567],
            position: [-20, -215, -678],
            scale: [1],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p2-w-col.png"}]
        }, {
            type: "plane",
            name: "w-w",
            size: [150, 166],
            position: [210, -300, -540],
            scale: [.8],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p2-w-w.png"}]
        }, {
            type: "plane",
            name: "w-j",
            size: [246, 197],
            position: [180, -150, -480],
            scale: [.7],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p2-w-j.png"}]
        }]
    }), app.page3 = C3D.create({
        type: "sprite",
        name: "page3",
        position: [0, 0, 0],
        children: [{
            type: "plane",
            name: "bg",
            size: [1280, 1200],
            position: [0, 0, -2e3],
            scale: [3.2],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p3-bg.jpg"}]
        }, {
            type: "plane",
            name: "car1",
            size: [479, 145],
            position: [340, 95, -580],
            scale: [.85],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p3-car1.png"}]
        }, {
            type: "plane",
            name: "car2",
            size: [825, 228],
            position: [240, 170, -720],
            scale: [1.06],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p3-car2.png"}]
        }, {
            type: "plane",
            name: "car3",
            size: [426, 197],
            position: [-355, 255, -860],
            scale: [1.27],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p3-car3.png"}]
        }, {
            type: "plane",
            name: "line",
            size: [1280, 338],
            position: [0, 140, -300],
            scale: [.44],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p3-line.png"}]
        }, {
            type: "plane",
            name: "w-col",
            size: [460, 530],
            position: [-15, -235, -678],
            scale: [1],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p1-w-col.png"}]
        }, {
            type: "plane",
            name: "w-w",
            size: [150, 166],
            position: [210, -300, -540],
            scale: [.8],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p3-w-w.png"}]
        }, {
            type: "plane",
            name: "w-x",
            size: [239, 170],
            position: [180, -155, -480],
            scale: [.7],
            rotation: [0, 0, 0],
            material: [{image: CDN + "images/p1-w-x.png"}]
        }]
    }), app.stage.addChild(app.page1), app.stage.addChild(app.page2), app.stage.addChild(app.page3), $("#three").addClass("page1"), app.initOrientation(), app.timer = setInterval(a, 33)
}), app.random = function (e, t) {
    return e + Math.floor(Math.random() * (t - e))
}, app.shockPos = {x: 0, y: 0}, app.orient = {alpha: 0, beta: 0, gamma: 0}, app.initOrientation = function () {
    var e = this;
    window.addEventListener("deviceorientation", function (t) {
        t.gamma > 90 ? e.orient.gamma = t.gamma - 180 : e.orient.gamma = t.gamma, e.orient.gamma *= 1, e.orient.gamma = Math.min(15, Math.max(-15, Math.floor(e.orient.gamma)))
    }, !1), this.orientOn()
}, app.orientOn = function () {
    var e = this;
    this.orientIv = setInterval(function () {
        e.update(e.orient.gamma)
    }, 1e3 / 30)
}, app.reset = function () {
    var e = this;
    this.orientIv = setInterval(function () {
        e.update(0)
    }, 1e3 / 30)
}, app.orientOff = function () {
    clearInterval(this.orientIv)
}, app.aimPos = {x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0}, app.update = function (e) {
    this.stage.camera.rotationY += .3 * (e - this.stage.camera.rotationY), this.stage.camera.rotationZ += .3 * (this.aimPos.rz + .2 * e - this.stage.camera.rotationZ), this.aimPos.x += .3 * (4 * e - this.aimPos.x), this.stage.camera.x = this.aimPos.x + this.shockPos.x, this.stage.camera.y = this.aimPos.y + this.shockPos.y, this.stage.updateT()
}, document.addEventListener("touchmove", function (e) {
    e.preventDefault()
}), document.addEventListener("WeixinJSBridgeReady", function () {
    $("#WxMomentVideo video")[0].play(), $("#WxMomentVideo video")[0].muted = !1
}, !1);