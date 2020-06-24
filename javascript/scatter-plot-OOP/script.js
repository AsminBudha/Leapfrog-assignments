class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.element = document.createElement('div');
    this.color = '#235789';
    this.selected = false;
  }

  styleElement() {
    const pointStyles = {
      height: '20px',
      width: '20px',
      borderRadius: '50%',
      backgroundColor: this.color,
      position: 'absolute',
      top: this.y - 10 + 'px',
      left: this.x - 10 + 'px',
      zIndex: 2,
    };

    Object.assign(this.element.style, pointStyles);
  }

  setColor() {
    this.color = '#C1292E';
  }

  attachMouseListeners() {
    const hoverDiv = document.createElement('div');
    const hoverStyles = {
      height: '40px',
      width: '40px',
      borderRadius: '50%',
      backgroundColor: this.color + '99',
      position: 'absolute',
      top: this.y - 20 + 'px',
      left: this.x - 20 + 'px',
      zIndex: 1,
    };

    Object.assign(hoverDiv.style, hoverStyles);

    this.element.addEventListener('mouseenter', () => {
      document.body.appendChild(hoverDiv);
    });

    this.element.addEventListener('mouseleave', () => {
      document.body.removeChild(hoverDiv);
    });
  }

  attachClickListener() {
    this.element.addEventListener('click', () => {
      if (!this.selected) {
        this.setColor();
        this.render();
      }

      this.selected = true;
    });
  }

  render() {
    this.styleElement();
    this.attachClickListener();
    this.attachMouseListeners();
    document.body.appendChild(this.element);
  }
}

function getRandomNumberInRange(min, max) {
  return Math.random() * (max - min);
}

let points = Array(100)
  .fill(null)
  .map((x) => ({
    x: getRandomNumberInRange(40, window.innerWidth),
    y: getRandomNumberInRange(40, window.innerHeight),
  }));

points.forEach(({ x, y }) => {
  let plot = new Point(x, y);
  plot.render();
});
