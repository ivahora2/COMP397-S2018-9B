//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var helloLabel;
    var startButton;
    function Start() {
        console.log("%c Start Function", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        // This is where all the magic happens
        Main();
    }
    function Update() {
        //helloLabel.rotation += 5;
        stage.update();
    }
    function Main() {
        console.log("%c Main Function", "font-style:italic; font-size:16px; color:blue;");
        // this is the Label
        helloLabel = new objects.label("Hello, World!", "60px", "Consolas", "#000000", 240, 240, true);
        startButton = new objects.Button("/Assets/images/StartButton.png", 100, 100, true);
        stage.addChild(startButton);
        stage.addChild(helloLabel);
        helloLabel.addEventListener("click", function () {
            console.log("clicked");
            helloLabel.text = "Clicked!";
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map