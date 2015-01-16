//
// Soapi JavaScript Library
// http://soapi.info/
//
// Copyright 2010, Sky Sanders
// Dual licensed under the MIT or GPL Version 2 licenses.
// http://soapi.info/code/js/license.aspx
//
// Date: 7/20/2010 5:16:30 AM
// Version: 1.0 1.0 2010.07.09.004
//
// NOTE: this is a documentation script ONLY. DO NOT INCLUDE OR SERVE THIS SCRIPT.
// NOTE: this is a documentation script ONLY. DO NOT INCLUDE OR SERVE THIS SCRIPT.
// NOTE: this is a documentation script ONLY. DO NOT INCLUDE OR SERVE THIS SCRIPT.
// NOTE: this is a documentation script ONLY. DO NOT INCLUDE OR SERVE THIS SCRIPT.
//
// did i mention...
// NOTE: this is a documentation script ONLY. DO NOT INCLUDE OR SERVE THIS SCRIPT.

// TODONE: updated PostTimeLine with question_id field


var Soapi = {
    // TODO: well, we found out something about getting class decorators to function
    // properly here http://connect.microsoft.com/VisualStudio/feedback/details/553372/vs10-javascript-intellisense-class-member-decorator-display-depends-on-microsoftajax-js
    // lets see if we can find out why namespaces lose their decorator after first use
    __namespace: true,
    __typeName: "Soapi"
};

Soapi.Events = {

    onError: function(errorResponse, context)
    {
        /// <summary>Global error handler. Replace (override) this method. This event is raised before the instance error function.</summary>
        /// <param name="errorResponse" type="Soapi.Responses.ErrorResponse">The error that occurred</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
    },

    onSuccess: function(data, context)
    {
        /// <summary>Global success handler. Replace (override) this method. This event is raised before the instance success function.</summary>
        /// <param name="data" type="Object">The response object</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
    },

    onComplete: function(data, error, context)
    {
        /// <summary>Global completion handler. Replace (override) this method. This event is raised last</summary>
        /// <param name="data" type="Object">The response object, if any</param>
        /// <param name="errorResponse" type="Soapi.Responses.ErrorResponse">The error that occurred, if any</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
    },

    onQueueActive: function()
    {
        /// <summary>Global handler. Replace (override) this method. This event is raised when a request is enqueued. Used in conjunction with a short buffer interval, this event is useful for displaying ajax 'loading mask' or otherwise manipulating your UI.</summary>
    },

    onQueueComplete: function()
    {
        /// <summary>Global handler. Replace (override) this method. This event is raised when the request queue is emptied. Used in conjunction with a short buffer interval, this event is useful for removing ajax 'loading mask' or otherwise manipulating your UI.</summary>
    },

    __namespace: true,
    __typeName: "Soapi.Events"
};

Soapi.RequestQueue = {

    stop: function()
    {
        /// <summary>Stops, or pauses, the request queue, if running.</summary>
    },

    start: function()
    {
        /// <summary>Starts the request queue, if not already running.</summary>

    },

    clear: function()
    {
        /// <summary>Stops the request queue, nulls all pending requests and restarts the queue</summary>
    },

    setInterval: function(value)
    {
        /// <summary>Sets the interval, in ms, between requests.</summary>
        /// <param name="value" type="Number">The interval, in ms, between requests.</param>
    },

    getInterval: function()
    {
        /// <summary>The interval, in ms, between requests.</summary>
        /// <returns type="Number"/>
    },

    getLength: function()
    {
        /// <summary>The current length of the request queue.</summary>
        /// <returns type="Number"/>
    },
    __namespace: true,
    __typeName: "Soapi.RequestQueue"
};

Soapi.RequestCache = {

    clear: function()
    {
        /// <summary>Clears all cached requests.</summary>
    },

    setDuration: function(routeFormat, duration)
    {
        /// <summary>
        /// Sets a cache duration rule for a particular route format. default/minimum value 60000 (1 minute)
        /// </summary>
        /// <param name="routeFormat" type="String">routeFormat the route format upon which to set cache duration rule</param>
        /// <param name="duration" type="Number">the duration, in ms, to cache responses for this route format. minimum value 60000 (1 minute)</param>
    },
    __namespace: true,
    __typeName: "Soapi.RequestCache"
};

(function()
{

    Soapi.RouteFactory = function(target, apiKey)
    {
        /// <summary>SO API RouteFactory</summary>
        /// <param name="target" type="String">target site. e.g. api.stackoverflow.com or http://api.stackoverflow.com
        /// NOTE: this parameter is ignored by Sites and UsersByIdAssociated routes.
        /// So you may either use any factory instance or construct an instance with no target.
        /// </param>
        /// <param name="apiKey" type="String">(optional) If empty your daily limit will be 300 requests. Obtain a key from StackApps.com</param>
        /// <returns type="Soapi.RouteFactory"/>

    }
    Soapi.RouteFactory.prototype.constructor = Soapi.RouteFactory;

    Soapi.RouteFactory.prototype.version = '1.0 1.0 2010.07.09.004';

    Soapi.RouteFactory.prototype.apiVersion = '1.0';

    Soapi.RouteFactory.prototype.apiRevision = '2010.07.09.004';

    Soapi.Routes = {
        __namespace: true,
        __typeName: "Soapi.Routes"
    };

    Soapi.Responses = {
        __namespace: true,
        __typeName: "Soapi.Responses"
    }

    Soapi.Domain = {
        __namespace: true,
        __typeName: "Soapi.Domain"
    }

    Soapi.Utilities = {

        getTimeAgo: function(date)
        {
            /// <summary>
            /// Returns a 'time ago' string similar to stack overflow and the 'timeago' jquery plugin.
            /// </summary>
            /// <param name="date" type="Date">the date to format</param>
            /// <returns type="String"/>
        },

        formatNumber: function(rep)
        {
            /// <summary>
            /// Formats a number similar to the way stack exchange sites format reputation.
            /// e.g. numbers < 10000 the output is '9,999', numbers > 10000 the output is '10k' with one decimal place when needed.
            /// </summary>
            /// <param name="rep" type="Number">the number to format</param>
            /// <returns type="String"/>
        },
        __namespace: true,
        __typeName: "Soapi.Utilities"

    };

    Soapi.Utilities.VectorizedIdList = function(maxBatchLength)
    {
        /// <summary>
        /// A class for batching up API requests without hitting
        /// the max path limit and generating (400) Bad Request errors
        /// <summary>
        /// <param name="maxBatchLength" type="Number">Maximum string length of batches</param>
        /// <field name="maxBatchLength" type="Number">Maximum string length of batches</field>
        /// <returns type="Soapi.Utilities.VectorizedIdList"/>

        this.maxBatchLength = 0;
    };

    Soapi.Utilities.VectorizedIdList.prototype.getBatches = function(clear)
    {
        /// <summary>Gets an array of arrays containing batched values</summary>
        /// <param name="clear" type="Boolean">whether to clear the inner list after batch generation</param>
        /// <returns type="Array"/>
    }

    Soapi.Utilities.VectorizedIdList.prototype.getBatchesVectorized = function(clear)
    {
        /// <summary>Gets an array of vectorized list strings, each length being equal or less than maxBatchLength</summary>
        /// <param name="clear" type="Boolean">whether to clear the inner list after batch generation</param>
        /// <returns type="Array"/>
    }

    Soapi.Utilities.VectorizedIdList.prototype.add = function(value)
    {
        /// <summary>Adds a value to the batch, if it does not already exist</summary>
        /// <param name="value" type="Number|String"></param>

    }

    Soapi.Utilities.VectorizedIdList.prototype.addRange = function(values)
    {
        /// <summary>Adds an array of values to the batch, each if it does not already exist</summary>
        /// <param name="values" type="Array[Number|String]">An array of values to add to the batch</param>
    }

    Soapi.Utilities.VectorizedIdList.prototype.remove = function(value)
    {
        /// <summary>Removes a value from the batch, if it exists</summary>
        /// <param name="value" type="Number|String">A value to remove from the batch</param>

    }



    function makeEnum(type, typeName)
    {
        type.__typeName = typeName;
        type.__flags = false;
        type.__enum = true;
        for (var key in type.prototype)
        {
            if (type.prototype.hasOwnProperty(key))
            {
                type[key] = type.prototype[key];
            }
        }
    };
    function makeClass(type, typeName)
    {
        type.prototype.constructor = type;
        type.__typeName = typeName;
        type.__class = true;
    };
    function createEnum(tn, tp)
    {
        Soapi.Domain[tn] = function() { };
        Soapi.Domain[tn].prototype = tp;
        makeEnum(Soapi.Domain[tn], "Soapi.Domain." + tn);
    };

    //    /**
    //    * Creates a new Route.
    //    * @class An 'abstract' base type for all routes.
    //    */
    //    Soapi.Routes.Route = function()
    //    {
    //        /// <summary>an 'abstract' base type for all routes</summary>
    //        /// <param name="lastUrl" type="String">the last url called by this RouteFactory instance</param>
    //        /** @lends Soapi.Routes.Route.prototype */
    //    };
    //    Soapi.Routes.Route.prototype.constructor = Soapi.Routes.Route;
    //    Soapi.Routes.Route.prototype = {
    //        /**
    //        * Applies parameters to this Route.
    //        * @function
    //        * @param {Object} params An object map of parameters to apply to this Route
    //        * @returns {Soapi.Routes.Route}
    //        */
    //        applyParameters: function(params)
    //        {
    //            /// <summary>
    //            /// Applies parameters to this object.
    //            /// </summary>
    //            /// <param name="params" type="Object"></param>
    //            /// <returns type="Soapi.Routes.Route"/>
    //        },
    //        
    //        /**
    //        * Retrieves results all pages of a result. Default page=1, pagesize=100
    //        * @function
    //        * @param {Function(data, context)} success function to recieve the results
    //        * @param {func(Soapi.Responses.ErrorsResponse, context, context)} [error] function to recieve errors
    //        * @param {Function(data, context, context)} [pageCallback] return true to cancel paging operation.
    //        * @param {Number} [timeout] Default 3000 (3 seconds)
    //        * @param {Object} [context] An arbitrary user defined value/object
    //        * @returns {Soapi.Routes.Route}
    //        */
    //        getPagedResponse: function(success, error, pageCallback, timeout, context)
    //        {
    //            /// <summary>
    //            /// Retrieves results all pages of a result. Default page=1, pagesize=100
    //            /// </summary>
    //            /// <param name="success" type="Function">func(data, context) function to recieve the results</param>
    //            /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
    //            /// <param name="pageCallback" type="Function">func(data, context) optional return true to cancel paging operation.</param>
    //            /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
    //            /// <param name="context" type="Object">(optional) An arbitrary user defined value/object</param>
    //            /// <returns type="Soapi.Routes.Route"/>
    //        },
    //        /**
    //        * Retrieves results
    //        * @function
    //        * @param {Function(data, context)} success function to recieve the results
    //        * @param {func(ErrorsResponse, context, context)} [error] function to recieve errors
    //        * @param {Number} [timeout] Default 3000 (3 seconds)
    //        * @param {Object} [context] An arbitrary user defined value/object
    //        * @returns {Soapi.Routes.Route}
    //        */
    //        getResponse: function(success, error, timeout, context)
    //        {
    //            /// <summary>
    //            /// Retrieves results
    //            /// </summary>
    //            /// <param name="success" type="Function">func(data, context) function to recieve the results</param>
    //            /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
    //            /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
    //            /// <param name="context" type="Object">(optional) An arbitrary user defined value/object</param>
    //            /// <returns type="Soapi.Routes.Route"/>
    //        }
    //    };

    makeClass(Soapi.RouteFactory, "Soapi.RouteFactory");
    //makeClass(Soapi.Routes.Route, 'Soapi.Routes.Route');

    // -----------------------------------------------------------------------------------------------------------------------------
    // - Soapi.Domain Enums
    // -----------------------------------------------------------------------------------------------------------------------------

    Soapi.Domain.SiteState = function()
    {
        /// <field name='normal' static='true' type='String'/>
        /// <field name='closed_beta' static='true' type='String'/>
        /// <field name='open_beta' static='true' type='String'/>
        /// <field name='linked_meta' static='true' type='String'/>
        /// <returns type='Soapi.Domain.SiteState'>

        this.normal = "normal";

        this.closed_beta = "closed_beta";

        this.open_beta = "open_beta";

        this.linked_meta = "linked_meta";
    };
    Soapi.Domain.SiteState.prototype = { normal: 'normal', closed_beta: 'closed_beta', open_beta: 'open_beta', linked_meta: 'linked_meta' };

    makeEnum(Soapi.Domain.SiteState, 'Soapi.Domain.SiteState');

    Soapi.Domain.PostTimelineType = function()
    {
        /// <field name='question' static='true' type='String'/>
        /// <field name='answer' static='true' type='String'/>
        /// <field name='comment' static='true' type='String'/>
        /// <field name='revision' static='true' type='String'/>
        /// <field name='votes' static='true' type='String'/>
        /// <field name='state' static='true' type='String'/>
        /// <field name='accepted' static='true' type='String'/>
        /// <field name='unaccepted' static='true' type='String'/>
        /// <returns type='Soapi.Domain.PostTimelineType'>

        this.question = "question";

        this.answer = "answer";

        this.comment = "comment";

        this.revision = "revision";

        this.votes = "votes";

        this.state = "state";

        this.accepted = "accepted";

        this.unaccepted = "unaccepted";

    };
    Soapi.Domain.PostTimelineType.prototype = { question: 'question', answer: 'answer', comment: 'comment', revision: 'revision', votes: 'votes', state: 'state', accepted: 'accepted', unaccepted: 'unaccepted' };

    makeEnum(Soapi.Domain.PostTimelineType, 'Soapi.Domain.PostTimelineType');

    Soapi.Domain.PostType = function()
    {
        /// <field name='question' static='true' type='String'/>
        /// <field name='answer' static='true' type='String'/>
        /// <returns type='Soapi.Domain.PostType'>

        this.question = "constant";

        this.answer = "constant";
    };
    Soapi.Domain.PostType.prototype = { question: 'question', answer: 'answer' };

    makeEnum(Soapi.Domain.PostType, 'Soapi.Domain.PostType');

    Soapi.Domain.RevisionType = function()
    {
        /// <field name='single_user' static='true' type='String'/>
        /// <field name='vote_based' static='true' type='String'/>
        /// <returns type='Soapi.Domain.RevisionType'>

        this.single_user = "single_user";

        this.vote_based = "vote_based";
    };
    Soapi.Domain.RevisionType.prototype = { single_user: 'single_user', vote_based: 'vote_based' };

    makeEnum(Soapi.Domain.RevisionType, 'Soapi.Domain.RevisionType');

    Soapi.Domain.UserTimelineType = function()
    {
        /// <field name='comment' static='true' type='String'/>
        /// <field name='askoranswered' static='true' type='String'/>
        /// <field name='badge' static='true' type='String'/>
        /// <field name='revision' static='true' type='String'/>
        /// <field name='accepted' static='true' type='String'/>
        /// <returns type='Soapi.Domain.UserTimelineType'>

        this.comment = "comment";

        this.askoranswered = "askoranswered";

        this.badge = "badge";

        this.revision = "revision";

        this.accepted = "accepted";
    };
    Soapi.Domain.UserTimelineType.prototype = { comment: 'comment', askoranswered: 'askoranswered', badge: 'badge', revision: 'revision', accepted: 'accepted' };

    makeEnum(Soapi.Domain.UserTimelineType, 'Soapi.Domain.UserTimelineType');

    Soapi.Domain.UserType = function()
    {
        /// <field name='anonymous' static='true' type='String'/>
        /// <field name='unregistered' static='true' type='String'/>
        /// <field name='registered' static='true' type='String'/>
        /// <field name='moderator' static='true' type='String'/>
        /// <returns type='Soapi.Domain.UserType'>

        this.anonymous = "anonymous";

        this.unregistered = "unregistered";

        this.registered = "registered";

        this.moderator = "moderator";
    };
    Soapi.Domain.UserType.prototype = { anonymous: 'anonymous', unregistered: 'unregistered', registered: 'registered', moderator: 'moderator' };

    makeEnum(Soapi.Domain.UserType, 'Soapi.Domain.UserType');
    // -----------------------------------------------------------------------------------------------------------------------------
    // - Soapi.Parameters Enums
    // -----------------------------------------------------------------------------------------------------------------------------

    Soapi.Domain.CommentSort = function()
    {
        /// <field name='creation' static='true' type='String'/>
        /// <field name='votes' static='true' type='String'/>
        /// <returns type='Soapi.Domain.CommentSort'>

        this.creation = "creation";

        this.votes = "votes";
    };
    Soapi.Domain.CommentSort.prototype = { creation: 'creation', votes: 'votes' };

    makeEnum(Soapi.Domain.CommentSort, 'Soapi.Domain.CommentSort');

    Soapi.Domain.FavoritesSort = function()
    {
        /// <field name='activity' static='true' type='String'/>
        /// <field name='views' static='true' type='String'/>
        /// <field name='creation' static='true' type='String'/>
        /// <field name='added' static='true' type='String'/>
        /// <field name='votes' static='true' type='String'/>
        /// <returns type='Soapi.Domain.FavoritesSort'>

        this.activity = "activity";

        this.views = "views";

        this.creation = "creation";

        this.added = "added";

        this.votes = "votes";
    };
    Soapi.Domain.FavoritesSort.prototype = { activity: 'activity', views: 'views', creation: 'creation', added: 'added', votes: 'votes' };

    makeEnum(Soapi.Domain.FavoritesSort, 'Soapi.Domain.FavoritesSort');

    Soapi.Domain.PostSort = function()
    {
        /// <field name='activity' static='true' type='String'/>
        /// <field name='views' static='true' type='String'/>
        /// <field name='creation' static='true' type='String'/>
        /// <field name='votes' static='true' type='String'/>
        /// <returns type='Soapi.Domain.PostSort'>

        this.activity = "activity";

        this.views = "views";

        this.creation = "creation";

        this.votes = "votes";
    };
    Soapi.Domain.PostSort.prototype = { activity: 'activity', views: 'views', creation: 'creation', votes: 'votes' };

    makeEnum(Soapi.Domain.PostSort, 'Soapi.Domain.PostSort');

    Soapi.Domain.QuestionSort = function()
    {
        /// <field name='activity' static='true' type='String'/>
        /// <field name='votes' static='true' type='String'/>
        /// <field name='creation' static='true' type='String'/>
        /// <field name='featured' static='true' type='String'/>
        /// <field name='hot' static='true' type='String'/>
        /// <field name='week' static='true' type='String'/>
        /// <field name='month' static='true' type='String'/>
        /// <returns type='Soapi.Domain.QuestionSort'>

        this.activity = "activity";

        this.votes = "votes";

        this.creation = "creation";

        this.featured = "featured";

        this.hot = "hot";

        this.week = "week";

        this.month = "month";
    };
    Soapi.Domain.QuestionSort.prototype = { activity: 'activity', votes: 'votes', creation: 'creation', featured: 'featured', hot: 'hot', week: 'week', month: 'month' };

    makeEnum(Soapi.Domain.QuestionSort, 'Soapi.Domain.QuestionSort');

    Soapi.Domain.SortOrder = function()
    {
        /// <field name='desc' static='true' type='String'/>
        /// <field name='asc' static='true' type='String'/>
        /// <returns type='Soapi.Domain.SortOrder'>

        this.desc = "desc";

        this.asc = "asc";
    };
    Soapi.Domain.SortOrder.prototype = { desc: 'desc', asc: 'asc' };

    makeEnum(Soapi.Domain.SortOrder, 'Soapi.Domain.SortOrder');

    Soapi.Domain.TagSort = function()
    {
        /// <field name='popular' static='true' type='String'/>
        /// <field name='activity' static='true' type='String'/>
        /// <field name='name' static='true' type='String'/>
        /// <returns type='Soapi.Domain.TagSort'>

        this.popular = "popular";

        this.activity = "activity";

        this.name = "name";
    };
    Soapi.Domain.TagSort.prototype = { popular: 'popular', activity: 'activity', name: 'name' };

    makeEnum(Soapi.Domain.TagSort, 'Soapi.Domain.TagSort');

    Soapi.Domain.UserSort = function()
    {
        /// <field name='reputation' static='true' type='String'/>
        /// <field name='creation' static='true' type='String'/>
        /// <field name='name' static='true' type='String'/>
        /// <returns type='Soapi.Domain.UserSort'>

        this.reputation = "reputation";

        this.creation = "creation";

        this.name = "name";
    };
    Soapi.Domain.UserSort.prototype = { reputation: 'reputation', creation: 'creation', name: 'name' };

    makeEnum(Soapi.Domain.UserSort, 'Soapi.Domain.UserSort');

    // =============================================================================================================================
    // = Soapi.Domain objects
    // =============================================================================================================================

    Soapi.Domain.Styling = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='link_color' type='String'>color of links, as a CSS style color value</field>
        /// <field name='tag_foreground_color' type='String'>foreground color of tags, as a CSS style color value</field>
        /// <field name='tag_background_color' type='String'>background/fill color of tags, as a CSS style color value</field>
        /// <returns type='Soapi.Domain.Styling'>

        this.link_color = "";

        this.tag_foreground_color = "";

        this.tag_background_color = "";
    };

    makeClass(Soapi.Domain.Styling, 'Soapi.Domain.Styling');

    Soapi.Domain.Answer = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='answer_id' type='Number'>id of the answer </field>
        /// <field name='accepted' type='Boolean'>whether this answer is the accepted answer on its question </field>
        /// <field name='answer_comments_url' type='String'>a link to the method that returns comments on this answer </field>
        /// <field name='question_id' type='Number'>id of the question this post is or is on </field>
        /// <field name='locked_date' type='Date'>date this question was locked  (optional)</field>
        /// <field name='owner' type='Soapi.Domain.User'> </field>
        /// <field name='creation_date' type='Date'>date this post was created </field>
        /// <field name='last_edit_date' type='Date'>last time this post was edited  (optional)</field>
        /// <field name='last_activity_date' type='Date'>last time this post had any activity  (optional)</field>
        /// <field name='up_vote_count' type='Number'>number of up votes on this post </field>
        /// <field name='down_vote_count' type='Number'>number of down votes on this post </field>
        /// <field name='view_count' type='Number'>number of times this post has been viewed </field>
        /// <field name='score' type='Number'>score of this post </field>
        /// <field name='community_owned' type='Boolean'>whether this post is community owned </field>
        /// <field name='title' type='String'>title of this post </field>
        /// <field name='body' type='String'>body of this post.  (optional)</field>
        /// <field name='comments' type='Array'> </field>
        /// <returns type='Soapi.Domain.Answer'>

        this.answer_id = 0;

        this.accepted = false;

        this.answer_comments_url = "";

        this.question_id = 0;

        this.locked_date = 0;

        this.owner = null;

        this.creation_date = 0

        this.last_edit_date = 0;

        this.last_activity_date = 0;

        this.up_vote_count = 0;

        this.down_vote_count = 0;

        this.view_count = 0;

        this.score = 0;

        this.community_owned = false;

        this.title = "";

        this.body = "";

        this.comments = [];
    };

    makeClass(Soapi.Domain.Answer, 'Soapi.Domain.Answer');

    Soapi.Domain.ApiVersion = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='version' type='String'>api version </field>
        /// <field name='revision' type='String'>site revision </field>
        /// <returns type='Soapi.Domain.ApiVersion'>

        this.version = "";

        this.revision = "";
    };

    makeClass(Soapi.Domain.ApiVersion, 'Soapi.Domain.ApiVersion');

    Soapi.Domain.Badge = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='badge_id' type='Number'>id of the badge </field>
        /// <field name='rank' type='String'>rank of the badge; one of bronze, silver, or gold </field>
        /// <field name='name' type='String'>name of the badge </field>
        /// <field name='description' type='String'>description of the badge </field>
        /// <field name='award_count' type='Number'>number of times awarded </field>
        /// <field name='tag_based' type='Boolean'>whether this badge is based on a tag </field>
        /// <field name='user' type='Soapi.Domain.User'> </field>
        /// <field name='badges_recipients_url' type='String'>link to recipients of this badge </field>
        /// <returns type='Soapi.Domain.Badge'>

        this.badge_id = 0;

        this.rank = "";

        this.name = "";

        this.description = "";

        this.award_count = 0;

        this.tag_based

        this.user = null;

        this.badges_recipients_url = "";

    };

    makeClass(Soapi.Domain.Badge, 'Soapi.Domain.Badge');

    Soapi.Domain.BadgeCounts = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='gold' type='Number'>number of gold badges received  (optional)</field>
        /// <field name='silver' type='Number'>number of silver badges received  (optional)</field>
        /// <field name='bronze' type='Number'>number of bronze badges received  (optional)</field>
        /// <returns type='Soapi.Domain.BadgeCounts'>

        this.gold = 0;

        this.silver = 0;

        this.bronze = 0;
    };

    makeClass(Soapi.Domain.BadgeCounts, 'Soapi.Domain.BadgeCounts');

    Soapi.Domain.Comment = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='comment_id' type='Number'>id of the comment </field>
        /// <field name='creation_date' type='Date'>creation date of the comment </field>
        /// <field name='owner' type='Soapi.Domain.User'> </field>
        /// <field name='reply_to_user' type='Soapi.Domain.User'> </field>
        /// <field name='post_id' type='Number'>post this comment is on </field>
        /// <field name='post_type' type='Soapi.Domain.PostType'>type of post this comment is on; one of question or answer.</field>
        /// <field name='score' type='Number'>number of upvotes on this comment </field>
        /// <field name='edit_count' type='Number'>number of times this comment has been edited  (optional)</field>
        /// <field name='body' type='String'>body of the comment </field>
        /// <returns type='Soapi.Domain.Comment'>

        this.comment_id = 0;

        this.creation_date = 0;

        this.owner = null;

        this.reply_to_user = null;

        this.post_id = 0;

        this.post_type = null;

        this.score

        this.edit_count

        this.body = "";
    };

    makeClass(Soapi.Domain.Comment, 'Soapi.Domain.Comment');

    Soapi.Domain.Migrated = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='new_question_id' type='Number'>id of the question this one was migrated to </field>
        /// <field name='to_site' type='Soapi.Domain.Site'> </field>
        /// <field name='on_date' type='Date'>the date the migration occurred </field>
        /// <returns type='Soapi.Domain.Migrated'>

        this.new_question_id = 0;

        this.to_site = null;

        this.on_date = 0;

    };

    makeClass(Soapi.Domain.Migrated, 'Soapi.Domain.Migrated');

    Soapi.Domain.PostTimeline = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='timeline_type' type='Soapi.Domain.PostTimelineType'>type of event . one of question, answer, comment, revision, votes, state, accepted, unaccepted</field>

        /// <field name='question_id' type='Number'>question this event is associated with, will be one of those passed into the method</field>
        /// <field name='post_id' type='Number'>post this event occurred on </field>
        /// <field name='comment_id' type='Number'>id of the comment  (optional)</field>
        /// <field name='revision_guid' type='String'>id of the revision  (optional)</field>
        /// <field name='creation_date' type='Date'>date this event occurred </field>
        /// <field name='user' type='Soapi.Domain.User'> </field>
        /// <field name='owner' type='Soapi.Domain.User'> </field>
        /// <field name='action' type='String'>the action </field>
        /// <field name='post_revision_url' type='String'>link to the particular revision  (optional)</field>
        /// <field name='post_url' type='String'>link to the post this event occurred on  (optional)</field>
        /// <field name='post_comment_url' type='String'>link to the comment  (optional)</field>
        /// <returns type='Soapi.Domain.PostTimeline'>

        this.timeline_type = null;

        this.question_id = 0;

        this.post_id = 0;

        this.comment_id = 0;

        this.revision_guid = "";

        this.creation_date = 0;

        this.user = null;

        this.owner = null;

        this.action = "";

        this.post_revision_url = "";

        this.post_url = "";

        this.post_comment_url = "";
    };

    makeClass(Soapi.Domain.PostTimeline, 'Soapi.Domain.PostTimeline');

    Soapi.Domain.Question = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='tags' type='Array'> </field>
        /// <field name='answer_count' type='Number'>number of answer on this question </field>
        /// <field name='answers' type='Array'> </field>
        /// <field name='accepted_answer_id' type='Number'>id of the accepted answer  (optional)</field>
        /// <field name='favorite_count' type='Number'>number of users who have favorited this question </field>
        /// <field name='bounty_closes_date' type='Date'>date the bounty closes on this question  (optional)</field>
        /// <field name='bounty_amount' type='Number'>amount of rep the bounty is worth  (optional)</field>
        /// <field name='closed_date' type='Date'>date this question was closed  (optional)</field>
        /// <field name='closed_reason' type='String'>why this question was closed  (optional)</field>
        /// <field name='protected_date' type='Date'>date this question was protected  (optional)</field>
        /// <field name='migrated' type='Soapi.Domain.Migrated'> </field>
        /// <field name='question_timeline_url' type='String'>link to the timeline of this question </field>
        /// <field name='question_comments_url' type='String'>link to the comments on this question </field>
        /// <field name='question_answers_url' type='String'>link to the answers on this question </field>
        /// <field name='question_id' type='Number'>id of the question this post is or is on </field>
        /// <field name='locked_date' type='Date'>date this question was locked  (optional)</field>
        /// <field name='owner' type='Soapi.Domain.User'> </field>
        /// <field name='creation_date' type='Date'>date this post was created </field>
        /// <field name='last_edit_date' type='Date'>last time this post was edited  (optional)</field>
        /// <field name='last_activity_date' type='Date'>last time this post had any activity  (optional)</field>
        /// <field name='up_vote_count' type='Number'>number of up votes on this post </field>
        /// <field name='down_vote_count' type='Number'>number of down votes on this post </field>
        /// <field name='view_count' type='Number'>number of times this post has been viewed </field>
        /// <field name='score' type='Number'>score of this post </field>
        /// <field name='community_owned' type='Boolean'>whether this post is community owned </field>
        /// <field name='title' type='String'>title of this post </field>
        /// <field name='body' type='String'>body of this post.  (optional)</field>
        /// <field name='comments' type='Array'> </field>
        /// <returns type='Soapi.Domain.Question'>

        this.tags

        this.answer_count = 0;

        this.answers = null;

        this.accepted_answer_id = 0;

        this.favorite_count = 0;

        this.bounty_closes_date = 0;

        this.bounty_amount = 0;

        this.closed_date = 0;

        this.closed_reason = "";

        this.protected_date = 0;

        this.migrated = null;

        this.question_timeline_url = "";

        this.question_comments_url = "";

        this.question_answers_url = "";

        this.question_id = 0;

        this.locked_date = 0;

        this.owner = null;

        this.creation_date = 0;

        this.last_edit_date = 0;

        this.last_activity_date = 0;

        this.up_vote_count = 0;

        this.down_vote_count = 0;

        this.view_count = 0;

        this.score = 0;

        this.community_owned

        this.title = "";

        this.body = "";

        this.comments = null;
    };

    makeClass(Soapi.Domain.Question, 'Soapi.Domain.Question');

    Soapi.Domain.RepChange = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='user_id' type='Number'>user this rep_change affects </field>
        /// <field name='post_id' type='Number'>post this rep_change is from </field>
        /// <field name='post_type' type='Soapi.Domain.PostType'>type of post; one of question or answer </field>
        /// <field name='title' type='String'>title of the question the post either is or is on </field>
        /// <field name='positive_rep' type='Number'>amount of rep gained </field>
        /// <field name='negative_rep' type='Number'>amount of rep lost </field>
        /// <field name='on_date' type='Date'>when this rep was gained and/or lost </field>
        /// <returns type='Soapi.Domain.RepChange'>

        this.user_id = 0;

        this.post_id = 0;

        this.post_type = null;

        this.title = "";

        this.positive_rep = 0;

        this.negative_rep = 0;

        this.on_date = 0;
    };

    makeClass(Soapi.Domain.RepChange, 'Soapi.Domain.RepChange');

    Soapi.Domain.Revision = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='body' type='String'>body of the revision  (optional)</field>
        /// <field name='comment' type='String'>comment on the revision </field>
        /// <field name='creation_date' type='Date'>when the revision occurred </field>
        /// <field name='is_question' type='Boolean'>if the post is a question </field>
        /// <field name='is_rollback' type='Boolean'>if the revision is a rollback </field>
        /// <field name='last_body' type='String'>the previous body  (optional)</field>
        /// <field name='last_title' type='String'>the previous title  (optional)</field>
        /// <field name='last_tags' type='Array'> </field>
        /// <field name='revision_guid' type='String'>the id of the revision </field>
        /// <field name='revision_number' type='Number'>the revision number  (optional)</field>
        /// <field name='tags' type='Array'> </field>
        /// <field name='title' type='String'>the title of the revision  (optional)</field>
        /// <field name='revision_type' type='Soapi.Domain.RevisionType'>the revision type. one of single_user, vote_based</field>
        /// <field name='set_community_wiki' type='Boolean'>if this revision set the post to community wiki </field>
        /// <field name='user' type='Soapi.Domain.User'> </field>
        /// <field name='post_id' type='Number'>the post the revision is of </field>
        /// <returns type='Soapi.Domain.Revision'>

        this.body = "";

        this.comment = "";

        this.creation_date = 0;

        this.is_question

        this.is_rollback

        this.last_body = "";

        this.last_title = "";

        this.last_tags

        this.revision_guid = "";

        this.revision_number = 0;

        this.tags

        this.title = "";

        this.revision_type = null;

        this.set_community_wiki

        this.user = null;

        this.post_id = 0;
    };

    makeClass(Soapi.Domain.Revision, 'Soapi.Domain.Revision');

    Soapi.Domain.Site = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='name' type='String'>name of the site </field>
        /// <field name='logo_url' type='String'>absolute path to the logo for the site </field>
        /// <field name='api_endpoint' type='String'>absolute path to the api endpoint for the site, sans the version string </field>
        /// <field name='site_url' type='String'>absolute path to the front page of the site </field>
        /// <field name='description' type='String'>description of the site, suitable for display to a user </field>
        /// <field name='icon_url' type='String'>absolute path to an icon suitable for representing the site, it is a consumers responsibility to scale </field>
        /// <field name='aliases' type='Array'> </field>
        /// <field name='state' type='Soapi.Domain.SiteState'>state of this site. one of normal, closed_beta, open_beta, linked_meta</field>
        /// <field name='styling' type='Soapi.Domain.Styling'></field>
        /// <returns type='Soapi.Domain.Site'>

        this.name = "";

        this.logo_url = "";

        this.api_endpoint = "";

        this.site_url = "";

        this.description = "";

        this.icon_url = "";

        this.aliases = [];

        this.state = null;

        this.styling = null;
    };

    makeClass(Soapi.Domain.Site, 'Soapi.Domain.Site');

    Soapi.Domain.Statistics = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='total_questions' type='Number'>all questions on a site </field>
        /// <field name='total_unanswered' type='Number'>all unanswered questions on a site </field>
        /// <field name='total_accepted' type='Number'>count of questions with accept answers, or equivalently count of answers accepted </field>
        /// <field name='total_answers' type='Number'>all answers on a site </field>
        /// <field name='total_comments' type='Number'>all comments on a site </field>
        /// <field name='total_votes' type='Number'>all votes on a site </field>
        /// <field name='total_badges' type='Number'>all badges on a site </field>
        /// <field name='total_users' type='Number'>all users on a site </field>
        /// <field name='questions_per_minute' type='Number'>questions asked per minute </field>
        /// <field name='answers_per_minute' type='Number'>answers posted per minute </field>
        /// <field name='badges_per_minute' type='Number'>badges awarded per minute </field>
        /// <field name='views_per_day' type='Number'>average views per day on all questions </field>
        /// <field name='api_version' type='Soapi.Domain.ApiVersion'> </field>
        /// <field name='site' type='Soapi.Domain.Site'> </field>
        /// <returns type='Soapi.Domain.Statistics'>

        this.total_questions = 0;

        this.total_unanswered = 0;

        this.total_accepted = 0;

        this.total_answers = 0;

        this.total_comments = 0;

        this.total_votes = 0;

        this.total_badges = 0;

        this.total_users = 0;

        this.questions_per_minute = 0;

        this.answers_per_minute = 0;

        this.badges_per_minute = 0;

        this.views_per_day = 0;

        this.api_version = null;

        this.site = null;
    };

    makeClass(Soapi.Domain.Statistics, 'Soapi.Domain.Statistics');

    Soapi.Domain.Tag = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='name' type='String'>name of the tag </field>
        /// <field name='count' type='Number'>tag count, exact meaning depends on context </field>
        /// <field name='restricted_to' type='Soapi.Domain.UserType'>user types that can make use of this tag, lack of this field indicates it is useable by all  (optional) one of anonymous, unregistered, registered, moderator</field>
        /// <field name='fulfills_required' type='Boolean'>indicates whether this tag is one of those that is required to be on a post </field>
        /// <field name='user_id' type='Number'>user associated with this tag, depends on context  (optional)</field>
        /// <returns type='Soapi.Domain.Tag'>

        this.name = "";

        this.count = 0;

        this.restricted_to = null;

        this.fulfills_required

        this.user_id = 0;

    };

    makeClass(Soapi.Domain.Tag, 'Soapi.Domain.Tag');

    Soapi.Domain.User = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='user_id' type='Number'>id of the user </field>
        /// <field name='user_type' type='Soapi.Domain.UserType'>type of the user. one of anonymous, unregistered, registered, moderator </field>
        /// <field name='creation_date' type='Date'>date user was created </field>
        /// <field name='display_name' type='String'>displayable name of the user </field>
        /// <field name='reputation' type='Number'>reputation of the user </field>
        /// <field name='email_hash' type='String'>email hash, suitable for fetching a gravatar </field>
        /// <field name='age' type='Number'>age of the user  (optional)</field>
        /// <field name='last_access_date' type='Date'>last date this user accessed the site </field>
        /// <field name='website_url' type='String'>user's website  (optional)</field>
        /// <field name='location' type='String'>user's location  (optional)</field>
        /// <field name='about_me' type='String'>user's about me blurb  (optional)</field>
        /// <field name='question_count' type='Number'>number of questions asked </field>
        /// <field name='answer_count' type='Number'>number of answers posted </field>
        /// <field name='view_count' type='Number'>number of times profile viewed </field>
        /// <field name='up_vote_count' type='Number'>number of times this user has up voted </field>
        /// <field name='down_vote_count' type='Number'>number of times this user has down voted </field>
        /// <field name='accept_rate' type='Number'>user's answer acceptance rate  (optional)</field>
        /// <field name='association_id' type='String'>identifier for this user across all SE sites  (optional)</field>
        /// <field name='user_questions_url' type='String'>link to the questions the user has asked </field>
        /// <field name='user_answers_url' type='String'>link to the answers the user has posted </field>
        /// <field name='user_favorites_url' type='String'>link to the questions the user has favorited </field>
        /// <field name='user_tags_url' type='String'>link to a list of tags the user has participated in </field>
        /// <field name='user_badges_url' type='String'>link to a list of badges the user has receieved </field>
        /// <field name='user_timeline_url' type='String'>link to the timeline of this user </field>
        /// <field name='user_mentioned_url' type='String'>link to a list of comments which mention this user </field>
        /// <field name='user_comments_url' type='String'>link to a list of comments this user has made </field>
        /// <field name='user_reputation_url' type='String'>link to a list of rep_changes that this user has experienced </field>
        /// <field name='badge_counts' type='Soapi.Domain.BadgeCounts'> </field>
        /// <field name='timed_penalty_date' type='Date'>date until which this user is in the "penalty box"  (optional)</field>
        /// <field name='on_site' type='Soapi.Domain.Site'></field>
        /// <returns type="Soapi.Domain.User"/>

        this.user_id = 0;

        this.user_type = null;

        this.creation_date = 0;

        this.display_name = "";

        this.reputation = 0;

        this.email_hash = "";

        this.age = 0;

        this.last_access_date = 0;

        this.website_url = "";

        this.location = "";

        this.about_me = "";

        this.question_count

        this.answer_count

        this.view_count

        this.up_vote_count

        this.down_vote_count

        this.accept_rate = 0;

        this.association_id = "";

        this.user_questions_url = "";

        this.user_answers_url = "";

        this.user_favorites_url = "";

        this.user_tags_url = "";

        this.user_badges_url = "";

        this.user_timeline_url = "";

        this.user_mentioned_url = "";

        this.user_comments_url = "";

        this.user_reputation_url = "";

        this.badge_counts = null;

        this.timed_penalty_date = 0;
    };

    makeClass(Soapi.Domain.User, 'Soapi.Domain.User');

    Soapi.Domain.UserTimeline = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='user_id' type='Number'>user experiencing this event  (optional)</field>
        /// <field name='timeline_type' type='Soapi.Domain.UserTimelineType'>type of event  (optional) one of comment, askoranswered, badge, revision, accepted</field>
        /// <field name='post_id' type='Number'>post id  (optional)</field>
        /// <field name='post_type' type='Soapi.Domain.PostType'>post type; one of question or answer  (optional)</field>
        /// <field name='comment_id' type='Number'>comment id  (optional)</field>
        /// <field name='action' type='String'>action of this event  (optional)</field>
        /// <field name='creation_date' type='Date'>when this event occurred  (optional)</field>
        /// <field name='description' type='String'>description of this event  (optional)</field>
        /// <field name='detail' type='String'>details of this event  (optional)</field>
        /// <returns type='Soapi.Domain.UserTimeline'>

        this.user_id = 0;

        this.timeline_type = null;

        this.post_id = 0;

        this.post_type = null;

        this.comment_id = 0;

        this.action = "";

        this.creation_date = 0;

        this.description = "";

        this.detail = "";
    };

    makeClass(Soapi.Domain.UserTimeline, 'Soapi.Domain.UserTimeline');
    /* Soapi.Responses
    **************************************
    */

    Soapi.Responses.AnswersResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='total' type='Number'>total number of items in this sequence </field>
        /// <field name='page' type='Number'>page of the total collection returned </field>
        /// <field name='pagesize' type='Number'>size of each page returned from the collection </field>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.AnswersResponse'>

        this.total = 0;

        this.page = 0;

        this.pagesize = 0;

        this.items = null;
    };

    makeClass(Soapi.Responses.AnswersResponse, 'Soapi.Responses.AnswersResponse');

    Soapi.Responses.CommentsResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='total' type='Number'>total number of items in this sequence </field>
        /// <field name='page' type='Number'>page of the total collection returned </field>
        /// <field name='pagesize' type='Number'>size of each page returned from the collection </field>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.CommentsResponse'>

        this.total = 0;

        this.page = 0;

        this.pagesize = 0;

        this.items = null;

    };

    makeClass(Soapi.Responses.CommentsResponse, 'Soapi.Responses.CommentsResponse');

    Soapi.Responses.BadgesResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.BadgesResponse'>

        this.items = null;

    };

    makeClass(Soapi.Responses.BadgesResponse, 'Soapi.Responses.BadgesResponse');

    Soapi.Responses.UsersResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='total' type='Number'>total number of items in this sequence </field>
        /// <field name='page' type='Number'>page of the total collection returned </field>
        /// <field name='pagesize' type='Number'>size of each page returned from the collection </field>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.UsersResponse'>

        this.total = 0;

        this.page = 0;

        this.pagesize = 0;

        this.items = null;
    };

    makeClass(Soapi.Responses.UsersResponse, 'Soapi.Responses.UsersResponse');

    Soapi.Responses.ErrorsResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='code' type='Number'>code of the error </field>
        /// <field name='message' type='String'>descriptive message about the error </field>
        /// <field name='url' type='String'>the url that generated the error</field>
        /// <returns type='Soapi.Responses.ErrorsResponse'>

        this.code = 0;

        this.message = "";

        this.url = "";
    };

    makeClass(Soapi.Responses.ErrorsResponse, 'Soapi.Responses.ErrorsResponse');

    Soapi.Responses.QuestionsResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='total' type='Number'>total number of items in this sequence </field>
        /// <field name='page' type='Number'>page of the total collection returned </field>
        /// <field name='pagesize' type='Number'>size of each page returned from the collection </field>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.QuestionsResponse'>

        this.total = 0;

        this.page = 0;

        this.pagesize = 0;

        this.items = null;

    };

    makeClass(Soapi.Responses.QuestionsResponse, 'Soapi.Responses.QuestionsResponse');

    Soapi.Responses.PostTimelineResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='total' type='Number'>total number of items in this sequence </field>
        /// <field name='page' type='Number'>page of the total collection returned </field>
        /// <field name='pagesize' type='Number'>size of each page returned from the collection </field>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.PostTimelineResponse'>

        this.total = 0;

        this.page = 0;

        this.pagesize = 0;

        this.items = null;
    };

    makeClass(Soapi.Responses.PostTimelineResponse, 'Soapi.Responses.PostTimelineResponse');

    Soapi.Responses.RevisionsResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.RevisionsResponse'>

        this.items = null;

    };

    makeClass(Soapi.Responses.RevisionsResponse, 'Soapi.Responses.RevisionsResponse');

    Soapi.Responses.StatsResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.StatsResponse'>

        this.items = null;

    };

    makeClass(Soapi.Responses.StatsResponse, 'Soapi.Responses.StatsResponse');

    Soapi.Responses.TagsResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='total' type='Number'>total number of items in this sequence </field>
        /// <field name='page' type='Number'>page of the total collection returned </field>
        /// <field name='pagesize' type='Number'>size of each page returned from the collection </field>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.TagsResponse'>

        this.total = 0;

        this.page = 0;

        this.pagesize = 0;

        this.items = null;
    };

    makeClass(Soapi.Responses.TagsResponse, 'Soapi.Responses.TagsResponse');

    Soapi.Responses.RepChangesResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='total' type='Number'>total number of items in this sequence </field>
        /// <field name='page' type='Number'>page of the total collection returned </field>
        /// <field name='pagesize' type='Number'>size of each page returned from the collection </field>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.RepChangesResponse'>

        this.total = 0;

        this.page = 0;

        this.pagesize = 0;

        this.items = null;
    };

    makeClass(Soapi.Responses.RepChangesResponse, 'Soapi.Responses.RepChangesResponse');

    Soapi.Responses.UserTimelinesResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='total' type='Number'>total number of items in this sequence </field>
        /// <field name='page' type='Number'>page of the total collection returned </field>
        /// <field name='pagesize' type='Number'>size of each page returned from the collection </field>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.UserTimelinesResponse'>

        this.total = 0;

        this.page = 0;

        this.pagesize = 0;

        this.items = null;
    };

    makeClass(Soapi.Responses.UserTimelinesResponse, 'Soapi.Responses.UserTimelinesResponse');

    Soapi.Responses.SitesResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.SitesResponse'>

        this.items = null;
    };

    makeClass(Soapi.Responses.SitesResponse, 'Soapi.Responses.SitesResponse');

    Soapi.Responses.UsersAssociatedResponse = function(jsob)
    {
        /// <param name='jsob' type='Object'>Optional initilizer object</param>
        /// <field name='items' type='Array'> </field>
        /// <returns type='Soapi.Responses.UsersAssociatedResponse'>

        this.items = null;
    };

    makeClass(Soapi.Responses.UsersAssociatedResponse, 'Soapi.Responses.UsersAssociatedResponse');

    /* Soapi.Domain RouteMaps
    **************************************
    */




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + SitesRouteMap  : /sites Returns a list of all the sites in the StackExchange network.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.SitesRouteMap = function()
    {
        /// <summary>
        /// Returns a list of all the sites in the StackExchange network.
        /// NOTE: the target of the constructing factory is ignored when requesting
        /// api sites. This means you may use any existing factory instance or
        /// simply create a factory with no target.
        /// </summary>
        /// <returns type='Soapi.Routes.SitesRouteMap'/>
    };

    Soapi.Routes.SitesRouteMap.routeFormat = null;

    Soapi.Routes.SitesRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(SitesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(SitesResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.SitesRouteMap"/>
    };

    Soapi.Routes.SitesRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {

        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(SitesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.SitesRouteMap"/>
    };


    makeClass(Soapi.Routes.SitesRouteMap, 'Soapi.Routes.SitesRouteMap');

    Soapi.RouteFactory.prototype.Sites = function()
    {
        /// <summary>
        /// Returns a list of all the sites in the StackExchange network.
        /// NOTE: the target of the constructing factory is ignored when requesting
        /// associated users. This means you may use any existing factory instance or
        /// simply create a factory with no target.
        /// </summary>
        /// <returns type='Soapi.Routes.SitesRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdAssociatedRouteMap : /users/{id}/associated Gets all the associated user accounts across the StackExchange network as identified by the given association_id.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdAssociatedRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets all the associated user accounts across the StackExchange network as identified by the given association_id
        /// </summary>
        /// <param name='id' type='String'>user's association_id</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route.  { id: String }</param>
        /// <field name='id' type='String'>user's association_id</field>
        /// <returns type='Soapi.Routes.UsersByIdAssociatedRouteMap'/>

        this.id = null;
    };

    Soapi.Routes.UsersByIdAssociatedRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdAssociatedRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String }</param>
        /// <returns type="Soapi.Routes.UsersByIdAssociatedRouteMap"/>
    };

    Soapi.Routes.UsersByIdAssociatedRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(UsersAssociatedResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(UsersAssociatedResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdAssociatedRouteMap"/>
    };

    Soapi.Routes.UsersByIdAssociatedRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(UsersAssociatedResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdAssociatedRouteMap"/>
    };

    makeClass(Soapi.Routes.UsersByIdAssociatedRouteMap, 'Soapi.Routes.UsersByIdAssociatedRouteMap');

    Soapi.RouteFactory.prototype.UsersByIdAssociated = function(id, params)
    {
        /// <summary>
        /// Gets all the associated user accounts across the StackExchange network as identified by the given association_id
        /// </summary>
        /// <param name='id' type='String'>user's association_id</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route.  { id: String }</param>        
        /// <returns type='Soapi.Routes.UsersByIdAssociatedRouteMap'/>
    };









    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + AnswersByIdRouteMap : /answers/{id}  Gets the set of answers enumerated in id.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.AnswersByIdRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the set of answers enumerated in id.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name='params' type='Object'>(optional) An object map of parameters to apply to this route. { id: String|Array, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='body' type='Boolean'>When "true", a post's body will be included in the response.</field>
        /// <field name='comments' type='Boolean'>When "true", any comments on a post will be included in the response.</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.PostSort'>one of activity (default), views, creation, votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.AnswersByIdRouteMap'/>

        this.id = null;

        this.body = null;

        this.comments = null;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = null;

        this.pagesize = null;

        this.sort = null;

        this.todate = null;


    };

    Soapi.Routes.AnswersByIdRouteMap.routeFormat = null;

    Soapi.Routes.AnswersByIdRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <returns type="Soapi.Routes.AnswersByIdRouteMap"/>
    };

    Soapi.Routes.AnswersByIdRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(AnswersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(AnswersResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.AnswersByIdRouteMap"/>
    };

    Soapi.Routes.AnswersByIdRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(AnswersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.AnswersByIdRouteMap"/>
    };

    makeClass(Soapi.Routes.AnswersByIdRouteMap, 'Soapi.Routes.AnswersByIdRouteMap');

    Soapi.RouteFactory.prototype.AnswersById = function(id, params)
    {
        /// <summary>
        /// Gets the set of answers enumerated in id.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name='params' type='Object'>(optional) An object map of parameters to apply to this route. { id: String|Array, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <returns type='Soapi.Routes.AnswersByIdRouteMap'/>
    };



    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + AnswersByIdCommentsRouteMap : /answers/{id}/comments Gets the comments associated with a set of answers.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.AnswersByIdCommentsRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the comments associated with a set of answers.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.CommentSort'>one of creation (default), votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.AnswersByIdCommentsRouteMap'/>

        this.id = null;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = null;

        this.pagesize = null;

        this.sort = null;

        this.todate = null;

    };

    Soapi.Routes.AnswersByIdCommentsRouteMap.routeFormat = null;

    Soapi.Routes.AnswersByIdCommentsRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type="Soapi.Routes.AnswersByIdCommentsRouteMap"/>
    };

    Soapi.Routes.AnswersByIdCommentsRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(CommentsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.AnswersByIdCommentsRouteMap"/>
    };

    Soapi.Routes.AnswersByIdCommentsRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.AnswersByIdCommentsRouteMap"/>
    };

    makeClass(Soapi.Routes.AnswersByIdCommentsRouteMap, 'Soapi.Routes.AnswersByIdCommentsRouteMap');

    Soapi.RouteFactory.prototype.AnswersByIdComments = function(id, params)
    {
        /// <summary>
        /// Gets the comments associated with a set of answers.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type='Soapi.Routes.AnswersByIdCommentsRouteMap'/>
    };



    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + BadgesRouteMap : /badges  Gets all badges, in alphabetical order.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.BadgesRouteMap = function()
    {
        /// <summary>
        /// Gets all badges, in alphabetical order.
        /// </summary>
        /// <returns type='Soapi.Routes.BadgesRouteMap'/>


    };

    Soapi.Routes.BadgesRouteMap.routeFormat = null;

    Soapi.Routes.BadgesRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(BadgesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(BadgesResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.BadgesRouteMap"/>
    };

    Soapi.Routes.BadgesRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(BadgesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.BadgesRouteMap"/>
    };

    makeClass(Soapi.Routes.BadgesRouteMap, 'Soapi.Routes.BadgesRouteMap');

    Soapi.RouteFactory.prototype.Badges = function()
    {
        /// <summary>
        /// Gets all badges, in alphabetical order.
        /// </summary>
        /// <returns type='Soapi.Routes.BadgesRouteMap'/>
    };



    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + BadgesByIdRouteMap : /badges/{id} Gets the users that have been awarded the badges identified in 'id'.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.BadgesByIdRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the users that have been awarded the badges identified in 'id'.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.BadgesByIdRouteMap'/>

        this.id = null;

        this.fromdate = null;

        this.page = null;

        this.pagesize = null;

        this.todate = null;
    };

    Soapi.Routes.BadgesByIdRouteMap.routeFormat = null;

    Soapi.Routes.BadgesByIdRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <returns type="Soapi.Routes.BadgesByIdRouteMap"/>
    };

    Soapi.Routes.BadgesByIdRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(BadgesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(BadgesResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.BadgesByIdRouteMap"/>
    };

    Soapi.Routes.BadgesByIdRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(BadgesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.BadgesByIdRouteMap"/>
    };


    makeClass(Soapi.Routes.BadgesByIdRouteMap, 'Soapi.Routes.BadgesByIdRouteMap');

    Soapi.RouteFactory.prototype.BadgesById = function(id, params)
    {
        /// <summary>
        /// Gets the users that have been awarded the badges identified in 'id'.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <returns type='Soapi.Routes.BadgesByIdRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + BadgesNameRouteMap : /badges/name Gets all standard, non-tag-based badges in alphabetical order.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.BadgesNameRouteMap = function()
    {
        /// <summary>
        /// Gets all standard, non-tag-based badges in alphabetical order.
        /// </summary>
        /// <returns type='Soapi.Routes.BadgesNameRouteMap'/>



    };

    Soapi.Routes.BadgesNameRouteMap.routeFormat = null;

    Soapi.Routes.BadgesNameRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(BadgesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(BadgesResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.BadgesNameRouteMap"/>
    };

    Soapi.Routes.BadgesNameRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(BadgesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.BadgesNameRouteMap"/>
    };
    makeClass(Soapi.Routes.BadgesNameRouteMap, 'Soapi.Routes.BadgesNameRouteMap');

    Soapi.RouteFactory.prototype.BadgesName = function()
    {
        /// <summary>
        /// Gets all standard, non-tag-based badges in alphabetical order.
        /// </summary>
        /// <returns type='Soapi.Routes.BadgesNameRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + BadgesTagsRouteMap : /badges/tags Gets all tag-based badges in alphabetical order.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.BadgesTagsRouteMap = function()
    {
        /// <summary>
        /// Gets all tag-based badges in alphabetical order.
        /// </summary>
        /// <returns type='Soapi.Routes.BadgesTagsRouteMap'/>

    };

    Soapi.Routes.BadgesTagsRouteMap.routeFormat = null;

    Soapi.Routes.BadgesTagsRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(BadgesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(BadgesResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.BadgesTagsRouteMap"/>
    };

    Soapi.Routes.BadgesTagsRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(BadgesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.BadgesTagsRouteMap"/>
    };


    makeClass(Soapi.Routes.BadgesTagsRouteMap, 'Soapi.Routes.BadgesTagsRouteMap');

    Soapi.RouteFactory.prototype.BadgesTags = function()
    {
        /// <summary>
        /// Gets all tag-based badges in alphabetical order.
        /// </summary>
        /// <returns type='Soapi.Routes.BadgesTagsRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + CommentsByIdRouteMap : /comments/{id} Gets comments by ids.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.CommentsByIdRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets comments by ids.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date,  }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.CommentSort'>one of creation (default), votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.CommentsByIdRouteMap'/>

        this.id = null;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = null;

        this.pagesize = null;

        this.sort = null;

        this.todate = null;


    };

    Soapi.Routes.CommentsByIdRouteMap.routeFormat = null;

    Soapi.Routes.CommentsByIdRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date,  }</param>
        /// <returns type="Soapi.Routes.CommentsByIdRouteMap"/>
    };

    Soapi.Routes.CommentsByIdRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(CommentsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.CommentsByIdRouteMap"/>
    };

    Soapi.Routes.CommentsByIdRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.CommentsByIdRouteMap"/>
    };

    makeClass(Soapi.Routes.CommentsByIdRouteMap, 'Soapi.Routes.CommentsByIdRouteMap');

    Soapi.RouteFactory.prototype.CommentsById = function(id, params)
    {
        /// <summary>
        /// Gets comments by ids.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date,  }</param>
        /// <returns type='Soapi.Routes.CommentsByIdRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + ErrorsByIdRouteMap : /errors/{id} Simulates an error given its code
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.ErrorsByIdRouteMap = function(id, params)
    {
        /// <summary>
        /// Simulates an error given its code
        /// </summary>
        /// <param name='id' type='paramArray'>id of the error to simulate</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <returns type='Soapi.Routes.ErrorsByIdRouteMap'/>

        this.id = null;

    };

    Soapi.Routes.ErrorsByIdRouteMap.routeFormat = null;

    Soapi.Routes.ErrorsByIdRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array }</param>
        /// <returns type="Soapi.Routes.ErrorsByIdRouteMap"/>
    };

    Soapi.Routes.ErrorsByIdRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(ErrorsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(ErrorsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.ErrorsByIdRouteMap"/>
    };

    Soapi.Routes.ErrorsByIdRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(ErrorsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.ErrorsByIdRouteMap"/>
    };

    makeClass(Soapi.Routes.ErrorsByIdRouteMap, 'Soapi.Routes.ErrorsByIdRouteMap');

    Soapi.RouteFactory.prototype.ErrorsById = function(id, params)
    {
        /// <summary>
        /// Simulates an error given its code
        /// </summary>
        /// <param name='id' type='paramArray'>id of the error to simulate</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array }</param>
        /// <returns type='Soapi.Routes.ErrorsByIdRouteMap'/>
    };



    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + PostsByIdCommentsRouteMap : /posts/{id}/comments Gets the comments associated with a set of posts (questions and/or answers).
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.PostsByIdCommentsRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the comments associated with a set of posts (questions and/or answers).
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.CommentSort'>one of creation (default), votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.PostsByIdCommentsRouteMap'/>

        this.id = null;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = null;

        this.pagesize = null;

        this.sort = null;

        this.todate = null;

    };

    Soapi.Routes.PostsByIdCommentsRouteMap.routeFormat = null;

    Soapi.Routes.PostsByIdCommentsRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type="Soapi.Routes.PostsByIdCommentsRouteMap"/>
    };

    Soapi.Routes.PostsByIdCommentsRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(CommentsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.PostsByIdCommentsRouteMap"/>
    };

    Soapi.Routes.PostsByIdCommentsRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.PostsByIdCommentsRouteMap"/>
    };


    makeClass(Soapi.Routes.PostsByIdCommentsRouteMap, 'Soapi.Routes.PostsByIdCommentsRouteMap');

    Soapi.RouteFactory.prototype.PostsByIdComments = function(id, params)
    {
        /// <summary>
        /// Gets the comments associated with a set of posts (questions and/or answers).
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type='Soapi.Routes.PostsByIdCommentsRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + QuestionsRouteMap : /questions Gets question summary information.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.QuestionsRouteMap = function(params)
    {
        /// <summary>
        /// Gets question summary information.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort String [activity|votes|creation|featured|hot|week|month], tagged: String, todate: Date }</param>
        /// <field name='answers' type='Boolean'>When "true", the answers to a question will be returned</field>
        /// <field name='body' type='Boolean'>When "true", a post's body will be included in the response.</field>
        /// <field name='comments' type='Boolean'>When "true", any comments on a post will be included in the response.</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.QuestionSort'>one of activity (default), votes, creation, featured, hot, week, month</field>
        /// <field name='tagged' type='String'>List of tags questions must have</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.QuestionsRouteMap'/>

        this.answers = null;

        this.body = false;

        this.comments = false;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.tagged = null;

        this.todate = null;

    };

    Soapi.Routes.QuestionsRouteMap.routeFormat = null;

    Soapi.Routes.QuestionsRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort String [activity|votes|creation|featured|hot|week|month], tagged: String, todate: Date }</param>
        /// <returns type="Soapi.Routes.QuestionsRouteMap"/>
    };

    Soapi.Routes.QuestionsRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(QuestionsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsRouteMap"/>
    };

    Soapi.Routes.QuestionsRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsRouteMap"/>
    };

    makeClass(Soapi.Routes.QuestionsRouteMap, 'Soapi.Routes.QuestionsRouteMap');

    Soapi.RouteFactory.prototype.Questions = function(params)
    {
        /// <summary>
        /// Gets question summary information.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort String [activity|votes|creation|featured|hot|week|month], tagged: String, todate: Date }</param>
        /// <returns type='Soapi.Routes.QuestionsRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + QuestionsByIdRouteMap : /questions/{id}  Gets the set questions identified in 'id' and their answers.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.QuestionsByIdRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the set questions identified in 'id' and their answers.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='answers' type='Boolean'>When "true", the answers to a question will be returned</field>
        /// <field name='body' type='Boolean'>When "true", a post's body will be included in the response.</field>
        /// <field name='comments' type='Boolean'>When "true", any comments on a post will be included in the response.</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.PostSort'>one of activity (default), views, creation, votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.QuestionsByIdRouteMap'/>

        this.id = "";

        this.answers = null;

        this.body = false;

        this.comments = false;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;


    };

    Soapi.Routes.QuestionsByIdRouteMap.routeFormat = null;

    Soapi.Routes.QuestionsByIdRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <returns type="Soapi.Routes.QuestionsByIdRouteMap"/>
    };

    Soapi.Routes.QuestionsByIdRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(QuestionsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsByIdRouteMap"/>
    };

    Soapi.Routes.QuestionsByIdRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsByIdRouteMap"/>
    };


    makeClass(Soapi.Routes.QuestionsByIdRouteMap, 'Soapi.Routes.QuestionsByIdRouteMap');

    Soapi.RouteFactory.prototype.QuestionsById = function(id, params)
    {
        /// <summary>
        /// Gets the set questions identified in 'id' and their answers.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <returns type='Soapi.Routes.QuestionsByIdRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + QuestionsByIdAnswersRouteMap : /questions/{id}/answers  Gets any answers to the question in 'id'.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.QuestionsByIdAnswersRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets any answers to the question in 'id'.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='body' type='Boolean'>When "true", a post's body will be included in the response.</field>
        /// <field name='comments' type='Boolean'>When "true", any comments on a post will be included in the response.</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.PostSort'>one of activity (default), views, creation, votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.QuestionsByIdAnswersRouteMap'/>

        this.id = "";

        this.body = false;

        this.comments = false;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;

    };

    Soapi.Routes.QuestionsByIdAnswersRouteMap.routeFormat = null;

    Soapi.Routes.QuestionsByIdAnswersRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <returns type="Soapi.Routes.QuestionsByIdAnswersRouteMap"/>
    };

    Soapi.Routes.QuestionsByIdAnswersRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(AnswersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(AnswersResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsByIdAnswersRouteMap"/>
    };

    Soapi.Routes.QuestionsByIdAnswersRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(AnswersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsByIdAnswersRouteMap"/>
    };


    makeClass(Soapi.Routes.QuestionsByIdAnswersRouteMap, 'Soapi.Routes.QuestionsByIdAnswersRouteMap');

    Soapi.RouteFactory.prototype.QuestionsByIdAnswers = function(id, params)
    {
        /// <summary>
        /// Gets any answers to the question in 'id'.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <returns type='Soapi.Routes.QuestionsByIdAnswersRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + QuestionsByIdCommentsRouteMap : /questions/{id}/comments Gets the comments associated with a set of questions.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.QuestionsByIdCommentsRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the comments associated with a set of questions.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.CommentSort'>one of creation (default), votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.QuestionsByIdCommentsRouteMap'/>

        this.id = "";

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;

    };

    Soapi.Routes.QuestionsByIdCommentsRouteMap.routeFormat = null;

    Soapi.Routes.QuestionsByIdCommentsRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type="Soapi.Routes.QuestionsByIdCommentsRouteMap"/>
    };

    Soapi.Routes.QuestionsByIdCommentsRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(CommentsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsByIdCommentsRouteMap"/>
    };

    Soapi.Routes.QuestionsByIdCommentsRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsByIdCommentsRouteMap"/>
    };


    makeClass(Soapi.Routes.QuestionsByIdCommentsRouteMap, 'Soapi.Routes.QuestionsByIdCommentsRouteMap');

    Soapi.RouteFactory.prototype.QuestionsByIdComments = function(id, params)
    {
        /// <summary>
        /// Gets the comments associated with a set of questions.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type='Soapi.Routes.QuestionsByIdCommentsRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + QuestionsByIdTimelineRouteMap : /questions/{id}/timeline Gets the timeline of events for the questions in 'id'.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.QuestionsByIdTimelineRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the timeline of events for the questions in 'id'.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.QuestionsByIdTimelineRouteMap'/>

        this.id = "";

        this.fromdate = null;

        this.page = 0;

        this.pagesize = 0;

        this.todate = null;


    };

    Soapi.Routes.QuestionsByIdTimelineRouteMap.routeFormat = null;

    Soapi.Routes.QuestionsByIdTimelineRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <returns type="Soapi.Routes.QuestionsByIdTimelineRouteMap"/>
    };

    Soapi.Routes.QuestionsByIdTimelineRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(PostTimelineResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(PostTimelineResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsByIdTimelineRouteMap"/>
    };

    Soapi.Routes.QuestionsByIdTimelineRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(PostTimelineResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsByIdTimelineRouteMap"/>
    };


    makeClass(Soapi.Routes.QuestionsByIdTimelineRouteMap, 'Soapi.Routes.QuestionsByIdTimelineRouteMap');

    Soapi.RouteFactory.prototype.QuestionsByIdTimeline = function(id, params)
    {
        /// <summary>
        /// Gets the timeline of events for the questions in 'id'.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <returns type='Soapi.Routes.QuestionsByIdTimelineRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + QuestionsUnansweredRouteMap : /questions/unanswered  Gets questions that have no upvoted answers.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.QuestionsUnansweredRouteMap = function(params)
    {
        /// <summary>
        /// Gets questions that have no upvoted answers.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], tagged: String, todate: Date }</param>
        /// <field name='answers' type='Boolean'>When "true", the answers to a question will be returned</field>
        /// <field name='body' type='Boolean'>When "true", a post's body will be included in the response.</field>
        /// <field name='comments' type='Boolean'>When "true", any comments on a post will be included in the response.</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.CommentSort'>one of creation (default), votes</field>
        /// <field name='tagged' type='String'>List of tags questions must have</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.QuestionsUnansweredRouteMap'/>

        this.answers = null;

        this.body = false;

        this.comments = false;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.tagged = null;

        this.todate = null;

    };

    Soapi.Routes.QuestionsUnansweredRouteMap.routeFormat = null;

    Soapi.Routes.QuestionsUnansweredRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], tagged: String, todate: Date }</param>
        /// <returns type="Soapi.Routes.QuestionsUnansweredRouteMap"/>
    };

    Soapi.Routes.QuestionsUnansweredRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(QuestionsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsUnansweredRouteMap"/>
    };

    Soapi.Routes.QuestionsUnansweredRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.QuestionsUnansweredRouteMap"/>
    };


    makeClass(Soapi.Routes.QuestionsUnansweredRouteMap, 'Soapi.Routes.QuestionsUnansweredRouteMap');

    Soapi.RouteFactory.prototype.QuestionsUnanswered = function(params)
    {
        /// <summary>
        /// Gets questions that have no upvoted answers.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], tagged: String, todate: Date }</param>
        /// <returns type='Soapi.Routes.QuestionsUnansweredRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + RevisionsByIdRouteMap : /revisions/{id}  Gets the post history revisions for a set of posts in 'id'.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.RevisionsByIdRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the post history revisions for a set of posts in 'id'.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>start date to list revisions from</field>
        /// <field name='todate' type='Date'>date to stop listing revisions at</field>
        /// <returns type='Soapi.Routes.RevisionsByIdRouteMap'/>

        this.id = "";

        this.fromdate = null;

        this.todate = null;


    };

    Soapi.Routes.RevisionsByIdRouteMap.routeFormat = null;

    Soapi.Routes.RevisionsByIdRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, todate: Date }</param>
        /// <returns type="Soapi.Routes.RevisionsByIdRouteMap"/>
    };

    Soapi.Routes.RevisionsByIdRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(RevisionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(RevisionsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.RevisionsByIdRouteMap"/>
    };

    Soapi.Routes.RevisionsByIdRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(RevisionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.RevisionsByIdRouteMap"/>
    };


    makeClass(Soapi.Routes.RevisionsByIdRouteMap, 'Soapi.Routes.RevisionsByIdRouteMap');

    Soapi.RouteFactory.prototype.RevisionsById = function(id, params)
    {
        /// <summary>
        /// Gets the post history revisions for a set of posts in 'id'.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, todate: Date }</param>
        /// <returns type='Soapi.Routes.RevisionsByIdRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + RevisionsByIdByRevisionGuidRouteMap : /revisions/{id}/{revisionguid} Get a specific post revision.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap = function(id, params)
    {
        /// <summary>
        /// Get a specific post revision. 
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, revisionguid: String, fromdate: Date, todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='revisionguid' type='String'>specific revision id</field>
        /// <field name='fromdate' type='Date'>start date to list revisions from</field>
        /// <field name='todate' type='Date'>date to stop listing revisions at</field>
        /// <returns type='Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap'/>

        this.id = "";

        this.revisionguid = null;

        this.fromdate = null;

        this.todate = null;


    };

    Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap.routeFormat = null;

    Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, revisionguid: String, fromdate: Date, todate: Date }</param>
        /// <returns type="Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap"/>
    };

    Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(RevisionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(RevisionsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap"/>
    };

    Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(RevisionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap"/>
    };


    makeClass(Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap, 'Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap');

    Soapi.RouteFactory.prototype.RevisionsByIdByRevisionGuid = function(id, params)
    {
        /// <summary>
        /// Get a specific post revision.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, revisionguid: String, fromdate: Date, todate: Date }</param>
        /// <returns type='Soapi.Routes.RevisionsByIdByRevisionGuidRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + SearchRouteMap : /search  Searches questions. One of intitle, tagged, or nottagged must be set. Searches that are purely text based should be routed through a third-party search engine, for performance reasons.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.SearchRouteMap = function(params)
    {
        /// <summary>
        /// Searches questions.  One of intitle, tagged, or nottagged must be set.
        ///
        ///             Searches that are purely text based should be routed through a third-party search engine,
        ///             for performance reasons.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { intitle: String, max: Object, min: Object, nottagged: String, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], tagged: String }</param>
        /// <field name='intitle' type='String'>A string that must appear verbatim in the title of a question</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='nottagged' type='String'>List of tags delimited by semi-colons that must not be on a question</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.PostSort'>one of activity (default), views, creation, votes</field>
        /// <field name='tagged' type='String'>List of tags delimited by semi-colons of which at least one must be on a question</field>
        /// <returns type='Soapi.Routes.SearchRouteMap'/>

        this.intitle = null;

        this.max = null;

        this.min = null;

        this.nottagged = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.tagged = null;
    };

    Soapi.Routes.SearchRouteMap.routeFormat = null;

    Soapi.Routes.SearchRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ intitle: String, max: Object, min: Object, nottagged: String, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], tagged: String }</param>
        /// <returns type="Soapi.Routes.SearchRouteMap"/>
    };

    Soapi.Routes.SearchRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(QuestionsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.SearchRouteMap"/>
    };

    Soapi.Routes.SearchRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.SearchRouteMap"/>
    };



    makeClass(Soapi.Routes.SearchRouteMap, 'Soapi.Routes.SearchRouteMap');

    Soapi.RouteFactory.prototype.Search = function(params)
    {
        /// <summary>
        /// Searches questions.  One of intitle, tagged, or nottagged must be set.
        ///
        ///             Searches that are purely text based should be routed through a third-party search engine,
        ///             for performance reasons.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { intitle: String, max: Object, min: Object, nottagged: String, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], tagged: String }</param>
        /// <returns type='Soapi.Routes.SearchRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + StatsRouteMap : /stats Gets various system statistics.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.StatsRouteMap = function()
    {
        /// <summary>
        /// Gets various system statistics.
        /// </summary>
        /// <returns type='Soapi.Routes.StatsRouteMap'/>


    };

    Soapi.Routes.StatsRouteMap.routeFormat = null;

    Soapi.Routes.StatsRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(StatsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(StatsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.StatsRouteMap"/>
    };

    Soapi.Routes.StatsRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(StatsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.StatsRouteMap"/>
    };


    makeClass(Soapi.Routes.StatsRouteMap, 'Soapi.Routes.StatsRouteMap');

    Soapi.RouteFactory.prototype.Stats = function()
    {
        /// <summary>
        /// Gets various system statistics.
        /// </summary>
        /// <returns type='Soapi.Routes.StatsRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + TagsRouteMap : /tags  Gets the tags on all questions, along with their usage counts.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.TagsRouteMap = function(params)
    {
        /// <summary>
        /// Gets the tags on all questions, along with their usage counts.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [popular|activity|name], todate: Date }</param>
        /// <field name='filter' type='String'>Required text in returned tags</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.TagSort'>one of popular (default), activity, name</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.TagsRouteMap'/>

        this.filter = null;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;

    };

    Soapi.Routes.TagsRouteMap.routeFormat = null;

    Soapi.Routes.TagsRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [popular|activity|name], todate: Date }</param>
        /// <returns type="Soapi.Routes.TagsRouteMap"/>
    };

    Soapi.Routes.TagsRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(TagsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(TagsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.TagsRouteMap"/>
    };

    Soapi.Routes.TagsRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(TagsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.TagsRouteMap"/>
    };


    makeClass(Soapi.Routes.TagsRouteMap, 'Soapi.Routes.TagsRouteMap');

    Soapi.RouteFactory.prototype.Tags = function(params)
    {
        /// <summary>
        /// Gets the tags on all questions, along with their usage counts.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [popular|activity|name], todate: Date }</param>
        /// <returns type='Soapi.Routes.TagsRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersRouteMap : /users Gets user summary information.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersRouteMap = function(params)
    {
        /// <summary>
        /// Gets user summary information.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [reputation|creation|name], todate: Date }</param>
        /// <field name='filter' type='String'>String that must appear in returned users' names</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.UserSort'>one of reputation (default), creation, name</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersRouteMap'/>

        this.filter = null;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;


    };

    Soapi.Routes.UsersRouteMap.routeFormat = null;

    Soapi.Routes.UsersRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [reputation|creation|name], todate: Date }</param>
        /// <returns type="Soapi.Routes.UsersRouteMap"/>
    };

    Soapi.Routes.UsersRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(UsersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(UsersResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersRouteMap"/>
    };

    Soapi.Routes.UsersRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(UsersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersRouteMap, 'Soapi.Routes.UsersRouteMap');

    Soapi.RouteFactory.prototype.Users = function(params)
    {
        /// <summary>
        /// Gets user summary information.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [reputation|creation|name], todate: Date }</param>
        /// <returns type='Soapi.Routes.UsersRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdRouteMap : /users/{id}  Gets summary information for a set of users.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets summary information for a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [reputation|creation|name], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.UserSort'>one of reputation (default), creation, name</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersByIdRouteMap'/>

        this.id = "";

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;

    };

    Soapi.Routes.UsersByIdRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [reputation|creation|name], todate: Date }</param>
        /// <returns type="Soapi.Routes.UsersByIdRouteMap"/>
    };

    Soapi.Routes.UsersByIdRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(UsersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(UsersResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdRouteMap"/>
    };

    Soapi.Routes.UsersByIdRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(UsersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersByIdRouteMap, 'Soapi.Routes.UsersByIdRouteMap');

    Soapi.RouteFactory.prototype.UsersById = function(id, params)
    {
        /// <summary>
        /// Gets summary information for a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [reputation|creation|name], todate: Date }</param>
        /// <returns type='Soapi.Routes.UsersByIdRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdAnswersRouteMap : /users/{id}/answers  Gets answer summary information for a set of users.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdAnswersRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets answer summary information for a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date  }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='body' type='Boolean'>When "true", a post's body will be included in the response.</field>
        /// <field name='comments' type='Boolean'>When "true", any comments on a post will be included in the response.</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.PostSort'>one of activity (default), views, creation, votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersByIdAnswersRouteMap'/>

        this.id = "";

        this.body = false;

        this.comments = false;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;

    };

    Soapi.Routes.UsersByIdAnswersRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdAnswersRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date  }</param>
        /// <returns type="Soapi.Routes.UsersByIdAnswersRouteMap"/>
    };

    Soapi.Routes.UsersByIdAnswersRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(AnswersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(AnswersResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdAnswersRouteMap"/>
    };

    Soapi.Routes.UsersByIdAnswersRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(AnswersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdAnswersRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersByIdAnswersRouteMap, 'Soapi.Routes.UsersByIdAnswersRouteMap');

    Soapi.RouteFactory.prototype.UsersByIdAnswers = function(id, params)
    {
        /// <summary>
        /// Gets answer summary information for a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date  }</param>
        /// <returns type='Soapi.Routes.UsersByIdAnswersRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdBadgesRouteMap : /users/{id}/badges Gets the badges that have been awarded to a set of users.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdBadgesRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the badges that have been awarded to a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <returns type='Soapi.Routes.UsersByIdBadgesRouteMap'/>

        this.id = "";


    };

    Soapi.Routes.UsersByIdBadgesRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdBadgesRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array }</param>
        /// <returns type="Soapi.Routes.UsersByIdBadgesRouteMap"/>
    };

    Soapi.Routes.UsersByIdBadgesRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(BadgesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(BadgesResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdBadgesRouteMap"/>
    };

    Soapi.Routes.UsersByIdBadgesRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(BadgesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdBadgesRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersByIdBadgesRouteMap, 'Soapi.Routes.UsersByIdBadgesRouteMap');

    Soapi.RouteFactory.prototype.UsersByIdBadges = function(id, params)
    {
        /// <summary>
        /// Gets the badges that have been awarded to a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array }</param>
        /// <returns type='Soapi.Routes.UsersByIdBadgesRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdCommentsRouteMap : /users/{id}/comments Gets the comments that a set of users have made.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdCommentsRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the comments that a set of users have made.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.CommentSort'>one of creation (default), votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersByIdCommentsRouteMap'/>

        this.id = "";

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;


    };

    Soapi.Routes.UsersByIdCommentsRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdCommentsRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type="Soapi.Routes.UsersByIdCommentsRouteMap"/>
    };

    Soapi.Routes.UsersByIdCommentsRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(CommentsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdCommentsRouteMap"/>
    };

    Soapi.Routes.UsersByIdCommentsRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdCommentsRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersByIdCommentsRouteMap, 'Soapi.Routes.UsersByIdCommentsRouteMap');

    Soapi.RouteFactory.prototype.UsersByIdComments = function(id, params)
    {
        /// <summary>
        /// Gets the comments that a set of users have made.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type='Soapi.Routes.UsersByIdCommentsRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdCommentsByToIdRouteMap : /users/{id}/comments/{toid}  Gets the comments by a set of users that mention the user with 'toid'.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdCommentsByToIdRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the comments by a set of users that mention the user with 'toid'.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, toid: Number, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='toid' type='Number'>id of the user referred to</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.CommentSort'>one of creation (default), votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersByIdCommentsByToIdRouteMap'/>

        this.id = "";

        this.toid = null;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;

    };

    Soapi.Routes.UsersByIdCommentsByToIdRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdCommentsByToIdRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, toid: Number, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type="Soapi.Routes.UsersByIdCommentsByToIdRouteMap"/>
    };

    Soapi.Routes.UsersByIdCommentsByToIdRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(CommentsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdCommentsByToIdRouteMap"/>
    };

    Soapi.Routes.UsersByIdCommentsByToIdRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdCommentsByToIdRouteMap"/>
    };

    makeClass(Soapi.Routes.UsersByIdCommentsByToIdRouteMap, 'Soapi.Routes.UsersByIdCommentsByToIdRouteMap');

    Soapi.RouteFactory.prototype.UsersByIdCommentsByToId = function(id, params)
    {
        /// <summary>
        /// Gets the comments by a set of users that mention the user with 'toid'.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, toid: Number, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type='Soapi.Routes.UsersByIdCommentsByToIdRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdFavoritesRouteMap : /users/{id}/favorites  Gets summary information for the questions that have been favorited by a set of users.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdFavoritesRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets summary information for the questions that have been favorited by a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [activity|views|creation|added|votes], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='answers' type='Boolean'>When "true", the answers to a question will be returned</field>
        /// <field name='body' type='Boolean'>When "true", a post's body will be included in the response.</field>
        /// <field name='comments' type='Boolean'>When "true", any comments on a post will be included in the response.</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.FavoritesSort'>one of activity (default), views, creation, added, votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersByIdFavoritesRouteMap'/>

        this.id = "";

        this.answers = null;

        this.body = false;

        this.comments = false;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;

    };

    Soapi.Routes.UsersByIdFavoritesRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdFavoritesRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [activity|views|creation|added|votes], todate: Date }</param>
        /// <returns type="Soapi.Routes.UsersByIdFavoritesRouteMap"/>
    };

    Soapi.Routes.UsersByIdFavoritesRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(QuestionsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdFavoritesRouteMap"/>
    };

    Soapi.Routes.UsersByIdFavoritesRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdFavoritesRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersByIdFavoritesRouteMap, 'Soapi.Routes.UsersByIdFavoritesRouteMap');

    Soapi.RouteFactory.prototype.UsersByIdFavorites = function(id, params)
    {
        /// <summary>
        /// Gets summary information for the questions that have been favorited by a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [activity|views|creation|added|votes], todate: Date }</param>
        /// <returns type='Soapi.Routes.UsersByIdFavoritesRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdMentionedRouteMap : /users/{id}/mentioned  Gets comments that are directed at a set of users.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdMentionedRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets comments that are directed at a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.CommentSort'>one of creation (default), votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersByIdMentionedRouteMap'/>

        this.id = "";

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;


    };

    Soapi.Routes.UsersByIdMentionedRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdMentionedRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type="Soapi.Routes.UsersByIdMentionedRouteMap"/>
    };

    Soapi.Routes.UsersByIdMentionedRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(CommentsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdMentionedRouteMap"/>
    };

    Soapi.Routes.UsersByIdMentionedRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(CommentsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdMentionedRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersByIdMentionedRouteMap, 'Soapi.Routes.UsersByIdMentionedRouteMap');

    Soapi.RouteFactory.prototype.UsersByIdMentioned = function(id, params)
    {
        /// <summary>
        /// Gets comments that are directed at a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional) An object map of parameters to apply to this route.  { id: String|Array, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [creation|votes], todate: Date }</param>
        /// <returns type='Soapi.Routes.UsersByIdMentionedRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdQuestionsRouteMap : /users/{id}/questions  Gets question summary information for a set of users.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdQuestionsRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets question summary information for a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='answers' type='Boolean'>When "true", the answers to a question will be returned</field>
        /// <field name='body' type='Boolean'>When "true", a post's body will be included in the response.</field>
        /// <field name='comments' type='Boolean'>When "true", any comments on a post will be included in the response.</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.PostSort'>one of activity (default), views, creation, votes</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersByIdQuestionsRouteMap'/>

        this.id = "";

        this.answers = null;

        this.body = false;

        this.comments = false;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;

    };

    Soapi.Routes.UsersByIdQuestionsRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdQuestionsRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <returns type="Soapi.Routes.UsersByIdQuestionsRouteMap"/>
    };

    Soapi.Routes.UsersByIdQuestionsRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(QuestionsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdQuestionsRouteMap"/>
    };

    Soapi.Routes.UsersByIdQuestionsRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(QuestionsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdQuestionsRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersByIdQuestionsRouteMap, 'Soapi.Routes.UsersByIdQuestionsRouteMap');

    Soapi.RouteFactory.prototype.UsersByIdQuestions = function(id, params)
    {
        /// <summary>
        /// Gets question summary information for a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, answers: Boolean, body: Boolean, comments: Boolean, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [activity|views|creation|votes], todate: Date }</param>
        /// <returns type='Soapi.Routes.UsersByIdQuestionsRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdReputationRouteMap : /users/{id}/reputation Gets information on reputation changes for a set of users.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdReputationRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets information on reputation changes for a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersByIdReputationRouteMap'/>

        this.id = "";

        this.fromdate = null;

        this.page = 0;

        this.pagesize = 0;

        this.todate = null;


    };

    Soapi.Routes.UsersByIdReputationRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdReputationRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <returns type="Soapi.Routes.UsersByIdReputationRouteMap"/>
    };

    Soapi.Routes.UsersByIdReputationRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(RepChangesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(RepChangesResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdReputationRouteMap"/>
    };

    Soapi.Routes.UsersByIdReputationRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(RepChangesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdReputationRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersByIdReputationRouteMap, 'Soapi.Routes.UsersByIdReputationRouteMap');

    Soapi.RouteFactory.prototype.UsersByIdReputation = function(id, params)
    {
        /// <summary>
        /// Gets information on reputation changes for a set of users.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <returns type='Soapi.Routes.UsersByIdReputationRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdTagsRouteMap : /users/{id}/tags Gets the tags that a set of users has participated in.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdTagsRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets the tags that a set of users has participated in.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [popular|activity|name], todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='filter' type='String'>Required text in returned tags</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the response according to the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the response according to the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.TagSort'>one of popular (default), activity, name</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersByIdTagsRouteMap'/>

        this.id = "";

        this.filter = null;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;

    };

    Soapi.Routes.UsersByIdTagsRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdTagsRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [popular|activity|name], todate: Date }</param>
        /// <returns type="Soapi.Routes.UsersByIdTagsRouteMap"/>
    };

    Soapi.Routes.UsersByIdTagsRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(TagsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(TagsResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdTagsRouteMap"/>
    };

    Soapi.Routes.UsersByIdTagsRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(TagsResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdTagsRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersByIdTagsRouteMap, 'Soapi.Routes.UsersByIdTagsRouteMap');

    Soapi.RouteFactory.prototype.UsersByIdTags = function(id, params)
    {
        /// <summary>
        /// Gets the tags that a set of users has participated in.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: String [popular|activity|name], todate: Date }</param>
        /// <returns type='Soapi.Routes.UsersByIdTagsRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersByIdTimelineRouteMap : /users/{id}/timeline Gets actions a set of users have performed.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersByIdTimelineRouteMap = function(id, params)
    {
        /// <summary>
        /// Gets actions a set of users have performed.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <field name='id' type='String|Array'>one or more unique identifiers as an Array or a semi-colon delimited string. e.g. '1;2;3'</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersByIdTimelineRouteMap'/>

        this.id = "";

        this.fromdate = null;

        this.page = 0;

        this.pagesize = 0;

        this.todate = null;

    };

    Soapi.Routes.UsersByIdTimelineRouteMap.routeFormat = null;

    Soapi.Routes.UsersByIdTimelineRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <returns type="Soapi.Routes.UsersByIdTimelineRouteMap"/>
    };

    Soapi.Routes.UsersByIdTimelineRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(UserTimelinesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(UserTimelinesResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdTimelineRouteMap"/>
    };

    Soapi.Routes.UsersByIdTimelineRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(UserTimelinesResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersByIdTimelineRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersByIdTimelineRouteMap, 'Soapi.Routes.UsersByIdTimelineRouteMap');

    Soapi.RouteFactory.prototype.UsersByIdTimeline = function(id, params)
    {
        /// <summary>
        /// Gets actions a set of users have performed.
        /// </summary>
        /// <param name='id' type='Number|String|Array'>One or more id values as an Array e.g. [1,2] or parameter array. e.g. 1, 2, ....</param>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { id: String|Array, fromdate: Date, page: Number, pagesize: Number, todate: Date }</param>
        /// <returns type='Soapi.Routes.UsersByIdTimelineRouteMap'/>
    };




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + UsersModeratorsRouteMap : /users/moderators  Gets all the moderators on this site.
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    Soapi.Routes.UsersModeratorsRouteMap = function(params)
    {
        /// <summary>
        /// Gets all the moderators on this site.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [reputation|creation|name], todate: Date }</param>
        /// <field name='filter' type='String'>String that must appear in returned users' names</field>
        /// <field name='fromdate' type='Date'>JavaScript Date indicating the minimum creation date on a returned item.</field>
        /// <field name='max' type='Object'>Maximum of the range to include in the current sort.</field>
        /// <field name='min' type='Object'>Minimum of the range to include in the current sort.</field>
        /// <field name='order' type='Soapi.Domain.SortOrder'>one of desc (default), asc</field>
        /// <field name='page' type='Number'>The pagination offset for the current collection.  Affected by the specified pagesize.</field>
        /// <field name='pagesize' type='Number'>The number of collection results to display during pagination.  Should be between 1 and 100 inclusive.</field>
        /// <field name='sort' type='Soapi.Domain.UserSort'>one of reputation (default), creation, name</field>
        /// <field name='todate' type='Date'>JavaScript Date indicating the maximum creation date on a returned item.</field>
        /// <returns type='Soapi.Routes.UsersModeratorsRouteMap'/>

        this.filter = null;

        this.fromdate = null;

        this.max = null;

        this.min = null;

        this.order = null;

        this.page = 0;

        this.pagesize = 0;

        this.sort = null;

        this.todate = null;



    };

    Soapi.Routes.UsersModeratorsRouteMap.routeFormat = null;

    Soapi.Routes.UsersModeratorsRouteMap.prototype.applyParameters = function(params)
    {
        /// <summary>
        /// Applies parameters to this object.
        /// </summary>
        /// <param name="params" type="Object">{ filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [reputation|creation|name], todate: Date }</param>
        /// <returns type="Soapi.Routes.UsersModeratorsRouteMap"/>
    };

    Soapi.Routes.UsersModeratorsRouteMap.prototype.getPagedResponse = function(success, error, pageCallback, timeout, context)
    {
        /// <summary>
        /// Retrieves results all pages of a result. Default page=1, pagesize=100
        /// </summary>
        /// <param name="success" type="Function">func(UsersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) optional function to recieve errors</param>
        /// <param name="pageCallback" type="Function">func(UsersResponse, context) optional return true to cancel paging operation.</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object">An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersModeratorsRouteMap"/>
    };

    Soapi.Routes.UsersModeratorsRouteMap.prototype.getResponse = function(success, error, timeout, context)
    {
        /// <summary>
        /// Retrieves results
        /// </summary>
        /// <param name="success" type="Function">func(UsersResponse, context) function to recieve the results</param>
        /// <param name="error" type="Function">func(ErrorsResponse, context) (optional) function to recieve errors</param>
        /// <param name="timeout" type="Number">(optional) Default 3000 (3 seconds)</param>
        /// <param name="context" type="Object" required="false">(optional) An arbitrary user defined value/object</param>
        /// <returns type="Soapi.Routes.UsersModeratorsRouteMap"/>
    };


    makeClass(Soapi.Routes.UsersModeratorsRouteMap, 'Soapi.Routes.UsersModeratorsRouteMap');

    Soapi.RouteFactory.prototype.UsersModerators = function(params)
    {
        /// <summary>
        /// Gets all the moderators on this site.
        /// </summary>
        /// <param name="params" type="Object">(optional)  An object map of parameters to apply to this route. { filter: String, fromdate: Date, max: Object, min: Object, order: String [desc|asc], page: Number, pagesize: Number, sort: [reputation|creation|name], todate: Date }</param>
        /// <returns type='Soapi.Routes.UsersModeratorsRouteMap'/>
    };


})();