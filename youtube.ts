class Vedios{
    constructor(protected vedioTitle:string,protected videoId : number,protected videoUploadDate:String,videoLength :string,protected views : number, protected likes : number,protected disLikes : number,protected comments :string [],protected uploadedBy : string)
 {
     this.vedioTitle=vedioTitle;
     this.comments=comments;
     this.disLikes=disLikes;
     this.likes=likes;
     this.uploadedBy=uploadedBy;
     this.videoId=videoId;
     this.videoUploadDate=videoUploadDate;
     this.views=views;
                     }
   getVedioTitles=()=>{
       return this.vedioTitle;
                              }
   getVedioId=()=>{
     return this.videoId;
                         }
 
   getVedioUploadDate=()=>{
     return this.videoUploadDate;
                         }
 getViews=()=>{
     return this.views;
 }
 getUploadedBy=()=>{
     return this.uploadedBy;
 }
 getLikes=()=>{
     return this.likes;
 }
 
 getDislikes=()=>{
     return this.disLikes;
 }
 getComments=()=>{
     return this.comments;
 }
 
 }
 class YoutubeChannel extends Vedios{
 
 
     constructor(protected channelName:string,protected subscriberNo:number,protected totalVedio:number,protected vedioTitle:string,protected videoId : number,protected videoUploadDate:string,videoLength :string,protected views : number, protected likes : number,protected disLikes : number,protected comments :string [],protected uploadedBy : string){
         super(vedioTitle,videoId,videoUploadDate,videoLength,views,likes,disLikes,comments,uploadedBy);
         
         this.channelName=channelName;
         this.subscriberNo=subscriberNo;
         this.totalVedio=totalVedio;
         
             }
 
    getchannelName(){
        return this.channelName;
    }
    getsubscriberNo(){
        return this.subscriberNo;
    }
    gettotalVedio(){
        return this.totalVedio;
    }
 
 }
 
 let videoData= new YoutubeChannel("killerManz",1234,5,"MeriJaan",8787,"19/17/2018","12:03",144334,1300,200,['it is a beautiful movie','Holy crap'],"Yogen");
 console.log("The vedio Data is")
 console.log("Channel Name of video -------------->"+videoData.getchannelName())
 console.log("Number of Videos in channel--------->"+ videoData.gettotalVedio())
 console.log("Video Title------------------------->"+ videoData.getVedioTitles())
 console.log("Video Comments --------------------->"+ videoData.getComments())
 console.log("Number of Likes -------------------->"+videoData.getLikes())
 console.log("Number of Dislikes------------------"+videoData.getDislikes())
 
 