class Swift {
  constructor(config) {
    this.element = document.querySelector(config.selector);
    this.slides = [];
    this.slidesHeight = 0;
    this.slidesWidth = 0;
  }

  setDimensions() {
    window.addEventListener('load', () => {
      this.slidesWidth = parseInt(window.getComputedStyle(this.element).width);
      this.slidesHeight = parseInt(
        window.getComputedStyle(this.element).height
      );
    });
  }

  getSlideDomElements() {
    const sections = [...this.element.querySelectorAll('section')];
    const childSections = sections.filter(
      (section) => section.parentNode.className === 'slides-container'
    );

    childSections.forEach((section) => {
      const elements = section.querySelectorAll('section');
      if (elements.length) this.slides.push([...elements]);
      else this.slides.push([section]);
    });
  }

  init() {
    this.getSlideDomElements();
    this.setDimensions();
  }
}
