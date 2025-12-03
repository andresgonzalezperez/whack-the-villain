class Character {
  constructor(name, imagePath, isVillain) {
    this.name = name;
    this.imagePath = imagePath;
    this.isVillain = isVillain;
  }

  createElement() {
    const img = document.createElement("img");
    img.src = this.imagePath;
    img.alt = this.name;
    img.classList.add("character");
    return img;
  }
}

class AuntMay extends Character {
  constructor() {
    super("Aunt May", "images/aunt-may.png", false);
  }
}

class Villain extends Character {
  constructor(name, imagePath) {
    super(name, imagePath, true);
  }
}

