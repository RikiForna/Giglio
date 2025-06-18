"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("language-select");
  const texts = {
    it: {
      home: "Home",
      features: "Caratteristiche",
      pricing: "Prezzi",
      contact: "Contatti",
      selectLang: "Seleziona la lingua:",
      wineTitle: "Vino Bianco",
      alcoholContent: "V32",
      ingredients: "Ingredienti",
      ingredient: "Ingrediente",
      quantity: "Descrizione",
      grapes: "UVA",
      must: "MOSTO CONCENTRATO RETTIFICATO",
      preservatives: "CONSERVANTI E ANTIOSSIDANTI",
      meta: "Metabisolfito di Potassio",
      stabilizers: "AGENTI STABILIZZANTI",
      rules: "REGOLATORI DELL'ACIDITA'",
      lieviti: "Lieviti per Vinificazione",
      nutrition: "Valori Nutrizionali (per 100ml)",
      component: "Componente",
      value: "Valore",
      energy: "Energia",
      fats: "Grassi",
      saturatedFats: "di cui grassi saturi",
      carbohydrates: "Carboidrati",
      sugars: "di cui zuccheri",
      proteins: "Proteine",
      fibers: "Fibre",
      salt: "Sale",
      gomma: "Gomma arabica e/o Pollasportato di potassio",
      recycling: "Raccolta Differenziata",
      material: "Materiale",
      code: "Codice",
      disposal: "Raccolta Differenziata",
      bottiglia: "Bottiglia",
      cap: "Tappo Corona",
      capsule: "Capsula",
      tagliandino: "Tagliandino",
      woodenCage: "Gabbia di legno",
      plasticCage: "Gabbia di plastica",
      disclaimer: "VERIFICARE LE DISPOSIZIONI DEL PROPRIO COMUNE",
      plastica: "Plastica",
      carta: "Carta",
      disposal_dedicated: "Raccolta Differenziata Dedicata",
      glass: "Vetro",
      aluminum: "Alluminio",
      aluminumALU41: "ALU41 (ALLUMINIO)",
      glassGL71: "GL71 vetro a rendere",
      plasticLDPE4: "LDPE4 (PLASTICA)",
      paperPAP20: "PAP20 (CARTA)",
      woodFOR50: "FOR50 (LEGNO)",
      metals: "CFE91 Metalli",
      metal: "Metallo",
      instructionText: "Separa le componenti e conferiscile nel modo corretto",
    },
    en: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      selectLang: "Select Language:",
      wineTitle: "White Wine",
      alcoholContent: "V32",
      ingredients: "Ingredients",
      ingredient: "Ingredient",
      quantity: "Description",
      grapes: "GRAPES",
      must: "RECIFIED CONCENTRATED MUST",
      meta: "Potassium Metabisulfite",
      rules: "ACIDITY REGULATORS",
      lieviti: "Wine Yeasts",
      gomma: "Gum Arabic and/or Potassium Pollate",
      preservatives: "PRESERVATIVES AND ANTIOXIDANTS",
      stabilizers: "STABILIZING AGENTS",
      nutrition: "Nutritional Values (per 100ml)",
      component: "Component",
      value: "Value",
      energy: "Energy",
      fats: "Fats",
      saturatedFats: "of which saturated fats",
      carbohydrates: "Carbohydrates",
      sugars: "of which sugars",
      proteins: "Proteins",
      fibers: "Fibers",
      salt: "Salt",
      recycling: "Recycling",
      material: "Material",
      code: "Code",
      disposal: "Recycling",
      bottiglia: "Bottle",
      cap: "Crown Cap",
      capsule: "Capsule",
      tagliandino: "Tag",
      woodenCage: "Wooden Cage",
      plasticCage: "Plastic Cage",
      disclaimer: "CHECK YOUR LOCAL REGULATIONS",
      plastica: "Plastic",
      carta: "Paper",
      disposal_dedicated: "Dedicated Recycling",
      glass: "Glass",
      aluminum: "Aluminum",
      aluminumALU41: "ALU41 (ALUMINUM)",
      glassGL71: "GL71 glass to return",
      plasticLDPE4: "LDPE4 (PLASTIC)",
      paperPAP20: "PAP20 (PAPER)",
      woodFOR50: "FOR50 (WOOD)",
      metals: " CFE91 Metals",
      metal: " Metal",
      instructionText: "Separate the components and dispose of them correctly",
    },
  };

  function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (texts[lang][key]) {
        element.innerText = texts[lang][key];
      }
    });
    localStorage.setItem("selectedLanguage", lang);
  }

  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  languageSelect.value = savedLang;
  changeLanguage(savedLang);

  languageSelect.addEventListener("change", function () {
    changeLanguage(this.value);
  });
});
