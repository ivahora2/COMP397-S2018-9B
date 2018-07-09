module objects{
    export class Button extends objects.GameObject{

        public isCentered: boolean;
    /**
     * 
     * @param imagePath 
     * @param x 
     * @param y 
     * @param isCentered 
     */
        constructor(imagePath:string,x:number=0,y:number=0,isCentered:boolean=false){
            super(imagePath);
            this.isCentered = isCentered;

            if(isCentered){
                this.regX = this.halfWidth;
                this.regY =  this.halfHeight;
            }

            this.x= x;
            this.y = y;


            this.on("mousover",this._MouseOver);
            this.on("mouseout",this._MouseOut);
        }

        private _MouseOver():void{
    this.alpha = 0.7;
        }

        private _MouseOut():void{
            this.alpha = 1;
        }
        public Update():void {

        }

        public Start():void {


        }
        public Reset():void{

        }
    }
}