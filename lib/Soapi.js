// Soapi JavaScript Library RC2 Version 0.9 Revision 2010.06.29.001
// http://soapi.info/
// 
// Copyright 2010, Sky Sanders
// Dual licensed under the MIT or GPL Version 2 licenses.
// http://soapi.info/code/js/license.aspx
// 
// Date: 7/20/2010 5:16:30 AM
// Version: 1.0 1.0 2010.07.09.004
//-------------------------------------------------------------------------------



var Soapi = Soapi || {};
(function()
{



    // namespaces
    Soapi.Routes = {};
    Soapi.Responses = {};
    Soapi.Domain = {};


    /************************************************************************************************************************
    * RequestQueue limits the rate that requests are sent to the API to comply with throttle specifications
    * The default queue processing interval is 170ms - this may be adjusted with the knowledge that breaking the throttle
    * rules will result in unexpected behavior.
    * See http://stackapps.com/questions/1143/request-throttling-limits for more information.
    */

    Soapi.RequestQueue = {
        stop: function()
        {
            if (queueInterval)
            {
                window.clearInterval(queueIntervalId);
                queueIntervalId = null;
            };
        },
        start: function()
        {
            if (!queueIntervalId)
            {
                queueIntervalId = window.setInterval(processQueue, queueInterval);
            };

        },
        clear: function()
        {
            Soapi.RequestQueue.stop();
            var tmp = requestQueue;
            requestQueue = [];
            _onQueueComplete();
            Soapi.RequestQueue.start();

            // does this help with memory usage? need a JS profiler.
            for (var i = 0; i < tmp.length; i++)
            {
                tmp[i] = null;
            };
            tmp = null;
        },
        setInterval: function(value)
        {
            Soapi.RequestQueue.stop();
            queueInterval = value;
            Soapi.RequestQueue.start();
        },
        getInterval: function()
        {
            return queueInterval;
        },
        getLength: function()
        {
            return requestQueue.length;
        }
    };

    // private RequestQueue members
    var defaultQueueInterval = 170;
    var queueInterval;
    var queueIntervalId;
    var requestQueue = [];
    var lastRequestTime = new Date().getTime();


    function processQueue()
    {
        if (requestQueue.length)
        {
            var request = requestQueue.pop();
            lastRequestTime = new Date().getTime();
            request();
            request = null;
        }
    };

    function enqueueRequest(request)
    {
        if (!requestQueue && (lastRequestTime + queueInterval) < new Date().getTime())
        {
            // there is nothing in the queue and the last time it was called was longer
            // than the required interval so no need to enqueue, just run it and update 
            // lastRequestTime
            lastRequestTime = new Date().getTime();

            request();
        }
        else
        {
            requestQueue.push(request);
        };
    };


    Soapi.RequestQueue.setInterval(defaultQueueInterval);

    // end request queue code


    /************************************************************************************************************************
    * RequestCache Implementation
    * 
    * RequestCache caches unique requests for a period of time
    * defined in _requestCacheRules. If a rule is not defined,
    * the request is cached for 60 seconds.
    * 
    */

    /**
    * The RequestCache stores the results of successful requests for a default
    * interval of 60 seconds. This duration can be increased by setDuration().
    * @namespace Contains methods for managing cache durations
    */
    Soapi.RequestCache = {
        /**
        * Clears all cached requests.
        */
        clear: function()
        {
            /// <summary>Clears all cached requests.</summary>

            _requestCache = {};
        },
        /**
        * Sets a cache duration for a particular route format. The default cache duration is 1 minute.
        * @param {String} routeFormat The route format string for which to set cache duration
        * @param {Number} duration The amount of time, in ms, to cache each unique request. Default 60000 (1 minute)
        */
        setDuration: function(routeFormat, duration)
        {
            /// <summary>Sets a cache duration for a particular route format. The default cache duration is 1 minute.</summary>
            /// <param name="routeFormat" type="String">The route format string for which to set cache duration</param>
            /// <param name="duration" type="Number">The amount of time, in ms, to cache each unique request. Default 60000 (1 minute)</param>
            if (duration < 60000)
            {
                throw new { message: "Cache duration cannot be less than 60000 (1 minute)", code: 0 };
            }
            _requestCacheRules[routeFormat] = duration;
        },
        __namespace: true,
        __typeName: "Soapi.RequestCache"
    };

    // cache item = {data:response, timeout: timeout handle}
    var _requestCache = {};
    // rules are in ms keyed on routeFormat
    var _requestCacheRules = {};


    function cacheResponse(url, routeFormat, data, expiration)
    {
        if (Soapi._disableCache)
        {
            return;
        };

        if (typeof (_requestCache[url]) != 'undefined')
        {
            // overwriting a cached value that has a live deletion timeout
            // need to clear that timeout so that the data we are caching
            // does not get prematurely ejected

            window.clearTimeout(_requestCache[url].timeout);
        };

        if (typeof (expiration) == 'undefined')
        {
            // find a rule for this route
            if (routeFormat in _requestCacheRules)
            {
                expiration = _requestCacheRules[routeFormat];
            }
            else
            {
                expiration = 60000; // one minute default cache duration
            };

        };

        _requestCache[url] = { data: data };

        var timeout = window.setTimeout(function()
        {
            delete _requestCache[url];
        }, expiration);

        _requestCache[url].timeout = expiration;

    };

    function getCachedResponse(url)
    {
        if (!Soapi._disableCache && typeof (_requestCache[url]) != 'undefined')
        {
            return _requestCache[url].data;
        }
    };
    // end request cache code


    /************************************************************************************************************************
    * Global Handlers 
    * the success and error handlers call the global function, 
    * if defined, and then call the instance handler, if any.
    * so...  the pattern is:
    *  1- global errror/success
    *  2- instance errror/success
    *  3- global complete
    *
    * for paged request this will get a little busy but I am working on
    * a way to clarify
    */

    // global jsonp methods to overwrite (override)
    Soapi.Events = {
        onError: function(errorResponse, context) { },
        onSuccess: function(data, context) { },
        onComplete: function(data, error, context) { },
        onQueueActive: function() { },
        onQueueComplete: function() { }
    };

    function _onError(errorResponse, context, instanceHandler)
    {
        if (isFunction(Soapi.Events.onError))
        {
            Soapi.Events.onError(errorResponse, context);
        };

        if (isFunction(instanceHandler))
        {
            instanceHandler(errorResponse, context);
        };
    };

    function _onSuccess(data, context, instanceHandler)
    {

        if (isFunction(Soapi.Events.onSuccess))
        {
            Soapi.Events.onSuccess(data, context);
        };

        if (isFunction(instanceHandler))
        {
            instanceHandler(data, context);
        };
    };

    function _onComplete(data, error, context)
    {
        if (isFunction(Soapi.Events.onComplete))
        {
            Soapi.Events.onComplete(data, error, context);
        };

        if (requestQueue.length == 0)
        {
            _onQueueComplete();
        };
    };

    function _onQueueActive()
    {
        if (isFunction(Soapi.Events.onQueueActive))
        {
            Soapi.Events.onQueueActive();
        };
    };

    function _onQueueComplete()
    {
        if (isFunction(Soapi.Events.onQueueComplete))
        {
            Soapi.Events.onQueueComplete();
        };
    };

    // end global handlers code



    /************************************************************************************************************************
    * JSONP implementation
    * 
    * 
    * NOTE: depends on request cache and request queue
    */


    Soapi._internal = {
        jsonpHandler: function(url, callback, callbackId)
        {
            // factored the insertion of the script tag into an exposed
            // method to allow easy 'mocking'.
            // the reason we want to mock up the jsonp so that we can
            // 1) test url generation
            // 2) throw errors
            // so, to do that, simply overwrite this method. e.g.
            // Soapi._internal.jsonpHandler = function(url, callback) { // check the url, send some json to the callback };

            var scr = document.createElement("script");
            scr.type = "text/javascript";
            scr.src = url;
            scr.id = callbackId;
            var head = document.getElementsByTagName("head")[0];
            head.insertBefore(scr, head.firstChild);
        },

        applyIds: function(args)
        {
            // args is an array

            // expected patterns:
            // {Number|String},...
            // {Number|String},..., Map
            // Array[Number|String]
            // Array[Number|String], Map
            // Map

            var ids = [];
            var params;

            if (arguments.length > 1 || !isArray(args))
            {
                throw { message: "Expected single array.", code: 0 };
            };

            if (arguments.length == 0)
            {
                //noop
            } else if (args.length > 0 && isArray(args[0]))
            {
                // Array[Number|String]
                // Array[Number|String], Map
                ids = args[0];
                if (args.length > 1)
                {
                    if (args.length > 2)
                    {
                        throw { message: "Expected 2 parameters: Array, Map", code: 0 };
                    };

                    if (!isArray(args[1]))
                    {
                        params = args[1];
                    }
                    else
                    {
                        throw { message: "Expected object map in element 1", code: 0 };
                    };
                };
            }
            else if (args.length == 1 && typeof (args[0]) == 'object')
            {
                //  Map
                params = args[0];
            }
            else
            {
                ids = args;
                // {Number|String},...
                // {Number|String},..., Map
                if (typeof (ids[ids.length - 1]) == 'object')
                {
                    // check the last element for object
                    params = ids.pop();
                };
            };

            if (params)
            {
                Soapi._internal.applyParameters.call(this, params, false, this._target, this._apiKey);
            };

            if (ids.length > 0)
            {
                // explicit ids overwrite any specified in params
                this.id = ids;
            };
        },

        applyParameters: function(parameters, defaults, target, apiKey)
        {
            // recursively copy parameters to 'this' with date conversion
            // all objects get target and apiKey so that they can be used to easily initiate another
            // request
            this._target = this._target || target;
            this._apiKey = this._apiKey || apiKey;
            if (parameters)
            {
                for (var key in parameters)
                {
                    if (parameters.hasOwnProperty(key))
                    {
                        var value = parameters[key];
                        if (!defaults && ((typeof (value) == 'undefined') || !value || value == '' || value == 0))
                        {
                            // typically defaults will be false when we are building a url so that unnecessary or detrimental
                            // default values will not be built into the url.  This could be extended to handle
                            // enum default values as well.
                            // TODO: document enum default values. the default is the first in the enum, but this is not obvious
                            continue;
                        };
                        if (isArray(value))
                        {
                            // recurse the array, applying to itself to provide recursive type conversion
                            for (var i = 0; i < value.length; i++)
                            {
                                Soapi._internal.applyParameters.call(value[i], value[i], true, target, apiKey);
                            };
                        }
                        else if ((value instanceof Date))
                        {
                            // already a date, we are all about dates here. no unix timestamps
                            this[key] = value;
                        }
                        else if (typeof value == 'object')
                        {
                            // this is a nested object, ala badge_counts
                            Soapi._internal.applyParameters.call(value, value, true, target, apiKey);
                        }
                        else
                        {
                            switch (key)
                            {
                                // these are all of the unix timestamp parameters and properties in the api                                                                                                                                                                                                                                                                                                                                                       
                                case "fromdate":
                                case "todate":
                                case "bounty_closes_date":
                                case "closed_date":
                                case "creation_date":
                                case "last_access_date":
                                case "last_activity_date":
                                case "last_edit_date":
                                case "locked_date":
                                case "on_date":
                                case "protected_date":
                                case "timed_penalty_date":
                                    if (value && (typeof (value) == 'number') && !isNaN(new Date(value * 1000)))
                                    {
                                        // interpret number as unix timestamp
                                        this[key] = new Date(value * 1000);
                                    }
                                    else if (value && (typeof (value) == 'string') && !isNaN(new Date(value)))
                                    {
                                        this[key] = new Date(value);
                                    }
                                    else
                                    {
                                        this[key] = new Date(0);
                                    };
                                    break;
                                default:
                                    this[key] = value;
                                    break;
                            };
                        };
                    };
                };
                return this;
            };
        },
        _cbid: 0
    };


    function deleteJsonp(cbn)
    {
        // part of a concerted effort to reduce memory footprint
        var node = document.getElementById(cbn);
        if (node)
        {
            node.parentNode.removeChild(node);
            node = null;
        }

        Soapi._internal[cbn] = null;
        delete Soapi._internal[cbn];
    };

    function jsonp(url, success, error, timeout, target, apiKey, context, routeFormat)
    {
        var cbn = "_callback" + Soapi._internal._cbid++;
        var lastUrl = url.replace("jsonp=?", "jsonp=Soapi._internal." + cbn);

        // setup the callback

        Soapi._internal[cbn] = function(data)
        {
            deleteJsonp(cbn);

            Soapi._internal.applyParameters.call(data, data, true, target, apiKey);
            if (data.error)
            {
                data.error.url = lastUrl;
                _onError(data.error, context, error);
                _onComplete(null, data.error, context);
            }
            else
            {
                for (var name in data)
                {
                    if (isArray(data[name]))
                    {
                        data.items = data[name];
                        data[name] = null;
                        delete data[name];
                        break;
                    };
                };

                // cache it so we can be good api citizens
                cacheResponse(url, routeFormat, data);
                _onSuccess(data, context, success);
                _onComplete(data, null, context);
            };

            data = null;
        };

        Soapi._internal.jsonpHandler(lastUrl, Soapi._internal[cbn], cbn);

        // default to 3 second timeout
        timeout = timeout || 3000;

        window.setTimeout(function()
        {
            if (isFunction(Soapi._internal[cbn]))
            {
                // replace success with null callback in case the request is just very latent.
                Soapi._internal[cbn] = function(data)
                {
                    deleteJsonp(cbn);
                };

                var err = { code: 408, message: "Request Timeout", url: lastUrl };
                _onError(err, context, error);
                _onComplete(null, err, context);
                err = null;
                // set a MUCH longer timeout to safely clean up the unused callback.
                window.setTimeout(function()
                {
                    if (isFunction(Soapi._internal[cbn]))
                    {
                        deleteJsonp(cbn);
                    };
                }, 60000);
            };
        }, timeout);
    };


    // end jsonp code







    Soapi.RouteFactory = function(target, apiKey)
    {

        // factory constructor
        if (this.constructor != Soapi.RouteFactory)
        {
            return new Soapi.RouteFactory(target, apiKey);
        }

        this._target = target || "";
        this._apiKey = apiKey || "";
        this._apiVersion = Soapi.RouteFactory.apiVersion;
        this._apiRevision = Soapi.RouteFactory.apiRevision;
        this.applyRouteParams = function(r)
        {
            r._target = this._target;
            r._apiKey = this._apiKey;
            r._apiVersion = this._apiVersion;
        };
    };



    Soapi.RouteFactory.version = '1.0 1.0 2010.07.09.004';
    Soapi.RouteFactory.apiVersion = '1.0';
    Soapi.RouteFactory.apiRevision = '2010.07.09.004';



    Soapi.Routes.Route = function()
    {
    }

    Soapi.Routes.Route.prototype.applyParameters = function(params)
    {
        return Soapi._internal.applyParameters.apply(this, arguments);
    };

    // TODO: need to rigorously test errors thrown during paged request
    Soapi.Routes.Route.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        var response;
        var that = this;
        that.page = that.page || 1;
        that.pagesize = that.pagesize || 100;

        function addItems(data)
        {

            if (typeof (data.total) == 'undefined')
            {
                var err = { message: "not a paged response", code: 0, url: that._lastUrl };
                Soapi._internal.applyParameters.call(err, err);
                _onError(err, context, error);
                _onComplete(null, err, context);

            } else if (typeof (response) == 'undefined')
            {

                // don't aggregate the data if no success handler is defined
                // this could be true if you simply want to process the pages as you get them
                // via pageCallback
                if (isFunction(success))
                {
                    response = data;
                }
            }
            else
            {
                response.page = data.page;
                // don't aggregate the data if no success handler is defined
                // this could be true if you simply want to process the pages as you get them
                // via pageCallback
                if (isFunction(success))
                {
                    response.items = response.items.concat(data.items);
                }
            };

            if (data.items.length == 0 || (isFunction(pageCallback) && pageCallback(data, context)))
            {
                _onSuccess(response, context, success);
                _onComplete(response, null, context);
            }
            else
            {
                that.page++;
                that.getResponse(addItems, error, timeout, context);
            };
        };

        that.getResponse(addItems, error, timeout, context);

        return that;
    };

    // TODO: document this
    Soapi.Routes.Route.prototype.validateParameters = function()
    {
        // override this in derived classes to emplace parameter validation
    }


    Soapi.Routes.Route.prototype.getResponse = function(success, error, timeout, context)
    {
        var that = this;
        timeout = timeout | 0;
        var http = "http://";
        that._target = (that._target.indexOf(http) == -1 ? http : "") + that._target;

        var path = that._target + "/" + that._apiVersion + that._routeFormat;

        var first = true;

        if (that._apiKey)
        {
            first = false;
            path += '?key=' + encodeURIComponent(that._apiKey);
        };
        for (var key in that)
        {
            if (key.substr(0, 1) != "_" && that.hasOwnProperty(key))
            {
                var value = jsEncode(that[key]);
                var token = '{' + key + '}';
                if (path.indexOf(token) > 0)
                {
                    path = path.replace(token, value);
                }
                else
                {
                    path += (first ? '?' : '&') + key + '=' + value;
                    first = false;
                };
            };
        };
        that._lastUrl = path;
        path = path + (first ? '?' : '&') + 'jsonp=?';
        this.validateParameters();

        // raise queue active, regardless of whether the request hits the queue
        // as that detail is irrelevant to the consumer of the event
        _onQueueActive();

        var data = getCachedResponse(path);
        if (typeof (data) != 'undefined')
        {
            // return it on a short timeout so as to not break the fluent interface
            window.setTimeout(function()
            {
                _onSuccess(data, context, success);
                _onComplete(data, null, context);
            }, 10);
        } else
        {
            // need to throttle all other sites as apparently they feel it is ok to publish an inconsistent/crippled API
            enqueueRequest(function()
            {
                jsonp(path, success, error, timeout, that._target, that._apiKey, context, that._routeFormat);
            });
        };


        return that;
    }



    /*
    * Utility functions
    */


    Soapi.Utilities = {
        VectorizedIdList: function(maxBatchLength)
        {
            this.maxBatchLength = maxBatchLength;


            var list = [];
            var that = this;


            this.indexOf = function(value)
            {
                for (var i = 0; i < list.length; i++)
                {
                    if (list[i] == value)
                    {
                        return i;
                    };
                };
                return -1;
            };


            this.addRange = function(values)
            {
                list = list.concat(values);
            };

            this.add = function(value)
            {
                if (this.indexOf(value) == -1)
                {
                    list.push(value);
                };
            };

            this.remove = function(value)
            {
                var index = this.indexOf(value);
                if (index > -1)
                {
                    list.splice(index, 1);
                };
            };
            this.getBatchesVectorized = function(clear)
            {
                var batches = this.getBatches(clear);
                for (var i = 0; i < batches.length; i++)
                {
                    batches[i] = batches[i].join(";");
                };
                return batches;
            };

            this.getBatches = function(clear)
            {
                var batches = [];
                var batch = [];
                var batchString = "";
                for (var i = 0; i < list.length; i++)
                {
                    var token = list[i].toString() + ";";
                    if ((batchString + token).length >= that.maxBatchLength)
                    {
                        batches.push(batch);
                        batch = [];
                        batchString = "";
                        batch.push(list[i]);

                    } else
                    {
                        batchString += token;
                        batch.push(list[i]);
                    };

                };

                if (batch.length > 0)
                {
                    batches.push(batch);
                }
                if (clear)
                {
                    list = [];
                };
                return batches;
            };
        },

        formatNumber: function(rep)
        {
            // from CMS's response to my inferior implementation here:
            // http://stackoverflow.com/questions/3177855
            rep = rep + '';
            if (rep < 1000)
            {
                return rep;
            } else if (rep < 10000)
            {
                return rep.charAt(0) + ',' + rep.substring(1);
            } else
            {
                return (rep / 1000).toFixed(rep % 1000 != 0) + 'k';
            };
        },

        // TODO: need 2 versions, 1 for question and 1 for user profile
        getTimeAgo: function(date)
        {
            date = new Date(date);

            var seconds = Math.floor((new Date() - date) / 1000);

            var interval = Math.floor(seconds / 31536000);

            if (interval > 1)
            {
                return interval + " years";
                // TODO: should get months as well ?
            };
            interval = Math.floor(seconds / 2592000);
            if (interval > 1)
            {
                return interval + " months";
            };
            interval = Math.floor(seconds / 86400);
            if (interval > 1)
            {
                return interval + " days";
            };
            interval = Math.floor(seconds / 3600);
            if (interval > 1)
            {
                return interval + " hours";
            };
            interval = Math.floor(seconds / 60);
            if (interval > 1)
            {
                return interval + " minutes";
            };
            return Math.floor(seconds) + " seconds";
        }
    };


    function isFunction(obj)
    {
        return obj && (typeof (obj) == "function");
    }

    function isArray(obj)
    {
        // TODONE: fixed 27979?
        return obj
        && (typeof (obj) != 'undefined')
        && obj.constructor
        && obj.constructor.toString().indexOf("Array") != -1;
    }


    function jsEncode(value)
    {
        // this is only ever called to build a url
        if (value instanceof Date)
        {
            // create unix timestamp
            return Math.floor(value / 1000);
        }
        else if (isArray(value))
        {
            // uri encode each element and create a semi-colon delimited or 'vectorized' list
            var values = [];
            for (var i = 0; i < value.length; i++)
            {
                values.push(encodeURIComponent(value[i]));
            };
            return values.join(";");
        }
        else
        {
            return encodeURIComponent(value);
        };
    };


    /*
    * runtime code generation
    */


    function createEnum(tn, tp)
    {
        Soapi.Domain[tn] = function() { };
        Soapi.Domain[tn].prototype = tp;
        for (var key in Soapi.Domain[tn].prototype)
        {
            if (Soapi.Domain[tn].prototype.hasOwnProperty(key))
            {
                Soapi.Domain[tn][key] = Soapi.Domain[tn].prototype[key];
            };
        };
    };

    function createType(tn, ns)
    {
        Soapi[ns][tn] = new Function('if (arguments[0] && (arguments[0] instanceof Soapi.' + ns + '.' + tn
            + ')) {return arguments[0];};Soapi._internal.applyParameters.call(this, arguments[0],true);');
        Soapi[ns][tn]._typeName = 'Soapi.' + ns + '.' + tn;
    };

    function createRouteMap(tn, rf)
    {
        Soapi.Routes[tn + 'RouteMap'] = new Function('Soapi._internal.applyIds.apply(this, arguments);this._routeFormat = "' + rf + '";');
        Soapi.Routes[tn + 'RouteMap'].prototype = new Soapi.Routes.Route();
        Soapi.Routes[tn + 'RouteMap'].routeFormat = rf;
        Soapi.RouteFactory.prototype[tn] = function()
        {
            var r = new Soapi.Routes[tn + 'RouteMap'](Array.prototype.slice.call(arguments));
            this.applyRouteParams(r);
            return r;
        };
        Soapi.Routes[tn + 'RouteMap']._typeName = 'Soapi.Routes.' + tn + 'RouteMap';
    };


    var returnTypes = ['AnswersResponse', 'BadgesResponse', 'CommentsResponse', 'ErrorsResponse', 'PostTimelineResponse',
        'QuestionsResponse', 'RepChangesResponse', 'RevisionsResponse', 'StatsResponse', 'TagsResponse',
        'UserTimelinesResponse', 'UsersResponse', 'SitesResponse', 'UsersAssociatedResponse'];

    var domainObjects = ['Styling', 'User', 'Comment', 'Answer', 'Badge', 'BadgeCounts', 'Site', 'Migrated', 'Question',
        'PostTimeline', 'Revision', 'ApiVersion', 'Statistics', 'Tag', 'RepChange', 'UserTimeline'];

    var enums = [
    // parameter enums
        {tn: 'SortOrder', tp: { desc: 'desc', asc: 'asc'} },
        { tn: 'PostSort', tp: { activity: 'activity', views: 'views', creation: 'creation', votes: 'votes'} },
        { tn: 'CommentSort', tp: { creation: 'creation', votes: 'votes'} },
        { tn: 'QuestionSort', tp: { activity: 'activity', votes: 'votes', creation: 'creation', featured: 'featured', hot: 'hot', week: 'week', month: 'month'} },
        { tn: 'TagSort', tp: { popular: 'popular', activity: 'activity', name: 'name'} },
        { tn: 'UserSort', tp: { reputation: 'reputation', creation: 'creation', name: 'name'} },
        { tn: 'FavoritesSort', tp: { activity: 'activity', views: 'views', creation: 'creation', added: 'added', votes: 'votes'} },
    // domain enums
        {tn: 'SiteState', tp: { normal: 'normal', closed_beta: 'closed_beta', open_beta: 'open_beta', linked_meta: 'linked_meta'} },
        { tn: 'UserType', tp: { anonymous: 'anonymous', unregistered: 'unregistered', registered: 'registered', moderator: 'moderator'} },
        { tn: 'PostType', tp: { question: 'question', answer: 'answer'} },
        { tn: 'PostTimelineType', tp: { question: 'question', answer: 'answer', comment: 'comment', revision: 'revision', votes: 'votes', state: 'state', accepted: 'accepted', unaccepted: 'unaccepted'} },
        { tn: 'RevisionType', tp: { single_user: 'single_user', vote_based: 'vote_based'} },
        { tn: 'UserTimelineType', tp: { comment: 'comment', askoranswered: 'askoranswered', badge: 'badge', revision: 'revision', accepted: 'accepted'}}];

    var routeMaps = [
        { tn: 'AnswersById', rf: '/answers/{id}' },
        { tn: 'AnswersByIdComments', rf: '/answers/{id}/comments' },
        { tn: 'Badges', rf: '/badges' },
        { tn: 'BadgesById', rf: '/badges/{id}' },
        { tn: 'BadgesName', rf: '/badges/name' },
        { tn: 'BadgesTags', rf: '/badges/tags' },
        { tn: 'CommentsById', rf: '/comments/{id}' },
        { tn: 'ErrorsById', rf: '/errors/{id}' },
        { tn: 'PostsByIdComments', rf: '/posts/{id}/comments' },
        { tn: 'Questions', rf: '/questions' },
        { tn: 'QuestionsById', rf: '/questions/{id}' },
        { tn: 'QuestionsByIdAnswers', rf: '/questions/{id}/answers' },
        { tn: 'QuestionsByIdComments', rf: '/questions/{id}/comments' },
        { tn: 'QuestionsByIdTimeline', rf: '/questions/{id}/timeline' },
        { tn: 'QuestionsUnanswered', rf: '/questions/unanswered' },
        { tn: 'RevisionsById', rf: '/revisions/{id}' },
        { tn: 'RevisionsByIdByRevisionGuid', rf: '/revisions/{id}/{revisionguid}' },
        { tn: 'Search', rf: '/search' },
        { tn: 'Stats', rf: '/stats' },
        { tn: 'Tags', rf: '/tags' },
        { tn: 'Users', rf: '/users' },
        { tn: 'UsersById', rf: '/users/{id}' },
        { tn: 'UsersByIdAnswers', rf: '/users/{id}/answers' },
        { tn: 'UsersByIdBadges', rf: '/users/{id}/badges' },
        { tn: 'UsersByIdComments', rf: '/users/{id}/comments' },
        { tn: 'UsersByIdCommentsByToId', rf: '/users/{id}/comments/{toid}' },
        { tn: 'UsersByIdFavorites', rf: '/users/{id}/favorites' },
        { tn: 'UsersByIdMentioned', rf: '/users/{id}/mentioned' },
        { tn: 'UsersByIdQuestions', rf: '/users/{id}/questions' },
        { tn: 'UsersByIdReputation', rf: '/users/{id}/reputation' },
        { tn: 'UsersByIdTags', rf: '/users/{id}/tags' },
        { tn: 'UsersByIdTimeline', rf: '/users/{id}/timeline' },
        { tn: 'UsersModerators', rf: '/users/moderators'}];
    var i;
    for (i = 0; i < enums.length; i++)
    {
        {
            createEnum(enums[i].tn, enums[i].tp, enums[i].tf);
        };
    };
    for (i = 0; i < domainObjects.length; i++)
    {
        {
            createType(domainObjects[i], "Domain");
        };
    };
    for (i = 0; i < returnTypes.length; i++)
    {
        {
            createType(returnTypes[i], "Responses");
        };
    };
    for (i = 0; i < routeMaps.length; i++)
    {
        {
            createRouteMap(routeMaps[i].tn, routeMaps[i].rf);
        };
    };

    // easier to hack in stackauth support as addon, 
    Soapi.Routes.SitesRouteMap = function()
    {
        if (arguments[0] && (arguments[0] instanceof Soapi.Routes.SitesRouteMap))
        {
            return arguments[0];
        };
        this._routeFormat = '/sites'
    };
    Soapi.Routes.SitesRouteMap._typeName = "Soapi.Routes.SitesRouteMap";
    Soapi.Routes.SitesRouteMap.prototype = new Soapi.Routes.Route();
    Soapi.Routes.SitesRouteMap.routeFormat = '/sites';
    Soapi.RouteFactory.prototype.Sites = function()
    {
        var r = new Soapi.Routes.SitesRouteMap();
        this.applyRouteParams(r);
        r._target = "stackauth.com";
        return r;
    };


    Soapi.Routes.UsersByIdAssociatedRouteMap = function(id)
    {
        if (arguments[0] && (arguments[0] instanceof Soapi.Routes.UsersByIdAssociatedRouteMap))
        {
            return arguments[0];
        };
        this.id = id;
        this._routeFormat = '/users/{id}/associated'
    };
    Soapi.Routes.UsersByIdAssociatedRouteMap._typeName = "Soapi.Routes.UsersByIdAssociatedRouteMap";
    Soapi.Routes.UsersByIdAssociatedRouteMap.prototype = new Soapi.Routes.Route();
    Soapi.Routes.UsersByIdAssociatedRouteMap.routeFormat = '/users/{id}/associated';
    Soapi.RouteFactory.prototype.UsersByIdAssociated = function(id)
    {
        var r = new Soapi.Routes.UsersByIdAssociatedRouteMap(id);
        this.applyRouteParams(r);
        r._target = "stackauth.com";
        return r;
    };


    /*
    * parameter validation
    */

    Soapi.Routes.SearchRouteMap.prototype.validateParameters = function()
    {

        if (!this.intitle && !this.tagged && !this.nottagged)
        {
            throw { message: "One of intitle, tagged, or nottagged must be set.", code: 0, url: this._lastUrl };
        }
    }
})();



