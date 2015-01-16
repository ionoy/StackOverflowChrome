String.prototype.trim = function () {
    return this.replace(/^\s*|\s*$/g, '');
}
var arrayUtils = {
    pushUnique: function (array, e) {
        for (var i in array)
            if (e == array[i])
                return;
        array.push(e);
    },
    remove: function (array, e) {
        for (var i = 0; i < array.length; i++)
            if (array[i] == e)
                array.splice(i, 1);
    }
}

SOChrome = (new function () {
    var options = JSON.parse(localStorage.getItem('options'));

    this.init = function () {
        if (!options) {
            options = {};
            options.theme = 'white';
            //options.apiKey = 'WgDPhqI5g0yqGOx3QEP_dQ';
            options.apiKey = 'YJ1kEsyZ5eRCXw9*gQiFPA((';
        }
    }

    this.getOption = function (key) {
        return options[key] ? options[key] : '';
    };

    this.setOption = function (key, value) {
        options[key] = value;
        localStorage.setItem('options', JSON.stringify(options));
    };

    this.setTheme = function (theme) {
        $("#theme-css").remove();
        $("head").append('<link id="theme-css" rel="stylesheet" href="themes/' + theme + '/start-page.css" type="text/css" />');
    }

    this.renderSites = function (data) {
        localStorage.setItem("sites", JSON.stringify(data));
        localStorage.setItem("lastUpdate", new Date().getTime());

        var sites = data.items;
        var callee = arguments.callee;

        var reload = function () {
            $(".so-site").remove();
            $("#other-sites li").remove();
            callee(data);
        }

        var getSiteCache = function (siteUrl) {
            var cache = JSON.parse(localStorage[siteUrl]);
            cache.update = function () {
                delete cache.update;
                localStorage[siteUrl] = JSON.stringify(cache);
            }
            return cache;
        }

        var getSiteKey = function (siteUrl, key) {
            return getSiteCache(siteUrl)[key];
        }

        var setSiteKey = function (siteUrl, key, val) {
            var cache = getSiteCache(siteUrl);
            cache[key] = val;
            cache.update();
        }

        var minimizeQuestionLists = function () {
            setTimeout(function () {
                var allMinimized = true;
                $(".so-site ul").filter(function () {
                    return $(this).outerHeight() > 320;
                }).each(function (i, e) {
                    allMinimized = false;
                    $(e).css({
                        "font-size": (parseInt($(e).css("font-size").replace(/px/, '')) - 1) + "px"
                    });
                });
                if (!allMinimized)
                    setTimeout(arguments.callee, 10);
            }, 1);
        };

        var showMeta = function () {
            $("#other-sites .show-meta").hide();
            $("#other-sites .hide-meta").show();
            $("#other-sites li").show();
        };

        var hideMeta = function () {
            $("#other-sites .hide-meta").hide();
            $("#other-sites .show-meta").show();
            $("#other-sites li").filter(function () {
                return $("span", this).text().match(/\sMeta/);
            }).hide();
        };

        $("#other-sites .hide-meta").live("click", function () {
            hideMeta();
            localStorage["meta-hidden"] = "true";
        });

        $("#other-sites .show-meta").live("click", function () {
            showMeta();
            localStorage["meta-hidden"] = "false";
        });

        $.each(sites, function (i, site) {
            var visible = false;
            var cache = localStorage[site.site_url];

            if(site.icon_url.indexOf("http:") == 0)
                site.icon_url = site.icon_url.slice(5);

            if (!cache) {
                cache = { hidden: i > 2, sort: "activity", order: i };
                localStorage.setItem(site.site_url, JSON.stringify(cache));
            } else {
                cache = JSON.parse(cache);
            }
            site.visible = !cache.hidden;
            site.order = cache.order !== 'undefined' ? cache.order : i;
            $("#other-site-template").tmpl(site)
                                     .appendTo("#other-sites ul")
                                     .click(function () {
                                         cache.hidden = !cache.hidden;
                                         localStorage.setItem(site.site_url, JSON.stringify(cache));
                                         reload();
                                     });
        });

        if (localStorage["meta-hidden"] == "true")
            hideMeta();

        setTimeout(function () {
            $("#other-sites").css({
                left: $(window).width() / 2,
                "margin-left": -$("#other-sites").outerWidth() / 2
            });
        }, 200);

        var sortedResult = [];
        for (var i in sites) {
            var site = sites[i];
            if (site.visible)
                sortedResult.push(site);
        }

        sortedResult.sort(function (a, b) {
            return a.order > b.order;
        });

        $.each(sortedResult, function (i, site) {
            if (!site) return;
            var cache = JSON.parse(localStorage[site.site_url]);
            if (cache.hidden) return;

            var siteTmpl = $("#site-template")
                                .tmpl(site)
                                .appendTo(".sites")
                                .data("site_url", site.site_url);

            var ul = $("ul", siteTmpl);
            var refreshImg = $("img.refresh", siteTmpl);

            var reloadQuestions = function (cache) {
                refreshImg.css("-webkit-transform", "rotate(180deg)");
                ul.css("opacity", 0.5);
                setTimeout(function () {
                    refreshImg.css("-webkit-transform", "rotate(0deg)");
                }, 500);

                $.get("http://api.stackexchange.com/2.1/questions", 
                      { 
                        site: site.api_site_parameter, 
                        sort: cache.sort, 
                        pagesize: 5,
                        tagged: !!cache.tags ? cache.tags.join(';') : '', 
                        key: SOChrome.getOption('apiKey')
                      }, 
                      function(data) {
                        renderQuestions(data.items);
                         cache["questions-" + cache.sort] = data.items;
                         cache["lastUpdate-" + cache.sort] = new Date().getTime();
                         invalidateCache();
                         setTimeout(function () {
                             ul.css("opacity", 1);
                         }, 50);
                      }  
                );
            }

            refreshImg.hover(function () {
                refreshImg.fadeTo(250, 1);
            }, function () {
                refreshImg.css("opacity", 0.5);
            }).click(function () {
                reloadQuestions(cache);
            });

            var invalidateCache = function () {
                localStorage.setItem(site.site_url, JSON.stringify(cache));
            }

            var renderQuestions = function (questions) {
                ul.css({ "font-size": "12px" }).children().remove();
                $.each(questions, function (i, e) {
                    e.site_url = site.site_url;
                    $("#question-template").tmpl(e).appendTo(ul);
                });
                minimizeQuestionLists();
            }

            var renderTags = function (tags) {
                var tagList = $('.tag-list', siteTmpl);
                tagList.html('').text('');
                if (tags && tags.length) {
                    tagList.text("tags: ");
                    for (var t in tags)
                        $("<span>" + tags[t] + "</span>").appendTo(tagList);
                }
            }

            if (cache["questions-" + cache.sort]) {
                renderQuestions(cache["questions-" + cache.sort]);
            } else {
                reloadQuestions(cache);
            }

            if (cache.tags) {
                renderTags(cache.tags);
            }

            if (cache["lastUpdate-" + cache.sort] && new Date().getTime() - cache["lastUpdate-" + cache.sort] > 180000) { //3 minutes updates                
                reloadQuestions(cache);
            }

            var invalidateTags = function (arrayAction) {
                var text = $(this).text().replace(/^\s*|\s*$/g, '');
                arrayAction();
                renderTags(cache.tags);
                reloadQuestions(cache);
                invalidateCache();
            }

            $(".tags span", siteTmpl[0]).live("click", function () {
                var text = $(this).text().trim();
                if (cache.tags)
                    arrayUtils.pushUnique(cache.tags, text);
                else
                    cache.tags = [text];

                renderTags(cache.tags);
                invalidateCache();
                reloadQuestions(cache);
            });

            $(".tag-list span", siteTmpl[0]).live("click", function () {
                arrayUtils.remove(cache.tags, $(this).text().trim());
                renderTags(cache.tags);
                invalidateCache();
                reloadQuestions(cache);
            });

            $(".hide", siteTmpl[0]).live("click", function () {
                cache.hidden = true;
                invalidateCache();
                siteTmpl.children().css('opacity', '0');
                siteTmpl.animate({
                    width: 0,
                    height: 0,
                    opacity: 0
                }, 500, function () {
                    siteTmpl.hide();
                    reload();
                });
            });

            $(".sort-list span", siteTmpl).click(function () {
                if (!$(this).hasClass("selected")) {
                    $(this).siblings().removeClass("selected");
                    $(this).addClass("selected");
                    cache.sort = $(this).attr("data-sort");
                    invalidateCache();
                    reloadQuestions(cache);
                }
            }).each(function (i, e) {
                if ($(e).attr("data-sort") == cache.sort) {
                    $(e).siblings().removeClass("selected");
                    $(e).addClass("selected");
                }
            });
        });

        $(".tags").filter(function () {
            return $(this).height() > 35;
        }).each(function () {
            $(this).addClass("minimized");
        });

        var recalculateSiteWidth = function () {            
            var minWidth = 390;
            var maxWidth = 500;
            var windowWidth = $(".sites").width() - 10;
            var site = $(".so-site:first");

            var rl = windowWidth % minWidth;
            var rr = windowWidth % maxWidth;
            var nl = Math.floor(windowWidth / minWidth);
            var nr = Math.floor(windowWidth / maxWidth);
            var ml = Math.floor(windowWidth / nl);
            var mr = Math.floor(windowWidth / nr);

            var sideSpace = site.outerWidth(true) - site.width();

            $(".so-site").css({
                width: (rl < rr ? ml : mr) - (sideSpace + 10 / $(".so-site").length)
            });

            minimizeQuestionLists();
        }

        $(".sites").sortable({
            stop: function (event, ui) {
                $(".so-site").each(function (i, e) {
                    setSiteKey($(e).data("site_url"), "order", i);
                });
            },
            handle: '.header-container'
        });

        $(window).resize(recalculateSiteWidth).trigger("resize");
    };

    this.init();
} ());