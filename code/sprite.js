/**
 * Base Sprite Class
 * 
 * @param HTMLImageElement img
 */
function Sprite(img) {

    this.texture = new Image();
    
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.angle = 0;

    this.loaded = false;

    var self = this;

    this.load = function(src) {

        self.texture.src = src;
        self.texture.onload = function() {
            self.w = self.texture.width;
            self.h = self.texture.height;
            self.loaded = true;
        }

    }

    this.draw = function(canvas) {

        if (self.loaded) {

            canvas.translate(self.x, self.y);
            canvas.rotate(self.angle);
            canvas.drawImage(self.texture, -self.w / 2, -self.h / 2);
            canvas.rotate(-self.angle);
            canvas.translate(-self.x, -self.y);

        }

    }

    if (img) this.load(img);

}