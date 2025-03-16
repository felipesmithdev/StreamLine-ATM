const labels = [
    '2025-03-01', '2025-03-02', '2025-03-03', '2025-03-04',
    '2025-03-05', '2025-03-06', '2025-03-07', '2025-03-08',
    '2025-03-09', '2025-03-10', '2025-03-11', '2025-03-12',
    '2025-03-13', '2025-03-14', '2025-03-15', '2025-03-16'
  ];

 
     const dataline = {
       labels: labels,
       datasets: [{
         label: 'CPU',
         backgroundColor: 'rgb(255, 165, 0)',
         borderColor: 'rgb(255, 165, 0)',
         data: [65, 70, 85, 72, 75, 66, 60, 70,54, 43, 75, 78, 63, 70, 72, 68],
          }
       ,
    //    {
     
    //      label: 'Mémoria',
    //      backgroundColor: 'rgb(0, 123, 255)',
    //         borderColor: 'rgb(0, 123, 255)',
    //         data: [60, 65, 70, 80, 66, 63, 59, 73, 65, 50, 72, 64, 65, 68, 70, 66],
    //    } ,
      
    //    {
     
    //     label: 'Disco',
    //     backgroundColor: 'rgb(153, 50, 204)',
    //     borderColor: 'rgb(153, 50, 204)',
    //     data: [50, 55, 65, 60, 65, 68, 66, 55, 48, 10, 50, 62, 65, 62, 64, 61],
    //   }
      ]
     };
   
   
     const configline = {
      type: 'line',
      data: dataline,
      options: {
          plugins: {
              annotation: {
                  annotations: {
                      limiteMaxCPU: {
                          type: 'line',
                          yMin: 80,
                          yMax: 80,
                          borderColor: 'rgb(255, 165, 0)',
                          borderWidth: 2,
                          borderDash: [10, 5],
                      },
                      limiteMinCPU: {
                          type: 'line',
                          yMin: 40,
                          yMax: 40,
                          borderColor: 'rgb(255, 165, 0)',
                          borderWidth: 2,
                          borderDash: [10, 5],
                        
    },
    //                   limiteMaxMemoria: {
    //                       type: 'line',
    //                       yMin: 75,
    //                       yMax: 75,
    //                       borderColor: 'rgb(0, 123, 255)',
    //                       borderWidth: 2,
    //                       borderDash: [10, 5],
    //                   },
    //                   limiteMinMemoria: {
    //                       type: 'line',
    //                       yMin: 50,
    //                       yMax: 50,
    //                       borderColor: 'rgb(0, 123, 255)',
    //                       borderWidth: 2,
    //                       borderDash: [10, 5],
    //                   },
    //                   limiteMaxDisco: {
    //                       type: 'line',
    //                       yMin: 70,
    //                       yMax: 70,
    //                       borderColor: 'rgb(153, 50, 204)',
    //                       borderWidth: 2,
    //                       borderDash: [10, 5],
    //                   },
    //                   limiteMinDisco: {
    //                       type: 'line',
    //                       yMin: 30,
    //                       yMax: 30,
    //                       borderColor: 'rgb(153, 50, 204)',
    //                       borderWidth: 2,
    //                       borderDash: [10, 5],
    // }
  }
}
    }
    }
  };

     const myChart = new Chart(
        document.getElementById('myChart'),
        configline
      );


      function sair(){
        window.location  = "./login.html"
       
      }