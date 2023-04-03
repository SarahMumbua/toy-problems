function calculateNetSalary() {
    //prompt user to enter the basicSalary and store it in a variale called basicSalary
    const basicSalary = prompt("Enter basic salary: ");
     //prompt user to enter the benefits and store it in a variale called benefits
    const benefits = prompt("Enter benefits: ");
  //store the NHIF_RATES in an array of objects called NHIF_RATES
    const KRA_TAX_RATES = [
      { max: 24000, rate: 0.1 },
      { max: 40667, rate: 0.15 },
      { max: 57333, rate: 0.20 },
      { max: 74000, rate: 0.25 },
      { max: 90767, rate: 0.30 },
      { max: Infinity, rate: 0.35 },
    ];
   //store the NHIF_RATES in an array of objects called NHIF_RATES
    const NHIF_RATES = [
      { min: 0, max: 5999, rate: 150 },
      { min: 6000, max: 7999, rate: 300 },
      { min: 8000, max: 11999, rate: 400 },
      { min: 12000, max: 14999, rate: 500 },
      { min: 15000, max: 19999, rate: 600 },
      { min: 20000, max: 24999, rate: 750 },
      { min: 25000, max: 29999, rate: 850 },
      { min: 30000, max: 34999, rate: 900 },
      { min: 35000, max: 39999, rate: 950 },
      { min: 40000, max: 44999, rate: 1000 },
      { min: 45000, max: 49999, rate: 1100 },
      { min: 50000, max: 59999, rate: 1200 },
      { min: 60000, max: 69999, rate: 1300 },
      { min: 70000, max: 79999, rate: 1400 },
      { min: 80000, max: 89999, rate: 1500 },
      { min: 90000, max: 99999, rate: 1600 },
      { min: 100000, max: Infinity, rate: 1700 },
    ];
  
    const NSSF_RATE = 0.06;
  
    let grossSalary = parseFloat(basicSalary) + parseFloat(benefits);
  //Calculate the PAYEE From various SalaryRange. Loop through the Gross Salary range and Calculate the PAYEE
    let tax = 0;
    for (let i = 0; i < KRA_TAX_RATES.length; i++) {
      const rate = KRA_TAX_RATES[i].rate;
      if (grossSalary > KRA_TAX_RATES[i].max) {
        tax += (KRA_TAX_RATES[i].max - (i > 0 ? KRA_TAX_RATES[i - 1].max : 0)) * rate;
      } else {
        tax += (grossSalary - (i > 0 ? KRA_TAX_RATES[i - 1].max : 0)) * rate;
        break;
      }
    }
  
     //Loop through the NHIF rates and calculate the  NHIF Deduction for each salaryRange
    let nhifDeductions = 0;
    for (let i = 0; i < NHIF_RATES.length; i++) {
      if (grossSalary >= NHIF_RATES[i].min && grossSalary <= NHIF_RATES[i].max) {
        nhifDeductions = NHIF_RATES[i].rate;
        break;
      }
    }
  
    //calculate the NSSFdeductions and netsalary
    const nssfDeductions = grossSalary * NSSF_RATE;
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
  
  
//display the Gross salary , Payee, Nhif, Nssf and Net salary
  alert(`
    Gross Salary: ${grossSalary}
    PAYEE: ${Math.ceil(tax)}
    NHIF Deductions: ${nhifDeductions}
    NSSF Deductions: ${nssfDeductions}
    Net Salary: ${netSalary}
  `);

}