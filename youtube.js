var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vedios = /** @class */ (function () {
    function Vedios(vedioTitle, videoId, videoUploadDate, videoLength, views, likes, disLikes, comments, uploadedBy) {
        var _this = this;
        this.vedioTitle = vedioTitle;
        this.videoId = videoId;
        this.videoUploadDate = videoUploadDate;
        this.views = views;
        this.likes = likes;
        this.disLikes = disLikes;
        this.comments = comments;
        this.uploadedBy = uploadedBy;
        this.getVedioTitles = function () {
            return _this.vedioTitle;
        };
        this.getVedioId = function () {
            return _this.videoId;
        };
        this.getVedioUploadDate = function () {
            return _this.videoUploadDate;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getUploadedBy = function () {
            return _this.uploadedBy;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.disLikes;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.vedioTitle = vedioTitle;
        this.comments = comments;
        this.disLikes = disLikes;
        this.likes = likes;
        this.uploadedBy = uploadedBy;
        this.videoId = videoId;
        this.videoUploadDate = videoUploadDate;
        this.views = views;
    }
    return Vedios;
}());
var YoutubeChannel = /** @class */ (function (_super) {
    __extends(YoutubeChannel, _super);
    function YoutubeChannel(channelName, subscriberNo, totalVedio, vedioTitle, videoId, videoUploadDate, videoLength, views, likes, disLikes, comments, uploadedBy) {
        var _this = _super.call(this, vedioTitle, videoId, videoUploadDate, videoLength, views, likes, disLikes, comments, uploadedBy) || this;
        _this.channelName = channelName;
        _this.subscriberNo = subscriberNo;
        _this.totalVedio = totalVedio;
        _this.vedioTitle = vedioTitle;
        _this.videoId = videoId;
        _this.videoUploadDate = videoUploadDate;
        _this.views = views;
        _this.likes = likes;
        _this.disLikes = disLikes;
        _this.comments = comments;
        _this.uploadedBy = uploadedBy;
        _this.channelName = channelName;
        _this.subscriberNo = subscriberNo;
        _this.totalVedio = totalVedio;
        return _this;
    }
    YoutubeChannel.prototype.getchannelName = function () {
        return this.channelName;
    };
    YoutubeChannel.prototype.getsubscriberNo = function () {
        return this.subscriberNo;
    };
    YoutubeChannel.prototype.gettotalVedio = function () {
        return this.totalVedio;
    };
    return YoutubeChannel;
}(Vedios));
var videoData = new YoutubeChannel("killerManz", 1234, 5, "MeriJaan", 8787, "19/17/2018", "12:03", 144334, 1300, 200, ['it is a beautiful movie', 'Holy crap'], "Yogen");
console.log("The vedio Data is");
console.log("Channel Name of video -------------->" + videoData.getchannelName());
console.log("Number of Videos in channel--------->" + videoData.gettotalVedio());
console.log("Video Title------------------------->" + videoData.getVedioTitles());
console.log("Video Comments --------------------->" + videoData.getComments());
console.log("Number of Likes -------------------->" + videoData.getLikes());
console.log("Number of Dislikes------------------" + videoData.getDislikes());
