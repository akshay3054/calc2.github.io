let luxury ={
  fabric : 1500,
  foam : 2500,
  paddingFoam : 440,
  fevicol : 300,
  staplerPin : 120,
  nails : 80,
  thread : 80,
  jute : 250,
  bottomFabric : 60,
  plywood : 1800,
  packinigMaterialCost : 500,
  additionalCarpenterPayments : 1000,
  helper : 500,
  inboundLogistics : 500,
  outboundLogistics : 800,
  labour : 1200,
  salesInstallation : 1200,
  partnerMaterialMargin : 0,
  ucComissionLabour : 15,
  ucComissionMaterial : 15
}

let ultimateComfortable = {
  fabric : 900,
  foam : 1671,
  paddingFoam : 440,
  fevicol : 300,
  staplerPin : 120,
  nails : 80,
  thread : 80,
  jute : 250,
  bottomFabric : 60,
  plywood : 1800,
  packinigMaterialCost : 500,
  additionalCarpenterPayments : 1000,
  helper : 500,
  inboundLogistics : 500,
  outboundLogistics : 800,
  labour : 1200,
  salesInstallation : 1200,
  partnerMaterialMargin : 0,
  ucComissionLabour : 15,
  ucComissionMaterial : 15
}

let premium = {
  fabric : 900,
  foam : 1671,
  paddingFoam : 440,
  fevicol : 300,
  staplerPin : 120,
  nails : 80,
  thread : 80,
  jute : 250,
  bottomFabric : 60,
  plywood : 1800,
  packinigMaterialCost : 500,
  additionalCarpenterPayments : 1000,
  helper : 500,
  inboundLogistics : 500,
  outboundLogistics : 800,
  labour : 1200,
  salesInstallation : 1200,
  partnerMaterialMargin : 0,
  ucComissionLabour : 15,
  ucComissionMaterial : 15
}

let standard ={
  fabric : 600,
  foam : 454,
  paddingFoam : 440,
  fevicol : 300,
  staplerPin : 120,
  nails : 80,
  thread : 80,
  jute : 250,
  bottomFabric : 60,
  plywood : 1800,
  packinigMaterialCost : 500,
  additionalCarpenterPayments : 1000,
  helper : 500,
  inboundLogistics : 500,
  outboundLogistics : 800,
  labour : 1200,
  salesInstallation : 1200,
  partnerMaterialMargin : 0,
  ucComissionLabour : 15,
  ucComissionMaterial : 15
}

let budget = {
  fabric : 400,
  foam : 454,
  paddingFoam : 440,
  fevicol : 300,
  staplerPin : 120,
  nails : 80,
  thread : 80,
  jute : 150,
  bottomFabric : 60,
  plywood : 1800,
  packinigMaterialCost : 500,
  additionalCarpenterPayments : 1000,
  helper : 500,
  inboundLogistics : 500,
  outboundLogistics : 800,
  labour : 1000,
  salesInstallation : 1000,
  partnerMaterialMargin : 0,
  ucComissionLabour : 20,
  ucComissionMaterial : 20
}

function calculate(){

  let materialFabricNeeded = parseFloat(document.getElementById("mof").value);
  let inchFour = parseFloat(document.getElementById("sThick").value); // 2
  let inchTwo = parseFloat(document.getElementById("nofs").value); // 3
  let inchOne = parseFloat(document.getElementById("pThick").value); // 4
  let inchHalf = parseFloat(document.getElementById("nfsp").value); //5

  let seatFoam = 4*inchFour
  let paddingFoam = inchTwo*2 + inchOne * 1 + inchHalf *0.5;

  let fevicol=2,
  staplerPin=1,
  nails =1,
  thread = 1,
  jute = 2,
  bottomFabric = 2,
  packinigMaterialCost = 1,
  plywood = materialFabricNeeded/8*3;

  let additionalCarpenterPayments =0;
  let helper = 0;
  let inboundLogistics =1;
  let outboundLogistics = 1;
  let salesInstallation = 0.25
  let labour = 1+(materialFabricNeeded/5-1)*0.25

  helper = labour

  if(materialFabricNeeded != 0 ){
    let data = 2 + (materialFabricNeeded/5-1);
    fevicol = data;
    jute = data;
    bottomFabric = data
  }

  //Repair Cost

  //Luxury Calculation

  let luxMatRep =
  materialFabricNeeded*luxury.fabric+
  seatFoam * luxury.foam +
  paddingFoam * luxury.paddingFoam +
  fevicol * luxury.fevicol +
  staplerPin * luxury.staplerPin+
  nails * luxury.nails +
  thread * luxury.thread +
  jute * luxury.jute +
  bottomFabric * luxury.bottomFabric

  let luxPatRep =
  labour * luxury.labour+
  salesInstallation * luxury.salesInstallation

  let luxRepTotal =
  luxMatRep + luxPatRep +
  (luxMatRep * luxury.ucComissionMaterial / 100) +
  (luxPatRep * luxury.ucComissionLabour / 100)

  document.getElementById("luxrepair").innerHTML = Math.round(luxRepTotal)

  //Premium Fabric Calculation

  let preMatRep =
  materialFabricNeeded*premium.fabric+
  seatFoam * premium.foam +
  paddingFoam * premium.paddingFoam +
  fevicol * premium.fevicol +
  staplerPin * premium.staplerPin+
  nails * premium.nails +
  thread * premium.thread +
  jute * premium.jute +
  bottomFabric * premium.bottomFabric

  let prePatRep =
  labour * premium.labour+
  salesInstallation * premium.salesInstallation

  let preRepTotal =
  preMatRep + prePatRep +
  (preMatRep * premium.ucComissionMaterial / 100) +
  (prePatRep * premium.ucComissionLabour / 100)

  document.getElementById("pfrepair").innerHTML = Math.round(preRepTotal)

  //Extra Comfortable Calculation

  let ecMatRep =
  materialFabricNeeded*ultimateComfortable.fabric+
  seatFoam * ultimateComfortable.foam +
  paddingFoam * ultimateComfortable.paddingFoam +
  fevicol * ultimateComfortable.fevicol +
  staplerPin * ultimateComfortable.staplerPin+
  nails * ultimateComfortable.nails +
  thread * ultimateComfortable.thread +
  jute * ultimateComfortable.jute +
  bottomFabric * ultimateComfortable.bottomFabric

  let ecPatRep =
  labour * ultimateComfortable.labour+
  salesInstallation * ultimateComfortable.salesInstallation

  let ecRepTotal =
  ecMatRep + ecPatRep +
  (ecMatRep * ultimateComfortable.ucComissionMaterial / 100) +
  (ecPatRep * ultimateComfortable.ucComissionLabour / 100)

  document.getElementById("ecomfrepair").innerHTML = Math.round(ecRepTotal)

  // Standard Calculation

  let standMatRep =
  materialFabricNeeded*standard.fabric+
  seatFoam * standard.foam +
  paddingFoam * standard.paddingFoam +
  fevicol * standard.fevicol +
  staplerPin * standard.staplerPin+
  nails * standard.nails +
  thread * standard.thread +
  jute * standard.jute +
  bottomFabric * standard.bottomFabric

  let standPatRep =
  labour * standard.labour+
  salesInstallation * standard.salesInstallation

  let standRepTotal =
  standMatRep + standPatRep +
  (standMatRep * standard.ucComissionMaterial / 100) +
  (standPatRep * standard.ucComissionLabour / 100)

  document.getElementById("standrepair").innerHTML = Math.round(standRepTotal)

  // Budget Calculation

  let budMatRep =
  materialFabricNeeded*budget.fabric+
  seatFoam * budget.foam +
  paddingFoam * budget.paddingFoam +
  fevicol * budget.fevicol +
  staplerPin * budget.staplerPin+
  nails * budget.nails +
  thread * budget.thread +
  jute * budget.jute +
  bottomFabric * budget.bottomFabric

  let budPatRep =
  labour * budget.labour+
  salesInstallation * budget.salesInstallation

  let budRepTotal =
  budMatRep + budPatRep +
  (budMatRep * budget.ucComissionMaterial / 100) +
  (budPatRep * budget.ucComissionLabour / 100)


  document.getElementById("budrepair").innerHTML = Math.round(budRepTotal);



  //New Price Calculation

  //Luxury

  let luxAddLabCost =
  additionalCarpenterPayments * luxury.additionalCarpenterPayments +
  helper * luxury.helper

  let luxLogisCost =
  inboundLogistics * luxury.inboundLogistics +
  outboundLogistics * luxury.outboundLogistics;

  let luxPatNew =
  labour * luxury.labour * 1.15 +
  salesInstallation * luxury.salesInstallation;

  let luxTotal =
  luxAddLabCost +
  luxLogisCost +
  luxPatNew +
  (luxPatRep * luxury.ucComissionLabour /100) +
  (luxMatRep * luxury.ucComissionMaterial / 100);

  luxMatRep +=
  plywood * luxury.plywood +
  packinigMaterialCost * luxury.packinigMaterialCost

  luxTotal += luxMatRep

  document.getElementById("luxnew").innerHTML = Math.round(luxTotal);

  //Premium Fiber

  let preAddLabCost =
  additionalCarpenterPayments * premium.additionalCarpenterPayments +
  helper * premium.helper

  let preLogisCost =
  inboundLogistics * premium.inboundLogistics +
  outboundLogistics * premium.outboundLogistics;

  let prePatNew =
  labour * premium.labour * 1.15 +
  salesInstallation * premium.salesInstallation;

  let preTotal =
  preAddLabCost +
  preLogisCost +
  prePatNew +
  (prePatRep * premium.ucComissionLabour /100) +
  (preMatRep * premium.ucComissionMaterial / 100);

  preMatRep +=
  plywood * premium.plywood +
  packinigMaterialCost * premium.packinigMaterialCost

  preTotal += preMatRep

  document.getElementById("pfnew").innerHTML = Math.round(preTotal);

  //Extra Comfortable

  let ecAddLabCost =
  additionalCarpenterPayments * ultimateComfortable.additionalCarpenterPayments +
  helper * ultimateComfortable.helper

  let ecLogisCost =
  inboundLogistics * ultimateComfortable.inboundLogistics +
  outboundLogistics * ultimateComfortable.outboundLogistics;

  let ecPatNew =
  labour * ultimateComfortable.labour * 1.15 +
  salesInstallation * ultimateComfortable.salesInstallation;

  let ecTotal =
  ecAddLabCost +
  ecLogisCost +
  ecPatNew +
  (ecPatRep * ultimateComfortable.ucComissionLabour /100) +
  (ecMatRep * ultimateComfortable.ucComissionMaterial / 100);

  ecMatRep +=
  plywood * ultimateComfortable.plywood +
  packinigMaterialCost * ultimateComfortable.packinigMaterialCost

  ecTotal += ecMatRep

  document.getElementById("ecomfnew").innerHTML = Math.round(ecTotal);

  //Standard

  let standAddLabCost =
  additionalCarpenterPayments * standard.additionalCarpenterPayments +
  helper * standard.helper

  let standLogisCost =
  inboundLogistics * standard.inboundLogistics +
  outboundLogistics * standard.outboundLogistics;

  let standPatNew =
  labour * standard.labour * 1.15 +
  salesInstallation * standard.salesInstallation;

  let standTotal =
  standAddLabCost +
  standLogisCost +
  standPatNew +
  (standPatRep * standard.ucComissionLabour /100) +
  (standMatRep * standard.ucComissionMaterial / 100);

  standMatRep +=
  plywood * standard.plywood +
  packinigMaterialCost * standard.packinigMaterialCost

  standTotal += standMatRep

  document.getElementById("standnew").innerHTML = Math.round(standTotal);

  //Budget
  let budAddLabCost =
  additionalCarpenterPayments * budget.additionalCarpenterPayments +
  helper * budget.helper

  let budLogisCost =
  inboundLogistics * budget.inboundLogistics +
  outboundLogistics * budget.outboundLogistics;

  let budPatNew =
  labour * budget.labour * 1.15 +
  salesInstallation * budget.salesInstallation;

  let budTotal =
  budAddLabCost +
  budLogisCost +
  budPatNew +
  (budPatRep * budget.ucComissionLabour /100) +
  (budMatRep * budget.ucComissionMaterial / 100);

  budMatRep +=
  plywood * budget.plywood +
  packinigMaterialCost * budget.packinigMaterialCost

  budTotal += budMatRep

  document.getElementById("budnew").innerHTML = Math.round(budTotal);

}
