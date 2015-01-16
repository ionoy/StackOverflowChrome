'use strict';
window.SE = function (s) {
    function l(d, i) {
        var e = d[i];
        if (!e) throw i + " required";
        return e
    }

    function t(d, i, e, h) {
        for (var a, g = "sec" + m++, c = u; window[g] || f.getElementById(g);) g = "sec" + m++;
        window[g] = function (c) {
            window[g] = s;
            a.parentNode.removeChild(a);
            c.error_id ? h({
                errorName: c.error_name,
                errorMessage: c.error_message
            }) : e({
                accessToken: d,
                expirationDate: i,
                networkUsers: c.items
            })
        };
        c += "?pagesize=100&access_token=" + j(d) + "&key=" + j(p) + "&callback=" + j(g);
        a = f.createElement("script");
        a.type = "text/javascript";
        a.src =
            c;
        a.id = g;
        f.getElementsByTagName("head")[0].appendChild(a)
    }
    var q, r, k, p, v = window.navigator.userAgent,
        f = window.document,
        j = window.encodeURIComponent,
        m = 1,
        w = "sew" + m++,
        u = "https://api.stackexchange.com/2.0/me/associated";
    return {
        authenticate: function (d) {
            if (!d) throw "must pass an object";
            var i, e, h, a, g = l(d, "success"),
                c = d.scope,
                f = "",
                k = m++,
                n = r + "&client_id=" + q + "&state=" + k,
                o = d.error;
            if (c && "[object Array]" !== Object.prototype.toString.call(c)) throw "scope must be an Array";
            c && (f = c.join(" "));
            0 < f.length && (n += "&scope=" +
                j(f));
            h = function (b) {
                if (!("https://stackexchange.com" !== b.origin || b.source !== e)) {
                    var a, c, f = b.data.substring(1).split("&"),
                        b = {};
                    for (a = 0; a < f.length; a++) c = f[a].split("="), b[c[0]] = c[1]; + b.state === k && (i && window.removeEventListener("message", h), e.close(), (a = b.access_token) ? ((b = b.expires) && (b = new Date((new Date).getTime() + 1E3 * b)), d.networkUsers ? t(a, b, g, o) : g({
                        accessToken: a,
                        expirationDate: b
                    })) : o && o({
                        errorName: b.error,
                        errorMessage: b.error_description
                    }))
                }
            };
            window.postMessage && window.addEventListener && !(9 >= (/MSIE (\d+\.\d+)/.exec(v) || [])[1]) ? (i = !0, window.addEventListener("message", h)) : a = setInterval(function () {
                if (e)
                    if (e.closed) clearInterval(a);
                    else {
                        var b = e.frames["se-api-frame"];
                        b && (clearInterval(a), h({
                            origin: "https://stackexchange.com",
                            source: e,
                            data: b.location.hash
                        }))
                    }
            }, 50);
            e = window.open(n, w, "width=660,height=480")
        },
        init: function (d) {
            if (!d) throw "must pass an object";
            var f = l(d, "clientId"),
                e = l(d, "channelUrl"),
                h = l(d, "complete"),
                a = window.location.protocol,
                g = a.substring(0, a.length - 1),
                a = (a + "//" + window.location.host).toLowerCase();
            p =
                l(d, "key");
            q = f;
            k = e;
            if (0 !== k.toLowerCase().indexOf(a)) throw "channelUrl must be under the current domain";
            r = "https://stackexchange.com/oauth/dialog?redirect_uri=" + j("https://stackexchange.com/oauth/login_success?assisted=" + f + "&protocol=" + g + "&proxy=" + j(k));
            setTimeout(function () {
                h({
                    version: "7698"
                })
            })
        }
    }
}();