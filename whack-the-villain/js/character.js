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
  constructor(name = "Aunt May", imagePath = "whack-the-villain/images/aunt-may.png") {
    super(name, imagePath, false);
  }
}

class Villain extends Character {
  constructor(name, imagePath) {
    super(name, imagePath, true);
  }
}
