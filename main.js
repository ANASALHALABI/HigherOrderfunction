const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


  ///////////////filter/////////////////


  //////filter older than 21Y
//   const canMarid = ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
//   })

//   const canMarid = ages.filter(age => age>=21);

//   console.log(canMarid);

///////// filter retail company 


//   const RetailCompanyis = companies.filter(company => company.category==="Retail") 

//   console.log(RetailCompanyis);

///////// filter company work more than 10Y 

    // const StrongCompany = companies.filter(company => (company.end - company.start > 10));
    // console.log(StrongCompany);

  ///////////////Map/////////////////

  //////// retur company name 
//   const names= companies.map(function(company){
//     return company.name;
//   });
//   const names= companies.map(function(company){
//      return `${company.name}  [${company.start} - ${company.end}]`;
//    });
//   console.log(names)


  ///////////////sort/////////////////

//////////// sort company by start year 

//   const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
//   });

//   console.log(sortedCompanies);


//////////// sort ages

  ///// تصاعدي
// const age = ages.sort((a, b) => a - b);

// console.log(age);

  ///// تنازلي 
// const age = ages.sort((a, b) => b - a);

// console.log(age);



  ///////////////reduse/////////////////

  ////// get total companies years 

  const TotalYears = companies.reduce(function(total, company){
    return total + (company.end - company.start);
  }, 0);

  console.log(TotalYears);
