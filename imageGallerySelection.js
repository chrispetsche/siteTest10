function adjustGalleryInteractiveStyling(old, current)
{
    $(old).css({
        "border" : "none",
        "box-shadow" : "none"
    });

    $(current).css({
        "border" : "rgb(255, 0, 230) 1px solid",
        "box-shadow" : "inset 0 0 0.5em 0 var(--clr-exe-neon), 0 0 0.5em 0 var(--clr-exe-neon)"
    });
}

// ********* template section for working a gallery on each page -- !!copy and paste needed parts below!! ********* //

// create a new id for each clickable image in a gallery!!
var testLeft_Gallery_PreviousSelectedThumbnail = '#testButton_Left1';
$("#testButton_Left1").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('gallery-display-right').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-right").innerHTML = "This is a new caption for thumbnail 1";

    adjustGalleryInteractiveStyling(testLeft_Gallery_PreviousSelectedThumbnail, '#testButton_Left1');
    testLeft_Gallery_PreviousSelectedThumbnail = '#testButton_Left1';
});
$("#testButton_Left2").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('gallery-display-right').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-right").innerHTML = "This is a new caption for thumbnail 2";

    adjustGalleryInteractiveStyling(testLeft_Gallery_PreviousSelectedThumbnail, '#testButton_Left2');
    testLeft_Gallery_PreviousSelectedThumbnail = '#testButton_Left2';
});
$("#testButton_Left3").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('gallery-display-right').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-right").innerHTML = "This is a new caption for thumbnail 3";

    adjustGalleryInteractiveStyling(testLeft_Gallery_PreviousSelectedThumbnail, '#testButton_Left3');
    testLeft_Gallery_PreviousSelectedThumbnail = '#testButton_Left3';
});
$("#testButton_Left4").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('gallery-display-right').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-right").innerHTML = "This is a new caption for thumbnail 4";

    adjustGalleryInteractiveStyling(testLeft_Gallery_PreviousSelectedThumbnail, '#testButton_Left4');
    testLeft_Gallery_PreviousSelectedThumbnail = '#testButton_Left4';
});
$("#testButton_Left5").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('gallery-display-right').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-right").innerHTML = "This is a new caption for thumbnail 5";

    adjustGalleryInteractiveStyling(testLeft_Gallery_PreviousSelectedThumbnail, '#testButton_Left5');
    testLeft_Gallery_PreviousSelectedThumbnail = '#testButton_Left5';
});
$("#testButton_Left6").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('gallery-display-right').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-right").innerHTML = "This is a new caption for thumbnail 6";

    adjustGalleryInteractiveStyling(testLeft_Gallery_PreviousSelectedThumbnail, '#testButton_Left6');
    testLeft_Gallery_PreviousSelectedThumbnail = '#testButton_Left6';
});


var testRight_Gallery_PreviousSelectedThumbnail = '#testButton_Right1';
$("#testButton_Right1").click(function(){
    document.getElementById('gallery-display-left').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-left").innerHTML = "This is a new caption for image 1";

    adjustGalleryInteractiveStyling(testRight_Gallery_PreviousSelectedThumbnail, '#testButton_Right1');
    testRight_Gallery_PreviousSelectedThumbnail = '#testButton_Right1';
});
$("#testButton_Right2").click(function(){
    document.getElementById('gallery-display-left').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-left").innerHTML = "This is a new caption for image 2";

    adjustGalleryInteractiveStyling(testRight_Gallery_PreviousSelectedThumbnail, '#testButton_Right2');
    testRight_Gallery_PreviousSelectedThumbnail = '#testButton_Right2';
});
$("#testButton_Right3").click(function(){
    document.getElementById('gallery-display-left').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-left").innerHTML = "This is a new caption for image 3";

    adjustGalleryInteractiveStyling(testRight_Gallery_PreviousSelectedThumbnail, '#testButton_Right3');
    testRight_Gallery_PreviousSelectedThumbnail = '#testButton_Right3';
});
$("#testButton_Right4").click(function(){
    document.getElementById('gallery-display-left').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-left").innerHTML = "This is a new caption for image 4";

    adjustGalleryInteractiveStyling(testRight_Gallery_PreviousSelectedThumbnail, '#testButton_Right4');
    testRight_Gallery_PreviousSelectedThumbnail = '#testButton_Right4';
});
$("#testButton_Right5").click(function(){
    document.getElementById('gallery-display-left').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-left").innerHTML = "This is a new caption for image 5";

    adjustGalleryInteractiveStyling(testRight_Gallery_PreviousSelectedThumbnail, '#testButton_Right5');
    testRight_Gallery_PreviousSelectedThumbnail = '#testButton_Right5';
});
$("#testButton_Right6").click(function(){
    document.getElementById('gallery-display-left').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-left").innerHTML = "This is a new caption for image 6";

    adjustGalleryInteractiveStyling(testRight_Gallery_PreviousSelectedThumbnail, '#testButton_Right6');
    testRight_Gallery_PreviousSelectedThumbnail = '#testButton_Right6';
});



var testCenter_Gallery_PreviousSelectedThumbnail = '#testButton_Center1';
$("#testButton_Center1").click(function(){
    document.getElementById('gallery-display-center').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-center").innerHTML = "This is a new caption for image 1";

    adjustGalleryInteractiveStyling(testCenter_Gallery_PreviousSelectedThumbnail, '#testButton_Center1');
    testCenter_Gallery_PreviousSelectedThumbnail = '#testButton_Center1';
});
$("#testButton_Center2").click(function(){
    document.getElementById('gallery-display-center').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-center").innerHTML = "This is a new caption for image 2";

    adjustGalleryInteractiveStyling(testCenter_Gallery_PreviousSelectedThumbnail, '#testButton_Center2');
    testCenter_Gallery_PreviousSelectedThumbnail = '#testButton_Center2';
});
$("#testButton_Center3").click(function(){
    document.getElementById('gallery-display-center').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-center").innerHTML = "This is a new caption for image 3";

    adjustGalleryInteractiveStyling(testCenter_Gallery_PreviousSelectedThumbnail, '#testButton_Center3');
    testCenter_Gallery_PreviousSelectedThumbnail = '#testButton_Center3';
});
$("#testButton_Center4").click(function(){
    document.getElementById('gallery-display-center').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-center").innerHTML = "This is a new caption for image 4";

    adjustGalleryInteractiveStyling(testCenter_Gallery_PreviousSelectedThumbnail, '#testButton_Center4');
    testCenter_Gallery_PreviousSelectedThumbnail = '#testButton_Center4';
});
$("#testButton_Center5").click(function(){
    document.getElementById('gallery-display-center').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-center").innerHTML = "This is a new caption for image 5";

    adjustGalleryInteractiveStyling(testCenter_Gallery_PreviousSelectedThumbnail, '#testButton_Center5');
    testCenter_Gallery_PreviousSelectedThumbnail = '#testButton_Center5';
});
$("#testButton_Center6").click(function(){
    document.getElementById('gallery-display-center').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_OpeningScreen_Fitted.png';
    document.getElementById("gallery-text-center").innerHTML = "This is a new caption for image 6";

    adjustGalleryInteractiveStyling(testCenter_Gallery_PreviousSelectedThumbnail, '#testButton_Center6');
    testCenter_Gallery_PreviousSelectedThumbnail = '#testButton_Center6';
});
// ********* template section for working a gallery on each page -- !!copy and paste needed parts above!! ********* //


// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //
        // !!!!!!!!!!!!!! ************* LuckyStrikeSanFrancisco~VirtualTourDemo: Below ************* !!!!!!!!!!!!!! //
// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //


// !!!!!!!!!!!!!! ************* Contributions : Pre-Dev Gallery 1 ************* !!!!!!!!!!!!!! //
var LSVirtualTour_PreDev_Gallery1_Gallery_PreviousSelectedThumbnail = '#LSVirtualTour_PreDev_Gallery1_Left1';
$("#LSVirtualTour_PreDev_Gallery1_Left1").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('LSVirtualTour_PreDev_Gallery1-Display').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_MainEntrance_Fitted.png';
    document.getElementById("LSVirtualTour_PreDev_Gallery1-Text").innerHTML = "This is a new caption for thumbnail 1";

    adjustGalleryInteractiveStyling(LSVirtualTour_PreDev_Gallery1_Gallery_PreviousSelectedThumbnail, '#LSVirtualTour_PreDev_Gallery1_Left1');
    LSVirtualTour_PreDev_Gallery1_Gallery_PreviousSelectedThumbnail = '#LSVirtualTour_PreDev_Gallery1_Left1';
});
$("#LSVirtualTour_PreDev_Gallery1_Left2").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('LSVirtualTour_PreDev_Gallery1-Display').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_StructuralAssets_Fitted.png';
    document.getElementById("LSVirtualTour_PreDev_Gallery1-Text").innerHTML = "This is a new caption for thumbnail 2";

    adjustGalleryInteractiveStyling(LSVirtualTour_PreDev_Gallery1_Gallery_PreviousSelectedThumbnail, '#LSVirtualTour_PreDev_Gallery1_Left2');
    LSVirtualTour_PreDev_Gallery1_Gallery_PreviousSelectedThumbnail = '#LSVirtualTour_PreDev_Gallery1_Left2';
});
$("#LSVirtualTour_PreDev_Gallery1_Left3").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('LSVirtualTour_PreDev_Gallery1-Display').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_LargeAsset_Fitted.png';
    document.getElementById("LSVirtualTour_PreDev_Gallery1-Text").innerHTML = "This is a new caption for thumbnail 3";

    adjustGalleryInteractiveStyling(LSVirtualTour_PreDev_Gallery1_Gallery_PreviousSelectedThumbnail, '#LSVirtualTour_PreDev_Gallery1_Left3');
    LSVirtualTour_PreDev_Gallery1_Gallery_PreviousSelectedThumbnail = '#LSVirtualTour_PreDev_Gallery1_Left3';
});

// !!!!!!!!!!!!!! ************* Contributions : Pre-Dev Gallery 2 ************* !!!!!!!!!!!!!! //
var LSVirtualTour_PreDev_Gallery2_Gallery_PreviousSelectedThumbnail = '#LSVirtualTour_PreDev_Gallery2_Right1';
$("#LSVirtualTour_PreDev_Gallery2_Right1").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('LSVirtualTour_PreDev_Gallery2-Display').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_BallReturnAndGamePedestal_Fitted.png';
    document.getElementById("LSVirtualTour_PreDev_Gallery2-Text").innerHTML = "This is a new caption for thumbnail 1";

    adjustGalleryInteractiveStyling(LSVirtualTour_PreDev_Gallery2_Gallery_PreviousSelectedThumbnail, '#LSVirtualTour_PreDev_Gallery2_Right1');
    LSVirtualTour_PreDev_Gallery2_Gallery_PreviousSelectedThumbnail = '#LSVirtualTour_PreDev_Gallery2_Right1';
});
$("#LSVirtualTour_PreDev_Gallery2_Right2").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('LSVirtualTour_PreDev_Gallery2-Display').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_MainGames_Fitted.png';
    document.getElementById("LSVirtualTour_PreDev_Gallery2-Text").innerHTML = "This is a new caption for thumbnail 2";

    adjustGalleryInteractiveStyling(LSVirtualTour_PreDev_Gallery2_Gallery_PreviousSelectedThumbnail, '#LSVirtualTour_PreDev_Gallery2_Right2');
    LSVirtualTour_PreDev_Gallery2_Gallery_PreviousSelectedThumbnail = '#LSVirtualTour_PreDev_Gallery2_Right2';
});
$("#LSVirtualTour_PreDev_Gallery2_Right3").click(function(){
    // also create id's for display that will be changing and its caption!!!
    document.getElementById('LSVirtualTour_PreDev_Gallery2-Display').src='img/Projects/LuckyStrike_VirtualTour/LuckyStrikeVirtualTour_PaperMeasurements_GamesAndAssets1_Fitted.png';
    document.getElementById("LSVirtualTour_PreDev_Gallery2-Text").innerHTML = "This is a new caption for thumbnail 3";

    adjustGalleryInteractiveStyling(LSVirtualTour_PreDev_Gallery2_Gallery_PreviousSelectedThumbnail, '#LSVirtualTour_PreDev_Gallery2_Right3');
    LSVirtualTour_PreDev_Gallery2_Gallery_PreviousSelectedThumbnail = '#LSVirtualTour_PreDev_Gallery2_Right3';
});


// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //
        // !!!!!!!!!!!!!! ************* LuckyStrikeSanFrancisco~VirtualTourDemo: Above ************* !!!!!!!!!!!!!! //
// !!!!!!!!!!!!!! ******************************************************************************************** !!!!!!!!!!!!!! //