module objects {
    export class label extends createjs.Text {

        //member variables
        public isCentered: boolean;
        public height: number;
        public width: number;
        public halfHeight: number;
        public halfWidth: number;


        //constructor
        /**
         * 
         * @param text 
         * @param fontSize 
         * @param fontFamily 
         * @param fontColor 
         * @param x 
         * @param y 
         * @param isCentered 
         */
        constructor(text: string, fontSize: string, fontFamily: string, fontColor: string, x: number=0, y: number=0, isCentered: boolean=false) {
            super(text, fontSize + " " + fontFamily, fontColor);
            this.isCentered = false;

            this._initialize();

            if (this.isCentered) {
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }
            this.x = x;
            this.y = y;

        }


        private _initialize(): void {
            this.width = this.getBounds().width;
            this.halfWidth = this.getBounds().width * 0.5;
            this.height = this.getBounds().height;
            this.halfHeight = this.getBounds().height * 0.5;
        }

        public Update() {

        }

        public Start() {


        }

        public Main() {

        }
    }
}