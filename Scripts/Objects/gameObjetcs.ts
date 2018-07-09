module objects{
    export abstract class GameObject extends createjs.Bitmap{

        public height: number;
        public width: number;
        public halfHeight: number;
        public halfWidth: number;


        constructor(imagePath){
            super(imagePath);

            this._initialize();
        }

        private _initialize(): void {
            this.width = this.getBounds().width;
            this.halfWidth = this.getBounds().width * 0.5;
            this.height = this.getBounds().height;
            this.halfHeight = this.getBounds().height * 0.5;
        }

        
        public Update():void {

        }

        public Start():void {


        }
        public Reset():void{

        }
    }
}